"use client";

import { useState } from "react";
import { useResumeStore } from "@/store/resumeStore";
import {
	OPTIONAL_SECTION_ORDER,
	SectionKey,
} from "@/components/resume/resumeSections";
import { getCompletedSectionCount } from "@/lib/resumeMetrics";

function getInitialAddedSections(
	resumeData: ReturnType<typeof useResumeStore>["resumeData"],
) {
	const sections: SectionKey[] = ["personal"];

	if (resumeData.summary) {
		sections.push("summary");
	}
	if (resumeData.experience.length > 0) {
		sections.push("experience");
	}
	if (resumeData.education.length > 0) {
		sections.push("education");
	}
	if (resumeData.projects.length > 0) {
		sections.push("projects");
	}
	if (resumeData.skills.length > 0) {
		sections.push("skills");
	}

	return sections;
}

export function useResumeBuilder() {
	const { resumeData } = useResumeStore();
	const [activeSection, setActiveSection] = useState<SectionKey | null>(null);
	const [isSelectorOpen, setIsSelectorOpen] = useState(false);
	const [addedSections, setAddedSections] = useState<SectionKey[]>(() =>
		getInitialAddedSections(resumeData),
	);

	const completedSections = getCompletedSectionCount(resumeData);

	const availableSections = OPTIONAL_SECTION_ORDER.filter(
		(section) => !addedSections.includes(section),
	);

	function openSection(section: SectionKey) {
		setActiveSection(section);
	}

	function closeSection() {
		setActiveSection(null);
	}

	function openSelector() {
		setIsSelectorOpen(true);
	}

	function closeSelector() {
		setIsSelectorOpen(false);
	}

	function addSection(section: Exclude<SectionKey, "personal">) {
		setAddedSections((current) =>
			current.includes(section) ? current : [...current, section],
		);
		setIsSelectorOpen(false);
		setActiveSection(section);
	}

	return {
		activeSection,
		addSection,
		addedSections,
		availableSections,
		closeSection,
		closeSelector,
		completedSections,
		isSelectorOpen,
		openSection,
		openSelector,
		resumeData,
	};
}
