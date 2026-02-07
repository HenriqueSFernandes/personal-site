"use client";

import {
	Box,
	ChevronDown,
	Cloud,
	Code2,
	Database,
	FileText,
	GitBranch,
	Linkedin,
	Mail,
	Network,
	Server,
	Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";

interface CodeLine {
	text: string;
	color: string;
	id: number;
}

const Hero = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [typedLines, setTypedLines] = useState<CodeLine[]>([]);

	const codeLines: CodeLine[] = [
		{ text: "package main", color: "text-purple-400", id: 1 },
		{ text: "", color: "", id: 2 },
		{ text: "import (", color: "text-purple-400", id: 3 },
		{ text: '    "context"', color: "text-green-400", id: 4 },
		{ text: '    "log"', color: "text-green-400", id: 5 },
		{ text: '    "net/http"', color: "text-green-400", id: 6 },
		{ text: ")", color: "text-purple-400", id: 7 },
		{ text: "", color: "", id: 8 },
		{ text: "// Building resilient systems", color: "text-gray-500", id: 9 },
		{ text: "func main() {", color: "text-blue-400", id: 10 },
		{ text: "    srv := NewServer()", color: "text-white", id: 11 },
		{ text: "    srv.Run(context.Background())", color: "text-white", id: 12 },
		{ text: "}", color: "text-blue-400", id: 13 },
	];

	useEffect(() => {
		setIsLoaded(true);

		const typingTimeout = setTimeout(() => {
			let lineIndex = 0;
			const typeInterval = setInterval(() => {
				if (lineIndex <= codeLines.length) {
					setTypedLines(codeLines.slice(0, lineIndex));
					lineIndex++;
				} else {
					clearInterval(typeInterval);
				}
			}, 80);

			return () => clearInterval(typeInterval);
		}, 1500);

		return () => clearTimeout(typingTimeout);
	}, []);

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

			<div className="absolute inset-0 pointer-events-none hidden lg:block">
				<div className="absolute top-[20%] right-[15%] text-toxic-lime/10 animate-float">
					<Server size={120} strokeWidth={0.5} />
				</div>
				<div
					className="absolute bottom-[25%] right-[8%] text-toxic-lime/5 animate-float"
					style={{ animationDelay: "2s" }}
				>
					<Database size={80} strokeWidth={0.5} />
				</div>
				<div
					className="absolute top-[40%] right-[25%] text-toxic-lime/5 animate-float"
					style={{ animationDelay: "4s" }}
				>
					<Cloud size={60} strokeWidth={0.5} />
				</div>
			</div>

			{/* Content */}
			<div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 pt-20">
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
						<div>
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
									Student <span className="text-toxic-lime"> | </span>{" "}
									Researcher <span className="text-toxic-lime"> | </span>{" "}
									Software Engineer
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
						<div className="hidden lg:flex justify-end items-center">
							<div
								className={`relative transition-all duration-1000 delay-500 ${isLoaded
										? "opacity-100 translate-x-0"
										: "opacity-0 translate-x-10"
									}`}
							>
								<div className="w-[480px] bg-charcoal/80 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden shadow-2xl">
									<div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
										<div className="flex gap-2">
											<div className="w-3 h-3 rounded-full bg-red-500/80" />
											<div className="w-3 h-3 rounded-full bg-yellow-500/80" />
											<div className="w-3 h-3 rounded-full bg-green-500/80" />
										</div>
										<div className="flex items-center gap-2 ml-4 text-text-secondary">
											<Terminal size={14} />
											<span className="font-mono text-xs">
												main.go — ~/projects/portfolio
											</span>
										</div>
									</div>

									<div className="p-5 font-mono text-sm leading-relaxed min-h-80">
										{typedLines.map((line, index) => (
											<div key={line.id} className="flex">
												<span className="text-gray-600 w-6 text-right mr-4 select-none">
													{index + 1}
												</span>
												<span className={line.color}>{line.text}</span>
											</div>
										))}
										<div className="flex mt-1">
											<span className="text-gray-600 w-6 text-right mr-4 select-none">
												{typedLines.length + 1}
											</span>
											<span className="w-2 h-5 bg-toxic-lime/80 animate-pulse" />
										</div>
									</div>

									<div className="flex items-center justify-between px-4 py-2 bg-white/5 border-t border-white/10 text-xs text-text-secondary">
										<div className="flex items-center gap-4">
											<span>UTF-8</span>
											<span>Go</span>
										</div>
										<div className="flex items-center gap-2">
											<span className="w-2 h-2 rounded-full bg-toxic-lime animate-pulse" />
											<span>building...</span>
										</div>
									</div>
								</div>

								<div className="absolute -top-4 -right-4 w-24 h-24 border border-toxic-lime/20 rounded-lg" />
								<div className="absolute -bottom-4 -left-4 w-16 h-16 border border-white/10 rounded-lg" />

								<svg
									className="absolute -left-20 top-1/2 w-20 h-20 text-toxic-lime/20"
									viewBox="0 0 80 80"
								>
									<title>line</title>
									<path
										d="M0,40 Q40,40 40,0"
										fill="none"
										stroke="currentColor"
										strokeWidth="1"
										strokeDasharray="4 4"
									/>
								</svg>
							</div>
						</div>
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
