import { fadeInUp, pricingPlans } from "@/constants/Constants";
import Link from "next/link";
import { motion } from "framer-motion";

const Price = pricingPlans.map((plan, index) => (
	<motion.div
		key={plan.name}
		{...fadeInUp}
		transition={{
			duration: 0.5,
			ease: "easeOut",
			delay: index * 0.08,
		}}
		className={`rounded-[30px] p-8 ${
			plan.highlight
				? "border-2 border-primary/55 bg-primary/14"
				: "border border-accent/20 bg-dark-accent/35"
		}`}
	>
		<div className="flex items-start justify-between gap-4">
			<div>
				<h3 className="text-2xl font-semibold text-secondary">
					{plan.name}
				</h3>
				<p className="mt-3 text-sm leading-7 text-secondary/60">
					{plan.description}
				</p>
			</div>
			{plan.highlight ? (
				<span className="theme-pill-primary badge text-xs font-medium uppercase tracking-[0.18em]">
					Popular
				</span>
			) : null}
		</div>
		<div className="flex items-end gap-2 mt-8">
			<p className="text-5xl font-semibold text-secondary">
				{plan.price}
			</p>
			<p className="pb-2 text-sm text-accent/60">/ month</p>
		</div>
		<div className="mt-8 space-y-3">
			{plan.features.map((feature) => (
				<div
					key={feature}
					className="px-4 py-3 text-sm border border-accent/18 bg-dark-accent/50 text-accent rounded-2xl"
				>
					{feature}
				</div>
			))}
		</div>
		<Link
			href="/create-resume"
			className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
				plan.highlight
					? "theme-button-primary"
					: "theme-button-secondary"
			}`}
		>
			{plan.name === "Starter" ? "Start free" : `Choose ${plan.name}`}
		</Link>
	</motion.div>
));

export default Price;
