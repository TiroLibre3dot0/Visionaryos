// src/pages/admin/MindtPanel.jsx
import React from "react";
import { FaLeaf } from "react-icons/fa"; // icona wellness (opzionale)

const MindtPanel = () => {
  const openMindtHome = () => {
    window.open("/Mindt-home", "_blank");
  };

  return (
    <div className="text-white p-6">
      <div className="flex items-center gap-2 mb-6">
        <FaLeaf className="text-green-400 text-3xl" />
        <h1 className="text-3xl font-bold">MindtPanel – Wellness Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* BOX: Open Public Homepage */}
        <div className="bg-zinc-900 rounded-lg p-4 shadow-md border border-zinc-700">
          <h2 className="text-xl font-semibold mb-2">Launch Public Homepage</h2>
          <p className="text-sm text-zinc-400 mb-4">
            Open the Mindt Home public page for users. This is the starting point of the flow.
          </p>
          <button
            onClick={openMindtHome}
            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Open Homepage
          </button>
        </div>

        {/* 👇 Qui puoi aggiungere nuovi box nel futuro */}
        {/* <div className="bg-zinc-900 rounded-lg p-4 shadow-md border border-zinc-700">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-sm text-zinc-400 mb-4">More tools and analytics here.</p>
        </div> */}
      </div>
    </div>
  );
};

export default MindtPanel;
