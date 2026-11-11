import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export const Contact = () => (
  <section id="contact" className="section contact-section">
    <div className="page-width">
      <Reveal className="contact-panel">
        <div className="contact-glow" aria-hidden="true" />
        <span className="eyebrow"><span className="eyebrow-line" /> Have something in mind?</span>
        <h2>Good things start<br />with a <span className="text-accent">hello.</span></h2>
        <p>I’m always happy to hear about a thoughtful idea, a new collaboration, or just to connect.</p>
        <a className="button button-primary contact-button" href="mailto:yassinechorfi35@gmail.com">
          <Mail size={17} /> Say hello <ArrowUpRight size={17} />
        </a>
        <div className="contact-socials" aria-label="Social profiles">
          <span>Find me elsewhere</span>
          <span className="social-placeholder" aria-label="GitHub profile not provided">
            <Github size={16} /> GitHub <small>coming soon</small>
          </span>
          <span className="social-placeholder" aria-label="LinkedIn profile not provided">
            <Linkedin size={16} /> LinkedIn <small>coming soon</small>
          </span>
        </div>
      </Reveal>
    </div>
  </section>
);
