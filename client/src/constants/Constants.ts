import {
	HiOutlineBolt,
	HiOutlineCheckBadge,
	HiOutlineClipboardDocumentList,
	HiOutlineCpuChip,
	HiOutlineDocumentDuplicate,
	HiOutlineRocketLaunch,
	HiOutlineSparkles,
} from "react-icons/hi2";

export const BASE_URL = "http://localhost:3001/api";

export const NavFallbackData = {
	brandName: "ResumeMaker",
	navItems: [
		{ title: "Templates", order: 1 },
		{ title: "Features", order: 2 },
		{ title: "How It Works", order: 3 },
		{ title: "Reviews", order: 4 },
	],
	button: [
		{ text: "Login", order: 1 },
		{ text: "Start Free", order: 2 },
	],
};

export const Stars = [
	{ top: "10%", left: "8%", size: "h-1 w-1", delay: "0s", duration: "7s" },
	{
		top: "18%",
		left: "22%",
		size: "h-1.5 w-1.5",
		delay: "1.1s",
		duration: "9s",
	},
	{ top: "12%", left: "48%", size: "h-1 w-1", delay: "2.4s", duration: "8s" },
	{
		top: "28%",
		left: "66%",
		size: "h-1 w-1",
		delay: "0.6s",
		duration: "10s",
	},
	{
		top: "20%",
		left: "84%",
		size: "h-1.5 w-1.5",
		delay: "1.8s",
		duration: "8.5s",
	},
	{
		top: "38%",
		left: "12%",
		size: "h-1 w-1",
		delay: "2.9s",
		duration: "9.5s",
	},
	{
		top: "44%",
		left: "36%",
		size: "h-1.5 w-1.5",
		delay: "1.4s",
		duration: "7.5s",
	},
	{
		top: "34%",
		left: "58%",
		size: "h-1 w-1",
		delay: "0.2s",
		duration: "8.5s",
	},
	{ top: "52%", left: "74%", size: "h-1 w-1", delay: "2.1s", duration: "9s" },
	{
		top: "62%",
		left: "18%",
		size: "h-1.5 w-1.5",
		delay: "0.9s",
		duration: "10s",
	},
	{ top: "68%", left: "42%", size: "h-1 w-1", delay: "1.7s", duration: "8s" },
	{
		top: "72%",
		left: "88%",
		size: "h-1 w-1",
		delay: "2.7s",
		duration: "9.5s",
	},
	{
		top: "82%",
		left: "28%",
		size: "h-1 w-1",
		delay: "0.5s",
		duration: "8.5s",
	},
	{
		top: "86%",
		left: "60%",
		size: "h-1.5 w-1.5",
		delay: "1.3s",
		duration: "7.8s",
	},
];

export const heroStats = [
	{
		value: "2 min",
		label: "From blank page to polished first draft",
	},
	{
		value: "5 layouts",
		label: "Designed for ATS scans and recruiter reviews",
	},
	{
		value: "1 click",
		label: "Tone, clarity, and keyword improvements",
	},
];

export const howItWorksSteps = [
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

export const templateCards = [
	{
		name: "Executive Minimal",
		accent: "ATS-first",
		description:
			"Balanced spacing, clear hierarchy, and zero visual clutter.",
	},
	{
		name: "Modern Gradient",
		accent: "Creative Pro",
		description: "A sharper look for product, design, and growth roles.",
	},
	{
		name: "Compact Recruiter",
		accent: "1-page",
		description:
			"Dense but scannable for high-signal technical applications.",
	},
	{
		name: "Professional Classic",
		accent: "Universal",
		description: "Clean, familiar layout for broad industry compatibility.",
	},
];

export const aiFeatures = [
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

export const testimonials = [
	{
		quote: "I stopped fighting formatting and focused on the story. The AI suggestions made my resume sound senior instead of generic.",
		name: "Aarav Mehta",
		role: "Frontend Engineer",
	},
	{
		quote: "The templates look modern without trying too hard. Recruiters commented on how clean and easy to scan my resume was.",
		name: "Priya Sharma",
		role: "Product Analyst",
	},
	{
		quote: "The biggest win was speed. I had a polished base draft fast, then tailored it for each job instead of rewriting from zero.",
		name: "Rohan Patel",
		role: "Operations Associate",
	},
];

export const pricingPlans = [
	{
		name: "Starter",
		price: "$0",
		description: "For testing the workflow and building your first draft.",
		features: [
			"1 resume",
			"Basic templates",
			"Manual editing",
			"PDF export",
		],
		highlight: false,
	},
	{
		name: "Pro",
		price: "$19",
		description:
			"For applicants who want AI speed, better writing, and stronger results.",
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
		description:
			"For coaches, career services, and shared resume review workflows.",
		features: [
			"Shared workspace",
			"Review collaboration",
			"Template library",
			"Priority support",
		],
		highlight: false,
	},
];

export const fadeInUp = {
	initial: { opacity: 0, y: 28 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.55, ease: "easeOut" as const },
};
