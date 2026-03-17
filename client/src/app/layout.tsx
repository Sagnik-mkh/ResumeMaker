import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import NavBarContainer from "@/containers/NavBar/NavBarContainer";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ResumeMaker",
	description: "Build tailored resumes, track quality, and export polished drafts.",
};

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="luxury" data-brand-theme="aurora">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${inter.className} theme-page-shell min-h-screen antialiased`}
			>
				<Providers>
					<NavBarContainer />
					{children}
				</Providers>
			</body>
		</html>
	);
}
