import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Focus" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav page-width" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Yassine Chorfi — home">
          <span className="brand-mark">
            <img src="/photo/portfolio-mark.png" alt="" />
          </span>
          <span className="brand-name">Yassine Chorfi<small>Creative developer</small></span>
        </a>

        <div className="nav-links">
          {links.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>

        <a className="nav-contact" href="#contact">
          Let’s talk <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && (
        <div className="mobile-nav page-width" id="mobile-navigation">
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={15} /></a>
        </div>
      )}
    </header>
  );
};
