"use client";
import { ArrowRight, Download, Brain, ArrowDown } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-br from-yellow-500 to-amber-600 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Brain className="w-5 h-5 text-white animate-pulse" />
          <span className="text-white font-medium text-sm">Think Smart</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ayo Kita Bernalar
        </h2>

        <p className="text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed">
          Kalau sampah organik bisa terurai dengan cepat, bagaimana dengan jenis
          sampah lainnya? Yuk, kita cari tahu bersama!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center ">
          <button className="bg-white text-yellow-600 font-semibold py-4 px-8 cursor-pointer rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center">
            <span>Iya juga, gimana dong?</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
}
