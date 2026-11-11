import { ArrowUpRight } from "lucide-react";

export const Footer = () => (
  <footer className="site-footer">
    <div className="page-width footer-content">
      <a href="#home" className="footer-brand" aria-label="Yassine Chorfi — home">
        <img src="/photo/portfolio-mark.png" alt="" />
      </a>
      <span>Designed with curiosity. Built with care.</span>
      <a href="#home" className="back-to-top">Back to top <ArrowUpRight size={14} /></a>
      <span className="footer-copyright">© {new Date().getFullYear()} Yassine Chorfi</span>
    </div>
  </footer>
);
