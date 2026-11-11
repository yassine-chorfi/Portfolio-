import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  objective: string;
  url: string;
  image: string;
  imageMode?: "desktop" | "mobile";
  alt: string;
  theme: string;
  visualLabel: string;
  visualTitle: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Yaniss Print",
    category: "Business website · Printing services",
    description:
      "A clear, considered home for a print studio — bringing flyers, business cards, brochures and banners into focus.",
    objective:
      "Purpose · Present the company’s services and help clients discover its printing solutions.",
    url: "https://yaniss-print.vercel.app/",
    image: "/project-previews/yaniss-print.png",
    imageMode: "desktop",
    alt: "Screenshot of the Yaniss Print website and printing catalog",
    theme: "project-art-print",
    visualLabel: "PRINT / MAKE IT REAL",
    visualTitle: "Ideas you can\nhold in your hands.",
  },
  {
    number: "02",
    title: "Aegilabs",
    category: "AI · Creative technology · Team project",
    description:
      "A team-built exploration of free, AI-powered intelligent agents and the new digital possibilities they open up.",
    objective:
      "Purpose · Share the team’s vision for accessible AI and intelligent digital solutions.",
    url: "https://aegilabs-website.vercel.app/",
    image: "/project-previews/aegilabs.png",
    imageMode: "desktop",
    alt: "Screenshot of the Aegilabs AI agents website",
    theme: "project-art-ai",
    visualLabel: "AEGI / INTELLIGENCE, OPEN",
    visualTitle: "Ideas that\nthink forward.",
  },
  {
    number: "03",
    title: "Aero Step",
    category: "E-commerce · Frontend development",
    description:
      "A fictional sneaker label and digital storefront, created to experiment with modern frontend and cloud technologies.",
    objective:
      "Purpose · Explore the craft of building an engaging online shopping experience.",
    url: "https://aero-step-sneakers.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
    alt: "Statement red sneaker representing the Aero Step store",
    theme: "project-art-aero",
    visualLabel: "AERO STEP / 001",
    visualTitle: "Move\nwith intent.",
  },
  {
    number: "04",
    title: "Mobile e-commerce",
    category: "E-commerce · Responsive design",
    description:
      "A shopping experience designed around the small screen, with a responsive interface made for mobile-first browsing.",
    objective:
      "Purpose · Make online shopping feel natural and considered on smartphones.",
    url: "https://mediumblue-ape-656449.hostingersite.com/",
    image: "/project-previews/mobile-ecommerce.png",
    imageMode: "mobile",
    alt: "Mobile screenshot of the Nuit Rosé e-commerce storefront",
    theme: "project-art-mobile",
    visualLabel: "MOBILE / MADE TO MOVE",
    visualTitle: "A better fit\nfor your pocket.",
  },
];

export const Projects = () => (
  <section id="projects" className="section projects-section">
    <div className="page-width">
      <Reveal className="section-heading projects-heading">
        <div>
          <span className="eyebrow"><span className="eyebrow-line" /> A few things I’ve made</span>
          <h2>Selected <span className="text-accent">work.</span></h2>
        </div>
        <p>Four different ideas. One shared focus: making the web feel a little more human.</p>
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={index * 80} duration={650}>
            <article className="project-card">
              <a
                className={`project-art ${project.theme} ${project.imageMode ? `project-art-${project.imageMode}` : ""}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} live website`}
              >
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-art-wash" />
                <span className="project-art-copy">
                  <span>{project.visualLabel}</span>
                  <strong>{project.visualTitle}</strong>
                </span>
                <span className="project-art-link"><ArrowUpRight size={19} /></span>
                <span className="project-art-count">{project.number} / 04</span>
              </a>
              <div className="project-details">
                <div className="project-title-row">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-number">{project.number}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <p className="project-objective">{project.objective}</p>
                <a
                  className="project-visit"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live project <ExternalLink size={14} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
