// src/pages/admin/TLPanel.jsx
import React from "react";
import { useNavigate, Routes, Route, Outlet } from "react-router-dom";
import ProfilesPage from "./ProfilesPage"; // Import della pagina funzionante

const TLPanel = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Public Profiles",
      description: "View and manage all user-created public profiles.",
      path: "/tlpanel/profiles",
      active: true,
    },
    {
      title: "Homepage Data Feed",
      description: "Monitor new signups and incoming data from Tirolibre homepage.",
      path: "/tlpanel/home-data",
      active: false,
    },
    {
      title: "User Status Tracking",
      description: "Track progress and actions inside each profile.",
      path: "/tlpanel/user-tracking",
      active: false,
    },
    {
      title: "Commercial Tools",
      description: "Manage subscriptions, billing, payments, and revenue.",
      path: "/tlpanel/commercial",
      active: false,
    },
    {
      title: "Internal Messaging",
      description: "View and reply to direct messages sent via Tirolibre.",
      path: "/tlpanel/messages",
      active: false,
    },
    {
      title: "AI Assistant Logs",
      description: "Access all conversations handled by the AI assistant.",
      path: "/tlpanel/ai-logs",
      active: false,
    },
    {
      title: "Club Management",
      description: "Track clubs, contacts, and offer history.",
      path: "/tlpanel/clubs",
      active: false,
    },
    {
      title: "Admin Users",
      description: "Control who has access to TLPanel and permissions.",
      path: "/tlpanel/admins",
      active: false,
    },
  ];

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-8">🎛️ TLPanel – Tirolibre Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow ${
              section.active ? "bg-zinc-800" : "bg-zinc-700 opacity-50 cursor-not-allowed"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
            <p className="text-zinc-400 mb-4">{section.description}</p>
            {section.active ? (
              <button
                onClick={() => navigate(section.path)}
                className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-md text-sm font-medium"
              >
                Open section
              </button>
            ) : (
              <button
                disabled
                className="bg-zinc-600 text-white py-2 px-4 rounded-md text-sm font-medium opacity-40"
              >
                Coming soon
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Qui vengono caricate le sottopagine */}
      <Routes>
        <Route path="profiles" element={<ProfilesPage />} />
      </Routes>

      {/* Oppure se vuoi usare layout annidato, puoi usare Outlet (consigliato se aggiungerai altri sub-path) */}
      {/* <Outlet /> */}
    </div>
  );
};

export default TLPanel;
