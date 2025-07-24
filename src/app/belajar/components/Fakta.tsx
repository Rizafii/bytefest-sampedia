"use client";
import { useState } from "react";
import { Lightbulb, TrendingUp } from "lucide-react";

export default function Fakta() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const facts = [
    {
      title: "Produksi Sampah Indonesia",
      description:
        "Indonesia menghasilkan sekitar 64 juta ton sampah setiap tahunnya, dan angka ini terus meningkat.",
      icon: "🗑️",
      color: "emerald",
      stats: "64 juta ton/tahun",
    },
    {
      title: "Sampah Plastik di Laut",
      description:
        "Indonesia merupakan penyumbang sampah plastik ke laut terbesar kedua di dunia setelah Tiongkok.",
      icon: "🌊",
      color: "blue",
      stats: "Peringkat #2 Dunia",
    },
    {
      title: "Waktu Penguraian",
      description:
        "Plastik butuh 20-500 tahun untuk terurai, sedangkan kertas hanya butuh 2-5 bulan.",
      icon: "⏳",
      color: "yellow",
      stats: "500 tahun vs 5 bulan",
    },
    {
      title: "Daur Ulang Kertas",
      description:
        "Mendaur ulang 1 ton kertas dapat menyelamatkan 17 pohon dan menghemat 26.500 liter air.",
      icon: "📄",
      color: "green",
      stats: "17 pohon + 26.500L air",
    },
    {
      title: "Energi dari Sampah",
      description:
        "Sampah organik dapat diolah menjadi biogas yang bisa menjadi sumber energi alternatif.",
      icon: "⚡",
      color: "purple",
      stats: "Energi Terbarukan",
    },
    {
      title: "Konsumsi Plastik",
      description:
        "Rata-rata orang Indonesia menggunakan 700 kantong plastik per tahun, atau hampir 2 kantong per hari.",
      icon: "🛍️",
      color: "pink",
      stats: "700 kantong/tahun",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        stackBg: "bg-emerald-100",
        stackBorder: "border-emerald-300",
        iconBg: "bg-emerald-500",
        quoteBg: "bg-emerald-100",
        statsBg: "bg-emerald-600",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        stackBg: "bg-blue-100",
        stackBorder: "border-blue-300",
        iconBg: "bg-blue-500",
        quoteBg: "bg-blue-100",
        statsBg: "bg-blue-600",
      },
      yellow: {
        bg: "bg-yellow-50",
        text: "text-yellow-600",
        border: "border-yellow-200",
        stackBg: "bg-yellow-100",
        stackBorder: "border-yellow-300",
        iconBg: "bg-yellow-500",
        quoteBg: "bg-yellow-100",
        statsBg: "bg-yellow-600",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        stackBg: "bg-green-100",
        stackBorder: "border-green-300",
        iconBg: "bg-green-500",
        quoteBg: "bg-green-100",
        statsBg: "bg-green-600",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        stackBg: "bg-purple-100",
        stackBorder: "border-purple-300",
        iconBg: "bg-purple-500",
        quoteBg: "bg-purple-100",
        statsBg: "bg-purple-600",
      },
      pink: {
        bg: "bg-pink-50",
        text: "text-pink-600",
        border: "border-pink-200",
        stackBg: "bg-pink-100",
        stackBorder: "border-pink-300",
        iconBg: "bg-pink-500",
        quoteBg: "bg-pink-100",
        statsBg: "bg-pink-600",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <section className="relative w-full py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
            <TrendingUp className="w-5 h-5 text-yellow-600 animate-pulse" />
            <span className="text-yellow-600 font-medium text-sm">
              Fun Facts
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Fakta <span className="text-yellow-600">Menarik</span> Seputar
            Sampah
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ketahui beberapa fakta penting tentang sampah dan dampaknya terhadap
            lingkungan yang mungkin belum kamu tahu!
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => {
            const colors = getColorClasses(fact.color);
            const rotations = [
              "rotate-1",
              "-rotate-1",
              "rotate-2",
              "-rotate-2",
            ];
            const rotation = rotations[index % rotations.length];
            const floatDelay = `${index * 0.3}s`;

            return (
              <div
                key={index}
                className={`group relative cursor-pointer transform ${rotation} hover:rotate-0 transition-all duration-500`}
                style={{
                  animation: `float 6s ease-in-out infinite ${floatDelay}`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Stack effect layers */}
                <div
                  className={`absolute inset-0 ${colors.stackBg} border ${colors.stackBorder} rounded-3xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3`}
                ></div>
                <div
                  className={`absolute inset-0 ${colors.stackBg} border ${colors.stackBorder} rounded-3xl transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2`}
                ></div>

                {/* Main card */}
                <div
                  className={`relative ${colors.bg} border ${colors.border} rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 z-10`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
                    <div
                      className={`absolute -top-4 -right-4 w-20 h-20 ${colors.iconBg} rounded-full blur-xl`}
                    ></div>
                    <div
                      className={`absolute -bottom-4 -left-4 w-16 h-16 ${colors.iconBg} rounded-full blur-xl`}
                    ></div>
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 ${colors.quoteBg} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                    >
                      <span className="text-3xl">{fact.icon}</span>
                    </div>

                    {/* Stats Badge */}
                    <div
                      className={`inline-block ${colors.statsBg} text-white px-3 py-1 rounded-full text-sm font-bold mb-4`}
                    >
                      {fact.stats}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                      {fact.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm">
                      {fact.description}
                    </p>

                    {/* Hover indicator */}
                    <div
                      className={`mt-6 w-full h-1 ${colors.iconBg} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                    ></div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute inset-0 rounded-3xl border-2 ${
                      colors.border
                    } transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Tahukah Anda?
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
              Dengan memilah sampah dari rumah, Anda bisa mengurangi hingga
              <span className="font-bold text-yellow-600"> 60%</span> sampah
              yang berakhir di TPA.
            </p>

            <div className="inline-flex items-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition-all duration-300 cursor-pointer group">
              <span>Ayo mulai pilah sampahmu sekarang!</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-sm">🌱</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
