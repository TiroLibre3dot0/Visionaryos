import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDocs, collection, query, where } from "firebase/firestore";

const generateSlug = async (name, surname) => {
  const baseSlug = `${name}-${surname}`.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  let slug = baseSlug;
  let counter = 1;

  const usersRef = collection(db, "users");

  while (true) {
    const q = query(usersRef, where("slug", "==", slug));
    const snapshot = await getDocs(q);
    if (snapshot.empty) break;
    slug = `${baseSlug}-${counter++}`;
  }

  return slug;
};

const Signup = () => {
  const [role, setRole] = useState("Calciatore");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const slug = await generateSlug(firstName, lastName);

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        role,
        firstName,
        lastName,
        phone,
        email,
        slug,
        profileCompleted: false, // ✅ NECESSARIO per il controllo accessi
        createdAt: new Date(),
      });

      navigate("/tirolibre/admin#profilo");
    } catch (error) {
      console.error("Errore nella registrazione:", error);
      alert("Errore: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Crea un nuovo account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Ruolo</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option>Calciatore</option>
              <option>Allenatore</option>
              <option>Direttore Sportivo</option>
              <option>Agente</option>
              <option>Scout</option>
              <option>Club</option>
              <option>Altro</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Cognome</label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Telefono</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+39 333 1234567"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

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
            Crea il mio account
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Hai già un account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Accedi
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
