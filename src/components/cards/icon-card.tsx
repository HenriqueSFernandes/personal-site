import { Card } from "../ui/card";

interface IconCardProps {
	title: string;
	description: string;
	icon: React.ReactNode;
}

export default function IconCard({ title, description, icon }: IconCardProps) {
	return (
		<Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02]">
			<div className="flex items-start gap-4">
				<div className="p-3 rounded-lg bg-primary/10">
					<div className="h-6 w-6 text-primary">
						{icon}
					</div>
				</div>
				<div className="space-y-2">
					<h3 className="text-lg font-semibold text-foreground">
						{title}
					</h3>
					<p className="text-sm text-foreground/70">
						{description}
					</p>
				</div>
			</div>
		</Card>
	);
}
