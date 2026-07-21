import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="uppercase tracking-[6px] text-amber-500 text-sm font-semibold mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let&apos;s Find Your Next Vehicle
          </h2>

          <p className="text-lg text-slate-600 leading-8">
            Whether you&apos;re searching for your next vehicle or simply
            looking for expert guidance, our team is ready to assist you.
            Get in touch to learn more about our available vehicles and
            services.
          </p>

        </div>


        {/* Contact Details */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Phone */}
          <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-300">

            <div className="w-14 h-14 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center mb-6">
              <Phone size={27} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Call Us
            </h3>

            <p className="text-slate-600">
              +94 77 744 2666
              </p>
              <p>
              +81 80 6202 1968
            </p>

          </div>


          {/* Email */}
          <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-300">

            <div className="w-14 h-14 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center mb-6">
              <Mail size={27} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Email Us
            </h3>

            <p className="text-slate-600 break-all">
              acaimporters@gmail.com
            </p>

          </div>


          {/* Location */}
          <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-300">

            <div className="w-14 h-14 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center mb-6">
              <MapPin size={27} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Visit Us
            </h3>

            <p className="text-slate-600 leading-7">
             630 Colombo RD,
              <br />
              Kadugannawa, Sri Lanka
            </p>

          </div>


          {/* Opening Hours */}
          <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-300">

            <div className="w-14 h-14 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center mb-6">
              <Clock size={27} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Opening Hours
            </h3>

            <p className="text-slate-600 leading-7">
              Mon - Sat
              <br />
              9:00 AM - 6:00 PM
            </p>

          </div>

        </div>


        {/* Bottom Brand Area */}
        <div className="mt-16 bg-slate-950 rounded-3xl px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <div>

            <p className="text-amber-400 uppercase tracking-[5px] text-xs font-semibold mb-3">
              ACA Importers
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Quality Vehicles. Trusted Service.
            </h3>

          </div>

          <p className="text-slate-300 leading-7 max-w-md md:text-right">
            Visit us or get in touch with our team to learn more about
            our Japanese imported vehicles and services.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;