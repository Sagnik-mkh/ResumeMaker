"use client";

import { useFieldArray, useForm } from "react-hook-form";
import ModalShell from "@/components/resume/presenters/ModalShell";
import { useResumeStore } from "@/store/resumeStore";
import { Education, Experience, PersonalInfo, Project } from "@/types/resume";

const fieldClassName = "theme-input w-full rounded-2xl px-4 py-3 text-sm";

function ModalActions({
	onClose,
	submitLabel,
}: {
	onClose: () => void;
	submitLabel: string;
}) {
	return (
		<div className="flex justify-end gap-3">
			<button
				type="button"
				onClick={onClose}
				className="theme-button-secondary rounded-full px-5 py-3 text-sm transition"
			>
				Cancel
			</button>
			<button
				type="submit"
				className="px-5 py-3 text-sm font-semibold transition rounded-full theme-button-primary"
			>
				{submitLabel}
			</button>
		</div>
	);
}

export function PersonalDetailsEditor({ onClose }: { onClose: () => void }) {
	const { resumeData, updateSection } = useResumeStore();
	const { register, handleSubmit } = useForm<PersonalInfo>({
		defaultValues: resumeData.personalInfo,
	});

	return (
		<ModalShell
			title="Personal details"
			description="Add the information that should appear at the top of the resume."
			onClose={onClose}
		>
			<form
				onSubmit={handleSubmit((data) => {
					updateSection({ personalInfo: data });
					onClose();
				})}
				className="space-y-6"
			>
				<div className="grid gap-4 md:grid-cols-2">
					<input
						{...register("firstName")}
						className={fieldClassName}
						placeholder="First name"
					/>
					<input
						{...register("lastName")}
						className={fieldClassName}
						placeholder="Last name"
					/>
					<input
						{...register("email")}
						className={fieldClassName}
						placeholder="Email"
					/>
					<input
						{...register("phone")}
						className={fieldClassName}
						placeholder="Phone"
					/>
					<input
						{...register("linkedin")}
						className={fieldClassName}
						placeholder="LinkedIn"
					/>
					<input
						{...register("github")}
						className={fieldClassName}
						placeholder="GitHub"
					/>
				</div>
				<ModalActions onClose={onClose} submitLabel="Save details" />
			</form>
		</ModalShell>
	);
}

export function SummaryEditor({ onClose }: { onClose: () => void }) {
	const { resumeData, updateSection } = useResumeStore();
	const { register, handleSubmit } = useForm<{ summary: string }>({
		defaultValues: { summary: resumeData.summary },
	});

	return (
		<ModalShell
			title="Professional summary"
			description="Write a short overview that positions the candidate clearly."
			onClose={onClose}
		>
			<form
				onSubmit={handleSubmit(({ summary }) => {
					updateSection({ summary });
					onClose();
				})}
				className="space-y-6"
			>
				<textarea
					{...register("summary")}
					className={`${fieldClassName} min-h-56 resize-y`}
					placeholder="Frontend engineer with 3+ years of experience building accessible products..."
				/>
				<ModalActions onClose={onClose} submitLabel="Save summary" />
			</form>
		</ModalShell>
	);
}

export function ExperienceEditor({ onClose }: { onClose: () => void }) {
	const { resumeData, updateSection } = useResumeStore();
	const { control, register, handleSubmit } = useForm<{
		experience: Experience[];
	}>({
		defaultValues: {
			experience:
				resumeData.experience.length > 0
					? resumeData.experience
					: [
							{
								company: "",
								role: "",
								location: "",
								startDate: "",
								endDate: "",
								description: [""],
							},
						],
		},
	});
	const { fields, append, remove } = useFieldArray({
		control,
		name: "experience",
	});

	return (
		<ModalShell
			title="Experience"
			description="Add work history with concise achievements and measurable outcomes."
			onClose={onClose}
		>
			<form
				onSubmit={handleSubmit(({ experience }) => {
					updateSection({
						experience: experience.map((item) => ({
							...item,
							description: item.description.filter((point) =>
								point.trim(),
							),
						})),
					});
					onClose();
				})}
				className="space-y-5"
			>
				{fields.map((field, index) => (
					<div
						key={field.id}
						className="theme-surface-soft rounded-[28px] p-4"
					>
						<div className="flex items-center justify-between mb-4">
							<h4 className="theme-text-faint text-sm font-medium uppercase tracking-[0.24em]">
								Role {index + 1}
							</h4>
							{fields.length > 1 ? (
								<button
									type="button"
									onClick={() => remove(index)}
									className="theme-text-primary text-sm transition"
								>
									Remove
								</button>
							) : null}
						</div>
						<div className="grid gap-4 md:grid-cols-2">
							<input
								{...register(`experience.${index}.company`)}
								className={fieldClassName}
								placeholder="Company"
							/>
							<input
								{...register(`experience.${index}.role`)}
								className={fieldClassName}
								placeholder="Job title"
							/>
							<input
								{...register(`experience.${index}.location`)}
								className={fieldClassName}
								placeholder="Location"
							/>
							<div className="grid grid-cols-2 gap-4">
								<input
									{...register(
										`experience.${index}.startDate`,
									)}
									className={fieldClassName}
									placeholder="Start date"
								/>
								<input
									{...register(`experience.${index}.endDate`)}
									className={fieldClassName}
									placeholder="End date"
								/>
							</div>
						</div>
						<textarea
							{...register(`experience.${index}.description.0`)}
							className={`${fieldClassName} mt-4 min-h-28 resize-y`}
							placeholder="Describe the strongest contribution in this role."
						/>
					</div>
				))}
				<div className="flex justify-between gap-3">
					<button
						type="button"
						onClick={() =>
							append({
								company: "",
								role: "",
								location: "",
								startDate: "",
								endDate: "",
								description: [""],
							})
						}
						className="theme-button-secondary rounded-full px-5 py-3 text-sm transition"
					>
						Add experience
					</button>
					<ModalActions
						onClose={onClose}
						submitLabel="Save experience"
					/>
				</div>
			</form>
		</ModalShell>
	);
}

export function EducationEditor({ onClose }: { onClose: () => void }) {
	const { resumeData, updateSection } = useResumeStore();
	const { control, register, handleSubmit } = useForm<{
		education: Education[];
	}>({
		defaultValues: {
			education:
				resumeData.education.length > 0
					? resumeData.education
					: [
							{
								school: "",
								degree: "",
								minor: "",
								gpa: undefined,
								location: "",
								startDate: "",
								endDate: "",
							},
						],
		},
	});
	const { fields, append, remove } = useFieldArray({
		control,
		name: "education",
	});

	return (
		<ModalShell
			title="Education"
			description="Add institutions, degrees, and graduation timelines."
			onClose={onClose}
		>
			<form
				onSubmit={handleSubmit(({ education }) => {
					updateSection({ education });
					onClose();
				})}
				className="space-y-5"
			>
				{fields.map((field, index) => (
					<div
						key={field.id}
						className="theme-surface-soft rounded-[28px] p-4"
					>
						<div className="flex items-center justify-between mb-4">
							<h4 className="theme-text-faint text-sm font-medium uppercase tracking-[0.24em]">
								Education {index + 1}
							</h4>
							{fields.length > 1 ? (
								<button
									type="button"
									onClick={() => remove(index)}
									className="theme-text-primary text-sm transition"
								>
									Remove
								</button>
							) : null}
						</div>
						<div className="grid gap-4 md:grid-cols-2">
							<input
								{...register(`education.${index}.school`)}
								className={fieldClassName}
								placeholder="School"
							/>
							<input
								{...register(`education.${index}.degree`)}
								className={fieldClassName}
								placeholder="Degree"
							/>
							<input
								{...register(`education.${index}.minor`)}
								className={fieldClassName}
								placeholder="Minor or specialization"
							/>
							<input
								{...register(`education.${index}.location`)}
								className={fieldClassName}
								placeholder="Location"
							/>
							<input
								{...register(`education.${index}.startDate`)}
								className={fieldClassName}
								placeholder="Start date"
							/>
							<input
								{...register(`education.${index}.endDate`)}
								className={fieldClassName}
								placeholder="End date"
							/>
						</div>
					</div>
				))}
				<div className="flex justify-between gap-3">
					<button
						type="button"
						onClick={() =>
							append({
								school: "",
								degree: "",
								minor: "",
								gpa: undefined,
								location: "",
								startDate: "",
								endDate: "",
							})
						}
						className="theme-button-secondary rounded-full px-5 py-3 text-sm transition"
					>
						Add education
					</button>
					<ModalActions
						onClose={onClose}
						submitLabel="Save education"
					/>
				</div>
			</form>
		</ModalShell>
	);
}

export function ProjectsEditor({ onClose }: { onClose: () => void }) {
	const { resumeData, updateSection } = useResumeStore();
	const { control, register, handleSubmit } = useForm<{
		projects: (Omit<Project, "techStack"> & { techStack: string })[];
	}>({
		defaultValues: {
			projects:
				resumeData.projects.length > 0
					? resumeData.projects.map((project) => ({
							...project,
							techStack: project.techStack.join(", "),
						}))
					: [
							{
								name: "",
								description: "",
								techStack: "",
								link: "",
								startDate: "",
								endDate: "",
							},
						],
		},
	});
	const { fields, append, remove } = useFieldArray({
		control,
		name: "projects",
	});

	return (
		<ModalShell
			title="Projects"
			description="Capture projects that show technical depth, ownership, or measurable impact."
			onClose={onClose}
		>
			<form
				onSubmit={handleSubmit(({ projects }) => {
					updateSection({
						projects: projects.map((project) => ({
							...project,
							techStack: project.techStack
								.split(",")
								.map((item) => item.trim())
								.filter(Boolean),
						})),
					});
					onClose();
				})}
				className="space-y-5"
			>
				{fields.map((field, index) => (
					<div
						key={field.id}
						className="theme-surface-soft rounded-[28px] p-4"
					>
						<div className="flex items-center justify-between mb-4">
							<h4 className="theme-text-faint text-sm font-medium uppercase tracking-[0.24em]">
								Project {index + 1}
							</h4>
							{fields.length > 1 ? (
								<button
									type="button"
									onClick={() => remove(index)}
									className="theme-text-primary text-sm transition"
								>
									Remove
								</button>
							) : null}
						</div>
						<div className="grid gap-4 md:grid-cols-2">
							<input
								{...register(`projects.${index}.name`)}
								className={fieldClassName}
								placeholder="Project name"
							/>
							<input
								{...register(`projects.${index}.link`)}
								className={fieldClassName}
								placeholder="Project link"
							/>
							<input
								{...register(`projects.${index}.startDate`)}
								className={fieldClassName}
								placeholder="Start date"
							/>
							<input
								{...register(`projects.${index}.endDate`)}
								className={fieldClassName}
								placeholder="End date"
							/>
						</div>
						<textarea
							{...register(`projects.${index}.description`)}
							className={`${fieldClassName} mt-4 min-h-28 resize-y`}
							placeholder="Explain what you built and why it matters."
						/>
						<input
							{...register(`projects.${index}.techStack`)}
							className={`${fieldClassName} mt-4`}
							placeholder="React, Node.js, PostgreSQL"
						/>
					</div>
				))}
				<div className="flex justify-between gap-3">
					<button
						type="button"
						onClick={() =>
							append({
								name: "",
								description: "",
								techStack: "",
								link: "",
								startDate: "",
								endDate: "",
							})
						}
						className="theme-button-secondary rounded-full px-5 py-3 text-sm transition"
					>
						Add project
					</button>
					<ModalActions
						onClose={onClose}
						submitLabel="Save projects"
					/>
				</div>
			</form>
		</ModalShell>
	);
}

export function SkillsEditor({ onClose }: { onClose: () => void }) {
	const { resumeData, updateSection } = useResumeStore();
	const { control, register, handleSubmit } = useForm<{ skills: string[] }>({
		defaultValues: {
			skills:
				resumeData.skills.length > 0 ? resumeData.skills : ["", "", ""],
		},
	});
	const { fields, append, remove } = useFieldArray({
		control,
		name: "skills",
	});

	return (
		<ModalShell
			title="Skills"
			description="List the tools and strengths most relevant to the target role."
			onClose={onClose}
		>
			<form
				onSubmit={handleSubmit(({ skills }) => {
					updateSection({
						skills: skills
							.map((skill) => skill.trim())
							.filter(Boolean),
					});
					onClose();
				})}
				className="space-y-5"
			>
				<div className="grid gap-4 md:grid-cols-2">
					{fields.map((field, index) => (
						<div key={field.id} className="flex gap-3">
							<input
								{...register(`skills.${index}`)}
								className={fieldClassName}
								placeholder={`Skill ${index + 1}`}
							/>
							{fields.length > 1 ? (
								<button
									type="button"
									onClick={() => remove(index)}
									className="theme-button-secondary rounded-2xl px-4 text-sm transition"
								>
									Remove
								</button>
							) : null}
						</div>
					))}
				</div>
				<div className="flex justify-between gap-3">
					<button
						type="button"
						onClick={() => append("")}
						className="theme-button-secondary rounded-full px-5 py-3 text-sm transition"
					>
						Add skill
					</button>
					<ModalActions onClose={onClose} submitLabel="Save skills" />
				</div>
			</form>
		</ModalShell>
	);
}
