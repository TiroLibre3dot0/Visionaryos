import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useUserContext } from "../../context/UserContext";
import { Sparkles } from "lucide-react";

const AISummary = ({ section, experiences }) => {
  const { userData } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [approved, setApproved] = useState(false);
  const [fetched, setFetched] = useState(false);

  const sectionKey = `${section}Summary`;
  const approvedKey = `${section}Approved`;

  useEffect(() => {
    const fetchSummary = async () => {
      if (!userData?.uid) return;
      const userRef = doc(db, "users", userData.uid);
      const snap = await getDoc(userRef);
      const data = snap.data();

      if (data?.[sectionKey]) {
        setSummary(data[sectionKey]);
        setApproved(data[approvedKey] || false);
        setFetched(true);
        return;
      }

      if (experiences.length >= 3) {
        setLoading(true);
        try {
          const res = await fetch("/api/generateCareerSummary", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ career: experiences }),
          });

          const { summary } = await res.json();
          setSummary(summary);
          await setDoc(userRef, { [sectionKey]: summary }, { merge: true });
        } catch (error) {
          console.error("Errore nella generazione AI:", error);
        }
        setLoading(false);
      }
      setFetched(true);
    };

    fetchSummary();
  }, [userData, experiences, section]);

  const handleApproval = async (e) => {
    setApproved(e.target.checked);
    if (userData?.uid) {
      const userRef = doc(db, "users", userData.uid);
      await setDoc(userRef, { [approvedKey]: e.target.checked }, { merge: true });
    }
  };

  if (!fetched) return null;

  return (
    <div className="max-w-3xl mx-auto mt-6 text-center space-y-4">
      {loading ? (
        <p className="text-gray-500 italic">Generazione in corso...</p>
      ) : summary ? (
        <>
          <p className="text-xl font-medium text-gray-700">
            <Sparkles className="inline w-5 h-5 mr-1 text-purple-400" /> {summary}
          </p>
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox text-purple-500"
              checked={approved}
              onChange={handleApproval}
            />
            <span className="text-sm text-gray-600">Approvo la pubblicazione di questa frase nel profilo pubblico</span>
          </label>
        </>
      ) : (
        <p className="text-gray-400 italic">
          La frase AI verrà generata automaticamente al completamento di almeno <strong>3 esperienze</strong>.
        </p>
      )}
    </div>
  );
};

export default AISummary;
