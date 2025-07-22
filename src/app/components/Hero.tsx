"use client";
import { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Paralax from "./Paralax";
import ClickSpark from "../rb/ClickSpark/ClickSpark";
import RotatingText from "../rb/RotatingText/RotatingText";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 600]); // Parallax dengan Framer Motion
  const rotateX = useTransform(scrollY, [0, 1000], [0, -5]); // Rotasi X untuk efek miring ke depan

  return (
    <ClickSpark
      sparkColor="#000000"
      sparkSize={20}
      sparkRadius={15}
      sparkCount={12}
      duration={400}
    >
      <section className="relative w-full h-[120vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient - Elemen terpisah dengan z-index sendiri */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/50 to-white z-[10]" />

        <Paralax />

        <motion.header
          className="-mt-55 text-center px-4 w-full max-w-4xl items-center relative z-[20]"
          style={{
            y,
            rotateX,
            transformPerspective: 1000,
          }}
        >
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-gray-700 mb-2">
            Sampah Aja Diedukasi,
          </h1>
          <span className="text-emerald-500 gap-4 items-center justify-center flex text-4xl md:text-4xl lg:text-6xl font-bold">
            Kamu
            <RotatingText
              texts={[
                "Gimana?",
                "Masih Cuek",
                "Kapan Belajar?",
                "Nggak Malu?",
                "Kapan Sadar?",
              ]}
              mainClassName="px-2 w-fit sm:px-2 md:px-3 bg-emerald-500 text-white font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
          <p className="text-lg mt-4 md:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            Belajar memilah, mengolah, dan mengurangi sampah dengan cara yang
            mudah dan menyenangkan.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </motion.header>
      </section>
    </ClickSpark>
  );
}
