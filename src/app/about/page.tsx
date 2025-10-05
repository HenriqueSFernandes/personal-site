import { tennisBall } from "@lucide/lab";
import {
  ArrowLeft,
  Cloud,
  Code2,
  Gamepad2,
  Icon,
  Music,
  Network,
  Server,
  Wrench,
} from "lucide-react";
import CustomButton from "@/components/buttons/custom-button";
import IconCard from "@/components/cards/icon-card";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 py-8">
        <CustomButton
          icon={<ArrowLeft />}
          label="Back to Home"
          href="/"
          linkType="internal"
          variant="outline"
        />

        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            Engineer, builder, and music enthusiast
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Background
          </h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p className="text-pretty">
              Since I was very young, I've had a great interest in software
              engineering and the transformative power of technology in our
              world. Growing up, I was always the kid taking things apart to see
              how they worked, and eventually, I started building my own
              projects and experimenting with computers.
            </p>
            <p className="text-pretty">
              I hold a{" "}
              <span className="text-primary font-medium">
                BSc in Informatics and Computing Engineering
              </span>{" "}
              from FEUP and am currently pursuing an{" "}
              <span className="text-primary font-medium">
                MSc in the same field
              </span>
              , where I am further developing my skills and knowledge. My
              academic journey has been driven by a passion for understanding
              complex systems and building solutions that make a real impact.
            </p>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <IconCard
              title="Backend Systems"
              description="Building scalable, efficient server-side applications and APIs with a focus on performance and reliability."
              icon={<Server />}
            />

            <IconCard
              title="DevOps"
              description="Automating deployment pipelines, CI/CD workflows, and infrastructure management for seamless development cycles."
              icon={<Code2 />}
            />

            <IconCard
              title="Cloud Architecture"
              description="Designing and implementing cloud-native solutions with a focus on scalability, security, and cost-efficiency."
              icon={<Cloud />}
            />

            <IconCard
              title="Networking"
              description="Understanding network protocols, architecture, and security to build resilient distributed systems."
              icon={<Network />}
            />
          </div>
        </section>

        {/* Interests & Hobbies Section */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Beyond Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <IconCard
              title="Music"
              description="I have a classical piano course and currently play guitar. I'm a big fan of metal music and love exploring different genres and techniques."
              icon={<Music />}
            />

            <IconCard
              title="Tennis"
              description="I'm an avid tennis player and enjoy the combination of physical activity and strategy the sport demands. It's a great way to stay active and competitive."
              icon={<Icon iconNode={tennisBall} />}
            />

            <IconCard
              title="Building Things"
              description="I've always loved building cool stuff, whether it's software projects, hardware experiments, or just tinkering with technology to see what's possible."
              icon={<Wrench />}
            />

            <IconCard
              title="Gaming"
              description="Whether it's immersing myself in a game with a good story or enjoying the challenge of competitive titles, I find gaming is a great way to unwind and appreciate interactive storytelling. My current favorite is Clair Obscur: Expedition 33."
              icon={<Gamepad2 />}
            />
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            My Approach
          </h2>
          <Card className="p-8 bg-card/50 border-primary/20">
            <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
              I believe in building{" "}
              <span className="text-primary font-medium">
                resilient and efficient systems
              </span>{" "}
              that solve real problems. My passion lies in understanding how
              things work at a fundamental level and using that knowledge to
              create solutions that are both elegant and practical. Whether it's
              optimizing a backend service, designing a cloud architecture, or
              debugging a complex network issue, I approach every challenge with
              curiosity and determination.
            </p>
          </Card>
        </section>
      </div>
    </main>
  );
}
