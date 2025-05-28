import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto_sans_jp = Noto_Sans_JP({
	subsets: ["latin"],
	variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
	title: "Neody UI",
	description: "Simple and stylish components for your apps, by Neodyland",
	openGraph: {
		images: ["https://ui.neody.land/img/NeodyUIOG.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${noto_sans_jp.variable} antialiased`}>{children}</body>
		</html>
	);
}
