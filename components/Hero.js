import Image from "next/image";
import { SiGithub, SiLinkedin, SiShopify } from "react-icons/si";
import { MdEmail, MdArrowForward } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full max-w-4xl mb-32 relative">
      {/* Structural background elements - subtle and modern */}
      <div className="absolute -left-20 top-0 w-64 h-64 bg-deep-saffron/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-0 w-64 h-64 bg-himalayan-blue/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Portrait - Now visible on mobile and ordered first */}
        <div className="opacity-0 animate-fade-in stagger-3 relative group transition-all duration-1000 ease-out order-first lg:order-last">
          {/* Geometrical frames around portrait */}
          <div className="absolute -inset-4 sm:-inset-6 border border-[#96BF48]/10 rounded-[1.5rem] sm:rounded-[2rem] transform rotate-6 group-hover:rotate-2 transition-transform duration-1000" />
          <div className="absolute -inset-4 sm:-inset-6 border border-text/5 rounded-[1.5rem] sm:rounded-[2rem] transform -rotate-6 group-hover:-rotate-2 transition-transform duration-1000" />
          
          <div className="relative w-48 h-60 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-[1.2rem] sm:rounded-[1.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-text/10 z-10 bg-surface0 mx-auto">
            <Image
              src="/images/portrait.png"
              alt="Er. Saroj Subedi"
              width={300}
              height={400}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent opacity-60" />
          </div>

          {/* Social icons - centered below portrait on mobile, floating on desktop */}
          <div className="opacity-0 animate-fade-in stagger-5 flex lg:flex-col gap-4 sm:gap-5 p-3.5 bg-base/80 backdrop-blur-md border border-text/10 rounded-full shadow-2xl z-20 mt-8 lg:mt-0 lg:absolute lg:-right-12 lg:top-1/2 lg:-translate-y-1/2 mx-auto w-max">
            {[
              { icon: SiGithub, href: "https://github.com/ntn0de", label: "GitHub" },
              { icon: SiLinkedin, href: "https://www.linkedin.com/in/sarojsubedi/", label: "LinkedIn" },
              { icon: FaTwitter, href: "https://twitter.com/ntn0de", label: "Twitter" },
              { icon: MdEmail, href: "mailto:imsarojsubedi@gmail.com", label: "Email" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-subtext0 hover:text-[#96BF48] hover:scale-125 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Text Content - Left Aligned for a more professional 'expert' look */}
        <div className="w-full flex-1 text-center lg:text-left space-y-8">
          <div className="opacity-0 animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface0 border border-[#96BF48]/20 text-[10px] font-bold tracking-widest uppercase text-subtext0 shadow-sm mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#96BF48] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#96BF48]"></span>
            </span>
            Available for Select Projects
          </div>

          <div className="space-y-4">
            <p className="opacity-0 animate-fade-in stagger-1 text-lg text-subtext0 font-medium font-serif italic">
              Er. Saroj Subedi
            </p>

            <h1 className="opacity-0 animate-fade-up stagger-2 text-4xl sm:text-6xl md:text-7xl font-light font-serif text-text leading-[1.2] lg:leading-[1.1] tracking-tight">
              Engineering <span className="text-[#96BF48] relative">Shopify</span> Growth Through <span className="italic">Custom Apps</span> & Architecture.
            </h1>
          </div>

          <p className="opacity-0 animate-fade-up stagger-3 text-lg sm:text-xl text-subtext0 max-w-2xl leading-relaxed font-normal mx-auto lg:mx-0">
            Helping high-volume merchants overcome technical limits. From architecting <span className="text-text font-medium underline decoration-[#96BF48]/30">Shopify Functions</span> and <span className="text-text font-medium underline decoration-[#96BF48]/30">Checkout Extensibility</span> to deep <span className="text-text font-medium underline decoration-[#96BF48]/30">ERP integrations</span>, I build robust systems that convert browsers into loyal customers.
          </p>

          <div className="opacity-0 animate-fade-up stagger-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="mailto:imsarojsubedi@gmail.com"
              className="w-full sm:w-auto px-10 py-4 bg-text text-base hover:bg-subtext1 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm font-bold tracking-wide rounded-xl flex items-center justify-center gap-2 group shadow-2xl"
            >
              Start Your Project
              <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#projects"
              className="w-full sm:w-auto px-10 py-4 border border-text/10 text-text hover:border-[#96BF48]/30 hover:bg-surface0 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm font-bold tracking-wide rounded-xl flex items-center justify-center gap-2"
            >
              Explore Projects
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="opacity-0 animate-fade-in stagger-5 flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-surface0 border border-text/5">
                <SiShopify className="w-6 h-6 text-[#96BF48]" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-text uppercase tracking-tighter">Published Developer</p>
                <p className="text-[10px] text-subtext0">Shopify App Store</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-surface0 border border-text/5">
                <div className="text-[#96BF48] font-bold text-lg leading-none">700K+</div>
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-text uppercase tracking-tighter">Monthly Users</p>
                <p className="text-[10px] text-subtext0">Through Scaling Brands</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern architectural patterns instead of mountains */}
      <div className="absolute -bottom-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-text/10 to-transparent" />
    </section>
  );
}

