"use client";

import { Code2, ExternalLink, Github, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

const Projects = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="projects"
			className="relative py-24 lg:py-32 overflow-hidden"
		>
			<div className="absolute inset-0 bg-dark-void" />

			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
							WHAT I&apos;VE BUILT
						</span>
						<h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mt-2">
							SELECTED <span className="text-toxic-lime">WORKS</span>
						</h2>
						<p className="font-body text-lg text-text-secondary mt-4 max-w-2xl">
							A collection of projects that showcase my skills in backend
							development, cloud architecture, and system design.
						</p>
					</div>

					{/* Projects Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{projects.map((project, index) => (
							<div
								role="none"
								key={project.id}
								className={`group relative bg-charcoal border border-white/10 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-toxic-lime/30 ${
									isVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-10"
								}`}
								style={{ transitionDelay: `${200 + index * 100}ms` }}
								onMouseEnter={() => setHoveredProject(project.id)}
								onMouseLeave={() => setHoveredProject(null)}
							>
								<div
									className="h-2 transition-all duration-300"
									style={{ backgroundColor: project.color }}
								/>

								<div className="p-6 flex flex-col h-full">
									{/* Category & Team Size */}
									<div className="flex items-center justify-between mb-4">
										<span
											className="font-body text-xs tracking-widest px-2 py-1 rounded"
											style={{
												backgroundColor: `${project.color}15`,
												color: project.color,
											}}
										>
											{project.category.toUpperCase()}
										</span>
										<div className="flex items-center gap-1 text-text-secondary">
											<Users size={14} />
											<span className="font-body text-xs">
												{project.teamSize}
											</span>
										</div>
									</div>

									<h3 className="font-display text-2xl lg:text-3xl text-white mb-3 group-hover:text-toxic-lime transition-colors duration-300">
										{project.title}
									</h3>

									<p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-6">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="flex items-center gap-1 text-xs font-body text-text-secondary"
											>
												<Code2 size={12} className="text-toxic-lime" />
												{tech}
											</span>
										))}
									</div>

									<div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
										{project.githubUrl && (
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-sm font-body text-text-secondary hover:text-white transition-colors duration-300"
											>
												<Github size={16} />
												<span>Source</span>
											</a>
										)}
										{project.demoUrl && (
											<a
												href={project.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-sm font-body text-text-secondary hover:text-toxic-lime transition-colors duration-300"
											>
												<ExternalLink size={16} />
												<span>Live Demo</span>
											</a>
										)}
									</div>
								</div>

								<div
									className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
										hoveredProject === project.id ? "opacity-100" : "opacity-0"
									}`}
									style={{
										background: `radial-gradient(circle at 50% 0%, ${project.color}10, transparent 70%)`,
									}}
								/>
							</div>
						))}
					</div>

					{/* View More */}
					<div
						className={`mt-16 text-center transition-all duration-1000 delay-700 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}
					>
						<a
							href="https://github.com/HenriqueSFernandes"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded font-body text-sm hover:border-toxic-lime hover:text-toxic-lime transition-all duration-300 group"
						>
							<Github size={18} />
							VIEW MORE ON GITHUB
							<span className="group-hover:translate-x-1 transition-transform">
								→
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
