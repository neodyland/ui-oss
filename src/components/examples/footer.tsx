import { Footer } from "@/components/footer";

import { Github, Twitter } from "lucide-react";

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
				href: "/about",
			},
			{
				name: "Partners",
				href: "/partners",
			},
			{
				name: "Services",
				href: "/services",
			},
		],
	},
	{
		name: "Support",
		children: [
			{
				name: "Discord",
				href: "https://discord.gg/aaaaaa",
			},
			{
				name: "Contact",
				href: "/contact",
			},
		],
	},
	{
		name: "Legal",
		children: [
			{
				name: "Terms",
				href: "/legal/terms",
			},
			{
				name: "Privacy",
				href: "/legal/privacy",
			},
			{
				name: "特定商取引法に基づく表記",
				href: "/legal/jp-payments",
			},
		],
	},
];

export const FooterExample = () => {
	return (
		<Footer
			social={social}
			links={links}
			copyRight={`2020-${new Date().getFullYear()} Neody. All rights reserved.`}
			className="text-white font-bold bg-black"
		/>
	);
};
