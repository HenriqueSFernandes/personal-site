"use client";

import { FileText, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/-henriquesfernandes/",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      url: "https://github.com/HenriqueSFernandes",
    },
    {
      icon: <FileText size={20} />,
      label: "Resume",
      url: "https://cv.henriquesf.me",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      url: "mailto:henriquesardofernandes@gmail.com",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-void via-charcoal to-dark-void" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(208, 255, 148, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(208, 255, 148, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="font-body text-sm text-toxic-lime tracking-widest">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-8xl text-white mt-2">
              LET&apos;S <span className="text-toxic-lime">TALK</span>
            </h2>
            <p className="font-body text-lg text-text-secondary mt-6 max-w-xl mx-auto">
							Feel free to contact me if you’d like to talk, collaborate, or just say hello.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-10">
                <h3 className="font-display text-2xl text-white mb-6">
                  CONNECT WITH ME
                </h3>

                {/* Social Links */}
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-toxic-lime/50 transition-all duration-300"
                    >
                      <span className="text-toxic-lime group-hover:scale-110 transition-transform">
                        {link.icon}
                      </span>
                      <span className="font-body text-white group-hover:text-toxic-lime transition-colors">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin size={18} className="text-toxic-lime" />
                <span className="font-body">Aveiro &amp; Porto, Portugal</span>
              </div>

              <div className="mt-10 p-6 border-l-2 border-toxic-lime bg-white/5">
                <p className="font-body text-text-secondary italic">
                  &quot;The best way to predict the future is to implement
                  it.&quot;
                </p>
                <span className="font-body text-sm text-toxic-lime mt-2 block">
                  — David Heinemeier Hansson
                </span>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-sm text-text-secondary mb-2"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-text-secondary/50 focus:border-toxic-lime focus:outline-none focus:ring-1 focus:ring-toxic-lime/30 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-sm text-text-secondary mb-2"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-text-secondary/50 focus:border-toxic-lime focus:outline-none focus:ring-1 focus:ring-toxic-lime/30 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-sm text-text-secondary mb-2"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-text-secondary/50 focus:border-toxic-lime focus:outline-none focus:ring-1 focus:ring-toxic-lime/30 transition-all duration-300 resize-none"
                    placeholder="What would you like to talk about?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-toxic-lime text-dark-void rounded-lg font-body font-medium hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {submitted ? (
                    <>Still building this - use email for now!</>
                  ) : (
                    <>
                      <Send size={18} />
                      SEND MESSAGE
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
