"use client";
import { useState } from "react";
import { Heart, ExternalLink } from "lucide-react";

export default function SupportBy() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const brands = [
    {
      name: "Eco Innovation Award 2024",
      logo: "�",
      description: "Penghargaan inovasi teknologi ramah lingkungan",
      website: "https://ecoinnovation.com",
      category: "Award",
    },
    {
      name: "Green Champion Award",
      logo: "🥇",
      description: "Juara kampanye lingkungan terbaik",
      website: "https://greenchampion.org",
      category: "Award",
    },
    {
      name: "Sustainability Excellence",
      logo: "🌟",
      description: "Penghargaan keunggulan keberlanjutan",
      website: "https://sustainability.com",
      category: "Award",
    },
    {
      name: "Clean Ocean",
      logo: "🌊",
      description: "Kampanye laut bersih",
      website: "https://cleanocean.org",
      category: "Marine",
    },
    {
      name: "Zero Waste",
      logo: "🗂️",
      description: "Gaya hidup minim sampah",
      website: "https://zerowaste.com",
      category: "Lifestyle",
    },
    {
      name: "Eco Warriors",
      logo: "🌿",
      description: "Komunitas pejuang lingkungan",
      website: "https://ecowarriors.org",
      category: "Community",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Award: "bg-yellow-100 text-yellow-700 border-yellow-200",
      Technology: "bg-blue-100 text-blue-700 border-blue-200",
      Environmental: "bg-green-100 text-green-700 border-green-200",
      Recycling: "bg-purple-100 text-purple-700 border-purple-200",
      Marine: "bg-cyan-100 text-cyan-700 border-cyan-200",
      Lifestyle: "bg-orange-100 text-orange-700 border-orange-200",
      Community: "bg-pink-100 text-pink-700 border-pink-200",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-700 border-gray-200"
    );
  };

  return (
    <section className="relative w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-emerald-600 animate-pulse" />
            <span className="text-emerald-700 font-medium text-sm">
              Support & Achievement
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Pencapaian & Partner <span className="text-emerald-600">Kami</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Prestasi yang telah diraih dan dukungan dari brand-brand terkemuka
            yang peduli lingkungan dalam menciptakan dunia yang lebih hijau dan
            berkelanjutan
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div
                className={`
                relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                transition-all duration-500 ease-out
                ${
                  hoveredIndex === index
                    ? "shadow-2xl scale-105 -translate-y-2"
                    : "hover:shadow-lg hover:scale-102"
                }
              `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Logo & Category */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl mb-2 transform transition-transform duration-300 group-hover:scale-110">
                      {brand.logo}
                    </div>
                    <span
                      className={`
                      px-3 py-1 rounded-full text-xs font-medium border
                      ${getCategoryColor(brand.category)}
                    `}
                    >
                      {brand.category}
                    </span>
                  </div>

                  {/* Brand Name */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {brand.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {brand.description}
                  </p>

                  {/* Visit Link */}
                  <div
                    className={`
                    flex items-center gap-2 text-emerald-600 font-medium text-sm
                    transform transition-all duration-300
                    ${hoveredIndex === index ? "translate-x-2" : ""}
                  `}
                  >
                    <span>Kunjungi Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl border-2 border-emerald-300
                  transition-opacity duration-300
                  ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
                `}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-8 w-12 h-12 bg-green-200 rounded-full opacity-25 animate-ping"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
