"use client";
import { useState } from "react";
import {
  CheckCircle,
  Lock,
  Play,
  Clock,
  Star,
  Trophy,
  ArrowRight,
  BookOpen,
} from "lucide-react";

interface LearningStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: "Pemula" | "Menengah" | "Lanjutan";
  isCompleted: boolean;
  isLocked: boolean;
  points: number;
  icon: string;
  topics: string[];
}

const learningPath: LearningStep[] = [
  {
    id: 1,
    title: "Pengenalan Dasar Sampah",
    description:
      "Memahami jenis-jenis sampah dan dampaknya terhadap lingkungan",
    duration: "15 menit",
    difficulty: "Pemula",
    isCompleted: true,
    isLocked: false,
    points: 100,
    icon: "🌱",
    topics: ["Jenis Sampah", "Dampak Lingkungan", "Statistik Global"],
  },
  {
    id: 2,
    title: "Prinsip 3R dalam Kehidupan",
    description:
      "Menerapkan Reduce, Reuse, Recycle dalam aktivitas sehari-hari",
    duration: "20 menit",
    difficulty: "Pemula",
    isCompleted: true,
    isLocked: false,
    points: 150,
    icon: "♻️",
    topics: ["Reduce", "Reuse", "Recycle", "Praktik Harian"],
  },
  {
    id: 3,
    title: "Teknik Pemilahan Sampah",
    description: "Cara memilah sampah dengan benar di rumah dan tempat kerja",
    duration: "25 menit",
    difficulty: "Pemula",
    isCompleted: false,
    isLocked: false,
    points: 200,
    icon: "🗂️",
    topics: ["Organik vs Anorganik", "Sampah B3", "Sistem Pemilahan"],
  },
  {
    id: 4,
    title: "Membuat Kompos Sendiri",
    description:
      "Panduan lengkap membuat kompos dari sampah organik rumah tangga",
    duration: "30 menit",
    difficulty: "Menengah",
    isCompleted: false,
    isLocked: false,
    points: 250,
    icon: "🌿",
    topics: ["Bahan Kompos", "Proses Pengomposan", "Perawatan", "Hasil Akhir"],
  },
  {
    id: 5,
    title: "Daur Ulang Kreatif",
    description: "Mengubah sampah menjadi barang berguna dengan kreativitas",
    duration: "35 menit",
    difficulty: "Menengah",
    isCompleted: false,
    isLocked: true,
    points: 300,
    icon: "🎨",
    topics: ["DIY Projects", "Upcycling", "Craft Ideas", "Business Ideas"],
  },
  {
    id: 6,
    title: "Teknologi Pengelolaan Sampah",
    description: "Memahami teknologi modern dalam pengelolaan sampah",
    duration: "40 menit",
    difficulty: "Lanjutan",
    isCompleted: false,
    isLocked: true,
    points: 400,
    icon: "🔬",
    topics: ["Waste to Energy", "Smart Bins", "AI Sorting", "Biogas"],
  },
  {
    id: 7,
    title: "Membangun Komunitas Hijau",
    description: "Strategi membangun dan memimpin komunitas peduli lingkungan",
    duration: "45 menit",
    difficulty: "Lanjutan",
    isCompleted: false,
    isLocked: true,
    points: 500,
    icon: "👥",
    topics: [
      "Community Building",
      "Leadership",
      "Campaign",
      "Impact Measurement",
    ],
  },
];

export default function LearningPath() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Pemula: "bg-green-100 text-green-700 border-green-200",
      Menengah: "bg-yellow-100 text-yellow-700 border-yellow-200",
      Lanjutan: "bg-red-100 text-red-700 border-red-200",
    };
    return colors[difficulty as keyof typeof colors];
  };

  const totalPoints = learningPath.reduce(
    (sum, step) => (step.isCompleted ? sum + step.points : sum),
    0
  );
  const completedSteps = learningPath.filter((step) => step.isCompleted).length;
  const progressPercentage = (completedSteps / learningPath.length) * 100;

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-yellow-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-yellow-600 animate-pulse" />
            <span className="text-yellow-700 font-medium text-sm">
              Learning Path
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Jalur <span className="text-yellow-600">Pembelajaran</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Ikuti jalur pembelajaran terstruktur dari dasar hingga mahir. Setiap
            langkah dirancang untuk membangun pemahaman yang solid tentang
            pengelolaan sampah.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-600 mb-2">
                {completedSteps}
              </div>
              <div className="text-sm text-gray-600">Modul Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                {totalPoints}
              </div>
              <div className="text-sm text-gray-600">Total Poin</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                {Math.round(progressPercentage)}%
              </div>
              <div className="text-sm text-gray-600">Progress</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-1000"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="text-center text-sm text-gray-600">
            {completedSteps} dari {learningPath.length} modul telah diselesaikan
          </div>
        </div>

        {/* Learning Steps */}
        <div className="space-y-6">
          {learningPath.map((step, index) => (
            <div
              key={step.id}
              className={`group relative transition-all duration-300 ${
                step.isLocked ? "opacity-60" : "hover:scale-102"
              }`}
            >
              {/* Connection Line */}
              {index < learningPath.length - 1 && (
                <div className="absolute left-6 md:left-8 top-16 md:top-20 w-0.5 h-12 md:h-16 bg-gray-200 z-0"></div>
              )}

              <div
                className={`relative bg-white rounded-3xl p-4 md:p-8 shadow-sm border-2 transition-all duration-300 ${
                  step.isCompleted
                    ? "border-green-300 bg-green-50"
                    : step.isLocked
                    ? "border-gray-200"
                    : "border-yellow-200 hover:border-yellow-300 hover:shadow-lg"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  {/* Step Icon */}
                  <div className="flex-shrink-0 self-start">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-xl md:text-2xl relative ${
                        step.isCompleted
                          ? "bg-green-500"
                          : step.isLocked
                          ? "bg-gray-300"
                          : "bg-yellow-500"
                      }`}
                    >
                      {step.isCompleted ? (
                        <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      ) : step.isLocked ? (
                        <Lock className="w-6 h-6 md:w-8 md:h-8 text-gray-500" />
                      ) : (
                        <span>{step.icon}</span>
                      )}

                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {step.id}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1 min-w-0 mb-4 lg:mb-0 lg:pr-4">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 break-words">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                          {step.description}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                          <span
                            className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                              step.difficulty
                            )}`}
                          >
                            {step.difficulty}
                          </span>
                          <span className="px-2 md:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {step.duration}
                          </span>
                          <span className="px-2 md:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium border border-purple-200 flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {step.points} poin
                          </span>
                        </div>

                        {/* Topics */}
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {step.topics.map((topic, topicIndex) => (
                            <span
                              key={topicIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-yellow-100 hover:text-yellow-600 transition-colors cursor-pointer"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex-shrink-0">
                        {step.isCompleted ? (
                          <button className="bg-green-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-medium hover:bg-green-600 transition-colors flex items-center gap-2 text-sm md:text-base">
                            <Trophy className="w-4 h-4" />
                            <span className="hidden sm:inline">Selesai</span>
                          </button>
                        ) : step.isLocked ? (
                          <button
                            disabled
                            className="bg-gray-300 text-gray-500 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium cursor-not-allowed flex items-center gap-2 text-sm md:text-base"
                          >
                            <Lock className="w-4 h-4" />
                            <span className="hidden sm:inline">Terkunci</span>
                          </button>
                        ) : (
                          <button className="bg-yellow-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-medium hover:bg-yellow-600 transition-all duration-300 hover:scale-105 flex items-center gap-2 group text-sm md:text-base">
                            <Play className="w-4 h-4" />
                            <span className="hidden sm:inline">
                              Mulai Belajar
                            </span>
                            <span className="sm:hidden">Mulai</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Siap Menjadi Eco Expert?
            </h3>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
              Selesaikan semua modul pembelajaran dan dapatkan sertifikat
              digital sebagai Eco Expert! Tunjukkan komitmenmu pada lingkungan.
            </p>

            <button className="bg-yellow-500 text-white px-6 md:px-8 py-3 rounded-full font-medium hover:bg-yellow-600 transition-all duration-300 hover:scale-105 text-sm md:text-base">
              Lihat Sertifikat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
