import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";

export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: "Neody UI Documentation",
			favicon: "/favicon.ico",
			logo: {
				src: "./src/assets/brand-light.png",
			},
			social: {
				github: "https://github.com/neodyland",
			},
			customCss: ["./src/docs.css"],
			sidebar: [
				{
					label: "Instructions",
					autogenerate: {
						directory: "docs/instructions",
					},
				},
				{
					label: "Components",
					autogenerate: {
						directory: "docs/components",
					},
				},
			],
		}),
		tailwind(),
	],
});
