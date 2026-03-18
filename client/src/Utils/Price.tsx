import { pricingPlans, staggerItemUp } from "@/constants/Constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";

const Price = pricingPlans.map((plan, index) => (
	<motion.div
		key={plan.name}
		variants={staggerItemUp}
		whileHover={{ y: -12, scale: 1.015 }}
		transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.03 }}
		className={`group relative overflow-hidden rounded-4xl p-8 transition-all duration-300 hover:-translate-y-1 ${
			plan.highlight
				? "border border-primary/35 bg-linear-to-b from-primary/10 via-background/88 to-black/95 shadow-[0_30px_100px_rgba(8,18,33,0.45)]"
				: "border border-accent/14 bg-linear-to-b from-[#112744] via-background/82 to-black/92 shadow-[0_24px_80px_rgba(8,18,33,0.34)]"
		}`}
	>
		<div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-secondary/45 to-transparent" />
		<div className="pricing-card-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/2" />
		<div className="flex items-start justify-between gap-4">
			<div>
				<p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent/72">
					{plan.name === "Starter"
						? "For first drafts"
						: plan.name === "Pro"
							? "For serious applicants"
							: "For collaborative review"}
				</p>
				<h3 className="mt-4 text-3xl font-semibold text-secondary">
					{plan.name}
				</h3>
				<p className="mt-3 max-w-xs text-sm leading-7 text-secondary/66">
					{plan.description}
				</p>
			</div>
			{plan.highlight ? (
				<span className="rounded-full border border-secondary/18 bg-secondary text-xs font-semibold uppercase tracking-[0.24em] text-background px-3 py-2">
					Popular
				</span>
			) : null}
		</div>
		<div className="mt-10 flex items-end gap-3 border-b border-secondary/10 pb-8">
			<p className="text-5xl font-semibold tracking-tight text-secondary">
				{plan.price}
			</p>
			<p className="pb-2 text-sm uppercase tracking-[0.2em] text-accent/58">
				per month
			</p>
		</div>
		<div className="mt-8">
			<p className="text-xs font-semibold uppercase tracking-[0.26em] text-secondary/48">
				Includes
			</p>
		</div>
		<ul className="mt-5 space-y-4">
			{plan.features.map((feature) => (
				<li
					key={feature}
					className="flex items-start gap-3 text-sm leading-7 text-highligh-text/88"
				>
					<span
						className={`mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
							plan.highlight
								? "border-highligh-text/22 bg-highligh-text/10 text-highligh-text"
								: "border-highligh-text/18 bg-highligh-text/8 text-highligh-text"
						}`}
					>
						<HiCheck className="h-4 w-4 stroke-1" />
					</span>
					<span>{feature}</span>
				</li>
			))}
		</ul>
		<Link
			href="/create-resume"
			className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition ${
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
