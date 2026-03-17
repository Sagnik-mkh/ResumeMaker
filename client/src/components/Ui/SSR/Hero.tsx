import Button from "../CSR/Button";
import ProductPreviewCard from "./ProductPreviewCard";

type Props = {
	OnClickHandler: () => void;
};

export default function Hero({ OnClickHandler }: Props) {
	return (
		<section id="top" className="relative overflow-hidden theme-hero">
			<div className="absolute inset-x-0 top-0 h-px bg-(--theme-border-strong)" />
			<div className="container relative mx-auto grid min-h-[calc(100vh-73px)] items-center gap-12 px-4 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
				<div className="max-w-2xl">
					<div className="theme-badge inline-flex max-w-full items-center gap-3 rounded-full px-4 py-2 text-xs shadow-[0_0_40px_rgba(8,17,32,0.35)] sm:text-sm">
						<span className="w-2 h-2 bg-current rounded-full theme-text-accent" />
						ATS score guidance, AI writing, and instant formatting
					</div>
					<h1 className="mt-8 text-4xl font-semibold tracking-tight theme-text-heading sm:text-3xl md:text-5xl">
						Build a resume that reads like your best interview.
					</h1>
					<p className="max-w-xl mt-6 text-sm leading-7 theme-text-muted md:text-base sm:leading-8">
						ResuMake turns rough experience into sharp, role-ready
						resumes with cleaner formatting, stronger bullets, and
						real-time ATS feedback.
					</p>
					<div className="flex flex-col gap-4 mt-10 sm:flex-row">
						<div className="inline-flex w-full sm:w-auto">
							<Button
								OnClickHandler={OnClickHandler}
								btnSize="btn-lg w-full sm:w-auto"
								btnText="Build My Resume"
								btnStyle="theme-button-primary transition-transform duration-300 ease-out will-change-transform"
							/>
						</div>
						<Button
							btnSize="btn-lg w-full sm:w-auto"
							btnText="See Templates"
							btnStyle="theme-button-secondary"
						/>
					</div>
					<div className="grid gap-4 mt-12 sm:grid-cols-3">
						<div className="p-4 theme-surface-strong rounded-2xl">
							<p className="text-3xl font-semibold theme-text-heading">
								2 min
							</p>
							<p className="mt-1 text-sm theme-text-soft">
								From blank page to polished first draft
							</p>
						</div>
						<div className="p-4 theme-surface-strong rounded-2xl">
							<p className="text-3xl font-semibold theme-text-heading">
								5
							</p>
							<p className="mt-1 text-sm theme-text-soft">
								Layouts built for recruiters and ATS scans
							</p>
						</div>
						<div className="p-4 theme-surface-strong rounded-2xl">
							<p className="text-3xl font-semibold theme-text-heading">
								1 click
							</p>
							<p className="mt-1 text-sm theme-text-soft">
								Tone, clarity, and keyword improvements
							</p>
						</div>
					</div>
				</div>
				<ProductPreviewCard />
			</div>
		</section>
	);
}
