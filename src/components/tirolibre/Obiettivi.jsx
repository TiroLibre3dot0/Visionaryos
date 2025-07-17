import React from "react";

export default function Obiettivi({ onClose, onNavigate, previous, next }) {
  // TODO: questo valore arriverà dal profilo utente / dashboard
  const isOpenToOffers = true; // true = disponibile, false = sotto contratto

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#f5f7fa] to-[#ffffff] text-gray-900 overflow-auto">
      {/* Header Left */}
      <div className="absolute top-4 left-4 z-50 flex flex-col sm:flex-row sm:items-center gap-2">
        <h3 className="uppercase text-sm tracking-widest text-gray-700 font-semibold">Obiettivi</h3>
        {previous ? (
          <button onClick={() => onNavigate(previous)} className="px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm hover:text-black transition">
            ← Torna indietro
          </button>
        ) : (
          <button onClick={onClose} className="px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm hover:text-black transition">
            ← Torna alla Home
          </button>
        )}
      </div>

      {/* Header Right – Prosegui */}
      {next && (
        <button onClick={() => onNavigate(next)} className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm hover:text-black transition z-50">
          Prosegui →
        </button>
      )}

      {/* Chiudi centrale */}
      <button onClick={onClose} className="absolute top-4 left-1/2 -translate-x-1/2 text-2xl text-gray-400 hover:text-black z-50" aria-label="Chiudi">
        ×
      </button>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT – narrativa */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Visione e prospettive future</h1>
          <p className="text-lg leading-relaxed text-gray-800">
            Francesco Mascaro ambisce a guidare progetti calcistici dove <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mx-1">innovazione</span> e <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full mx-1">crescita dei talenti</span> si incontrano. La sua mission è costruire squadre resilienti, capaci di esprimere un gioco propositivo in ogni contesto competitivo.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Obiettivo a medio termine: consolidare un <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded-full mx-1">metodo di lavoro multidisciplinare</span> che integri dati, video analisi e coaching emotivo, portando valore aggiunto sia in Italia che in ambito internazionale.
          </p>
        </div>

        {/* RIGHT – stato dinamico + goal cards */}
        <div className="space-y-6 animate-fade-in-up">
          {/* Badge dinamico */}
          {isOpenToOffers ? (
            <div className="bg-green-50 border-l-4 border-green-500 rounded-md p-4 flex items-start gap-3 shadow-sm">
              <span className="text-xl">🔓</span>
              <div className="text-sm leading-snug">
                <p className="font-semibold text-green-800">Open to Offers</p>
                <p className="text-green-700">Attualmente disponibile a valutare nuove opportunità professionali </p>
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 border-l-4 border-gray-400 rounded-md p-4 flex items-start gap-3 shadow-sm">
              <span className="text-xl">🔒</span>
              <div className="text-sm leading-snug">
                <p className="font-semibold text-gray-700">Sotto contratto</p>
                <p className="text-gray-600">Non disponibile a nuove proposte al momento</p>
              </div>
            </div>
          )}

          {/* Goal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Allenare in un top club europeo", "Integrare IA e data science nel lavoro quotidiano", "Costruire un vivaio con filosofia condivisa", "Condividere competenze come docente"].map((goal, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition text-center text-sm font-medium text-gray-700 min-h-[96px] flex items-center justify-center">
                {goal}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Citazione finale */}
      <p className="mt-12 text-center text-sm italic text-violet-700 max-w-2xl mx-auto px-6">
        «Gli obiettivi guidano il cammino: cambiano le strade, non la destinazione.»
      </p>
    </div>
  );
}
