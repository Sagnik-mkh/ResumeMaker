import { Stars } from "@/constants/Constants";

const HeroStars = Stars.map((star, index) => (
	<span
		key={`${star.top}-${star.left}-${index}`}
		className={`animate-heroStar absolute rounded-full bg-white/85 shadow-[0_0_12px_rgba(241,250,238,0.65)] ${star.size}`}
		style={{
			top: star.top,
			left: star.left,
			animationDelay: star.delay,
			animationDuration: star.duration,
		}}
	/>
));

export default HeroStars;
