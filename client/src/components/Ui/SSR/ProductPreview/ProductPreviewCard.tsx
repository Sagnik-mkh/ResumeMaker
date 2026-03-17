import Image from "next/image";
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

	return (
		<div className="relative w-full mx-auto">
			<div className="absolute w-32 h-32 rounded-full left-4 top-8 bg-primary/16 blur-3xl sm:left-8 sm:h-44 sm:w-44" />
			<div className="absolute right-0 w-40 h-40 rounded-full top-20 bg-dark-accent/16 blur-3xl sm:h-52 sm:w-52" />
			<div className="absolute rounded-full bottom-2 left-1/3 h-28 w-28 bg-dark-accent/22 blur-3xl sm:h-40 sm:w-40" />

			<div className="relative p-3 overflow-hidden border theme-shadow rounded-4xl border-dark-accent/50 bg-dark-accent/30 backdrop-blur-3xl sm:p-4">
				<div className="relative p-5 overflow-hidden border rounded-4xl border-dark-accent/32 sm:p-6 theme-product-preview">
					<div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(241,250,238,0.8),transparent)]" />
					<div className="flex flex-col gap-4 border-b border-dark-accent/32 sm:flex-row sm:items-start sm:justify-between">
						<div>
							<div className="border border-accent/50 bg-highlight/10 text-accent inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">
								<HiOutlineSparkles className="text-sm" />
								Live Product Preview
							</div>
							<h3 className="mt-4 text-2xl font-semibold tracking-tight text-secondary sm:text-3xl">
								AI-guided editing with a recruiter-first
								preview.
							</h3>
						</div>

						<div className="p-4 my-auto border border-accent/18 bg-dark-accent/30 backdrop-blur-2xl rounded-3xl">
							<div className="flex items-center justify-between gap-3">
								<div>
									<p className="text-highlight/80 text-xs text-nowrap font-semibold uppercase tracking-[0.24em]">
										ATS score
									</p>
									<p className="mt-2 text-4xl font-semibold text-secondary/90">
										92
									</p>
								</div>
								<div className="px-2 py-2 bg-accent text-background rounded-2xl">
									<HiOutlineCheckBadge className="text-2xl" />
								</div>
							</div>
						</div>
					</div>

					<div className="grid gap-6 mt-6 xl:grid-cols-2 justify-items-stretch">
						<div className="space-y-4">
							<div className="p-4 border border-accent/18 bg-dark-accent/30 backdrop-blur-2xl rounded-3xl sm:p-5">
								<div className="flex items-center gap-3">
									<div className="flex items-center justify-center text-sm font-semibold bg-accent text-background h-11 w-11 rounded-2xl">
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

								<div className="mt-5 space-y-4">
									{getQualityMatrix}
								</div>
							</div>

							<div className="p-4 border border-accent/18 bg-dark-accent/30 backdrop-blur-2xl rounded-2xl sm:p-5">
								<div className="flex items-center justify-between gap-3">
									<div>
										<p className="text-accent/85 text-xs uppercase tracking-[0.3em]">
											AI Suggestions
										</p>
										<div className="flex items-center justify-between mt-2 font-semibold theme-text-heading"></div>
									</div>
								</div>

								<div className="mt-4 space-y-3">
									{activityItems.map((item) => (
										<div key={item}>
											<span className="flex gap-2 text-sm text-secondary/70">
												<div className="mt-1">
													<FaCheck className="text-sm text-highligh-text" />
												</div>
												{item}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="p-4 border rounded-3xl border-accent/18 bg-dark-accent/30 backdrop-blur-2xl sm:p-5">
							<Image
								src="/images/DummyTemplateImage.png"
								alt="Resume template preview"
								width={420}
								height={540}
								className="object-cover w-full h-auto rounded-2xl"
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
