"use client";

import Button from "@/components/Ui/CSR/Button";
import NavBar from "@/components/Ui/SSR/NavBar/NavBar";
import { useRouter } from "next/navigation";
import { NavFallbackData } from "@/constants/Constants";
import { useIsMobileMenuOpenStore } from "@/store/navStore";

export default function NavBarContainer() {
	const router = useRouter();
	const closeMenu = useIsMobileMenuOpenStore((state) => state.setMenu);
	const scrollToSection = useIsMobileMenuOpenStore(
		(state) => state.scrollToSection,
	);

	function getSectionId(href: string) {
		return href.replace(/^#/, "").trim().toLowerCase().replace(/\s+/g, "-");
	}

	const navbarData = NavFallbackData;
	const navbarBrand = navbarData.brandName;
	const navbarItems = navbarData.navItems
		.sort((a: { order: number }, b: { order: number }) => a.order - b.order)
		.map((item: { title: string; href: string }, idx: number) => {
			return (
				<li key={idx} className="cursor-pointer">
					<button
						type="button"
						onClick={() => {
							scrollToSection(getSectionId(item.href));
							closeMenu(false);
						}}
						className="theme-text-main theme-text-underline"
					>
						{item.title}
					</button>
				</li>
			);
		});
	const navbarButtons = navbarData.button
		.sort((a: { order: number }, b: { order: number }) => a.order - b.order)
		.map((item: { text: string }, idx: number) => {
			const isPrimaryCta =
				item.text === "Start Free" || item.text === "Get Started";
			return (
				<Button
					key={idx}
					btnText={item.text}
					OnClickHandler={() => {
						closeMenu(false);
						router.push(isPrimaryCta ? "/create-resume" : "/login");
					}}
					btnStyle={
						item.text === "Login"
							? "theme-button-secondary"
							: "theme-button-primary"
					}
				/>
			);
		});
	const [loginButton, primaryButton] = navbarButtons;

	return (
		<NavBar
			navbarBrand={navbarBrand}
			navbarItems={navbarItems}
			loginButton={loginButton}
			primaryButton={primaryButton}
		/>
	);
}
