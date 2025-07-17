// src/components/tirolibre/DashboardHome.jsx
import React from "react";
import {
  Briefcase,
  User,
  FileText,
  Globe,
  Users,
  BarChart2,
} from "lucide-react";

const DashboardHome = ({ onSelect }) => {
  const profileCompletion = 40; // simulazione % completamento

  const sections = [
    {
      id: "identita",
      title: "Identità",
      description: "Chi sei, cosa fai, dove operi.",
      status: "Da completare",
      icon: <User className="text-blue-600 w-6 h-6" />,
    },
    {
      id: "carriera",
      title: "Carriera",
      description: "Racconta il tuo percorso e le tue esperienze.",
      status: "Parziale",
      icon: <Briefcase className="text-green-600 w-6 h-6" />,
    },
    {
      id: "competenze",
      title: "Competenze",
      description: "Licenze, strumenti, capacità pratiche.",
      status: "Da completare",
      icon: <FileText className="text-yellow-500 w-6 h-6" />,
    },
    {
      id: "obiettivi",
      title: "Obiettivi",
      description: "Dove vuoi arrivare, con quali ambizioni.",
      status: "Completo",
      icon: <Globe className="text-purple-600 w-6 h-6" />,
    },
    {
      id: "contatti",
      title: "Rete",
      description: "Gestisci le persone che ti seguono o ti contattano.",
      status: "Da completare",
      icon: <Users className="text-pink-600 w-6 h-6" />,
    },
    {
      id: "statistiche",
      title: "Statistiche",
      description: "Visualizzazioni, contatti ricevuti, interazioni.",
      status: "In arrivo",
      icon: <BarChart2 className="text-indigo-600 w-6 h-6" />,
    },
  ];

  return (
    <div className="p-6 sm:p-10 bg-slate-50 min-h-screen">
      {/* Header + Progress bar */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          🎯 Completa il tuo profilo professionale
        </h1>
        <p className="text-gray-500 text-sm max-w-xl mb-4">
          Più sezioni completi, più aumentano le tue possibilità di essere notato dai club e dallo staff.
        </p>

        {/* Barra completamento */}
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
          <div
            className="bg-blue-600 h-full text-xs text-white text-center rounded-full transition-all duration-300"
            style={{ width: `${profileCompletion}%` }}
          >
            {profileCompletion}%
          </div>
        </div>
      </div>

      {/* Sezioni */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all text-left p-6 border border-gray-100 hover:border-gray-200 flex flex-col justify-between"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gray-50">{section.icon}</div>
              <div>
                <h2 className="font-semibold text-gray-800 text-lg">{section.title}</h2>
                <p className="text-sm text-gray-500">{section.description}</p>
              </div>
            </div>
            <div>
              <span
                className={`inline-block text-xs px-3 py-1 rounded-full font-medium ${
                  section.status === "Completo"
                    ? "bg-green-100 text-green-600"
                    : section.status === "Parziale"
                    ? "bg-yellow-100 text-yellow-600"
                    : section.status === "In arrivo"
                    ? "bg-gray-200 text-gray-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {section.status}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
