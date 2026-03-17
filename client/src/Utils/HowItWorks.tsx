import { fadeInUp, howItWorksSteps } from "@/constants/Constants";
import { motion } from "framer-motion";

const HowItWorks = howItWorksSteps.map((item, index) => {
	const Icon = item.icon;

	return (
		<motion.div
			key={item.title}
			{...fadeInUp}
			transition={{
				duration: 0.5,
				ease: "easeOut",
				delay: index * 0.08,
			}}
			className="theme-shadow border border-accent/20 bg-highligh-text/7 rounded-[30px] p-7"
		>
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center justify-center p-4 bg-highligh-text text-background rounded-2xl">
					<Icon className="text-2xl" />
				</div>
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
