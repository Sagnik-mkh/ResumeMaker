"use client";

import { IconType } from "react-icons";
import {
	FaUser,
	FaFileAlt,
	FaBriefcase,
	FaGraduationCap,
	FaProjectDiagram,
	FaShapes,
	FaFileMedical,
} from "react-icons/fa";

export type SectionKey =
	| "personal"
	| "summary"
	| "experience"
	| "education"
	| "projects"
	| "skills";

export type SectionDefinition = {
	key: SectionKey;
	title: string;
	description: string;
	icon: IconType;
};

export const SECTION_DEFINITIONS: Record<SectionKey, SectionDefinition> = {
	personal: {
		key: "personal",
		title: "Personal details",
		description: "Name, contact details, and profile links.",
		icon: FaUser,
	},
	summary: {
		key: "summary",
		title: "Professional summary",
		description: "A short intro tailored to the role.",
		icon: FaFileAlt,
	},
	experience: {
		key: "experience",
		title: "Experience",
		description: "Work history, achievements, and impact.",
		icon: FaBriefcase,
	},
	education: {
		key: "education",
		title: "Education",
		description: "Degrees, schools, and timelines.",
		icon: FaGraduationCap,
	},
	projects: {
		key: "projects",
		title: "Projects",
		description: "Selected builds, contributions, and links.",
		icon: FaProjectDiagram,
	},
	skills: {
		key: "skills",
		title: "Skills",
		description: "Relevant technical and role-specific strengths.",
		icon: FaShapes,
	},
};

export const ADD_SECTION_DEFINITION: SectionDefinition = {
	key: "summary",
	title: "Add section",
	description: "Choose the next section you want to include in this resume.",
	icon: FaFileMedical,
};

export const OPTIONAL_SECTION_ORDER: Exclude<SectionKey, "personal">[] = [
	"summary",
	"experience",
	"education",
	"projects",
	"skills",
];
