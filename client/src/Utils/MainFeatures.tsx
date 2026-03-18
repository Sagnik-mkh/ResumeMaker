import { aiFeatures, staggerItemUp } from "@/constants/Constants";
import { motion } from "framer-motion";

const MainFeatures = aiFeatures.map((feature, index) => {
	const Icon = feature.icon;

	return (
		<motion.div
			key={feature.title}
			variants={staggerItemUp}
			whileHover={{ y: -10, scale: 1.015 }}
			transition={{ duration: 0.28, ease: "easeOut", delay: index * 0.04 }}
			className="group border border-accent/20 bg-linear-to-r from-highligh-text/20 via-dark-accent/45 to-background rounded-[28px] p-6"
		>
			<motion.div
				className="inline-flex items-center justify-center p-4 text-background bg-highligh-text rounded-2xl"
				whileHover={{ rotate: 10, scale: 1.08 }}
				transition={{ duration: 0.25, ease: "easeOut" }}
			>
				<Icon className="text-xl" />
			</motion.div>
			<h3 className="mt-6 text-xl font-semibold text-secondary">
				{feature.title}
			</h3>
			<p className="mt-3 text-sm leading-7 text-secondary/60">
				{feature.description}
			</p>
		</motion.div>
	);
});

export default MainFeatures;
