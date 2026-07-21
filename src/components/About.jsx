function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div>
            <img
src={`${import.meta.env.BASE_URL}images/test1.jpeg`}
                alt="ACA Importers"
              className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div>

            <p className="uppercase tracking-[6px] text-amber-500 text-sm font-semibold mb-3">
              About Us
            </p>

            <h2 className="text-5xl font-bold text-slate-900 mb-8">
              Who We Are
            </h2>

            <p className="text-slate-600 leading-8 text-lg mb-6">
              ACA Importers is dedicated to providing high-quality Japanese & 
              local vehicles to customers looking for dependable,
              well-maintained and competitively priced automobiles.
            </p>

            <p className="text-slate-600 leading-8 text-lg mb-10">
              Our commitment is to make the vehicle buying experience
              straightforward, honest and stress-free. Every vehicle is
              carefully selected to ensure quality, reliability and value.
            </p>

            <div className="grid grid-cols-3 gap-5">

              <div className="bg-slate-50 rounded-2xl p-6 text-center shadow-sm">
                <h3 className="font-bold text-2xl text-slate-900">Quality</h3>
                <p className="text-slate-500 mt-2 text-sm">
                  Premium Vehicles
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 text-center shadow-sm">
                <h3 className="font-bold text-2xl text-slate-900">
                  Honest
                </h3>
                <p className="text-slate-500 mt-2 text-sm">
                  Transparent Service
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 text-center shadow-sm">
                <h3 className="font-bold text-2xl text-slate-900">
                  Trusted
                </h3>
                <p className="text-slate-500 mt-2 text-sm">
                  Customer Focused
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;