export default function About() {
  return (
    <section className="relative top-full w-full h-screen flex items-center justify-center">
      <img
        src="/paralax/tanah.png"
        alt="Ground"
        className="absolute -top-30 left-1/2 transform -translate-x-1/2 min-w-[1560px] object-cover z-[100]"
        style={{ maxWidth: "none" }}
      />
      <div className="text-center px-4 w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
          We are dedicated to providing the best experience for our users. Our
          team works tirelessly to create content that inspires and connects
          people.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          Learn More
        </button>
      </div>
    </section>
  );
}
