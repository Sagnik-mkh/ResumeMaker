"use client";

import { ComponentType, ReactNode } from "react";
import { RiEdit2Line } from "react-icons/ri";

type SectionCardProps = {
	title: string;
	description?: string;
	onClick: () => void;
	buttonLabel?: ReactNode;
	icon?: ComponentType<{ className?: string }>;
};

export default function SectionCard({
	title,
	description,
	onClick,
	buttonLabel = <RiEdit2Line />,
	icon: Icon,
}: SectionCardProps) {
	return (
		<div className="theme-surface rounded-xl p-2">
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-start gap-4">
					<div className="theme-surface-solid theme-text-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--theme-border-strong)]">
						{Icon && <Icon className="w-5 h-5" />}
					</div>
					<div>
						<h2 className="theme-text-heading pt-3 text-sm font-semibold">
							{title}
						</h2>
						<p className="theme-text-soft mt-1 text-xs leading-5">
							{description}
						</p>
					</div>
				</div>
				<button
					type="button"
					onClick={onClick}
					className="theme-text-primary btn btn-ghost btn-sm text-lg font-semibold transition"
				>
					{buttonLabel}
				</button>
			</div>
		</div>
	);
}
