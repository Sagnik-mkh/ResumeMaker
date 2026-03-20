import { fadeInUp, sectionStagger } from "@/constants/AnimationConstants";
import HowItWorks from "@/Utils/HowItWorks";
import { motion } from "framer-motion";

function Steps() {
	return (
		<section
			id="how-it-works"
			className="container px-4 py-24 mx-auto select-none"
		>
			<motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
				<p className="text-accent/86 text-sm uppercase font-semibold tracking-[0.36em]">
					How It Works
				</p>
				<h2 className="mt-4 text-4xl font-semibold text-secondary">
					A simple 3-step workflow from rough draft to
					application-ready resume.
				</h2>
				<p className="mt-4 text-lg leading-8 text-accent/82">
					The experience is designed to reduce writing friction and
					help you move faster without sacrificing quality.
				</p>
			</motion.div>
			<motion.div
				variants={sectionStagger}
				initial="initial"
				whileInView="whileInView"
				viewport={sectionStagger.viewport}
				className="grid gap-6 mt-14 lg:grid-cols-3"
			>
				{HowItWorks}
			</motion.div>
		</section>
	);
}

export default Steps;
