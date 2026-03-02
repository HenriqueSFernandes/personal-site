export type ExperienceType = "work" | "community" | "research";

export interface Experience {
	id: string;
	title: string;
	organization: string;
	type: ExperienceType;
	startDate: string;
	endDate: string | null;
	description?: string;
}

export const experiences: Experience[] = [
	{
		id: "haslab-research-fellow",
		title: "Research Fellow",
		organization: "HASLab, INESC TEC",
		type: "research",
		startDate: "Oct 2025",
		endDate: null,
		description:
			"For my Research Initiation Grant at INESC TEC, I have been working on enhancing the security of DevOps environments, focusing on GitHub Actions and GitLab pipelines. My work involves analyzing current security limitations, evaluating static and dynamic analysis tools, and developing customized mechanisms to improve the safety of automation workflows.",
	},
	{
		id: "niaefeup-co-head-projects",
		title: "Co-Head of Projects",
		organization: "NIAEFEUP",
		type: "community",
		startDate: "Jun 2025",
		endDate: null,
		description:
			"Manage project scope, kick off new initiatives, and support ongoing technical work. Contribute to the development of UNI, a mobile app for student services covering schedules, exams, and dining. Develop and maintain infrastructure and DevOps for backend systems on the NIployments project.",
	},
	{
		id: "acmfeup-president-ga-head-dev",
		title: "President of the General Assembly & Head of Development",
		organization: "ACM FEUP",
		type: "community",
		startDate: "May 2025",
		endDate: null,
		description:
			"Oversee the internal governance of the organization, ensuring activities align with its statutes and strategic direction. Previously served as Director of the Events Department, where I planned, coordinated, and executed a variety of technical and soft-skills workshops.",
	},
	{
		id: "armis-internship",
		title: "Software Engineer Intern",
		organization: "ARMIS Group",
		type: "work",
		startDate: "Feb 2025",
		endDate: "Jul 2025",
		description:
			"For my Capstone Project at FEUP, I interned at Armis where I worked with Intelligent Electronic Devices (IEDs) and developed a simulation environment for them. My work focused on using Microsoft technologies and a microservices architecture to create a scalable testing framework.",
	},
	{
		id: "niaefeup-member",
		title: "Member",
		organization: "NIAEFEUP",
		type: "community",
		startDate: "Mar 2025",
		endDate: "Jun 2025",
	},
	{
		id: "niaefeup-recruit",
		title: "Recruit",
		organization: "NIAEFEUP",
		type: "community",
		startDate: "Oct 2024",
		endDate: "Mar 2025",
	},
	{
		id: "acmfeup-head-events",
		title: "Head of Events",
		organization: "ACM FEUP",
		type: "community",
		startDate: "Oct 2023",
		endDate: "May 2025",
		description:
			"Organised and managed the association's events calendar, coordinating workshops, talks, and community activities.",
	},
];
