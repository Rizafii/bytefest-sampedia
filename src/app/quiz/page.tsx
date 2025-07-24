"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuizIntro from "./components/QuizIntro";
import QuizGame from "./components/QuizGame";

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="min-h-screen w-full  overflow-x-hidden bg-gradient-to-tl from-purple-100/20 via-purple-100/10 to-white">
      <Navbar />

      {!quizStarted ? (
        <QuizIntro onStartQuiz={handleStartQuiz} />
      ) : (
        <QuizGame />
      )}

      <Footer />
    </div>
  );
}
