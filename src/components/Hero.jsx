function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/Hero.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">

        <p className="uppercase tracking-[6px] text-amber-400 text-l mb-6 ">
          ACA IMPORTERS (pvt) LTD
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
          Your Trusted
          <br />
          Destination for
          <br />
          Quality Vehicles
        </h1>

        <p className="mt-8 text-lg md:text-xl leading-8 text-gray-200 max-w-2xl text-xl leading-9 mx-auto">
         From carefully imported Japanese vehicles to premium locally owned cars,
         we help you find the right vehicle with confidence.
        </p>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white text-3xl">
        ↓
      </div>
    </section>
  );
}

export default Hero;