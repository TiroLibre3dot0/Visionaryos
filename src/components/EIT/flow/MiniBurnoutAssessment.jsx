// src/components/EIT/flow/MiniBurnoutAssessment.jsx
import React, { useState, useContext } from "react";
import { burnoutQuestions } from "./burnoutQuestionsShort";
import { LanguageContext } from "../../../context/LanguageContext"; // Da creare se non esiste

const MiniBurnoutAssessment = ({ onComplete }) => {
  const { language } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = ["EE1", "EE2", "DP1", "DP2", "RP1", "RP2"];
  const q = burnoutQuestions[language];

  const handleAnswer = (score) => {
    const newAnswers = [...answers, { question: questions[currentIndex], score }];
    setAnswers(newAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-xl mx-auto text-gray-800">
      <h2 className="text-xl font-semibold mb-4">
        {q[questions[currentIndex]]}
      </h2>
      <div className="flex flex-col space-y-3">
        {q.options.map((label, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="bg-zinc-100 hover:bg-zinc-200 py-2 px-4 rounded-lg text-left shadow"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MiniBurnoutAssessment;
