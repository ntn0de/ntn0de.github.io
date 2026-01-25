import { useRef } from "react";

const stats = [
  { number: "9+", label: "Years Experience", description: "Building for web" },
  { number: "40+", label: "Projects", description: "Delivered" },
];

export default function Stats() {
  return (
    <section className="w-full max-w-4xl mb-32 relative">
      {/* Decorative flowing lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path
            d="M 0,100 Q 300,50 600,100 T 1200,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-text"
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`text-center group opacity-0 animate-fade-up stagger-${index + 1}`}
          >
            {/* Decorative circle behind number */}
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 rounded-full border-2 border-text/10 group-hover:border-[#96BF48]/20 group-hover:scale-110 transition-all duration-500"></div>
              <div className="relative">
                <div className="text-5xl sm:text-6xl md:text-7xl font-light font-serif text-text leading-none group-hover:text-[#96BF48] transition-colors duration-500 p-4">
                  {stat.number}
                </div>
              </div>
            </div>
            
            <h3 className="text-base sm:text-lg font-light font-serif text-text mb-1 tracking-tight">
              {stat.label}
            </h3>
            <p className="text-xs sm:text-sm text-subtext0 font-normal">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

