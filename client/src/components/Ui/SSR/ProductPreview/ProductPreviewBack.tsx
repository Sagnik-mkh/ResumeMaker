import { FaCheck } from "react-icons/fa";
import { HiOutlineCheckBadge } from "react-icons/hi2";

const recruiterSignals = [
	"Keyword placement feels natural",
	"Layout stays scan-friendly in PDF",
	"Metrics are easy to spot in 6 seconds",
];

export default function ProductPreviewBack() {
	return (
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
					The structure stays clean, achievement-heavy, and easy to parse on a
					fast review.
				</p>
			</div>

			<div className="grid gap-4 mt-6 sm:mt-8 sm:grid-cols-3">
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
							<div className="flex items-center justify-center w-6 h-6 mt-1 rounded-full shrink-0 bg-highlight/12 text-highligh-text">
								<FaCheck className="text-xs" />
							</div>
							<p className="text-sm leading-7 text-secondary/74">{signal}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
