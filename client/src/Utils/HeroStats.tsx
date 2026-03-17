import { heroStats } from "@/constants/Constants";

const HeroStats = heroStats.map((item) => (
	<div
		key={item.value}
		className="px-5 py-5 transition duration-300 border group rounded-3xl border-accent/32 bg-background/58 backdrop-blur-2xl hover:-translate-y-1 hover:border-accent/20 hover:bg-dark-accent/72 hover:theme-shadow"
	>
		<div className="mb-4 h-px w-14 bg-[linear-gradient(90deg,var(--accent),transparent)] transition-all duration-300 group-hover:w-20 group-hover:opacity-100" />
		<p className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-secondary sm:text-3xl">
			{item.value}
		</p>
		<p className="mt-2 text-sm leading-6 transition-colors duration-300 theme-text-soft group-hover:text-secondary/90">
			{item.label}
		</p>
	</div>
));

export default HeroStats;
