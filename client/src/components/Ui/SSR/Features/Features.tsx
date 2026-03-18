import { fadeInUp, sectionStagger } from "@/constants/Constants";
import MainFeatures from "@/Utils/MainFeatures";
import { motion } from "framer-motion";

export default function Features() {
	return (
		<section id="features" className="container px-4 py-20 mx-auto select-none sm:py-24">
			<div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
				<motion.div
					{...fadeInUp}
					className="rounded-[2rem] bg-linear-to-r from-highligh-text/20 via-dark-accent/45 to-background p-6 sm:rounded-4xl sm:p-8"
				>
					<p className="text-accent/86 font-semibold text-sm uppercase tracking-[0.36em]">
						AI Features
					</p>
					<h2 className="mt-4 text-3xl font-semibold text-secondary sm:text-4xl">
						The AI does the heavy lifting where resume writing
						usually slows down.
					</h2>
					<p className="mt-4 text-sm leading-7 text-secondary/60 sm:text-base sm:leading-8">
						Use AI to tighten bullet points, improve clarity, tailor
						for role context, and catch weak phrasing before you
						apply.
					</p>
					<div className="p-5 mt-8 border bg-highlight/15 border-highlight/8 rounded-3xl">
						<p className="text-highlight/78 text-xs font-semibold uppercase tracking-[0.28em]">
							Why it works ?
						</p>
						<p className="mt-3 text-sm leading-7 text-secondary">
							Most resume builders stop at formatting. This one
							helps with the actual writing quality, which is
							usually the harder problem.
						</p>
					</div>
				</motion.div>
				<motion.div
					variants={sectionStagger}
					initial="initial"
					whileInView="whileInView"
					viewport={sectionStagger.viewport}
					className="grid gap-4 md:grid-cols-2"
				>
					{MainFeatures}
				</motion.div>
			</div>
		</section>
	);
}
