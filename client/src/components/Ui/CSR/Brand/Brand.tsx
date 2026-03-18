"use client";

import { useIsMobileMenuOpenStore } from "@/store/navStore";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

type Props = {
	brandName: string;
};

function Brand({ brandName }: Props) {
	const setMobileMenuState = useIsMobileMenuOpenStore(
		(state) => state.setMenu,
	);

	return (
		<ScrollToTop>
			<button
				onClick={() => setMobileMenuState}
				className="px-4 py-2 transition-all duration-700 border-none cursor-pointer rounded-3xl hover:bg-dark-accent/70"
			>
				<span className="text-3xl font-semibold text-primary">
					{brandName}
				</span>
			</button>
		</ScrollToTop>
	);
}

export default Brand;
