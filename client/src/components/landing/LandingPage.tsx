"use client";

import Image from "next/image";
import Link from "next/link";
import { Feature, motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import HeroContainer from "@/components/Ui/SSR/Hero/HeroContainer";
import { fadeInUp, pricingPlans } from "@/constants/Constants";
import Steps from "../Ui/SSR/Steps/Steps";
import Footer from "../Ui/SSR/Footer/Footer";
import React from "react";
import TemplatePreview from "../Ui/SSR/TemplatePreview/TemplatePreview";
import Features from "../Ui/SSR/Features/Features";
import PricingPlans from "../Ui/SSR/PricingPlans/PricingPlans";
import Cta from "../Ui/SSR/Cta/Cta";

export default function LandingPage() {
	return (
		<React.Fragment>
			<main className="bg-linear-to-b from-background via-slate-950 to-black">
				<HeroContainer />
				<Steps />
				<TemplatePreview />
				<Features />
				<PricingPlans />
				<Cta />
			</main>
			<Footer />
		</React.Fragment>
	);
}
