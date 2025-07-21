export default function Paralax() {
  return (
    <section className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="relative w-full h-screen overflow-x-hidden overflow-y-hidden z-0">
        {/* Awan */}
        <img
          src="/paralax/awan.png"
          alt="Clouds"
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 min-w-[1560px] object-cover z-10"
        />

        {/* Pohon tengah */}
        <img
          src="/paralax/pohontengah.png"
          alt="Middle Tree"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1100px] object-cover z-20"
        />

        {/* Pohon kanan kiri */}
        <img
          src="/paralax/pohonkanankiri.png"
          alt="Side Trees"
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 min-w-[1800px] object-cover z-30"
        />

        {/* Sampah kanan kiri */}
        <img
          src="/paralax/sampahkanankiri.png"
          alt="Waste Left Right"
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[900px] object-cover z-40"
        />

        {/* Tengah */}
        <img
          src="/paralax/tengah.png"
          alt="Center Element"
          className="absolute -bottom-30 left-1/2 transform -translate-x-1/2 min-w-[450px] object-cover z-50"
        />

        {/* Truk tong */}
        <img
          src="/paralax/truktong.png"
          alt="Truck and Bins"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 min-w-[1560px] object-cover z-60"
        />
      </div>
    </section>
  );
}
