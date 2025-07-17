const TiroLibreAdmin = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-white">TiroLibre Admin Panel</h1>

      {/* Promozioni utente */}
      <section className="bg-zinc-900 p-6 rounded-xl shadow border border-zinc-700">
        <h2 className="text-xl font-semibold mb-4">🎯 Promote a User</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter user ID or email"
            className="p-2 rounded-md bg-zinc-800 text-white border border-zinc-700 flex-1"
          />
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white font-semibold">
            Activate Promo
          </button>
        </div>
      </section>

      {/* Analytics */}
      <section className="bg-zinc-900 p-6 rounded-xl shadow border border-zinc-700">
        <h2 className="text-xl font-semibold mb-4">📊 Analytics</h2>
        <p className="text-zinc-400">Track IPA, views and engagement metrics for public profiles (coming soon).</p>
      </section>

      {/* Lista utenti */}
      <section className="bg-zinc-900 p-6 rounded-xl shadow border border-zinc-700">
        <h2 className="text-xl font-semibold mb-4">👤 Users</h2>
        <p className="text-zinc-400">List of active profiles connected to TiroLibre. Management features coming soon.</p>
      </section>
    </div>
  );
};

export default TiroLibreAdmin;
