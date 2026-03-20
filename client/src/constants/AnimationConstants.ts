import { TargetAndTransition } from "framer-motion";

export const fadeInUp = {
	initial: { opacity: 0, y: 28 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.55, ease: "easeOut" as const },
};

export const sectionStagger = {
	initial: {},
	whileInView: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.08,
		},
	},
	viewport: { once: true, amount: 0.18 },
};

export const staggerItemUp = {
	initial: { opacity: 0, y: 26, scale: 0.98 },
	whileInView: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export const heroTextReveal = {
	initial: { opacity: 0, y: 30 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export const heroStagger = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.12,
		},
	},
};

export const productPreviewFrontMotion = {
	initial: { opacity: 0, y: 18 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.28,
			duration: 0.45,
		},
	},
};

export const floatingAnimation: {
	animate: TargetAndTransition;
	transition: TargetAndTransition["transition"];
} = {
	animate: {
		y: [0, -5, 0],
	},
	transition: {
		duration: 4.8,
		repeat: Infinity,
		ease: "easeInOut",
	},
};

export const riseIn = {
	initial: {
		opacity: 0,
		y: 18,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
	transition: {
		delay: 0.4,
		duration: 0.45,
	},
};

export const fadeInUpDelayed = {
	initial: { opacity: 0, y: 18 },
	animate: { opacity: 1, y: 0 },
	transition: {
		delay: 0.52,
		duration: 0.45,
	},
};
