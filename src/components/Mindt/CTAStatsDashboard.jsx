// src/components/Mindt/CTAStatsDashboard.jsx

import React, { useEffect, useState } from "react";

const CTAStatsDashboard = () => {
  const [ctaData, setCtaData] = useState(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://visionaries.space"; // Cambia con il tuo dominio Vercel

  useEffect(() => {
    const fetchCTAStats = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/mindt/getCTAStats`);
        const json = await res.json();
        if (json.success && json.data) {
          const formatted = Object.entries(json.data).map(([id, values]) => ({
            id,
            ...values,
          }));
          setCtaData(formatted);
        } else {
          setCtaData([]);
        }
      } catch (err) {
        console.error("Errore nel recupero dei dati CTA:", err);
        setCtaData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCTAStats();
  }, []);

  return (
    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white">
        📊 CTA Interactions (Live)
      </h2>

      {loading ? (
        <p className="text-zinc-400">Caricamento in corso...</p>
      ) : !ctaData || ctaData.length === 0 ? (
        <p className="text-zinc-400">Nessun dato disponibile.</p>
      ) : (
        <ul className="space-y-2">
          {ctaData.map((item) => (
            <li
              key={item.id}
              className="bg-zinc-800 p-3 rounded flex justify-between items-center"
            >
              <span className="text-white font-semibold capitalize">
                {item.id}
              </span>
              <span className="text-sm text-zinc-400">
                👁️ {item.views || 0} • 🖱️ {item.clicks || 0}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CTAStatsDashboard;
