"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import ResumePreview from "@/components/resume/ResumePreview";
import { ResumeData } from "@/types/resume";
import { useResumeStore } from "@/store/resumeStore";
import {
	HiOutlineArrowDownTray,
	HiOutlineSparkles,
	HiOutlineSwatch,
} from "react-icons/hi2";

type ResumeTemplate = "executive" | "modern";

const fieldClassName = "theme-input w-full rounded-2xl px-4 py-3 text-sm";
const sectionClassName = "theme-surface rounded-[28px] p-5";

function createEmptyExperience() {
	return {
		company: "",
		role: "",
		location: "",
		startDate: "",
		endDate: "",
		description: [""],
	};
}

function createEmptyEducation() {
	return {
		school: "",
		degree: "",
		minor: "",
		gpa: undefined,
		location: "",
		startDate: "",
		endDate: "",
	};
}

function createEmptyProject() {
	return {
		name: "",
		description: "",
		techStack: [],
		link: "",
		startDate: "",
		endDate: "",
	};
}

function createGeneratedSummary(data: ResumeData) {
	const fullName = [data.personalInfo.firstName, data.personalInfo.lastName]
		.filter(Boolean)
		.join(" ");
	const headline = data.experience[0]?.role || data.projects[0]?.name || "candidate";
	const company = data.experience[0]?.company;
	const skills = data.skills.filter(Boolean).slice(0, 4).join(", ");

	return `${fullName || "This"} ${headline} brings a strong blend of execution, communication, and problem solving${
		company ? ` shaped through work at ${company}` : ""
	}. Focused on building clear, measurable results with strengths in ${skills || "modern digital workflows, product thinking, and delivery"}.`;
}

export default function ResumeWorkspace() {
	const { resumeData, updateSection } = useResumeStore();
	const [template, setTemplate] = useState<ResumeTemplate>("executive");
	const hasInitialized = useRef(false);
	const form = useForm<ResumeData>({
		defaultValues: resumeData,
		mode: "onChange",
	});
	const { control, register, setValue, reset } = form;

	const experienceArray = useFieldArray({
		control,
		name: "experience",
	});
	const educationArray = useFieldArray({
		control,
		name: "education",
	});
	const projectArray = useFieldArray({
		control,
		name: "projects",
	});
	const skillsArray = useFieldArray({
		control,
		name: "skills",
	});

	useEffect(() => {
		if (hasInitialized.current) {
			return;
		}

		hasInitialized.current = true;
		reset(resumeData);
	}, [resumeData, reset]);

	const watchedData = useWatch({ control }) as ResumeData;
	const watchedExperience = useWatch({
		control,
		name: "experience",
	}) as ResumeData["experience"];
	const watchedProjects = useWatch({
		control,
		name: "projects",
	}) as ResumeData["projects"];

	useEffect(() => {
		updateSection(watchedData);
	}, [updateSection, watchedData]);

	const normalizedData = useMemo<ResumeData>(
		() => ({
			...watchedData,
			summary: watchedData.summary || "",
			personalInfo: watchedData.personalInfo || resumeData.personalInfo,
			experience: (watchedData.experience || []).map((item) => ({
				...item,
				description:
					item.description?.filter((point) => point !== undefined) || [""],
			})),
			education: watchedData.education || [],
			projects: (watchedData.projects || []).map((project) => ({
				...project,
				techStack: project.techStack || [],
			})),
			skills: watchedData.skills || [],
		}),
		[resumeData.personalInfo, watchedData],
	);

	function handleGenerateWithAI() {
		setValue("summary", createGeneratedSummary(normalizedData), {
			shouldDirty: true,
			shouldTouch: true,
		});

		if (normalizedData.experience.length === 0) {
			experienceArray.append({
				...createEmptyExperience(),
				description: [
					"Improved workflows, communication, and execution speed through structured delivery and stronger ownership.",
				],
			});
		}
	}

	function handleDownloadPdf() {
		window.print();
	}

	return (
		<div className="grid gap-6 lg:grid-cols-[minmax(340px,0.82fr)_minmax(0,1.18fr)]">
			<section className="print:hidden space-y-5">
				<div className="theme-glass rounded-[32px] border border-[var(--theme-border-strong)] p-5 backdrop-blur-xl lg:p-6">
					<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="theme-text-heading text-xl font-semibold">
								Resume Editor
							</p>
							<p className="theme-text-soft mt-1 text-sm leading-6">
								Edit every section here. Changes appear instantly in the live preview.
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row">
							<button
								type="button"
								onClick={handleGenerateWithAI}
								className="theme-button-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
							>
								<HiOutlineSparkles className="text-base" />
								<span>Generate with AI</span>
							</button>
							<button
								type="button"
								onClick={handleDownloadPdf}
								className="theme-button-secondary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
							>
								<HiOutlineArrowDownTray className="text-base" />
								<span>Download PDF</span>
							</button>
						</div>
					</div>
				</div>

				<div className={sectionClassName}>
					<div className="flex items-center justify-between gap-3">
						<div>
							<p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
								Preview Style
							</p>
							<p className="theme-text-soft mt-2 text-sm">
								Switch between polished resume templates.
							</p>
						</div>
						<HiOutlineSwatch className="theme-text-accent text-xl" />
					</div>
					<div className="mt-4 grid gap-3 sm:grid-cols-2">
						{[
							["executive", "Executive"] as const,
							["modern", "Modern"] as const,
						].map(([value, label]) => (
							<button
								key={value}
								type="button"
								onClick={() => setTemplate(value)}
								className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
									template === value
										? "border-[var(--theme-primary)] bg-[var(--theme-primary-soft)] theme-text-main"
										: "border-[var(--theme-border-strong)] theme-surface-soft theme-text-soft"
								}`}
							>
								{label}
							</button>
						))}
					</div>
				</div>

				<div className="space-y-5">
					<section className={sectionClassName}>
						<p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
							Personal Info
						</p>
						<div className="mt-4 grid gap-4 md:grid-cols-2">
							<input {...register("personalInfo.firstName")} className={fieldClassName} placeholder="First name" />
							<input {...register("personalInfo.lastName")} className={fieldClassName} placeholder="Last name" />
							<input {...register("personalInfo.email")} className={fieldClassName} placeholder="Email" />
							<input {...register("personalInfo.phone")} className={fieldClassName} placeholder="Phone" />
							<input {...register("personalInfo.linkedin")} className={fieldClassName} placeholder="LinkedIn" />
							<input {...register("personalInfo.github")} className={fieldClassName} placeholder="GitHub / Portfolio" />
						</div>
					</section>

					<section className={sectionClassName}>
						<div className="flex items-center justify-between gap-3">
							<p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
								Summary
							</p>
							<button
								type="button"
								onClick={handleGenerateWithAI}
								className="theme-text-accent text-sm font-semibold"
							>
								Generate with AI
							</button>
						</div>
						<textarea
							{...register("summary")}
							className={`${fieldClassName} mt-4 min-h-36 resize-y`}
							placeholder="Write a concise professional summary tailored to your target role."
						/>
					</section>

					<section className={sectionClassName}>
						<div className="flex items-center justify-between gap-3">
							<p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
								Experience
							</p>
							<button
								type="button"
								onClick={() => experienceArray.append(createEmptyExperience())}
								className="theme-text-accent text-sm font-semibold"
							>
								Add experience
							</button>
						</div>
						<div className="mt-4 space-y-4">
							{experienceArray.fields.length === 0 ? (
								<p className="theme-text-soft text-sm">No experience added yet.</p>
							) : null}
							{experienceArray.fields.map((field, index) => (
								<div key={field.id} className="theme-surface-soft rounded-[24px] p-4">
									<div className="flex items-center justify-between gap-3">
										<p className="theme-text-heading text-sm font-semibold">Role {index + 1}</p>
										<button
											type="button"
											onClick={() => experienceArray.remove(index)}
											className="theme-text-primary text-sm font-medium"
										>
											Remove
										</button>
									</div>
									<div className="mt-4 grid gap-4 md:grid-cols-2">
										<input {...register(`experience.${index}.role`)} className={fieldClassName} placeholder="Job title" />
										<input {...register(`experience.${index}.company`)} className={fieldClassName} placeholder="Company" />
										<input {...register(`experience.${index}.location`)} className={fieldClassName} placeholder="Location" />
										<div className="grid grid-cols-2 gap-4">
											<input {...register(`experience.${index}.startDate`)} className={fieldClassName} placeholder="Start date" />
											<input {...register(`experience.${index}.endDate`)} className={fieldClassName} placeholder="End date" />
										</div>
									</div>
									<textarea
										value={(watchedExperience?.[index]?.description || []).join("\n")}
										onChange={(event) =>
											setValue(
												`experience.${index}.description`,
												event.target.value.split("\n"),
												{ shouldDirty: true, shouldTouch: true },
											)
										}
										className={`${fieldClassName} mt-4 min-h-28 resize-y`}
										placeholder="One achievement per line"
									/>
								</div>
							))}
						</div>
					</section>

					<section className={sectionClassName}>
						<div className="flex items-center justify-between gap-3">
							<p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
								Education
							</p>
							<button
								type="button"
								onClick={() => educationArray.append(createEmptyEducation())}
								className="theme-text-accent text-sm font-semibold"
							>
								Add education
							</button>
						</div>
						<div className="mt-4 space-y-4">
							{educationArray.fields.length === 0 ? (
								<p className="theme-text-soft text-sm">No education entries added yet.</p>
							) : null}
							{educationArray.fields.map((field, index) => (
								<div key={field.id} className="theme-surface-soft rounded-[24px] p-4">
									<div className="flex items-center justify-between gap-3">
										<p className="theme-text-heading text-sm font-semibold">Education {index + 1}</p>
										<button
											type="button"
											onClick={() => educationArray.remove(index)}
											className="theme-text-primary text-sm font-medium"
										>
											Remove
										</button>
									</div>
									<div className="mt-4 grid gap-4 md:grid-cols-2">
										<input {...register(`education.${index}.school`)} className={fieldClassName} placeholder="School" />
										<input {...register(`education.${index}.degree`)} className={fieldClassName} placeholder="Degree" />
										<input {...register(`education.${index}.minor`)} className={fieldClassName} placeholder="Minor / specialization" />
										<input {...register(`education.${index}.location`)} className={fieldClassName} placeholder="Location" />
										<input {...register(`education.${index}.startDate`)} className={fieldClassName} placeholder="Start date" />
										<input {...register(`education.${index}.endDate`)} className={fieldClassName} placeholder="End date" />
									</div>
								</div>
							))}
						</div>
					</section>

					<section className={sectionClassName}>
						<div className="flex items-center justify-between gap-3">
							<p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
								Skills
							</p>
							<button
								type="button"
								onClick={() => skillsArray.append("")}
								className="theme-text-accent text-sm font-semibold"
							>
								Add skill
							</button>
						</div>
						<div className="mt-4 grid gap-4 md:grid-cols-2">
							{skillsArray.fields.length === 0 ? (
								<p className="theme-text-soft text-sm">No skills added yet.</p>
							) : null}
							{skillsArray.fields.map((field, index) => (
								<div key={field.id} className="flex gap-3">
									<input {...register(`skills.${index}`)} className={fieldClassName} placeholder={`Skill ${index + 1}`} />
									<button
										type="button"
										onClick={() => skillsArray.remove(index)}
										className="rounded-2xl border border-[var(--theme-border-strong)] px-4 text-sm theme-text-soft"
									>
										Remove
									</button>
								</div>
							))}
						</div>
					</section>

					<section className={sectionClassName}>
						<div className="flex items-center justify-between gap-3">
							<p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
								Projects
							</p>
							<button
								type="button"
								onClick={() => projectArray.append(createEmptyProject())}
								className="theme-text-accent text-sm font-semibold"
							>
								Add project
							</button>
						</div>
						<div className="mt-4 space-y-4">
							{projectArray.fields.length === 0 ? (
								<p className="theme-text-soft text-sm">No projects added yet.</p>
							) : null}
							{projectArray.fields.map((field, index) => (
								<div key={field.id} className="theme-surface-soft rounded-[24px] p-4">
									<div className="flex items-center justify-between gap-3">
										<p className="theme-text-heading text-sm font-semibold">Project {index + 1}</p>
										<button
											type="button"
											onClick={() => projectArray.remove(index)}
											className="theme-text-primary text-sm font-medium"
										>
											Remove
										</button>
									</div>
									<div className="mt-4 grid gap-4 md:grid-cols-2">
										<input {...register(`projects.${index}.name`)} className={fieldClassName} placeholder="Project name" />
										<input {...register(`projects.${index}.link`)} className={fieldClassName} placeholder="Project link" />
										<input {...register(`projects.${index}.startDate`)} className={fieldClassName} placeholder="Start date" />
										<input {...register(`projects.${index}.endDate`)} className={fieldClassName} placeholder="End date" />
									</div>
									<textarea
										{...register(`projects.${index}.description`)}
										className={`${fieldClassName} mt-4 min-h-28 resize-y`}
										placeholder="Describe what you built, what mattered, and the outcome."
									/>
									<input
										value={(watchedProjects?.[index]?.techStack || []).join(", ")}
										onChange={(event) =>
											setValue(
												`projects.${index}.techStack`,
												event.target.value
													.split(",")
													.map((item) => item.trim())
													.filter(Boolean),
												{ shouldDirty: true, shouldTouch: true },
											)
										}
										className={`${fieldClassName} mt-4`}
										placeholder="React, TypeScript, Node.js"
									/>
								</div>
							))}
						</div>
					</section>
				</div>
			</section>

			<aside className="resume-print-area rounded-[32px] border border-dashed border-[var(--theme-border-strong)] p-2 lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
				<ResumePreview resumeData={normalizedData} template={template} />
			</aside>
		</div>
	);
}
