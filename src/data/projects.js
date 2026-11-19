export const projects = {
  frontend: [
    {
      id: 1,
      title: {
        en: "Portfolio Showcase",
        hu: "Portfólió Bemutató"
      },
      subtitle: {
        en: "Modern portfolio website with dark/light mode",
        hu: "Modern portfólió weboldal sötét/világos móddal"
      },
      description: {
        en: "A responsive portfolio website featuring dark/light mode toggle, bilingual support (EN/HU), and interactive project showcases. Built with React, Tailwind CSS, and Vite for optimal performance.",
        hu: "Reszponzív portfólió weboldal sötét/világos mód váltóval, kétnyelvű támogatással (EN/HU) és interaktív projekt bemutatókkal. React, Tailwind CSS és Vite felhasználásával készült optimális teljesítmény érdekében."
      },
      mainImage: "/portfolio-website/images/portfolio1.png",
      images: [
        "/portfolio-website/images/portfolio1.png",
        "/portfolio-website/images/portfolio2.png",
        "/portfolio-website/images/portfolio3.png",
        "/portfolio-website/images/portfolio4.png",
        "/portfolio-website/images/portfolio5.png",
      ],
      technologies: ["React", "Tailwind CSS", "Vite", "React Router", "Context API"],
      features: {
        en: [
          "Dark/Light mode with local storage",
          "English/Hungarian language support",
          "Interactive project showcases",
          "Responsive design for all devices",
          "Smooth animations and transitions"
        ],
        hu: [
          "Sötét/Világos mód helyi tárolással",
          "Angol/Magyar nyelvi támogatás",
          "Interaktív projekt bemutatók",
          "Reszponzív design minden eszközre",
          "Simán animációk és átmenetek"
        ]
      },
    },
    {
      id: 2,
      title: {
        en: "E-commerce Beauty Platform",
        hu: "E-commerce Szépség Platform"
      },
      subtitle: {
        en: "Full-featured online store",
        hu: "Teljes értékű online áruház"
      },
      description: {
        en: "A complete e-commerce solution with product catalog, shopping cart, user authentication, and secure checkout. Features include product filtering, reviews, and order tracking.",
        hu: "Teljes e-commerce megoldás termékkatalógussal, bevásárlókosárral, felhasználói hitelesítéssel és biztonságos fizetéssel. Funkciók közé tartozik a termékszűrés, értékelések és rendelés követés."
      },
      mainImage: "/portfolio-website/images/dowen1.png",
      images: [
        "/portfolio-website/images/dowen1.png",
        "/portfolio-website/images/dowen2.png",
        "/portfolio-website/images/dowen3.png"
      ],
      technologies: ["React", "Node.js", "MongoDB"],
      features: {
        en: [
          "Product catalog with filtering",
          "Shopping cart functionality",
          "User authentication system",
          "Secure payment processing",
          "Order management dashboard"
        ],
        hu: [
          "Termékkatalógus szűréssel",
          "Bevásárlókosár funkció",
          "Felhasználói hitelesítési rendszer",
          "Biztonságos fizetési folyamat",
          "Rendeléskezelő irányítópult"
        ]
      },
    },
    {
      id: 3,
      title: {
        en: "Moonline Tattoo",
        hu: "Moonline Tattoo"
      },
      subtitle: {
        en: "Complete frontend for a tattoo studio, with online booking",
        hu: "Teljes frontend egy tetoválószalonnak, online időpontfoglalással"
      },
      description: {
        en: "The complete frontend of a fictional tattoo studio, built as a multi-page React app: a gallery with style filters and favourites, a team page where visitors can message the artists and attach images of the tattoo they have in mind, a price calculator, and a five-step online booking that can be reviewed and cancelled later.",
        hu: "Egy kitalált tetoválószalon teljes frontendje, többoldalas React alkalmazásként: galéria stílus szerinti szűréssel és kedvencekkel, csapat oldal, ahol a látogatók üzenetet küldhetnek a munkatársaknak, és képet csatolhatnak az elképzelt tetoválásról, árkalkulátor, valamint ötlépéses online időpontfoglalás, amely utólag megtekinthető és lemondható."
      },
      mainImage: "/portfolio-website/images/moonline1.jpg",
      images: [
        "/portfolio-website/images/moonline1.jpg",
        "/portfolio-website/images/moonline2.jpg",
        "/portfolio-website/images/moonline3.jpg",
        "/portfolio-website/images/moonline4.jpg",
        "/portfolio-website/images/moonline5.jpg",
        "/portfolio-website/images/moonline6.jpg",
        "/portfolio-website/images/moonline7.jpg",
        "/portfolio-website/images/moonline8.jpg",
        "/portfolio-website/images/moonline9.jpg",
      ],
      technologies: ["React", "React Router", "Context API", "Vite", "Tailwind CSS"],
      features: {
        en: [
          "12 pages with routing: gallery, sample pages, team and team member pages, messages, pricing, FAQ, booking, my bookings, 404",
          "Messages to team members with image attachments (up to 3 reference images)",
          "Five-step booking wizard with validation and live free slots",
          "Price calculator by size, placement and style",
          "Favourites and gallery filters kept in the URL",
          "My bookings page with cancellation"
        ],
        hu: [
          "12 oldal útvonalkezeléssel: galéria, mintaoldalak, csapat és munkatársi oldalak, üzenetek, árak, GYIK, foglalás, foglalásaim, 404",
          "Üzenetküldés a munkatársaknak képcsatolással (legfeljebb 3 referenciakép)",
          "Ötlépéses időpontfoglalás ellenőrzéssel és élő szabad időpontokkal",
          "Árkalkulátor méret, hely és stílus alapján",
          "Kedvencek, és a címsorban megmaradó galériaszűrők",
          "Foglalásaim oldal lemondási lehetőséggel"
        ]
      },
    },
  ],
  video: [
    {
      id: 1,
      title: {
        en: "Gameplay Montage",
        hu: "Gameplay Montázs"
      },
      subtitle: {
        en: "Fast-paced action compilation",
        hu: "Gyors tempójú akció összeállítás"
      },
      description: {
        en: "A high-energy gameplay montage featuring intense action sequences, synchronized with dynamic music. Created using After Effects for effects and DaVinci Resolve for color grading.",
        hu: "Magas energiájú gameplay montázs intenzív akció jelenetekkel, dinamikus zenével szinkronizálva. After Effects használatával készült effektekhez és DaVinci Resolve színezéshez."
      },
      mainImage: "/portfolio-website/images/gameplay-cover.jpg",
      images: [
        "/portfolio-website/images/gameplay-cover.jpg",
      ],
      technologies: ["After Effects", "DaVinci Resolve", "CapCut", "Color Grading"],
      features: {
        en: [
          "Dynamic motion graphics",
          "Synced audio/visual effects",
          "Cinematic color grading",
          "Fast-paced editing style",
          "Custom visual effects"
        ],
        hu: [
          "Dinamikus mozgógrafika",
          "Szinkronizált audio/vizuális effektek",
          "Filmes színezés",
          "Gyors tempójú szerkesztési stílus",
          "Egyedi vizuális effektek"
        ]
      },
    },
    {
      id: 2,
      title: {
        en: "Music Video Edit",
        hu: "Zenei Videó Szerkesztés"
      },
      subtitle: {
        en: "Song-synced video compilation",
        hu: "Zenéhez szinkronizált videó összeállítás"
      },
      description: {
        en: "A music video edit that perfectly synchronizes visual cuts with song beats and lyrics. Features creative transitions, text animations, and rhythm-based editing.",
        hu: "Zenei videó szerkesztés, amely tökéletesen szinkronizálja a vizuális vágásokat a zene ütemével és dalszövegeivel. Kreatív átmenetek, szöveganimációk és ritmus alapú szerkesztés jellemzi."
      },
      mainImage: "/portfolio-website/images/montage-cover.jpg",
      images: [
        "/portfolio-website/images/montage-cover.jpg",
      ],
      technologies: ["After Effects", "DaVinci Resolve", "CapCut", "Audio Syncing"],
      features: {
        en: [
          "Perfect beat synchronization",
          "Creative text animations",
          "Rhythm-based editing",
          "Dynamic transitions",
          "Audio waveform visualization"
        ],
        hu: [
          "Tökéletes ütem szinkronizáció",
          "Kreatív szöveganimációk",
          "Ritmus alapú szerkesztés",
          "Dinamikus átmenetek",
          "Audio hullámforma vizualizáció"
        ]
      },
    },
    {
      id: 3,
      title: {
        en: "Marketing Videos",
        hu: "Marketing videók"
      },
      subtitle: {
        en: "Promotional videos for brands and products",
        hu: "Promóciós videók márkáknak és termékeknek"
      },
      description: {
        en: "Short promotional videos made for brands, products and social media. Each video is built around the brand's look and message, with a strong opening, clear text on screen and a call to action at the end.",
        hu: "Rövid promóciós videók márkáknak, termékeknek és a közösségi médiába. Minden videó a márka arculatára és üzenetére épül, figyelemfelkeltő kezdéssel, jól olvasható feliratokkal és a végén egy cselekvésre ösztönző zárással."
      },
      mainImage: "/portfolio-website/images/marketing-cover.jpg",
      images: [
        "/portfolio-website/images/marketing-cover.jpg",
      ],
      // Shown with a player on the project page. Files go in public/videos/,
      // e.g. { src: "/portfolio-website/videos/promo1.mp4", title: { en: "...", hu: "..." }, portrait: true }
      videos: [
        {
          src: "/portfolio-website/videos/biteloop-ad.mp4",
          title: { en: "BiteLoop ad", hu: "BiteLoop reklám" },
          portrait: true,
        },
      ],
      technologies: ["After Effects", "DaVinci Resolve", "CapCut", "Motion Graphics"],
      features: {
        en: [
          "Attention-grabbing first seconds",
          "Brand colours, fonts and logo",
          "On-screen text and subtitles",
          "Formats for Reels, TikTok and YouTube",
          "Call to action at the end"
        ],
        hu: [
          "Figyelemfelkeltő első másodpercek",
          "A márka színei, betűtípusai és logója",
          "Feliratok és szöveges kiemelések",
          "Formátumok Reelshez, TikTokhoz és YouTube-hoz",
          "Cselekvésre ösztönző zárás"
        ]
      },
    }
  ],
  design: [
    {
      id: 1,
      title: {
        en: "Logo Design Package",
        hu: "Logó Design Csomag"
      },
      subtitle: {
        en: "Complete brand identity logo set",
        hu: "Teljes márka identitás logó készlet"
      },
      description: {
        en: "A comprehensive logo design package featuring primary logo, secondary logo, favicon, and logo variations. Created with Adobe Express and Procreate for digital and print use.",
        hu: "Átfogó logó design csomag elsődleges logóval, másodlagos logóval, faviconnal és logó variációkkal. Adobe Express és Procreate felhasználásával készült digitális és nyomtatott felhasználáshoz."
      },
      mainImage: "/portfolio-website/images/Rlogo.png",
      images: [
        "/portfolio-website/images/Rlogo.png",
        "/portfolio-website/images/fadedlogo.png",
        "/portfolio-website/images/ramolalogo.png"
      ],
      technologies: ["Canva", "Adobe Express", "Procreate", "Photoshop"],
      features: {
        en: [
          "Primary and secondary logos",
          "Multiple color variations",
          "Favicon and app icons",
          "Print-ready files",
          "Digital usage guidelines"
        ],
        hu: [
          "Elsődleges és másodlagos logók",
          "Több színváltozat",
          "Favicon és alkalmazás ikonok",
          "Nyomtatásra kész fájlok",
          "Digitális használati útmutató"
        ]
      },
    },
    {
      id: 2,
      title: {
        en: "Social Media Graphics",
        hu: "Közösségi Média Grafikák"
      },
      subtitle: {
        en: "Custom graphics for social platforms",
        hu: "Egyedi grafikák közösségi platformokra"
      },
      description: {
        en: "A collection of social media graphics including banners, posts, stories, and ads designed for various platforms. Created using Canva and Adobe Express for consistent brand presentation.",
        hu: "Közösségi média grafikák gyűjteménye banner-ekkel, posztokkal, story-kkal és hirdetésekkel különböző platformokra. Canva és Adobe Express felhasználásával készült konzisztens márka megjelenítés érdekében."
      },
      mainImage: "/portfolio-website/images/pricelist.png",
      images: [
       "/portfolio-website/images/pricelist.png",
       "/portfolio-website/images/RoWeb.png"
      ],
      technologies: ["Canva", "Adobe Express", "Photoshop", "Social Templates"],
      features: {
        en: [
          "Platform-specific templates",
          "Brand-consistent colors",
          "Multiple size variations",
          "Editable source files",
          "Optimized for each platform"
        ],
        hu: [
          "Platform specifikus sablonok",
          "Márka konzisztens színek",
          "Több méretváltozat",
          "Szerkeszthető forrásfájlok",
          "Minden platformra optimalizálva"
        ]
      },
    },
    {
      id: 3,
      title: {
        en: "Digital Art Collection",
        hu: "Digitális Művészeti Gyűjtemény"
      },
      subtitle: {
        en: "Procreate digital illustrations",
        hu: "Procreate digitális illusztrációk"
      },
      description: {
        en: "A collection of digital artwork created with Procreate, featuring custom brushes, textures, and digital painting techniques. Includes character designs, backgrounds, and abstract art.",
        hu: "Digitális művészeti gyűjtemény Procreate-tel készítve, egyedi ecsetekkel, texturákkal és digitális festési technikákkal. Tartalmaz karakter terveket, háttereket és absztrakt művészetet."
      },
      mainImage:"/portfolio-website/images/bannerforairo.png",
      images: [
        "/portfolio-website/images/bannerforairo.png",
        "/portfolio-website/images/logoforairo.png"
      ],
      technologies: ["Procreate", "Photoshop", "Digital Painting", "Custom Brushes"],
      features: {
        en: [
          "Custom brush sets",
          "Layered PSD files",
          "High-resolution exports",
          "Digital painting techniques",
          "Printable artwork"
        ],
        hu: [
          "Egyedi ecsetkészletek",
          "Rétegezett PSD fájlok",
          "Nagy felbontású exportálás",
          "Digitális festési technikák",
          "Nyomtatható művészet"
        ]
      },
    }
  ]
};