import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 text-center">
      <nav className="flex items-center justify-center gap-0.5 p-1 bg-base/80 backdrop-blur-lg border border-text/10 rounded-full shadow-2xl pointer-events-auto overflow-x-auto scrollbar-hide max-w-full">
        <NavLink href="/" active={isHome}>Home</NavLink>
        
        {isHome ? (
          <>
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#projects">Projects</NavLink>
          </>
        ) : (
          <>
            <NavLink href="/#solutions">Solutions</NavLink>
            <NavLink href="/#projects">Projects</NavLink>
          </>
        )}
        
        <NavLink href="/blogs" active={router.pathname === "/blogs"}>Blogs</NavLink>
        
        <div className="hidden sm:block w-px h-4 bg-text/10 mx-2" />
        
        <a
          href="mailto:imsarojsubedi@gmail.com"
          className="whitespace-nowrap px-3 py-1 bg-text text-surface0 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-full hover:bg-[#96BF48] hover:text-text transition-all"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
function NavLink({ href, children, active }) {
  return (
    <Link
      href={href}
      className={`whitespace-nowrap px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all hover:text-text ${
        active ? "bg-text/5 text-text" : "text-subtext0 hover:bg-text/5"
      }`}
    >
      {children}
    </Link>
  );
}
