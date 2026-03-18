import { Stars } from "@/constants/Constants";

const planets = [
	{
		top: "9%",
		left: "72%",
		size: "h-28 w-28 sm:h-36 sm:w-36",
		className:
			"bg-[radial-gradient(circle_at_30%_30%,rgba(241,250,238,0.95),rgba(168,218,220,0.45)_28%,rgba(69,123,157,0.3)_55%,rgba(69,123,157,0.08)_72%,transparent_100%)]",
		delay: "0.4s",
		duration: "22s",
	},
	{
		top: "62%",
		left: "-2%",
		size: "h-24 w-24 sm:h-32 sm:w-32",
		className:
			"bg-[radial-gradient(circle_at_35%_35%,rgba(241,250,238,0.9),rgba(230,57,70,0.42)_30%,rgba(29,53,87,0.24)_60%,rgba(29,53,87,0)_100%)]",
		delay: "1.8s",
		duration: "26s",
	},
];

const shootingStars = [
	{
		top: "12%",
		left: "18%",
		delay: "0s",
		duration: "25s",
	},
	{
		top: "20%",
		left: "34%",
		delay: "5s",
		duration: "25s",
	},
	{
		top: "30%",
		left: "10%",
		delay: "10s",
		duration: "25s",
	},
	{
		top: "24%",
		left: "44%",
		delay: "15s",
		duration: "25s",
	},
	{
		top: "40%",
		left: "26%",
		delay: "20s",
		duration: "25s",
	},
];

const HeroStars = (
	<>
		<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(168,218,220,0.14),transparent_18%),radial-gradient(circle_at_78%_22%,rgba(230,57,70,0.12),transparent_16%),radial-gradient(circle_at_56%_78%,rgba(168,218,220,0.1),transparent_18%)]" />
		<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,24,44,0.08),rgba(15,24,44,0.26))]" />
		{planets.map((planet, index) => (
			<span
				key={`planet-${index}`}
				className={`animate-heroPlanet absolute rounded-full blur-[1px] ${planet.size} ${planet.className}`}
				style={{
					top: planet.top,
					left: planet.left,
					animationDelay: planet.delay,
					animationDuration: planet.duration,
				}}
			/>
		))}
		{shootingStars.map((shootingStar, index) => (
			<span
				key={`shooting-star-${index}`}
				className="animate-heroShootingStar absolute h-[2px] w-44 rounded-full bg-[linear-gradient(90deg,rgba(241,250,238,0),rgba(241,250,238,0.35)_18%,rgba(241,250,238,0.98)_52%,rgba(168,218,220,0.22)_78%,rgba(168,218,220,0)_100%)] opacity-0 shadow-[0_0_22px_rgba(241,250,238,0.55),0_0_42px_rgba(168,218,220,0.2)]"
				style={{
					top: shootingStar.top,
					left: shootingStar.left,
					animationDelay: shootingStar.delay,
					animationDuration: shootingStar.duration,
				}}
			/>
		))}
		{Stars.map((star, index) => (
			<span
				key={`${star.top}-${star.left}-${index}`}
				className={`animate-heroStar absolute rounded-full bg-white shadow-[0_0_16px_rgba(241,250,238,0.9),0_0_28px_rgba(168,218,220,0.45)] ${star.size}`}
				style={{
					top: star.top,
					left: star.left,
					animationDelay: star.delay,
					animationDuration: star.duration,
				}}
			>
				<span className="animate-heroStarPulse absolute inset-[-9px] rounded-full bg-[radial-gradient(circle,rgba(241,250,238,0.42),rgba(168,218,220,0.16)_45%,transparent_72%)]" />
			</span>
		))}
	</>
);

export default HeroStars;
