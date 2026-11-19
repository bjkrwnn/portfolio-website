import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaArrowDown, FaArrowRight, FaGithub, FaDiscord, FaCode, FaVideo, FaPalette, FaBullhorn, FaMobileAlt } from 'react-icons/fa';
import { DISCORD_URL } from '../data/links';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const { translations, language } = useContext(LanguageContext);
  const isDark = theme === 'dark';
  const en = language === 'en';

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const focusAreas = [
    { icon: <FaCode />, label: 'Frontend', color: isDark ? 'bg-red-500/15 text-red-300 border-red-500/30' : 'bg-red-50 text-red-700 border-red-200' },
    { icon: <FaVideo />, label: en ? 'Video editing' : 'Videószerkesztés', color: isDark ? 'bg-orange-500/15 text-orange-300 border-orange-500/30' : 'bg-orange-50 text-orange-700 border-orange-200' },
    { icon: <FaPalette />, label: 'Design', color: isDark ? 'bg-pink-500/15 text-pink-300 border-pink-500/30' : 'bg-pink-50 text-pink-700 border-pink-200' },
    { icon: <FaBullhorn />, label: en ? 'Media' : 'Média', color: isDark ? 'bg-amber-500/15 text-amber-300 border-amber-500/30' : 'bg-amber-50 text-amber-700 border-amber-200' },
  ];

  const stats = [
    { value: '3+', label: en ? 'years of experience' : 'év tapasztalat' },
    { value: '10+', label: en ? 'completed projects' : 'befejezett projekt' },
    { value: '4', label: en ? 'focus areas' : 'szakterület' },
    { value: 'HU · EN', label: en ? 'languages' : 'nyelvek' },
  ];

  const socials = [
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/bjkrwnn' },
    { icon: <FaDiscord />, label: 'Discord', url: DISCORD_URL },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      {/* Colour glows and a faint grid behind the content */}
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full blur-3xl ${isDark ? 'bg-red-600/20' : 'bg-red-300/30'}`} />
        <div className={`absolute top-20 -right-40 w-[34rem] h-[34rem] rounded-full blur-3xl ${isDark ? 'bg-orange-500/15' : 'bg-orange-300/40'}`} />
        <div className={`absolute -bottom-40 left-1/3 w-[30rem] h-[30rem] rounded-full blur-3xl ${isDark ? 'bg-fuchsia-600/10' : 'bg-pink-200/40'}`} />
        <div
          className={`absolute inset-0 ${isDark ? 'opacity-[0.06]' : 'opacity-[0.25]'}`}
          style={{
            backgroundImage: `linear-gradient(${isDark ? '#fff' : '#fdba74'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#fdba74'} 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: introduction */}
          <div className="text-center lg:text-left">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-md text-sm font-medium border ${isDark ? 'border-green-500/30 bg-green-500/10 text-green-300' : 'border-green-200 bg-green-50 text-green-700'}`}>
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
              </span>
              {en ? 'Open to new projects' : 'Nyitott vagyok új projektekre'}
            </span>

            <p className={`text-lg font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {en ? "Hi, I'm" : 'Szia, a nevem'}
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 leading-[1.05]">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Rowenna </span>
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">B.</span>
            </h1>

            <h2 className={`text-2xl md:text-3xl font-semibold mb-5 ${isDark ? 'text-red-300' : 'text-orange-600'}`}>
              {translations[language].heroTitle}
            </h2>

            <p className={`text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {translations[language].heroSubtitle}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
              {focusAreas.map((area) => (
                <span key={area.label} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium ${area.color}`}>
                  {area.icon} {area.label}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 to-orange-500 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-shadow"
              >
                {en ? 'See my work' : 'Munkáim megtekintése'}
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className={`inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold border transition-colors ${isDark ? 'border-zinc-700 bg-zinc-900/60 text-gray-200 hover:border-red-500 hover:text-red-300' : 'border-orange-200 bg-white text-gray-800 hover:border-orange-500 hover:text-orange-600'}`}
              >
                {translations[language].contact}
              </button>
            </div>

            <div className="flex justify-center lg:justify-start items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 rounded-xl border transition-colors ${isDark ? 'border-zinc-800 bg-zinc-900/60 text-gray-300 hover:text-red-300 hover:border-red-500/50' : 'border-orange-100 bg-white text-gray-700 hover:text-orange-600 hover:border-orange-300'}`}
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: profile card with numbers */}
          <div className="relative max-w-md w-full mx-auto">
            <div className="rounded-3xl p-[1.5px] bg-gradient-to-br from-red-500 via-orange-400 to-fuchsia-500 shadow-2xl shadow-red-900/20">
              <div className={`rounded-3xl p-7 sm:p-8 ${isDark ? 'bg-[#161117]' : 'bg-white'}`}>
                <div className="flex items-center gap-4 mb-7">
                  <img
                    src="/portfolio-website/images/logo.png"
                    alt="Rowenna B. logo"
                    className={`w-16 h-16 object-contain ${isDark ? 'drop-shadow-[0_0_10px_rgba(248,113,113,0.6)]' : ''}`}
                  />
                  <div>
                    <p className="text-xl font-bold">Rowenna B.</p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {en ? 'Frontend · Video · Design' : 'Frontend · Videó · Design'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className={`rounded-2xl p-4 ${isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-orange-50/70 border border-orange-100'}`}>
                      <p className="text-2xl font-extrabold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Current work, links to the BiteLoop showcase */}
            <button
              onClick={() => scrollTo('projects')}
              className={`group mt-4 w-full flex items-center gap-4 rounded-2xl p-4 text-left border transition-colors ${isDark ? 'bg-zinc-900/80 border-zinc-800 hover:border-violet-500/50' : 'bg-white border-orange-100 hover:border-violet-300'}`}
            >
              <span className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-blue-500 to-violet-500">
                <FaMobileAlt />
              </span>
              <span className="flex-1">
                <span className={`block text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {en ? 'Currently building' : 'Jelenleg ezen dolgozom'}
                </span>
                <span className="block font-semibold">
                  {en ? 'BiteLoop – my own mobile app' : 'BiteLoop – saját mobilalkalmazás'}
                </span>
              </span>
              <FaArrowRight className={`transition-transform group-hover:translate-x-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex justify-center mt-12">
          <button
            onClick={() => scrollTo('about')}
            className={`p-2 rounded-full transition-transform hover:translate-y-1 ${isDark ? 'text-gray-500 hover:text-red-400' : 'text-gray-400 hover:text-orange-600'}`}
            aria-label="Scroll down"
          >
            <FaArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
