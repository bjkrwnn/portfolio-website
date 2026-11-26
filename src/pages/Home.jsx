import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Coming back from a project page: jump straight to the requested section
  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (!sectionId) return;

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    // Clear the state so a page refresh doesn't jump again
    navigate(location.pathname, { replace: true, state: null });
  }, [location, navigate]);

  // Every other section sits on a slightly different band so the sections read as separate blocks
  const band = theme === 'dark' ? 'bg-[#2a1a1f] border-y border-white/5' : 'bg-white border-y border-orange-100';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-[#1C1517] text-gray-200' : 'bg-[#fbf6ee] text-gray-800'}`}>
      <Navbar />
      <Hero />
      <div className={band}><About /></div>
      <Projects />
      <div className={band}><Skills /></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
