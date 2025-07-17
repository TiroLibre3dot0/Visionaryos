// src/components/tirolibre/CarrieraEdit.jsx
import React, { useEffect, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import EsperienzaCard from "./EsperienzaCard";
import EsperienzaModal from "./EsperienzaModal";
import EsperienzaForm from "./EsperienzaForm";
import FraseAIBox from "./FraseAIBox";
import TimelineEsperienze from "./TimelineEsperienze";
import toast from "react-hot-toast";

const CarrieraEdit = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.uid;

  const [esperienze, setEsperienze] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [aiFrase, setAiFrase] = useState("");
  const [ruolo, setRuolo] = useState("");

  useEffect(() => {
    if (!userId) return;

    const unsubscribe = onSnapshot(doc(db, "carriere", userId), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setEsperienze(data.esperienze || []);
        setAiFrase(data.fraseRiassuntiva || "");
        setRuolo(data.ruolo || ""); // <- ruolo salvato nel documento Firestore
      } else {
        setEsperienze([]);
      }
    });

    return () => unsubscribe();
  }, [userId]);

  const salvaEsperienze = async (nuoveEsperienze) => {
    try {
      await setDoc(doc(db, "carriere", userId), {
        esperienze: nuoveEsperienze,
      }, { merge: true });
      toast.success("Esperienza salvata");
    } catch (error) {
      toast.error("Errore salvataggio esperienza");
      console.error(error);
    }
  };

  const aggiungiEsperienza = (newExp) => {
    const nuoveEsperienze = [...esperienze, newExp];
    setEsperienze(nuoveEsperienze);
    salvaEsperienze(nuoveEsperienze);
    setModalOpen(false);
  };

  const modificaEsperienza = (index, updatedExp) => {
    const nuoveEsperienze = [...esperienze];
    nuoveEsperienze[index] = updatedExp;
    setEsperienze(nuoveEsperienze);
    salvaEsperienze(nuoveEsperienze);
  };

  const eliminaEsperienza = (index) => {
    const nuoveEsperienze = esperienze.filter((_, i) => i !== index);
    setEsperienze(nuoveEsperienze);
    salvaEsperienze(nuoveEsperienze);
  };

  const calcolaRuoloPrincipale = (esperienze) => {
  if (!esperienze || esperienze.length === 0) return "";

  const conteggio = {};
  esperienze.forEach((exp) => {
    const ruolo = exp.ruolo || "Non specificato";
    conteggio[ruolo] = (conteggio[ruolo] || 0) + 1;
  });

  // Trova il ruolo più ricorrente
  return Object.entries(conteggio).sort((a, b) => b[1] - a[1])[0][0];
};

  return (
    <div className="space-y-10">
      <FraseAIBox
  esperienze={esperienze}
  ruolo={calcolaRuoloPrincipale(esperienze)}
  fraseGenerata={aiFrase}
  onUpdateFrase={async (newFrase) => {
    setAiFrase(newFrase);
    await setDoc(doc(db, "carriere", userId), {
      fraseRiassuntiva: newFrase,
    }, { merge: true });
  }}
/>

      <div className="flex justify-end">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          + Aggiungi Esperienza
        </button>
      </div>

      <EsperienzaModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <EsperienzaForm
          onSave={aggiungiEsperienza}
          closeModal={() => setModalOpen(false)}
        />
      </EsperienzaModal>

      {esperienze.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {esperienze.map((exp, i) => (
              <EsperienzaCard
                key={i}
                esperienza={exp}
                index={i}
                onUpdate={modificaEsperienza}
                onDelete={eliminaEsperienza}
              />
            ))}
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Timeline Esperienze</h3>
            <TimelineEsperienze esperienze={esperienze} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarrieraEdit;
