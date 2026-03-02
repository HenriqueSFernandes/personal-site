"use client";

import { tennisBall } from "@lucide/lab";
import {
	Cloud,
	Cpu,
	Gamepad2,
	Icon,
	Music,
	Network,
	Server,
	Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Skill {
	name: string;
	level: number;
	icon: React.ReactNode;
}

interface Interest {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const About = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	const skills: Skill[] = [
		{ name: "Backend Systems", level: 100, icon: <Server size={20} /> },
		{ name: "Cloud Architecture", level: 100, icon: <Cloud size={20} /> },
		{ name: "DevOps & CI/CD", level: 100, icon: <Cpu size={20} /> },
		{ name: "Networking", level: 100, icon: <Network size={20} /> },
	];

	const interests: Interest[] = [
		{
			title: "Music",
			description:
				"I have a classical piano course and currently play guitar. I'm a big fan of metal music and love exploring different genres and techniques.",
			icon: <Music size={24} />,
		},
		{
			title: "Tennis",
			description:
				"I'm an avid tennis player and enjoy the combination of physical activity and strategy the sport demands. It's a great way to stay active and competitive.",
			icon: <Icon iconNode={tennisBall} size={24} />,
		},
		{
			title: "Gaming",
			description:
				"Whether it's immersing myself in a game with a good story or enjoying the challenge of competitive titles, I find gaming is a great way to unwind and appreciate interactive storytelling. My current favorite is Clair Obscur: Expedition 33.",
			icon: <Gamepad2 size={24} />,
		},
		{
			title: "Building Things",
			description:
				"I've always loved building cool stuff, whether it's software projects, hardware experiments, or just tinkering with technology to see what's possible.",
			icon: <Wrench size={24} />,
		},
	];

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

	return (
		<section
			ref={sectionRef}
			id="about"
			className="relative py-24 lg:py-32 overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-dark-void via-charcoal to-dark-void" />

			<div className="relative z-10 w-full px-6 sm:px-8 lg:px-12">
				<div className="max-w-7xl mx-auto">
					<div
						className={`mb-16 lg:mb-24 transition-all duration-1000 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}
					>
						<span className="font-body text-sm text-toxic-lime tracking-widest">
							WHO AM I
						</span>
						<h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mt-2">
							ABOUT <span className="text-toxic-lime">ME</span>
						</h2>
					</div>

					{/* Main Content Grid */}
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
						{/* Bio */}
						<div
							className={`transition-all duration-1000 delay-200 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-10"
							}`}
						>
							<div className="prose prose-invert max-w-none">
								<p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
									Since I was very young, I've had a great interest in software
									engineering and the transformative power of technology in our
									world.
								</p>
								<p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
									I hold a BSc in Informatics and Computing Engineering from{" "}
									<span className="text-toxic-lime font-medium">FEUP</span> and
									am currently pursuing an MSc in the same field, where I am
									further developing my skills and knowledge.
								</p>
								<p className="font-body text-lg text-text-secondary leading-relaxed">
									I am particularly interested in{" "}
									<span className="text-toxic-lime">backend systems</span>,{" "}
									<span className="text-toxic-lime">DevOps</span>,{" "}
									<span className="text-toxic-lime">cloud architecture</span>,
									and <span className="text-toxic-lime">networking</span>, with
									a passion for building resilient and efficient systems.
								</p>
							</div>

							{/* Education */}
							<div className="mt-10 p-6 bg-white/5 rounded-lg border border-white/10">
								<h3 className="font-display text-2xl text-white mb-4">
									EDUCATION
								</h3>
								<div className="space-y-4">
									<div>
										<div className="flex items-center justify-between">
											<span className="font-body text-white font-medium">
												MSc in Informatics and Computing Engineering
											</span>
											<span className="font-body text-sm text-toxic-lime">
												2025 - Present
											</span>
										</div>
										<span className="font-body text-sm text-text-secondary">
											FEUP - Faculty of Engineering, University of Porto
										</span>
									</div>
									<div className="w-full h-px bg-white/10" />
									<div>
										<div className="flex items-center justify-between">
											<span className="font-body text-white font-medium">
												BSc in Informatics and Computing Engineering
											</span>
											<span className="font-body text-sm text-toxic-lime">
												2022 - 2025
											</span>
										</div>
										<span className="font-body text-sm text-text-secondary">
											FEUP - Faculty of Engineering, University of Porto
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Skills */}
						<div
							className={`transition-all duration-1000 delay-400 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-10"
							}`}
						>
							<h3 className="font-display text-3xl text-white mb-8">
								TECHNICAL SKILLS
							</h3>

							<div className="space-y-6">
								{skills.map((skill, index) => (
									<div
										key={skill.name}
										className="group"
										style={{ transitionDelay: `${index * 100}ms` }}
									>
										<div className="flex items-center gap-3 mb-2">
											<span className="text-toxic-lime">{skill.icon}</span>
											<span className="font-body text-white">{skill.name}</span>
											{/*
											i should uncomment this to enable the percentage
                      <span className="font-body text-sm text-text-secondary ml-auto">
                        {skill.level}%
                      </span>
											*/}
										</div>
										<div className="h-2 bg-white/10 rounded-full overflow-hidden">
											<div
												className={`h-full bg-gradient-to-r from-toxic-lime to-white rounded-full transition-all duration-1000 ease-out ${
													isVisible ? "opacity-100" : "opacity-0"
												}`}
												style={{
													width: isVisible ? `${skill.level}%` : "0%",
													transitionDelay: `${600 + index * 150}ms`,
												}}
											/>
										</div>
									</div>
								))}
							</div>

							{/* Tech Stack */}
							<div className="mt-10">
								<h4 className="font-body text-sm text-text-secondary mb-4 tracking-widest">
									TECHNOLOGIES I WORK WITH
								</h4>
								<div className="flex flex-wrap gap-2">
									{[
										"C++",
										"Flutter",
										"Java",
										"React",
										"Docker",
										"GitHub Actions",
										"JavaScript",
										"Linux",
										"PostgreSQL",
										"Python",
										"REST APIs",
										"Terraform",
										"gRPC",
										"And more...",
									].map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm font-body text-text-secondary hover:border-toxic-lime hover:text-toxic-lime transition-all duration-300 cursor-default"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Beyond Code Section */}
					<div
						className={`mt-20 lg:mt-32 transition-all duration-1000 delay-600 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}
					>
						<div className="flex items-center gap-4 mb-10">
							<div className="w-12 h-px bg-toxic-lime" />
							<h3 className="font-display text-3xl lg:text-4xl text-white">
								BEYOND CODE
							</h3>
						</div>

						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{interests.map((interest) => (
								<div
									key={interest.title}
									className="group p-6 bg-white/5 border border-white/10 rounded-lg hover:border-toxic-lime/50 transition-all duration-300 hover:-translate-y-1"
								>
									<div className="w-12 h-12 flex items-center justify-center bg-toxic-lime/10 rounded-lg mb-4 group-hover:bg-toxic-lime/20 transition-colors">
										<span className="text-toxic-lime">{interest.icon}</span>
									</div>
									<h4 className="font-display text-xl text-white mb-2">
										{interest.title}
									</h4>
									<p className="font-body text-sm text-text-secondary leading-relaxed">
										{interest.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
