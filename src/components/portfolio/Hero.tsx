import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-glow hero-glow-one" aria-hidden="true" />
    <div className="hero-glow hero-glow-two" aria-hidden="true" />
    <div className="hero-content page-width">
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow">
          <span className="availability-dot" />
          <span>Independent creative developer</span>
        </div>
        <h1>
          Building digital
          <br />
          experiences
          <br />
          <span className="hero-accent">that matter.</span>
        </h1>
        <p className="hero-description">
          I’m Yassine — a creative web developer drawn to thoughtful frontend,
          modern technology, e-commerce, and the possibilities of AI.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a className="button button-quiet" href="#contact">
            Contact me
          </a>
        </div>
        <a href="#projects" className="hero-scroll">
          <span className="scroll-icon"><ArrowDown size={14} /></span>
          <span>Scroll to explore</span>
        </a>
      </div>

      <div className="hero-art" aria-label="A preview of selected web projects">
        <div className="hero-orbit hero-orbit-outer" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-inner" aria-hidden="true" />
        <div className="hero-project-preview">
          <div className="preview-topbar">
            <span className="preview-mark">YS.</span>
            <span>Selected work</span>
            <span className="preview-menu"><i /><i /></span>
          </div>
          <div className="preview-image">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1100&q=85"
              alt="Red sneaker from the Aero Step e-commerce concept"
            />
            <div className="preview-image-shade" />
            <span className="preview-image-label">AERO / 001</span>
            <span className="preview-image-title">Move<br />different.</span>
          </div>
          <div className="preview-caption">
            <span>Digital experiences, made with intent.</span>
            <Sparkles size={15} />
          </div>
        </div>
        <div className="hero-float-note">
          <span className="float-note-icon"><Sparkles size={15} /></span>
          <span><strong>4</strong><small>featured projects</small></span>
        </div>
        <span className="hero-art-index">01 — 04</span>
      </div>
    </div>
    <div className="hero-bottom-line page-width">
      <span>Thoughtful by design</span>
      <span className="hero-bottom-rule" />
      <span>Curious by nature</span>
    </div>
  </section>
);
