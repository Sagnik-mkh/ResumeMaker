"use client";

import { useIsMobileMenuOpenStore } from "@/store/navStore";
import React from "react";

type Props = {
	navbarItems: React.ReactNode[];
	loginButton?: React.ReactNode;
	primaryButton?: React.ReactNode;
};

export default function DropDown({
	navbarItems,
	loginButton,
	primaryButton,
}: Props) {
	const { isMobileMenuOpen, setMenu } = useIsMobileMenuOpenStore();

	return (
		<div
			className={`absolute left-0 z-100 w-full overflow-hidden p-2 transition-all duration-200 ease-in-out lg:hidden ${
				isMobileMenuOpen
					? "mt-3 max-h-screen opacity-100"
					: "max-h-0 opacity-0"
			}`}
		>
			<div className="theme-surface-soft theme-card-gradient rounded-box border p-3 shadow-lg">
				<div className="menu w-full gap-1 p-0 text-base">
					{navbarItems.map((item, index) => {
						return (
							<div
								key={index}
								className="w-full"
								onClick={() => setMenu(false)}
							>
								{item}
							</div>
						);
					})}
				</div>
				<div className="mt-4 flex flex-col gap-2">
					{loginButton}
					{primaryButton}
				</div>
			</div>
		</div>
	);
}
