import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Flag from "react-world-flags";
import CarrieraChart from "./CarrieraChart";

const LEVEL_BADGES = {
  "Under 19": "bg-yellow-100 text-yellow-800",
  "Under 23": "bg-yellow-100 text-yellow-800",
  Primavera: "bg-orange-100 text-orange-800",
  "Serie C": "bg-blue-100 text-blue-800",
  "Serie B": "bg-indigo-100 text-indigo-800",
  "Serie A": "bg-green-100 text-green-800",
  Bundesliga: "bg-green-100 text-green-800",
  "Ligue 2": "bg-blue-100 text-blue-800",
  Eredivisie: "bg-purple-100 text-purple-800",
  "Premier League": "bg-violet-100 text-violet-800",
  "Youth Sector": "bg-gray-100 text-gray-600",
  "Tier 1": "bg-blue-50 text-blue-800",
  "Tier 2": "bg-blue-100 text-blue-800",
  "Tier 3": "bg-blue-200 text-blue-800",
  "Tier 4": "bg-blue-300 text-blue-800",
  "Tier 5": "bg-blue-400 text-white",
  "Tier 6": "bg-blue-500 text-white",
  Other: "bg-gray-200 text-gray-700",
};

export default function Carriera({ onClose, onNavigate, previous, next }) {
  const { slug } = useParams();
  const [showAll, setShowAll] = useState(false);
  const [esperienze, setEsperienze] = useState([]);
  const [nomeUtente, setNomeUtente] = useState("Profilo pubblico");

  useEffect(() => {
    const fetchEsperienze = async () => {
      try {
        const utentiRef = collection(db, "users");
        const q = query(utentiRef, where("slug", "==", slug));
        const querySnap = await getDocs(q);

        if (querySnap.empty) return;

        const userDoc = querySnap.docs[0];
        const userId = userDoc.id;
        const userData = userDoc.data();
        setNomeUtente(`${userData.name} ${userData.surname}`);

        const carrieraRef = doc(db, "carriere", userId);
        const carrieraSnap = await getDoc(carrieraRef);

        if (!carrieraSnap.exists()) return;

        const esperienzeArray = carrieraSnap.data()?.esperienze || [];

        setEsperienze(
          esperienzeArray.sort((a, b) => (a.stagione || "").localeCompare(b.stagione || ""))
        );
      } catch (err) {
        console.error("❌ Errore nel recupero dati:", err);
      }
    };

    fetchEsperienze();
  }, [slug]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#f5f7fa] to-[#ffffff] text-gray-900 overflow-auto">
      <div className="absolute top-4 left-4 z-50 flex flex-wrap gap-2 items-center">
        <h3 className="uppercase text-sm tracking-widest text-gray-700 font-semibold">
          Carriera
        </h3>
        {previous ? (
          <button onClick={() => onNavigate(previous)} className="px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm">
            ← Torna indietro
          </button>
        ) : (
          <button onClick={onClose} className="px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm">
            ← Torna alla Home
          </button>
        )}
      </div>

      {next && (
        <button onClick={() => onNavigate(next)} className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm z-50">
          Prosegui →
        </button>
      )}

      <button onClick={onClose} className="absolute top-4 left-1/2 -translate-x-1/2 text-2xl text-gray-400 hover:text-black z-50" aria-label="Chiudi">
        ×
      </button>

      <div className="max-w-[1280px] mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">{nomeUtente}</h1>
          <h2 className="text-base text-gray-600">Profilo pubblico</h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <CarrieraChart esperienze={esperienze} />
          </div>

          <div className="lg:w-1/2 overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-sm border-collapse table-fixed">
              <thead>
                <tr className="border-b text-left text-gray-500 bg-gray-50">
                  <th className="py-2 px-2">Stagione</th>
                  <th className="py-2 px-2">Club</th>
                  <th className="py-2 px-2">Ruolo</th>
                  <th className="py-2 px-2">Livello</th>
                  <th className="py-2 px-2">Match</th>
                  <th className="py-2 px-2">Naz.</th>
                </tr>
              </thead>
              <tbody>
                {(showAll ? esperienze : esperienze.slice(0, 6)).map((s, i) => (
                  <tr key={i} className="border-b hover:bg-gray-100 text-sm">
                    <td className="py-2 px-2">{s.stagione}</td>
                    <td className="py-2 px-2">{s.club}</td>
                    <td className="py-2 px-2">{s.ruolo}</td>
                    <td className="py-2 px-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${LEVEL_BADGES[s.categoria] || "bg-gray-100 text-gray-700"}`}>
                        {s.categoria}
                      </span>
                    </td>
                    <td className="py-2 px-2">{s.partite ?? "—"}</td>
                    <td className="py-2 px-2">
                      {s.paeseCode && (
                        <Flag code={s.paeseCode} style={{ width: "24px", height: "16px", borderRadius: "2px" }} title={s.paese} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {esperienze.length > 6 && (
              <div className="mt-4 text-center">
                <button onClick={() => setShowAll(!showAll)} className="text-sm text-violet-700 hover:underline">
                  {showAll ? "Mostra meno" : "Mostra tutte le stagioni"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
