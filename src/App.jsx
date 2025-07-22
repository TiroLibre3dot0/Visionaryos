// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import StartupBuilder from "./pages/StartupBuilder";
import TiroLibre from "./pages/TiroLibre";
import TLPanel from "./pages/admin/TLPanel";
import ProfilesPage from "./pages/admin/ProfilesPage";
import MindtPanel from "./pages/admin/MindtPanel";
import MindtAdmin from "./pages/admin/MindtAdmin";
import MindtAdminProfiles from "./pages/admin/MindtAdminProfiles";
import KPIDashboard from "./pages/admin/KPIDashboard"; // ✅ nuova importazione

import TirolibreEntry from "./components/tirolibre/TirolibreEntry";
import Login from "./components/tirolibre/Login";
import Signup from "./components/tirolibre/Signup";
import UserAdminPanel from "./components/tirolibre/UserAdminPanel";
import CarrieraFirestore from "./components/tirolibre/Carriera_firestore";

import { UserProvider } from "./context/UserContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <UserProvider>
      <LanguageProvider>
        <Router>
          <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

          <Routes>
            <Route
              path="/"
              element={
                <div className="flex bg-zinc-800 min-h-screen text-white">
                  <Sidebar />
                  <div className="flex flex-col flex-1">
                    <Topbar />
                    <main className="flex-1 overflow-y-auto p-4">
                      <Dashboard />
                    </main>
                  </div>
                </div>
              }
            />

            <Route path="/tirolibre-entry" element={<TirolibreEntry />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/tirolibre/admin" element={<UserAdminPanel />} />
            <Route path="/profilo/:slug/carriera" element={<CarrieraFirestore />} />

            <Route
              path="/startup-builder"
              element={
                <div className="flex bg-zinc-800 min-h-screen text-white">
                  <Sidebar />
                  <div className="flex flex-col flex-1">
                    <Topbar />
                    <main className="flex-1 overflow-y-auto p-4">
                      <StartupBuilder />
                    </main>
                  </div>
                </div>
              }
            />

            <Route
              path="/tirolibre"
              element={
                <div className="flex bg-zinc-800 min-h-screen text-white">
                  <Sidebar />
                  <div className="flex flex-col flex-1">
                    <Topbar />
                    <main className="flex-1 overflow-y-auto p-4">
                      <TiroLibre />
                    </main>
                  </div>
                </div>
              }
            />

            <Route
              path="/tlpanel"
              element={
                <div className="flex bg-zinc-800 min-h-screen text-white">
                  <Sidebar />
                  <div className="flex flex-col flex-1">
                    <Topbar />
                    <main className="flex-1 overflow-y-auto p-4">
                      <TLPanel />
                    </main>
                  </div>
                </div>
              }
            />
            <Route
              path="/tlpanel/profiles"
              element={
                <div className="flex bg-zinc-800 min-h-screen text-white">
                  <Sidebar />
                  <div className="flex flex-col flex-1">
                    <Topbar />
                    <main className="flex-1 overflow-y-auto p-4">
                      <ProfilesPage />
                    </main>
                  </div>
                </div>
              }
            />

            <Route
              path="/mindt-admin"
              element={
                <div className="flex bg-zinc-800 min-h-screen text-white">
                  <Sidebar />
                  <div className="flex flex-col flex-1">
                    <Topbar />
                    <main className="flex-1 overflow-y-auto p-4">
                      <MindtAdmin />
                    </main>
                  </div>
                </div>
              }
            />
            <Route
              path="/mindt-admin/profiles"
              element={
                <div className="flex bg-zinc-800 min-h-screen text-white">
                  <Sidebar />
                  <div className="flex flex-col flex-1">
                    <Topbar />
                    <main className="flex-1 overflow-y-auto p-4">
                      <MindtAdminProfiles />
                    </main>
                  </div>
                </div>
              }
            />

            {/* ✅ Nuova rotta KPI */}
            <Route
              path="/mindt-admin/kpi"
              element={
                <div className="flex bg-zinc-800 min-h-screen text-white">
                  <Sidebar />
                  <div className="flex flex-col flex-1">
                    <Topbar />
                    <main className="flex-1 overflow-y-auto p-4">
                      <KPIDashboard />
                    </main>
                  </div>
                </div>
              }
            />
          </Routes>
        </Router>
      </LanguageProvider>
    </UserProvider>
  );
}

export default App;
