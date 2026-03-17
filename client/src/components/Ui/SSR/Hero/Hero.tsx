import HeroStats from "@/Utils/HeroStats";
import Button from "../../CSR/Button";
import ProductPreviewCard from "../ProductPreview/ProductPreviewCard";
import HeroStars from "@/Utils/HeroStars";
import { motion } from "framer-motion";
import { fadeInUp } from "@/constants/Constants";

type Props = {
	OnClickHandler: () => void;
};

export default function Hero({ OnClickHandler }: Props) {
	return (
		<section
			id="top"
			className="relative min-h-screen overflow-hidden select-none theme-hero hero"
		>
			<div className="hero-overlay" />
			<div className="absolute inset-0 pointer-events-none opacity-80">
				{HeroStars}
			</div>
			<motion.div
				{...fadeInUp}
				className="hero-content container relative z-10 mx-auto grid items-center gap-12 p-0 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
			>
				<div className="max-w-2xl">
					<div className="border border-highligh-text text-highligh-text bg-highligh-text/10 inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs shadow-[0_0_40px_rgba(8,17,32,0.35)] sm:text-sm">
						<span className="w-2 h-2 rounded-full bg-highligh-text" />
						ATS score guidance, AI writing, and instant formatting
					</div>
					<h1 className="mt-8 text-4xl font-semibold tracking-tight text-secondary sm:text-3xl md:text-7xl">
						Build a resume that reads like your best interview.
					</h1>
					<p className="max-w-xl mt-6 text-sm leading-7 text-accent/80 md:text-base sm:leading-8">
						ResuMake turns rough experience into sharp, role-ready
						resumes with cleaner formatting, stronger bullets, and
						real-time ATS feedback.
					</p>
					<div className="flex flex-col gap-4 mt-10 sm:flex-row">
						<div className="inline-flex w-full sm:w-auto">
							<Button
								OnClickHandler={OnClickHandler}
								btnSize="btn-lg w-full sm:w-auto"
								btnText="Build My Resume"
								btnStyle="theme-button-primary transition-transform duration-300 ease-out will-change-transform"
							/>
						</div>
						<Button
							btnSize="btn-lg w-full sm:w-auto"
							btnText="See Templates"
							btnStyle="theme-button-secondary"
						/>
					</div>

					<div className="grid gap-4 mt-12 sm:grid-cols-3">
						{HeroStats}
					</div>
				</div>
				<ProductPreviewCard />
			</motion.div>
		</section>
	);
}
