import React from "react";

export default function Referenze({ onClose, onNavigate, previous, next }) {
  const references = [
    {
      name: "Marco Rossi",
      role: "Direttore Sportivo – FC Cosenza",
      quote:
        "Francesco ha portato rigore metodologico e un approccio data‑driven che ha alzato l'asticella di tutto lo staff.",
      img: "/IMG/ref_marco_rossi.webp",
    },
    {
      name: "Elisa Conti",
      role: "Head of Academy – Atalanta BC",
      quote:
        "La sua attenzione al dettaglio tattico e alla crescita individuale dei ragazzi è stata determinante per i nostri risultati." ,
      img: "/IMG/ref_elisa_conti.webp",
    },
    {
      name: "Luis García",
      role: "Match Analyst – LaLiga",
      quote:
        "Collaborare con Francesco significa avere report puntuali, chiari e soluzioni concrete per la partita successiva.",
      img: "/IMG/ref_luis_garcia.webp",
    },
    {
      name: "Giuseppe Verdi",
      role: "Allenatore Primavera – AC Milan",
      quote:
        "La sua capacità di leadership silenziosa ha creato un ambiente di lavoro positivo e ambizioso.",
      img: "/IMG/ref_giuseppe_verdi.webp",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#f5f7fa] to-[#ffffff] text-gray-900 overflow-auto">
      {/* Header sinistro */}
      <div className="absolute top-4 left-4 z-50 flex flex-col sm:flex-row sm:items-center gap-2">
        <h3 className="uppercase text-sm tracking-widest text-gray-700 font-semibold">Referenze</h3>
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
      <div className="max-w-[1280px] mx-auto px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Descrizione sinistra */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Perché fidarsi di me</h1>
          <p className="text-lg leading-relaxed text-gray-800">
            Nel calcio, la credibilità nasce dalle testimonianze di chi ha condiviso il percorso. Ogni feedback racconta <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full mx-1">professionalità</span>, <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full mx-1">impatto concreto</span> e <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mx-1">valori condivisi</span>.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Queste referenze sono il riflesso di progetti reali, risultati misurabili e relazioni costruite nel tempo.
          </p>
        </div>

        {/* Cards referenze */}
        <div className="space-y-6 animate-fade-in-up">
          {references.map((ref, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex gap-4 hover:shadow-md transition">
              <img src={ref.img} alt={ref.name} className="w-16 h-16 rounded-full object-cover" />
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-gray-800 text-sm">{ref.name}</p>
                <p className="text-xs text-gray-500 mb-2">{ref.role}</p>
                <p className="text-sm text-gray-700 italic">“{ref.quote}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Citazione finale */}
      <p className="mt-12 text-center text-sm italic text-violet-700 max-w-2xl mx-auto px-6">
        «Le parole di chi ha collaborato con me valgono più di qualsiasi autopresentazione.»
      </p>
    </div>
  );
}
