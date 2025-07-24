"use client";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Star,
  Clock,
  Target,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
  points: number;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Berapa lama waktu yang dibutuhkan untuk botol plastik terurai secara alami?",
    options: ["50 tahun", "100 tahun", "450 tahun", "1000 tahun"],
    correctAnswer: 2,
    explanation:
      "Botol plastik membutuhkan waktu sekitar 450 tahun untuk terurai secara alami di lingkungan, itulah mengapa penting untuk mendaur ulang.",
    difficulty: "easy",
    category: "Fakta Lingkungan",
    points: 10,
  },
  {
    id: 2,
    question: "Apa kepanjangan dari 3R dalam pengelolaan sampah?",
    options: [
      "Reduce, Reuse, Recycle",
      "Remove, Reduce, Recycle",
      "Reduce, Replace, Recycle",
      "Reuse, Replace, Remove",
    ],
    correctAnswer: 0,
    explanation:
      "3R adalah Reduce (mengurangi), Reuse (menggunakan kembali), dan Recycle (mendaur ulang) - prinsip dasar pengelolaan sampah berkelanjutan.",
    difficulty: "easy",
    category: "Prinsip Dasar",
    points: 10,
  },
  {
    id: 3,
    question: "Sampah organik yang paling cocok untuk dijadikan kompos adalah?",
    options: [
      "Sisa makanan berminyak",
      "Daun kering dan sisa sayuran",
      "Tulang ayam dan ikan",
      "Kulit jeruk dan nanas",
    ],
    correctAnswer: 1,
    explanation:
      "Daun kering dan sisa sayuran adalah bahan kompos terbaik karena mudah terurai dan kaya nutrisi untuk tanaman.",
    difficulty: "medium",
    category: "Pengomposan",
    points: 15,
  },
  {
    id: 4,
    question:
      "Manakah yang BUKAN termasuk sampah B3 (Bahan Berbahaya dan Beracun)?",
    options: [
      "Baterai bekas",
      "Lampu neon",
      "Botol kaca bekas",
      "Obat kedaluwarsa",
    ],
    correctAnswer: 2,
    explanation:
      "Botol kaca bekas bukan sampah B3, melainkan sampah anorganik yang dapat didaur ulang dengan aman.",
    difficulty: "medium",
    category: "Jenis Sampah",
    points: 15,
  },
  {
    id: 5,
    question:
      "Berapa persen sampah plastik di Indonesia yang berhasil didaur ulang?",
    options: ["5%", "15%", "25%", "35%"],
    correctAnswer: 1,
    explanation:
      "Hanya sekitar 15% sampah plastik di Indonesia yang berhasil didaur ulang, sisanya berakhir di TPA atau lingkungan.",
    difficulty: "hard",
    category: "Statistik Indonesia",
    points: 20,
  },
  {
    id: 6,
    question: "Teknologi 'Waste to Energy' mengubah sampah menjadi?",
    options: [
      "Pupuk organik",
      "Listrik dan panas",
      "Bahan bangunan",
      "Air bersih",
    ],
    correctAnswer: 1,
    explanation:
      "Teknologi Waste to Energy mengubah sampah menjadi energi listrik dan panas melalui proses pembakaran atau gasifikasi yang terkontrol.",
    difficulty: "hard",
    category: "Teknologi",
    points: 20,
  },
  {
    id: 7,
    question:
      "Apa yang dimaksud dengan 'circular economy' dalam pengelolaan sampah?",
    options: [
      "Membuang sampah secara melingkar",
      "Sistem ekonomi yang meminimalkan limbah dengan menggunakan kembali sumber daya",
      "Mengumpulkan sampah dalam bentuk lingkaran",
      "Ekonomi yang berputar seperti roda",
    ],
    correctAnswer: 1,
    explanation:
      "Circular economy adalah sistem ekonomi yang dirancang untuk menghilangkan limbah dan penggunaan berkelanjutan sumber daya melalui reuse, sharing, repair, refurbishment, remanufacturing dan recycling.",
    difficulty: "hard",
    category: "Konsep Ekonomi",
    points: 20,
  },
  {
    id: 8,
    question: "Mikroplastik paling banyak ditemukan di?",
    options: [
      "Udara perkotaan",
      "Air laut dan makanan laut",
      "Tanah pertanian",
      "Air hujan",
    ],
    correctAnswer: 1,
    explanation:
      "Mikroplastik paling banyak ditemukan di air laut dan makanan laut karena sampah plastik yang terurai di lautan.",
    difficulty: "medium",
    category: "Dampak Lingkungan",
    points: 15,
  },
];

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !showResult && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleNextQuestion();
    }
  }, [timeLeft, showResult, quizCompleted]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    const isCorrect =
      selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + quizQuestions[currentQuestion].points);
      setCorrectAnswers(correctAnswers + 1);
    }

    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCorrectAnswers(0);
    setTimeLeft(30);
    setQuizCompleted(false);
    setAnswers(new Array(quizQuestions.length).fill(null));
  };

  const getScoreGrade = () => {
    const percentage = (correctAnswers / quizQuestions.length) * 100;
    if (percentage >= 90)
      return {
        grade: "A+",
        message: "Luar Biasa! Kamu adalah Eco Expert! 🌟",
        color: "text-green-600",
      };
    if (percentage >= 80)
      return {
        grade: "A",
        message: "Excellent! Pengetahuan lingkunganmu sangat baik! 🎉",
        color: "text-green-600",
      };
    if (percentage >= 70)
      return {
        grade: "B",
        message: "Good Job! Kamu sudah cukup paham tentang lingkungan! 👍",
        color: "text-blue-600",
      };
    if (percentage >= 60)
      return {
        grade: "C",
        message: "Not Bad! Masih perlu belajar lebih banyak! 📚",
        color: "text-yellow-600",
      };
    return {
      grade: "D",
      message: "Keep Learning! Jangan menyerah, terus belajar! 💪",
      color: "text-red-600",
    };
  };

  const currentQ = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (quizCompleted) {
    const scoreGrade = getScoreGrade();
    const percentage = Math.round(
      (correctAnswers / quizQuestions.length) * 100
    );

    return (
      <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 md:p-8 text-white text-center">
            <Trophy className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Quiz Selesai! 🎉
            </h2>
            <p className="text-green-100 text-base md:text-lg">
              Lihat hasil dan analisis jawaban kamu
            </p>
          </div>

          {/* Results */}
          <div className="p-6 md:p-8">
            {/* Score Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              <div className="text-center p-4 md:p-6 bg-green-50 rounded-2xl border border-green-200">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {score}
                </div>
                <div className="text-sm md:text-base text-green-700">
                  Total Poin
                </div>
              </div>
              <div className="text-center p-4 md:p-6 bg-blue-50 rounded-2xl border border-blue-200">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {correctAnswers}/{quizQuestions.length}
                </div>
                <div className="text-sm md:text-base text-blue-700">
                  Jawaban Benar
                </div>
              </div>
              <div className="text-center p-4 md:p-6 bg-purple-50 rounded-2xl border border-purple-200">
                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 ${scoreGrade.color}`}
                >
                  {scoreGrade.grade}
                </div>
                <div className="text-sm md:text-base text-purple-700">
                  Grade
                </div>
              </div>
            </div>

            {/* Grade Message */}
            <div className="text-center mb-8 p-4 md:p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
              <h3
                className={`text-xl md:text-2xl font-bold mb-2 ${scoreGrade.color}`}
              >
                {scoreGrade.message}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Kamu berhasil menjawab {percentage}% pertanyaan dengan benar!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-blue-600 transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                <RotateCcw className="w-4 h-4 md:w-5 md:h-5" />
                Ulangi Quiz
              </button>
              <button className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-green-600 transition-all duration-300 hover:scale-105 text-sm md:text-base">
                <Star className="w-4 h-4 md:w-5 md:h-5" />
                Bagikan Hasil
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header with Progress */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 md:p-6 text-white">
          {/* Progress Indicator - Improved spacing */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 md:gap-3">
              <Target className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base font-medium">
                Pertanyaan {currentQuestion + 1} dari {quizQuestions.length}
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span
                className={`text-sm md:text-base font-bold ${
                  timeLeft <= 10 ? "text-red-200" : ""
                }`}
              >
                {timeLeft}s
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-2 md:h-3 mb-4">
            <div
              className="bg-white h-2 md:h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Question Category & Difficulty */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <span className="px-2 md:px-3 py-1 bg-white/20 rounded-full text-xs md:text-sm font-medium">
              {currentQ.category}
            </span>
            <span
              className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                currentQ.difficulty === "easy"
                  ? "bg-green-500/80"
                  : currentQ.difficulty === "medium"
                  ? "bg-yellow-500/80"
                  : "bg-red-500/80"
              }`}
            >
              {currentQ.difficulty === "easy"
                ? "Mudah"
                : currentQ.difficulty === "medium"
                ? "Sedang"
                : "Sulit"}{" "}
              • {currentQ.points} poin
            </span>
          </div>
        </div>

        {/* Question Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8 leading-relaxed">
            {currentQ.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full p-4 md:p-6 text-left rounded-2xl border-2 transition-all duration-300 ${
                  showResult
                    ? index === currentQ.correctAnswer
                      ? "bg-green-100 border-green-300 text-green-800"
                      : index === selectedAnswer &&
                        index !== currentQ.correctAnswer
                      ? "bg-red-100 border-red-300 text-red-800"
                      : "bg-gray-50 border-gray-200 text-gray-600"
                    : selectedAnswer === index
                    ? "bg-blue-100 border-blue-300 text-blue-800 scale-102"
                    : "bg-gray-50 border-gray-200 text-gray-800 hover:bg-blue-50 hover:border-blue-200 hover:scale-102"
                }`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm md:text-base ${
                      showResult
                        ? index === currentQ.correctAnswer
                          ? "bg-green-500 border-green-500 text-white"
                          : index === selectedAnswer &&
                            index !== currentQ.correctAnswer
                          ? "bg-red-500 border-red-500 text-white"
                          : "border-gray-300 text-gray-500"
                        : selectedAnswer === index
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "border-gray-300 text-gray-500"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-sm md:text-base font-medium">
                    {option}
                  </span>
                  {showResult && index === currentQ.correctAnswer && (
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 ml-auto" />
                  )}
                  {showResult &&
                    index === selectedAnswer &&
                    index !== currentQ.correctAnswer && (
                      <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 ml-auto" />
                    )}
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className="mb-6 md:mb-8 p-4 md:p-6 bg-blue-50 border border-blue-200 rounded-2xl">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-800 mb-2 text-sm md:text-base">
                    Penjelasan:
                  </h4>
                  <p className="text-blue-700 leading-relaxed text-sm md:text-base">
                    {currentQ.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            {!showResult ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-blue-600 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                Konfirmasi Jawaban
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-green-600 transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                {currentQuestion < quizQuestions.length - 1
                  ? "Pertanyaan Selanjutnya"
                  : "Lihat Hasil"}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            )}

            {/* Score Display */}
            <div className="flex items-center justify-center gap-4 md:gap-6 px-4 md:px-6 py-3 md:py-4 bg-gray-50 rounded-full text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                <span className="font-medium text-gray-700">Skor: {score}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
                <span className="font-medium text-gray-700">
                  Benar: {correctAnswers}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
