import { motion } from "framer-motion";
import Price from "@/Utils/Price";
import { fadeInUp, sectionStagger } from "@/constants/AnimationConstants";

export default function PricingPlans() {
	return (
		<section
			id="pricing"
			className="container px-4 py-20 mx-auto select-none sm:py-24"
		>
			<motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
				<p className="text-accent/86 text-sm uppercase tracking-[0.36em]">
					Pricing
				</p>
				<h2 className="mt-4 text-3xl font-semibold text-secondary sm:text-4xl">
					Start free, then upgrade when you want speed and stronger
					guidance.
				</h2>
				<p className="mt-4 text-base leading-7 theme-text-soft sm:text-lg sm:leading-8">
					Simple SaaS pricing built around individual applicants and
					small teams.
				</p>
			</motion.div>
			<motion.div
				variants={sectionStagger}
				initial="initial"
				whileInView="whileInView"
				viewport={sectionStagger.viewport}
				className="grid gap-6 mt-14 lg:grid-cols-3"
			>
				{Price}
			</motion.div>
		</section>
	);
}
