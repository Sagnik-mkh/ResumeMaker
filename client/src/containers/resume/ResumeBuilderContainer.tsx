"use client";

import ResumeBuilder from "@/components/resume/ResumeBuilder";
import AddSectionSelector from "@/components/resume/presenters/AddSectionSelector";
import {
	EducationEditor,
	ExperienceEditor,
	PersonalDetailsEditor,
	ProjectsEditor,
	SkillsEditor,
	SummaryEditor,
} from "@/components/resume/editors/ResumeSectionEditors";
import { useResumeBuilder } from "@/hooks/resume/useResumeBuilder";

export default function ResumeBuilderContainer() {
	const {
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
	} = useResumeBuilder();

	return (
		<>
			<ResumeBuilder
				addedSections={addedSections}
				completedSections={completedSections}
				onAddSection={openSelector}
				onEditSection={openSection}
			/>

			{isSelectorOpen ? (
				<AddSectionSelector
					onClose={closeSelector}
					onSelect={addSection}
					availableSections={availableSections}
				/>
			) : null}

			{activeSection === "personal" ? (
				<PersonalDetailsEditor onClose={closeSection} />
			) : null}
			{activeSection === "summary" ? (
				<SummaryEditor onClose={closeSection} />
			) : null}
			{activeSection === "experience" ? (
				<ExperienceEditor onClose={closeSection} />
			) : null}
			{activeSection === "education" ? (
				<EducationEditor onClose={closeSection} />
			) : null}
			{activeSection === "projects" ? (
				<ProjectsEditor onClose={closeSection} />
			) : null}
			{activeSection === "skills" ? (
				<SkillsEditor onClose={closeSection} />
			) : null}
		</>
	);
}
