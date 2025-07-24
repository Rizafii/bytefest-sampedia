"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Leaf,
  BookOpen,
  Users,
  Phone,
  Home,
  Brain,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Theme colors based on route
  const getThemeColors = () => {
    if (pathname === "/belajar") {
      return {
        primary: "yellow",
        gradient: "from-yellow-500 to-yellow-600",
        gradientHover: "from-yellow-600 to-yellow-700",
        text: "from-yellow-600 to-yellow-600",
        bg: "bg-yellow-100",
        bgHover: "hover:bg-yellow-50/80",
        textHover: "hover:text-yellow-600",
        borderColor: "border-yellow-100",
        gradientOverlay: "from-yellow-400 to-yellow-500",
      };
    } else if (pathname === "/komunitas") {
      return {
        primary: "blue",
        gradient: "from-blue-500 to-blue-600",
        gradientHover: "from-blue-600 to-blue-700",
        text: "from-blue-600 to-blue-600",
        bg: "bg-blue-100",
        bgHover: "hover:bg-blue-50/80",
        textHover: "hover:text-blue-600",
        borderColor: "border-blue-100",
        gradientOverlay: "from-blue-400 to-blue-500",
      };
    } else if (pathname === "/quiz") {
      return {
        primary: "purple",
        gradient: "from-purple-500 to-purple-600",
        gradientHover: "from-purple-600 to-purple-700",
        text: "from-purple-600 to-purple-600",
        bg: "bg-purple-100",
        bgHover: "hover:bg-purple-50/80",
        textHover: "hover:text-purple-600",
        borderColor: "border-purple-100",
        gradientOverlay: "from-purple-400 to-purple-500",
      };
    } else if (pathname === "/contact") {
      return {
        primary: "red",
        gradient: "from-red-500 to-red-600",
        gradientHover: "from-red-600 to-red-700",
        text: "from-red-600 to-red-600",
        bg: "bg-red-100",
        bgHover: "hover:bg-red-50/80",
        textHover: "hover:text-red-600",
        borderColor: "border-red-100",
        gradientOverlay: "from-red-400 to-red-500",
      };
    }
    // Default emerald theme for home and other routes
    return {
      primary: "emerald",
      gradient: "from-green-500 to-emerald-600",
      gradientHover: "from-green-600 to-emerald-700",
      text: "from-green-600 to-emerald-600",
      bg: "bg-green-100",
      bgHover: "hover:bg-green-50/80",
      textHover: "hover:text-green-600",
      borderColor: "border-green-100",
      gradientOverlay: "from-green-400 to-emerald-500",
    };
  };

  const theme = getThemeColors();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simplified nav items without dropdown
  const navItems = [
    {
      icon: Home,
      label: "Beranda",
      href: "/",
    },
    {
      icon: BookOpen,
      label: "Belajar",
      href: "/belajar",
    },
    {
      icon: Users,
      label: "Komunitas",
      href: "/komunitas",
    },
    {
      icon: Phone,
      label: "Kontak",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* Desktop Navbar - Capsule Shape */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[90] transition-all duration-500 ease-in-out  ${
          scrolled ? "scale-95 top-4" : "scale-100"
        }`}
      >
        <div
          className={`backdrop-blur-[1px] rounded-full px-8 py-3 bg-transparent border border-gray-200 transition-all duration-300 shadow-lg ${
            scrolled ? "py-2 bg-white/90 backdrop-blur-md" : ""
          }`}
        >
          <div className="flex items-center justify-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-2 pr-4">
                <div
                  className={`bg-gradient-to-br ${theme.gradient} p-2 rounded-full shadow-sm`}
                >
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span
                  className={`font-bold text-lg bg-gradient-to-r ${theme.text} bg-clip-text text-transparent`}
                >
                  Sampedia
                </span>
              </div>

              {/* Separator */}
              <div className="w-px h-6 bg-gray-200 mx-2"></div>

              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? `${theme.bg} ${theme.textHover.replace(
                            "hover:",
                            ""
                          )} shadow-sm`
                        : `text-gray-700 ${theme.textHover} ${theme.bgHover}`
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${theme.gradientOverlay} opacity-0 group-hover:opacity-8 transition-opacity duration-300 rounded-full`}
                    ></div>
                  </a>
                );
              })}

              {/* Separator */}
              <div className="w-px h-6 bg-gray-200 mx-2"></div>

              {/* CTA Button */}
              <a
                href="/quiz"
                className={`bg-gradient-to-r ${theme.gradient} text-white px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap`}
              >
                Coba Quiz
              </a>
            </div>

            {/* Mobile Content */}
            <div className="md:hidden  flex items-center justify-between min-w-82 ">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div
                  className={`bg-gradient-to-br ${theme.gradient} p-2 rounded-full`}
                >
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span
                  className={`font-bold text-lg bg-gradient-to-r ${theme.text} bg-clip-text text-transparent`}
                >
                  Sampedia
                </span>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full ${theme.bgHover} transition-colors duration-200`}
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed  inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-25 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border ${
            theme.borderColor
          } p-6 transform transition-all duration-300 max-h-[80vh] overflow-y-auto ${
            isOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
        >
          <div className="space-y-2">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? `${theme.bg} ${theme.textHover.replace(
                          "hover:",
                          ""
                        )} shadow-sm`
                      : `text-gray-700 ${theme.textHover} ${theme.bgHover}`
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen
                      ? "slideInLeft 300ms ease-out forwards"
                      : "none",
                  }}
                >
                  <div
                    className={`${
                      isActive ? theme.bg : theme.bg
                    } p-2 rounded-full transition-colors duration-200`}
                  >
                    <IconComponent
                      className={`w-5 h-5 ${
                        isActive
                          ? theme.textHover.replace("hover:", "")
                          : `text-${theme.primary}-600`
                      }`}
                    />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <a
              href="/quiz"
              className={`w-full bg-gradient-to-r ${theme.gradient} text-white py-3 rounded-2xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 block text-center`}
            >
              Coba Quiz
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
