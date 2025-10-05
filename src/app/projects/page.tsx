import CustomButton from "@/components/buttons/custom-button";
import ProjectCard from "@/components/cards/project-card";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    name: "CherryPick",
    description:
      "Cross-format recommendation platform that takes a book, movie, show, or album you love and matches it with complementary picks from other media to capture the same vibe. Developed for the ShiftAPPens 2025 Hackathon.",
    github: "https://github.com/HenriqueSFernandes/CherryPick",
    demo: null,
    teamSize: 4,
  },
  {
    name: "ClipNest",
    description:
      "AI-powered bookmarking tool that organizes saved webpages into project folders, extracts and indexes their content, and lets you conversationally search and explore them through a contextual chatbot.",
    github: "https://github.com/HenriqueSFernandes/ClipNest",
    demo: null,
    teamSize: 1,
  },
  {
    name: "UNI",
    description:
      "UNI is a project developed by NIAEFEUP to help students of the University of Porto to manage their academic life, including useful features such as upcoming classes and exams. It is a mobile app that is available for both Android and iOS, and is developed using the Flutter framework. Currently, it has over 5000 monthly active users.",
    github: "https://github.com/niaeFEUP/uni",
    demo: null,
    teamSize: 65,
  },
  {
    name: "NIployments",
    description:
      "Infrastructure project developed by NIAEFEUP to manage the deployment of services and applications in our servers, using technologies such as Docker, Kubernetes, and Pulumi.",
    github: "https://github.com/NIAEFEUP/niployments/",
    demo: null,
    teamSize: 12,
  },
  {
    name: "iNIcio",
    description:
      "Recruitment website developed by NIAEFEUP to help with the recruitment of new members, with features such as application forms, scheduling of interviews, and management of candidates.",
    github: "https://github.com/NIAEFEUP/inicio/",
    demo: "https://inicio.niaefeup.pt",
    teamSize: 4,
  },
  {
    name: "ProGram",
    description:
      "ProGram is a social networking platform being developed by a startup which aims to connect programmers with like-minded individuals. The need for a specialized space where technology professionals can connect, collaborate, and share knowledge drives this initiative. By providing an interactive and supportive environment, ProGram seeks to fill this gap within the tech community.",
    github: "https://github.com/HenriqueSFernandes/ProGram",
    demo: null,
    teamSize: 4,
  },
  {
    name: "Trinted",
    description:
      "Website for a second-hand marketplace with responsive, interactive and dynamically-generated webpages, featuring a REST API and a custom PHP framework ",
    github: "https://github.com/HenriqueSFernandes/Trinted",
    demo: null,
    teamSize: 3,
  },
  {
    name: "Let's Cook",
    description:
      "Let's Cook is a revolutionary mobile application designed to connect students within FEUP to buy and sell homemade meals, reducing food waste while fostering a sense of community and culinary exploration.",
    github: "https://github.com/HenriqueSFernandes/Lets-Cook",
    demo: null,
    teamSize: 5,
  },
  {
    name: "Wolfenstein Mock",
    description:
      "Mock version of Wolfenstein 3D, a game released in 1992 that is considered the grandfather of 3D shooters. It was one of the first games that presented 3D graphics, using a raycasting engine to achieve that goal.",
    github: "https://github.com/HenriqueSFernandes/wolfensteinmock",
    demo: null,
    teamSize: 3,
  },
];

export default function ProjectsPage() {
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
            Projects
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            A collection of some projects I've worked on, showcasing my skills
            and interests.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              teamSize={project.teamSize}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
