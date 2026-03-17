"use client";

import SendEmailService from "@/services/SendEmailService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import {
	HiOutlineArrowRight,
	HiOutlineCheckCircle,
	HiOutlineEnvelope,
	HiOutlineLockClosed,
	HiOutlineSparkles,
} from "react-icons/hi2";

function LoginContainer() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState("");
	const router = useRouter();

	const isDisabled = useMemo(
		() => !email.trim() || password.trim().length < 6 || isSubmitting,
		[email, password, isSubmitting],
	);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsSubmitting(true);
		setMessage("");

		try {
			await SendEmailService(email, password);
			setMessage("Access request sent. Redirecting to your workspace.");
			router.push("/dashboard");
		} catch {
			setMessage(
				"Backend email service is unavailable right now. You can still continue to the dashboard and keep building locally.",
			);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
			<section className="theme-glass rounded-[32px] border border-[var(--theme-border-strong)] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-10">
				<div className="max-w-xl">
					<p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.32em]">
						ResumeMaker Access
					</p>
					<h1 className="theme-text-heading mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
						Pick up your resume workflow where the landing page leaves off.
					</h1>
					<p className="theme-text-soft mt-4 text-base leading-8 sm:text-lg">
						Sign in to keep drafts synced locally, refine content faster, and
						move between the builder and dashboard without losing progress.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-3">
					{[
						"Landing-page theme carried into the workspace",
						"Live resume preview while you edit",
						"Progress tracking across every core section",
					].map((item) => (
						<div
							key={item}
							className="theme-surface-soft rounded-[24px] p-4 text-sm leading-6"
						>
							<HiOutlineSparkles className="theme-text-accent text-lg" />
							<p className="theme-text-main mt-3">{item}</p>
						</div>
					))}
				</div>
			</section>

			<section className="theme-surface rounded-[32px] p-6 sm:p-8">
				<div className="flex items-center gap-3">
					<div className="theme-icon-accent flex h-12 w-12 items-center justify-center rounded-2xl">
						<HiOutlineCheckCircle className="text-xl" />
					</div>
					<div>
						<p className="theme-text-heading text-xl font-semibold">
							Continue to your workspace
						</p>
						<p className="theme-text-soft mt-1 text-sm">
							Use any email and a 6+ character password for the current frontend flow.
						</p>
					</div>
				</div>

				<form onSubmit={handleSubmit} className="mt-8 space-y-5">
					<label className="block">
						<span className="theme-text-muted mb-2 block text-sm font-medium">
							Email
						</span>
						<div className="relative">
							<HiOutlineEnvelope className="theme-text-faint pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg" />
							<input
								type="email"
								className="theme-input w-full rounded-2xl py-3 pr-4 pl-12 text-sm"
								placeholder="you@example.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</label>

					<label className="block">
						<span className="theme-text-muted mb-2 block text-sm font-medium">
							Password
						</span>
						<div className="relative">
							<HiOutlineLockClosed className="theme-text-faint pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg" />
							<input
								type="password"
								className="theme-input w-full rounded-2xl py-3 pr-4 pl-12 text-sm"
								placeholder="Minimum 6 characters"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</label>

					{message ? (
						<div className="theme-surface-soft rounded-2xl border border-[var(--theme-border-strong)] px-4 py-3 text-sm leading-6 theme-text-soft">
							{message}
						</div>
					) : null}

					<div className="flex flex-col gap-3 sm:flex-row">
						<button
							type="submit"
							disabled={isDisabled}
							className="theme-button-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60"
						>
							<span>{isSubmitting ? "Sending access link..." : "Sign In"}</span>
							<HiOutlineArrowRight className="text-base" />
						</button>
						<Link
							href="/dashboard"
							className="theme-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition"
						>
							Skip to dashboard
						</Link>
					</div>
				</form>
			</section>
		</div>
	);
}

export default LoginContainer;
