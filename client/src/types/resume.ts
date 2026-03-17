export type PersonalInfo = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	linkedin?: string;
	github?: string;
};

export type Education = {
	school: string;
	degree: string;
	minor?: string;
	gpa?: number;
	location: string;
	startDate: string;
	endDate: string;
};

export type Experience = {
	company: string;
	role: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
};

export type Project = {
	name: string;
	description: string;
	techStack: string[];
	link?: string;
	startDate?: string;
	endDate?: string;
};

export type ResumeData = {
	personalInfo: PersonalInfo;
	summary: string;
	experience: Experience[];
	education: Education[];
	projects: Project[];
	skills: string[];
};

export type ResumeStore = {
	resumeData: ResumeData;
	updateSection: (data: Partial<ResumeData>) => void;
	resetResume: () => void;
};
