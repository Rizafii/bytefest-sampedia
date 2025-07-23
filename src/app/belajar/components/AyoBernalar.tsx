"use client";
import { useState } from "react";
import {
  Clock,
  CheckCircle,
  XCircle,
  Brain,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

interface WasteDecomposition {
  id: number;
  name: string;
  emoji: string;
  decompositionTime: string;
  timeValue: number; // untuk sorting
  explanation: string;
  category: "organic" | "anorganic" | "b3" | "electronic";
}

const wasteData: WasteDecomposition[] = [
  {
    id: 1,
    name: "Kulit Pisang",
    emoji: "🍌",
    decompositionTime: "2-5 minggu",
    timeValue: 35,
    explanation: "Sampah organik mudah terurai oleh mikroorganisme di tanah",
    category: "organic",
  },
  {
    id: 2,
    name: "Botol Plastik",
    emoji: "🍼",
    decompositionTime: "450-1000 tahun",
    timeValue: 725,
    explanation:
      "Plastik sulit terurai dan mencemari lingkungan dalam jangka panjang",
    category: "anorganic",
  },
  {
    id: 3,
    name: "Baterai",
    emoji: "🔋",
    decompositionTime: "100-1000 tahun",
    timeValue: 550,
    explanation: "Mengandung logam berat yang berbahaya dan sulit terurai",
    category: "b3",
  },
  {
    id: 4,
    name: "Smartphone",
    emoji: "📱",
    decompositionTime: "1000+ tahun",
    timeValue: 1000,
    explanation:
      "Kombinasi plastik, logam, dan komponen elektronik yang kompleks",
    category: "electronic",
  },
  {
    id: 5,
    name: "Kertas",
    emoji: "📄",
    decompositionTime: "2-6 minggu",
    timeValue: 28,
    explanation: "Terbuat dari serat alami yang mudah terurai",
    category: "anorganic",
  },
  {
    id: 6,
    name: "Kaleng Aluminium",
    emoji: "🥫",
    decompositionTime: "80-200 tahun",
    timeValue: 140,
    explanation: "Logam aluminium membutuhkan waktu lama untuk teroksidasi",
    category: "anorganic",
  },
];

export default function AyoBernalar() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    "Urutkan sampah dari yang paling cepat terurai ke yang paling lama!",
    "Menurut kamu, kenapa ada sampah yang butuh waktu ratusan tahun untuk terurai?",
  ];

  const handleItemClick = (itemId: number) => {
    if (showResults) return;

    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const checkAnswer = () => {
    setShowResults(true);
  };

  const resetGame = () => {
    setSelectedItems([]);
    setShowResults(false);
    setCurrentQuestion(0);
  };

  const correctOrder = wasteData
    .sort((a, b) => a.timeValue - b.timeValue)
    .map((item) => item.id);
  const isCorrectOrder =
    JSON.stringify(selectedItems) === JSON.stringify(correctOrder);

  const getCategoryColor = (category: string) => {
    const colors = {
      organic: "bg-green-100 text-green-700 border-green-200",
      anorganic: "bg-blue-100 text-blue-700 border-blue-200",
      b3: "bg-red-100 text-red-700 border-red-200",
      electronic: "bg-purple-100 text-purple-700 border-purple-200",
    };
    return colors[category as keyof typeof colors] || colors.organic;
  };

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Brain className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-blue-700 font-medium text-sm">
              Think Smart
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Ayo <span className="text-blue-600">Bernalar</span>!
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Kalau sampah organik bisa terurai dengan cepat, bagaimana dengan
            jenis sampah lainnya? Yuk, kita cari tahu bersama!
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          {/* Question */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full mb-4">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-medium">
                Pertanyaan {currentQuestion + 1}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {questions[currentQuestion]}
            </h3>
            {currentQuestion === 0 && (
              <p className="text-gray-600">
                Klik sampah sesuai urutan dari yang tercepat terurai!
                <span className="text-blue-600 font-medium">
                  {" "}
                  ({selectedItems.length}/6)
                </span>
              </p>
            )}
          </div>

          {currentQuestion === 0 && (
            <>
              {/* Waste Items Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {wasteData.map((item, index) => {
                  const isSelected = selectedItems.includes(item.id);
                  const selectionOrder = selectedItems.indexOf(item.id) + 1;

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`relative cursor-pointer transition-all duration-300 ${
                        isSelected ? "scale-105" : "hover:scale-102"
                      }`}
                    >
                      <div
                        className={`
                        p-6 rounded-2xl border-2 transition-all duration-300
                        ${
                          isSelected
                            ? "border-blue-400 bg-blue-50 shadow-lg"
                            : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                        }
                      `}
                      >
                        <div className="text-center">
                          <div className="text-4xl mb-3">{item.emoji}</div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            {item.name}
                          </h4>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                              item.category
                            )}`}
                          >
                            {item.category}
                          </span>
                        </div>

                        {isSelected && (
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {selectionOrder}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="text-center space-x-4">
                <button
                  onClick={checkAnswer}
                  disabled={selectedItems.length !== 6}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedItems.length === 6
                      ? "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Cek Jawaban
                </button>
                <button
                  onClick={resetGame}
                  className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  Reset
                </button>
              </div>
            </>
          )}

          {/* Results */}
          {showResults && currentQuestion === 0 && (
            <div className="mt-12 space-y-6">
              <div
                className={`text-center p-6 rounded-2xl ${
                  isCorrectOrder
                    ? "bg-green-100 border border-green-200"
                    : "bg-yellow-100 border border-yellow-200"
                }`}
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  {isCorrectOrder ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <Clock className="w-6 h-6 text-yellow-600" />
                  )}
                  <h3
                    className={`text-xl font-bold ${
                      isCorrectOrder ? "text-green-700" : "text-yellow-700"
                    }`}
                  >
                    {isCorrectOrder ? "Luar Biasa! 🎉" : "Good Try! 👍"}
                  </h3>
                </div>
                <p
                  className={
                    isCorrectOrder ? "text-green-600" : "text-yellow-600"
                  }
                >
                  {isCorrectOrder
                    ? "Kamu sudah paham tentang waktu penguraian sampah!"
                    : "Yuk lihat urutan yang benar di bawah ini!"}
                </p>
              </div>

              {/* Correct Order Display */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  Urutan Waktu Penguraian Sampah
                </h4>
                <div className="space-y-4">
                  {wasteData
                    .sort((a, b) => a.timeValue - b.timeValue)
                    .map((item, index) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <div className="text-2xl">{item.emoji}</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-800">
                            {item.name}
                          </h5>
                          <p className="text-sm text-gray-600">
                            {item.explanation}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-blue-600">
                            {item.decompositionTime}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Next Question Button */}
              <div className="text-center">
                <button
                  onClick={() => setCurrentQuestion(1)}
                  className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-105"
                >
                  <span>Lanjut ke Pertanyaan Berikutnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Question 2 */}
          {currentQuestion === 1 && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Problem */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Masalahnya
                  </h4>
                  <ul className="space-y-3 text-red-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Sampah anorganik sulit terurai karena struktur
                        molekulnya kompleks
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Mikroorganisme tidak bisa memecah bahan sintetis seperti
                        plastik
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Menumpuk di lingkungan dan mencemari tanah, air, dan
                        udara
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Solution */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Solusinya
                  </h4>
                  <ul className="space-y-3 text-green-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Daur ulang sampah anorganik menjadi produk baru
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Mengurangi penggunaan barang sekali pakai</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Pilih produk yang ramah lingkungan dan biodegradable
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={resetGame}
                  className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-105"
                >
                  <span>Coba Lagi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
