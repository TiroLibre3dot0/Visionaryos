// src/components/tirolibre/UserSidebar.jsx
import { useEffect, useState } from "react";
import {
  User,
  Briefcase,
  FileText,
  Globe,
  Image,
  Phone,
  Quote,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const profileSections = [
  { id: "profilo", label: "Profilo", icon: User },
  { id: "carriera", label: "Carriera", icon: Briefcase },
  { id: "competenze", label: "Competenze", icon: FileText },
  { id: "obiettivi", label: "Obiettivi", icon: Globe },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "contatti", label: "Contatti", icon: Phone },
  { id: "referenze", label: "Referenze", icon: Quote },
];

const UserSidebar = ({ active, onSelect }) => {
  const [expanded, setExpanded] = useState(() => {
    return localStorage.getItem("sidebarExpanded") === "true";
  });

  // Salva lo stato di apertura sidebar
  useEffect(() => {
    localStorage.setItem("sidebarExpanded", expanded.toString());
  }, [expanded]);

  const handleSelect = (id) => {
  onSelect(id);
  window.location.hash = id; // <-- cambia anche lo storico
};

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 shadow-sm flex flex-col justify-between">
      {/* Logo */}
      <div className="px-6 pt-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="text-3xl">⚽</div>
          <h1 className="text-xl font-bold text-blue-700 tracking-tight">Tirolibre</h1>
        </div>

        {/* Menu Profilo Professionale */}
        <div className="mb-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between w-full px-4 py-2 text-gray-700 font-semibold text-sm hover:bg-gray-50 rounded-lg transition"
          >
            <span>Profilo Professionale</span>
            {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {expanded && (
            <nav className="mt-2 flex flex-col gap-1">
              {profileSections.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleSelect(id)}
                  className={`flex items-center gap-3 px-5 py-2 rounded-lg text-left text-sm transition-all
                    ${
                      active === id
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 text-xs text-gray-400">
        © 2025 Tirolibre
      </div>
    </aside>
  );
};

export default UserSidebar;
