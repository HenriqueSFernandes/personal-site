import { FileText, FolderGit, Linkedin, Mail, User } from "lucide-react";
import CustomButton from "@/components/buttons/custom-button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-background">
      <div className="w-full max-w-4xl">
        <div className="space-y-8 md:space-y-12">
          <header className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Henrique Sardo Fernandes
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-light">
              MSc Student in Informatics and Computing Engineering at FEUP
            </p>
          </header>

          <section className="space-y-4">
            <p className="text-base md:text-lg leading-relaxed text-foreground/70 text-pretty max-w-3xl">
              Since I was very young, I've had a great interest in software
              engineering and the transformative power of technology in our
              world. I hold a BSc in Informatics and Computing Engineering from
              FEUP and am currently pursuing an MSc in the same field, where I
              am further developing my skills and knowledge. I am particularly
              interested in{" "}
              <span className="text-primary font-medium">backend systems</span>,{" "}
              <span className="text-primary font-medium">DevOps</span>,{" "}
              <span className="text-primary font-medium">
                cloud architecture
              </span>
              , and <span className="text-primary font-medium">networking</span>
              , with a passion for building resilient and efficient systems.
            </p>
          </section>

          <section className="flex flex-wrap gap-4">
            <CustomButton
              icon={<User />}
              label="About"
              href="/about"
              variant="primary"
              linkType="internal"
            />

            <CustomButton
              icon={<FolderGit />}
              label="Projects"
              href="/projects"
              variant="primary"
              linkType="internal"
            />

            <CustomButton
              icon={<Linkedin />}
              label="LinkedIn"
              href="https://www.linkedin.com/in/-henriquesfernandes/"
              variant="outline"
              linkType="external"
            />

            <CustomButton
              icon={<FileText />}
              label="CV"
              href="https://cv.henriquesf.me"
              variant="outline"
              linkType="external"
            />

            <CustomButton
              icon={<Mail />}
              label="Email"
              href="mailto:henriquesardofernandes@gmail.com"
              variant="outline"
              linkType="external"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
