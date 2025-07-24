import { useState } from "react";
import {
  BookOpen,
  Target,
  Users,
  Globe,
  Lightbulb,
  TreePine,
  Heart,
} from "lucide-react";

export default function Pendahuluan() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const bentoItems = [
    {
      title: "Mengenal Jenis Sampah",
      description:
        "Pahami perbedaan antara sampah organik, anorganik, B3, dan elektronik dengan panduan lengkap.",
      icon: <Target className="w-6 h-6" />,
      color: "emerald",
      size: "md:col-span-2 md:row-span-1",
      bgImage:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop&auto=format",
    },
    {
      title: "Praktik Pemilahan",
      description:
        "Belajar teknik memilah sampah yang benar dari rumah dengan mudah.",
      icon: <Users className="w-6 h-6" />,
      color: "blue",
      size: "md:col-span-1 md:row-span-1",
      bgImage:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop&auto=format",
    },
    {
      title: "Dampak Lingkungan",
      description:
        "Memahami bagaimana sampah mempengaruhi lingkungan dan kesehatan kita semua.",
      icon: <TreePine className="w-6 h-6" />,
      color: "green",
      size: "md:col-span-1 md:row-span-1",
      bgImage:
        "https://images.unsplash.com/photo-1632372207404-d4f590dd66c1?q=80&w=1331&fit=crop&auto=format",
    },
    {
      title: "Solusi Kreatif",
      description:
        "Temukan cara inovatif untuk mengurangi dan mendaur ulang sampah dengan kreativitas.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "yellow",
      size: "md:col-span-1 md:row-span-1",
      bgImage:
        "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&h=400&fit=crop&auto=format",
    },
    {
      title: "Kondisi Saat Ini",
      description:
        "Indonesia menghasilkan 175.000 ton sampah setiap hari. Mari berubah!",
      icon: <Globe className="w-6 h-6" />,
      color: "red",
      size: "md:col-span-1 md:row-span-1",
      bgImage:
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=400&fit=crop&auto=format",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        iconBg: "bg-emerald-500",
        overlay: "bg-emerald-50/90 group-hover:bg-emerald-50/85",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        iconBg: "bg-blue-500",
        overlay: "bg-blue-50/90 group-hover:bg-blue-50/85",
      },
      yellow: {
        bg: "bg-yellow-50",
        text: "text-yellow-600",
        iconBg: "bg-yellow-500",
        overlay: "bg-yellow-50/90 group-hover:bg-yellow-50/85",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        iconBg: "bg-green-500",
        overlay: "bg-green-50/90 group-hover:bg-green-50/85",
      },
      red: {
        bg: "bg-red-50",
        text: "text-red-600",
        iconBg: "bg-red-500",
        overlay: "bg-red-50/90 group-hover:bg-red-50/85",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-700 font-medium text-sm">
              Mari Belajar Bersama
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Kenapa Kita Perlu <span className="text-yellow-600">Belajar</span>{" "}
            <br className="hidden md:block" />
            Tentang Sampah?
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selamat datang di perjalanan edukasi yang akan{" "}
            <span className="font-semibold text-gray-700">
              mengubah cara pandang
            </span>{" "}
            kamu terhadap sampah dan lingkungan! 🌱
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 auto-rows-fr">
          {bentoItems.map((item, index) => {
            const colors = getColorClasses(item.color);
            return (
              <div
                key={index}
                className={`${item.size} border-2 shadow-sm border-gray-200 rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 min-h-64`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div
                  className="absolute brightness-70 inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${item.bgImage}')`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div>
                    {/* Icon Container */}
                    <div
                      className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg`}
                    >
                      <div className="text-white">{item.icon}</div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 leading-relaxed mb-4 group-hover:text-white transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500" />
            <span className="text-lg font-semibold text-gray-800">
              Bersama Kita Bisa Membuat Perubahan!
            </span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Setiap langkah kecil yang kita ambil hari ini akan menjadi fondasi
            untuk masa depan yang lebih bersih dan berkelanjutan.
          </p>
        </div>
      </div>
    </section>
  );
}
