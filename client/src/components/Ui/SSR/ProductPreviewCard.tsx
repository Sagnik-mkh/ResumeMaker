import Image from "next/image";

export default function HeroProductPreview() {
	return (
		<div className="relative w-full max-w-xl mx-auto">
			<div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-[--theme-accent-soft] blur-3xl sm:left-12 sm:top-12 sm:h-44 sm:w-44" />
			<div className="absolute bottom-6 right-6 h-28 w-28 rounded-full bg-[--theme-primary-soft] blur-3xl sm:bottom-10 sm:right-10 sm:h-40 sm:w-40" />
			<div className="relative p-3 theme-surface-strong theme-shadow rounded-3xl sm:p-4 backdrop-blur-2xl">
				<div className="theme-surface-solid rounded-2xl border border-[--theme-border-strong] p-4 sm:p-5">
					<div className="flex items-center justify-between">
						<div>
							<p className="theme-eyebrow text-sm uppercase tracking-[0.32em]">
								Live Preview
							</p>
							<h3 className="mt-2 text-xl font-semibold theme-text-heading sm:text-2xl">
								Smart resume editor
							</h3>
						</div>
						<div className="px-3 py-1 text-xs font-medium rounded-full theme-badge-success">
							ATS 92
						</div>
					</div>

					<div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
						<div className="p-4 theme-surface-soft rounded-3xl">
							<div className="flex items-center gap-3">
								<div className="flex items-center justify-center w-10 h-10 text-sm font-semibold theme-icon-accent theme-text-heading rounded-2xl">
									ER
								</div>
								<div>
									<p className="font-medium theme-text-heading">
										Emily Roberts
									</p>
									<p className="text-sm theme-text-faint">
										Product Manager
									</p>
								</div>
							</div>

							<div className="mt-5 space-y-3">
								<div>
									<div className="flex items-center justify-between text-xs theme-text-faint">
										<span>Content Quality</span>
										<span>94%</span>
									</div>
									<progress
										className="h-2 progress gradient-progress"
										value={94}
										max={100}
									></progress>
								</div>
								<div>
									<div className="flex items-center justify-between text-xs theme-text-faint">
										<span>ATS & Structure</span>
										<span>88%</span>
									</div>
									<progress
										className="h-2 progress gradient-progress"
										value={88}
										max={100}
									></progress>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1 text-xs theme-text-faint">
										<span>Application Ready</span>
										<span>91%</span>
									</div>
									<progress
										className="h-2 progress gradient-progress"
										value={91}
										max={100}
									></progress>
								</div>
							</div>

							<div className="p-3 mt-5 theme-surface-soft rounded-2xl">
								<p className="theme-text-faint text-xs font-semibold uppercase tracking-[0.28em]">
									AI suggestion
								</p>
								<p className="mt-2 text-sm leading-6 theme-text-muted">
									Rewrite your summary to emphasize measurable
									results and remove passive phrasing.
								</p>
							</div>
						</div>

						<div
							id="templates"
							className="p-4 theme-surface-soft theme-card-gradient rounded-3xl"
						>
							<div className="rounded-[22px] bg-white p-3 shadow-2xl">
								<Image
									src="/images/DummyTemplateImage.png"
									alt="Resume template preview"
									width={420}
									height={540}
									className="object-cover w-full h-auto rounded-2xl"
								/>
							</div>
							<div className="grid grid-cols-3 gap-3 mt-4">
								<div className="p-3 text-xs text-center theme-surface-strong theme-text-soft rounded-2xl">
									Modern
								</div>
								<div className="p-3 text-xs text-center theme-surface-strong theme-text-soft rounded-2xl">
									Minimal
								</div>
								<div className="p-3 text-xs text-center theme-surface-strong theme-text-soft rounded-2xl">
									ATS
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
