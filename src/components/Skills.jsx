import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaCode, FaVideo, FaPalette } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const { language, translations } = useContext(LanguageContext);

  const skillCategories = [
    {
      icon: <FaCode />,
      category: language === 'en' ? 'Frontend Development' : 'Frontend Fejlesztés',
      skills: ['React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Vite', 'React Router'],
    },
    {
      icon: <FaVideo />,
      category: language === 'en' ? 'Video Editing' : 'Videószerkesztés',
      skills: ['After Effects', 'DaVinci Resolve', 'CapCut', 'Color Grading', 'Motion Graphics', 'Audio Syncing'],
    },
    {
      icon: <FaPalette />,
      category: language === 'en' ? 'Design' : 'Design',
      skills: ['Canva', 'Adobe Express', 'Procreate', 'Photoshop', 'Logo Design', 'Social Media Graphics'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={translations[language].skillsTitle}
          subtitle={language === 'en' ? 'The tools and technologies I work with every day.' : 'Az eszközök és technológiák, amelyekkel nap mint nap dolgozom.'}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900' : 'border-gray-200 bg-white'}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`w-10 h-10 rounded-lg flex items-center justify-center ${theme === 'dark' ? 'bg-zinc-800 text-red-400' : 'bg-orange-100 text-orange-600'}`}>
                  {category.icon}
                </span>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-zinc-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
