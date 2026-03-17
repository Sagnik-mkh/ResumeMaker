import ResumeWorkspace from "@/components/resume/ResumeWorkspace";

export default function CreateResume() {
	return (
		<main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl space-y-6">
				<section className="theme-glass rounded-[32px] border border-[var(--theme-border-strong)] px-6 py-8 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-8">
					<div className="max-w-3xl">
						<p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.32em]">
							Create Resume
						</p>
						<h1 className="theme-text-heading mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
							Build, refine, preview, and export your resume from one workspace.
						</h1>
						<p className="theme-text-soft mt-4 text-base leading-8">
							Edit every section in the left panel, generate stronger starter copy,
							switch templates on the right, and print the preview as PDF when the
							draft is ready.
						</p>
					</div>
				</section>

				<ResumeWorkspace />
			</div>
		</main>
	);
}
