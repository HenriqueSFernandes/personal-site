export interface Education {
	degree: string;
	institution: string;
	startYear: string;
	endYear: string | null;
}

export const education: Education[] = [
	{
		degree: "MSc in Informatics and Computing Engineering",
		institution: "FEUP - Faculty of Engineering, University of Porto",
		startYear: "2025",
		endYear: null,
	},
	{
		degree: "BSc in Informatics and Computing Engineering",
		institution: "FEUP - Faculty of Engineering, University of Porto",
		startYear: "2022",
		endYear: "2025",
	},
	{
		degree: "Classical Piano (5th Degree)",
		institution: "Conservatório de Música de Aveiro Calouste Gulbenkian",
		startYear: "2013",
		endYear: "2019",
	},
];
