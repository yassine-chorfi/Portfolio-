import { ArrowDownRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export const About = () => (
  <section id="about" className="section about-section">
    <div className="page-width about-layout">
      <Reveal direction="right" className="about-heading">
        <span className="eyebrow"><span className="eyebrow-line" /> A little about me</span>
        <h2>Curiosity is<br />part of the <span className="text-accent">craft.</span></h2>
        <a href="#skills" className="about-next">
          A little more about what I do <ArrowDownRight size={17} />
        </a>
      </Reveal>
      <Reveal direction="left" className="about-copy">
        <span className="about-sparkle"><Sparkles size={18} /></span>
        <p className="about-lead">
          I’m passionate about building modern websites that feel as good to use as they look.
        </p>
        <p>
          I enjoy exploring new technologies, experimenting with AI, and finding thoughtful ways
          to turn an idea into a useful digital experience. From frontend details to e-commerce
          journeys, every project is a chance to keep learning and make something with purpose.
        </p>
        <div className="about-signoff">Always learning. Always making.</div>
      </Reveal>
    </div>
  </section>
);
