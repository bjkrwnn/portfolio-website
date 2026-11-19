import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaMobileAlt, FaUtensils, FaRunning, FaChartLine, FaMoon } from 'react-icons/fa';

const IMG = '/portfolio-website/images/biteloop';

// Kept deliberately high-level: the app's own ideas are not described here
const content = {
  en: {
    eyebrow: 'My own app',
    status: 'In development · since October 2026',
    description:
      'BiteLoop is a mobile app I am building on my own. It helps people keep track of their meals, weight and workouts in one place, with a clean and easy-to-use interface.',
    features: [
      { icon: <FaUtensils />, text: 'Food diary with calories and nutrients' },
      { icon: <FaRunning />, text: 'Workouts and daily activity' },
      { icon: <FaChartLine />, text: 'Clear statistics about your progress' },
      { icon: <FaMoon />, text: 'Light and dark mode' },
    ],
    platforms: 'Android & iOS',
    screens: ['Diary', 'Nutrition', 'Dark mode', 'Statistics'],
  },
  hu: {
    eyebrow: 'Saját alkalmazás',
    status: 'Fejlesztés alatt · 2026 októbere óta',
    description:
      'A BiteLoop egy saját fejlesztésű mobilalkalmazás. Segít egy helyen követni az étkezést, a testsúlyt és az edzéseket, letisztult, könnyen használható felülettel.',
    features: [
      { icon: <FaUtensils />, text: 'Étkezésnapló kalóriával és tápanyagokkal' },
      { icon: <FaRunning />, text: 'Edzések és napi aktivitás' },
      { icon: <FaChartLine />, text: 'Átlátható statisztikák a fejlődésről' },
      { icon: <FaMoon />, text: 'Világos és sötét mód' },
    ],
    platforms: 'Android & iOS',
    screens: ['Napló', 'Tápanyagok', 'Sötét mód', 'Statisztika'],
  },
};

// Left to right as they appear in the fanned stack. statusBar matches the top edge of each
// screenshot so the notch sits on a status bar; layout sets how far back each phone sits.
const screenshots = [
  { file: 'nutrition.png', screen: 1, statusBar: '#f8fafc', layout: 'z-10 -rotate-6 translate-y-8 scale-90' },
  { file: 'diary.png', screen: 0, statusBar: 'linear-gradient(90deg, #2d7fff, #625fff)', layout: 'z-30 -rotate-1' },
  { file: 'diary-dark.png', screen: 2, statusBar: 'linear-gradient(90deg, #2d7fff, #625fff)', layout: 'z-20 rotate-3 translate-y-4 scale-95' },
  { file: 'statistics.png', screen: 3, statusBar: '#f8fafc', layout: 'z-0 rotate-[8deg] translate-y-12 scale-[0.85]' },
];

const PhoneFrame = ({ src, statusBar, label, layout, first }) => (
  <figure
    title={label}
    className={`relative flex-shrink-0 transition-transform duration-300 hover:z-40 hover:-translate-y-3 ${first ? '' : '-ml-20 sm:-ml-24 lg:-ml-28'} ${layout}`}
  >
    <div className="relative w-36 sm:w-44 lg:w-52 rounded-[2rem] bg-zinc-950 p-[7px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] ring-1 ring-zinc-700/60">
      <div className="overflow-hidden rounded-[1.6rem]" style={{ background: statusBar }}>
        {/* Status bar with the camera notch */}
        <div className="relative h-6">
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-14 h-[13px] rounded-full bg-zinc-950" />
        </div>
        <img
          src={src}
          alt={label}
          loading="lazy"
          draggable={false}
          className="block w-full aspect-[780/1600] object-cover object-top select-none"
        />
      </div>
    </div>
  </figure>
);

const BiteLoopShowcase = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = content[language];
  const isDark = theme === 'dark';

  return (
    <div className={`mb-20 rounded-2xl border overflow-hidden ${isDark ? 'border-zinc-800 bg-zinc-900/60' : 'border-orange-100 bg-white shadow-sm'}`}>
      <div className="p-6 sm:p-10">
        {/* Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-6">
          <div>
            <p className={`text-sm font-semibold uppercase tracking-widest mb-4 ${isDark ? 'text-red-400' : 'text-orange-600'}`}>
              {t.eyebrow}
            </p>
            <div className="flex items-center gap-4 mb-5">
              {/* App icon, shaped like a home-screen icon */}
              <img
                src={`${IMG}/icon.png`}
                alt=""
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[22%] p-1 shadow-md ${isDark ? 'bg-white' : 'bg-white ring-1 ring-orange-100'}`}
                draggable={false}
              />
              <img src={`${IMG}/logo.png`} alt="BiteLoop" className="h-10 sm:h-12 w-auto" draggable={false} />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm ${isDark ? 'bg-zinc-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'}`}>
                <FaMobileAlt /> {t.platforms}
              </span>
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm ${isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
                <span className="w-2 h-2 rounded-full bg-current" /> {t.status}
              </span>
            </div>

            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.description}
            </p>
          </div>

          <ul className="space-y-3 md:pt-10">
            {t.features.map((feature, index) => (
              <li key={index} className={`flex items-center gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm ${isDark ? 'bg-zinc-800 text-red-400' : 'bg-orange-100 text-orange-600'}`}>
                  {feature.icon}
                </span>
                {feature.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Phones fanned out behind each other; hovering one brings it to the front */}
        <div className="flex justify-center items-start pt-10 pb-14">
          {screenshots.map((shot, index) => (
            <PhoneFrame
              key={shot.file}
              src={`${IMG}/${shot.file}`}
              statusBar={shot.statusBar}
              label={t.screens[shot.screen]}
              layout={shot.layout}
              first={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiteLoopShowcase;
