import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        localStorage.setItem("user", JSON.stringify(userData));

        toast.success(`Bentornato ${userData.firstName}!`);

        if (!userData.profileCompleted) {
          navigate("/tirolibre/admin#profilo");
        } else {
          navigate(`/profilo/${userData.slug}/carriera`);
        }
      } else {
        setErrorMsg("Utente non trovato nel database.");
      }
    } catch (error) {
      console.error("Errore login:", error.message);
      setErrorMsg("Credenziali non valide.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Accedi al tuo account
        </h2>
        {errorMsg && <p className="text-red-600 text-sm mb-4">{errorMsg}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg"
          >
            Accedi
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Non hai un account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Registrati
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
