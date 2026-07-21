import {
  ShieldCheck,
  Handshake,
  BadgeCheck,
} from "lucide-react";

function Commitment() {
  return (
    <section
      id="commitment"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[6px] text-amber-400 text-sm font-semibold mb-4">
            Our Commitment
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Built on Trust & Quality
          </h2>

          <p className="text-slate-300 leading-8 text-lg">
            Every vehicle we import reflects our commitment to
            quality, transparency, and long-term customer
            satisfaction.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* Card 1 */}

          <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800 hover:border-amber-400
hover:-translate-y-2
transition-all
duration-300 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center mb-8">

              <ShieldCheck size={34} />

            </div>

            <h3 className="text-2xl font-bold mb-4">
              Quality You Can Trust
            </h3>

            <p className="text-slate-300 leading-7">
              Every vehicle is selected with attention to
              condition, reliability, and long-term value.
            </p>

          </div>

          {/* Card 2 */}

          <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800 hover:border-amber-400
hover:-translate-y-2
transition-all
duration-300 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center mb-8">

              <Handshake size={34} />

            </div>

            <h3 className="text-2xl font-bold mb-4">
              Transparent Service
            </h3>

            <p className="text-slate-300 leading-7">
              Honest advice, clear communication, and complete
              transparency throughout your buying journey.
            </p>

          </div>

          {/* Card 3 */}

          <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800 hover:border-amber-400
hover:-translate-y-2
transition-all
duration-300 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center mb-8">

              <BadgeCheck size={34} />

            </div>

            <h3 className="text-2xl font-bold mb-4">
              Customer Satisfaction
            </h3>

            <p className="text-slate-300 leading-7">
              Building long-term relationships through dependable
              vehicles and professional customer service.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Commitment;