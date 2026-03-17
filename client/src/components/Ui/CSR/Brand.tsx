"use client";

import { useIsMobileMenuOpenStore } from "@/store/navStore";
import Link from "next/link";

type Props = {
	brandName: string;
};

function Brand({ brandName }: Props) {
	const setMobileMenuState = useIsMobileMenuOpenStore(
		(state) => state.setMenu,
	);

	return (
		<Link
			href="/#top"
			className="px-0 text-2xl font-semibold theme-text-heading btn btn-ghost"
			onClick={() => setMobileMenuState(false)}
		>
			<span className="theme-text-primary">{brandName}</span>
		</Link>
	);
}

export default Brand;
