import {
  Trash2,
  Leaf,
  Droplets,
  Zap,
  Shield,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";
import Stack from "../../rb/Stack/Stack";

const sampahData = [
  {
    id: 1,
    jenis: "Sampah Organik",
    deskripsi:
      "Sampah yang berasal dari makhluk hidup dan dapat terurai secara alami",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    gradientBg: "from-green-50 to-green-100",
    accentColor: "bg-green-600",
    img: "https://i.imgur.com/cA8ONLm.jpeg",
    contoh: ["Sisa makanan", "Daun kering", "Kulit buah", "Sayuran busuk"],
    pengolahan: "Dapat diolah menjadi kompos atau pupuk organik untuk tanaman",
  },
  {
    id: 2,
    jenis: "Sampah Anorganik",
    deskripsi:
      "Sampah yang tidak dapat terurai secara alami dan membutuhkan waktu lama",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    gradientBg: "from-blue-50 to-blue-100",
    accentColor: "bg-blue-600",
    img: "https://i.imgur.com/ZAHjkV7.jpeg",
    contoh: ["Plastik", "Kaca", "Kaleng", "Logam"],
    pengolahan:
      "Dapat didaur ulang menjadi produk baru atau dijual ke bank sampah",
  },
  {
    id: 3,
    jenis: "Sampah B3",
    deskripsi:
      "Sampah Bahan Berbahaya dan Beracun yang dapat membahayakan kesehatan",
    icon: Zap,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    gradientBg: "from-red-50 to-red-100",
    accentColor: "bg-red-600",
    img: "https://i.imgur.com/hTCjbuM.jpeg",
    contoh: ["Baterai bekas", "Lampu neon", "Obat kedaluwarsa", "Cat bekas"],
    pengolahan: "Harus diserahkan ke fasilitas khusus pengelolaan limbah B3",
  },
  {
    id: 4,
    jenis: "Sampah Elektronik",
    deskripsi:
      "Perangkat elektronik yang sudah tidak terpakai dan mengandung logam berat",
    icon: Droplets,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    gradientBg: "from-purple-50 to-purple-100",
    accentColor: "bg-purple-600",
    img: "https://i.imgur.com/J77xbjG.jpeg",
    contoh: ["HP bekas", "Laptop rusak", "TV lama", "Charger"],
    pengolahan:
      "Dapat diserahkan ke toko elektronik atau pusat daur ulang e-waste",
  },
];

export default function JenisSampah() {
  const [activeCard, setActiveCard] = useState(0);

  const currentSampah = sampahData[activeCard];
  const IconComponent = currentSampah?.icon || Trash2;

  return (
    <section className="relative w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
            <Trash2 className="w-5 h-5 text-yellow-600 animate-pulse" />
            <span className="text-yellow-700 font-medium text-sm">
              Jenis Sampah
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Kenali <span className="text-yellow-600">4 Jenis Sampah</span> Ini!
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Yuk pelajari jenis-jenis sampah dan cara mengelolanya dengan benar.
            Swipe kartu untuk melihat jenis sampah lainnya!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          {/* Left Side - Enhanced Information Card */}
          <div className="space-y-8">
            {currentSampah && (
              <div className="relative ">
                {/* Main Card */}
                <div
                  className={`relative bg-gradient-to-br ${currentSampah.gradientBg} border-2 shadow-sm  ${currentSampah.borderColor} rounded-3xl p-8 transition-all duration-700  transform hover:-translate-y-1`}
                >
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div
                        className={`${currentSampah.accentColor} p-4 rounded-2xl `}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                          {currentSampah.jenis}
                        </h3>
                        <div
                          className={`w-16 h-1 ${currentSampah.accentColor} rounded-full`}
                        ></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500 font-medium">
                        {activeCard + 1} / {sampahData.length}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-gray-700 text-lg leading-relaxed font-medium">
                      {currentSampah.deskripsi}
                    </p>
                  </div>

                  {/* Examples Section */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={`w-2 h-2 ${currentSampah.accentColor} rounded-full`}
                      ></div>
                      <h4 className="font-bold text-gray-800 text-xl">
                        Contoh Sampah
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {currentSampah.contoh.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl text-sm font-medium text-gray-700 border border-white/50 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 cursor-default"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 ${currentSampah.accentColor} rounded-full opacity-60`}
                            ></div>
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Processing Section */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`${currentSampah.accentColor} p-2 rounded-lg`}
                      >
                        <Lightbulb className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 text-xl">
                        Cara Pengolahan
                      </h4>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight
                        className={`w-5 h-5 ${currentSampah.color} mt-1 flex-shrink-0`}
                      />
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        {currentSampah.pengolahan}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Stack Cards */}
          <div className="flex justify-center -mt-10 -ml-5">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 400, height: 520 }}
              cardsData={sampahData}
              onCardChange={(index) => setActiveCard(index)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
