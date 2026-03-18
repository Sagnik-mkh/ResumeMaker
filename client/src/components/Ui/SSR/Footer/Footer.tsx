import Link from "next/link";
import { FaGithub, FaHashtag, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className="border-t select-none border-accent/10 bg-background">
			<div className="container mx-auto grid gap-10 px-4 py-14 lg:grid-cols-[1.1fr_0.5fr_0.4fr]">
				<div className="max-w-xl">
					<div className="flex items-center gap-3">
						<div className="theme-logo-mark rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
							AI
						</div>
						<p className="text-2xl font-semibold theme-text-heading">
							ResuMake
						</p>
					</div>
					<p className="max-w-xl mt-4 leading-7 theme-text-soft">
						Build by a software engineer who knows the hardship of
						job struggle.
					</p>
					<p className="mt-6 text-sm text-accent/78">
						Copyright © {new Date().getFullYear()} ResuMake. All
						rights reserved.
					</p>
				</div>

				<div>
					<p className="text-accent/86 font-semibold text-sm uppercase tracking-[0.32em]">
						Navigate
					</p>
					<div className="flex flex-col gap-3 mt-4 text-sm">
						<Link
							href="/#top"
							className="transition theme-link-hover theme-text-soft"
						>
							Hero
						</Link>
						<Link
							href="/#how-it-works"
							className="transition theme-link-hover theme-text-soft"
						>
							How it works
						</Link>
						<Link
							href="/#templates"
							className="transition theme-link-hover theme-text-soft"
						>
							Templates
						</Link>
						<Link
							href="/#pricing"
							className="transition theme-link-hover theme-text-soft"
						>
							Pricing
						</Link>
					</div>
				</div>

				<div className="flex flex-col items-start gap-4 lg:items-end">
					<p className="text-accent/86 font-semibold text-sm uppercase tracking-[0.32em]">
						Follow
					</p>
					<div className="grid grid-flow-col gap-3">
						<a className="p-3 transition-colors border hover:border-secondary hover:text-secondary text-accent rounded-2xl border-accent/90">
							<FaTwitter className="text-xl" />
						</a>
						<a className="p-3 transition-colors border hover:border-secondary hover:text-secondary text-accent rounded-2xl border-accent/90">
							<FaYoutube className="text-xl" />
						</a>
						<a className="p-3 transition-colors border hover:border-secondary hover:text-secondary text-accent rounded-2xl border-accent/90">
							<FaGithub className="text-xl" />
						</a>
						<a className="p-3 transition-colors border hover:border-secondary hover:text-secondary text-accent rounded-2xl border-accent/90">
							<FaHashtag className="text-xl" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
