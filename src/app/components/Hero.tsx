"use client";
import { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Paralax from "./Paralax";
import ClickSpark from "../rb/ClickSpark/ClickSpark";
import RotatingText from "../rb/RotatingText/RotatingText";

interface HeroProps {
  title: string;
  rotatingTexts: string[];
  subtitle: string;
  primaryColor: string;
  ctaPrimary: {
    text: string;
    action?: () => void;
  };
  ctaSecondary: {
    text: string;
    action?: () => void;
  };
  theme: {
    gradient: string;
    primaryColor: string;
    primaryHover: string;
    borderColor: string;
    hoverBg: string;
  };
}

export default function Hero({
  title,
  rotatingTexts,
  subtitle,
  primaryColor,
  ctaPrimary,
  ctaSecondary,
  theme,
}: HeroProps) {
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
        {/* Background Gradient - Dynamic based on theme */}
        <div className={`absolute inset-0 ${theme.gradient} z-[10]`} />

        <Paralax />

        <motion.header
          className="-mt-55 text-center px-4 w-full max-w-4xl items-center relative z-[20]"
          style={{
            y,
            rotateX,
            transformPerspective: 1000,
          }}
        >
          <h1 className="text-4xl md:text-4xl  lg:text-6xl font-bold text-gray-700 mb-2 ">
            {title}
          </h1>
          <span
            className={`${primaryColor} gap-4 items-center justify-center flex text-4xl md:text-4xl lg:text-6xl font-bold`}
          >
            Kamu
            <RotatingText
              texts={rotatingTexts}
              mainClassName={`px-2 w-fit text-shadow-lg sm:px-2 md:px-3 ${theme.primaryColor} inset-shadow-sm inset-shadow-black/15 text-white font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg`}
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
            {subtitle}
          </p>
          <div className="flex gap-4 justify-center ">
            <button
              onClick={ctaPrimary.action}
              className={`${theme.primaryColor} text-shadow-sm inset-shadow-sm inset-shadow-black/15 ${theme.primaryHover} text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 `}
            >
              {ctaPrimary.text}
            </button>
            <button
              onClick={ctaSecondary.action}
              className={`border-2 ${theme.borderColor} ${primaryColor} ${theme.hoverBg} font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105`}
            >
              {ctaSecondary.text}
            </button>
          </div>
        </motion.header>
      </section>
    </ClickSpark>
  );
}
