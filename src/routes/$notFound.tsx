import { createFileRoute, Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import Navigation from "@/components/Navigation";

export const Route = createFileRoute("/$notFound")({
	component: NotFound,
});

function NotFound() {
	return (
		<div className="relative min-h-screen bg-dark-void flex flex-col">
			<div className="grain-overlay" />

			<Navigation />

			<main className="flex-1 flex items-center justify-center px-6">
				<div className="text-center max-w-lg mx-auto">
					<div
						className="float-animation select-none"
						style={{ lineHeight: 1 }}
					>
						<span
							className="text-gradient font-display block"
							style={{ fontSize: "clamp(6rem, 20vw, 12rem)", fontWeight: 900 }}
						>
							404
						</span>
					</div>

					<h1 className="font-display text-2xl sm:text-3xl font-bold text-white mt-4 mb-3">
						You seem lost.
					</h1>

					<p className="font-body text-text-secondary text-base sm:text-lg leading-relaxed mb-2">
						This page doesn't exist. We checked twice.
					</p>
					<p className="font-body text-text-secondary text-sm leading-relaxed mb-10">
						Maybe you mistyped the URL, maybe a link lied to you, or maybe you
						were just exploring. Either way, nothing to see here.
					</p>

					<Link
						to="/"
						className="group inline-flex items-center gap-3 px-6 py-3 bg-toxic-lime text-dark-void rounded font-body text-sm font-medium hover:bg-white transition-all duration-300 hover:shadow-glow"
					>
						<Home size={18} />
						TAKE ME HOME
						<span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300">
							→
						</span>
					</Link>
				</div>
			</main>
		</div>
	);
}
