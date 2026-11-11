import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Layout,
  PanelsTopLeft,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const skills: { name: string; icon: LucideIcon; number: string }[] = [
  { name: "Frontend Development", icon: Layout, number: "01" },
  { name: "Responsive Web Design", icon: Smartphone, number: "02" },
  { name: "UI/UX Design", icon: PanelsTopLeft, number: "03" },
  { name: "E-commerce Development", icon: ShoppingBag, number: "04" },
  { name: "Cloud Technologies", icon: Cloud, number: "05" },
  { name: "Artificial Intelligence", icon: BrainCircuit, number: "06" },
];

export const Skills = () => (
  <section id="skills" className="section skills-section">
    <div className="page-width">
      <Reveal className="section-heading skills-heading">
        <div>
          <span className="eyebrow"><span className="eyebrow-line" /> The things I’m drawn to</span>
          <h2>Areas of <span className="text-accent">focus.</span></h2>
        </div>
        <p>A growing practice across design, technology, and the experiences in between.</p>
      </Reveal>
      <div className="skills-list">
        {skills.map(({ name, icon: Icon, number }, index) => (
          <Reveal key={name} delay={index * 50} duration={550}>
            <div className="skill-item">
              <span className="skill-number">{number}</span>
              <Icon size={20} strokeWidth={1.5} className="skill-icon" aria-hidden="true" />
              <h3>{name}</h3>
              <ArrowUpRight size={17} className="skill-arrow" aria-hidden="true" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
