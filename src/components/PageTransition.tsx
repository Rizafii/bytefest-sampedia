"use client";
import { motion, AnimatePresence } from "framer-motion";
import type React from "react";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Leaf, Loader2 } from "lucide-react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Get theme colors based on pathname
  const getThemeColors = () => {
    if (pathname === "/belajar") return { from: "#facc15", to: "#ca8a04" }; // yellow-400 to yellow-600
    if (pathname === "/komunitas") return { from: "#60a5fa", to: "#2563eb" }; // blue-400 to blue-600
    if (pathname === "/quiz") return { from: "#a78bfa", to: "#7c3aed" }; // purple-400 to purple-600
    return { from: "#34d399", to: "#059669" }; // emerald-400 to emerald-600
  };

  const getAccentColor = () => {
    if (pathname === "/belajar") return "text-yellow-500";
    if (pathname === "/komunitas") return "text-blue-500";
    if (pathname === "/quiz") return "text-purple-500";
    return "text-emerald-500";
  };

  const getPageName = () => {
    if (pathname === "/belajar") return "Belajar";
    if (pathname === "/komunitas") return "Komunitas";
    if (pathname === "/quiz") return "Quiz";
    if (pathname === "/") return "Beranda";
    return "Halaman";
  };

  useEffect(() => {
    setIsLoading(true);
    setShowContent(false);

    // Simulate loading time + parallax initialization delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Additional delay for parallax initialization
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, 3500);

    return () => clearTimeout(timer);
  }, [pathname]);

  const themeColors = getThemeColors();

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${themeColors.from} 0%, ${themeColors.to} 100%)`,
          }}
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
            >
              <Leaf className="w-10 h-10 text-emerald-500" />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Sampedia
            </motion.h1>

            {/* Loading Spinner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col items-center justify-center gap-3 text-white/80"
            >
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-sm font-medium">Memuat halaman...</span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-xs text-white/60 font-light"
              >
                Menuju ke {getPageName()}...
              </motion.div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.6, duration: 2, ease: "easeInOut" }}
              className="w-48 h-1 bg-white/30 rounded-full mx-auto mt-6 overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.8, duration: 1.8, ease: "easeInOut" }}
                className="h-full bg-white rounded-full"
              />
            </motion.div>
          </div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{
                delay: 0.2 * i,
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
            />
          ))}
        </motion.div>
      )}

      {!isLoading && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
