import { Button } from "@/components/ui/button";

interface ButtonProps {
	icon: React.ReactNode;
	label: string;
	href: string;
	linkType: "internal" | "external";
	variant?: "primary" | "outline";
}

export default function CustomButton({
	icon,
	label,
	href,
	linkType,
	variant = "primary",
}: ButtonProps) {
	return (
		<Button
			asChild
			size="lg"
			variant={variant === "primary" ? null : "outline"}
			className={`p-2 gap-2 ${variant === "primary"
					? "bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 p-4"
					: "border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-105 bg-transparent"
				}`}
		>
			{linkType === "internal" ? (
				<a href={href} aria-label="About Me">
					<div className="h-5 w-5">{icon}</div>
					<span className="font-medium">{label}</span>
				</a>
			) : (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={label}
				>
					<div className="h-5 w-5">{icon}</div>
					<span className="font-medium">{label}</span>
				</a>
			)}
		</Button>
	);
}
