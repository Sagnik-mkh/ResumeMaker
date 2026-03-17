import { fadeInUp, templateCards } from "@/constants/Constants";
import TemplateCards from "@/Utils/TemplateCards";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function TemplatePreview() {
	return (
		<section id="templates">
			<div className="container px-4 py-24 mx-auto">
				<motion.div
					{...fadeInUp}
					className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
				>
					<div className="max-w-2xl select-none">
						<p className="text-accent/88 font-semibold text-sm uppercase tracking-[0.36em]">
							Templates Preview
						</p>
						<h2 className="mt-4 text-4xl font-semibold text-secondary">
							Polished templates that look modern without getting
							in the way.
						</h2>
						<p className="mt-4 text-lg leading-8 text-secondary/70">
							Every layout is built for readability first, with
							cleaner spacing, clear headings, and stronger visual
							hierarchy.
						</p>
					</div>
					<Link
						href="/create-resume"
						className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition rounded-full theme-button-secondary"
					>
						Use a template
					</Link>
				</motion.div>
				<div className="grid gap-6 select-none mt-14 md:grid-cols-2 xl:grid-cols-4">
					{TemplateCards}
				</div>
			</div>
		</section>
	);
}

export default TemplatePreview;
