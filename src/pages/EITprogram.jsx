const EITprogram = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">🚀 EIT Program</h2>
      <p className="text-zinc-400 mb-6">This section will load the EIT startup.</p>

      <button
        onClick={() => window.open("/eit-landing", "_blank")}
        className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded"
      >
        View EIT Landing
      </button>
    </div>
  );
};

export default EITprogram;
