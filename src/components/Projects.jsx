import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { projects as projectData } from '../data/projects';
import BiteLoopShowcase from './BiteLoopShowcase';
import SectionHeader from './SectionHeader';
import ProjectMarquee from './ProjectMarquee';
import { FaArrowRight, FaVideo, FaPalette, FaCode, FaPlay } from 'react-icons/fa';

// Repeat the projects until one loop is wider than a large screen
const MIN_LOOP_ITEMS = 8;
const getLoopItems = (projects) => {
  const items = [];
  while (items.length < MIN_LOOP_ITEMS) items.push(...projects);
  return items;
};

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const { language, translations } = useContext(LanguageContext);

  const projectCategories = [
    {
      type: 'frontend',
      icon: <FaCode />,
      title: translations[language].frontend,
      projects: [
        { 
          id: 1, 
          title: translations[language].portfolioProjects,
          tech: 'React, Tailwind, Vite',
          description: language === 'en' 
            ? 'Modern portfolio websites with dark mode' 
            : 'Modern portfólió weboldalak sötét móddal'
        },
        { 
          id: 2, 
          title: translations[language].ecommerceProjects,
          tech: 'React, Node.js, MongoDB',
          description: language === 'en'
            ? 'Full-featured online stores'
            : 'Teljes értékű online áruházak'
        },
        {
          id: 3,
          title: 'Moonline Tattoo',
          tech: 'React, React Router, Tailwind',
          description: language === 'en'
            ? 'Tattoo studio frontend with online booking'
            : 'Tetoválószalon frontend online foglalással'
        },
      ]
    },
    {
      type: 'video',
      icon: <FaVideo />,
      title: translations[language].videoEditing,
      projects: [
        { 
          id: 1, 
          title: translations[language].gameplayEdits,
          tech: 'After Effects, DaVinci',
          cta: language === 'en' ? 'Click me for the videos' : 'Kattints rám a videókért',
          description: language === 'en' 
            ? 'Fast-paced gameplay montages' 
            : 'Gyors tempójú gameplay montázsok'
        },
        { 
          id: 2, 
          title: translations[language].montageEdits,
          tech: 'After Effects, DaVinci',
          cta: language === 'en' ? 'Click me for the videos' : 'Kattints rám a videókért',
          description: language === 'en' 
            ? 'Music-synced video edits' 
            : 'Zenéhez szinkronizált videó szerkesztések'
        },
        { 
          id: 3, 
          title: translations[language].customVideos,
          tech: 'DaVinci, After Effects, Capcut',
          // Shows a "click me" strip under the card image
          cta: language === 'en' ? 'Click me for the videos' : 'Kattints rám a videókért',
          description: language === 'en' 
            ? 'Promotional videos for brands and products'
            : 'Promóciós videók márkáknak és termékeknek'
        },
      ]
    },
    {
      type: 'design',
      icon: <FaPalette />,
      title: translations[language].design,
      projects: [
        { 
          id: 1, 
          title: translations[language].logoDesign,
          tech: 'Canva, Adobe Express',
          description: language === 'en' 
            ? 'Complete logo design packages' 
            : 'Teljes logó design csomagok'
        },
        { 
          id: 2, 
          title: translations[language].graphicDesign,
          tech: 'Procreate, Photoshop',
          description: language === 'en' 
            ? 'Social media graphics and designs' 
            : 'Közösségi média grafikák és designok'
        },
        { 
          id: 3, 
          title: 'Digital Art',
          tech: 'Procreate, Digital Painting',
          description: language === 'en' 
            ? 'Digital illustrations and artwork(banner, logo etc.)' 
            : 'Digitális illusztrációk és művészet(banner, logo stb.)'
        },
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={translations[language].projects}
          subtitle={language === 'en' ? 'My own app, websites, videos and design work – click a card to see more.' : 'Saját alkalmazás, weboldalak, videók és design munkák – kattints egy kártyára a részletekért.'}
        />

        <BiteLoopShowcase />

        {projectCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-zinc-800 text-red-400' : 'bg-red-100 text-red-600'}`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold">{category.title}</h3>
            </div>

            <ProjectMarquee>
                {/* The loop is rendered twice, so half the track is one seamless loop */}
                {[0, 1].map((copy) =>
                  getLoopItems(category.projects).map((project, projIndex) => (
                    <Link
                      key={`${copy}-${projIndex}`}
                      to={`/project/${category.type}/${project.id}`}
                      aria-hidden={copy === 1 || projIndex >= category.projects.length}
                      tabIndex={copy === 1 || projIndex >= category.projects.length ? -1 : undefined}
                      className={`group flex-shrink-0 w-80 sm:w-[28rem] mr-10 overflow-hidden rounded-xl border-2 transition-all duration-500 hover:scale-[1.04] ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]' : 'border-gray-200 bg-white hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]'}`}
                    >
                      <div className={`h-56 sm:h-72 overflow-hidden ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-100'}`}>
                        <img
                          src={projectData[category.type]?.find((p) => p.id === project.id)?.mainImage}
                          alt={project.title}
                          loading="lazy"
                          draggable={false}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      {project.cta && (
                        <div className="flex items-center justify-center gap-2 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-red-600 to-orange-500">
                          <FaPlay className="text-xs transition-transform group-hover:scale-125" />
                          {project.cta}
                        </div>
                      )}

                      <div className="p-6 sm:p-8">
                      <div className="mb-4">
                        <span className={`px-3 py-1 rounded-md text-sm sm:text-base ${theme === 'dark' ? 'bg-zinc-800 text-red-300' : 'bg-orange-100 text-orange-700'}`}>
                          {project.tech}
                        </span>
                      </div>

                      <h4 className="text-2xl sm:text-3xl font-bold mb-3">{project.title}</h4>
                      <p className={`mb-6 text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.description}
                      </p>

                      <span
                        className={`inline-flex items-center gap-2 text-lg font-semibold transition-all ${theme === 'dark' ? 'text-red-400 group-hover:text-red-300' : 'text-orange-600 group-hover:text-orange-500'}`}
                      >
                        {translations[language].viewDetails}
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </span>
                      </div>
                    </Link>
                  ))
                )}
            </ProjectMarquee>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;