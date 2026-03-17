"use client";

import { useResumeStore } from "@/store/resumeStore";
import { getResumeTitle } from "@/lib/resumeMetrics";
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

	return (
		<div className="theme-surface-solid h-full rounded-[28px] border border-[var(--theme-border-strong)] p-5 shadow-2xl shadow-black/20 sm:p-8 print:border-0 print:bg-white print:p-0 print:shadow-none">
			<div
				className={`mx-auto flex h-full max-w-[720px] flex-col rounded-[24px] bg-white text-slate-900 print:max-w-none print:rounded-none ${
					isModern
						? "overflow-hidden"
						: ""
				}`}
			>
				<div
					className={`pb-5 ${
						isModern
							? "bg-slate-950 px-6 py-8 text-white sm:px-10"
							: "border-b border-slate-200 px-6 py-8 sm:px-10"
					}`}
				>
					<p
						className={`text-xs font-semibold uppercase tracking-[0.32em] ${
							isModern ? "text-cyan-300" : "text-slate-500"
						}`}
					>
						Live Preview
					</p>
					<h2
						className={`mt-4 text-3xl font-semibold tracking-tight ${
							isModern ? "text-white" : "text-slate-950"
						}`}
					>
						{fullName || title}
					</h2>
					{contactItems.length > 0 ? (
						<p className={`mt-2 text-sm ${isModern ? "text-slate-300" : "text-slate-600"}`}>
							{contactItems.join(" • ")}
						</p>
					) : (
						<p className={`mt-2 text-sm ${isModern ? "text-slate-400" : "text-slate-400"}`}>
							Add email, phone, and profile links to complete the heading.
						</p>
					)}
				</div>

				<div className={`space-y-6 px-6 py-6 sm:px-10 ${isModern ? "bg-slate-50" : ""}`}>
					<section>
						<h3 className={`text-xs font-semibold uppercase tracking-[0.26em] ${isModern ? "text-cyan-700" : "text-slate-500"}`}>
							Summary
						</h3>
						<p className="mt-3 text-sm leading-7 text-slate-700">
							{resumeData.summary ||
								"Write a concise professional summary to frame your profile for recruiters."}
						</p>
					</section>

					<section>
						<h3 className={`text-xs font-semibold uppercase tracking-[0.26em] ${isModern ? "text-cyan-700" : "text-slate-500"}`}>
							Experience
						</h3>
						<div className="mt-3 space-y-4">
							{resumeData.experience.length > 0 ? (
								resumeData.experience.map((item, index) => (
									<div key={`${item.company}-${index}`} className="space-y-2">
										<div className="flex flex-wrap items-start justify-between gap-2">
											<div>
												<p className="text-base font-semibold text-slate-900">
													{item.role || "Role title"}
												</p>
												<p className="text-sm text-slate-600">
													{[item.company, item.location]
														.filter(Boolean)
														.join(" • ") || "Company • Location"}
												</p>
											</div>
											<p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
												{formatRange(item.startDate, item.endDate)}
											</p>
										</div>
										<ul className="space-y-1 text-sm leading-6 text-slate-700">
											{item.description.length > 0 &&
											item.description.some((point) => point.trim()) ? (
												item.description.map((point, pointIndex) => (
													<li key={pointIndex}>• {point}</li>
												))
											) : (
												<li>
													• Add measurable outcomes, scope, and technical depth for
													each role.
												</li>
											)}
										</ul>
									</div>
								))
							) : (
								<p className="text-sm text-slate-400">
									Add at least one role to show work history.
								</p>
							)}
						</div>
					</section>

					<section>
						<h3 className={`text-xs font-semibold uppercase tracking-[0.26em] ${isModern ? "text-cyan-700" : "text-slate-500"}`}>
							Projects
						</h3>
						<div className="mt-3 space-y-4">
							{resumeData.projects.length > 0 ? (
								resumeData.projects.map((project, index) => (
									<div key={`${project.name}-${index}`}>
										<div className="flex flex-wrap items-start justify-between gap-2">
											<div>
												<p className="text-base font-semibold text-slate-900">
													{project.name || "Project name"}
												</p>
												<p className="text-sm text-slate-600">
													{project.techStack.length > 0
														? project.techStack.join(", ")
														: "Add a tech stack"}
												</p>
											</div>
											<p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
												{formatRange(project.startDate, project.endDate)}
											</p>
										</div>
										<p className="mt-2 text-sm leading-6 text-slate-700">
											{project.description ||
												"Explain what you built, why it mattered, and what changed because of it."}
										</p>
									</div>
								))
							) : (
								<p className="text-sm text-slate-400">
									Showcase one or two projects to strengthen your portfolio story.
								</p>
							)}
						</div>
					</section>

					<section>
						<h3 className={`text-xs font-semibold uppercase tracking-[0.26em] ${isModern ? "text-cyan-700" : "text-slate-500"}`}>
							Education & Skills
						</h3>
						<div className="mt-3 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
							<div className="space-y-3">
								{resumeData.education.length > 0 ? (
									resumeData.education.map((item, index) => (
										<div key={`${item.school}-${index}`}>
											<p className="text-sm font-semibold text-slate-900">
												{item.degree || "Degree"}{item.school ? `, ${item.school}` : ""}
											</p>
											<p className="text-sm text-slate-600">
												{[item.location, formatRange(item.startDate, item.endDate)]
													.filter(Boolean)
													.join(" • ")}
											</p>
										</div>
									))
								) : (
									<p className="text-sm text-slate-400">
										Add your academic background or certifications.
									</p>
								)}
							</div>
							<div className="flex flex-wrap gap-2">
								{resumeData.skills.length > 0 ? (
									resumeData.skills.map((skill) => (
										<span
											key={skill}
											className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
										>
											{skill}
										</span>
									))
								) : (
									<p className="text-sm text-slate-400">
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
