// src/frontend/components/AISummary.jsx

import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const AISummary = ({ experiences, section = "carriera" }) => {
  const [summary, setSummary] = useState("");
  const [approved, setApproved] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateFromAI = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://YOUR_FIREBASE_URL/api/generateCareerSummary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ experiences }),
      });
      const data = await res.json();
      setSummary(data.summary);
    } catch (err) {
      toast.error("Errore nella generazione del testo AI.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (experiences?.length >= 3) {
      generateFromAI();
    }
  }, [experiences]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-4 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">
        {section === "carriera" ? "Riepilogo della carriera" : "Riepilogo AI"}
      </h2>

      {loading && <p className="text-sm text-gray-500">Generazione in corso...</p>}

      {!summary && experiences?.length < 3 && (
        <p className="text-sm text-gray-500 italic">
          Inserisci almeno 3 esperienze per generare un riepilogo AI di questa sezione.
        </p>
      )}

      {summary && (
        <>
          <p className="text-gray-700 text-base mb-3">{summary}</p>

          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={approved}
              onChange={() => setApproved(!approved)}
              className="h-4 w-4 text-blue-600"
            />
            <span className="text-sm text-gray-600">
              Approvato per la pubblicazione
            </span>
          </label>
        </>
      )}
    </div>
  );
};

export default AISummary;
