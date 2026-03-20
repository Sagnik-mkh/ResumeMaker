import { productPreviewFrontContent } from "@/constants/ContentConstants";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const LandingActivityItems = productPreviewFrontContent.ai.activityItems.map(
	(item) => (
		<div key={item}>
			<span className="flex gap-2 text-sm text-secondary/70">
				<motion.div
					className="mt-1"
					animate={{ scale: [1, 1.18, 1] }}
					transition={{
						duration: 2.4,
						repeat: Number.POSITIVE_INFINITY,
						delay: 0.15,
						ease: "easeInOut",
					}}
				>
					<FaCheck className="text-sm text-highligh-text" />
				</motion.div>
				{item}
			</span>
		</div>
	),
);

export default LandingActivityItems;
