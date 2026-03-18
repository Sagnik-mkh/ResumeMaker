"use client";

import { getResumeTitle } from "@/lib/resumeMetrics";
import { useResumeStore } from "@/store/resumeStore";
import { ResumeData } from "@/types/resume";

function formatRange(start?: string, end?: string) {
	if (!start && !end) {
		return "Add dates";
	}

	return [start || "Start", end || "Present"].join(" - ");
}

type ResumePreviewProps = {
	resumeData?: ResumeData;
	template?: "executive" | "modern";
};

export default function ResumePreview({
	resumeData: resumeDataProp,
	template = "executive",
}: ResumePreviewProps) {
	const { resumeData: storeResumeData } = useResumeStore();
	const resumeData = resumeDataProp || storeResumeData;
	const title = getResumeTitle(resumeData);
	const fullName = [
		resumeData.personalInfo.firstName,
		resumeData.personalInfo.lastName,
	]
		.filter(Boolean)
		.join(" ");
	const contactItems = [
		resumeData.personalInfo.email,
		resumeData.personalInfo.phone,
		resumeData.personalInfo.linkedin,
		resumeData.personalInfo.github,
	].filter(Boolean);
	const isModern = template === "modern";
	const sectionTitleClass = isModern
		? "theme-document-section-title-modern"
		: "theme-document-section-title";
	const headingClass = isModern
		? "theme-document-heading-modern"
		: "theme-document-heading";
	const copyClass = isModern
		? "theme-document-copy-modern"
		: "theme-document-copy";
	const softCopyClass = isModern
		? "theme-document-copy-modern-soft"
		: "theme-document-copy-soft";
	const faintCopyClass = isModern
		? "theme-document-copy-modern-faint"
		: "theme-document-copy-faint";
	const pillClass = isModern
		? "theme-document-pill-modern"
		: "theme-document-pill";

	return (
		<div className="theme-surface-solid h-full rounded-[28px] border border-[var(--theme-border-strong)] p-5 shadow-2xl shadow-black/20 sm:p-8 print:border-0 print:bg-white print:p-0 print:shadow-none">
			<div
				className={`theme-document-shell mx-auto flex h-full max-w-[720px] flex-col rounded-[24px] print:max-w-none print:rounded-none ${
					isModern ? "overflow-hidden" : ""
				}`}
			>
				<div
					className={`pb-5 ${
						isModern
							? "theme-document-modern px-6 py-8 sm:px-10"
							: "border-b border-[rgba(69,123,157,0.18)] px-6 py-8 sm:px-10"
					}`}
				>
					<p className={`${sectionTitleClass} text-xs font-semibold uppercase tracking-[0.32em]`}>
						Live Preview
					</p>
					<h2 className={`${headingClass} mt-4 text-3xl font-semibold tracking-tight`}>
						{fullName || title}
					</h2>
					{contactItems.length > 0 ? (
						<p className={`${softCopyClass} mt-2 text-sm`}>
							{contactItems.join(" | ")}
						</p>
					) : (
						<p className={`${faintCopyClass} mt-2 text-sm`}>
							Add email, phone, and profile links to complete the heading.
						</p>
					)}
				</div>

				<div className="space-y-6 px-6 py-6 sm:px-10">
					<section>
						<h3 className={`${sectionTitleClass} text-xs font-semibold uppercase tracking-[0.26em]`}>
							Summary
						</h3>
						<p className={`${copyClass} mt-3 text-sm leading-7`}>
							{resumeData.summary ||
								"Write a concise professional summary to frame your profile for recruiters."}
						</p>
					</section>

					<section>
						<h3 className={`${sectionTitleClass} text-xs font-semibold uppercase tracking-[0.26em]`}>
							Experience
						</h3>
						<div className="mt-3 space-y-4">
							{resumeData.experience.length > 0 ? (
								resumeData.experience.map((item, index) => (
									<div key={`${item.company}-${index}`} className="space-y-2">
										<div className="flex flex-wrap items-start justify-between gap-2">
											<div>
												<p className={`${headingClass} text-base font-semibold`}>
													{item.role || "Role title"}
												</p>
												<p className={`${softCopyClass} text-sm`}>
													{[item.company, item.location]
														.filter(Boolean)
														.join(" | ") || "Company | Location"}
												</p>
											</div>
											<p className={`${faintCopyClass} text-xs font-medium uppercase tracking-[0.2em]`}>
												{formatRange(item.startDate, item.endDate)}
											</p>
										</div>
										<ul className={`${copyClass} space-y-1 text-sm leading-6`}>
											{item.description.length > 0 &&
											item.description.some((point) => point.trim()) ? (
												item.description.map((point, pointIndex) => (
													<li key={pointIndex}>- {point}</li>
												))
											) : (
												<li>
													- Add measurable outcomes, scope, and technical depth for each
													role.
												</li>
											)}
										</ul>
									</div>
								))
							) : (
								<p className={`${faintCopyClass} text-sm`}>
									Add at least one role to show work history.
								</p>
							)}
						</div>
					</section>

					<section>
						<h3 className={`${sectionTitleClass} text-xs font-semibold uppercase tracking-[0.26em]`}>
							Projects
						</h3>
						<div className="mt-3 space-y-4">
							{resumeData.projects.length > 0 ? (
								resumeData.projects.map((project, index) => (
									<div key={`${project.name}-${index}`}>
										<div className="flex flex-wrap items-start justify-between gap-2">
											<div>
												<p className={`${headingClass} text-base font-semibold`}>
													{project.name || "Project name"}
												</p>
												<p className={`${softCopyClass} text-sm`}>
													{project.techStack.length > 0
														? project.techStack.join(", ")
														: "Add a tech stack"}
												</p>
											</div>
											<p className={`${faintCopyClass} text-xs font-medium uppercase tracking-[0.2em]`}>
												{formatRange(project.startDate, project.endDate)}
											</p>
										</div>
										<p className={`${copyClass} mt-2 text-sm leading-6`}>
											{project.description ||
												"Explain what you built, why it mattered, and what changed because of it."}
										</p>
									</div>
								))
							) : (
								<p className={`${faintCopyClass} text-sm`}>
									Showcase one or two projects to strengthen your portfolio story.
								</p>
							)}
						</div>
					</section>

					<section>
						<h3 className={`${sectionTitleClass} text-xs font-semibold uppercase tracking-[0.26em]`}>
							Education & Skills
						</h3>
						<div className="mt-3 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
							<div className="space-y-3">
								{resumeData.education.length > 0 ? (
									resumeData.education.map((item, index) => (
										<div key={`${item.school}-${index}`}>
											<p className={`${headingClass} text-sm font-semibold`}>
												{item.degree || "Degree"}
												{item.school ? `, ${item.school}` : ""}
											</p>
											<p className={`${softCopyClass} text-sm`}>
												{[item.location, formatRange(item.startDate, item.endDate)]
													.filter(Boolean)
													.join(" | ")}
											</p>
										</div>
									))
								) : (
									<p className={`${faintCopyClass} text-sm`}>
										Add your academic background or certifications.
									</p>
								)}
							</div>
							<div className="flex flex-wrap gap-2">
								{resumeData.skills.length > 0 ? (
									resumeData.skills.map((skill) => (
										<span key={skill} className={`${pillClass} rounded-full px-3 py-1 text-xs font-medium`}>
											{skill}
										</span>
									))
								) : (
									<p className={`${faintCopyClass} text-sm`}>
										List tools, languages, and domain strengths here.
									</p>
								)}
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
