import { useRef, useState } from "react";
import {
  SiShopify,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiVuedotjs,
  SiPython,
  SiTailwindcss,
  SiLaravel,
  SiAmazonwebservices,
  SiWordpress,
  SiWoo,
  SiSpring,
  SiMysql,
  SiPhp,
  SiRemix,
  SiCloudflare,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { MdArrowForward, MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { GiCargoCrane } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
// import { GrDocumentPerformance } from "react-icons/gr";
import { CgPerformance } from "react-icons/cg";

const workExperiences = [
  {
    company: "Plantura GmbH",
    location: "Munich, Germany",
    position: "Software Developer (Web)",
    period: "03/2023 - Now",
    skills: ["Shopify", "React", "Node.js", "TypeScript", "Python", "RemixJS", "Cloudflare"],
    description: "Developed and maintained the e-commerce store (700k+ monthly users) on Shopify and Alpine JS. Built custom apps: Checkout Extensions, Wishlist, and Order Cancellation using React and Node.js. Developed APIs for Plantura Mobile App (1M+ downloads) and ERP (Odoo). Engineered a PIM script with Node.js, SQL, and Python; implemented GTM server-side tagging for 50+ events; unified header/footer across Plantura Magazine (WordPress) and Shop. Built GitHub Actions for theme deployment across 7 environments and Playwright e2e framework (~150 tests, 5 browsers, 3 locales). Contribute to technical interviews, code reviews, and CI/CD pipelines."
  },
  {
    company: "Performance PODs",
    location: "Sydney, NSW",
    position: "Developer Team Lead",
    period: "04/2020 - 11/2022",
    skills: ["Laravel", "React", "Node.js", "AWS", "WordPress", "WooCommerce", "Tailwind CSS"],
    description: "Steered development of high-impact projects: in-house Assets Management System (Laravel, React, AWS S3/Elastic Beanstalk) and vehicle classifier Shopify App. Converted Figma designs into SPAs with React and Node. Integrated third-party APIs and custom WordPress/WooCommerce plugins. Mentored junior developers, led code reviews and design decisions, and collaborated with product and cross-functional distributed teams. Fostered inclusive team leadership, meetings, and learning opportunities."
  },
  {
    company: "B Technology",
    location: "Gairidhara, Kathmandu",
    position: "Software Development Consultant",
    period: "05/2021 - 11/2021",
    skills: ["Java", "Spring Boot", "MySQL"],
    description: "Gathered business requirements and developed an Agriculture Trade e-commerce application using Java, Spring Boot, and MySQL. Optimized with caching; integrated third-party logistics for real-time order tracking. Designed conversion optimization and UX best practices to increase conversion rate."
  },
  {
    company: "Genesis Web Technology Pvt. Ltd",
    location: "Sankhamul, Kathmandu",
    position: "Backend Developer",
    period: "05/2019 - 04/2020",
    skills: ["PHP", "Laravel", "Vue.js", "WordPress", "MySQL"],
    description: "Converted legacy PHP 5 application to PHP 7 and integrated travels booking system with WordPress via API. Delivered Job Portal with News Portal (Laravel, Vue.js). Authored custom themes for business, news, travel, and trekking; built booking management plugins and technical SEO that raised organic traffic and rankings."
  },
  {
    company: "EIS Nepal",
    location: "Gyaneswor, Kathmandu",
    position: "Tech and QA Lead",
    period: "06/2018 - 02/2019",
    skills: ["PHP", "MySQL"],
    description: "Planned and implemented a school management system from requirements. Conducted feasibility studies that reduced unnecessary features and costs. Maintained QA for consistent UI/UX across all features and functionalities."
  },
  {
    company: "Phi L'Agence Pvt. Ltd",
    location: "Chakupat, Lalitpur",
    position: "Web Developer",
    period: "12/2016 - 06/2018",
    skills: ["WordPress", "WooCommerce", "Laravel", "PHP", "MySQL"],
    description: "Assisted lead developer in developing and deploying website applications on time. Created an online store for electronic items with WordPress and WooCommerce. Delivered 10+ small-scale web projects and one large-scale Laravel application."
  }
];

const skillIcons = {
  "Shopify": SiShopify,
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "TypeScript": SiTypescript,
  "Python": SiPython,
  "Tailwind CSS": SiTailwindcss,
  "Laravel": SiLaravel,
  "AWS": SiAmazonwebservices,
  "WordPress": SiWordpress,
  "WooCommerce": SiWoo,
  "Java": FaJava,
  "Spring Boot": SiSpring,
  "MySQL": SiMysql,
  "PHP": SiPhp,
  "Vue.js": SiVuedotjs,
  "RemixJS": SiRemix,
  "Cloudflare": SiCloudflare,
};

const skillColors = {
  "Shopify": "#96BF48",
  "React": "#61DAFB",
  "Node.js": "#339933",
  "TypeScript": "#3178C6",
  "Python": "#3776AB",
  "Tailwind CSS": "#06B6D4",
  "Laravel": "#FF2D20",
  "AWS": "#FF9900",
  "WordPress": "#21759B",
  "WooCommerce": "#96588A",
  "Java": "#ED8B00",
  "Spring Boot": "#6DB33F",
  "MySQL": "#4479A1",
  "PHP": "#777BB4",
  "Vue.js": "#4FC08D",
};

const education = [
  {
    institution: "Himalaya College of Engineering",
    location: "Lalitpur, Nepal",
    degree: "B.E. Computer Engineering",
    year: "2018",
    achievements: ["Registered Computer Engineer (Nepal Engineering Council)"]
  }
];

const projects = [
  {
    name: "Order Undo",
    type: "Shopify App",
    description: "A conversion-recovery tool that allows customers to edit or cancel orders post-purchase. Dramatically reduces support overhead and improves customer retention.",
    link: "https://apps.shopify.com/order-undo",
    skills: ["Shopify", "React", "RemixJS", "Customer Accounts" , "Orders"],
    status: "Published"
  },
  {
    name: "Mac Patro",
    type: "Native Productivity",
    description: "High-performance native macOS calendar integration. Focused on seamless UX and system-level performance. Used by thousands of daily active users.",
    link: "https://github.com/ntn0de/mac-patro-native",
    skills: ["Swift", "macOS", "AppKit"],
    status: "Open Source"
  },
  {
    name: "Blink Reminder",
    type: "Native Productivity",
    description: "A minimal native macOS menu bar app that reduces digital eye strain by reminding you to blink and look away (20-20-20 rule). Customizable intervals, smart overlay or notification mode, and available via Homebrew.",
    link: "https://github.com/ntn0de/blink-reminder",
    skills: ["Swift", "macOS", "AppKit"],
    status: "Open Source"
  }
];

const services = [
  {
    title: "Product Engineering",
    description: "Building production-grade web applications and SaaS platforms that solve complex business challenges. From rapid prototyping to scalable deployments.",
    capabilities: ["SaaS Development", "Custom Shopify Apps", "Internal Business Tools", "API Design & Dev"],
    icon: <CgWebsite/>
  },
  {
    title: "System Architecture",
    description: "Designing resilient digital ecosystems for high-volume operations. Specialized in bridging disparate systems into a unified, high-performance workflow.",
    capabilities: ["ERP/CRM Integrations", "Middleware Engineering", "Cloud Infrastructure (CF/AWS)", "Legacy Modernization"],
    icon: <GiCargoCrane/>
  },
  {
    title: "Performance Engineering",
    description: "Optimizing the entire technical stack for speed and conversion. Reducing friction points to turn technical metrics into commercial growth.",
    capabilities: ["Core Web Vitals", "Database Optimization", "Headless Architecture", "Checkout Optimization"],
    icon: <CgPerformance/>
  },
  {
    title: "Lifecycle Automation",
    description: "Scaling revenue through intelligent automation. Building data-driven EDM systems and custom workflows that nurture leads and drive repeat sales.",
    capabilities: ["EDM Strategy (Klaviyo)", "Business Process Automation", "CRM Synchronization", "Lifecycle Flow Design"],
    icon: <MdOutlineAutoAwesomeMotion/>
  }
];

export default function Portfolio() {
  return (
    <div className="w-full max-w-4xl space-y-40">
      {/* Solutions & Expertise Section */}
      <div id="solutions" className="relative opacity-0 animate-fade-up">
        <div className="mb-16">
          <h3 className="text-sm font-bold text-[#96BF48] uppercase tracking-[0.3em] mb-4">What I Do</h3>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light font-serif text-text tracking-tight">
            Specialized <span className="italic">Solutions</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 border border-text/10 bg-surface0 rounded-3xl hover:border-[#96BF48]/30 transition-all group opacity-0 animate-fade-up stagger-${index + 1} flex flex-col h-full hover:shadow-xl`}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left inline-block text-[#96BF48]">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-medium mb-4 group-hover:text-[#96BF48] transition-colors">
                {service.title}
              </h3>
              <p className="text-text text-base leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-text/10">
                <p className="text-xs font-bold text-text uppercase tracking-widest mb-4">Core Capabilities</p>
                <ul className="space-y-3">
                  {service.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-text">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#96BF48]" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="relative opacity-0 animate-fade-up stagger-2">
        <div className="mb-16">
          <h3 className="text-sm font-bold text-[#96BF48] uppercase tracking-[0.3em] mb-4">Portfolio</h3>
          <h2 className="text-4xl sm:text-5xl font-light font-serif text-text tracking-tight">
            Selected <span className="italic">Projects</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              <div className="lg:col-span-12 p-6 sm:p-12 border border-text/10 rounded-3xl bg-surface0 hover:border-[#96BF48]/20 transition-all hover:shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                  <div>
                    <p className="text-[#96BF48] text-xs font-bold uppercase tracking-widest mb-2">{project.type}</p>
                    <h3 className="text-3xl sm:text-4xl font-serif font-light">{project.name}</h3>
                  </div>
                  <span className="px-4 py-2 border border-overlay0/20 rounded-full text-xs font-medium bg-base">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-lg text-text text-base mb-8 max-w-2xl leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-base border border-text/5 rounded text-xs text-subtext1">
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-text hover:text-[#96BF48] transition-colors group/link"
                >
                  Try it now
                  <MdArrowForward className="w-5 h-5 translate-y-px group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Commercial Experience Section */}
      <div className="relative opacity-0 animate-fade-up stagger-3">
        <div className="mb-16">
          <h3 className="text-sm font-bold text-[#96BF48] uppercase tracking-[0.3em] mb-4">Track Record</h3>
          <h2 className="text-4xl sm:text-5xl font-light font-serif text-text tracking-tight">
            Professional <span className="italic">Experience</span>.
          </h2>
        </div>

        <div className="space-y-8">
          {workExperiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-4 lg:gap-12 p-6 sm:p-8 border-b border-text/10 last:border-0 hover:bg-surface0/50 transition-colors group"
            >
              <div className="lg:w-1/4">
                <p className="text-sm font-medium text-text">{exp.period}</p>
                <p className="text-xs text-subtext0">{exp.location}</p>
              </div>
              <div className="lg:w-3/4">
                <h3 className="text-xl font-serif font-medium mb-1 group-hover:text-[#96BF48] transition-colors">{exp.position}</h3>
                <p className="text-base text-text mb-4">{exp.company}</p>
                <p className="text-sm text-subtext0 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Foundation Section - Compact */}
      <div className="pt-20 border-t border-text/10 flex flex-col sm:flex-row justify-between items-start gap-12 opacity-0 animate-fade-in stagger-4">
        <div className="sm:w-1/3">
          <h2 className="text-sm font-bold text-subtext0 uppercase tracking-[0.3em] mb-4">Academic Foundation</h2>
        </div>
        <div className="sm:w-2/3">
          {education.map((edu, i) => (
            <div key={i}>
              <h3 className="text-lg font-serif font-medium">{edu.degree}</h3>
              <p className="text-sm text-text mb-2">{edu.institution}, {edu.year}</p>
              {edu.achievements.map((ach, j) => (
                <p key={j} className="text-xs text-[#96BF48] font-medium italic">{ach}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center py-20 bg-text text-base rounded-[3rem] px-8 opacity-0 animate-fade-up stagger-5">
        <h2 className="text-3xl sm:text-4xl font-serif font-light mb-8">Ready to scale your Shopify store?</h2>
        <a
          href="mailto:imsarojsubedi@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#96BF48] text-base font-bold rounded-xl hover:bg-[#86ab40] transition-all hover:scale-110 active:scale-95 shadow-xl"
        >
          Let&apos;s Build Together
          <MdArrowForward className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

