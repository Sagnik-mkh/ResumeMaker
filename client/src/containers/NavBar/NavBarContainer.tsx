"use client";

import Button from "@/components/Ui/CSR/Button";
import NavBar from "@/components/Ui/SSR/NavBar/NavBar";
import { useRouter } from "next/navigation";
import { NavFallbackData } from "@/constants/Constants";
import Link from "next/link";
import { useIsMobileMenuOpenStore } from "@/store/navStore";

export default function NavBarContainer() {
	const router = useRouter();
	const closeMenu = useIsMobileMenuOpenStore((state) => state.setMenu);

	const navbarData = NavFallbackData;
	const navbarBrand = navbarData.brandName;
	const navbarItems = navbarData.navItems
		.sort((a: { order: number }, b: { order: number }) => a.order - b.order)
		.map((item: { title: string }, idx: number) => {
			return (
				<li key={idx} className="cursor-pointer">
					<Link
						href={"#"}
						onClick={() => closeMenu(false)}
						className="transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-strawberry-red after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 duration-200 hover:text-strawberry-red"
					>
						{item.title}
					</Link>
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
