// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateCareerSummary } from "./openai/openaiClient.js";
import { generateInsight } from "./openai/insightGenerator.js"; // ✅ nuovo import

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// ✅ Endpoint 1: Genera riepilogo carriera (già esistente)
app.post("/api/generate-career-summary", async (req, res) => {
  const { esperienze, ruolo } = req.body;

  try {
    const summary = await generateCareerSummary(esperienze, ruolo);
    res.json({ summary });
  } catch (error) {
    console.error("Errore generazione:", error.message);
    res.status(500).json({ error: "Errore generazione" });
  }
});

// ✅ Endpoint 2: Genera insight per burnout
app.post("/api/insight", async (req, res) => {
  const { question, answer, lang } = req.body;

  try {
    const insight = await generateInsight({ question, answer, lang });
    res.json({ insight });
  } catch (error) {
    console.error("Errore API Insight:", error.message);
    res.status(500).json({ error: "Insight generation failed" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server avviato su http://localhost:${PORT}`);
});
