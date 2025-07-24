"use client";
import { Bolt } from "lucide-react";

export default function Slogan() {
  return (
    <section className="relative w-full py-20 px-4 bg-[url(https://sunbright-recycling.com/wp-content/uploads/2024/08/AdobeStock_545695283-scaled.jpeg)] bg-fixed bg-center bg-cover overflow-hidden">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Bolt className="w-5 h-5 text-white animate-pulse" />
          <span className="text-white font-medium text-sm">Slogan</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Reduce Reuse Recycle
        </h2>

        <p className="text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed">
          Slogan ini mengajak kita untuk mengurangi, menggunakan kembali, dan
          mendaur ulang sampah. Dengan melakukan ketiga hal ini, kita dapat
          mengurangi dampak negatif sampah terhadap lingkungan dan menciptakan
          dunia yang lebih bersih dan sehat.
        </p>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
}
