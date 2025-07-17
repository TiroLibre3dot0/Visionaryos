import React from "react";

export default function Gallery({ onClose, onNavigate, previous, next }) {
  // Foto locali (cartella public/IMG/gallery)
  const items = [
    { id: 1, type: "img", src: "/IMG/gallery/matchday.webp", alt: "Match‑day sidelines" },
    { id: 2, type: "img", src: "/IMG/gallery/training.webp", alt: "Training session" },
    { id: 3, type: "video", src: "https://www.youtube.com/embed/7V6Z3nFwxX8", title: "Match analysis clip" },
    { id: 4, type: "img", src: "/IMG/gallery/teamtalk.webp", alt: "Team talk" },
    { id: 5, type: "video", src: "https://www.youtube.com/embed/EHz8KrC-u2E", title: "Drill example" },
    { id: 6, type: "img", src: "/IMG/gallery/celebration.webp", alt: "Celebration moment" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#f5f7fa] to-[#ffffff] text-gray-900 overflow-auto">
      {/* Header */}
      <div className="absolute top-4 left-4 z-50 flex flex-col sm:flex-row sm:items-center gap-2">
        <h3 className="uppercase text-sm tracking-widest text-gray-700 font-semibold">Gallery</h3>
        {previous ? (
          <button onClick={() => onNavigate(previous)} className="px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm hover:text-black transition">← Torna indietro</button>
        ) : (
          <button onClick={onClose} className="px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm hover:text-black transition">← Torna alla Home</button>
        )}
      </div>

      {/* Prosegui */}
      {next && (
        <button onClick={() => onNavigate(next)} className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm hover:text-black transition z-50">Prosegui →</button>
      )}

      {/* Chiudi */}
      <button onClick={onClose} className="absolute top-4 left-1/2 -translate-x-1/2 text-2xl text-gray-400 hover:text-black z-50" aria-label="Chiudi">×</button>

      {/* Content */}
      <div className="max-w-[1280px] mx-auto px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Narrativa */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Momenti e prospettive</h1>
          <p className="text-lg leading-relaxed text-gray-800">
            Ogni immagine racconta <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mx-1">passione</span>,
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full mx-1">dedizione</span> e
            <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full mx-1">visione</span>.
            Una raccolta di scatti e clip che rappresentano la mia filosofia di lavoro: dal campo di allenamento alla sala analisi.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Sfoglia la gallery per scoprire allenamenti, momenti di match‑day e studi tattici trasformati in azioni concrete sul terreno di gioco.
          </p>
        </div>

        {/* Grid media */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-fade-in-up">
          {items.map((item) => (
            <div key={item.id} className="relative group bg-gray-100 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition">
              {item.type === "img" ? (
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              ) : (
                <div className="w-full aspect-video">
                  <iframe
                    src={item.src}
                    title={item.title}
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              )}
              {item.alt && (
                <span className="absolute bottom-2 left-2 text-xs bg-black/60 text-white px-2 py-0.5 rounded">{item.alt}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Citazione finale */}
      <p className="mt-12 text-center text-sm italic text-violet-700 max-w-2xl mx-auto px-6">«Le immagini fermano gli attimi, i video raccontano il percorso.»</p>
    </div>
  );
}