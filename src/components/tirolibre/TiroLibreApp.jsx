// components/tirolibre/TiroLibreApp.jsx
import React, { useState } from "react";
import Home from "./Home";
import Carriera from "./Carriera_firestore";
import Profilo from "./Profilo";
import Obiettivi from "./Obiettivi";
import Competenze from "./Competenze";
import Contatti from "./Contatti";
import Gallery from "./Gallery";
import Referenze from "./Referenze";
import "./TiroLibreApp.css"; // assicurati che esista

const QUADRANTS = [
  {
    id: 1,
    title: "Francesco Mascaro",
    subtitle: "UEFA A Coach & Data Analyst",
    description: "Allenatore & Professionista del calcio",
    image: "/IMG/allenatore-sorridente.webp",
    fixed: true,
    icons: [
      { href: "https://www.instagram.com/francesco_mascaro", img: "/IMG/Instagram_icon.png", alt: "Instagram" },
      { href: "https://www.linkedin.com/in/francesco-mascaro", img: "/IMG/LinkedIn_icon.svg.webp", alt: "LinkedIn" },
      { href: "https://www.transfermarkt.it/francesco-mascaro", img: "/IMG/transfermarkt-icon.webp", alt: "Transfermarkt" },
      { href: "https://www.tirolibre.it/francesco-mascaro", img: "/IMG/tirolibre-icon.png", alt: "Tirolibre" },
    ],
  },
  {
    id: 2,
    title: "Profilo",
    subtitle: "Chi sono",
    description: "Una panoramica della mia identità professionale.",
    image: "/IMG/allenatore-mercato.webp",
    color: "bg-purple-800/80",
  },
  {
    id: 3,
    title: "Carriera",
    subtitle: "Esperienze e club",
    description: "I percorsi sportivi che mi hanno formato.",
    image: "/IMG/allenatore-panchina.webp",
    color: "bg-pink-800/80",
  },
  {
    id: 4,
    title: "Obiettivi",
    subtitle: "La mia visione",
    description: "Cosa cerco in un progetto calcistico.",
    image: "/IMG/allenatore-hero.webp",
    color: "bg-red-800/80",
  },
  {
    id: 5,
    title: "Competenze",
    subtitle: "Tecniche e trasversali",
    description: "Le abilità che porto in campo e fuori.",
    image: "/IMG/allenatore-analisi-video.webp",
    color: "bg-yellow-700/80",
  },
  {
    id: 6,
    title: "Contatti",
    subtitle: "Parliamone",
    description: "Apri un canale diretto con me.",
    image: "/IMG/allenatore-contatti.webp",
    color: "bg-green-800/80",
  },
  {
    id: 7,
    title: "Gallery",
    subtitle: "Immagini e momenti",
    description: "Un racconto visivo del mio percorso.",
    image: "/IMG/allenatore-percorso-carriera.webp",
    color: "bg-teal-800/80",
  },
  {
    id: 8,
    title: "Referenze",
    subtitle: "Parlano di me",
    description: "Valutazioni di chi ha lavorato con me.",
    image: "/IMG/allenatore-tablet.webp",
    color: "bg-indigo-800/80",
  },
];

const SECTION_FLOW = [
  "profilo",
  "carriera",
  "competenze",
  "obiettivi",
  "gallery",
  "referenze",
  "contatti",
];

const TiroLibreApp = () => {
  const [hoveredId, setHoveredId] = useState(1);
  const [openSection, setOpenSection] = useState(null);
  const [careerStage, setCareerStage] = useState(null);
  const hoveredQuadrant = QUADRANTS.find(q => q.id === hoveredId) || QUADRANTS[0];

  const handleOpenSection = (name) => setOpenSection(name.toLowerCase());
  const handleCloseSection = () => setOpenSection(null);
  const handleNavigate = (targetSection) => setOpenSection(targetSection);

  const getNavProps = (currentSection) => {
    const index = SECTION_FLOW.indexOf(currentSection);
    const previous = index > 0 ? SECTION_FLOW[index - 1] : null;
    const next = index < SECTION_FLOW.length - 1 ? SECTION_FLOW[index + 1] : null;
    return { previous, next };
  };

  const renderSectionContent = () => {
    const props = {
      onNavigate: handleNavigate,
      ...getNavProps(openSection),
      onClose: handleCloseSection,
    };

    switch (openSection) {
      case "carriera": return <Carriera {...props} />;
      case "profilo": return <Profilo {...props} />;
      case "obiettivi": return <Obiettivi {...props} />;
      case "competenze": return <Competenze {...props} />;
      case "contatti": return <Contatti {...props} />;
      case "gallery": return <Gallery {...props} />;
      case "referenze": return <Referenze {...props} />;
      default: return null;
    }
  };

  if (!careerStage) {
    return <Home onSelectStage={setCareerStage} />;
  }

  return (
  <div
    className="fullscreen-layout overflow-y-auto"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${hoveredQuadrant.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    
      {!openSection && (
        <div className="grid grid-cols-2 grid-rows-4 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-1 px-1 py-2 w-full h-full">
          {QUADRANTS.map((q) => (
            <section
              key={q.id}
              onMouseEnter={() => setHoveredId(q.id)}
              className={`border border-white/30 p-3 relative text-white z-10 transition-all duration-200 overflow-hidden
                ${q.fixed ? 'h-auto' : 'h-[22vh] sm:h-[40vh] lg:h-auto'}
                ${q.fixed ? '' : hoveredId === q.id ? q.color : 'bg-transparent'}`}
            >
              {q.fixed ? (
                <div className="flex flex-col h-full justify-between p-2 sm:p-4 lg:p-6">
                  <div>
                    <h1 className="text-lg sm:text-2xl lg:text-3xl font-extrabold leading-tight">{q.title}</h1>
                    <h2 className="text-sm sm:text-lg font-medium mt-1">{q.subtitle}</h2>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm italic text-white/90">«{q.description}»</p>
                    <a
                      href="#contatti"
                      className="inline-block mt-4 px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-xs sm:text-sm font-semibold text-white shadow"
                    >
                      Contattami
                    </a>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center sm:justify-start mt-4">
                    {q.icons?.map((icon, i) => (
                      <a key={i} href={icon.href} target="_blank" rel="noopener noreferrer">
                        <img
                          src={icon.img}
                          alt={icon.alt}
                          className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition-transform"
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              ) : hoveredId === q.id ? (
                <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 text-left text-white/90 animate-fadeIn">
                  <h2 className="font-serif text-xl sm:text-3xl font-extrabold drop-shadow">{q.title}</h2>
                  <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed">{q.description}</p>
                  <a
                    href="#"
                    onClick={() => handleOpenSection(q.title)}
                    className="mt-5 text-sm underline underline-offset-4 decoration-white hover:decoration-2 transition-all"
                  >
                    Scopri la sezione
                  </a>
                </div>
              ) : (
                <div className="absolute bottom-2 right-3 text-sm sm:text-base font-normal opacity-70 drop-shadow-sm">
                  {q.title}
                </div>
              )}
            </section>
          ))}
        </div>
      )}
      {renderSectionContent()}
    </div>
  );
};

export default TiroLibreApp;
