import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
? "bg-white/95 backdrop-blur-md shadow-lg"
: "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between ">
       <h1
  className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
    scrolled ? "text-slate-900" : "text-white"
  }`}
>
  ACA Importers
</h1>

        <nav>
         <ul
  className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${
    scrolled ? "text-slate-700" : "text-white"
  }`}
>
  <li>
    <a href="#home" className="hover:text-amber-400 transition">
      Home
    </a>
  </li>

  <li>
    <a href="#about" className="hover:text-amber-400 transition">
      About
    </a>
  </li>

  <li>
    <a href="#commitment" className="hover:text-amber-400 transition">
      Commitment
    </a>
  </li>

  <li>
    <a href="#gallery" className="hover:text-amber-400 transition">
      Vehicles
    </a>
  </li>

  <li>
    <a href="#why" className="hover:text-amber-400 transition">
      Why ACA
    </a>
  </li>

  <li>
    <a href="#vision" className="hover:text-amber-400 transition">
      Vision
    </a>
  </li>

  <li>
    <a href="#contact" className="hover:text-amber-400 transition">
      Contact
    </a>
  </li>
</ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;