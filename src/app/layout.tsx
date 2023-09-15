"use-client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ToDo App",
	description: "Basic todo application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Provide formatting for Font, Background Color, Text Color, and Container
	return (
		<html lang="en">
			{}
			<body
				className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}
			>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
