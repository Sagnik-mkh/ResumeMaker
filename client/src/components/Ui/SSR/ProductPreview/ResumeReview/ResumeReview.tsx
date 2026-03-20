import { productPreviewFrontMotion } from "@/constants/AnimationConstants";
import { productPreviewFrontContent } from "@/constants/ContentConstants";
import LandingQualityMatrix from "@/Utils/LandingQualityMatrix";
import { motion } from "framer-motion";

function ResumeReview() {
	return (
		<motion.div
			className="rounded-3xl border border-accent/18 bg-dark-accent/30 p-3.5 backdrop-blur-2xl sm:p-5"
			{...productPreviewFrontMotion}
		>
			<div className="flex items-center gap-3">
				<div className="flex items-center justify-center w-10 h-10 text-sm font-semibold rounded-2xl bg-accent text-background sm:h-11 sm:w-11">
					{productPreviewFrontContent.profile.shortHand}
				</div>
				<div>
					<p className="text-base font-semibold text-secondary">
						{productPreviewFrontContent.profile.name}
					</p>
					<p className="text-sm text-secondary/60">
						{productPreviewFrontContent.profile.position}
					</p>
				</div>
			</div>

			<div className="mt-5 space-y-4">{LandingQualityMatrix}</div>
		</motion.div>
	);
}

export default ResumeReview;
