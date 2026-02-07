"use client";

import { FileText, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "ABOUT", id: "about" },
    { label: "PROJECTS", id: "projects" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-dark-void/80 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-display text-xl lg:text-2xl tracking-wider text-white hover:text-toxic-lime transition-colors duration-300"
            >
              HENRIQUE<span className="text-toxic-lime">.</span>
            </button>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative font-body text-sm tracking-widest text-text-secondary hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-toxic-lime transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://cv.henriquesf.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-white border border-white/20 rounded hover:border-toxic-lime hover:text-toxic-lime transition-all duration-300"
              >
                <FileText size={16} />
                RESUME
              </a>
              <a
                href="mailto:henriquesardofernandes@gmail.com"
                className="flex items-center gap-2 px-4 py-2 text-sm bg-toxic-lime text-dark-void rounded hover:bg-white transition-colors duration-300"
              >
                <Mail size={16} />
                EMAIL
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-toxic-lime transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-dark-void/95 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <button
              type="button"
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="font-display text-4xl text-white hover:text-toxic-lime transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </button>
          ))}

          <div className="flex flex-col gap-4 mt-8">
            <a
              href="https://cv.henriquesf.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 text-white border border-white/20 rounded hover:border-toxic-lime hover:text-toxic-lime transition-all duration-300"
            >
              <FileText size={18} />
              RESUME
            </a>
            <a
              href="mailto:henriquesardofernandes@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-toxic-lime text-dark-void rounded hover:bg-white transition-colors duration-300"
            >
              <Mail size={18} />
              EMAIL
            </a>
            <a
              href="https://www.linkedin.com/in/-henriquesfernandes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 text-white border border-white/20 rounded hover:border-toxic-lime hover:text-toxic-lime transition-all duration-300"
            >
              <Linkedin size={18} />
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
