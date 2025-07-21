import Paralax from "./Paralax";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-t from-emerald-500/50  to-white overflow-hidden">
      <Paralax />
      <header className="-mt-40 z-[99] text-center px-4 w-full max-w-4xl ">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
          Sampah Aja Diedukasi,
          <span className="text-emerald-600"> Kamu Kapan?</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
          Belajar memilah, mengolah, dan mengurangi sampah dengan cara yang
          mudah dan menyenangkan.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </button>
          <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </header>
    </section>
  );
}
