const Mindtprogram = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">🚀 Mindt Program</h2>
      <p className="text-zinc-400 mb-6">This section will load the Mindt startup.</p>

      <button
        onClick={() => window.open("/Mindt-landing", "_blank")}
        className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded"
      >
        View Mindt Landing
      </button>
    </div>
  );
};

export default Mindtprogram;
