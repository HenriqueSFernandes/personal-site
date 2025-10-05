import {
	ArrowLeft,
	Cloud,
	Code2,
	Cpu,
	Music,
	Network,
	Server,
	Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-background p-4 md:p-8">
			<div className="max-w-5xl mx-auto space-y-8 md:space-y-12 py-8">
				<Button
					asChild
					variant="outline"
					className="gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-105 bg-transparent"
				>
					<a href="/">
						<ArrowLeft className="h-4 w-4" />
						<span>Back to Home</span>
					</a>
				</Button>

				<header className="space-y-4">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
						About Me
					</h1>
					<p className="text-xl md:text-2xl text-foreground/80 font-light">
						Engineer, builder, and music enthusiast
					</p>
				</header>

				{/* Background Section */}
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
						<Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02]">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-lg bg-primary/10">
									<Server className="h-6 w-6 text-primary" />
								</div>
								<div className="space-y-2">
									<h3 className="text-lg font-semibold text-foreground">
										Backend Systems
									</h3>
									<p className="text-sm text-foreground/70">
										Building scalable, efficient server-side applications and
										APIs with a focus on performance and reliability.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02]">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-lg bg-primary/10">
									<Code2 className="h-6 w-6 text-primary" />
								</div>
								<div className="space-y-2">
									<h3 className="text-lg font-semibold text-foreground">
										DevOps
									</h3>
									<p className="text-sm text-foreground/70">
										Automating deployment pipelines, CI/CD workflows, and
										infrastructure management for seamless development cycles.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02]">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-lg bg-primary/10">
									<Cloud className="h-6 w-6 text-primary" />
								</div>
								<div className="space-y-2">
									<h3 className="text-lg font-semibold text-foreground">
										Cloud Architecture
									</h3>
									<p className="text-sm text-foreground/70">
										Designing and implementing cloud-native solutions with a
										focus on scalability, security, and cost-efficiency.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02]">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-lg bg-primary/10">
									<Network className="h-6 w-6 text-primary" />
								</div>
								<div className="space-y-2">
									<h3 className="text-lg font-semibold text-foreground">
										Networking
									</h3>
									<p className="text-sm text-foreground/70">
										Understanding network protocols, architecture, and security
										to build resilient distributed systems.
									</p>
								</div>
							</div>
						</Card>
					</div>
				</section>

				{/* Interests & Hobbies Section */}
				<section className="space-y-6">
					<h2 className="text-2xl md:text-3xl font-bold text-primary">
						Beyond Code
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02]">
							<div className="space-y-3">
								<div className="p-3 rounded-lg bg-primary/10 w-fit">
									<Music className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-lg font-semibold text-foreground">Music</h3>
								<p className="text-sm text-foreground/70 text-pretty">
									I have a classical piano course and currently play guitar. I'm
									a big fan of metal music and love exploring different genres
									and techniques.
								</p>
							</div>
						</Card>

						<Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02]">
							<div className="space-y-3">
								<div className="p-3 rounded-lg bg-primary/10 w-fit">
									<Wrench className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-lg font-semibold text-foreground">
									Building Things
								</h3>
								<p className="text-sm text-foreground/70 text-pretty">
									I've always loved building cool stuff, whether it's software
									projects, hardware experiments, or just tinkering with
									technology to see what's possible.
								</p>
							</div>
						</Card>

						<Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02]">
							<div className="space-y-3">
								<div className="p-3 rounded-lg bg-primary/10 w-fit">
									<Cpu className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-lg font-semibold text-foreground">
									Computer Enthusiast
								</h3>
								<p className="text-sm text-foreground/70 text-pretty">
									From a young age, I've been fascinated by computers and how
									they work. I enjoy exploring new technologies and
									understanding systems at a deep level.
								</p>
							</div>
						</Card>
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
