"use client"
import { useState } from "react"
import { Clock, Leaf, Factory, Globe, Lightbulb, TrendingUp } from "lucide-react"

interface TimelineEvent {
  id: number
  year: string
  title: string
  description: string
  impact: string
  icon: string
  color: string
  category: "problem" | "solution" | "milestone"
  details: string[]
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "1950s",
    title: "Era Plastik Dimulai",
    description: "Produksi plastik massal dimulai, mengubah gaya hidup manusia",
    impact: "Revolusi kemasan dan produk konsumen",
    icon: "🏭",
    color: "red",
    category: "problem",
    details: [
      "Produksi plastik global mencapai 2 juta ton per tahun",
      "Kemasan sekali pakai mulai populer",
      "Belum ada kesadaran tentang dampak lingkungan",
    ],
  },
  {
    id: 2,
    year: "1970s",
    title: "Kesadaran Lingkungan Muncul",
    description: "Gerakan lingkungan global dimulai dengan Earth Day pertama",
    impact: "Lahirnya kesadaran ekologi modern",
    icon: "🌍",
    color: "green",
    category: "milestone",
    details: [
      "Earth Day pertama dirayakan 22 April 1970",
      "Buku 'Silent Spring' memicu kesadaran lingkungan",
      "Pembentukan EPA (Environmental Protection Agency) di AS",
    ],
  },
  {
    id: 3,
    year: "1980s",
    title: "Konsep 3R Diperkenalkan",
    description: "Prinsip Reduce, Reuse, Recycle mulai dipromosikan secara global",
    impact: "Fondasi pengelolaan sampah modern",
    icon: "♻️",
    color: "blue",
    category: "solution",
    details: [
      "Hierarki pengelolaan sampah ditetapkan",
      "Program daur ulang komunitas dimulai",
      "Simbol daur ulang menjadi universal",
    ],
  },
  {
    id: 4,
    year: "1990s",
    title: "Krisis Sampah Global",
    description: "Masalah sampah plastik di lautan mulai teridentifikasi",
    impact: "Penemuan Great Pacific Garbage Patch",
    icon: "🌊",
    color: "red",
    category: "problem",
    details: [
      "Penelitian pertama tentang mikroplastik",
      "Sampah plastik ditemukan di perut hewan laut",
      "Kesadaran tentang polusi laut meningkat",
    ],
  },
  {
    id: 5,
    year: "2000s",
    title: "Teknologi Hijau Berkembang",
    description: "Inovasi teknologi ramah lingkungan mulai bermunculan",
    impact: "Era teknologi berkelanjutan",
    icon: "💡",
    color: "yellow",
    category: "solution",
    details: [
      "Bioplastik mulai dikembangkan",
      "Teknologi waste-to-energy diperluas",
      "Smart waste management systems diperkenalkan",
    ],
  },
  {
    id: 6,
    year: "2010s",
    title: "Gerakan Zero Waste",
    description: "Konsep zero waste dan circular economy menjadi mainstream",
    impact: "Perubahan paradigma konsumsi",
    icon: "🔄",
    color: "purple",
    category: "solution",
    details: [
      "Bea Johnson mempopulerkan zero waste lifestyle",
      "Circular economy menjadi model bisnis",
      "Startup cleantech bermunculan",
    ],
  },
  {
    id: 7,
    year: "2020s",
    title: "Era Digital & AI",
    description: "Teknologi AI dan IoT diterapkan dalam pengelolaan sampah",
    impact: "Smart cities dan waste management 4.0",
    icon: "🤖",
    color: "indigo",
    category: "solution",
    details: ["AI untuk sorting sampah otomatis", "IoT sensors di tempat sampah", "Blockchain untuk tracking waste"],
  },
]

export default function EcoTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "problem":
        return <Factory className="w-4 h-4" />
      case "solution":
        return <Lightbulb className="w-4 h-4" />
      case "milestone":
        return <TrendingUp className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "problem":
        return "bg-red-100 text-red-700 border-red-200"
      case "solution":
        return "bg-green-100 text-green-700 border-green-200"
      case "milestone":
        return "bg-blue-100 text-blue-700 border-blue-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: { bg: "bg-red-100", border: "border-red-300", dot: "bg-red-500" },
      green: { bg: "bg-green-100", border: "border-green-300", dot: "bg-green-500" },
      blue: { bg: "bg-blue-100", border: "border-blue-300", dot: "bg-blue-500" },
      yellow: { bg: "bg-yellow-100", border: "border-yellow-300", dot: "bg-yellow-500" },
      purple: { bg: "bg-purple-100", border: "border-purple-300", dot: "bg-purple-500" },
      indigo: { bg: "bg-indigo-100", border: "border-indigo-300", dot: "bg-indigo-500" },
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.green
  }

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-yellow-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
            <Clock className="w-5 h-5 text-yellow-600 animate-pulse" />
            <span className="text-yellow-700 font-medium text-sm">Eco Timeline</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Perjalanan <span className="text-yellow-600">Sejarah</span> Sampah
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Dari era industri hingga digital, lihat bagaimana masalah sampah berkembang dan solusi inovatif yang
            bermunculan untuk mengatasinya.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const colors = getColorClasses(event.color)
              const isSelected = selectedEvent === event.id

              return (
                <div key={event.id} className="relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 ${colors.dot} rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-white`}
                    >
                      <span>{event.icon}</span>
                    </div>
                    {/* Year Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {event.year}
                    </div>
                  </div>

                  {/* Event Card */}
                  <div
                    className={`flex-1 transition-all duration-300 cursor-pointer ${
                      isSelected ? "scale-105" : "hover:scale-102"
                    }`}
                    onClick={() => setSelectedEvent(isSelected ? null : event.id)}
                  >
                    <div
                      className={`${colors.bg} border-2 ${colors.border} rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300`}
                    >
                      {/* Event Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getCategoryColor(event.category)}`}
                            >
                              {getCategoryIcon(event.category)}
                              {event.category}
                            </span>
                          </div>
                          <p className="text-gray-700 leading-relaxed mb-3">{event.description}</p>
                          <div className="inline-block bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                            💥 {event.impact}
                          </div>
                        </div>
                      </div>

                      {/* Expandable Details */}
                      {isSelected && (
                        <div className="mt-6 pt-6 border-t border-gray-200 animate-in slide-in-from-top duration-300">
                          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Detail Peristiwa
                          </h4>
                          <div className="space-y-2">
                            {event.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Click Indicator */}
                      <div className="mt-4 text-center">
                        <span className="text-xs text-gray-500">
                          {isSelected ? "Klik untuk tutup" : "Klik untuk detail"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Future Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Masa Depan Ada di Tanganmu!</h3>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
              Sejarah menunjukkan bahwa setiap masalah lingkungan memiliki solusi. Kamu adalah bagian dari generasi yang
              akan menulis chapter selanjutnya dalam sejarah pengelolaan sampah.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-600 transition-all duration-300 hover:scale-105">
                Mulai Aksi Sekarang
              </button>
              <button className="border-2 border-yellow-500 text-yellow-600 px-8 py-3 rounded-full font-medium hover:bg-yellow-50 transition-all duration-300 hover:scale-105">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
