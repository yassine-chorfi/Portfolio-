import { Navbar } from "@/components/portfolio/Navbar";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Fiverr } from "@/components/portfolio/Fiverr";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Fiverr />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
