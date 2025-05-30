import Image from "next/image";
import Link from "next/link";

import { Alert } from "@/components/alert";
import { Button } from "@/components/ui/button";

import NeodyLogo from "@/assets/neody-wordmark.png";
import MiknLogo from "@/assets/mikn-wordmark.svg";

export default function Home() {
	return (
		<main>
			<Alert title={"Cool!"} variant={"solid"} type={"success"}>
				Neody UI is now open-source and free to use!
			</Alert>
			<div className="h-screen flex flex-col items-center justify-center text-center">
				<h1 className="text-black font-bold text-4xl">Simple, stylish components</h1>
				<h1 className="text-black text-2xl mt-2">for your apps</h1>
				<p className="text-gray-500 text-sm mt-5">Used in production by</p>
				<div className="flex flex-row items-center justify-center gap-5 mt-4">
					<a href="https://neody.land" target="_blank" rel="noopener noreferrer">
						<Image src={NeodyLogo} alt="Neody Logo" className="h-8 w-auto" />
					</a>
					<a href="https://mikn.dev" target="_blank" rel="noopener noreferrer">
						<Image src={MiknLogo} alt="Mikn Logo" className="h-8 w-auto" />
					</a>
				</div>
				<div className="mt-8">
					<Button className={"bg-black text-white hover:bg-gray-800"} size="lg">
						<Link href="/docs">Get Started</Link>
					</Button>
				</div>
			</div>
		</main>
	);
}
