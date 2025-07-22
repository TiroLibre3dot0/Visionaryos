// visionaryos/server.mindt.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./src/firebase/firebaseClient_mindt.js"; // ← Admin SDK

dotenv.config();
const app = express();
const port = 4000;

app.use(cors());

app.get("/api/mindt/getCTAStats", async (req, res) => {
  try {
    const snapshot = await db.collection("ctaStats").get();
    const stats = {};

    snapshot.forEach((doc) => {
      const raw = doc.data();

      if (typeof raw === "string") {
        try {
          stats[doc.id] = JSON.parse(raw);
        } catch {
          stats[doc.id] = {};
        }
      } else {
        stats[doc.id] = raw;
      }
    });

    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    console.error("Errore fetch CTA Stats:", error);
    res.status(500).json({ success: false, message: "Errore nel recupero dati" });
  }
});

app.listen(port, () => {
  console.log(`✅ API Mindt attiva su http://localhost:${port}`);
});
