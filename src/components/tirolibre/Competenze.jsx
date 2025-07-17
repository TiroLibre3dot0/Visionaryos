import React from "react";

export default function Competenze({ onClose, onNavigate, previous, next }) {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#f5f7fa] to-[#ffffff] text-gray-900 overflow-auto">
      {/* Header + Navigazione */}
      <div className="absolute top-4 left-4 z-50 flex flex-col sm:flex-row sm:items-center gap-2">
        <h3 className="uppercase text-sm tracking-widest text-gray-700 font-semibold">
          Competenze
        </h3>
        {previous ? (
          <button
            onClick={() => onNavigate(previous)}
            className="px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm hover:text-black transition"
          >
            ← Torna indietro
          </button>
        ) : (
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm hover:text-black transition"
          >
            ← Torna alla Home
          </button>
        )}
      </div>

      {/* Prosegui */}
      {next && (
        <button
          onClick={() => onNavigate(next)}
          className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm hover:text-black transition z-50"
        >
          Prosegui →
        </button>
      )}

      {/* Chiudi */}
      <button
        onClick={onClose}
        className="absolute top-4 left-1/2 -translate-x-1/2 text-2xl text-gray-400 hover:text-black z-50"
        aria-label="Chiudi"
      >
        ×
      </button>

      {/* Contenuto */}
      <div className="max-w-[1280px] mx-auto px-6 pt-32 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Parte Testuale */}
        <div className="animate-fade-in-up space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Competenze e formazione</h1>
          <p className="text-lg leading-relaxed text-gray-800">
            La crescita professionale di Francesco Mascaro si fonda su un mix di dedizione e formazione continua. Nel corso degli anni ha ottenuto licenze di alto livello come la
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mx-2">UEFA A</span>
            e quella da
            <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mx-2">Match Analyst FIGC</span>,
            elementi che ne certificano le competenze tecniche e strategiche ai massimi livelli.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            La sua filosofia si basa sull'analisi approfondita del gioco e sull'adattamento continuo ai contesti tattici, grazie anche all'utilizzo quotidiano di strumenti digitali e software specialistici.
          </p>
        </div>

        {/* Parte Strumenti */}
        <div className="animate-fade-in-up">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Strumenti di lavoro quotidiano</h2>
          <div className="grid grid-cols-2 gap-4 justify-center">
            {["wyscout", "instat", "tacticalpad", "transfermarkt-icon"].map((tool, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col items-center justify-center transition hover:shadow-md"
              >
                <img
                  src={`/IMG/${tool}.webp`}
                  alt={tool}
                  className="w-16 h-16 object-contain mb-2"
                />
                <span className="text-sm font-medium text-gray-700 capitalize">
                  {tool.replace("-icon", "").replace("tacticalpad", "TacticalPad")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Citazione finale */}
      <p className="mt-12 text-center text-sm italic text-violet-700 max-w-2xl mx-auto px-6">
        «Il sapere non è nulla senza la capacità di metterlo in campo con intelligenza.»
      </p>
    </div>
  );
}
