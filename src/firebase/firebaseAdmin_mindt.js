// src/firebase/firebaseAdmin_mindt.js
import admin from 'firebase-admin';
import serviceAccount from './mindtServiceAccountKey.json' assert { type: "json" };

// Evita inizializzazioni duplicate
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();
export { db };
