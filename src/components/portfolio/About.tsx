import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const highlights = [
  "Clean, modern design with smooth functionality",
  "Skilled team of developers & designers",
  "Fast turnaround, professional delivery",
  "100% client satisfaction focus",
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Crafting websites that <span className="gradient-text">help businesses grow</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hi, I'm <span className="text-foreground font-medium">Yassine Chorfi</span>, a WordPress
              UI/UX developer with 3+ years of experience creating modern, fast, and user-friendly
              websites that help businesses grow.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I work with a skilled team of developers and designers, allowing us to deliver
              high-quality websites quickly and professionally. Our focus is clean design, smooth
              functionality, and 100% client satisfaction.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              If you're looking for a reliable developer to bring your website idea to life, you're in
              the right place.
            </p>

            <ul className="space-y-3">
              {highlights.map((h, i) => (
                <Reveal key={h} direction="up" delay={150 + i * 80}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                    <span className="text-foreground/90">{h}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="left" delay={150} className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { title: "WordPress", val: "Expert" },
                { title: "Frontend", val: "React / Tailwind" },
                { title: "Backend", val: "PHP / MySQL" },
                { title: "Design", val: "UI/UX & Logo" },
              ].map((c, i) => (
                <Reveal key={c.title} direction="scale" delay={200 + i * 100}>
                  <div className="card-gradient border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      {c.title}
                    </div>
                    <div className="text-lg font-semibold text-foreground">{c.val}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};