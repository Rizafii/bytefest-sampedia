import { useEffect, useRef } from "react";

export default function Paralax() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const scrolled = window.pageYOffset;
      const threshold = 300; // Parallax dimulai setelah scroll 700px

      const parallaxElements =
        parallaxRef.current.querySelectorAll("[data-speed]");

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed") || "0");

        if (scrolled < threshold) {
          // Sebelum threshold, reset posisi ke posisi awal
          (element as HTMLElement).style.transform = `translate(-50%, 0px)`;
        } else {
          // Setelah threshold, hitung offset berdasarkan scroll yang sudah melewati threshold
          const adjustedScroll = scrolled - threshold;
          const yPos = -(adjustedScroll * speed);
          (
            element as HTMLElement
          ).style.transform = `translate(-50%, ${yPos}px)`;
        }
      });
    };

    // Jalankan handleScroll sekali untuk set posisi awal
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="absolute top-0 left-0 w-full h-full overflow-hidden z-[30]">
      <div
        ref={parallaxRef}
        className="relative w-full h-[120vh] overflow-x-hidden overflow-y-hidden"
      >
        {/* Awan - paling lambat */}
        <img
          src="/paralax/awan.png"
          alt="Clouds"
          className="absolute -top-10 left-1/2 min-w-[1560px] object-cover z-[15] select-none pointer-events-none"
          data-speed="-1.2"
          draggable={false}
        />

        {/* Pohon tengah */}
        <img
          src="/paralax/pohontengah.png"
          alt="Middle Tree"
          className="absolute bottom-0 left-1/2 w-[1100px] object-cover z-20 select-none pointer-events-none"
          data-speed="-1"
          draggable={false}
        />

        {/* Pohon kanan kiri */}
        <img
          src="/paralax/pohonkanankiri.png"
          alt="Side Trees"
          className="absolute -bottom-20 left-1/2 min-w-[1800px] object-cover z-30 select-none pointer-events-none"
          data-speed="-0.8"
          draggable={false}
        />

        {/* Sampah kanan kiri */}
        <img
          src="/paralax/sampahkanankiri.png"
          alt="Waste Left Right"
          className="absolute -bottom-10 left-1/2 w-[900px] object-cover z-40 select-none pointer-events-none"
          data-speed="-0.6"
          draggable={false}
        />

        {/* Tengah */}
        <img
          src="/paralax/tengah.png"
          alt="Center Element"
          className="absolute -bottom-30 left-1/2 min-w-[450px] object-cover z-50 select-none pointer-events-none"
          data-speed="-0.4"
          draggable={false}
        />

        {/* Truk tong - paling cepat */}
        <img
          src="/paralax/truktong.png"
          alt="Truck and Bins"
          className="absolute bottom-0 left-1/2 min-w-[1560px] object-cover z-60 select-none pointer-events-none"
          data-speed="-0.2"
          draggable={false}
        />
      </div>
    </section>
  );
}
