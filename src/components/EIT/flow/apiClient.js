// src/api/apiClient.js
export const getInsightFromGPT = async ({ question, answer, language = "en" }) => {
  try {
    const response = await fetch("http://localhost:3001/api/insight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        answer,
        language,
      }),
    });

    if (!response.ok) {
      throw new Error("Server response not ok");
    }

    const data = await response.json();
    return data.insight;
  } catch (error) {
    console.error("❌ GPT API Error:", error);
    return "We're having trouble generating insights at the moment.";
  }
};
