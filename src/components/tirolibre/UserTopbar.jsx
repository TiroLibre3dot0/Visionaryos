// src/components/tirolibre/UserTopbar.jsx
import { LogOut } from "lucide-react";
import LogoutButton from "./LogoutButton";
import { useUser } from "../../context/UserContext";
import { useLocation } from "react-router-dom";

const UserTopbar = () => {
  const { user } = useUser();
  const location = useLocation();

  const avatarLetter = user?.firstName?.charAt(0)?.toUpperCase() || "?";
  const fullName = user ? `${user.firstName} ${user.lastName}` : "Utente";

  const getSectionTitle = () => {
    if (location.hash.includes("carriera")) return "📈 Carriera";
    if (location.hash.includes("competenze")) return "🧠 Competenze";
    if (location.hash.includes("network")) return "🌐 Network";
    if (location.hash.includes("pitch")) return "🎤 Pitch";
    return "👤 Profilo Personale";
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
      <h1 className="text-lg font-semibold text-gray-700 tracking-tight">
        {getSectionTitle()}
      </h1>

      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
          {avatarLetter}
        </div>

        <span className="text-sm text-gray-700 font-medium">{fullName}</span>

        <LogoutButton>
          <LogOut className="w-5 h-5" />
        </LogoutButton>
      </div>
    </header>
  );
};

export default UserTopbar;
