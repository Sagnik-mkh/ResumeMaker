"use client";

import ModalShell from "./ModalShell";
import {
	SECTION_DEFINITIONS,
	SectionKey,
} from "@/components/resume/resumeSections";

type AddSectionSelectorProps = {
	onClose: () => void;
	onSelect: (section: Exclude<SectionKey, "personal">) => void;
	availableSections: Exclude<SectionKey, "personal">[];
};

export default function AddSectionSelector({
	onClose,
	onSelect,
	availableSections,
}: AddSectionSelectorProps) {
	return (
		<ModalShell
			title="Add section"
			description="Choose the next section you want to add to the resume builder."
			onClose={onClose}
		>
			<div className="space-y-4">
				{availableSections.length === 0 ? (
					<div className="theme-surface rounded-[28px] p-5 text-sm theme-text-soft">
						All available sections have already been added.
					</div>
				) : null}

				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
					{availableSections.map((section) => {
						const {
							title,
							description,
							icon: Icon,
						} = SECTION_DEFINITIONS[section];

						return (
							<button
								key={section}
								type="button"
								onClick={() => onSelect(section)}
								className="theme-surface-soft hover:border-[color:color-mix(in_srgb,var(--theme-accent)_40%,transparent)] flex flex-col justify-between rounded-[28px] p-5 text-left transition hover:bg-[color:var(--theme-surface-strong)]"
							>
								<div>
									<div className="flex items-center gap-3">
										<div className="theme-surface-solid theme-text-accent flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--theme-border-strong)]">
											<Icon className="w-5 h-5" />
										</div>
										<h4 className="theme-text-heading text-lg font-semibold">
											{title}
										</h4>
									</div>
									<p className="theme-text-soft mt-3 text-sm leading-6">
										{description}
									</p>
								</div>
							</button>
						);
					})}
				</div>
			</div>
		</ModalShell>
	);
}
