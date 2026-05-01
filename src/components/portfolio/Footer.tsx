export const Footer = () => {
  return (
    <footer className="px-4 pb-6 pt-4">
      <div className="max-w-6xl mx-auto rounded-2xl border border-border/60 bg-background/50 backdrop-blur-xl shadow-[0_8px_32px_-12px_hsl(160_30%_2%/0.6)] px-6 py-5 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_8px_40px_-10px_hsl(var(--primary)/0.25)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="text-foreground font-medium">Yassine Chorfi</span>. Crafted with care.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};