import { staggerItemUp } from "@/constants/AnimationConstants";
import { templateCards } from "@/constants/ContentConstants";
import { motion } from "framer-motion";
import Image from "next/image";

const TemplateCards = templateCards.map((template, index) => (
	<motion.div
		key={template.name}
		variants={staggerItemUp}
		whileHover={{ y: -12, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
		transition={{ duration: 0.32, ease: "easeOut", delay: index * 0.04 }}
		className="template-card-glow group p-4 border border-accent/15 bg-dark-accent/30 rounded-3xl"
	>
		<div className="p-3 border theme-shadow bg-slate-100/8 border-slate-100/14 rounded-3xl">
			<Image
				src="/images/DummyTemplateImage.png"
				alt={`${template.name} template preview`}
				width={420}
				height={560}
				className="object-cover w-full h-auto rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.04]"
			/>
		</div>
		<div className="flex items-center justify-between gap-3 mt-5">
			<h3 className="text-lg font-semibold text-secondary">
				{template.name}
			</h3>
			<span className="theme-pill-primary rounded-full badge text-xs font-semibold uppercase tracking-[0.18em]">
				{template.accent}
			</span>
		</div>
		<p className="mt-3 text-sm leading-7 text-secondary/70">
			{template.description}
		</p>
	</motion.div>
));

export default TemplateCards;
