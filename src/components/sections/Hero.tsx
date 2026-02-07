"use client";

import { ChevronDown, FileText, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const scrollToProjects = () => {
		const element = document.getElementById("projects");

		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToAbout = () => {
		const element = document.getElementById("about");

		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div
				className="absolute inset-0 w-full h-full"
				style={{
					background: "linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)",
				}}
			/>
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: `
			linear-gradient(rgba(208, 255, 148, 0.5) 1px, transparent 1px),
			linear-gradient(90deg, rgba(208, 255, 148, 0.5) 1px, transparent 1px)
			`,
					backgroundSize: "50px 50px",
				}}
			/>
			{/* Content */}
			<div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 pt-20">
				<div className="max-w-7xl mx-auto">
					{/* Main Header */}
					<div
						className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
					>
						<h1 className="font-display text-[12vw] sm:text-[10vw] lg:text-[8vw] leading-[0.9] tracking-tight text-white">
							HENRIQUE
							<br />
							<span className="text-toxic-lime">FERNANDES</span>
						</h1>
					</div>

					{/* Subheader */}
					<div
						className={`mt-6 lg:mt-8 transition-all duration-1000 delay-300 ${isLoaded
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
							}`}
					>
						<p className="font-body text-lg sm:text-xl lg:text-2xl text-text-secondary tracking-wide">
							Student <span className="text-toxic-lime"> | </span> Researcher{" "}
							<span className="text-toxic-lime"> | </span> Software Engineer
						</p>
					</div>

					{/* Description */}
					<div
						className={`mt-6 max-w-2xl transition-all duration-1000 delay-500 ${isLoaded
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
							}`}
					>
						<p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
							<span className="text-toxic-lime">MSc</span> Student in{" "}
							<span className="text-toxic-lime">
								Informatics and Computing Engineering
							</span>{" "}
							at <span className="text-toxic-lime">FEUP</span>
						</p>
					</div>

					{/* Header Buttons */}
					<div
						className={`mt-10 flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${isLoaded
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
							}`}
					>
						<a
							href="https://cv.henriquesf.me"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-3 px-6 py-3 bg-toxic-lime text-dark-void rounded font-body text-sm font-medium hover:bg-white transition-all duration-300 hover:shadow-glow"
						>
							<FileText size={18} />
							VIEW CV
							<span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300">
								→
							</span>
						</a>
						<a
							href="mailto:henriquesardofernandes@gmail.com"
							className="flex items-center gap-3 px-6 py-3 border border-white/20 text-white rounded font-body text-sm hover:border-toxic-lime hover:text-toxic-lime transition-all duration-300"
						>
							<Mail size={18} />
							EMAIL ME
						</a>
						<a
							href="https://www.linkedin.com/in/-henriquesfernandes/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 px-6 py-3 border border-white/20 text-white rounded font-body text-sm hover:border-toxic-lime hover:text-toxic-lime transition-all duration-300"
						>
							<Linkedin size={18} />
							LINKEDIN
						</a>
					</div>
				</div>
			</div>
			{/* Scroll Button */}
			<button
				type="button"
				onClick={scrollToAbout}
				className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary hover:text-toxic-lime transition-all duration-300 cursor-pointer ${isLoaded ? "opacity-100" : "opacity-0"
					}`}
			>
				<span className="font-body text-xs tracking-widest">
					SCROLL TO EXPLORE
				</span>
				<ChevronDown size={20} className="animate-bounce" />
			</button>
		</section>
	);
};

export default Hero;
