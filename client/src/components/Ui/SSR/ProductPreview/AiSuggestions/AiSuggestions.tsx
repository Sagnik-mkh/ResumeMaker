import { riseIn } from "@/constants/AnimationConstants";
import { productPreviewFrontContent } from "@/constants/ContentConstants";
import LandingActivityItems from "@/Utils/LandingActivityItems";
import { motion } from "framer-motion";

function AiSuggestions() {
	return (
		<motion.div
			className="rounded-2xl border border-accent/18 bg-dark-accent/30 p-3.5 backdrop-blur-2xl sm:p-5"
			{...riseIn}
		>
			<div className="flex items-center justify-between gap-3">
				<div>
					<p className="text-accent/85 text-[10px] uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.3em]">
						{productPreviewFrontContent.ai.heading}
					</p>
					<div className="flex items-center justify-between mt-2 font-semibold theme-text-heading" />
				</div>
			</div>

			<div className="mt-4 space-y-3">{LandingActivityItems}</div>
		</motion.div>
	);
}

export default AiSuggestions;
