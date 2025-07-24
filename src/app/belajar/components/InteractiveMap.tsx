"use client"
import { useState } from "react"
import { MapPin, Search, Filter, Navigation, Phone, Clock, Star, ExternalLink } from "lucide-react"

interface WasteBank {
  id: number
  name: string
  address: string
  city: string
  phone: string
  hours: string
  rating: number
  types: string[]
  coordinates: { lat: number; lng: number }
  distance: string
  verified: boolean
}

const wasteBanks: WasteBank[] = [
  {
    id: 1,
    name: "Bank Sampah Hijau Lestari",
    address: "Jl. Merdeka No. 123, Surakarta",
    city: "Surakarta",
    phone: "0271-123456",
    hours: "08:00 - 16:00",
    rating: 4.8,
    types: ["Plastik", "Kertas", "Logam", "Kaca"],
    coordinates: { lat: -7.5665, lng: 110.8167 },
    distance: "1.2 km",
    verified: true,
  },
  {
    id: 2,
    name: "Bank Sampah Bersih Sejahtera",
    address: "Jl. Diponegoro No. 45, Surakarta",
    city: "Surakarta",
    phone: "0271-789012",
    hours: "07:00 - 15:00",
    rating: 4.6,
    types: ["Plastik", "Kertas", "Elektronik"],
    coordinates: { lat: -7.5755, lng: 110.8244 },
    distance: "2.1 km",
    verified: true,
  },
  {
    id: 3,
    name: "Bank Sampah Mandiri Jaya",
    address: "Jl. Ahmad Yani No. 67, Surakarta",
    city: "Surakarta",
    phone: "0271-345678",
    hours: "08:30 - 17:00",
    rating: 4.4,
    types: ["Plastik", "Kertas", "Logam"],
    coordinates: { lat: -7.5589, lng: 110.8342 },
    distance: "3.5 km",
    verified: false,
  },
  {
    id: 4,
    name: "Bank Sampah Eco Green",
    address: "Jl. Slamet Riyadi No. 89, Surakarta",
    city: "Surakarta",
    phone: "0271-901234",
    hours: "09:00 - 16:30",
    rating: 4.7,
    types: ["Plastik", "Kertas", "Kaca", "Elektronik"],
    coordinates: { lat: -7.5612, lng: 110.8089 },
    distance: "4.2 km",
    verified: true,
  },
]

const wasteTypes = ["Semua", "Plastik", "Kertas", "Logam", "Kaca", "Elektronik"]

export default function InteractiveMap() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("Semua")
  const [selectedBank, setSelectedBank] = useState<WasteBank | null>(null)
  const [showMap, setShowMap] = useState(false)

  const filteredBanks = wasteBanks.filter((bank) => {
    const matchesSearch =
      bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bank.address.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "Semua" || bank.types.includes(selectedType)
    return matchesSearch && matchesType
  })

  const getTypeColor = (type: string) => {
    const colors = {
      Plastik: "bg-red-100 text-red-700 border-red-200",
      Kertas: "bg-blue-100 text-blue-700 border-blue-200",
      Logam: "bg-gray-100 text-gray-700 border-gray-200",
      Kaca: "bg-green-100 text-green-700 border-green-200",
      Elektronik: "bg-purple-100 text-purple-700 border-purple-200",
    }
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-200"
  }

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5 text-yellow-600 animate-pulse" />
            <span className="text-yellow-700 font-medium text-sm">Interactive Map</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Peta <span className="text-yellow-600">Bank Sampah</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Temukan bank sampah terdekat di sekitarmu! Jual sampahmu dan dapatkan keuntungan sambil menjaga lingkungan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Search & Filter */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari bank sampah..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={() => setShowMap(!showMap)}
                className="w-full bg-yellow-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                {showMap ? "Sembunyikan Peta" : "Tampilkan Peta"}
              </button>
            </div>

            {/* Filter */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter Jenis Sampah
              </h3>
              <div className="space-y-2">
                {wasteTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedType === type
                        ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-6 border border-yellow-200">
              <h3 className="font-bold text-gray-800 mb-4">Statistik Area</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Bank Sampah</span>
                  <span className="font-bold text-gray-800">{wasteBanks.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Terverifikasi</span>
                  <span className="font-bold text-gray-800">{wasteBanks.filter((bank) => bank.verified).length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rating Rata-rata</span>
                  <span className="font-bold text-gray-800">
                    {(wasteBanks.reduce((sum, bank) => sum + bank.rating, 0) / wasteBanks.length).toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Placeholder */}
            {showMap && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Map Placeholder */}
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Peta Interaktif</h3>
                    <p className="text-gray-600">Integrasi dengan Google Maps akan tersedia segera</p>
                  </div>

                  {/* Mock Map Pins */}
                  {filteredBanks.slice(0, 4).map((bank, index) => (
                    <div
                      key={bank.id}
                      className="absolute cursor-pointer transform hover:scale-110 transition-transform"
                      style={{
                        left: `${20 + index * 20}%`,
                        top: `${30 + (index % 2) * 30}%`,
                      }}
                      onClick={() => setSelectedBank(bank)}
                    >
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">Ditemukan {filteredBanks.length} bank sampah</h3>
                <span className="text-sm text-gray-600">Diurutkan berdasarkan jarak</span>
              </div>

              {filteredBanks.map((bank) => (
                <div
                  key={bank.id}
                  className={`bg-white rounded-2xl p-6 shadow-sm border-2 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-102 ${
                    selectedBank?.id === bank.id ? "border-yellow-300 bg-yellow-50" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedBank(selectedBank?.id === bank.id ? null : bank)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-bold text-gray-800">{bank.name}</h4>
                        {bank.verified && (
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 mb-2">{bank.address}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Navigation className="w-3 h-3" />
                          {bank.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          {bank.rating}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {bank.hours}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Waste Types */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {bank.types.map((type) => (
                      <span
                        key={type}
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(type)}`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Details */}
                  {selectedBank?.id === bank.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200 animate-in slide-in-from-top duration-300">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Kontak</h5>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Phone className="w-3 h-3" />
                              <span>{bank.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-3 h-3" />
                              <span>{bank.hours}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Aksi</h5>
                          <div className="flex gap-2">
                            <button className="flex-1 bg-yellow-500 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-yellow-600 transition-colors flex items-center justify-center gap-1">
                              <Navigation className="w-3 h-3" />
                              Rute
                            </button>
                            <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                              <ExternalLink className="w-3 h-3" />
                              Detail
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Bank Sampahmu Belum Terdaftar?</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
            Daftarkan bank sampah di daerahmu dan bantu lebih banyak orang untuk berkontribusi pada lingkungan!
          </p>
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-600 transition-all duration-300 hover:scale-105">
            Daftarkan Bank Sampah
          </button>
        </div>
      </div>
    </section>
  )
}
