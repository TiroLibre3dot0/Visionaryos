import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Startup Builder",
      description: "Genera idee, struttura il canvas e costruisci la tua startup Web 3.0.",
      path: "/startup-builder",
      color: "bg-emerald-600 hover:bg-emerald-700",
    },
    {
      title: "Mindt Program",
      description: "Percorso per il benessere psicofisico con AI e functional food.",
      path: "/Mindt", // 👈 Mindt Home
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      title: "TiroLibre 3.0",
      description: "Gestione profili calcistici, visibilità, trattative e carriera.",
      path: "/tirolibre-entry", // 👈 TiroLibre Home
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Benvenuto su VisionaryOS</h1>
      <p className="mb-10 text-gray-400">Gestisci e accedi ai tuoi progetti da un'unica dashboard centralizzata.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-zinc-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <button
              onClick={() => navigate(project.path)}
              className={`${project.color} text-white py-2 px-4 rounded transition`}
            >
              Open Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
