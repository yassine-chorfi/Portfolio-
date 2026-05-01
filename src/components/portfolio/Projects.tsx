import { ExternalLink, Github, Lock } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  category: string;
};

const projects: Project[] = [
  {
    title: "Stock Management System",
    category: "Web App",
    description:
      "A complete inventory & stock management dashboard built for Kounouz Edition to track products, orders, and reporting in real time.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    title: "AB — Anass Benlechgar",
    category: "Freelance Website",
    description:
      "A modern, fast, conversion-focused freelance website with custom WordPress theme, smooth animations and full responsiveness.",
    tech: ["WordPress", "Elementor", "PHP", "CSS"],
    link: "https://www.ab-anassbenlechgar.com/",
  },
  {
    title: "Brand Website Project",
    category: "Brand / E-commerce",
    description:
      "A high-end brand website with custom UI, smooth interactions and premium visual identity. Live link coming soon.",
    tech: ["WordPress", "UI/UX", "Photoshop"],
  },
  {
    title: "Syllabus Coworking Space",
    category: "Business Website",
    description:
      "A modern, conversion-focused website for Syllabus coworking space — featuring a clean booking flow, polished UI and full responsiveness.",
    tech: ["WordPress", "Elementor", "UI/UX", "CSS"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A few projects I've recently delivered for clients and teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group card-gradient border border-border rounded-2xl p-7 flex flex-col hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="text-xs uppercase tracking-wider text-primary font-medium mb-3 relative">
                {p.category}
              </span>
              <h3 className="text-xl font-bold mb-3 relative">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow relative">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 relative">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all relative"
                >
                  View Live
                  <ExternalLink size={16} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground relative">
                  <Lock size={14} />
                  Link coming soon
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};