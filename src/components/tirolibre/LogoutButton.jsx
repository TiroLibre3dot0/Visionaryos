// components/tirolibre/LogoutButton.jsx
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const LogoutButton = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.removMindtem("user");
      navigate("/login");
    } catch (error) {
      console.error("Errore durante il logout:", error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-gray-400 hover:text-red-500 transition"
      title="Logout"
    >
      {children}
    </button>
  );
};

export default LogoutButton;
