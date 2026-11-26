import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// Shared heading for every home page section: title and a short intro
const SectionHeader = ({ title, subtitle }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <div className="text-center mb-14 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{subtitle}</p>
      )}
      <div className="h-1 w-20 mx-auto mt-6 rounded-full bg-gradient-to-r from-red-500 to-amber-400" />
    </div>
  );
};

export default SectionHeader;
