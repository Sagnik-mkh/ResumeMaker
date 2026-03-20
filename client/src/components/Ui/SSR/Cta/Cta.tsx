import { fadeInUp } from "@/constants/AnimationConstants";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

function Cta() {
	return (
		<section
			id="cta"
			className="container px-4 pb-20 mx-auto select-none sm:pb-24"
		>
			<motion.div
				{...fadeInUp}
				whileHover={{ y: -8, scale: 1.01 }}
				transition={{ duration: 0.35, ease: "easeOut" }}
				className="cta-shell container mx-auto rounded-4xl border border-slate-100/20 bg-linear-to-r from-background to-slate-900/50 px-5 py-8 shadow-2xl theme-shadow sm:rounded-4xl sm:px-10 sm:py-10"
			>
				<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
					<div className="max-w-2xl">
						<p className="text-accent/86 text-sm uppercase tracking-[0.36em]">
							Call To Action
						</p>
						<h2 className="mt-4 text-3xl font-semibold text-secondary sm:text-4xl">
							Start building your AI-assisted resume today.
						</h2>
						<p className="mt-4 text-base leading-7 text-secondary/60 sm:text-lg sm:leading-8">
							Use the current builder, preview your draft live,
							and shape a much stronger application workflow from
							the first session.
						</p>
					</div>
					<div className="flex flex-col gap-3 sm:flex-row">
						<Link
							href="/create-resume"
							className="font-semibold border-none rounded-full btn btn-lg bg-primary text-secondary"
						>
							<span>Build my resume</span>
							<HiOutlineArrowRight className="text-base" />
						</Link>
						<Link
							href="/dashboard"
							className="font-semibold transition border-none rounded-full btn btn-lg theme-button-secondary"
						>
							Open dashboard
						</Link>
					</div>
				</div>
			</motion.div>
		</section>
	);
}

export default Cta;
