import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatarBelakang from "./components/LatarBelakang";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-tl from-emerald-500/20 via-emerald-500/10 to-white">
      <Navbar />
      <Hero />
      <LatarBelakang />
    </div>
  );
}
