"use client";
import { ArrowRight, Sparkles, Download } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-br from-emerald-500 to-green-600 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-5 h-5 text-white animate-pulse" />
          <span className="text-white font-medium text-sm">Siap Mulai?</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Yuk, Mulai Belajar <br />
          <span className="text-emerald-100">Kelola Sampah!</span>
        </h2>

        <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Bergabunglah dengan ribuan orang yang sudah mulai peduli lingkungan.
          Gratis dan mudah diakses kapan saja!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-emerald-600 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center">
            <span>Mulai Belajar Sekarang</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center">
            <Download className="w-5 h-5" />
            <span>Download Panduan</span>
          </button>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
}
