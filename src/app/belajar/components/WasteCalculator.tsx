"use client";
import { useState } from "react";
import {
  Calculator,
  Trash2,
  Leaf,
  AlertTriangle,
  CheckCircle,
  BarChart3,
} from "lucide-react";

interface WasteCategory {
  id: string;
  name: string;
  unit: string;
  carbonFactor: number; // kg CO2 per unit
  icon: string;
  color: string;
  tips: string[];
}

const wasteCategories: WasteCategory[] = [
  {
    id: "plastic",
    name: "Sampah Plastik",
    unit: "kg/minggu",
    carbonFactor: 6.0,
    icon: "🥤",
    color: "red",
    tips: [
      "Gunakan tas belanja kain",
      "Pilih produk dengan kemasan minimal",
      "Bawa botol minum sendiri",
    ],
  },
  {
    id: "organic",
    name: "Sampah Organik",
    unit: "kg/minggu",
    carbonFactor: 0.5,
    icon: "🍎",
    color: "green",
    tips: [
      "Buat kompos di rumah",
      "Beli sesuai kebutuhan",
      "Manfaatkan sisa makanan",
    ],
  },
  {
    id: "paper",
    name: "Kertas",
    unit: "kg/minggu",
    carbonFactor: 3.3,
    icon: "📄",
    color: "blue",
    tips: ["Print bolak-balik", "Gunakan kertas bekas", "Digitalisasi dokumen"],
  },
  {
    id: "electronic",
    name: "Elektronik",
    unit: "item/tahun",
    carbonFactor: 300,
    icon: "📱",
    color: "purple",
    tips: [
      "Perbaiki sebelum beli baru",
      "Jual atau donasi yang masih bagus",
      "Pilih produk tahan lama",
    ],
  },
];

export default function WasteCalculator() {
  const [wasteInputs, setWasteInputs] = useState<Record<string, number>>({
    plastic: 0,
    organic: 0,
    paper: 0,
    electronic: 0,
  });
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (categoryId: string, value: number) => {
    setWasteInputs((prev) => ({
      ...prev,
      [categoryId]: value,
    }));
  };

  const calculateFootprint = () => {
    let totalCO2 = 0;
    wasteCategories.forEach((category) => {
      const input = wasteInputs[category.id] || 0;
      if (category.id === "electronic") {
        // Electronic is per year, others per week
        totalCO2 += (input * category.carbonFactor) / 52; // Convert to weekly
      } else {
        totalCO2 += input * category.carbonFactor;
      }
    });
    return totalCO2 * 52; // Convert to yearly
  };

  const getImpactLevel = (co2: number) => {
    if (co2 < 100)
      return {
        level: "Rendah",
        color: "green",
        message: "Luar biasa! Jejak karbonmu sangat rendah.",
      };
    if (co2 < 300)
      return {
        level: "Sedang",
        color: "yellow",
        message: "Cukup baik, masih bisa ditingkatkan lagi.",
      };
    if (co2 < 500)
      return {
        level: "Tinggi",
        color: "orange",
        message: "Perlu perhatian, mari kurangi sampahmu.",
      };
    return {
      level: "Sangat Tinggi",
      color: "red",
      message: "Urgent! Butuh aksi segera untuk mengurangi sampah.",
    };
  };

  const totalCO2 = calculateFootprint();
  const impact = getImpactLevel(totalCO2);

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-200",
        button: "bg-red-500",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
        button: "bg-green-500",
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        button: "bg-blue-500",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        button: "bg-purple-500",
      },
      yellow: {
        bg: "bg-yellow-100",
        text: "text-yellow-600",
        border: "border-yellow-200",
        button: "bg-yellow-500",
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-200",
        button: "bg-orange-500",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
            <Calculator className="w-5 h-5 text-yellow-600 animate-pulse" />
            <span className="text-yellow-700 font-medium text-sm">
              Waste Calculator
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Kalkulator <span className="text-yellow-600">Jejak Sampah</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Hitung jejak karbon dari sampah yang kamu hasilkan dan temukan cara
            untuk menguranginya. Setiap langkah kecil membuat perbedaan besar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Calculator Input */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Trash2 className="w-6 h-6 text-yellow-600" />
              Input Data Sampahmu
            </h3>

            {wasteCategories.map((category) => {
              const colors = getColorClasses(category.color);
              return (
                <div
                  key={category.id}
                  className={`${colors.bg} border-2 ${colors.border} rounded-3xl p-4 md:p-6 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <div className="text-2xl md:text-3xl">{category.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-bold text-gray-800 break-words">
                        {category.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600">
                        Per {category.unit.split("/")[1]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4">
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      value={wasteInputs[category.id] || ""}
                      onChange={(e) =>
                        handleInputChange(
                          category.id,
                          Number.parseFloat(e.target.value) || 0
                        )
                      }
                      placeholder="0"
                      className="flex-1 px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-base md:text-lg font-medium"
                    />
                    <span className="text-xs md:text-sm font-medium text-gray-600 min-w-fit whitespace-nowrap">
                      {category.unit}
                    </span>
                  </div>

                  {/* Tips Preview */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">💡 Tips cepat:</p>
                    <p className="text-xs md:text-sm text-gray-600">
                      {category.tips[0]}
                    </p>
                  </div>
                </div>
              );
            })}

            <button
              onClick={() => setShowResults(true)}
              className="w-full bg-yellow-500 text-white py-3 md:py-4 px-4 md:px-6 rounded-2xl font-bold text-base md:text-lg hover:bg-yellow-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              Hitung Jejak Karbon
            </button>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-600" />
              Hasil & Rekomendasi
            </h3>

            {showResults ? (
              <div className="space-y-6">
                {/* Main Result */}
                <div
                  className={`${getColorClasses(impact.color).bg} border-2 ${
                    getColorClasses(impact.color).border
                  } rounded-3xl p-6 md:p-8 text-center`}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {impact.level === "Rendah" ? (
                      <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
                    ) : (
                      <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />
                    )}
                  </div>

                  <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {totalCO2.toFixed(1)} kg CO₂
                  </h4>
                  <p className="text-base md:text-lg font-medium text-gray-700 mb-2">
                    per tahun
                  </p>
                  <div
                    className={`inline-block px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold ${
                      getColorClasses(impact.color).button
                    } text-white`}
                  >
                    Dampak: {impact.level}
                  </div>
                  <p className="text-gray-600 mt-4 text-sm md:text-base">
                    {impact.message}
                  </p>
                </div>

                {/* Breakdown */}
                <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-gray-200">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-4">
                    Rincian Jejak Karbon
                  </h4>
                  <div className="space-y-3">
                    {wasteCategories.map((category) => {
                      const input = wasteInputs[category.id] || 0;
                      let co2 = 0;
                      if (category.id === "electronic") {
                        co2 = ((input * category.carbonFactor) / 52) * 52; // Yearly
                      } else {
                        co2 = input * category.carbonFactor * 52; // Weekly to yearly
                      }
                      const percentage =
                        totalCO2 > 0 ? (co2 / totalCO2) * 100 : 0;

                      return (
                        <div
                          key={category.id}
                          className="flex items-center gap-3"
                        >
                          <span className="text-base md:text-lg">
                            {category.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs md:text-sm font-medium text-gray-700 truncate">
                                {category.name}
                              </span>
                              <span className="text-xs md:text-sm font-bold text-gray-800 ml-2">
                                {co2.toFixed(1)} kg CO₂
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  getColorClasses(category.color).button
                                }`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-green-50 border border-green-200 rounded-3xl p-4 md:p-6">
                  <h4 className="text-base md:text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                    <Leaf className="w-5 h-5" />
                    Rekomendasi Aksi
                  </h4>
                  <div className="space-y-3">
                    {wasteCategories
                      .filter((category) => (wasteInputs[category.id] || 0) > 0)
                      .map((category) => (
                        <div
                          key={category.id}
                          className="bg-white rounded-xl p-3 md:p-4"
                        >
                          <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm md:text-base">
                            <span>{category.icon}</span>
                            {category.name}
                          </h5>
                          <ul className="space-y-1">
                            {category.tips.map((tip, index) => (
                              <li
                                key={index}
                                className="text-xs md:text-sm text-gray-600 flex items-start gap-2"
                              >
                                <span className="text-green-500 mt-0.5">•</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8 text-center">
                <Calculator className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-4" />
                <h4 className="text-base md:text-lg font-medium text-gray-600 mb-2">
                  Siap untuk Menghitung?
                </h4>
                <p className="text-gray-500 text-sm md:text-base">
                  Masukkan data sampahmu di sebelah kiri, lalu klik tombol
                  hitung untuk melihat jejak karbonmu dan mendapatkan
                  rekomendasi personal.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-3xl p-6 md:p-8 text-center">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
            Tahukah Kamu?
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
            Rata-rata orang Indonesia menghasilkan sekitar{" "}
            <strong>2.5 kg sampah per hari</strong>. Dengan mengurangi sampah
            sebesar <strong>20%</strong>, kamu bisa menghemat hingga{" "}
            <strong>200 kg CO₂</strong> per tahun - setara dengan menanam 9
            pohon! 🌳
          </p>
        </div>
      </div>
    </section>
  );
}
