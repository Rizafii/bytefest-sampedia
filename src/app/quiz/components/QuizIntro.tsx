"use client";
import { useState } from "react";
import {
  Brain,
  Clock,
  Trophy,
  Target,
  Star,
  Zap,
  Play,
  BookOpen,
} from "lucide-react";

interface QuizIntroProps {
  onStartQuiz: () => void;
}

export default function QuizIntro({ onStartQuiz }: QuizIntroProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    "mudah" | "sedang" | "sulit"
  >("mudah");

  const difficulties = [
    {
      id: "mudah",
      label: "Mudah",
      description: "Pertanyaan dasar tentang sampah dan lingkungan",
      questions: 5,
      timePerQuestion: 30,
      points: "10-15 poin",
      icon: "🌱",
      color: "green",
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-700",
    },
    {
      id: "sedang",
      label: "Sedang",
      description: "Pengetahuan mendalam tentang pengelolaan sampah",
      questions: 8,
      timePerQuestion: 25,
      points: "15-20 poin",
      icon: "🔥",
      color: "yellow",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-700",
    },
    {
      id: "sulit",
      label: "Sulit",
      description: "Tantangan untuk ahli lingkungan sejati",
      questions: 10,
      timePerQuestion: 20,
      points: "20-25 poin",
      icon: "⚡",
      color: "red",
      bgColor: "bg-red-100",
      borderColor: "border-red-200",
      textColor: "text-red-700",
    },
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timer Challenge",
      description: "Setiap pertanyaan memiliki batas waktu",
      color: "blue",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Sistem Poin",
      description: "Dapatkan poin berdasarkan tingkat kesulitan",
      color: "yellow",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Penjelasan Detail",
      description: "Pelajari jawaban yang benar setelah menjawab",
      color: "green",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Ranking System",
      description: "Bandingkan skormu dengan pemain lain",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      yellow: "bg-yellow-100 text-yellow-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="w-full  py-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto pt-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
            <Brain className="w-5 h-5 text-purple-600 animate-pulse" />
            <span className="text-purple-700 font-medium text-sm">
              Quiz Challenge
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Siap untuk <span className="text-purple-600">Tantangan</span>?
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Uji pengetahuanmu tentang pengelolaan sampah dan lingkungan dengan
            quiz interaktif yang seru dan edukatif!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Difficulty Selection */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-purple-600" />
                Pilih Tingkat Kesulitan
              </h3>

              <div className="grid gap-4">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty.id}
                    onClick={() => setSelectedDifficulty(difficulty.id as any)}
                    className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                      selectedDifficulty === difficulty.id
                        ? `${difficulty.borderColor} ${difficulty.bgColor} scale-105 shadow-lg`
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{difficulty.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-bold text-gray-800">
                            {difficulty.label}
                          </h4>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${difficulty.bgColor} ${difficulty.textColor} ${difficulty.borderColor}`}
                          >
                            {difficulty.points}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">
                          {difficulty.description}
                        </p>
                        <div className="flex gap-4 text-sm text-gray-500">
                          <span>📝 {difficulty.questions} pertanyaan</span>
                          <span>⏱️ {difficulty.timePerQuestion}s per soal</span>
                        </div>
                      </div>
                      {selectedDifficulty === difficulty.id && (
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Start Quiz Button */}
            <div className="text-center">
              <button
                onClick={onStartQuiz}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3 mx-auto"
              >
                <Play className="w-6 h-6" />
                Mulai Quiz Sekarang!
              </button>

              <p className="text-sm text-gray-500 mt-4">
                Gratis • Tidak perlu daftar • Hasil langsung
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Features */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                Fitur Quiz
              </h3>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${getColorClasses(
                        feature.color
                      )}`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Tips Sukses
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span className="text-gray-700">
                    Baca pertanyaan dengan teliti sebelum menjawab
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span className="text-gray-700">
                    Manfaatkan waktu dengan bijak, jangan terburu-buru
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span className="text-gray-700">
                    Pelajari penjelasan setelah menjawab untuk menambah wawasan
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span className="text-gray-700">
                    Coba berbagai tingkat kesulitan untuk tantangan lebih
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Statistik Quiz
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Pemain</span>
                  <span className="font-bold text-gray-800">12,547</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Quiz Hari Ini</span>
                  <span className="font-bold text-gray-800">234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Skor Tertinggi</span>
                  <span className="font-bold text-gray-800">2,450</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rata-rata Skor</span>
                  <span className="font-bold text-gray-800">1,280</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
