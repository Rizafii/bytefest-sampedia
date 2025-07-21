import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden ">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
