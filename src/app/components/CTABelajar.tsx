"use client";
import {
  ArrowRight,
  Sparkles,
  Download,
  MessageCircleWarning,
} from "lucide-react";

export default function CTABelajar() {
  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-br from-emerald-500 to-green-600 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <MessageCircleWarning className="w-5 h-5 text-white animate-pulse" />
          <span className="text-white font-medium text-sm">STOP!</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Udah Cukup Kenalannya
        </h2>

        <p className="text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed">
          Yuk, kita mulai belajar cara mengelola sampah dengan benar! Dengan
          edukasi yang tepat, kita bisa membuat perbedaan besar untuk lingkungan
          kita.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/belajar"
            className="bg-white text-emerald-600 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
          >
            <span>Lanjut Belajar</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
}
