import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-dark-void">
      <div className="grain-overlay" />

      <Navigation />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="relative py-8 bg-dark-void border-t border-white/5">
        <div className="w-full px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-text-secondary">
              © {new Date().getFullYear()} Henrique Fernandes. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
