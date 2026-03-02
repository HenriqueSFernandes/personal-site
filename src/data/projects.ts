export interface Project {
	id: number;
	title: string;
	description: string;
	category: string;
	teamSize: number;
	technologies: string[];
	githubUrl?: string;
	demoUrl?: string;
	color: string;
}

export const projects: Project[] = [
	{
		id: 1,
		title: "CherryPick",
		description:
			"Cross-format recommendation platform that takes a book, movie, show, or album you love and matches it with complementary picks from other media to capture the same vibe. Developed for the ShiftAPPens 2025 Hackathon.",
		category: "Hackathon Project",
		teamSize: 4,
		technologies: ["Next.js", "Express.js", "Appwrite"],
		githubUrl: "https://github.com/HenriqueSFernandes/CherryPick",
		color: "#d0ff94",
	},
	{
		id: 2,
		title: "ClipNest",
		description:
			"AI-powered bookmarking tool that organizes saved webpages into project folders, extracts and indexes their content, and lets you conversationally search and explore them through a contextual chatbot.",
		category: "Personal Project",
		teamSize: 1,
		technologies: ["Next.js", "Elysia.js", "PostgreSQL", "Docker"],
		githubUrl: "https://github.com/HenriqueSFernandes/ClipNest/",
		demoUrl: "https://clipnest.cloud/",
		color: "#94ffd0",
	},
	{
		id: 3,
		title: "UNI",
		description:
			"UNI is a project developed by NIAEFEUP to help students of the University of Porto to manage their academic life, including useful features such as upcoming classes and exams. It is a mobile app that is available for both Android and iOS, and is developed using the Flutter framework. Currently, it has over 5000 monthly active users.",
		category: "NIAEFEUP",
		teamSize: 65,
		technologies: ["Flutter", "NestJS"],
		githubUrl: "https://github.com/niaefeup/uni",
		demoUrl:
			"https://play.google.com/store/apps/details?id=pt.up.fe.ni.uni&hl=pt_PT",
		color: "#ff94d0",
	},
	{
		id: 4,
		title: "NIployments",
		description:
			"Infrastructure project developed by NIAEFEUP to manage the deployment of services and applications in our servers, using technologies such as Docker, Kubernetes, and Pulumi.",
		category: "NIAEFEUP",
		teamSize: 12,
		technologies: ["Kubernetes", "Docker", "Ansible", "DevOps"],
		githubUrl: "https://github.com/NIAEFEUP/niployments/",
		color: "#94d0ff",
	},
	{
		id: 5,
		title: "iNIcio",
		description:
			"Recruitment website developed by NIAEFEUP to help with the recruitment of new members, with features such as application forms, scheduling of interviews, and management of candidates.",
		category: "NIAEFEUP",
		teamSize: 4,
		technologies: ["Next.js"],
		githubUrl: "https://github.com/NIAEFEUP/iNIcio/",
		demoUrl: "https://inicio.niaefeup.pt",
		color: "#ffd094",
	},
	{
		id: 6,
		title: "ProGram",
		description:
			"ProGram is a social networking platform being developed by a startup which aims to connect programmers with like-minded individuals. The need for a specialized space where technology professionals can connect, collaborate, and share knowledge drives this initiative. By providing an interactive and supportive environment, ProGram seeks to fill this gap within the tech community.",
		category: "Academic Project",
		teamSize: 4,
		technologies: ["Laravel"],
		githubUrl: "https://github.com/henriqueSFernandes/program",
		color: "#d094ff",
	},
];
