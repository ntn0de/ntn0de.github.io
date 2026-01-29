import { 
  SiReact, 
  SiLaravel, 
  SiWordpress, 
  SiPython, 
  SiNodedotjs, 
  SiShopify, 
  SiCloudflare, 
  SiAmazonwebservices,
  SiGithubactions,
  SiFlutter,
  SiSwift,
  SiVuedotjs,
  SiRemix,
} from "react-icons/si";

const stats = [
  { number: "9+", label: "Years Experience", description: "Building for web" },
  { number: "40+", label: "Projects", description: "Delivered" },
];

const techStack = [
  { icon: SiShopify, name: "Shopify" },
  { icon: SiReact, name: "React" },
  { icon: SiRemix, name: "RemixJS" },
  { icon: SiVuedotjs, name: "Vue.js" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiLaravel, name: "Laravel" },
  { icon: SiPython, name: "Python" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: SiAmazonwebservices, name: "AWS" },
  { icon: SiCloudflare, name: "Cloudflare" },
  { icon: SiWordpress, name: "WordPress" },
  { icon: SiGithubactions, name: "CI/CD" },
  { icon: SiSwift, name: "Swift" }
];

export default function Stats() {
  return (
    <section className="w-full max-w-4xl mb-32 relative">
      {/* Full-width wavy line behind everything */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06] hidden lg:block">
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

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
        {/* Left: 9+ Years (circle) */}
        <div className="flex-shrink-0 text-center opacity-0 animate-fade-up stagger-1 order-2 lg:order-1">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 rounded-full border-2 border-text/10 group-hover:border-[#96BF48]/20 transition-all duration-500" />
            <div className="text-4xl sm:text-5xl md:text-6xl font-light font-serif text-text leading-none p-4">
              {stats[0].number}
            </div>
          </div>
          <h3 className="text-sm sm:text-base font-light font-serif text-text mb-1 tracking-tight">
            {stats[0].label}
          </h3>
          <p className="text-[10px] sm:text-xs text-subtext0 font-normal">
            {stats[0].description}
          </p>
        </div>

        {/* Center: 40+ Delivered (oval) */}
        <div className="flex-shrink-0 text-center opacity-0 animate-fade-up stagger-2 order-1 lg:order-2 relative">
          <div className="relative inline-block mb-4">
            <div className="absolute -inset-1 rounded-2xl border-2 border-text/10 group-hover:border-[#96BF48]/30 transition-all duration-500" />
            <div className="relative text-4xl sm:text-5xl md:text-6xl font-light font-serif text-text leading-none px-6 py-4">
              {stats[1].number}
            </div>
          </div>
          <h3 className="text-sm sm:text-base font-light font-serif text-text mb-1 tracking-tight">
            {stats[1].label}
          </h3>
          <p className="text-[10px] sm:text-xs text-subtext0 font-normal">
            {stats[1].description}
          </p>
        </div>

        {/* Right: Tech stack marquee */}
        <div className="flex-1 w-full min-w-0 opacity-0 animate-fade-in stagger-3 order-3 relative overflow-hidden">
          <p className="text-[10px] sm:text-xs  uppercase tracking-widest mb-3 text-center lg:text-left font-medium text-[#96BF48]">
            Built with
          </p>
          <div className="w-full overflow-hidden relative h-16 flex items-center">
            <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-base to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-base to-transparent pointer-events-none" />
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              <div className="flex items-center gap-8 sm:gap-12 px-4">
                {techStack.map((tech, i) => (
                  <div key={`a-${i}`} className="flex flex-col items-center gap-1 group min-w-max cursor-default">
                    <tech.icon className="w-8 h-8 text-subtext0/40 group-hover:text-[#96BF48] group-hover:scale-110 transition-all duration-300" aria-hidden />
                    <span className="text-[10px] text-subtext0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" title={tech.name}>{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-8 sm:gap-12 px-4">
                {techStack.map((tech, i) => (
                  <div key={`b-${i}`} className="flex flex-col items-center gap-1 group min-w-max cursor-default">
                    <tech.icon className="w-8 h-8 text-subtext0/40 group-hover:text-[#96BF48] group-hover:scale-110 transition-all duration-300" aria-hidden />
                    <span className="text-[10px] text-subtext0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" title={tech.name}>{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-8 sm:gap-12 px-4">
                {techStack.map((tech, i) => (
                  <div key={`c-${i}`} className="flex flex-col items-center gap-1 group min-w-max cursor-default">
                    <tech.icon className="w-8 h-8 text-subtext0/40 group-hover:text-[#96BF48] group-hover:scale-110 transition-all duration-300" aria-hidden />
                    <span className="text-[10px] text-subtext0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" title={tech.name}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
