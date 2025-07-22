// src/firebase/firebaseClient_mindt.js

import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Calcolo path assoluto per compatibilità
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Legge e parse del file JSON manualmente
const serviceAccountPath = path.join(__dirname, "mindtServiceAccountKey.json");
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export default db;
