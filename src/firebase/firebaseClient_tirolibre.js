// src/firebase/firebaseClient.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwAGkd5qIEtVReCSL7s7yJOo0jjr3tZMo",
  authDomain: "visionaryos-589cf.firebaseapp.com",
  projectId: "visionaryos-589cf",
  storageBucket: "visionaryos-589cf.firebasestorage.app",
  messagingSenderId: "753579553280",
  appId: "1:753579553280:web:47a2a949a473bcf23a5ee5"
};

// ✅ Inizializza solo se non già inizializzata
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
