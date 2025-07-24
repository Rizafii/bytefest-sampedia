"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import {
  Trash2,
  Target,
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Star,
} from "lucide-react";

interface WasteItem {
  id: number;
  name: string;
  type: string;
  category: number;
  emoji: string;
  x: number;
  y: number;
}

interface GameWasteItem {
  id: number;
  name: string;
  type: string;
  category: number;
  emoji: string;
}

interface WasteBin {
  id: number;
  name: string;
  color: string;
  textColor: string;
}

const gameWasteItems: GameWasteItem[] = [
  { id: 1, name: "🍌", type: "organic", category: 1, emoji: "🍌" },
  { id: 2, name: "🥤", type: "anorganic", category: 2, emoji: "🥤" },
  { id: 3, name: "🔋", type: "b3", category: 3, emoji: "🔋" },
  { id: 4, name: "📱", type: "electronic", category: 4, emoji: "📱" },
  { id: 5, name: "🍎", type: "organic", category: 1, emoji: "🍎" },
  { id: 6, name: "🥫", type: "anorganic", category: 2, emoji: "🥫" },
  { id: 7, name: "🥕", type: "organic", category: 1, emoji: "🥕" },
  { id: 8, name: "🍼", type: "anorganic", category: 2, emoji: "🍼" },
  { id: 9, name: "💊", type: "b3", category: 3, emoji: "💊" },
  { id: 10, name: "💻", type: "electronic", category: 4, emoji: "💻" },
];

const wasteBins: WasteBin[] = [
  {
    id: 1,
    name: "Organik",
    color: "bg-green-500",
    textColor: "text-green-700",
  },
  {
    id: 2,
    name: "Anorganik",
    color: "bg-blue-500",
    textColor: "text-blue-700",
  },
  { id: 3, name: "B3", color: "bg-red-500", textColor: "text-red-700" },
  {
    id: 4,
    name: "Elektronik",
    color: "bg-purple-500",
    textColor: "text-purple-700",
  },
];

// Fixed positions to avoid hydration mismatch
const getInitialPositions = (): WasteItem[] => {
  return gameWasteItems.map((item, index) => ({
    ...item,
    x: 15 + (index % 3) * 25 + ((index * 7) % 15), // Deterministic positioning
    y: 20 + Math.floor(index / 3) * 30 + ((index * 5) % 20),
  }));
};

export default function SortingSampahGame() {
  const [gameItems, setGameItems] = useState<WasteItem[]>([]);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [gameComplete, setGameComplete] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<WasteItem | null>(null);
  const [mounted, setMounted] = useState(false);

  // Initialize positions after component mounts to avoid hydration issues
  useEffect(() => {
    setGameItems(getInitialPositions());
    setMounted(true);
  }, []);

  const handleItemClick = useCallback(
    (item: WasteItem) => {
      if (selectedItem?.id === item.id) {
        // Deselect if clicking the same item
        setSelectedItem(null);
      } else {
        // Select the clicked item
        setSelectedItem(item);
      }
    },
    [selectedItem]
  );

  const handleBinClick = useCallback(
    (binId: number) => {
      if (!selectedItem) return;

      const isCorrect = selectedItem.category === binId;
      setAttempts((prev) => prev + 1);

      if (isCorrect) {
        setScore((prev) => prev + 10);
        setFeedback("Benar! 🎉");
        setGameItems((prev) =>
          prev.filter((item) => item.id !== selectedItem.id)
        );

        if (gameItems.length === 1) {
          setGameComplete(true);
        }
      } else {
        setFeedback("Salah! Coba lagi 😅");
      }

      setTimeout(() => setFeedback(null), 2000);
      setSelectedItem(null);
    },
    [selectedItem, gameItems.length]
  );

  const resetGame = useCallback(() => {
    setGameItems(getInitialPositions());
    setScore(0);
    setAttempts(0);
    setFeedback(null);
    setGameComplete(false);
    setSelectedItem(null);
  }, []);

  const accuracy = useMemo(
    () => (attempts > 0 ? Math.round((score / (attempts * 10)) * 100) : 0),
    [score, attempts]
  );

  // Don't render game area until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <section className="w-full py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded-full mb-4 mx-auto w-48"></div>
              <div className="h-12 bg-gray-200 rounded mb-4 mx-auto w-96"></div>
              <div className="h-4 bg-gray-200 rounded mb-8 mx-auto w-80"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
            <Target className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-700 font-medium text-sm">
              Mini Game
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Game <span className="text-yellow-600">Pilah Sampah</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
            Klik sampah lalu klik tong yang tepat! Uji pemahamanmu tentang
            jenis-jenis sampah
          </p>
        </div>

        {/* Game Complete Message */}
        {gameComplete && (
          <div className="text-center mb-6 p-6 bg-green-100 rounded-xl">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Selamat! 🎉
            </h3>
            <p className="text-green-600">
              Kamu berhasil memilah semua sampah dengan akurasi {accuracy}%!
            </p>
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-lg ${
                feedback.includes("Benar")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {feedback.includes("Benar") ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <XCircle className="w-5 h-5" />
              )}
              <span className="font-bold">{feedback}</span>
            </div>
          </div>
        )}

        {/* Game Area */}
        <div className="relative">
          {/* Conditionally render game area only if there are items */}
          {gameItems.length > 0 && (
            <>
              {/* Floating Area */}
              <div className="relative bg-yellow-50 rounded-2xl p-4 md:p-6 mb-6 min-h-[250px] md:min-h-[300px] border-2 border-yellow-200">
                <div className="absolute top-3 left-4 bg-white px-3 py-1 rounded-full">
                  <span className="text-yellow-700 font-medium text-sm">
                    Area Sampah ☁️
                  </span>
                </div>

                {/* Score Board - moved inside area sampah */}
                <div className="absolute top-3 right-4 flex flex-col md:flex-row gap-2">
                  <div className="bg-white rounded-lg px-2 md:px-3 py-1 md:py-2 shadow-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="text-gray-600 text-xs">Skor:</span>
                      <span className="text-sm font-bold text-yellow-600">
                        {score}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg px-2 md:px-3 py-1 md:py-2 shadow-sm">
                    <div className="flex items-center gap-1">
                      <Trophy className="w-3 h-3 text-blue-500" />
                      <span className="text-gray-600 text-xs">Akurasi:</span>
                      <span className="text-sm font-bold text-blue-600">
                        {accuracy}%
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg px-2 md:px-3 py-1 md:py-2 shadow-sm">
                    <div className="flex items-center gap-1">
                      <Trash2 className="w-3 h-3 text-green-500" />
                      <span className="text-gray-600 text-xs">Sisa:</span>
                      <span className="text-sm font-bold text-green-600">
                        {gameItems.length}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Waste Items */}
                {gameItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`absolute cursor-pointer hover:scale-105 transition-all duration-200 select-none ${
                      selectedItem?.id === item.id ? "scale-110" : ""
                    }`}
                    style={{
                      left: `${Math.max(0, Math.min(85, item.x))}%`,
                      top: `${Math.max(15, Math.min(75, item.y))}%`,
                    }}
                  >
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-md border flex items-center justify-center hover:shadow-lg transition-shadow duration-200 ${
                        selectedItem?.id === item.id
                          ? "bg-yellow-50 border-yellow-400"
                          : ""
                      }`}
                    >
                      <span className="text-xl md:text-2xl">{item.emoji}</span>
                    </div>
                    {selectedItem?.id === item.id && (
                      <div className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Waste Bins Row - 2x2 grid on mobile, 4 columns on desktop */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                {wasteBins.map((bin) => (
                  <div
                    key={bin.id}
                    onClick={() => handleBinClick(bin.id)}
                    className={`relative transition-transform duration-200 cursor-pointer select-none ${
                      selectedItem ? "hover:scale-105" : ""
                    }`}
                  >
                    <div
                      className={`p-3 md:p-4 rounded-xl border-2 transition-colors duration-200 ${
                        selectedItem
                          ? "border-gray-400 bg-gray-50 hover:border-yellow-400 hover:bg-yellow-50"
                          : "border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="text-center">
                        <div
                          className={`w-12 h-16 md:w-16 md:h-20 ${bin.color} rounded-lg mx-auto mb-2 md:mb-3 flex items-center justify-center`}
                        >
                          <Trash2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h4
                          className={`font-bold ${bin.textColor} text-sm md:text-base`}
                        >
                          {bin.name}
                        </h4>
                        {selectedItem && (
                          <div className="mt-2">
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              Klik untuk buang
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Reset Button - always visible */}
          <div className="text-center mt-6">
            <button
              onClick={resetGame}
              className="inline-flex items-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors duration-200"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
