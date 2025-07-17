import React from "react";

export default function Home({ onSelectStage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-10">

        {/* Intestazione */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            In che fase della tua carriera ti trovi?
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Scegli il momento che meglio rappresenta il tuo percorso calcistico.
          </p>
        </div>

        {/* Bottoni di scelta */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => onSelectStage("inizio")}
            className="bg-white border border-gray-300 rounded-lg py-4 px-6 shadow hover:shadow-md transition text-gray-800 font-medium"
          >
            Inizio carriera
          </button>
          <button
            onClick={() => onSelectStage("meta")}
            className="bg-white border border-gray-300 rounded-lg py-4 px-6 shadow hover:shadow-md transition text-gray-800 font-medium"
          >
            Metà carriera
          </button>
          <button
            onClick={() => onSelectStage("fine")}
            className="bg-white border border-gray-300 rounded-lg py-4 px-6 shadow hover:shadow-md transition text-gray-800 font-medium"
          >
            Fine carriera
          </button>
        </div>

      </div>
    </div>
  );
}
