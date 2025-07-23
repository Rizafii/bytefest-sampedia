"use client";
import { Star, Quote, Speaker } from "lucide-react";
import { useState } from "react";
import TargetCursor from "../rb/TargetCursor/TargetCursor";
import CircularGallery from "../rb/CircularGallery/CircularGallery";

export default function Testimonials() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "Ibu Rumah Tangga",
      content:
        "Akhirnya ngerti cara pilah sampah yang bener! Sekarang rumah jadi lebih rapi dan ramah lingkungan. Materi yang disajikan mudah dipahami dan bisa langsung dipraktikkan.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=1",
      color: "emerald",
      location: "Jakarta",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa",
      content:
        "Materinya gampang dipahami dan aplikatif banget. Sekarang bisa ngajarin temen-temen juga! Platform ini benar-benar membantu generasi muda untuk lebih peduli lingkungan.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=3",
      color: "blue",
      location: "Bandung",
    },
    {
      name: "Rina Kartika",
      role: "Guru SD",
      content:
        "Platform yang bagus buat ngajarin anak-anak tentang lingkungan. Mereka jadi lebih aware sama sampah dan antusias belajar tentang daur ulang. Sangat membantu dalam proses pembelajaran.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=9",
      color: "purple",
      location: "Surabaya",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        stackBg: "bg-emerald-100",
        stackBorder: "border-emerald-300",
        iconBg: "bg-emerald-500",
        quoteBg: "bg-emerald-100",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        stackBg: "bg-blue-100",
        stackBorder: "border-blue-300",
        iconBg: "bg-blue-500",
        quoteBg: "bg-blue-100",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        stackBg: "bg-purple-100",
        stackBorder: "border-purple-300",
        iconBg: "bg-purple-500",
        quoteBg: "bg-purple-100",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <section
      className="relative w-full py-20 px-4 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-6xl mx-auto">
        {isHovering && (
          <TargetCursor spinDuration={3} hideDefaultCursor={true} />
        )}

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
            <Speaker className="w-5 h-5 text-emerald-600 animate-pulse" />
            <span className="text-emerald-700 font-medium text-sm">Review</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Kata Mereka yang Sudah
            <span className="text-emerald-600"> Belajar</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Simak pengalaman nyata dari pengguna yang telah merasakan manfaat
            dari edukasi sampah kami dan mulai menerapkan gaya hidup ramah
            lingkungan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const colors = getColorClasses(testimonial.color);
            const floatDelay = `${index * 0.5}s`;

            return (
              <div
                key={index}
                className={`group cursor-target relative cursor-pointer transform  hover:rotate-0 transition-all duration-500`}
                style={{
                  animation: `float 6s ease-in-out infinite ${floatDelay}`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Stack effect layers */}
                <div
                  className={`absolute inset-0 ${colors.stackBg} border ${colors.stackBorder} rounded-3xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3`}
                ></div>
                <div
                  className={`absolute inset-0 ${colors.stackBg} border ${colors.stackBorder} rounded-3xl transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2`}
                ></div>

                {/* Main card */}
                <div
                  className={`relative ${colors.bg} border ${colors.border} rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 z-10`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
                    <div
                      className={`absolute -top-4 -right-4 w-20 h-20 ${colors.iconBg} rounded-full blur-xl`}
                    ></div>
                    <div
                      className={`absolute -bottom-4 -left-4 w-16 h-16 ${colors.iconBg} rounded-full blur-xl`}
                    ></div>
                  </div>

                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <div
                      className={`w-12 h-12 ${colors.quoteBg} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                    >
                      <Quote className={`w-6 h-6 ${colors.text}`} />
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 text-sm md:text-base">
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current group-hover:animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 ${colors.iconBg} rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                      >
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback jika gambar tidak load
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              testimonial.name
                            )}&background=random&color=fff&size=48`;
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm ${colors.text} font-medium`}>
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          📍 {testimonial.location}
                        </p>
                      </div>
                    </div>

                    {/* Hover indicator */}
                    <div
                      className={`mt-6 w-full h-1 ${colors.iconBg} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                    ></div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute inset-0 rounded-3xl border-2 ${
                      colors.border
                    } transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-6 py-3 rounded-full hover:bg-emerald-200 transition-all duration-300 cursor-pointer group">
            <span className="text-emerald-700 font-medium">
              Mau jadi yang selanjutnya berbagi cerita?
            </span>
            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white text-xs">✨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-8 w-12 h-12 bg-purple-200 rounded-full opacity-25 animate-ping"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
