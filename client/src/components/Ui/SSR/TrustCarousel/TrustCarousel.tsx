import {
	FaApple,
	FaStripe,
	FaLinkedin,
	FaGoogle,
	FaAmazon,
	FaMicrosoft,
} from "react-icons/fa";
import { FaBolt, FaRegCircleCheck } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";

const logos = [FaApple, FaStripe, FaLinkedin, FaGoogle, FaAmazon, FaMicrosoft];

const genLogos = () => {
	return logos.map((Icon, i) => (
		<Icon key={`a-${i}`} className="text-5xl theme-text-muted" />
	));
};

export default function TrustCarousel() {
	return (
		<section id="reviews">
			<div className="container px-4 py-20 mx-auto overflow-hidden">
				<div className="flex flex-col items-center gap-4 mb-12 text-center">
					<h2 className="max-w-3xl text-4xl font-semibold theme-text-heading">
						Build a resume that gets you interviews at top
						companies, fast.
					</h2>
					<p className="max-w-2xl text-lg theme-text-soft">
						Create resumes that get past ATS and into the hands of
						recruiters
					</p>
				</div>

				<div className="overflow-hidden mb-14 mask-fade">
					<div className="flex w-max animate-marquee">
						<div className="flex items-center gap-40 px-14">
							{genLogos()}
						</div>
						<div className="flex items-center gap-40 px-14">
							{genLogos()}
						</div>
					</div>
				</div>

				{/* Edit */}
				<div className="mt-16">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div className="p-6 text-center theme-surface-soft rounded-3xl">
							<div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg theme-icon-accent">
								<FaRegCircleCheck className="w-6 h-6" />
							</div>

							<h3 className="mb-2 font-semibold theme-text-heading">
								Industry Tested
							</h3>

							<p className="text-sm theme-text-faint">
								Every template is designed by industry
								professionals to ensure maximum impact
							</p>
						</div>

						<div className="p-6 text-center theme-surface-soft rounded-3xl">
							<div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg theme-icon-accent">
								<TbBulb className="w-6 h-6" />
							</div>

							<h3 className="mb-2 font-semibold theme-text-heading">
								AI-Powered Bullet Points
							</h3>

							<p className="text-sm theme-text-faint">
								Generate compelling, metrics-driven bullets
								trained specifically for what recruiters look
								for
							</p>
						</div>

						<div className="p-6 text-center theme-surface-soft rounded-3xl">
							<div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg theme-icon-accent">
								<FaBolt className="w-6 h-6" />
							</div>

							<h3 className="mb-2 font-semibold theme-text-heading">
								Instant Download
							</h3>

							<p className="text-sm theme-text-faint">
								Export your ATS friendly resume as PDF with one
								click so you actually get hired
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
