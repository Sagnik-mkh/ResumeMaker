import { fadeInUp } from "@/constants/Constants";
import MainFeatures from "@/Utils/MainFeatures";
import { motion } from "framer-motion";

export default function Features() {
	return (
		<section id="features" className="container px-4 py-24 mx-auto">
			<div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
				<motion.div
					{...fadeInUp}
					className="p-8 bg-linear-to-r from-highligh-text/20 via-dark-accent/45 to-background rounded-4xl"
				>
					<p className="text-accent/86 font-semibold text-sm uppercase tracking-[0.36em]">
						AI Features
					</p>
					<h2 className="mt-4 text-4xl font-semibold text-secondary">
						The AI does the heavy lifting where resume writing
						usually slows down.
					</h2>
					<p className="mt-4 leading-8 text-secondary/60">
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
				<div className="grid gap-4 md:grid-cols-2">{MainFeatures}</div>
			</div>
		</section>
	);
}
