import HeroStats from "@/Utils/HeroStats";
import Button from "../../CSR/Button";
import ProductPreviewCard from "../ProductPreview/ProductPreviewCard";
import HeroStars from "@/Utils/HeroStars";
import { motion } from "framer-motion";
import { heroStagger, heroTextReveal } from "@/constants/Constants";

type Props = {
	OnClickHandler: () => void;
};

const HeroBage = "ATS score guidance, AI writing, and instant formatting";
const HeroMain = "Build a resume that reads like your best interview.";
const HeroAbout =
	"ResuMake turns rough experience into sharp, role-ready resumes with cleaner formatting, stronger bullets, and real-time ATS feedback.";

export default function Hero({ OnClickHandler }: Props) {
	return (
		<section
			id="top"
			className="relative min-h-screen overflow-hidden select-none theme-hero hero"
		>
			<div className="hero-overlay" />
			<div className="hero-light-beam hero-light-beam-left" />
			<div className="hero-light-beam hero-light-beam-right" />
			<div className="absolute inset-0 pointer-events-none opacity-80">
				{HeroStars}
			</div>
			<motion.div
				variants={heroStagger}
				initial="initial"
				animate="animate"
				className="hero-content container relative z-10 mx-auto grid items-center gap-12 py-24 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-32"
			>
				<div className="max-w-2xl">
					<motion.div
						variants={heroTextReveal}
						className="inline-flex max-w-full items-center gap-2 rounded-full border border-highligh-text bg-highligh-text/10 px-3 py-2 text-[10px] text-highligh-text theme-shadow sm:gap-3 sm:px-4 sm:text-sm"
					>
						<span className="w-2 h-2 rounded-full bg-highligh-text" />
						<span className="truncate">{HeroBage}</span>
					</motion.div>
					<motion.h1
						variants={heroTextReveal}
						className="mt-8 text-[2.15rem] font-semibold tracking-tight text-secondary sm:text-5xl md:text-6xl lg:text-7xl"
					>
						{HeroMain}
					</motion.h1>
					<motion.p
						variants={heroTextReveal}
						className="max-w-xl mt-6 text-base leading-7 theme-text-faint sm:text-base sm:leading-8"
					></motion.p>
					<motion.div
						variants={heroTextReveal}
						className="flex flex-col gap-4 mt-10 sm:flex-row"
					>
						<div className="inline-flex w-full sm:w-auto">
							<motion.div
								whileHover={{ y: -4, scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								transition={{ duration: 0.22, ease: "easeOut" }}
								className="w-full sm:w-auto"
							>
								<Button
									OnClickHandler={OnClickHandler}
									btnSize="btn-lg w-full sm:w-auto"
									btnText="Build My Resume"
									btnStyle="theme-button-primary transition-transform duration-300 ease-out will-change-transform"
								/>
							</motion.div>
						</div>
						<motion.div
							whileHover={{ y: -4, scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							transition={{ duration: 0.22, ease: "easeOut" }}
							className="w-full sm:w-auto"
						>
							<Button
								btnSize="btn-lg w-full sm:w-auto"
								btnText="See Templates"
								btnStyle="theme-button-secondary"
							/>
						</motion.div>
					</motion.div>

					<motion.div
						variants={heroTextReveal}
						className="grid gap-4 mt-12 sm:grid-cols-3"
					>
						{HeroStats}
					</motion.div>
				</div>
				<motion.div
					variants={heroTextReveal}
					className="w-full lg:max-w-none"
				>
					<motion.div
						animate={{
							y: [0, -10, 0],
							transition: {
								duration: 7,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							},
						}}
					>
						<ProductPreviewCard />
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
