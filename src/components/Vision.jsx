import { Eye } from "lucide-react";

function Vision() {
  return (
    <section
      id="vision"
      className="relative min-h-[650px] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/Hero.jpeg')",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div className="max-w-3xl">

          {/* Icon */}
          <div className="w-16 h-16 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center mb-8">
            <Eye size={32} />
          </div>

          {/* Small Heading */}
          <p className="uppercase tracking-[6px] text-amber-400 text-sm font-semibold mb-5">
            Our Vision
          </p>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
            Driving Trust
            <br />
            Forward.
          </h2>

          {/* Gold Line */}
          <div className="w-20 h-1 bg-amber-400 mb-8"></div>

          {/* Vision Text */}
          <p className="text-lg md:text-xl text-slate-200 leading-9 max-w-2xl">
            To become one of Sri Lanka&apos;s most trusted vehicle importers
            by delivering quality vehicles, exceptional service, and lasting
            customer relationships built on honesty and reliability.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Vision;