"use client";
import { useState, useEffect } from "react";
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
      href: "#home",
    },
    {
      icon: BookOpen,
      label: "Belajar",
      hasDropdown: true,
      dropdownItems: [
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
          className={`backdrop-blur-sm rounded-full px-8 py-3  border border-gray-200 transition-all duration-300  ${
            scrolled ? "py-2 bg-white backdrop-blur-7xl" : "backdrop-blur-sm"
          }`}
        >
          <div className="flex items-center justify-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-2 pr-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-full">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  SampahPedia
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
                        className="group flex items-center space-x-2 px-5 py-2.5 rounded-full text-gray-600 hover:text-green-600 hover:bg-green-50/80 transition-all duration-300 relative overflow-hidden"
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
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-8 transition-opacity duration-300 rounded-full"></div>
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="group flex items-center space-x-2 px-5 py-2.5 rounded-full text-gray-600 hover:text-green-600 hover:bg-green-50/80 transition-all duration-300 relative overflow-hidden"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium whitespace-nowrap">
                          {item.label}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-8 transition-opacity duration-300 rounded-full"></div>
                      </a>
                    )}

                    {/* Dropdown Menu */}
                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full mt-2 left-0 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-green-100 py-2 min-w-48 transition-all duration-300 transform origin-top ${
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
                                className="group flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50/80 transition-all duration-200 relative overflow-hidden"
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
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-200"></div>
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
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 hover:from-green-600 hover:to-emerald-700 whitespace-nowrap">
                Mulai Belajar
              </button>
            </div>

            {/* Mobile Content */}
            <div className="md:hidden flex items-center justify-between w-full">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-full">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Sampah.pedia
                </span>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-green-50 transition-colors duration-200"
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
          className={`absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-green-100 p-6 transform transition-all duration-300 max-h-[80vh] overflow-y-auto ${
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
                        className="group flex items-center justify-between w-full px-4 py-3 rounded-2xl text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300"
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: isOpen
                            ? "slideInLeft 300ms ease-out forwards"
                            : "none",
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-colors duration-200">
                            <IconComponent className="w-5 h-5 text-green-600" />
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
                                className="group flex items-center space-x-3 px-4 py-2 rounded-xl text-gray-600 hover:text-green-600 hover:bg-green-50/80 transition-all duration-200"
                              >
                                <DropdownIconComponent className="w-4 h-4 text-green-500" />
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
                      className="group flex items-center space-x-3 px-4 py-3 rounded-2xl text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 relative overflow-hidden"
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isOpen
                          ? "slideInLeft 300ms ease-out forwards"
                          : "none",
                      }}
                    >
                      <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-colors duration-200">
                        <IconComponent className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-green-100">
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-2xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
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
