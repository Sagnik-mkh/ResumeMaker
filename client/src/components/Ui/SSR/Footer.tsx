import Link from "next/link";
import { FaGithub, FaHashtag, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className="border-t border-[--theme-border] bg-black/25">
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
						A modern SaaS resume builder focused on sharper writing, cleaner
						formatting, and better first impressions for real job applications.
					</p>
					<p className="mt-6 text-sm theme-text-faint">
						Copyright © {new Date().getFullYear()} ResuMake. All
						rights reserved.
					</p>
				</div>

				<div>
					<p className="theme-eyebrow text-sm uppercase tracking-[0.32em]">
						Navigate
					</p>
					<div className="mt-4 flex flex-col gap-3 text-sm">
						<Link href="/#top" className="theme-text-soft transition hover:text-[var(--theme-text)]">
							Hero
						</Link>
						<Link href="/#how-it-works" className="theme-text-soft transition hover:text-[var(--theme-text)]">
							How it works
						</Link>
						<Link href="/#templates" className="theme-text-soft transition hover:text-[var(--theme-text)]">
							Templates
						</Link>
						<Link href="/#pricing" className="theme-text-soft transition hover:text-[var(--theme-text)]">
							Pricing
						</Link>
					</div>
				</div>

				<div className="flex flex-col items-start gap-4 lg:items-end">
					<p className="theme-eyebrow text-sm uppercase tracking-[0.32em]">
						Follow
					</p>
					<div className="grid grid-flow-col gap-3">
						<a className="theme-text-muted rounded-2xl border border-[--theme-border-strong] p-3 transition-colors hover:text-[--theme-text]">
							<FaTwitter className="text-xl" />
						</a>
						<a className="theme-text-muted rounded-2xl border border-[--theme-border-strong] p-3 transition-colors hover:text-[--theme-text]">
							<FaYoutube className="text-xl" />
						</a>
						<a className="theme-text-muted rounded-2xl border border-[--theme-border-strong] p-3 transition-colors hover:text-[--theme-text]">
							<FaGithub className="text-xl" />
						</a>
						<a className="theme-text-muted rounded-2xl border border-[--theme-border-strong] p-3 transition-colors hover:text-[--theme-text]">
							<FaHashtag className="text-xl" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
