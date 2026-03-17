"use client";

import SectionCard from "@/components/resume/presenters/SectionCard";
import {
	ADD_SECTION_DEFINITION,
	SECTION_DEFINITIONS,
	SectionKey,
} from "@/components/resume/resumeSections";
import { FaFileContract } from "react-icons/fa6";

type ResumeBuilderProps = {
	addedSections: SectionKey[];
	completedSections: number;
	onAddSection: () => void;
	onEditSection: (section: SectionKey) => void;
};

export default function ResumeBuilder({
	addedSections,
	completedSections,
	onAddSection,
	onEditSection,
}: ResumeBuilderProps) {
	const completionPercent = Math.round((completedSections / 6) * 100);

	return (
		<div className="space-y-5">
			<div className="theme-surface rounded-[28px] p-5">
				<p className="theme-eyebrow text-xs font-medium uppercase tracking-[0.3em]">
					Resume Setup
				</p>
				<div className="mt-3 flex items-end justify-between gap-3">
					<h2 className="theme-text-heading text-lg font-semibold">
						Edit one section at a time
					</h2>
					<p className="theme-text-accent text-2xl font-semibold">
						{completionPercent}%
					</p>
				</div>
				<p className="theme-text-soft mt-2 text-sm leading-6">
					Complete the core sections first, then add optional content for depth.
				</p>
				<div className="theme-progress-track mt-4 h-2 rounded-full">
					<div
						className="theme-progress-fill h-2 rounded-full"
						style={{ width: `${completionPercent}%` }}
					/>
				</div>
				<div className="theme-surface-solid theme-text-muted mt-4 rounded-2xl border border-[--theme-border] px-4 py-2 text-xs">
					{completedSections} of 6 sections completed
				</div>
				<div className="theme-surface-soft mt-4 rounded-2xl p-4 text-sm leading-6 theme-text-soft">
					Focused workflow: open a section, save it, and watch the preview update
					on the right instantly.
				</div>
			</div>

			<div className="space-y-4">
				<h3 className="theme-text-heading text-sm font-semibold uppercase tracking-[0.24em]">
					Resume Sections
				</h3>
			</div>

			{addedSections.map((section) => {
				const { title, description, icon } =
					SECTION_DEFINITIONS[section];

				return (
					<SectionCard
						key={section}
						title={title}
						description={description}
						icon={icon}
						onClick={() => onEditSection(section)}
					/>
				);
			})}

			<button
				onClick={onAddSection}
				className="theme-button-tertiary flex w-full items-center justify-center gap-3 rounded-[28px] px-5 py-4 text-sm font-semibold transition"
			>
				<FaFileContract className="theme-text-accent" />
				<span className="theme-text-main">{ADD_SECTION_DEFINITION.title}</span>
			</button>
		</div>
	);
}
