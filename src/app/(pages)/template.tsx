"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Github, Twitter } from "lucide-react";

import Logo from "@/assets/logo.png";

const social = [
	{
		name: "GitHub",
		href: "https://github.com/neodyland",
		color: "hover:text-github hover:bg-github",
		icon: Github,
	},
	{
		name: "Twitter",
		href: "https://x.com/neodyland",
		color: "hover:text-twitter hover:bg-twitter",
		icon: Twitter,
	},
];

const links = [
	{
		name: "Resources",
		children: [
			{
				name: "About Us",
				href: "https://neody.land/about",
			},
			{
				name: "Partners",
				href: "https://neody.land/partners",
			},
			{
				name: "Services",
				href: "https://neody.land/services",
			},
			{
				name: "News",
				href: "https://news.neody.land/",
			},
		],
	},
	{
		name: "Support",
		children: [
			{
				name: "Discord",
				href: "https://neody.land/to?discord",
			},
			{
				name: "Artifacter",
				href: "https://neody.land/to?discord",
			},
			{
				name: "Glow-bot",
				href: "https://neody.land/to?discord",
			},
			{
				name: "MakeItAQuote",
				href: "https://neody.land/to?discord",
			},
		],
	},
	{
		name: "Legal",
		children: [
			{
				name: "Terms",
				href: "https://neody.land/terms",
			},
			{
				name: "Privacy",
				href: "https://neody.land/privacy",
			},
			{
				name: "特定商取引法に基づく表記",
				href: "https://neody.land/payments",
			},
		],
	},
];

const navigation = [
	{
		name: "Docs",
		href: "/docs",
	},
	{
		name: "News",
		href: "https://news.neody.land/",
	},
	{
		name: "About Us",
		href: "https://neody.land/about",
	},
	{
		name: "Terms",
		href: "https://neody.land/terms",
	},
	{
		name: "Privacy",
		href: "https://neody.land/privacy",
	},
];

const buttons = [
	{
		href: "/docs",
		title: "Get Started",
	},
];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<body className={"min-h-screen relative"}>
			<Header
				navigation={navigation}
				buttons={buttons}
				className="text-white"
				color={"#6200eeff"}
				brand={{
					showTitle: true,
					name: "UI",
					href: "/",
					logo: Logo.src,
				}}
			/>
			<div className="mx-auto min-h-screen max-w-7xl px-4 py-24">{children}</div>
			<Footer
				social={social}
				links={links}
				copyRight={`2021- Neody. All rights reserved.`}
				className="text-white font-bold"
			/>
		</body>
	);
}
