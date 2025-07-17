// src/components/EIT/flow/SummaryFeedback.jsx

import React from "react";
import BurnoutAnalyzer from "./BurnoutAnalyzer";
import { useLanguage } from "../../../context/LanguageContext";

const SummaryFeedback = ({ answers, insights }) => {
  const { language } = useLanguage();

  return (
    <div className="p-6 bg-zinc-800 text-white rounded-lg space-y-6">
      <h2 className="text-2xl font-bold">
        {language === "it"
          ? "Riepilogo del Test"
          : language === "es"
          ? "Resumen del Test"
          : "Test Summary"}
      </h2>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="p-3 border-l-4 border-blue-400 bg-zinc-700">
            <p className="text-sm italic">{insight}</p>
          </div>
        ))}
      </div>

      {/* 🔍 Risultato Generale */}
      <BurnoutAnalyzer answers={answers} language={language} />
    </div>
  );
};

export default SummaryFeedback;
