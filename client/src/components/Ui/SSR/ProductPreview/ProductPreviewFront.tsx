import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineCheckBadge, HiOutlineSparkles } from "react-icons/hi2";
import {
	fadeInUpDelayed,
	floatingAnimation,
} from "@/constants/AnimationConstants";
import { productPreviewFrontContent } from "@/constants/ContentConstants";
import ProductPreviewReview from "@/Utils/ProductPreviewReview";
import ResumeReview from "./ResumeReview/ResumeReview";
import AiSuggestions from "./AiSuggestions/AiSuggestions";

export default function ProductPreviewFront() {
	return (
		<div className="preview-panel-shine relative overflow-hidden rounded-3xl border border-dark-accent/32 p-3.5 sm:rounded-4xl sm:p-6 theme-product-preview preview-card-face preview-card-front">
			<div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(241,250,238,0.8),transparent)]" />
			<div className="flex flex-col gap-4 border-b border-dark-accent/32 sm:flex-row sm:items-start sm:justify-between">
				<div>
					<div className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-highlight/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent sm:text-xs sm:tracking-[0.24em]">
						<HiOutlineSparkles className="text-sm" />
						{productPreviewFrontContent.badge}
					</div>
					<h3 className="mt-4 text-lg font-semibold tracking-tight text-secondary sm:text-3xl">
						{productPreviewFrontContent.heading}
					</h3>
				</div>

				<motion.div
					className="my-auto rounded-3xl border border-accent/18 bg-dark-accent/30 p-3.5 backdrop-blur-2xl sm:p-4"
					{...floatingAnimation}
				>
					<div className="flex items-center justify-between gap-3">
						<div>
							<p className="text-highlight/80 text-[10px] text-nowrap font-semibold uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.24em]">
								{productPreviewFrontContent.ats.heading}
							</p>
							<p className="mt-2 text-3xl font-semibold text-secondary/90 sm:text-4xl">
								{productPreviewFrontContent.ats.score}
							</p>
						</div>
						<div className="px-2 py-2 bg-accent text-background rounded-2xl">
							<HiOutlineCheckBadge className="text-2xl" />
						</div>
					</div>
				</motion.div>
			</div>

			<div className="grid gap-4 mt-6 xl:grid-cols-2 justify-items-stretch sm:gap-6">
				<div className="space-y-4">
					<ResumeReview />
					<AiSuggestions />
				</div>

				<motion.div
					className="rounded-3xl border border-accent/18 bg-dark-accent/30 p-3.5 backdrop-blur-2xl sm:p-5"
					{...fadeInUpDelayed}
				>
					<Image
						src="/images/DummyTemplateImage.png"
						alt="Resume template preview"
						width={420}
						height={540}
						className="object-cover rounded-2xl transition-transform duration-700 ease-out hover:scale-[1.02]"
					/>
					{ProductPreviewReview()}
				</motion.div>
			</div>
		</div>
	);
}
