import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between py-3 px-5 rounded-2xl border border-border/60 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-[0_8px_32px_-8px_hsl(160_30%_2%/0.6)]"
            : "bg-background/50 backdrop-blur-md shadow-[0_4px_24px_-12px_hsl(160_30%_2%/0.5)]"
        }`}
      >
        <a href="#home" className="font-[Space_Grotesk] text-xl font-bold">
          <span className="gradient-text">Yassine</span>
          <span className="text-foreground">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.fiverr.com/s/dD4E7q8"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all hover:scale-105"
        >
          Hire Me
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl border border-border/60 bg-background/95 backdrop-blur-lg animate-fade-in shadow-lg">
          <ul className="flex flex-col py-4 px-5 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="https://www.fiverr.com/s/dD4E7q8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
            >
              Hire Me
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};