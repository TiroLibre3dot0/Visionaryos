import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { toast } from "react-hot-toast";

const useEsperienze = () => {
  const [user] = useAuthState(auth);
  const [esperienze, setEsperienze] = useState([]);
  const [fraseGenerata, setFraseGenerata] = useState("");
  const [frasePubblica, setFrasePubblica] = useState(false);
  const [fraseData, setFraseData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 📥 Caricamento dati da Firestore
  useEffect(() => {
    if (!user) return;
    const loadData = async () => {
      try {
        const docRef = doc(db, "carriere", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setEsperienze(data.esperienze || []);
          setFraseGenerata(data.fraseGenerata || "");
          setFrasePubblica(data.frasePubblica || false);
          setFraseData(data.fraseData || null);
        }
      } catch (err) {
        toast.error("Errore nel caricamento dati carriera");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [user]);

  // 💾 Salva tutto su Firestore
  const saveAll = async (newData = {}) => {
    if (!user) return;
    try {
      await setDoc(doc(db, "carriere", user.uid), {
        esperienze,
        fraseGenerata,
        frasePubblica,
        fraseData,
        ...newData,
      });
    } catch (err) {
      toast.error("Errore nel salvataggio dati");
      console.error(err);
    }
  };

  // ➕ Aggiungi esperienza
  const addEsperienza = async (newExp) => {
    const updated = [...esperienze, newExp];
    setEsperienze(updated);
    await saveAll({ esperienze: updated });
  };

  // 🖊️ Modifica esperienza (sovrascrive per indice)
  const updateEsperienza = async (index, updatedExp) => {
    const updated = [...esperienze];
    updated[index] = updatedExp;
    setEsperienze(updated);
    await saveAll({ esperienze: updated });
  };

  // ❌ Rimuovi esperienza
  const removeEsperienza = async (index) => {
    const updated = esperienze.filter((_, i) => i !== index);
    setEsperienze(updated);
    await saveAll({ esperienze: updated });
  };

  // 🤖 Salva frase generata AI
  const updateFrase = async (frase, data) => {
    setFraseGenerata(frase);
    setFraseData(data);
    await saveAll({ fraseGenerata: frase, fraseData: data });
  };

  // 🔄 Toggle pubblica/privata
  const toggleFrasePubblica = async () => {
    const newStatus = !frasePubblica;
    setFrasePubblica(newStatus);
    await saveAll({ frasePubblica: newStatus });
  };

  return {
    esperienze,
    fraseGenerata,
    frasePubblica,
    fraseData,
    loading,
    addEsperienza,
    updateEsperienza,
    removeEsperienza,
    updateFrase,
    toggleFrasePubblica,
  };
};

export default useEsperienze;
