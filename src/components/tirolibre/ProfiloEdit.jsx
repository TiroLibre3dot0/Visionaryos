import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../firebase";

const ProfiloEdit = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    location: "",
    bio: "",
    image: "",
    quote: "",
  });

  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Ottieni UID utente autenticato
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        console.warn("Utente non loggato");
      }
    });
    return () => unsubscribe();
  }, []);

  // Carica dati esistenti da Firestore
  useEffect(() => {
    if (!uid) return;
    const loadData = async () => {
      try {
        const docRef = doc(db, "users", uid);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const data = snap.data();
          setFormData((prev) => ({
            ...prev,
            ...data.profile, // <-- cerca sotto "profile"
          }));
        }
      } catch (error) {
        console.error("Errore nel caricamento dati:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [uid]);

  // Autosave
  useEffect(() => {
    if (!uid || loading) return;

    setSaving(true);
    const timeout = setTimeout(async () => {
      try {
        const userRef = doc(db, "users", uid);
        await setDoc(userRef, { profile: formData }, { merge: true });
        setSaving(false);
      } catch (error) {
        console.error("Errore nel salvataggio:", error);
      }
    }, 800);
    return () => clearTimeout(timeout);
  }, [formData, uid, loading]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return <div className="text-center text-gray-500 py-10">⏳ Caricamento dati in corso...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 space-y-6 relative">
      <h2 className="text-2xl font-bold text-gray-800">👤 Profilo Personale</h2>

      {saving && (
        <div className="absolute top-4 right-4 text-sm text-yellow-700 bg-yellow-100 px-3 py-1 rounded shadow border border-yellow-200">
          💾 Salvataggio in corso...
        </div>
      )}

      {/* Nome */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nome e Cognome</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Ruolo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ruolo Professionale</label>
        <input
          type="text"
          value={formData.role}
          onChange={(e) => handleChange("role", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Località */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Località</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => handleChange("location", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Bio (max 400 caratteri)</label>
        <textarea
          value={formData.bio}
          onChange={(e) => handleChange("bio", e.target.value)}
          rows={4}
          maxLength={400}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Immagine */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">URL immagine profilo</label>
        <input
          type="text"
          value={formData.image}
          onChange={(e) => handleChange("image", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        {formData.image && (
          <img src={formData.image} alt="Anteprima" className="mt-4 w-32 h-32 rounded-full object-cover border" />
        )}
      </div>

      {/* Citazione */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Citazione personale</label>
        <textarea
          value={formData.quote}
          onChange={(e) => handleChange("quote", e.target.value)}
          rows={2}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default ProfiloEdit;
