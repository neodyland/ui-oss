"use client";
import { ToastProvider } from "@/components/toast";

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
