"use client";
import { ToastProvider } from "@/components/toast";
import type {Metadata} from "next";

export const metadata: Metadata = {
	title: "Neody UI",
	description: "Simple and stylish components for your apps, by Neodyland",
	openGraph: {
		images: [
			{
				url: "https://ui.neody.land/img/NeodyUIOG.png"
			}
		]
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<body>
			<ToastProvider>{children}</ToastProvider>
		</body>
	);
}
