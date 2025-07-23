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
  ChevronDown,
  Recycle,
  TreePine,
  Award,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | string | null>(
    null
  );
  const pathname = usePathname();

  // Theme colors based on route
  const getThemeColors = () => {
    if (pathname === "/belajar") {
      return {
        primary: "yellow",
        primaryHex: "#eab308", // yellow-500
        primaryLight: "#fef3c7", // yellow-100
        primaryDark: "#ca8a04", // yellow-600
        gradient: "from-yellow-500 to-amber-600",
        gradientHover: "from-yellow-600 to-amber-700",
        text: "from-yellow-600 to-amber-600",
        bg: "bg-yellow-100",
        bgHover: "hover:bg-yellow-50/80",
        textHover: "hover:text-yellow-600",
        borderColor: "border-yellow-100",
        gradientOverlay: "from-yellow-400 to-amber-500",
      };
    }
    // Default emerald theme for home and other routes
    return {
      primary: "emerald",
      primaryHex: "#10b981", // emerald-500
      primaryLight: "#d1fae5", // emerald-100
      primaryDark: "#059669", // emerald-600
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

  const navItems = [
    {
      icon: Home,
      label: "Beranda",
      href: "/",
    },
    {
      icon: BookOpen,
      label: "Belajar",
      hasDropdown: true,
      dropdownItems: [
        { icon: BookOpen, label: "Belajar", href: "/belajar" },
        { icon: Recycle, label: "Jenis Sampah", href: "#jenis-sampah" },
        { icon: TreePine, label: "Cara Daur Ulang", href: "#daur-ulang" },
        { icon: Award, label: "Tips & Trik", href: "#tips-trik" },
      ],
    },
    {
      icon: Users,
      label: "Komunitas",
      hasDropdown: true,
      dropdownItems: [
        { icon: Users, label: "Forum Diskusi", href: "#forum" },
        { icon: Award, label: "Leaderboard", href: "#leaderboard" },
        { icon: Leaf, label: "Event Hijau", href: "#events" },
      ],
    },
    {
      icon: Phone,
      label: "Kontak",
      href: "#kontak",
    },
  ];

  const handleDropdownToggle = (index: number | string) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleClickOutside = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    if (activeDropdown !== null) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <>
      {/* Desktop Navbar - Capsule Shape */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[999] transition-all duration-500 ease-in-out  ${
          scrolled ? "scale-95 top-4" : "scale-100"
        }`}
      >
        <div
          className={`backdrop-blur-xs rounded-full px-8 py-3  border border-gray-200 transition-all duration-300  ${
            scrolled ? "py-2 bg-white/50" : ""
          }`}
        >
          <div className="flex items-center justify-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-2 pr-4">
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

              {/* Separator */}
              <div className="w-px h-6 bg-gray-200 mx-2"></div>

              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.label} className="relative">
                    {item.hasDropdown ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDropdownToggle(index);
                        }}
                        className={`group flex items-center space-x-2 px-5 py-2.5 rounded-full text-gray-900 ${theme.textHover} ${theme.bgHover} transition-all duration-300 relative overflow-hidden`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium whitespace-nowrap">
                          {item.label}
                        </span>
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${theme.gradientOverlay} opacity-0 group-hover:opacity-8 transition-opacity duration-300 rounded-full`}
                        ></div>
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className={`group flex items-center space-x-2 px-5 py-2.5 rounded-full text-gray-900 ${theme.textHover} ${theme.bgHover} transition-all duration-300 relative overflow-hidden`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium whitespace-nowrap">
                          {item.label}
                        </span>
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${theme.gradientOverlay} opacity-0 group-hover:opacity-8 transition-opacity duration-300 rounded-full`}
                        ></div>
                      </a>
                    )}

                    {/* Dropdown Menu */}
                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full mt-6 left-0 bg-white/80 rounded-2xl backdrop-blur-xl border ${
                          theme.borderColor
                        } py-2 min-w-48 transition-all duration-300 transform origin-top shadow-lg ${
                          activeDropdown === index
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => {
                            const DropdownIconComponent = dropdownItem.icon;
                            return (
                              <a
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`group flex items-center space-x-3 px-4 py-3 text-gray-900 ${theme.textHover} ${theme.bgHover} transition-all duration-200 relative overflow-hidden`}
                                style={{
                                  animationDelay: `${dropdownIndex * 50}ms`,
                                  animation:
                                    activeDropdown === index
                                      ? "slideInDown 200ms ease-out forwards"
                                      : "none",
                                }}
                              >
                                <DropdownIconComponent className="w-4 h-4" />
                                <span className="text-sm font-medium whitespace-nowrap">
                                  {dropdownItem.label}
                                </span>
                                <div
                                  className={`absolute inset-0 bg-gradient-to-r ${theme.gradientOverlay} opacity-0 group-hover:opacity-5 transition-opacity duration-200`}
                                ></div>
                              </a>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Separator */}
              <div className="w-px h-6 bg-gray-200 mx-2"></div>

              {/* CTA Button integrated */}
              <button
                className={`bg-gradient-to-r ${theme.gradient} text-white px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 hover:${theme.gradientHover} whitespace-nowrap`}
              >
                Coba Quiz
              </button>
            </div>

            {/* Mobile Content */}
            <div className="md:hidden flex items-center justify-between w-full">
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
                  Sampah.pedia
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
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
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
          className={`absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border ${
            theme.borderColor
          } p-6 transform transition-all duration-300 max-h-[80vh] overflow-y-auto ${
            isOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
        >
          <div className="space-y-1">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(`mobile-${index}`)}
                        className={`group flex items-center justify-between w-full px-4 py-3 rounded-2xl text-gray-700 ${theme.textHover} ${theme.bgHover} transition-all duration-300`}
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: isOpen
                            ? "slideInLeft 300ms ease-out forwards"
                            : "none",
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`${theme.bg} p-2 rounded-full group-hover:bg-${theme.primary}-200 transition-colors duration-200`}
                          >
                            <IconComponent
                              className={`w-5 h-5 text-${theme.primary}-600`}
                            />
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === `mobile-${index}`
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeDropdown === `mobile-${index}`
                            ? "max-h-48 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-6 space-y-1 mt-2">
                          {item.dropdownItems.map((dropdownItem) => {
                            const DropdownIconComponent = dropdownItem.icon;
                            return (
                              <a
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                onClick={() => setIsOpen(false)}
                                className={`group flex items-center space-x-3 px-4 py-2 rounded-xl text-gray-900 ${theme.textHover} ${theme.bgHover} transition-all duration-200`}
                              >
                                <DropdownIconComponent
                                  className={`w-4 h-4 text-${theme.primary}-500`}
                                />
                                <span className="text-sm font-medium">
                                  {dropdownItem.label}
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center space-x-3 px-4 py-3 rounded-2xl text-gray-700 ${theme.textHover} ${theme.bgHover} transition-all duration-300 relative overflow-hidden`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isOpen
                          ? "slideInLeft 300ms ease-out forwards"
                          : "none",
                      }}
                    >
                      <div
                        className={`${theme.bg} p-2 rounded-full group-hover:bg-${theme.primary}-200 transition-colors duration-200`}
                      >
                        <IconComponent
                          className={`w-5 h-5 text-${theme.primary}-600`}
                        />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <button
              className={`w-full bg-gradient-to-r ${theme.gradient} text-white py-3 rounded-2xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              Mulai Belajar
            </button>
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

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
