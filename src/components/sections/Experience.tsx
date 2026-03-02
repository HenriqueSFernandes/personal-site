import { Briefcase, FlaskConical, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { type Experience, experiences } from "@/data/experience";

const TYPE_META = {
	work: {
		icon: Briefcase,
		label: "WORK",
	},
	community: {
		icon: Users,
		label: "COMMUNITY",
	},
	research: {
		icon: FlaskConical,
		label: "RESEARCH",
	},
} as const;

function TimelineCard({
	experience,
	index,
	isVisible,
	side,
}: {
	experience: Experience;
	index: number;
	isVisible: boolean;
	side: "left" | "right";
}) {
	const isOngoing = experience.endDate === null;
	const { icon: Icon, label } =
		TYPE_META[experience.type as keyof typeof TYPE_META];

	return (
		<div
			className={`transition-all duration-700 ${
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
			} ${side === "left" ? "lg:pr-12" : "lg:pl-12"}`}
			style={{ transitionDelay: `${index * 120}ms` }}
		>
			<div className="group relative bg-white/5 border border-white/10 rounded-lg p-6 hover:border-toxic-lime/40 transition-all duration-500 hover:-translate-y-1">
				<div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-toxic-lime/30 to-transparent" />

				<div className="flex items-start justify-between gap-4 mb-3">
					<div className="flex items-center gap-2">
						<Icon size={14} className="text-toxic-lime shrink-0 mt-0.5" />
						<span className="font-body text-xs text-toxic-lime tracking-widest">
							{label}
						</span>
					</div>
					{isOngoing ? (
						<span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-toxic-lime/10 border border-toxic-lime/30 rounded text-xs font-body text-toxic-lime tracking-widest shrink-0">
							<span className="w-1.5 h-1.5 rounded-full bg-toxic-lime animate-pulse" />
							PRESENT
						</span>
					) : null}
				</div>

				<h3 className="font-display text-lg text-white leading-tight mb-1">
					{experience.title}
				</h3>
				<p className="font-body text-sm text-text-secondary mb-3">
					{experience.organization}
				</p>

				<p className="font-body text-xs text-text-secondary/60 tracking-wide mb-3">
					{experience.startDate} — {experience.endDate ?? "Present"}
				</p>

				{experience.description ? (
					<p className="font-body text-sm text-text-secondary leading-relaxed">
						{experience.description}
					</p>
				) : null}
			</div>
		</div>
	);
}

function TimelineNode({ isOngoing }: { isOngoing: boolean }) {
	return (
		<div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
			<div
				className={`w-3 h-3 rounded-full border-2 border-toxic-lime ${
					isOngoing ? "bg-toxic-lime pulse-glow" : "bg-dark-void"
				}`}
			/>
		</div>
	);
}

export default function ExperienceSection() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

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
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="experience"
			ref={sectionRef}
			className="relative py-24 lg:py-32 overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-charcoal via-dark-void to-charcoal" />
			<div
				className="absolute inset-0 opacity-[0.02]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(208,255,148,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(208,255,148,0.5) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>

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
							WHERE I'VE BEEN
						</span>
						<h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mt-2">
							MY <span className="text-toxic-lime">EXPERIENCE</span>
						</h2>
					</div>

					<div className="relative">
						<div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

						<div className="flex flex-col gap-10 lg:gap-0">
							{experiences.map((exp, index) => {
								const side: "left" | "right" =
									index % 2 === 0 ? "left" : "right";

								return (
									<div
										key={exp.id}
										className="relative lg:grid lg:grid-cols-2 lg:gap-0 lg:mb-10"
									>
										<TimelineNode isOngoing={exp.endDate === null} />

										{side === "left" ? (
											<>
												<TimelineCard
													experience={exp}
													index={index}
													isVisible={isVisible}
													side="left"
												/>
												<div />
											</>
										) : (
											<>
												<div />
												<TimelineCard
													experience={exp}
													index={index}
													isVisible={isVisible}
													side="right"
												/>
											</>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
