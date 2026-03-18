import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { HiOutlineCheckBadge, HiOutlineSparkles } from "react-icons/hi2";

const qualityMetrics = [
	{ label: "Content quality", value: 94 },
	{ label: "ATS alignment", value: 88 },
	{ label: "Application ready", value: 91 },
];

const activityItems = [
	"Summary rewritten with stronger impact",
	"Experience bullets tightened for recruiter scan speed",
	"Template switched to ATS friendly layout",
];

const recruiterSignals = [
	"Keyword placement feels natural",
	"Layout stays scan-friendly in PDF",
	"Metrics are easy to spot in 6 seconds",
];

export default function HeroProductPreview() {
	const getQualityMatrix = qualityMetrics.map((metric) => (
		<div key={metric.label}>
			<div className="text-secondary/78 mb-2 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em]">
				<span>{metric.label}</span>
				<span>{metric.value}%</span>
			</div>
			<div className="bg-accent/16 h-2.5 rounded-full">
				<div
					className="bg-linear-to-r from-red-500 via-yellow-500 to-green-500 h-2.5 rounded-full"
					style={{
						width: `${metric.value}%`,
					}}
				/>
			</div>
		</div>
	));

	const frontCardContent = (
		<div className="preview-panel-shine relative overflow-hidden rounded-[1.75rem] border border-dark-accent/32 p-3.5 sm:rounded-4xl sm:p-6 theme-product-preview preview-card-face preview-card-front">
			<div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(241,250,238,0.8),transparent)]" />
			<div className="flex flex-col gap-4 border-b border-dark-accent/32 sm:flex-row sm:items-start sm:justify-between">
				<div>
					<div className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-highlight/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent sm:text-xs sm:tracking-[0.24em]">
						<HiOutlineSparkles className="text-sm" />
						Live Product Preview
					</div>
					<h3 className="mt-4 text-lg font-semibold tracking-tight text-secondary sm:text-3xl">
						AI-guided editing with a recruiter-first preview.
					</h3>
				</div>

				<motion.div
					className="my-auto rounded-3xl border border-accent/18 bg-dark-accent/30 p-3.5 backdrop-blur-2xl sm:p-4"
					animate={{ y: [0, -5, 0] }}
					transition={{
						duration: 4.8,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				>
					<div className="flex items-center justify-between gap-3">
						<div>
							<p className="text-highlight/80 text-[10px] text-nowrap font-semibold uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.24em]">
								ATS score
							</p>
							<p className="mt-2 text-3xl font-semibold text-secondary/90 sm:text-4xl">
								92
							</p>
						</div>
						<div className="px-2 py-2 bg-accent text-background rounded-2xl">
							<HiOutlineCheckBadge className="text-2xl" />
						</div>
					</div>
				</motion.div>
			</div>

			<div className="grid gap-4 mt-6 xl:grid-cols-2 justify-items-stretch sm:gap-6">
				<div className="space-y-4">
					<motion.div
						className="rounded-3xl border border-accent/18 bg-dark-accent/30 p-3.5 backdrop-blur-2xl sm:p-5"
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.28, duration: 0.45 }}
					>
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-sm font-semibold text-background sm:h-11 sm:w-11">
								ER
							</div>
							<div>
								<p className="text-base font-semibold text-secondary">
									Emily Roberts
								</p>
								<p className="text-sm text-secondary/60">
									Product Manager
								</p>
							</div>
						</div>

						<div className="mt-5 space-y-4">{getQualityMatrix}</div>
					</motion.div>

					<motion.div
						className="rounded-2xl border border-accent/18 bg-dark-accent/30 p-3.5 backdrop-blur-2xl sm:p-5"
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.45 }}
					>
						<div className="flex items-center justify-between gap-3">
							<div>
								<p className="text-accent/85 text-[10px] uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.3em]">
									AI Suggestions
								</p>
								<div className="flex items-center justify-between mt-2 font-semibold theme-text-heading"></div>
							</div>
						</div>

						<div className="mt-4 space-y-3">
							{activityItems.map((item) => (
								<div key={item}>
									<span className="flex gap-2 text-sm text-secondary/70">
										<motion.div
											className="mt-1"
											animate={{ scale: [1, 1.18, 1] }}
											transition={{
												duration: 2.4,
												repeat: Number.POSITIVE_INFINITY,
												delay: 0.15,
												ease: "easeInOut",
											}}
										>
											<FaCheck className="text-sm text-highligh-text" />
										</motion.div>
										{item}
									</span>
								</div>
							))}
						</div>
					</motion.div>
				</div>

				<motion.div
					className="rounded-3xl border border-accent/18 bg-dark-accent/30 p-3.5 backdrop-blur-2xl sm:p-5"
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.52, duration: 0.45 }}
				>
					<Image
						src="/images/DummyTemplateImage.png"
						alt="Resume template preview"
						width={420}
						height={540}
						className="object-cover w-full h-auto rounded-2xl transition-transform duration-700 ease-out hover:scale-[1.02]"
					/>

					<div className="flex justify-center gap-2 mt-4">
						<span className="px-1 text-xs font-semibold uppercase badge theme-pill-primary">
							Executive
						</span>
						<span className="px-1 text-xs font-semibold uppercase badge theme-pill-primary">
							Minimal
						</span>
						<span className="px-1 text-xs font-semibold uppercase badge theme-pill-primary">
							ATS-ready
						</span>
					</div>
				</motion.div>
			</div>
		</div>
	);

	const backCardContent = (
		<div className="preview-panel-shine preview-card-face preview-card-back relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-dark-accent/32 p-3.5 sm:rounded-4xl sm:p-6 theme-product-preview">
			<div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(241,250,238,0.8),transparent)]" />
			<div>
				<div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent sm:text-xs sm:tracking-[0.24em]">
					<HiOutlineCheckBadge className="text-sm" />
					Recruiter View
				</div>
				<h3 className="mt-4 text-lg font-semibold tracking-tight text-secondary sm:text-3xl">
					Strong first impression with high scan clarity.
				</h3>
				<p className="mt-4 max-w-lg text-[0.92rem] leading-7 text-secondary/72 sm:text-sm">
					The structure stays clean, achievement-heavy, and easy to
					parse on a fast review.
				</p>
			</div>

			<div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-3">
				<div className="rounded-3xl border border-accent/18 bg-dark-accent/30 p-3.5 backdrop-blur-2xl sm:p-4">
					<p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent/82 sm:text-xs sm:tracking-[0.24em]">
						Reading time
					</p>
					<p className="mt-3 text-2xl font-semibold text-secondary sm:text-3xl">
						6s
					</p>
				</div>
				<div className="rounded-3xl border border-accent/18 bg-dark-accent/30 p-3.5 backdrop-blur-2xl sm:p-4">
					<p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent/82 sm:text-xs sm:tracking-[0.24em]">
						Impact score
					</p>
					<p className="mt-3 text-2xl font-semibold text-secondary sm:text-3xl">
						94
					</p>
				</div>
				<div className="rounded-3xl border border-accent/18 bg-dark-accent/30 p-3.5 backdrop-blur-2xl sm:p-4">
					<p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent/82 sm:text-xs sm:tracking-[0.24em]">
						Layout health
					</p>
					<p className="mt-3 text-2xl font-semibold text-secondary sm:text-3xl">
						A+
					</p>
				</div>
			</div>

			<div className="mt-6 rounded-[28px] border border-accent/18 bg-dark-accent/30 p-3.5 backdrop-blur-2xl sm:mt-8 sm:p-5">
				<p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent/82 sm:text-xs sm:tracking-[0.3em]">
					What stands out
				</p>
				<div className="mt-4 space-y-3">
					{recruiterSignals.map((signal) => (
						<div key={signal} className="flex items-start gap-3">
							<div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/12 text-highligh-text">
								<FaCheck className="text-xs" />
							</div>
							<p className="text-sm leading-7 text-secondary/74">
								{signal}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);

	const sideFaceClassName =
		"preview-card-face preview-card-side theme-product-preview relative overflow-hidden border border-dark-accent/28";

	return (
		<motion.div
			className="relative w-full max-w-[42rem] mx-auto"
			initial={{ opacity: 0, x: 36, scale: 0.98 }}
			animate={{ opacity: 1, x: 0, scale: 1 }}
			transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
		>
			<div className="preview-glow preview-glow-left absolute w-32 h-32 rounded-full left-4 top-8 bg-primary/16 blur-3xl sm:left-8 sm:h-44 sm:w-44" />
			<div className="preview-glow preview-glow-right absolute right-0 w-40 h-40 rounded-full top-20 bg-dark-accent/16 blur-3xl sm:h-52 sm:w-52" />
			<div className="preview-glow preview-glow-bottom absolute rounded-full bottom-2 left-1/3 h-28 w-28 bg-dark-accent/22 blur-3xl sm:h-40 sm:w-40" />

			<div className="preview-spin-stage relative overflow-hidden rounded-[1.75rem] border border-dark-accent/50 bg-dark-accent/30 p-2 backdrop-blur-3xl theme-shadow sm:rounded-4xl sm:p-4">
				<motion.div
					className="preview-spin-card relative min-h-[34rem] sm:min-h-[40rem] lg:min-h-[44rem]"
					animate={{ rotateY: [0, 0, 180, 180, 360, 360] }}
					transition={{
						duration: 12,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
						times: [0, 0.125, 0.375, 0.625, 0.875, 1],
					}}
				>
					{frontCardContent}
					{backCardContent}
					<div
						className={`${sideFaceClassName} preview-card-right rounded-r-[1.75rem] sm:rounded-r-4xl`}
					>
						<div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-secondary/18" />
						<div className="absolute inset-x-0 top-0 h-full bg-linear-to-b from-secondary/8 via-accent/8 to-primary/10" />
					</div>
					<div
						className={`${sideFaceClassName} preview-card-left rounded-l-[1.75rem] sm:rounded-l-4xl`}
					>
						<div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-secondary/14" />
						<div className="absolute inset-x-0 top-0 h-full bg-linear-to-b from-background/10 via-dark-accent/20 to-primary/12" />
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}
