"use client";

import { useIsMobileMenuOpenStore } from "@/store/navStore";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import Button from "./Button";

export default function MobileButton() {
	const checkMobMenuOpen = useIsMobileMenuOpenStore(
		(state) => state.isMobileMenuOpen,
	);

	const toggleMobMenu = useIsMobileMenuOpenStore((state) => state.toggleMenu);

	return (
		<>
			<Button
				btnIcon={
					checkMobMenuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />
				}
				btnStyle={"theme-button-secondary btn px-2 text-2xl lg:hidden"}
				OnClickHandler={toggleMobMenu}
			/>
		</>
	);
}
