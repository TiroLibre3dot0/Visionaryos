const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { generateCareerSummary } = require("../server/generateCareerSummary.cjs"); // <-- NOTA: è nella stessa cartella

require("dotenv").config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post("/generateCareerSummary", async (req, res) => {
  try {
    const { experiences } = req.body;
    const summary = await generateCareerSummary(experiences);
    res.status(200).json({ summary });
  } catch (err) {
    console.error("Errore generazione AI:", err);
    res.status(500).json({ error: "Errore generazione frase AI" });
  }
});

exports.api = functions.https.onRequest(app);
