import { fadeInUp } from "@/constants/Constants";
import { motion } from "framer-motion";
import Price from "@/Utils/Price";

export default function PricingPlans() {
	return (
		<section id="pricing" className="container px-4 py-24 mx-auto select-none">
			<motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
				<p className="text-accent/86 text-sm uppercase tracking-[0.36em]">
					Pricing
				</p>
				<h2 className="mt-4 text-4xl font-semibold text-secondary">
					Start free, then upgrade when you want speed and stronger
					guidance.
				</h2>
				<p className="mt-4 text-lg leading-8 theme-text-soft">
					Simple SaaS pricing built around individual applicants and
					small teams.
				</p>
			</motion.div>
			<div className="grid gap-6 mt-14 lg:grid-cols-3">
				{Price}
			</div>
		</section>
	);
}
