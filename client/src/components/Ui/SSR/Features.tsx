export default function Features() {
	return (
		<section id="features" className="container mx-auto px-4 py-24">
			<div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
				<div>
					<p className="theme-eyebrow text-sm uppercase tracking-[0.36em]">
						Features
					</p>
					<h2 className="theme-text-heading mt-4 text-4xl font-semibold">
						Everything the landing page needs to promise, the product
						should already support.
					</h2>
					<p className="theme-text-soft mt-4 max-w-xl text-lg leading-8">
						The page now highlights the actual product story:
						template quality, AI rewriting, ATS scoring, and a faster
						path from experience to submission.
					</p>
				</div>

				<div id="how-it-works" className="grid gap-4 md:grid-cols-2">
					<div className="theme-surface rounded-3xl p-6">
						<p className="theme-eyebrow text-sm uppercase tracking-[0.28em]">
							01
						</p>
						<h3 className="theme-text-heading mt-4 text-2xl font-medium">
							Start from your raw experience
						</h3>
						<p className="theme-text-soft mt-3 leading-7">
							Add work history, education, projects, and links without
							worrying about phrasing or layout first.
						</p>
					</div>
					<div className="theme-surface rounded-3xl p-6">
						<p className="theme-eyebrow text-sm uppercase tracking-[0.28em]">
							02
						</p>
						<h3 className="theme-text-heading mt-4 text-2xl font-medium">
							Get AI suggestions instantly
						</h3>
						<p className="theme-text-soft mt-3 leading-7">
							Improve bullet strength, remove fluff, and align language
							with the job you are targeting.
						</p>
					</div>
					<div className="theme-surface rounded-3xl p-6">
						<p className="theme-eyebrow text-sm uppercase tracking-[0.28em]">
							03
						</p>
						<h3 className="theme-text-heading mt-4 text-2xl font-medium">
							Track your ATS readiness
						</h3>
						<p className="theme-text-soft mt-3 leading-7">
							See keyword alignment, formatting quality, and clarity
							signals before you export.
						</p>
					</div>
					<div className="theme-surface rounded-3xl p-6">
						<p className="theme-eyebrow text-sm uppercase tracking-[0.28em]">
							04
						</p>
						<h3 className="theme-text-heading mt-4 text-2xl font-medium">
							Export a cleaner final resume
						</h3>
						<p className="theme-text-soft mt-3 leading-7">
							Pick a polished template and leave with a resume that is
							easier for recruiters to scan quickly.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
