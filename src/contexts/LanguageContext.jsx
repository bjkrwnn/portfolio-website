import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      home: 'Home',
      about: 'About Me',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      frontend: 'Frontend Development',
      videoEditing: 'Video Editing',
      design: 'Graphic Design',
      viewProject: 'View Project',
      backToHome: 'Back to Home',
      projectDetails: 'Project Details',
      description: 'Description',
      technologies: 'Technologies',
      features: 'Features',
      liveDemo: 'Live Demo',
      challengesAndSolutions: 'Challenges & Solutions',
      challenges: 'Challenges',
      solutions: 'Solutions',
      sendMessage: 'Send Message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      discord: 'Discord',
      heroTitle: 'Frontend Developer & Video Editor',
      heroSubtitle: 'Creating stunning websites and engaging video content',
      aboutTitle: 'About Me',
      aboutText1: 'I am a passionate Frontend Developer and Video Editor. Frontend development is where I am most experienced: I specialize in responsive portfolio websites and e-commerce platforms built with modern web technologies.',
      aboutText2: 'My goal is to work as a tattoo artist, a frontend developer, or in media management. All three are close to my heart: drawing, editing, and content creation are part of my everyday life. I create engaging gameplay edits, montages, and custom video content using After Effects, DaVinci Resolve, and CapCut, and for design work I use Canva, Adobe Express, Procreate, and Photoshop to create logos and graphics.',
      aboutText3: 'With AI as an integral part of my workflow, I confidently take on full-stack projects and deliver complete applications from the frontend to the backend. AI lets me work faster and more efficiently, while I take full ownership of the result: every project is thoroughly reviewed and filtered by me before it reaches the client, so you always receive well-considered, reliable work.',
      skillsTitle: 'My Skills',
      contactTitle: 'Get In Touch',
      contactText: 'Have a project or need video editing? Contact me on Discord or send an email!',
      copyright: `© ${new Date().getFullYear()} Portfolio. All rights reserved.`,
      viewDetails: 'View Details',
      portfolioProjects: 'Portfolio Websites',
      ecommerceProjects: 'E-commerce Websites',
      gameplayEdits: 'Gameplay Edits',
      montageEdits: 'Montage Edits',
      customVideos: 'Custom Videos',
      logoDesign: 'Logo Design',
      graphicDesign: 'Graphic Design'
    },
    hu: {
      home: 'Kezdőlap',
      about: 'Rólam',
      projects: 'Projektek',
      skills: 'Készségek',
      contact: 'Kapcsolat',
      frontend: 'Frontend Fejlesztés',
      videoEditing: 'Videó Szerkesztés',
      design: 'Grafikai Design',
      viewProject: 'Projekt Megtekintése',
      backToHome: 'Vissza a kezdőlapra',
      projectDetails: 'Projekt Részletek',
      description: 'Leírás',
      technologies: 'Technológiák',
      features: 'Funkciók',
      liveDemo: 'Élő Demó',
      challengesAndSolutions: 'Kihívások és Megoldások',
      challenges: 'Kihívások',
      solutions: 'Megoldások',
      sendMessage: 'Üzenet Küldése',
      name: 'Név',
      email: 'Email',
      message: 'Üzenet',
      discord: 'Discord',
      heroTitle: 'Frontend Fejlesztő & Videó Szerkesztő',
      heroSubtitle: 'Lenyűgöző weboldalak és lebilincselő videó tartalmak készítése',
      aboutTitle: 'Rólam',
      aboutText1: 'Szenvedélyes Frontend Fejlesztő és Videó Szerkesztő vagyok. A frontend fejlesztésben vagyok a legjártasabb: reszponzív portfólió weboldalakra és e-commerce platformokra specializálódtam, modern web technológiák használatával.',
      aboutText2: 'Célom, hogy tetoválóként, frontend fejlesztőként vagy média managementben dolgozzak. Mindhárom terület közel áll hozzám: a rajzolás, a szerkesztés és a tartalomkészítés a mindennapjaim része. Érdekes gameplay szerkesztéseket, montázsokat és egyedi videó tartalmakat készítek After Effects, DaVinci Resolve és CapCut használatával, design munkákhoz pedig Canva, Adobe Express, Procreate és Photoshop alkalmazásokat használok logók és grafikák készítéséhez.',
      aboutText3: 'Az AI a munkafolyamatom szerves része, ennek köszönhetően magabiztosan vállalok fullstack projekteket is, és a teljes alkalmazást elkészítem a frontendtől a backendig. Az AI-jal gyorsabban és hatékonyabban dolgozom, a végeredményért azonban én felelek: minden projektet alaposan átnézek és átszűrök, mielőtt az ügyfélhez kerül, így mindig átgondolt, megbízható munkát adok ki a kezemből.',
      skillsTitle: 'Készségeim',
      contactTitle: 'Lépj Velem Kapcsolatba',
      contactText: 'Van egy projekt ötleted vagy videó szerkesztésre van szükséged? Keress Discord-on vagy küldj emailt!',
      copyright: `© ${new Date().getFullYear()} Portfolio. Minden jog fenntartva.`,
      viewDetails: 'Részletek',
      portfolioProjects: 'Portfólió Weboldalak',
      ecommerceProjects: 'E-commerce Weboldalak',
      gameplayEdits: 'Gameplay Szerkesztések',
      montageEdits: 'Montázs Szerkesztések',
      customVideos: 'Egyedi Videók',
      logoDesign: 'Logó Design',
      graphicDesign: 'Grafikai Design'
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'hu' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};