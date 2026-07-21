function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[6px] text-amber-500 text-sm font-semibold mb-4">
            Featured Japanese Imports
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Quality Vehicles You Can Trust
          </h2>

          <p className="text-lg leading-8 text-slate-600">
            Explore a selection of carefully chosen Japanese vehicles
            that reflect our commitment to quality, reliability,
            and long-term value.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-10 text-center my-20">

          <div>
            <h3 className="text-5xl font-bold text-amber-500">
              40+
            </h3>

            <p className="mt-3 text-slate-700 font-medium">
              Sold Vehicles
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-amber-500">
              100%
            </h3>

            <p className="mt-3 text-slate-700 font-medium">
              Quality Checked
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-amber-500">
              Customer
            </h3>

            <p className="mt-3 text-slate-700 font-medium">
              Focused
            </p>
          </div>

        </div>

        {/* Images */}

        <div className="space-y-8">

          {/* Large Image */}

          <img
            src="/images/Hero.jpeg"
            alt="Japanese Vehicle"
            className="w-full h-[500px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
          />

          {/* Two Images */}

          <div className="grid md:grid-cols-2 gap-8">

            <img
              src="/images/hiluxred.jpeg"
              alt="Japanese Vehicle"
              className="w-full h-[450px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
            />

            <img
              src="/images/hiluxblack.jpeg"
              alt="Japanese Vehicle"
              className="w-full h-[450px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
            />

          </div>

          
          <div className="grid md:grid-cols-2 gap-8">

            <img
              src="/images/kdh.jpeg"
              alt="Japanese Vehicle"
              className="w-full h-[350px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
            />

            <img
              src="/images/sold.jpeg"
              alt="Japanese Vehicle"
              className="w-full h-[350px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
            />

          </div>
             <div className="grid md:grid-cols-2 gap-8">

            <img
              src="/images/every.jpeg"
              alt="Japanese Vehicle"
              className="w-full h-[750px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
            />

            <img
              src="/images/spacia.jpeg"
              alt="Japanese Vehicle"
              className="w-full h-[750px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
            />

          </div>
             <div className="grid md:grid-cols-2 gap-8">

            <img
              src="/images/spacia.jpeg"
              alt="Japanese Vehicle"
              className="w-full h-[350px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
            />

            <img
              src="/images/premio.jpeg"
              alt="Japanese Vehicle"
              className="w-full h-[350px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
            />

          </div>

          <div className="grid md:grid-cols-2 gap-8 justify-center">

            <img
              src="/images/prado.jpeg"
              alt="Japanese Vehicle"
              className="w-full h-[750px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
            />

          
          </div>


          

          

        </div>

      </div>
    </section>
  );
}

export default Gallery;