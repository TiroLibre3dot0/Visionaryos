import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateInsight({ question, answer, lang = "en" }) {
  const prompt = `
You are a burnout prevention assistant. You are helping a user reflect on their mental and emotional state.

The user answered the following question:
"${question}"

Their response was: "${answer}"

Write a short, gentle and professional reflection (max 2-3 sentences) that:
- Acknowledges the user's emotional state with empathy
- Offers a neutral, grounded interpretation of the answer
- Adds a brief comparative insight (e.g., how common this feeling is among other people in similar situations)
- Mentions that recovery or improvement is possible with the right steps
- Uses a calm, non-judgmental tone

Use light data if needed (e.g., "1 in 3 people experience this", "Many people in high-pressure roles report similar symptoms").

Language: ${lang}
Only return the final message. No extra explanations.
`;


  try {
    const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    {
      role: "system",
      content: `You are a supportive burnout assistant. Always respond in ${lang}.`
    },
    {
      role: "user",
      content: prompt
    }
  ],
});

    return response.choices[0]?.message?.content?.trim();
  } catch (error) {
    console.error("Errore generazione insight:", error.message);
    return "Sorry, something went wrong while generating your insight.";
  }
}
