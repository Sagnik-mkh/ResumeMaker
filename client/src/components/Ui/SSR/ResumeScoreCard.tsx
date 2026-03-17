export default function ResumeScoreCard() {
	return (
		<div className="bg-linear-to-b from-transparent to-black/25">
			<section className="container px-4 pb-24 mx-auto">
				<div className="theme-glass grid gap-6 rounded-4xl border border-[--theme-border-strong] p-8 shadow-2xl shadow-slate-950/40 lg:grid-cols-[0.9fr_1.1fr]">
					<div className="flex flex-col justify-between">
						<div>
							<p className="theme-eyebrow text-sm uppercase tracking-[0.36em]">
								Resume score
							</p>
							<h2 className="mt-4 text-4xl font-semibold theme-text-heading">
								Show people the outcome, not just the editor.
							</h2>
							<p className="max-w-lg mt-4 text-lg leading-8 theme-text-soft">
								This section demonstrates what improves after
								using the product: stronger language, better
								targeting, and more confident submissions.
							</p>
						</div>
						<div className="inline-flex items-center gap-3 px-4 py-3 mt-8 text-sm rounded-full theme-badge">
							<span className="h-2 w-2 rounded-full bg-[--theme-success]" />
							Recommended next step: export and tailor to the
							target role
						</div>
					</div>

					<div className="p-6 theme-surface-panel rounded-3xl">
						<div className="flex items-end justify-between">
							<div>
								<p className="text-sm theme-text-faint">
									Overall ATS score
								</p>
								<p className="mt-2 text-6xl font-semibold theme-text-heading animate-scoreNumber">
									92
								</p>
							</div>
							<div className="px-4 py-2 text-sm theme-badge-success rounded-2xl">
								+18 after AI rewrite
							</div>
						</div>

						<div className="mt-8 space-y-5">
							<div>
								<div className="flex justify-between mb-2 text-sm theme-text-soft">
									<span>Target keywords</span>
									<span>96%</span>
								</div>
								<div className="h-3 rounded-full theme-progress-track">
									<div className="theme-progress-fill animate-barFill h-3 rounded-full [--width:96%]" />
								</div>
							</div>
							<div>
								<div className="flex justify-between mb-2 text-sm theme-text-soft">
									<span>Clarity and brevity</span>
									<span>90%</span>
								</div>
								<div className="h-3 rounded-full theme-progress-track">
									<div className="theme-progress-fill animate-barFill h-3 rounded-full [--width:90%]" />
								</div>
							</div>
							<div>
								<div className="flex justify-between mb-2 text-sm theme-text-soft">
									<span>Formatting quality</span>
									<span>88%</span>
								</div>
								<div className="h-3 rounded-full theme-progress-track">
									<div className="theme-progress-fill animate-barFill h-3 rounded-full [--width:88%]" />
								</div>
							</div>
						</div>

						<div className="grid gap-4 mt-8 md:grid-cols-2">
							<div className="p-4 theme-surface-soft rounded-2xl">
								<p className="text-sm theme-text-soft">
									Before
								</p>
								<p className="mt-2 text-sm leading-6 theme-text-main">
									Responsible for building dashboard
									components for the team.
								</p>
							</div>
							<div className="p-4 theme-surface-soft rounded-2xl">
								<p className="text-sm theme-text-soft">
									After
								</p>
								<p className="mt-2 text-sm leading-6 theme-text-main">
									Built dashboard components that reduced
									reporting time and improved decision
									visibility for cross-functional teams.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
