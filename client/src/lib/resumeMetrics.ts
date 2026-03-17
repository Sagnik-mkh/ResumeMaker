import { ResumeData } from "@/types/resume";

type MetricItem = {
	label: string;
	done: boolean;
};

export function getResumeMetricItems(resumeData: ResumeData): MetricItem[] {
	return [
		{
			label: "Personal details",
			done: Boolean(
				resumeData.personalInfo.firstName ||
					resumeData.personalInfo.lastName ||
					resumeData.personalInfo.email,
			),
		},
		{
			label: "Summary",
			done: Boolean(resumeData.summary.trim()),
		},
		{
			label: "Experience",
			done: resumeData.experience.length > 0,
		},
		{
			label: "Education",
			done: resumeData.education.length > 0,
		},
		{
			label: "Projects",
			done: resumeData.projects.length > 0,
		},
		{
			label: "Skills",
			done: resumeData.skills.length > 0,
		},
	];
}

export function getCompletedSectionCount(resumeData: ResumeData) {
	return getResumeMetricItems(resumeData).filter((item) => item.done).length;
}

export function getResumeStrengthScore(resumeData: ResumeData) {
	const completionScore =
		(getCompletedSectionCount(resumeData) /
			getResumeMetricItems(resumeData).length) *
		70;
	const experienceDepth = Math.min(resumeData.experience.length * 8, 16);
	const projectDepth = Math.min(resumeData.projects.length * 5, 10);
	const skillDepth = Math.min(resumeData.skills.length * 1.2, 6);

	return Math.min(
		100,
		Math.round(completionScore + experienceDepth + projectDepth + skillDepth),
	);
}

export function getResumeTitle(resumeData: ResumeData) {
	const fullName = [
		resumeData.personalInfo.firstName,
		resumeData.personalInfo.lastName,
	]
		.filter(Boolean)
		.join(" ");

	if (fullName) {
		return `${fullName}'s Resume`;
	}

	const firstRole = resumeData.experience[0]?.role || resumeData.projects[0]?.name;
	return firstRole ? `${firstRole} Resume` : "Untitled Resume";
}

export function getResumeHighlights(resumeData: ResumeData) {
	return [
		`${resumeData.experience.length} experience entries`,
		`${resumeData.projects.length} featured projects`,
		`${resumeData.skills.length} key skills`,
	];
}
