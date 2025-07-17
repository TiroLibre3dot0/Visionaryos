import React, { useState } from "react";

export default function Contatti({ onClose, onNavigate, previous, next }) {
  const roles = ["Club", "DS", "Agente", "Scout", "Altro"];
  const [role, setRole] = useState("Club");
  const [formData, setFormData] = useState({ nome: "", cognome: "", telefono: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#f5f7fa] to-[#ffffff] text-gray-900 overflow-auto">
      {/* Header + Navigazione */}
      <div className="absolute top-4 left-4 z-50 flex flex-wrap gap-2 items-center">
        <h3 className="uppercase text-sm tracking-widest text-gray-700 font-semibold">Contatti</h3>
        {previous ? (
          <button onClick={() => onNavigate(previous)} className="px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm">← Torna indietro</button>
        ) : (
          <button onClick={onClose} className="px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm">← Torna alla Home</button>
        )}
      </div>
      {next && <button onClick={() => onNavigate(next)} className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-sm text-gray-600 border hover:border-gray-400 shadow-sm z-50">Prosegui →</button>}
      <button onClick={onClose} className="absolute top-4 left-1/2 -translate-x-1/2 text-2xl text-gray-400 hover:text-black z-50" aria-label="Chiudi">×</button>

      {/* Corpo */}
      <div className="max-w-[1280px] mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-12 items-start">
        {/* Testo sinistra */}
        <div className="space-y-6 animate-fade-in-up flex-1">
          <h1 className="text-3xl md:text-4xl font-bold">Costruiamo una connessione concreta</h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            Entra a far parte del mio <span className="inline-block bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full mx-1">network</span> professionale. Se operi nel mondo del calcio come
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mx-1">club</span>,
            <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full mx-1">DS</span>,
            <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mx-1">agente</span>, o scout, qui potrai trovare un canale diretto con me.
          </p>
          <p className="text-lg text-gray-800">
            Potremo discutere di <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full mx-1">opportunità</span>,
            <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full mx-1">collaborazioni</span>,
            <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full mx-1">progetti futuri</span> e molto altro.
          </p>
          <p className="text-sm text-gray-600 italic">
            L'email e la password ti serviranno per tornare nella mia pagina in futuro e restare aggiornato.
          </p>
        </div>

        {/* Form destra */}
        <form className="space-y-5 bg-white p-6 rounded-xl shadow-md border animate-fade-in-up flex-1">
          <div className="flex flex-wrap justify-center gap-2">
            {roles.map((r) => (
              <button
                type="button"
                key={r}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition ${role === r ? "bg-violet-600 text-white border-violet-600" : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"}`}
                onClick={() => setRole(r)}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="nome" required placeholder="Nome" className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500" onChange={handleChange} />
            <input name="cognome" required placeholder="Cognome" className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500" onChange={handleChange} />
            <input name="telefono" required placeholder="Telefono" className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500" onChange={handleChange} />
            <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500" onChange={handleChange} />
            <input type="password" name="password" required placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 sm:col-span-2" onChange={handleChange} />
          </div>

          <button type="submit" className="w-full py-3 bg-violet-600 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 transition">
            Unisciti alla mia rete →
          </button>
        </form>
      </div>
    </div>
  );
}
