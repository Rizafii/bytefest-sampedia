"use client";
import { useState, useEffect } from "react";
import type React from "react";

import {
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Recycle,
  Heart,
  Star,
  Scissors,
  Wrench,
  X,
  Clock,
  Play,
  BookOpen,
  Leaf,
} from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Botol Plastik Jadi Vertical Garden",
    subtitle: "Dari Sampah ke Kebun Mini",
    description:
      "Ubah botol plastik bekas menjadi kebun vertikal yang cantik untuk tanaman hias atau sayuran kecil di rumah. Hemat tempat dan ramah lingkungan!",
    steps: [
      "Bersihkan botol plastik bekas hingga bersih dan buat lubang drainase di bagian bawah dengan paku atau pisau",
      "Potong bagian samping botol membentuk area tanam yang lebar, sisakan bagian atas dan bawah",
      "Isi dengan campuran tanah kompos dan sekam bakar, lalu tanam bibit sayuran atau tanaman hias",
      "Susun botol secara vertikal dengan sistem gantung atau rak bertingkat di dinding atau balkon",
    ],
    difficulty: "Mudah",
    time: "30 menit",
    materials: [
      "Botol plastik 1.5L",
      "Tanah kompos",
      "Bibit tanaman",
      "Tali rafia",
      "Pisau/gunting",
    ],
    result: "Kebun vertikal yang menghasilkan sayuran segar di rumah",
    icon: "🌱",
    color: "green",
    bgGradient: "from-green-100 to-emerald-100",
    category: "Pertanian Urban",
    benefits: ["Hemat tempat", "Ramah lingkungan", "Menghasilkan makanan"],
    tips: "Pilih tanaman yang tidak terlalu berat seperti selada, kangkung, atau tanaman hias merambat.",
    illustration:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&auto=format",
  },
  {
    id: 2,
    title: "Kaleng Bekas Jadi Speaker Bluetooth",
    subtitle: "Teknologi Ramah Lingkungan",
    description:
      "Manfaatkan kaleng bekas untuk membuat speaker bluetooth unik dengan akustik natural yang mengagumkan. Suara bass yang dalam dan jernih!",
    steps: [
      "Siapkan kaleng besar dan bersihkan hingga tidak ada sisa makanan, lepas label dengan air hangat",
      "Buat lubang di tengah tutup kaleng sesuai ukuran speaker mini bluetooth yang akan dipasang",
      "Pasang busa akustik atau kain felt di bagian dalam kaleng untuk meredam echo dan suara kasar",
      "Pasang speaker bluetooth, hubungkan dengan power bank kecil, lalu dekorasi bagian luar dengan cat atau stiker",
    ],
    difficulty: "Sedang",
    time: "45 menit",
    materials: [
      "Kaleng besar",
      "Speaker mini bluetooth",
      "Busa akustik",
      "Cat semprot",
      "Power bank mini",
    ],
    result: "Speaker bluetooth portabel dengan kualitas suara mengagumkan",
    icon: "🎵",
    color: "blue",
    bgGradient: "from-blue-100 to-cyan-100",
    category: "Teknologi DIY",
    benefits: ["Suara berkualitas", "Portabel", "Hemat biaya"],
    tips: "Gunakan kaleng dengan ukuran besar untuk bass yang lebih dalam. Pastikan lubang pas dengan speaker.",
    illustration:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format",
  },
  {
    id: 3,
    title: "Kertas Koran Jadi Tas Belanja",
    subtitle: "Fashion Berkelanjutan",
    description:
      "Kreasikan kertas koran bekas menjadi tas belanja stylish yang kuat dan tahan lama untuk penggunaan sehari-hari. Unik dan ramah lingkungan!",
    steps: [
      "Potong kertas koran menjadi strip lebar 3-4 cm, lalu gulung dan buat batang-batang kertas yang kuat",
      "Anyam batang kertas membentuk dasar tas persegi atau bulat dengan teknik anyaman sederhana",
      "Lanjutkan menganyam ke atas membentuk dinding tas, pastikan anyaman rapat dan kuat",
      "Tambahkan tali dari bahan kuat atau buat pegangan dari anyaman kertas yang diperkuat dengan lem",
    ],
    difficulty: "Mudah",
    time: "20 menit",
    materials: [
      "Koran bekas",
      "Lem kertas",
      "Tali kanvas",
      "Gunting",
      "Penggaris",
    ],
    result: "Tas belanja unik yang ramah lingkungan dan tahan lama",
    icon: "🛍️",
    color: "yellow",
    bgGradient: "from-yellow-100 to-amber-100",
    category: "Fashion Eco-Friendly",
    benefits: ["Zero waste", "Unik dan personal", "Kuat untuk belanja"],
    tips: "Lapisi dengan plastik transparan untuk membuat tas tahan air atau gunakan koran berwarna untuk hasil menarik.",
    illustration:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format",
  },
  {
    id: 4,
    title: "CD Bekas Jadi Lampu Hias",
    subtitle: "Seni Cahaya Modern",
    description:
      "Transformasi CD/DVD bekas menjadi lampu hias dengan efek cahaya rainbow yang memukau untuk dekorasi ruangan. Pantulan cahaya yang menawan!",
    steps: [
      "Kumpulkan 10-15 CD bekas dan bersihkan dari debu serta sidik jari menggunakan kain microfiber",
      "Rangkai CD dalam formasi lingkaran atau spiral menggunakan kawat atau frame logam yang kuat",
      "Pasang LED strip warna-warni di bagian belakang rangkaian CD dengan pola melingkar",
      "Atur sudut kemiringan CD untuk mengoptimalkan pantulan cahaya rainbow ke seluruh ruangan",
    ],
    difficulty: "Sulit",
    time: "60 menit",
    materials: [
      "CD/DVD bekas",
      "LED strip RGB",
      "Frame logam",
      "Kabel listrik",
      "Remote control",
    ],
    result: "Lampu hias modern dengan efek cahaya rainbow yang spektakuler",
    icon: "💿",
    color: "purple",
    bgGradient: "from-purple-100 to-pink-100",
    category: "Dekorasi Rumah",
    benefits: ["Efek visual menawan", "Hemat energi", "Seni modern"],
    tips: "Gunakan LED dengan remote control untuk mengubah warna sesuai mood. Hindari terkena air langsung.",
    illustration:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format",
  },
];

export default function SolusiKreatif() {
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "steps" | "tips">(
    "overview"
  );

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px"; // Prevent layout shift
    } else {
      // Restore body scroll
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [showModal]);

  const openModal = (index: number) => {
    setSelectedSolution(index);
    setShowModal(true);
    setActiveTab("overview");
  };

  const closeModal = (e?: React.MouseEvent) => {
    // Prevent closing when clicking inside modal content
    if (e && e.target !== e.currentTarget) return;
    setShowModal(false);
    setSelectedSolution(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Mudah: "bg-green-100 text-green-700 border-green-200",
      Sedang: "bg-yellow-100 text-yellow-700 border-yellow-200",
      Sulit: "bg-red-100 text-red-700 border-red-200",
    };
    return colors[difficulty as keyof typeof colors];
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: {
        primary: "text-green-600",
        bg: "bg-green-500",
        light: "bg-green-100",
        border: "border-green-200",
        hover: "hover:bg-green-50",
      },
      blue: {
        primary: "text-blue-600",
        bg: "bg-blue-500",
        light: "bg-blue-100",
        border: "border-blue-200",
        hover: "hover:bg-blue-50",
      },
      yellow: {
        primary: "text-yellow-600",
        bg: "bg-yellow-500",
        light: "bg-yellow-100",
        border: "border-yellow-200",
        hover: "hover:bg-yellow-50",
      },
      purple: {
        primary: "text-purple-600",
        bg: "bg-purple-500",
        light: "bg-purple-100",
        border: "border-purple-200",
        hover: "hover:bg-purple-50",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  // Fixed tab navigation array
  const tabs = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "steps", label: "Langkah", icon: Scissors },
    { id: "tips", label: "Tips", icon: Lightbulb },
  ];

  return (
    <section className="w-full py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-yellow-600 animate-pulse" />
            <span className="text-yellow-700 font-semibold text-sm">
              💡 Solusi Kreatif & Inovatif
            </span>
            <Recycle
              className="w-5 h-5 text-green-600 animate-spin"
              style={{ animationDuration: "3s" }}
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Kreativitas
            </span>{" "}
            Tanpa Batas
            <br className="hidden md:block" />
            dari{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Sampah
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Jelajahi ide-ide brillian untuk mengubah sampah menjadi barang
            berguna dan bernilai dengan sentuhan kreativitas yang menakjubkan!
            Mari bersama-sama menciptakan solusi ramah lingkungan. 🌍
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-green-600" />
              <span>100% Ramah Lingkungan</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Mudah & Menyenangkan</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Hasil Berkualitas</span>
            </div>
          </div>
        </div>

        {/* Enhanced 2x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color);
            return (
              <div
                key={solution.id}
                onClick={() => openModal(index)}
                className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 overflow-hidden border border-gray-100 ${colors.hover}`}
              >
                {/* Enhanced Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={solution.illustration || "/placeholder.svg"}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Enhanced Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Play className="w-5 h-5 text-gray-700" />
                      <span className="text-sm font-semibold text-gray-700">
                        Mulai Berkreasi
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Card Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    {solution.title}
                  </h3>
                  <p className={`text-sm font-semibold mb-4 ${colors.primary}`}>
                    {solution.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {solution.description}
                  </p>

                  {/* Benefits Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.benefits.slice(0, 2).map((benefit, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs rounded-full ${colors.light} ${colors.primary} border ${colors.border}`}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Quick Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{solution.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Wrench className="w-3 h-3" />
                      <span>{solution.materials.length} bahan</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      <span>{solution.steps.length} langkah</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Punya ide kreatif lainnya? Bagikan dengan komunitas kami! 🤝
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Bagikan Ide Kreatif
          </button>
        </div>

        {/* Enhanced Modal - Responsive */}
        {showModal && selectedSolution !== null && (
          <div
            className="fixed inset-0 z-[99] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Modal Header */}
              <div className="relative flex-shrink-0">
                <img
                  src={
                    solutions[selectedSolution].illustration ||
                    "/placeholder.svg"
                  }
                  alt={solutions[selectedSolution].title}
                  className="w-full h-32 md:h-48 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-t-3xl" />

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg"
                >
                  <X className="w-4 h-4 text-gray-700" />
                </button>

                {/* Enhanced Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl md:text-3xl">
                      {solutions[selectedSolution].icon}
                    </span>
                    <div>
                      <h2 className="text-lg md:text-2xl font-bold text-white mb-1">
                        {solutions[selectedSolution].title}
                      </h2>
                      <p className="text-yellow-300 font-semibold text-xs md:text-sm">
                        {solutions[selectedSolution].subtitle}
                      </p>
                      <p className="text-white/80 text-xs mt-1">
                        {solutions[selectedSolution].category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Modal Content - Responsive Layout */}
              <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">
                {/* Left Column - Stats (Hidden on mobile, shown as tabs) */}
                <div className="hidden lg:block w-80 flex-shrink-0 overflow-y-auto p-6 border-r border-gray-200 bg-gray-50">
                  {/* Enhanced Stats */}
                  <div className="space-y-4 mb-6">
                    <div
                      className={`text-center p-4 ${
                        getColorClasses(solutions[selectedSolution].color).light
                      } rounded-xl border ${
                        getColorClasses(solutions[selectedSolution].color)
                          .border
                      }`}
                    >
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        {solutions[selectedSolution].difficulty}
                      </div>
                      <div className="text-sm text-gray-600">
                        Tingkat Kesulitan
                      </div>
                    </div>
                    <div
                      className={`text-center p-4 ${
                        getColorClasses(solutions[selectedSolution].color).light
                      } rounded-xl border ${
                        getColorClasses(solutions[selectedSolution].color)
                          .border
                      }`}
                    >
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        {solutions[selectedSolution].time}
                      </div>
                      <div className="text-sm text-gray-600">
                        Waktu Pembuatan
                      </div>
                    </div>
                    <div
                      className={`text-center p-4 ${
                        getColorClasses(solutions[selectedSolution].color).light
                      } rounded-xl border ${
                        getColorClasses(solutions[selectedSolution].color)
                          .border
                      }`}
                    >
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        {solutions[selectedSolution].materials.length}
                      </div>
                      <div className="text-sm text-gray-600">
                        Bahan Diperlukan
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h3 className="text-md font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      Manfaat & Keunggulan
                    </h3>
                    <div className="space-y-2">
                      {solutions[selectedSolution].benefits.map(
                        (benefit, index) => (
                          <div
                            key={index}
                            className="bg-green-50 px-3 py-2 rounded-lg text-green-700 border border-green-200 text-sm font-medium"
                          >
                            ✓ {benefit}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Materials */}
                  <div className="flex-1">
                    <h3 className="text-md font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <Wrench className="w-4 h-4" />
                      Bahan yang Dibutuhkan
                    </h3>
                    <div className="space-y-2">
                      {solutions[selectedSolution].materials.map(
                        (material, index) => (
                          <div
                            key={index}
                            className="bg-white px-3 py-2 rounded-lg text-gray-700 border border-gray-200 flex items-center gap-2 text-sm"
                          >
                            <div
                              className={`w-6 h-6 ${
                                getColorClasses(
                                  solutions[selectedSolution].color
                                ).bg
                              } text-white rounded-full flex items-center justify-center font-bold text-xs`}
                            >
                              {index + 1}
                            </div>
                            {material}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="flex-1 flex flex-col min-w-0">
                  <div className="p-4 md:p-6 pb-4 flex-shrink-0">
                    {/* Tab Navigation - Responsive */}
                    <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex-1 flex items-center justify-center gap-1 md:gap-2 py-2 px-2 md:px-3 rounded-lg font-medium transition-all duration-200 text-xs md:text-sm ${
                              activeTab === tab.id
                                ? `${
                                    getColorClasses(
                                      solutions[selectedSolution].color
                                    ).bg
                                  } text-white shadow-lg`
                                : "text-gray-600 hover:text-gray-800 hover:bg-white"
                            }`}
                          >
                            <Icon className="w-3 h-3" />
                            <span className="hidden sm:inline">
                              {tab.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tab Content - Scrollable */}
                  <div className="flex-1 overflow-y-auto px-4 md:px-6 pb-4 md:pb-6">
                    {activeTab === "overview" && (
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                          Deskripsi Proyek
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
                          {solutions[selectedSolution].description}
                        </p>

                        {/* Mobile Stats */}
                        <div className="lg:hidden grid grid-cols-3 gap-3 mb-6">
                          <div className="text-center p-3 bg-gray-50 rounded-xl">
                            <div className="text-lg font-bold text-gray-800 mb-1">
                              {solutions[selectedSolution].difficulty}
                            </div>
                            <div className="text-xs text-gray-600">
                              Kesulitan
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-xl">
                            <div className="text-lg font-bold text-gray-800 mb-1">
                              {solutions[selectedSolution].time}
                            </div>
                            <div className="text-xs text-gray-600">Waktu</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-xl">
                            <div className="text-lg font-bold text-gray-800 mb-1">
                              {solutions[selectedSolution].materials.length}
                            </div>
                            <div className="text-xs text-gray-600">Bahan</div>
                          </div>
                        </div>

                        {/* Mobile Benefits */}
                        <div className="lg:hidden mb-6">
                          <h4 className="font-bold text-gray-800 mb-3 text-sm">
                            Manfaat:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {solutions[selectedSolution].benefits.map(
                              (benefit, index) => (
                                <span
                                  key={index}
                                  className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                                >
                                  ✓ {benefit}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "steps" && (
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Scissors className="w-5 h-5 text-yellow-600" />
                          Langkah-langkah Pembuatan
                        </h3>
                        <div className="space-y-4">
                          {solutions[selectedSolution].steps.map(
                            (step, index) => (
                              <div
                                key={index}
                                className="flex gap-3 items-start p-3 md:p-4 bg-gray-50 rounded-xl border border-gray-200"
                              >
                                <div
                                  className={`w-6 h-6 md:w-8 md:h-8 ${
                                    getColorClasses(
                                      solutions[selectedSolution].color
                                    ).bg
                                  } text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0`}
                                >
                                  {index + 1}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                                    Langkah {index + 1}
                                  </h4>
                                  <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                                    {step}
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        {/* Mobile Materials List */}
                        <div className="lg:hidden mt-6">
                          <h4 className="font-bold text-gray-800 mb-3 text-sm">
                            Bahan yang Dibutuhkan:
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {solutions[selectedSolution].materials.map(
                              (material, index) => (
                                <div
                                  key={index}
                                  className="bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm"
                                >
                                  {index + 1}. {material}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "tips" && (
                      <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-yellow-500" />
                          Tips & Trik Pro
                        </h3>

                        <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                              💡
                            </div>
                            <div>
                              <h4 className="font-semibold text-yellow-800 mb-2 text-sm md:text-base">
                                Tips dari Para Ahli
                              </h4>
                              <p className="text-yellow-700 leading-relaxed text-xs md:text-sm">
                                {solutions[selectedSolution].tips}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Result */}
                        <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                          <div className="flex items-center gap-2 text-green-700 font-semibold mb-2 text-sm md:text-base">
                            <CheckCircle className="w-5 h-5" />
                            Hasil Akhir yang Akan Anda Dapatkan
                          </div>
                          <p className="text-green-600 font-medium text-xs md:text-sm">
                            {solutions[selectedSolution].result}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
