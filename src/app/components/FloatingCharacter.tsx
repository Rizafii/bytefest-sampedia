"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

const FloatingCharacter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [currentDialog, setCurrentDialog] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const dialogs = [
    {
      text: "Halo! Aku Eco, teman belajar sampahmu! 🌱",
      type: "greeting",
    },
    {
      text: "Tahukah kamu? Sampah organik bisa jadi kompos dalam 2-3 bulan! 🍃",
      type: "fact",
    },
    {
      text: "Yuk pilah sampah! Organik, anorganik, B3, dan residu. Mudah kan? ♻️",
      type: "tip",
    },
    {
      text: "Satu botol plastik butuh 450 tahun untuk terurai. Mending didaur ulang! 🍶",
      type: "fact",
    },
    {
      text: "Reduce, Reuse, Recycle - 3R yang bisa kamu lakukan setiap hari! 💚",
      type: "tip",
    },
    {
      text: "Sampah makanan bisa jadi biogas lho! Energi dari limbah, keren kan? ⚡",
      type: "fact",
    },
    {
      text: "Jangan buang sampah sembarangan ya! Bumi kita cuma satu 🌍",
      type: "reminder",
    },
    {
      text: "Kaleng bekas bisa jadi pot tanaman yang cantik! Kreatif dong! 🌺",
      type: "creative",
    },
    {
      text: "Sampah elektronik harus ke tempat khusus. Jangan ke tempat sampah biasa! 📱",
      type: "warning",
    },
    {
      text: "Kompos dari sampah dapur bisa bikin tanaman subur! Coba deh! 🌿",
      type: "tip",
    },
    {
      text: "Botol kaca bisa didaur ulang berkali-kali tanpa kehilangan kualitas! ✨",
      type: "fact",
    },
    {
      text: "Tas belanja dari kain lebih ramah lingkungan daripada plastik! 👜",
      type: "tip",
    },
    {
      text: "Kertas bekas bisa jadi kerajinan tangan yang unik! Yuk berkreasi! 📄",
      type: "creative",
    },
    {
      text: "Minyak jelantah jangan dibuang ke saluran air ya! Bisa bikin tersumbat! 🛢️",
      type: "warning",
    },
    {
      text: "Sampah organik 60% dari total sampah rumah tangga. Kompos yuk! 🏠",
      type: "fact",
    },
  ];

  const getDialogColor = (type: string) => {
    switch (type) {
      case "greeting":
        return "bg-blue-500";
      case "fact":
        return "bg-purple-500";
      case "tip":
        return "bg-green-500";
      case "reminder":
        return "bg-orange-500";
      case "creative":
        return "bg-pink-500";
      case "warning":
        return "bg-red-500";
      default:
        return "bg-emerald-500";
    }
  };

  const handleCharacterClick = () => {
    if (isAnimating) return;

    if (showDialog) {
      // If dialog is showing, hide it
      setShowDialog(false);
    } else {
      // If dialog is hidden, show new random dialog
      setIsAnimating(true);
      const randomIndex = Math.floor(Math.random() * dialogs.length);
      setCurrentDialog(randomIndex);
      setShowDialog(true);

      setTimeout(() => setIsAnimating(false), 300);

      // Auto hide dialog after 8 seconds
      setTimeout(() => {
        setShowDialog(false);
      }, 8000);
    }
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Show Eco character"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Dialog Bubble */}
      {showDialog && (
        <div
          className={`relative max-w-xs sm:max-w-sm animate-in slide-in-from-bottom-2 duration-300 ${
            isAnimating ? "animate-pulse" : ""
          }`}
        >
          <div
            className={`${getDialogColor(
              dialogs[currentDialog].type
            )} text-white p-4 rounded-2xl rounded-br-sm shadow-lg relative cursor-pointer hover:shadow-xl transition-shadow duration-200`}
            onClick={handleCharacterClick}
          >
            <p className="text-sm sm:text-base font-medium leading-relaxed">
              {dialogs[currentDialog].text}
            </p>
            {/* Speech bubble tail */}
            <div
              className={`absolute bottom-0 right-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] ${getDialogColor(
                dialogs[currentDialog].type
              ).replace("bg-", "border-t-")} transform translate-y-full`}
            ></div>
          </div>
        </div>
      )}

      {/* Character */}
      <div className="relative">
        {/* Character Avatar */}
        <div
          className={`cursor-pointer transition-all hover:scale-110 flex items-center justify-center group`}
          onClick={handleCharacterClick}
        >
          <img src="/char.png" alt="" />
        </div>

        {/* Subtle floating particles */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-emerald-300 rounded-full animate-pulse delay-700 opacity-40"></div>

        {/* Click indicator - only show when no dialog is visible */}
        {!showDialog && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce">
            <MessageCircle className="w-3 h-3 text-emerald-600" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingCharacter;
