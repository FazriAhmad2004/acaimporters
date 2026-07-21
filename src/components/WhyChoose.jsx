import {
  CarFront,
  BadgeCheck,
  Handshake,
  Users,
  Banknote,
  Star,
} from "lucide-react";

function WhyChoose() {
  const features = [
    {
      icon: <CarFront size={36} />,
      title: "Premium Quality",
      text: "Every imported vehicle is carefully inspected to ensure outstanding quality and reliability.",
    },
    {
      icon: <BadgeCheck size={36} />,
      title: "Carefully Selected",
      text: "We choose vehicles that meet our high standards for performance and long-term value.",
    },
    {
      icon: <Handshake size={36} />,
      title: "Transparent Service",
      text: "Honest communication and clear guidance throughout every step of the buying process.",
    },
    {
      icon: <Users size={36} />,
      title: "Professional Support",
      text: "Our experienced team is always ready to assist you before and after your purchase.",
    },
    {
      icon: <Banknote size={36} />,
      title: "Competitive Pricing",
      text: "Fair market prices without compromising on the quality of the vehicles we import.",
    },
    {
      icon: <Star size={36} />,
      title: "Trusted by Customers",
      text: "We build lasting relationships through dependable vehicles and exceptional service.",
    },
  ];

  return (
    <section id="why" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[6px] text-amber-500 text-sm font-semibold mb-4">
            Why ACA Importers
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Why Customers Choose ACA
          </h2>

          <p className="text-lg text-slate-600 leading-8">
            We are committed to delivering high-quality Japanese vehicles,
            backed by honesty, professionalism, and customer-focused service.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {feature.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;