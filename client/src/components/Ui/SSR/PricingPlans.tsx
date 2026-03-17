import Button from "../CSR/Button";

const plans = [
	{
		name: "Free",
		price: "$0",
		description: "Build resume manually",
		features: [
			"1 resume draft",
			"Basic template access",
			"Manual editing tools",
			"Standard PDF export",
		],
		buttonStyle: "theme-button-secondary",
	},
	{
		name: "Pro",
		price: "$19",
		description: "Supercharge your resume with AI",
		features: [
			"Unlimited resumes",
			"AI bullet rewrites",
			"ATS score insights",
			"Premium templates",
		],
		buttonStyle: "theme-button-primary",
		highlight: true,
	},
	{
		name: "Recruiting",
		price: "$79",
		description: "Perfect for entire Job search",
		features: [
			"Multi-user workspace",
			"Candidate resume reviews",
			"Priority support",
			"Shared template library",
		],
		buttonStyle: "theme-button-tertiary",
	},
];

export default function PricingPlans() {
	return (
		<div className="bg-black/20">
			<section className="container px-4 py-24 mx-auto">
				<div className="max-w-3xl mx-auto text-center">
					<p className="theme-eyebrow text-sm uppercase tracking-[0.36em]">
						Pricing
					</p>
					<h2 className="theme-text-heading mt-4 text-4xl font-semibold">
						Choose Your Plan
					</h2>
					<p className="theme-text-soft mt-4 text-xl leading-8">
						Start free and upgrade when you&apos;re ready to
						accelerate your job search
					</p>
				</div>

				<div className="grid gap-6 mt-14 lg:grid-cols-3">
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={`rounded-[28px] p-8 shadow-2xl shadow-slate-950/40 ${
								plan.highlight
									? "theme-surface-highlight scale-105"
									: "theme-surface-soft"
							}`}
						>
							<div className="flex items-start justify-between gap-4">
								<div>
									<h3 className="theme-text-heading text-2xl font-semibold">
										{plan.name}
									</h3>
									<p className="theme-text-soft mt-3 text-sm leading-6">
										{plan.description}
									</p>
								</div>
								{plan.highlight ? (
									<span className="theme-pill-primary rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.24em]">
										Popular
									</span>
								) : null}
							</div>

							<div className="flex items-end gap-2 mt-8">
								<p className="theme-text-heading text-5xl font-semibold">
									{plan.price}
								</p>
								<p className="theme-text-faint pb-2 text-sm">
									/ month
								</p>
							</div>

							<div className="mt-8 space-y-3">
								{plan.features.map((feature) => (
									<div
										key={feature}
										className="theme-surface-panel theme-text-muted rounded-2xl px-4 py-3 text-sm"
									>
										{feature}
									</div>
								))}
							</div>

							<div className="mt-8">
								<Button
									btnText={
										plan.name === "Free"
											? "Start Free"
											: plan.name === "Pro"
												? "Upgrade to Pro"
												: "Get recruiting plan"
									}
									btnSize="btn-lg w-full"
									btnStyle={plan.buttonStyle}
								/>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
