"use client"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import CommunityStats from "./components/CommunityStats"
import CommunityForum from "./components/CommunityForum"
import CommunityLeaderboard from "./components/CommunityLeaderboard"
import CommunityChallenge from "./components/CommunityChallenge"

export default function KomunitasPage() {
  const komunitasHeroProps = {
    title: "Bergabung dengan",
    rotatingTexts: ["Komunitas!", "Gerakan Hijau!", "Perubahan!", "Masa Depan!", "Solusi!"],
    subtitle:
      "Bersama-sama kita ciptakan dampak positif untuk lingkungan melalui aksi nyata dan kolaborasi yang bermakna.",
    primaryColor: "text-blue-500",
    ctaPrimary: {
      text: "Gabung Sekarang",
      action: () => console.log("Join community!"),
    },
    ctaSecondary: {
      text: "Lihat Forum",
      action: () => console.log("View forum!"),
    },
    theme: {
      gradient: "bg-gradient-to-t from-blue-500/50 to-white",
      primaryColor: "bg-blue-500",
      primaryHover: "hover:bg-blue-700",
      borderColor: "border-blue-600",
      hoverBg: "hover:bg-blue-50",
    },
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-tl from-blue-100/20 via-blue-100/10 to-white">
      <Navbar />
      <Hero {...komunitasHeroProps} />
      <CommunityStats />
      <CommunityForum />
      <CommunityLeaderboard />
      <CommunityChallenge />
      <Footer />
    </div>
  )
}
