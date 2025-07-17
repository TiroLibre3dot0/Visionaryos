import React, { useState } from "react";
import toast from "react-hot-toast";

const FraseAIBox = ({ esperienze, ruolo, fraseGenerata, onUpdateFrase }) => {
  const [loading, setLoading] = useState(false);

  const handleGeneraFrase = async () => {
    if (!esperienze || esperienze.length === 0) {
      toast.error("Aggiungi almeno un'esperienza.");
      return;
    }

    if (!ruolo || ruolo.trim() === "") {
      toast.error("Ruolo mancante. Aggiorna il profilo con il ruolo.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/generate-career-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ esperienze, ruolo }),
      });

      const data = await res.json();
      if (data.summary) {
        onUpdateFrase(data.summary);
        toast.success("Frase generata con successo!");
      } else {
        toast.error("Errore nella risposta dal server.");
      }
    } catch (error) {
      console.error("Errore:", error);
      toast.error("Errore nella connessione al server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-indigo-300 bg-indigo-50 p-4 rounded-xl">
      <div className="text-sm font-semibold text-indigo-800">Frase AI:</div>
      <p className="text-sm text-gray-700 mt-2 min-h-[48px]">
        {fraseGenerata || "Nessuna frase generata."}
      </p>
      <button
        onClick={handleGeneraFrase}
        disabled={loading}
        className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
      >
        {loading ? "Generazione in corso..." : "🎯 Genera frase"}
      </button>
    </div>
  );
};

export default FraseAIBox;
