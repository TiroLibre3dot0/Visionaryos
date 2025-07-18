// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import { generateCareerSummary } from "./openai/openaiClient.js";
import { generateInsight } from "./openai/insightGenerator.js";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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

// ✅ Endpoint 3: Genera feedback riassuntivo finale
app.post("/api/final-summary", async (req, res) => {
  const { answers, insights, lang } = req.body;

  const userPrompt = `
${lang === "it" ? `Analizza il seguente percorso di un utente che ha appena completato un test sul burnout.` : `Analyze the following user journey that has just completed a burnout test.`}

${lang === "it" ? `Queste sono le sue risposte:` : `Here are the user's answers:`}
${JSON.stringify(answers, null, 2)}

${lang === "it" ? `Questi sono i feedback parziali:` : `These are the intermediate feedbacks:`}
${insights.map((txt, i) => `Step ${i + 1}: ${txt}`).join("\n")}

${lang === "it"
? `Scrivi un unico feedback riassuntivo finale, chiaro, sintetico (max 10 righe), utile e con tono amichevole. Non essere generico o troppo formale. Concentrati sui punti reali emersi nel percorso e indica, se necessario, una direzione concreta per migliorare. Evita frasi troppo generiche.`
: `Write a single final summary, friendly and concise (max 10 lines), clearly focused on the actual responses. Avoid generalities. Be helpful, grounded, and offer concrete next steps if needed. Do not overexplain.`}
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a supportive burnout assistant. Always respond in ${lang}.`
        },
        {
          role: "user",
          content: userPrompt
        }
      ]
    });

    const summary = completion.choices[0]?.message?.content?.trim();
    res.json({ summary });
  } catch (err) {
    console.error("Errore generazione summary finale:", err.message);
    res.status(500).json({ error: "Errore generazione feedback finale" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server avviato su http://localhost:${PORT}`);
});
