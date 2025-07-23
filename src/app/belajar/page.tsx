"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import JenisSampah from "./components/JenisSampah";
import AyoBernalar from "./components/AyoBernalar";
import CaraDaurUlang from "./components/CaraDaurUlang";
import SortingSampahGame from "./components/SortingSampahGame";
import CTA from "./components/CTA";

export default function Home() {
  const belajarHeroProps = {
    title: "Siap Buat Belajar?",
    rotatingTexts: [
      "Keren!",
      "Berarti Peduli!",
      "Patut Dicontoh!",
      "Berani Berubah!",
    ],
    subtitle:
      "Belajar mengelola sampah dengan cara yang menyenangkan dan bermanfaat.",
    primaryColor: "text-yellow-500",
    ctaPrimary: {
      text: "Mulai Belajar",
      action: () => console.log("Start learning!"),
    },
    ctaSecondary: {
      text: "Lihat Materi",
      action: () => console.log("Learn more clicked!"),
    },
    theme: {
      gradient: "bg-gradient-to-t from-yellow-500/50 to-white",
      primaryColor: "bg-yellow-500",
      primaryHover: "hover:bg-yellow-700",
      borderColor: "border-yellow-600",
      hoverBg: "hover:bg-yellow-50",
    },
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-tl from-emerald-100/20 via-emerald-100/10 to-white">
      <Navbar />
      <Hero {...belajarHeroProps} />
      <JenisSampah />
      <SortingSampahGame />
      <CTA />
      {/* <AyoBernalar /> */}
      {/* <CaraDaurUlang /> */}
      <Footer />
    </div>
  );
}
