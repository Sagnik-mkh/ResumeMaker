"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { FaRegWindowClose } from "react-icons/fa";

type ModalShellProps = {
	title: string;
	description: string;
	onClose: () => void;
	children: ReactNode;
};

export default function ModalShell({
	title,
	description,
	onClose,
	children,
}: ModalShellProps) {
	if (typeof document === "undefined") {
		return null;
	}

	return createPortal(
		<div className="theme-overlay fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-md">
			<div className="theme-surface-solid-alt theme-shadow-modal max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[32px] border border-[var(--theme-border-strong)] p-6 sm:p-8">
				<div className="flex items-start justify-between gap-6 mb-6">
					<div>
						<p className="theme-eyebrow text-xs font-medium uppercase tracking-[0.3em]">
							Resume Section
						</p>
						<h3 className="theme-text-heading mt-3 text-2xl font-semibold">
							{title}
						</h3>
						<p className="theme-text-soft mt-2 text-sm leading-6">
							{description}
						</p>
					</div>
					<button
						type="button"
						onClick={onClose}
						className="theme-text-muted btn btn-ghost btn-sm text-sm hover:bg-white/8"
					>
						<FaRegWindowClose />
					</button>
				</div>
				{children}
			</div>
		</div>,
		document.body,
	);
}
