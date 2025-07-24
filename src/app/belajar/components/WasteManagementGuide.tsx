import { Recycle, ArrowRight, Lightbulb } from "lucide-react";

export default function WasteManagementGuide() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
            <Recycle className="w-5 h-5 text-yellow-600 animate-pulse" />
            <span className="text-yellow-700 font-medium text-sm">
              Panduan Pengelolaan
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Apa yang Harus Dilakukan dengan{" "}
            <span className="text-yellow-600">Sampah Kita?</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Setelah memahami jenis-jenis sampah, mari pelajari langkah-langkah
            pengelolaan yang tepat untuk setiap kategori.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Sampah Organik */}
          <div className="group bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-3xl">🍃</span>
            </div>
            <h3 className="text-xl font-bold text-yellow-800 mb-4">
              Sampah Organik
            </h3>
            <ul className="text-yellow-700 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Kompos di rumah dengan komposter</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Beri makan hewan ternak (sisa sayuran)</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Buat pupuk cair organik</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Masukkan ke tempat sampah organik</span>
              </li>
            </ul>
          </div>

          {/* Sampah Anorganik */}
          <div className="group bg-blue-50 border-2 border-blue-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-3xl">♻️</span>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Sampah Anorganik
            </h3>
            <ul className="text-blue-700 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Pisahkan plastik, kertas, logam</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Jual ke pengepul atau bank sampah</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Reuse untuk kebutuhan lain</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Recycle menjadi produk baru</span>
              </li>
            </ul>
          </div>

          {/* Sampah B3 */}
          <div className="group bg-red-50 border-2 border-red-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-3xl">⚠️</span>
            </div>
            <h3 className="text-xl font-bold text-red-800 mb-4">Sampah B3</h3>
            <ul className="text-red-700 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Kumpulkan di wadah khusus</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Serahkan ke fasilitas khusus B3</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Jangan campur dengan sampah lain</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Hubungi Dinas Lingkungan Hidup</span>
              </li>
            </ul>
          </div>

          {/* Sampah Elektronik */}
          <div className="group bg-purple-50 border-2 border-purple-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-3xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-purple-800 mb-4">
              Sampah Elektronik
            </h3>
            <ul className="text-purple-700 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Serahkan ke toko elektronik</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Program trade-in dari produsen</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>E-waste collection center</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Donasi jika masih berfungsi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-100 border border-yellow-200 rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Tips Penting!
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6 text-center">
            Mulai dari yang kecil, konsisten lebih penting daripada sempurna!
            Setiap langkah kecil yang kamu lakukan akan memberikan dampak besar
            untuk lingkungan.
          </p>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition-all duration-300 cursor-pointer group">
              <span>Mulai Kelola Sampahmu Sekarang!</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-sm">🌱</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
