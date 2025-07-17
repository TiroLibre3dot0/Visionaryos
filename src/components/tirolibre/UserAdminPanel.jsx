// src/components/tirolibre/UserAdminPanel.jsx
import React, { useState } from "react";
import UserSidebar from "./UserSidebar";
import UserTopbar from "./UserTopbar";
import DashboardHome from "./DashboardHome";
import ProfiloEdit from "./ProfiloEdit";
import Profilo from "./Profilo";
import Carriera from "./Carriera_firestore";
import CarrieraEdit from "./CarrieraEdit";
import Competenze from "./Competenze";
import Obiettivi from "./Obiettivi";
import Contatti from "./Contatti";

const UserAdminPanel = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
  switch (activeSection) {
    case "profilo":
      return <section id="profilo"><ProfiloEdit /></section>;
    case "carriera":
      return <section id="carriera"><CarrieraEdit /></section>;
    case "competenze":
      return <section id="competenze"><CompetenzeEdit /></section>;
    case "obiettivi":
      return <section id="obiettivi"><ObiettiviEdit /></section>;
    case "contatti":
      return <section id="contatti"><ContattiEdit /></section>;
    default:
      return <DashboardHome onSelect={setActiveSection} />;
  }
};

  return (
    <div className="flex h-screen bg-gray-100">
      <UserSidebar active={activeSection} onSelect={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <UserTopbar user={{ name: "Mario Rossi" }} onLogout={() => alert("Logout")} />
        <main className="flex-1 overflow-y-auto p-4">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default UserAdminPanel;
