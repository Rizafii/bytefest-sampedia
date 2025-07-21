"use client";
import { Trash2, BookOpen, Sprout, Users } from "lucide-react";

export default function LatarBelakang() {
  return (
    <section className="relative w-full min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Kenapa Ada <span className="text-emerald-600">Website Ini?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Edukasi sampah yang mudah, seru, dan bisa dipraktikkan langsung
            dalam kehidupan sehari-hari
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Problem Statement Card */}
          <div className="group relative cursor-pointer transform rotate-2 hover:rotate-0 transition-transform duration-500 animate-[float_6s_ease-in-out_infinite]">
            {/* Stack effect layers */}
            <div className="absolute inset-0 bg-yellow-100 border border-yellow-300 rounded-3xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="absolute inset-0 bg-yellow-200 border border-yellow-400 rounded-3xl transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            {/* Main card */}
            <div className="relative bg-yellow-50 border border-yellow-200 rounded-3xl p-8 shadow-yellow-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 z-10">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                <Trash2 className="w-8 h-8 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-700 transition-colors duration-300">
                Masalah Sampah di Sekitar Kita
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Sampah ada di mana-mana. Di jalan, di sungai, bahkan di laut.
                Masih banyak yang belum tahu cara mengelola sampah dengan benar.
              </p>
            </div>
          </div>

          {/* Solution Card */}
          <div className="group relative cursor-pointer transform -rotate-1 hover:rotate-0 transition-transform duration-500 md:translate-y-8 animate-[float_6s_ease-in-out_infinite_1s]">
            {/* Stack effect layers */}
            <div className="absolute inset-0 bg-blue-100 border border-blue-300 rounded-3xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="absolute inset-0 bg-blue-200 border border-blue-400 rounded-3xl transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            {/* Main card */}
            <div className="relative bg-blue-50 border border-blue-200 rounded-3xl p-8 shadow-blue-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 z-10">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300">
                <BookOpen className="w-8 h-8 text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700 transition-colors duration-300">
                Edukasi yang Mudah & Seru
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Belajar memilah sampah, ide daur ulang, dan tips gaya hidup
                minim sampah jadi lebih gampang dan menyenangkan.
              </p>
            </div>
          </div>

          {/* Community Impact Card */}
          <div className="group relative cursor-pointer transform -rotate-2 hover:rotate-0 transition-transform duration-500 md:-translate-y-4 animate-[float_6s_ease-in-out_infinite_2s]">
            {/* Stack effect layers */}
            <div className="absolute inset-0 bg-green-100 border border-green-300 rounded-3xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="absolute inset-0 bg-green-200 border border-green-400 rounded-3xl transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            {/* Main card */}
            <div className="relative bg-green-50 border border-green-200 rounded-3xl p-8 shadow-green-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 z-10">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300">
                <Sprout className="w-8 h-8 text-white group-hover:animate-spin" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-700 transition-colors duration-300">
                Dampak Besar dari Hal Kecil
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Hal kecil seperti buang sampah pada tempatnya dan memilah sampah
                bisa memberikan dampak besar untuk lingkungan.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative cursor-pointer transform rotate-1 hover:rotate-0 transition-transform duration-500 md:translate-y-6 animate-[float_6s_ease-in-out_infinite_3s]">
            {/* Stack effect layers */}
            <div className="absolute inset-0 bg-purple-100 border border-purple-300 rounded-3xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="absolute inset-0 bg-purple-200 border border-purple-400 rounded-3xl transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            {/* Main card */}
            <div className="relative bg-purple-50 border border-purple-200 rounded-3xl p-8 shadow-purple-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 z-10">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-700 transition-colors duration-300">
                Misi Kita Bersama
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Jaga lingkungan bukan tugas segelintir orang—tapi misi kita
                bareng-bareng. Kalau banyak yang tahu, pasti banyak yang peduli!
              </p>
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
