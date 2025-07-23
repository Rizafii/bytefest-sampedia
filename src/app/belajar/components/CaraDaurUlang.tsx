"use client";
import { useState } from "react";
import {
  Recycle,
  Play,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
} from "lucide-react";

interface RecyclingStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  completed: boolean;
}

interface RecyclingProcess {
  id: number;
  name: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
  difficulty: "Mudah" | "Sedang" | "Sulit";
  time: string;
  steps: RecyclingStep[];
  tips: string[];
  result: string;
}

const recyclingData: RecyclingProcess[] = [
  {
    id: 1,
    name: "Botol Plastik",
    emoji: "🍼",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    difficulty: "Mudah",
    time: "10 menit",
    steps: [
      {
        id: 1,
        title: "Bersihkan Botol",
        description: "Cuci botol dengan air hingga bersih dari sisa minuman",
        icon: "🧽",
        completed: false,
      },
      {
        id: 2,
        title: "Lepas Label",
        description: "Copot label dan tutup botol untuk memudahkan daur ulang",
        icon: "🏷️",
        completed: false,
      },
      {
        id: 3,
        title: "Potong Sesuai Kebutuhan",
        description:
          "Potong botol menjadi bentuk yang diinginkan (pot, tempat pensil, dll)",
        icon: "✂️",
        completed: false,
      },
      {
        id: 4,
        title: "Hias dan Gunakan",
        description:
          "Dekorasi sesuai selera dan gunakan untuk keperluan sehari-hari",
        icon: "🎨",
        completed: false,
      },
    ],
    tips: [
      "Pastikan botol benar-benar bersih sebelum didaur ulang",
      "Gunakan cutter atau gunting yang tajam untuk hasil potongan yang rapi",
      "Haluskan tepi potongan agar tidak melukai saat digunakan",
    ],
    result: "Pot tanaman, tempat pensil, celengan, atau wadah penyimpanan",
  },
  {
    id: 2,
    name: "Kertas Bekas",
    emoji: "📄",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    difficulty: "Sedang",
    time: "30 menit",
    steps: [
      {
        id: 1,
        title: "Kumpulkan Kertas",
        description: "Kumpulkan kertas bekas yang masih bisa digunakan",
        icon: "📚",
        completed: false,
      },
      {
        id: 2,
        title: "Sortir dan Bersihkan",
        description:
          "Pisahkan kertas berdasarkan jenis dan bersihkan dari staples",
        icon: "🔍",
        completed: false,
      },
      {
        id: 3,
        title: "Rendam dalam Air",
        description: "Rendam kertas dalam air hangat selama 15-20 menit",
        icon: "💧",
        completed: false,
      },
      {
        id: 4,
        title: "Blender dan Bentuk",
        description: "Blender hingga halus, lalu bentuk menjadi kertas baru",
        icon: "🔄",
        completed: false,
      },
    ],
    tips: [
      "Gunakan kertas yang tidak terlalu kotor atau berminyak",
      "Tambahkan lem atau tepung untuk memperkuat kertas",
      "Jemur hingga benar-benar kering untuk hasil terbaik",
    ],
    result: "Kertas daur ulang, kartu ucapan, atau kerajinan tangan",
  },
  {
    id: 3,
    name: "Kaleng Bekas",
    emoji: "🥫",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    difficulty: "Mudah",
    time: "15 menit",
    steps: [
      {
        id: 1,
        title: "Bersihkan Kaleng",
        description: "Cuci kaleng hingga bersih dan keringkan",
        icon: "🧼",
        completed: false,
      },
      {
        id: 2,
        title: "Haluskan Tepi",
        description: "Haluskan tepi kaleng dengan amplas agar tidak tajam",
        icon: "📏",
        completed: false,
      },
      {
        id: 3,
        title: "Cat atau Hias",
        description:
          "Cat kaleng atau hias dengan kertas/kain untuk mempercantik",
        icon: "🎨",
        completed: false,
      },
      {
        id: 4,
        title: "Tambah Fungsi",
        description: "Buat lubang untuk gantungan atau tambah alas jika perlu",
        icon: "🔧",
        completed: false,
      },
    ],
    tips: [
      "Pastikan tidak ada sisa makanan di dalam kaleng",
      "Gunakan cat anti karat untuk hasil yang tahan lama",
      "Buat lubang drainase jika digunakan sebagai pot tanaman",
    ],
    result: "Pot tanaman, tempat pensil, lampu hias, atau wadah penyimpanan",
  },
];

export default function CaraDaurUlang() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showTips, setShowTips] = useState(false);

  const currentProcess = recyclingData[activeProcess];

  const handleStepClick = (stepId: number) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter((id) => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const resetProgress = () => {
    setCompletedSteps([]);
    setShowTips(false);
  };

  const isProcessComplete = currentProcess.steps.every((step) =>
    completedSteps.includes(step.id)
  );

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Mudah: "bg-green-100 text-green-700 border-green-200",
      Sedang: "bg-yellow-100 text-yellow-700 border-yellow-200",
      Sulit: "bg-red-100 text-red-700 border-red-200",
    };
    return colors[difficulty as keyof typeof colors];
  };

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
            <Recycle className="w-5 h-5 text-emerald-600 animate-spin" />
            <span className="text-emerald-700 font-medium text-sm">
              Recycle Guide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Cara <span className="text-emerald-600">Daur Ulang</span> Sampah
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Ubah sampah jadi barang berguna! Ikuti panduan langkah demi langkah
            untuk mendaur ulang berbagai jenis sampah dengan mudah.
          </p>
        </div>

        {/* Process Selector */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {recyclingData.map((process, index) => (
            <button
              key={process.id}
              onClick={() => {
                setActiveProcess(index);
                resetProgress();
              }}
              className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                activeProcess === index
                  ? `${process.borderColor} ${process.bgColor} scale-105 shadow-lg`
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{process.emoji}</span>
                <h3
                  className={`font-bold text-lg ${
                    activeProcess === index ? process.color : "text-gray-800"
                  }`}
                >
                  {process.name}
                </h3>
              </div>
              <div className="flex gap-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                    process.difficulty
                  )}`}
                >
                  {process.difficulty}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                  {process.time}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          {/* Process Header */}
          <div
            className={`${currentProcess.bgColor} ${currentProcess.borderColor} border-2 rounded-2xl p-6 mb-8`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{currentProcess.emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Daur Ulang {currentProcess.name}
                  </h2>
                  <div className="flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(
                        currentProcess.difficulty
                      )}`}
                    >
                      {currentProcess.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700">
                      ⏱️ {currentProcess.time}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-3xl font-bold ${currentProcess.color}`}>
                  {completedSteps.length}/{currentProcess.steps.length}
                </div>
                <div className="text-sm text-gray-600">Langkah Selesai</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${currentProcess.color.replace(
                  "text-",
                  "bg-"
                )} transition-all duration-500`}
                style={{
                  width: `${
                    (completedSteps.length / currentProcess.steps.length) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-600" />
              Langkah-langkah
            </h3>

            {currentProcess.steps.map((step, index) => {
              const isCompleted = completedSteps.includes(step.id);
              const isActive = index === completedSteps.length && !isCompleted;

              return (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    isCompleted
                      ? "border-green-300 bg-green-50 scale-102"
                      : isActive
                      ? `${currentProcess.borderColor} ${currentProcess.bgColor} shadow-md`
                      : "border-gray-200 bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        isCompleted
                          ? "bg-green-500 text-white"
                          : isActive
                          ? `${currentProcess.color.replace(
                              "text-",
                              "bg-"
                            )} text-white`
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {isCompleted ? "✓" : index + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{step.icon}</span>
                        <h4
                          className={`font-bold ${
                            isCompleted ? "text-green-700" : "text-gray-800"
                          }`}
                        >
                          {step.title}
                        </h4>
                        {isCompleted && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <p
                        className={`${
                          isCompleted ? "text-green-600" : "text-gray-600"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Complete */}
          {isProcessComplete && (
            <div className="bg-green-100 border border-green-200 rounded-2xl p-6 mb-8">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  Proses Selesai! 🎉
                </h3>
                <p className="text-green-600 mb-4">
                  Hasil:{" "}
                  <span className="font-bold">{currentProcess.result}</span>
                </p>
                <button
                  onClick={() => setShowTips(!showTips)}
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all duration-300"
                >
                  <Lightbulb className="w-4 h-4" />
                  {showTips ? "Sembunyikan Tips" : "Lihat Tips Pro"}
                </button>
              </div>
            </div>
          )}

          {/* Tips Section */}
          {showTips && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold text-yellow-700 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Tips Pro untuk Hasil Maksimal
              </h4>
              <ul className="space-y-2">
                {currentProcess.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-yellow-700"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="text-center space-x-4">
            <button
              onClick={resetProgress}
              className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              Reset Progress
            </button>

            {activeProcess < recyclingData.length - 1 && (
              <button
                onClick={() => {
                  setActiveProcess(activeProcess + 1);
                  resetProgress();
                }}
                className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-all duration-300 hover:scale-105"
              >
                <span>Proses Selanjutnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
