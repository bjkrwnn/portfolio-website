import React, { useContext, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';

const SPEED = 90; // auto-scroll speed in px per second (cards drift to the right)
const DRAG_THRESHOLD = 6; // px of movement before a press counts as a drag, not a click
const STEP_MS = 450; // duration of one arrow step
const RESUME_AFTER_MS = 2500; // auto-scroll pause after a manual step or a touch drag

// Endless row of cards that drifts by itself and can be dragged (finger or mouse)
// or stepped with the arrow buttons / arrow keys. `children` must contain the card
// list twice, so half of the track width is one full loop.
const ProjectMarquee = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const trackRef = useRef(null);
  const s = useRef({ pos: 0, hover: false, drag: null, moved: false, tween: null, resumeAt: 0 }).current;

  const loopWidth = () => (trackRef.current ? trackRef.current.scrollWidth / 2 : 0);
  const wrap = (p) => {
    const w = loopWidth();
    return w ? ((p % w) + w) % w : 0;
  };

  useEffect(() => {
    let frame;
    let last = performance.now();
    // performance.now() everywhere (not the rAF timestamp), so it matches step() and resumeAt
    const tick = () => {
      const now = performance.now();
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      if (s.tween) {
        const t = Math.min((now - s.tween.start) / STEP_MS, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        s.pos = wrap(s.tween.from + (s.tween.to - s.tween.from) * eased);
        if (t === 1) s.tween = null;
      } else if (!s.hover && !s.drag && now >= s.resumeAt) {
        s.pos = wrap(s.pos + SPEED * dt);
      }
      if (trackRef.current) trackRef.current.style.transform = `translate3d(${s.pos - loopWidth()}px, 0, 0)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // dir +1 moves the cards right (previous), -1 moves them left (next)
  const step = (dir) => {
    const cards = trackRef.current?.children;
    if (!cards || cards.length < 2) return;
    const cardStep = cards[1].offsetLeft - cards[0].offsetLeft;
    const from = s.tween ? s.tween.to : s.pos;
    s.tween = { from, to: from + dir * cardStep, start: performance.now() };
    s.resumeAt = performance.now() + RESUME_AFTER_MS;
  };

  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    s.drag = { x: e.clientX, pos: s.pos, active: false, touch: e.pointerType === 'touch' };
    s.moved = false;
    s.tween = null;
  };

  const onPointerMove = (e) => {
    if (!s.drag) return;
    const dx = e.clientX - s.drag.x;
    if (!s.drag.active && Math.abs(dx) > DRAG_THRESHOLD) {
      // Capture only once it is a real drag, so plain clicks still reach the card links
      s.drag.active = true;
      s.moved = true;
      trackRef.current.setPointerCapture(e.pointerId);
      trackRef.current.classList.add('dragging');
    }
    if (s.drag.active) s.pos = wrap(s.drag.pos + dx);
  };

  const endDrag = () => {
    if (!s.drag) return;
    if (s.drag.touch) s.resumeAt = performance.now() + RESUME_AFTER_MS;
    s.drag = null;
    trackRef.current?.classList.remove('dragging');
  };

  // A drag must not also open the card that was under the pointer
  const onClickCapture = (e) => {
    if (s.moved) {
      e.preventDefault();
      e.stopPropagation();
      s.moved = false;
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); step(-1); }
  };

  const arrowClass = `absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${theme === 'dark' ? 'bg-zinc-900/90 border border-zinc-700 text-gray-200 hover:border-red-500 hover:text-red-400' : 'bg-white/95 border border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-600'}`;

  return (
    <div
      className="relative"
      onMouseEnter={() => { s.hover = true; }}
      onMouseLeave={() => { s.hover = false; endDrag(); }}
      onKeyDown={onKeyDown}
    >
      <div className="marquee py-6">
        <div
          ref={trackRef}
          className="marquee-track"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
          onDragStart={(e) => e.preventDefault()}
        >
          {children}
        </div>
      </div>

      <button type="button" onClick={() => step(1)} className={`${arrowClass} left-1 sm:-left-3`} aria-label={language === 'en' ? 'Previous projects' : 'Előző projektek'}>
        <FaChevronLeft />
      </button>
      <button type="button" onClick={() => step(-1)} className={`${arrowClass} right-1 sm:-right-3`} aria-label={language === 'en' ? 'Next projects' : 'Következő projektek'}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProjectMarquee;
