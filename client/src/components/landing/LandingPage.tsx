"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	HiOutlineArrowRight,
	HiOutlineBolt,
	HiOutlineCheckBadge,
	HiOutlineClipboardDocumentList,
	HiOutlineCpuChip,
	HiOutlineDocumentDuplicate,
	HiOutlineRocketLaunch,
	HiOutlineSparkles,
} from "react-icons/hi2";

const howItWorksSteps = [
	{
		step: "01",
		title: "Add your experience",
		description:
			"Start with your raw achievements, roles, projects, and education. The builder organizes the structure for you.",
		icon: HiOutlineClipboardDocumentList,
	},
	{
		step: "02",
		title: "Let AI sharpen the writing",
		description:
			"Rewrite vague bullets into clearer, stronger, recruiter-friendly statements with better impact and tone.",
		icon: HiOutlineCpuChip,
	},
	{
		step: "03",
		title: "Export a polished resume",
		description:
			"Choose a modern layout, check readiness, and leave with a cleaner resume tailored for real applications.",
		icon: HiOutlineRocketLaunch,
	},
];

const templateCards = [
	{
		name: "Executive Minimal",
		accent: "ATS-first",
		description: "Balanced spacing, clear hierarchy, and zero visual clutter.",
	},
	{
		name: "Modern Gradient",
		accent: "Creative Pro",
		description: "A sharper look for product, design, and growth roles.",
	},
	{
		name: "Compact Recruiter",
		accent: "1-page",
		description: "Dense but scannable for high-signal technical applications.",
	},
	{
		name: "Professional Classic",
		accent: "Universal",
		description: "Clean, familiar layout for broad industry compatibility.",
	},
];

const aiFeatures = [
	{
		title: "AI bullet rewrites",
		description:
			"Turn generic responsibilities into concise, metrics-driven accomplishments.",
		icon: HiOutlineSparkles,
	},
	{
		title: "ATS signal guidance",
		description:
			"See whether your draft is readable, keyword-aware, and structurally clear.",
		icon: HiOutlineCheckBadge,
	},
	{
		title: "Role-focused tailoring",
		description:
			"Adjust tone and emphasis for product, engineering, consulting, or operations roles.",
		icon: HiOutlineBolt,
	},
	{
		title: "Multi-template preview",
		description:
			"Preview the same resume across polished layouts before you export.",
		icon: HiOutlineDocumentDuplicate,
	},
];

const testimonials = [
	{
		quote:
			"I stopped fighting formatting and focused on the story. The AI suggestions made my resume sound senior instead of generic.",
		name: "Aarav Mehta",
		role: "Frontend Engineer",
	},
	{
		quote:
			"The templates look modern without trying too hard. Recruiters commented on how clean and easy to scan my resume was.",
		name: "Priya Sharma",
		role: "Product Analyst",
	},
	{
		quote:
			"The biggest win was speed. I had a polished base draft fast, then tailored it for each job instead of rewriting from zero.",
		name: "Rohan Patel",
		role: "Operations Associate",
	},
];

const pricingPlans = [
	{
		name: "Starter",
		price: "$0",
		description: "For testing the workflow and building your first draft.",
		features: ["1 resume", "Basic templates", "Manual editing", "PDF export"],
		highlight: false,
	},
	{
		name: "Pro",
		price: "$19",
		description: "For applicants who want AI speed, better writing, and stronger results.",
		features: [
			"Unlimited resumes",
			"AI rewrites",
			"ATS guidance",
			"Premium templates",
		],
		highlight: true,
	},
	{
		name: "Teams",
		price: "$49",
		description: "For coaches, career services, and shared resume review workflows.",
		features: [
			"Shared workspace",
			"Review collaboration",
			"Template library",
			"Priority support",
		],
		highlight: false,
	},
];

const fadeInUp = {
	initial: { opacity: 0, y: 28 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.55, ease: "easeOut" },
};

export default function LandingPage() {
	return (
		<main>
			<section id="top" className="relative overflow-hidden theme-hero">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(230,57,70,0.14),transparent_28%)]" />
				<div className="container relative mx-auto grid min-h-[calc(100vh-73px)] items-center gap-14 px-4 py-14 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
					<motion.div {...fadeInUp} className="max-w-2xl">
						<div className="theme-badge inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.24em]">
							<span className="h-2 w-2 rounded-full bg-[var(--theme-accent)]" />
							Modern AI Resume Builder
						</div>
						<h1 className="theme-text-heading mt-8 text-5xl font-semibold tracking-tight sm:text-6xl">
							Build a cleaner resume in minutes, not a whole weekend.
						</h1>
						<p className="theme-text-soft mt-6 max-w-xl text-base leading-8 sm:text-lg">
							ResumeMaker helps you turn rough experience into a polished, ATS-aware
							resume with modern templates, AI-assisted writing, and a smoother
							application workflow.
						</p>
						<div className="mt-10 flex flex-col gap-4 sm:flex-row">
							<Link
								href="/create-resume"
								className="theme-button-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
							>
								<span>Start building</span>
								<HiOutlineArrowRight className="text-base" />
							</Link>
							<Link
								href="/#templates"
								className="theme-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition"
							>
								View templates
							</Link>
						</div>
						<div className="mt-12 grid gap-4 sm:grid-cols-3">
							{[
								["2 min", "to shape a first strong draft"],
								["4 AI tools", "for writing, structure, tone, and clarity"],
								["ATS-ready", "templates made for fast recruiter scans"],
							].map(([value, label]) => (
								<div
									key={value}
									className="theme-surface-strong rounded-[24px] p-4 backdrop-blur-xl"
								>
									<p className="theme-text-heading text-3xl font-semibold">
										{value}
									</p>
									<p className="theme-text-soft mt-2 text-sm leading-6">{label}</p>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						{...fadeInUp}
						transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
						className="relative mx-auto w-full max-w-2xl"
					>
						<div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-[var(--theme-accent-soft)] blur-3xl" />
						<div className="absolute bottom-10 left-0 h-36 w-36 rounded-full bg-[var(--theme-primary-soft)] blur-3xl" />
						<div className="theme-surface rounded-[32px] p-4 shadow-2xl shadow-slate-950/40">
							<div className="theme-surface-solid rounded-[28px] border border-[var(--theme-border-strong)] p-5">
								<div className="flex items-center justify-between gap-4">
									<div>
										<p className="theme-eyebrow text-xs uppercase tracking-[0.32em]">
											Live editor
										</p>
										<h2 className="theme-text-heading mt-3 text-2xl font-semibold">
											AI-powered resume workspace
										</h2>
									</div>
									<div className="theme-badge-success rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]">
										ATS 92
									</div>
								</div>
								<div className="mt-6 grid gap-4 lg:grid-cols-[0.86fr_1.14fr]">
									<div className="theme-surface-soft rounded-[24px] p-4">
										<p className="theme-text-faint text-xs font-semibold uppercase tracking-[0.24em]">
											AI suggestion
										</p>
										<p className="theme-text-main mt-3 text-sm leading-7">
											Replace: &quot;Worked on dashboard features&quot;
										</p>
										<div className="theme-surface-panel mt-4 rounded-[20px] p-4">
											<p className="theme-text-soft text-sm leading-7">
												Built dashboard workflows that improved reporting speed and
												visibility for cross-functional stakeholders.
											</p>
										</div>
										<div className="mt-5 space-y-3">
											{[
												["Content clarity", "94%"],
												["Structure", "89%"],
												["Impact wording", "91%"],
											].map(([label, value]) => (
												<div key={label}>
													<div className="mb-2 flex items-center justify-between text-xs theme-text-faint">
														<span>{label}</span>
														<span>{value}</span>
													</div>
													<div className="theme-progress-track h-2 rounded-full">
														<div
															className="theme-progress-fill h-2 rounded-full"
															style={{ width: value }}
														/>
													</div>
												</div>
											))}
										</div>
									</div>
									<div className="theme-card-gradient rounded-[24px] p-4">
										<div className="rounded-[24px] bg-white p-3 shadow-2xl">
											<Image
												src="/images/DummyTemplateImage.png"
												alt="Resume template preview"
												width={540}
												height={700}
												className="h-auto w-full rounded-[20px] object-cover"
											/>
										</div>
										<div className="mt-4 grid grid-cols-3 gap-3">
											{["Modern", "Minimal", "ATS"].map((item) => (
												<div
													key={item}
													className="theme-surface-strong theme-text-soft rounded-2xl px-3 py-3 text-center text-xs font-medium uppercase tracking-[0.2em]"
												>
													{item}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			<section id="how-it-works" className="container mx-auto px-4 py-24">
				<motion.div {...fadeInUp} className="mx-auto max-w-3xl text-center">
					<p className="theme-eyebrow text-sm uppercase tracking-[0.36em]">
						How It Works
					</p>
					<h2 className="theme-text-heading mt-4 text-4xl font-semibold">
						A simple 3-step workflow from rough draft to application-ready resume.
					</h2>
					<p className="theme-text-soft mt-4 text-lg leading-8">
						The experience is designed to reduce writing friction and help you move
						faster without sacrificing quality.
					</p>
				</motion.div>
				<div className="mt-14 grid gap-6 lg:grid-cols-3">
					{howItWorksSteps.map((item, index) => {
						const Icon = item.icon;

						return (
							<motion.div
								key={item.title}
								{...fadeInUp}
								transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
								className="theme-surface rounded-[30px] p-7"
							>
								<div className="flex items-center justify-between gap-4">
									<div className="theme-icon-accent flex h-12 w-12 items-center justify-center rounded-2xl">
										<Icon className="text-xl" />
									</div>
									<p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
										{item.step}
									</p>
								</div>
								<h3 className="theme-text-heading mt-8 text-2xl font-semibold">
									{item.title}
								</h3>
								<p className="theme-text-soft mt-4 text-sm leading-7">
									{item.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</section>

			<section id="templates" className="theme-section-divider border-y">
				<div className="container mx-auto px-4 py-24">
					<motion.div
						{...fadeInUp}
						className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
					>
						<div className="max-w-2xl">
							<p className="theme-eyebrow text-sm uppercase tracking-[0.36em]">
								Templates Preview
							</p>
							<h2 className="theme-text-heading mt-4 text-4xl font-semibold">
								Polished templates that look modern without getting in the way.
							</h2>
							<p className="theme-text-soft mt-4 text-lg leading-8">
								Every layout is built for readability first, with cleaner spacing,
								clear headings, and stronger visual hierarchy.
							</p>
						</div>
						<Link
							href="/create-resume"
							className="theme-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition"
						>
							Use a template
						</Link>
					</motion.div>
					<div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
						{templateCards.map((template, index) => (
							<motion.div
								key={template.name}
								{...fadeInUp}
								transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.07 }}
								className="theme-surface rounded-[28px] p-4"
							>
								<div className="rounded-[24px] bg-white p-3 shadow-xl">
									<Image
										src="/images/DummyTemplateImage.png"
										alt={`${template.name} template preview`}
										width={420}
										height={560}
										className="h-auto w-full rounded-[18px] object-cover"
									/>
								</div>
								<div className="mt-5 flex items-center justify-between gap-3">
									<h3 className="theme-text-heading text-lg font-semibold">
										{template.name}
									</h3>
									<span className="theme-pill-primary rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]">
										{template.accent}
									</span>
								</div>
								<p className="theme-text-soft mt-3 text-sm leading-7">
									{template.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section id="features" className="container mx-auto px-4 py-24">
				<div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
					<motion.div {...fadeInUp} className="theme-glass rounded-[32px] p-8">
						<p className="theme-eyebrow text-sm uppercase tracking-[0.36em]">
							AI Features
						</p>
						<h2 className="theme-text-heading mt-4 text-4xl font-semibold">
							The AI does the heavy lifting where resume writing usually slows down.
						</h2>
						<p className="theme-text-soft mt-4 text-lg leading-8">
							Use AI to tighten bullet points, improve clarity, tailor for role
							context, and catch weak phrasing before you apply.
						</p>
						<div className="theme-surface-soft mt-8 rounded-[24px] p-5">
							<p className="theme-text-faint text-xs font-semibold uppercase tracking-[0.28em]">
								Why it works
							</p>
							<p className="theme-text-main mt-3 text-sm leading-7">
								Most resume builders stop at formatting. This one helps with the
								actual writing quality, which is usually the harder problem.
							</p>
						</div>
					</motion.div>
					<div className="grid gap-4 md:grid-cols-2">
						{aiFeatures.map((feature, index) => {
							const Icon = feature.icon;

							return (
								<motion.div
									key={feature.title}
									{...fadeInUp}
									transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
									className="theme-surface rounded-[28px] p-6"
								>
									<div className="theme-icon-accent flex h-12 w-12 items-center justify-center rounded-2xl">
										<Icon className="text-xl" />
									</div>
									<h3 className="theme-text-heading mt-6 text-xl font-semibold">
										{feature.title}
									</h3>
									<p className="theme-text-soft mt-3 text-sm leading-7">
										{feature.description}
									</p>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			<section id="reviews" className="theme-section-divider border-y">
				<div className="container mx-auto px-4 py-24">
					<motion.div {...fadeInUp} className="mx-auto max-w-3xl text-center">
						<p className="theme-eyebrow text-sm uppercase tracking-[0.36em]">
							Testimonials
						</p>
						<h2 className="theme-text-heading mt-4 text-4xl font-semibold">
							People use it because the output feels sharper, faster.
						</h2>
						<p className="theme-text-soft mt-4 text-lg leading-8">
							Designed for applicants who want a modern SaaS workflow instead of a
							blank document and too many formatting decisions.
						</p>
					</motion.div>
					<div className="mt-14 grid gap-6 lg:grid-cols-3">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.name}
								{...fadeInUp}
								transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
								className="theme-surface rounded-[30px] p-7"
							>
								<p className="theme-text-main text-base leading-8">
									&quot;{testimonial.quote}&quot;
								</p>
								<div className="mt-8 border-t border-[var(--theme-border)] pt-5">
									<p className="theme-text-heading text-base font-semibold">
										{testimonial.name}
									</p>
									<p className="theme-text-faint mt-1 text-sm">
										{testimonial.role}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section id="pricing" className="container mx-auto px-4 py-24">
				<motion.div {...fadeInUp} className="mx-auto max-w-3xl text-center">
					<p className="theme-eyebrow text-sm uppercase tracking-[0.36em]">
						Pricing
					</p>
					<h2 className="theme-text-heading mt-4 text-4xl font-semibold">
						Start free, then upgrade when you want speed and stronger guidance.
					</h2>
					<p className="theme-text-soft mt-4 text-lg leading-8">
						Simple SaaS pricing built around individual applicants and small teams.
					</p>
				</motion.div>
				<div className="mt-14 grid gap-6 lg:grid-cols-3">
					{pricingPlans.map((plan, index) => (
						<motion.div
							key={plan.name}
							{...fadeInUp}
							transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
							className={`rounded-[30px] p-8 ${
								plan.highlight ? "theme-surface-highlight" : "theme-surface"
							}`}
						>
							<div className="flex items-start justify-between gap-4">
								<div>
									<h3 className="theme-text-heading text-2xl font-semibold">
										{plan.name}
									</h3>
									<p className="theme-text-soft mt-3 text-sm leading-7">
										{plan.description}
									</p>
								</div>
								{plan.highlight ? (
									<span className="theme-pill-primary rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]">
										Popular
									</span>
								) : null}
							</div>
							<div className="mt-8 flex items-end gap-2">
								<p className="theme-text-heading text-5xl font-semibold">
									{plan.price}
								</p>
								<p className="theme-text-faint pb-2 text-sm">/ month</p>
							</div>
							<div className="mt-8 space-y-3">
								{plan.features.map((feature) => (
									<div
										key={feature}
										className="theme-surface-panel theme-text-muted rounded-2xl px-4 py-3 text-sm"
									>
										{feature}
									</div>
								))}
							</div>
							<Link
								href="/create-resume"
								className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
									plan.highlight
										? "theme-button-primary"
										: "theme-button-secondary"
								}`}
							>
								{plan.name === "Starter" ? "Start free" : `Choose ${plan.name}`}
							</Link>
						</motion.div>
					))}
				</div>
			</section>

			<section id="cta" className="container mx-auto px-4 pb-24">
				<motion.div
					{...fadeInUp}
					className="theme-glass rounded-[36px] border border-[var(--theme-border-strong)] px-6 py-10 shadow-2xl shadow-slate-950/35 sm:px-10"
				>
					<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
						<div className="max-w-2xl">
							<p className="theme-eyebrow text-sm uppercase tracking-[0.36em]">
								Call To Action
							</p>
							<h2 className="theme-text-heading mt-4 text-4xl font-semibold">
								Start building your AI-assisted resume today.
							</h2>
							<p className="theme-text-soft mt-4 text-lg leading-8">
								Use the current builder, preview your draft live, and shape a much
								stronger application workflow from the first session.
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row">
							<Link
								href="/create-resume"
								className="theme-button-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
							>
								<span>Build my resume</span>
								<HiOutlineArrowRight className="text-base" />
							</Link>
							<Link
								href="/dashboard"
								className="theme-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition"
							>
								Open dashboard
							</Link>
						</div>
					</div>
				</motion.div>
			</section>
		</main>
	);
}
