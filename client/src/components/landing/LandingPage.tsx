"use client";

import HeroContainer from "@/components/Ui/SSR/Hero/HeroContainer";
import Steps from "../Ui/SSR/Steps/Steps";
import Footer from "../Ui/SSR/Footer/Footer";
import React, { useCallback } from "react";
import TemplatePreview from "../Ui/SSR/TemplatePreview/TemplatePreview";
import Features from "../Ui/SSR/Features/Features";
import PricingPlans from "../Ui/SSR/PricingPlans/PricingPlans";
import Cta from "../Ui/SSR/Cta/Cta";
import { useIsMobileMenuOpenStore } from "@/store/navStore";

export default function LandingPage() {
	const setSectionRef = useIsMobileMenuOpenStore((state) => state.setSectionRef);
	const registerSectionRef = useCallback(
		(sectionId: string) => (element: HTMLDivElement | null) => {
			setSectionRef(sectionId, element);
		},
		[setSectionRef],
	);

	return (
		<React.Fragment>
			<main className="relative overflow-hidden bg-linear-to-b from-background via-slate-950 to-black">
				<div className="pointer-events-none absolute inset-0 overflow-hidden">
					<div className="landing-ambient-orb landing-ambient-orb-left" />
					<div className="landing-ambient-orb landing-ambient-orb-right" />
					<div className="landing-ambient-orb landing-ambient-orb-bottom" />
					<div className="landing-grid-drift absolute inset-x-0 top-0 h-[1200px] opacity-30" />
				</div>
				<HeroContainer />
				<div ref={registerSectionRef("how-it-works")}>
					<Steps />
				</div>
				<div ref={registerSectionRef("templates")}>
					<TemplatePreview />
				</div>
				<div ref={registerSectionRef("features")}>
					<Features />
				</div>
				<div ref={registerSectionRef("pricing")}>
					<PricingPlans />
				</div>
				<Cta />
			</main>
			<Footer />
		</React.Fragment>
	);
}
