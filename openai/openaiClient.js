import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Genera una frase riassuntiva della carriera calcistica.
 * @param {Array} esperienze - Lista delle esperienze calcistiche [{ club, ruolo, stagione, ecc. }]
 * @param {string} ruolo - Ruolo del calciatore o figura professionale
 * @returns {string} - Frase generata da OpenAI
 */
export async function generateCareerSummary(esperienze, ruolo) {
  if (!esperienze || esperienze.length === 0) {
    return "Nessuna esperienza disponibile.";
  }

  const esperienzeDescrittive = esperienze.map((exp) => {
    return `${exp.ruolo || "?"} presso ${exp.club || "?"} (${exp.stagione || "?"}, ${exp.livello || "?"}, ${exp.nazione || "?"})`;
  });

  const esperienzeText = esperienzeDescrittive.join(" | ");
  const ruoloPrincipale = ruolo || esperienze[0]?.ruolo || "professionista del calcio";

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `
Sei un assistente esperto nel raccontare carriere calcistiche in modo autentico, professionale e coinvolgente. 
Il tuo compito è scrivere una breve descrizione (max 3 righe) che valorizzi il percorso professionale dell’utente, tenendo conto delle sue esperienze e del ruolo principale. 
La frase deve essere adatta per un profilo pubblico su una piattaforma professionale.

- Se il ruolo è da calciatore, metti in luce versatilità, crescita e presenza internazionale.
- Se è tecnico o extra-campo (es. giornalista, social manager), evidenzia competenze trasversali e impatto nel team.
- Evita elenco di club. Non usare frasi vuote. Racconta il valore reale.
`.trim(),
      },
      {
        role: "user",
        content: `
Esperienze professionali: ${esperienzeText}
Ruolo principale: ${ruoloPrincipale}
Scrivi ora una frase professionale per un portfolio pubblico.
`.trim(),
      },
    ],
    temperature: 0.75,
  });

  const content = completion.choices?.[0]?.message?.content?.trim();
  return content || "Non è stato possibile generare la frase.";
}
