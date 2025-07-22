import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LatarBelakang from "../components/LatarBelakang";
import Support from "../components/SupportBy";

export default function Homepage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-tl from-emerald-100/20 via-emerald-100/10 to-white">
      <Navbar />
      <Hero />
      <LatarBelakang />
      <Support />
    </div>
  );
}
