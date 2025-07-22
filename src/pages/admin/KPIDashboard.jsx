// src/pages/admin/KPIDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaMousePointer, FaClock } from "react-icons/fa";
import axios from "axios";

const KPIDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/mindt/getCTAStats");
        setStats(res.data.data);
      } catch (err) {
        console.error("Errore fetch KPI:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="p-6">
      <button
        onClick={() => navigate("/Mindt-admin")}
        className="mb-6 flex items-center gap-2 text-sm text-purple-400 hover:text-purple-200"
      >
        <FaArrowLeft /> Back to Admin Dashboard
      </button>

      <h1 className="text-2xl font-bold mb-6">📈 Business Intelligence Dashboard</h1>

      {loading ? (
        <p className="text-zinc-400">Loading data...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(stats).map(([key, value]) => {
            const parsed = typeof value === "string" ? JSON.parse(value) : value;
            return (
              <div key={key} className="bg-zinc-800 p-5 rounded-lg shadow-md hover:bg-zinc-700 transition">
                <h2 className="text-xl font-semibold capitalize mb-4">{key.replace("_", " ")}</h2>
                <div className="flex items-center justify-between text-zinc-300">
                  <div className="flex items-center gap-2">
                    <FaEye className="text-purple-400" />
                    <span>Views:</span>
                  </div>
                  <span className="text-white font-bold">{parsed.views}</span>
                </div>
                <div className="flex items-center justify-between mt-3 text-zinc-300">
                  <div className="flex items-center gap-2">
                    <FaMousePointer className="text-purple-400" />
                    <span>Clicks:</span>
                  </div>
                  <span className="text-white font-bold">{parsed.clicks}</span>
                </div>
                <div className="mt-4 text-xs text-zinc-400 italic flex items-center gap-2">
                  <FaClock />
                  <span>Detailed time breakdown coming soon</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default KPIDashboard;
