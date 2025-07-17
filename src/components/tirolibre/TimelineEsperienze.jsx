import React from "react";
import Flag from "react-world-flags";

const TimelineEsperienze = ({ esperienze = [], onEdit, onDelete }) => {
  const esperienzeOrdinate = [...esperienze].sort((a, b) => {
    return parseInt(a.stagione?.split("-")[0]) - parseInt(b.stagione?.split("-")[0]);
  });

  return (
    <div className="overflow-x-auto py-6">
      <div className="flex space-x-6 min-w-[900px] px-4">
        {esperienzeOrdinate.map((exp, index) => {
          const isComplete = exp.club && exp.ruolo && exp.stagione && exp.livello && exp.paese;

          return (
            <div
              key={index}
              className="min-w-[250px] bg-white shadow-md border border-gray-200 rounded-xl p-4 flex-shrink-0 hover:shadow-lg transition cursor-pointer"
              onClick={() => onEdit && onEdit(exp)}
            >
              <div className="text-sm font-semibold text-indigo-600">{exp.club}</div>
              <div className="text-xs text-gray-600">{exp.ruolo || "Ruolo"} · {exp.livello}</div>
              <div className="text-xs text-gray-500 mt-1">
                {exp.stagione} —{" "}
                {exp.paese && (
                  <>
                    <Flag code={exp.paese} style={{ width: 14, display: "inline" }} />{" "}
                    <span>{exp.paese}</span>
                  </>
                )}
              </div>
              {exp.matchGiocati && (
                <div className="text-xs text-gray-400 mt-1">
                  Match giocati: {exp.matchGiocati}
                </div>
              )}
              <div className="mt-3 flex gap-3 text-xs text-blue-600">
                <button onClick={(e) => { e.stopPropagation(); onEdit && onEdit(exp); }}>Modifica</button>
                <button onClick={(e) => { e.stopPropagation(); onDelete && onDelete(exp); }} className="text-red-500">Elimina</button>
              </div>
            </div>
          );
        })}

        {/* Box Aggiungi */}
        <div
          className="min-w-[250px] flex items-center justify-center bg-indigo-50 border border-indigo-300 rounded-xl p-4 cursor-pointer hover:bg-indigo-100 transition"
          onClick={() => onEdit && onEdit(null)}
        >
          <div className="text-indigo-700 font-semibold text-sm">+ Aggiungi Esperienza</div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEsperienze;
