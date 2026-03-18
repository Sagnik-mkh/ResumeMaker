import { fadeInUp } from "@/constants/Constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

function Cta() {
	return (
		<section id="cta" className="container px-4 pb-24 mx-auto select-none">
			<motion.div
				{...fadeInUp}
				className="container px-6 py-10 mx-auto border shadow-2xl bg-linear-to-r from-background to-slate-900/50 rounded-4xl border-slate-100/20 theme-shadow sm:px-10"
			>
				<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
					<div className="max-w-2xl">
						<p className="text-accent/86 text-sm uppercase tracking-[0.36em]">
							Call To Action
						</p>
						<h2 className="mt-4 text-4xl font-semibold text-secondary">
							Start building your AI-assisted resume today.
						</h2>
						<p className="mt-4 text-lg leading-8 text-secondary/60">
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
