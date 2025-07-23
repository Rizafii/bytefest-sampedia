"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatarBelakang from "./components/LatarBelakang";
import Support from "./components/SupportBy";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CTABelajar from "./components/CTABelajar";

export default function Home() {
  const homeHeroProps = {
    title: "Sampah Aja Diedukasi,",
    rotatingTexts: [
      "Gimana?",
      "Masih Cuek",
      "Kapan Belajar?",
      "Nggak Malu?",
      "Kapan Sadar?",
    ],
    subtitle:
      "Belajar memilah, mengolah, dan mengurangi sampah dengan cara yang mudah dan menyenangkan.",
    primaryColor: "text-emerald-500",
    ctaPrimary: {
      text: "Get Started",
      action: () => (window.location.href = "/belajar"),
    },
    ctaSecondary: {
      text: "Learn More",
      action: () => (window.location.href = "#learn-more"),
    },
    theme: {
      gradient: "bg-gradient-to-t from-emerald-500/50 to-white",
      primaryColor: "bg-emerald-500",
      primaryHover: "hover:bg-emerald-700",
      borderColor: "border-emerald-600",
      hoverBg: "hover:bg-emerald-50",
    },
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-tl from-emerald-100/20 via-emerald-100/10 to-white">
      <Navbar />
      <Hero {...homeHeroProps} />
      <LatarBelakang />
      <Support />
      <CTA />
      <Stats />
      <Testimonials />
      <CTABelajar />
      <Footer />
    </div>
  );
}
