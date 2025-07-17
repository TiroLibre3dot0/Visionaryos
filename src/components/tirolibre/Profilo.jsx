import React from "react";

export default function Profilo({ onClose, onNavigate, current, prev, next }) {
  const handleNavigate = (section) => {
    if (onNavigate) onNavigate(section);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#f5f7fa] to-[#ffffff] text-gray-900 overflow-auto">

      {/* Header Top */}
      <div className="absolute top-4 left-4 z-50 flex flex-col sm:flex-row sm:items-center gap-2">
        <h3 className="uppercase text-sm tracking-widest text-gray-700 font-semibold">
          Profilo
        </h3>

        {/* Pulsante dinamico */}
        {prev ? (
          <button
            onClick={() => handleNavigate(prev)}
            className="px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm hover:text-black transition"
          >
            ← Torna a {prev.charAt(0).toUpperCase() + prev.slice(1)}
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

      {/* X centrale in alto */}
      <button
        onClick={onClose}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xl text-gray-400 hover:text-black z-50"
        aria-label="Chiudi"
      >
        ×
      </button>

      {/* Pulsante Prosegui (alto a destra) */}
{next && (
  <button
    onClick={() => handleNavigate(next)}
    className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm hover:text-black transition z-50"
  >
    Prosegui →
  </button>
)}

      {/* Contenuto centrato */}
      <div className="max-w-[1280px] mx-auto px-6 pt-32 pb-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative min-h-[80vh]">
        {/* Testo */}
        <div className="flex-1 max-w-lg relative animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 leading-tight text-center lg:text-left">
            Francesco <span className="text-violet-700">Mascaro</span>
          </h1>
          <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center lg:text-left">
            UEFA A Coach • Data Analyst
          </h2>
          <p className="text-lg leading-relaxed border-l-4 border-gray-300 pl-6">
            Allenatore orientato alla <span className="text-violet-700 font-medium">crescita del talento</span> e alla <span className="text-blue-700 font-medium">modernizzazione dei processi tecnici</span>. Unisco la sensibilità tattica all’analisi dei dati per creare squadre propositive e resilienti.
          </p>
        </div>

        {/* Foto */}
        <div className="relative flex-shrink-0 mx-auto animate-fade-in">
          <div className="w-72 h-72 rounded-full overflow-hidden border-[6px] border-violet-600 shadow-xl">
            <img
              src="/IMG/allenatore-sorridente.webp"
              alt="Francesco Mascaro"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Box informativi */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md animate-fade-in">
          {[
            { label: "Esperienza", value: "8+ stagioni", section: "carriera" },
            { label: "Competenze", value: "Analisi • Giovani • Leadership", section: "competenze" },
            { label: "Lingue", value: "IT • EN • ES", section: "obiettivi" },
            { label: "Licenze", value: "UEFA A • FIGC Match Analyst", section: "referenze" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-5 cursor-pointer hover:shadow-md transition"
              onClick={() => handleNavigate(item.section)}
            >
              <p className="text-sm text-gray-500 mb-1">{item.label}</p>
              <p className="text-base font-semibold text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Citazione */}
      <p className="mt-8 text-center text-sm italic text-violet-700 max-w-2xl mx-auto px-6">
        «Il calcio è un linguaggio: io ne studio la grammatica, per scrivere storie vincenti.»
      </p>
    </div>
  );
}
