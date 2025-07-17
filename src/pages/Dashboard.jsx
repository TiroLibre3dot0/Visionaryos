import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to VisionaryOS</h1>
      <p className="mb-10 text-gray-400">Use the dashboard to manage and navigate all your active Web 3.0 projects.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* TiroLibre */}
        <div className="bg-zinc-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-white mb-2">TiroLibre 3.0</h2>
          <p className="text-gray-400 mb-4">Manage profiles, visibility, contracts and performance metrics.</p>
          <button
            onClick={() => navigate("/tirolibre")}
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
          >
            Open Project
          </button>
        </div>

        {/* Startup Builder */}
        <div className="bg-zinc-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-white mb-2">Startup Builder</h2>
          <p className="text-gray-400 mb-4">Generate startup ideas and build your business model canvas.</p>
          <button
            onClick={() => navigate("/startup-builder")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded"
          >
            Open Project
          </button>
        </div>

        {/* ✅ EIT Program */}
        <div className="bg-zinc-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-white mb-2">EIT Program</h2>
          <p className="text-gray-400 mb-4">Explore the gut-brain system and launch the EIT project.</p>
          <button
            onClick={() => navigate("/EITPanel")}
            className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded"
          >
            Open Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
