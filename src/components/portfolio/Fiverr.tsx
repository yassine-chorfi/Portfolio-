import { ArrowUpRight, Star } from "lucide-react";
import { Reveal } from "./Reveal";

export const Fiverr = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto">
        <Reveal direction="scale" duration={800}>
          <div className="relative card-gradient border border-border rounded-3xl p-10 md:p-16 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <Reveal direction="right" delay={200}>
              <div className="inline-flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
                <span className="text-xs text-muted-foreground ml-2">Top-rated freelancer</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Let's build your next <span className="gradient-text">project</span>
              </h2>
              <p className="text-muted-foreground max-w-lg">
                I'm available on Fiverr to bring your website idea to life — fast turnaround,
                professional quality, and 100% client satisfaction.
              </p>
            </Reveal>

            <Reveal direction="left" delay={350} className="flex md:justify-end">
              <a
                href="https://www.fiverr.com/s/dD4E7q8"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground text-lg font-semibold hover:scale-105 transition-all glow-shadow"
              >
                Hire me on Fiverr
                <ArrowUpRight
                  size={22}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </Reveal>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};