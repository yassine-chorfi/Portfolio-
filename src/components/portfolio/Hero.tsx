import { ArrowRight, Download, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary-glow/10 blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">Available for freelance</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Hi, I'm <span className="gradient-text">Yassine</span>
            <br />I build modern websites.
          </h1>

          <p className="text-lg text-muted-foreground mb-3 max-w-xl">
            Full Stack Web Developer & WordPress UI/UX Designer with{" "}
            <span className="text-primary font-medium">3+ years</span> of experience crafting fast,
            user-friendly websites that convert.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <MapPin size={14} className="text-primary" />
            <span>Based in Morocco · Working worldwide</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-all glow-shadow"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.fiverr.com/s/dD4E7q8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium hover:border-primary hover:text-primary transition-all"
            >
              <Download size={18} />
              Hire on Fiverr
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { num: "3+", label: "Years Exp." },
              { num: "50+", label: "Projects" },
              { num: "100%", label: "Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold gradient-text">{s.num}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Code/visual card */}
        <div className="relative animate-scale-in hidden md:block">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
          <div className="relative card-gradient border border-border rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-2 text-xs text-muted-foreground">developer.tsx</span>
            </div>
            <pre className="text-sm leading-relaxed font-mono">
              <code>
                <span className="text-primary">const</span>{" "}
                <span className="text-foreground">yassine</span> = {"{"}
                {"\n  "}name: <span className="text-primary-glow">'Yassine Chorfi'</span>,
                {"\n  "}role: <span className="text-primary-glow">'Full Stack Dev'</span>,
                {"\n  "}stack: [
                <span className="text-primary-glow">'WP'</span>,{" "}
                <span className="text-primary-glow">'React'</span>,{" "}
                <span className="text-primary-glow">'PHP'</span>],
                {"\n  "}available: <span className="text-primary">true</span>,
                {"\n  "}coffee: <span className="text-primary">Infinity</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
            <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Status</span>
              <span className="inline-flex items-center gap-2 text-xs text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Ready to build
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};