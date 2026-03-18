"use client";

import Link from "next/link";
import {
	HiOutlineArrowRight,
	HiOutlineCheckBadge,
	HiOutlineClock,
	HiOutlineDocumentPlus,
	HiOutlineDocumentText,
	HiOutlineLightBulb,
	HiOutlineSparkles,
} from "react-icons/hi2";
import { PiBrain } from "react-icons/pi";
import { RiFilePaper2Line } from "react-icons/ri";
import { useResumeStore } from "@/store/resumeStore";
import {
	getCompletedSectionCount,
	getResumeHighlights,
	getResumeMetricItems,
	getResumeStrengthScore,
	getResumeTitle,
} from "@/lib/resumeMetrics";

function RingScore({ value }: { value: number }) {
	const radius = 40;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (value / 100) * circumference;

	return (
		<div className="relative flex h-36 w-36 items-center justify-center">
			<svg className="h-36 w-36 -rotate-90" viewBox="0 0 120 120">
				<circle
					cx="60"
					cy="60"
					r={radius}
					stroke="rgba(255,255,255,0.08)"
					strokeWidth="8"
					fill="none"
				/>
				<circle
					cx="60"
					cy="60"
					r={radius}
					stroke="var(--theme-accent)"
					strokeWidth="8"
					strokeLinecap="round"
					fill="none"
					strokeDasharray={circumference}
					strokeDashoffset={offset}
				/>
			</svg>
			<div className="absolute inset-0 flex items-center justify-center">
				<p className="theme-text-accent text-4xl font-semibold">{value}</p>
			</div>
		</div>
	);
}

function ProgressBar({ value }: { value: number }) {
	return (
		<div className="theme-progress-track h-2 rounded-full">
			<div
				className="theme-progress-fill h-2 rounded-full"
				style={{ width: `${value}%` }}
			/>
		</div>
	);
}

const dashboardCardClass =
	"theme-surface rounded-[28px] border border-[var(--theme-border-strong)] p-5";

export default function DashboardPage() {
	const { resumeData, resetResume } = useResumeStore();
	const score = getResumeStrengthScore(resumeData);
	const completedSections = getCompletedSectionCount(resumeData);
	const completionItems = getResumeMetricItems(resumeData);
	const title = getResumeTitle(resumeData);
	const highlights = getResumeHighlights(resumeData);
	const profileCompletion = Math.round(
		(completedSections / completionItems.length) * 100,
	);
	const fullName = [
		resumeData.personalInfo.firstName,
		resumeData.personalInfo.lastName,
	]
		.filter(Boolean)
		.join(" ");
	const displayName = fullName || "Builder";
	const weeklyGoals = completionItems.slice(0, 3).map((item) => ({
		label: item.label,
		progressLabel: item.done ? "Done" : "Pending",
		progress: item.done ? 100 : 15,
	}));
	const recentDocs = [
		{
			title,
			type: "Resume Draft",
			updatedAt: new Date().toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric",
			}),
			score: `${score}`,
		},
	];
	const statCards = [
		{
			label: "Sections Done",
			value: `${completedSections}/${completionItems.length}`,
			icon: HiOutlineDocumentText,
		},
		{
			label: "Experience",
			value: `${resumeData.experience.length}`,
			icon: HiOutlineCheckBadge,
		},
		{
			label: "Projects",
			value: `${resumeData.projects.length}`,
			icon: RiFilePaper2Line,
		},
		{
			label: "Skills",
			value: `${resumeData.skills.length}`,
			icon: PiBrain,
		},
	];
	const breakdownItems = completionItems.map((item) => ({
		label: item.label,
		value: item.done ? 100 : 25,
		score: item.done ? "Ready" : "Missing",
	}));

	return (
		<main className="theme-page-shell min-h-screen px-4 py-6 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl space-y-6">
				<section className="theme-glass rounded-[32px] border border-[var(--theme-border-strong)] px-6 py-8 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-8">
					<div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
						<div className="max-w-3xl">
							<p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.32em]">
								Resume Workspace
							</p>
							<h1 className="theme-text-heading mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
								Good afternoon, {displayName}
							</h1>
							<p className="theme-text-soft mt-4 text-base leading-8">
								Track resume quality, fill the remaining gaps, and jump back into
								the builder with a single click.
							</p>
						</div>
						<div className="grid gap-3 sm:grid-cols-3">
							{highlights.map((item) => (
								<div
									key={item}
									className="theme-surface-soft rounded-[24px] p-4 text-sm font-medium theme-text-main"
								>
									<HiOutlineSparkles className="theme-text-accent text-xl" />
									<p className="mt-3">{item}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
					<div className={`${dashboardCardClass} theme-card-gradient`}>
						<div className="flex items-center justify-between gap-3">
							<div>
								<p className="theme-text-heading text-2xl font-semibold">
									Current draft
								</p>
								<p className="theme-text-soft mt-1 text-sm">{title}</p>
							</div>
							<Link
								href="/create-resume"
								className="theme-button-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
							>
								<span>Edit resume</span>
								<HiOutlineArrowRight className="text-base" />
							</Link>
						</div>
						<div className="mt-6 grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
							<div className="theme-surface-soft flex flex-col items-center rounded-[24px] p-5 text-center">
								<RingScore value={score} />
								<p className="theme-text-heading mt-2 text-xl font-semibold">
									{score >= 85 ? "Strong trajectory" : "Needs more depth"}
								</p>
								<p className="theme-text-soft mt-2 text-sm leading-6">
									Your current score is driven by section completeness and content depth.
								</p>
							</div>
							<div className="space-y-4">
								<div className="theme-surface-soft rounded-[24px] p-4">
									<div className="flex items-center justify-between gap-3">
										<p className="theme-text-heading text-lg font-semibold">
											Profile completion
										</p>
										<p className="theme-text-accent text-lg font-semibold">
											{profileCompletion}%
										</p>
									</div>
									<div className="mt-3">
										<ProgressBar value={profileCompletion} />
									</div>
									<div className="mt-4 space-y-3">
										{completionItems.map((item) => (
											<div
												key={item.label}
												className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--theme-border)] px-4 py-3"
											>
												<p className="theme-text-main text-sm">{item.label}</p>
												<span
													className={
														item.done
															? "theme-badge-success rounded-full px-3 py-1 text-xs font-semibold"
															: "theme-badge rounded-full px-3 py-1 text-xs font-semibold"
													}
												>
													{item.done ? "Done" : "Pending"}
												</span>
											</div>
										))}
									</div>
								</div>
								<div className="grid gap-3 sm:grid-cols-2">
									<Link
										href="/create-resume"
										className="theme-interactive-card theme-surface-soft rounded-[24px] p-4"
									>
										<HiOutlineDocumentPlus className="theme-text-primary text-xl" />
										<p className="theme-text-heading mt-4 text-base font-semibold">
											Continue building
										</p>
										<p className="theme-text-soft mt-2 text-sm leading-6">
											Add sections, refine bullets, and update your preview live.
										</p>
									</Link>
									<button
										type="button"
										onClick={resetResume}
										className="theme-interactive-card theme-surface-soft rounded-[24px] p-4 text-left"
									>
										<HiOutlineLightBulb className="theme-text-accent text-xl" />
										<p className="theme-text-heading mt-4 text-base font-semibold">
											Start fresh
										</p>
										<p className="theme-text-soft mt-2 text-sm leading-6">
											Clear the current draft and begin a new resume from scratch.
										</p>
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="grid gap-4">
						<div className={dashboardCardClass}>
							<div className="flex items-center gap-3">
								<div className="theme-icon-panel flex h-10 w-10 items-center justify-center rounded-2xl">
									<HiOutlineSparkles className="text-lg" />
								</div>
								<div>
									<p className="theme-text-heading text-lg font-semibold">
										Weekly focus
									</p>
									<p className="theme-text-soft text-sm">
										Finish these essentials to push your draft forward.
									</p>
								</div>
							</div>
							<div className="mt-5 space-y-3">
								{weeklyGoals.map((goal) => (
									<div
										key={goal.label}
										className="theme-surface-soft rounded-2xl p-4"
									>
										<div className="flex items-center justify-between gap-3">
											<p className="theme-text-main text-sm font-medium">
												{goal.label}
											</p>
											<p className="theme-text-faint text-xs uppercase tracking-[0.2em]">
												{goal.progressLabel}
											</p>
										</div>
										<div className="mt-3">
											<ProgressBar value={goal.progress} />
										</div>
									</div>
								))}
							</div>
						</div>

						<div className={dashboardCardClass}>
							<div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
								{statCards.map((card) => {
									const Icon = card.icon;

									return (
										<div key={card.label} className="theme-surface-soft rounded-[24px] p-4">
											<div className="flex items-center gap-3">
												<div className="theme-icon-panel flex h-10 w-10 items-center justify-center rounded-2xl">
													<Icon className="text-lg" />
												</div>
												<p className="theme-text-soft text-sm">{card.label}</p>
											</div>
											<p className="theme-text-heading mt-4 text-3xl font-semibold">
												{card.value}
											</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</section>

				<section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
					<div className={dashboardCardClass}>
						<div className="flex items-center gap-3">
							<div className="theme-icon-panel flex h-10 w-10 items-center justify-center rounded-2xl">
								<HiOutlineDocumentText className="text-lg" />
							</div>
							<div>
								<p className="theme-text-heading text-lg font-semibold">
									Score breakdown
								</p>
								<p className="theme-text-soft text-sm">
									Section-by-section readiness based on your stored draft.
								</p>
							</div>
						</div>
						<div className="mt-6 space-y-5">
							{breakdownItems.map((item) => (
								<div key={item.label}>
									<div className="mb-2 flex items-center justify-between gap-3">
										<p className="theme-text-main text-sm">{item.label}</p>
										<p className="theme-text-faint text-sm">{item.score}</p>
									</div>
									<ProgressBar value={item.value} />
								</div>
							))}
						</div>
					</div>

					<div className={dashboardCardClass}>
						<div className="flex items-center justify-between gap-3">
							<div>
								<p className="theme-text-heading text-2xl font-semibold">
									Recent documents
								</p>
								<p className="theme-text-soft mt-1 text-sm">
									Your latest locally saved resume snapshots.
								</p>
							</div>
							<Link
								href="/create-resume"
								className="theme-text-soft flex items-center gap-2 text-sm"
							>
								<span>Open builder</span>
								<HiOutlineArrowRight className="text-base" />
							</Link>
						</div>
						<div className="mt-6 grid gap-3 sm:grid-cols-2">
							{recentDocs.map((doc) => (
								<Link
									key={doc.title}
									href="/create-resume"
									className="theme-interactive-card theme-surface-soft rounded-[24px] p-4"
								>
									<div className="flex items-start justify-between gap-3">
										<div className="theme-icon-panel flex h-12 w-12 items-center justify-center rounded-2xl">
											<HiOutlineDocumentText className="text-2xl" />
										</div>
										<div className="theme-badge-success flex items-center gap-1 rounded-xl px-2.5 py-1 text-sm">
											<HiOutlineSparkles className="text-sm" />
											{doc.score}
										</div>
									</div>
									<div className="mt-5">
										<p className="theme-text-heading text-lg font-semibold">
											{doc.title}
										</p>
										<p className="theme-text-soft mt-1 text-sm">{doc.type}</p>
										<div className="theme-text-faint mt-4 flex items-center gap-1.5 text-sm">
											<HiOutlineClock className="text-base" />
											<span>{doc.updatedAt}</span>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
