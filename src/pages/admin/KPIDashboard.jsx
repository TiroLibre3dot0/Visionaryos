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
        onClick={() => navigate("/mindt-admin")}
        className="mb-6 flex items-center gap-2 text-sm text-purple-400 hover:text-purple-200"
      >
        <FaArrowLeft /> Back to Admin Dashboard
      </button>

      <h1 className="text-2xl font-bold mb-6">📊 Business Intelligence Dashboard</h1>

      {loading ? (
        <p className="text-zinc-400">Loading data...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(stats).map(([colorKey, value]) => {
            const data = typeof value === "string" ? JSON.parse(value) : value;
            const { clicks = 0, views = 0, label = "", lastUpdate = "" } = data;
            const ctr = views > 0 ? ((clicks / views) * 100).toFixed(1) : "0.0";
            const labelDisplay = label || "No label";
            const formattedDate = lastUpdate
              ? new Date(lastUpdate).toLocaleString("it-IT", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "—";

            return (
              <div
                key={colorKey}
                className="bg-zinc-800 p-5 rounded-lg shadow-md hover:bg-zinc-700 transition"
              >
                <h2 className="text-xl font-semibold capitalize mb-2">
                  🎨 {colorKey.replace("_", " ")}
                </h2>

                <p className="text-sm italic text-zinc-400 mb-4">
                  📝 <span className="text-white">{labelDisplay}</span>
                </p>

                <div className="flex items-center justify-between text-zinc-300">
                  <div className="flex items-center gap-2">
                    <FaEye className="text-purple-400" />
                    <span>Views:</span>
                  </div>
                  <span className="text-white font-bold">{views}</span>
                </div>

                <div className="flex items-center justify-between mt-2 text-zinc-300">
                  <div className="flex items-center gap-2">
                    <FaMousePointer className="text-purple-400" />
                    <span>Clicks:</span>
                  </div>
                  <span className="text-white font-bold">{clicks}</span>
                </div>

                <div className="flex items-center justify-between mt-2 text-zinc-300">
                  <div className="flex items-center gap-2">
                    📈 <span>CTR:</span>
                  </div>
                  <span className="text-white font-bold">{ctr}%</span>
                </div>

                <div className="mt-4 text-xs text-zinc-400 italic flex items-center gap-2">
                  <FaClock />
                  <span>Last update: {formattedDate}</span>
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
