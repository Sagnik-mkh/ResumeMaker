import { staggerItemUp } from "@/constants/AnimationConstants";
import { howItWorksSteps } from "@/constants/ContentConstants";
import { motion } from "framer-motion";

const HowItWorks = howItWorksSteps.map((item, index) => {
	const Icon = item.icon;

	return (
		<motion.div
			key={item.title}
			variants={staggerItemUp}
			whileHover={{
				y: -10,
				scale: 1.015,
				boxShadow: "0 30px 80px rgba(8,18,33,0.38)",
			}}
			transition={{
				duration: 0.28,
				ease: "easeOut",
				delay: index * 0.04,
			}}
			className="theme-shadow group border border-accent/20 bg-highligh-text/7 rounded-[30px] p-7"
		>
			<div className="flex items-center justify-between gap-4">
				<motion.div
					className="flex items-center justify-center p-4 bg-highligh-text text-background rounded-2xl"
					whileHover={{ rotate: -8, scale: 1.08 }}
					transition={{ duration: 0.25, ease: "easeOut" }}
				>
					<Icon className="text-2xl" />
				</motion.div>
				<p className="text-accent/86 text-xs font-semibold uppercase tracking-[0.28em]">
					{item.step}
				</p>
			</div>
			<h3 className="mt-8 text-2xl font-semibold text-secondary">
				{item.title}
			</h3>
			<p className="mt-4 text-sm leading-7 text-secondary/82">
				{item.description}
			</p>
		</motion.div>
	);
});

export default HowItWorks;
