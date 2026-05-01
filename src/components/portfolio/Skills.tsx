import {
  Code2,
  Globe,
  Palette,
  Image,
  PenTool,
  Layout,
  Sparkles,
  FileCode,
  Database,
  MessageSquare,
  Smartphone,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const skills: { name: string; icon: LucideIcon }[] = [
  { name: "WordPress", icon: Globe },
  { name: "Web Development", icon: Code2 },
  { name: "Graphic Design", icon: Palette },
  { name: "Adobe Photoshop", icon: Image },
  { name: "Logo Design", icon: PenTool },
  { name: "Website Development", icon: Layout },
  { name: "UI/UX Design", icon: Sparkles },
  { name: "CSS", icon: FileCode },
  { name: "PHP Development", icon: Code2 },
  { name: "MySQL", icon: Database },
  { name: "Website Consultation", icon: MessageSquare },
  { name: "React Native", icon: Smartphone },
  { name: "Python", icon: Terminal },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto">
        <Reveal direction="up" className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            What I <span className="gradient-text">do best</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A modern toolkit built over 3+ years of designing and shipping production websites.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.name} direction="up" delay={i * 60} duration={600}>
                <div className="group card-gradient border border-border rounded-xl p-5 flex items-center gap-3 hover:border-primary hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.4)] transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all">
                    <Icon size={20} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{s.name}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};