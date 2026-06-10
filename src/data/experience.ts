export type ExperienceType = "work" | "community" | "research";
export type ExperienceStatus = "upcoming" | "current" | "past";

const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export function parseDate(dateStr: string): Date {
	const [monthStr, yearStr] = dateStr.split(" ");
	const monthIndex = MONTHS.indexOf(monthStr);
	if (monthIndex === -1) {
		throw new Error(`Invalid month: ${monthStr}`);
	}
	const year = Number.parseInt(yearStr, 10);
	return new Date(year, monthIndex, 1);
}

export function parseEndDate(dateStr: string): Date {
	const [monthStr, yearStr] = dateStr.split(" ");
	const monthIndex = MONTHS.indexOf(monthStr);
	if (monthIndex === -1) {
		throw new Error(`Invalid month: ${monthStr}`);
	}
	const year = Number.parseInt(yearStr, 10);
	// Last day of the month so the role is still "current" until the month ends
	return new Date(year, monthIndex + 1, 0);
}

export function formatDate(date: Date): string {
	return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export interface Experience {
	id: string;
	title: string;
	organization: string;
	type: ExperienceType;
	startDate: Date;
	endDate: Date | null;
	description?: string;
}

export function getExperienceStatus(
	exp: Experience,
	today = new Date(),
): ExperienceStatus {
	const normalizedToday = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate(),
	);

	if (exp.startDate > normalizedToday) {
		return "upcoming";
	}
	if (exp.endDate === null || exp.endDate >= normalizedToday) {
		return "current";
	}
	return "past";
}

export function sortExperiences(experiences: Experience[]): Experience[] {
	const today = new Date();
	return [...experiences].sort((a, b) => {
		const statusA = getExperienceStatus(a, today);
		const statusB = getExperienceStatus(b, today);

		const order = { upcoming: 0, current: 1, past: 2 };
		if (order[statusA] !== order[statusB]) {
			return order[statusA] - order[statusB];
		}

		// Within the same group, sort by start date descending (newest first)
		return b.startDate.getTime() - a.startDate.getTime();
	});
}

export const experiences: Experience[] = [
	{
		id: "cloudflare-internship",
		title: "Software Engineer Intern",
		organization: "Cloudflare",
		type: "work",
		startDate: parseDate("Jul 2026"),
		endDate: parseEndDate("Sep 2026"),
		description: "",
	},
	{
		id: "haslab-research-fellow",
		title: "Research Fellow",
		organization: "HASLab, INESC TEC",
		type: "research",
		startDate: parseDate("Oct 2025"),
		endDate: parseEndDate("Jul 2026"),
		description:
			"For my Research Initiation Grant at INESC TEC, I have been working on enhancing the security of DevOps environments, focusing on GitHub Actions and GitLab pipelines. My work involves analyzing current security limitations, evaluating static and dynamic analysis tools, and developing customized mechanisms to improve the safety of automation workflows.",
	},
	{
		id: "niaefeup-co-head-projects",
		title: "Co-Head of Projects",
		organization: "NIAEFEUP",
		type: "community",
		startDate: parseDate("Jun 2025"),
		endDate: parseEndDate("May 2026"),
		description:
			"Manage project scope, kick off new initiatives, and support ongoing technical work. Contribute to the development of UNI, a mobile app for student services covering schedules, exams, and dining. Develop and maintain infrastructure and DevOps for backend systems on the NIployments project.",
	},
  {
		id: "acmfeup-member",
		title: "Member",
		organization: "ACM FEUP",
		type: "community",
		startDate: parseDate("Jun 2026"),
		endDate: null,
		description:
			"After being part of the board for 3 years, I continue to contribute to ACM FEUP as a regular member, supporting the association's mission and activities in a more flexible capacity.",
  },
	{
		id: "acmfeup-president-ga-head-dev",
		title: "President of the General Assembly & Head of Development",
		organization: "ACM FEUP",
		type: "community",
		startDate: parseDate("May 2025"),
		endDate: parseEndDate("May 2026"),
		description:
			"Oversee the internal governance of the organization, ensuring activities align with its statutes and strategic direction. Previously served as Director of the Events Department, where I planned, coordinated, and executed a variety of technical and soft-skills workshops.",
	},
	{
		id: "armis-internship",
		title: "Software Engineer Intern",
		organization: "ARMIS Group",
		type: "work",
		startDate: parseDate("Feb 2025"),
		endDate: parseEndDate("Jul 2025"),
		description:
			"For my Capstone Project at FEUP, I interned at Armis where I worked with Intelligent Electronic Devices (IEDs) and developed a simulation environment for them. My work focused on using Microsoft technologies and a microservices architecture to create a scalable testing framework.",
	},
	{
		id: "niaefeup-member",
		title: "Member",
		organization: "NIAEFEUP",
		type: "community",
		startDate: parseDate("Mar 2025"),
		endDate: null,
	},
	{
		id: "niaefeup-recruit",
		title: "Recruit",
		organization: "NIAEFEUP",
		type: "community",
		startDate: parseDate("Oct 2024"),
		endDate: parseEndDate("Mar 2025"),
	},
	{
		id: "acmfeup-head-events",
		title: "Head of Events",
		organization: "ACM FEUP",
		type: "community",
		startDate: parseDate("Oct 2023"),
		endDate: parseEndDate("May 2025"),
		description:
			"Organised and managed the association's events calendar, coordinating workshops, talks, and community activities.",
	},
];
