import { createFileRoute } from "@tanstack/react-router";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import ExperienceSection from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

const jsonLd = JSON.stringify({
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Henrique Fernandes",
	url: "https://henriquesf.me",
	sameAs: [
		"https://github.com/HenriqueSFernandes",
		"https://www.linkedin.com/in/-henriquesfernandes/",
	],
	jobTitle: "Software Engineer",
	email: "henriquesardofernandes@gmail.com",
});

export const Route = createFileRoute("/")({
	head: () => ({
		scripts: [
			{
				type: "application/ld+json",
				children: jsonLd,
			},
		],
	}),
	component: App,
});

function App() {
	return (
		<div className="relative min-h-screen bg-dark-void">
			<div className="grain-overlay" />

			<Navigation />

			<main>
				<Hero />
				<About />
				<ExperienceSection />
				<Projects />
				<Contact />
			</main>

			<footer className="relative py-8 bg-dark-void border-t border-white/5">
				<div className="w-full px-6 sm:px-8 lg:px-12">
					<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
						<p className="font-body text-sm text-text-secondary">
							© {new Date().getFullYear()} Henrique Fernandes. All rights
							reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
