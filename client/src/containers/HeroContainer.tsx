"use client";

import Hero from "@/components/Ui/SSR/Hero";
import { useRouter } from "next/navigation";

export default function HeroContainer() {
	const router = useRouter();

	function OnClickHandler() {
		return router.push("/create-resume");
	}

	return <Hero OnClickHandler={OnClickHandler} />;
}
