import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import v0Logo from "@/assets/v0.png";
import githubLogo from "@/assets/github.svg";

interface Props {
	url: string;
	nextjsurl?: string;
	repourl?: string;
}

export const ComponentActions = ({ url, nextjsurl, repourl }: Props) => {
	return (
		<main>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger className={"font-bold text-xl"}>Install</AccordionTrigger>
					<AccordionContent className={"flex flex-col"}>
						<div className={"flex flex-row items-center gap-2"}>
							<p className={"text-xl font-bold"}>Install with shadcn CLI</p>
							<a
								href={`https://v0.dev/chat/api/open?url=${url}`}
								target={"_blank"}
								rel="noopener noreferrer"
							>
								<Button className={"bg-white text-black ml-2"} variant={"outline"} size={"sm"}>
									Open in
									<Image src={v0Logo.src} alt="v0 logo" className="h-4 w-8" width={100} height={50} />
								</Button>
							</a>
						</div>
						<Tabs className="w-full text-black" items={["npm", "pnpm", "yarn", "bun"]} defaultIndex={3}>
							<Tab value="npm">
								<Button variant="outline" className="w-full">
									<span className="text-sm">npx shadcn@latest add {url}</span>
								</Button>
							</Tab>
							<Tab value="pnpm">
								<Button variant="outline" className="w-full">
									<span className="text-sm">pnpm dlx shadcn@latest add {url}</span>
								</Button>
							</Tab>
							<Tab value="yarn">
								<Button variant="outline" className="w-full">
									<span className="text-sm">yarn dlx shadcn@latest add {url}</span>
								</Button>
							</Tab>
							<Tab value="bun">
								<Button variant="outline" className="w-full">
									<span className="text-sm">bunx shadcn@latest add {url}</span>
								</Button>
							</Tab>
						</Tabs>
						{nextjsurl && (
							<>
								<div className={"flex flex-row items-center gap-2"}>
									<p className="text-xl font-bold">Next.js optimized version</p>
									<Link href={"/docs/nextjs-components"}>
										<Info />
									</Link>
									<a
										href={`https://v0.dev/chat/api/open?url=${nextjsurl}`}
										target={"_blank"}
										rel="noopener noreferrer"
									>
										<Button className={"bg-white text-black ml-2"} variant={"outline"} size={"sm"}>
											Open in
											<Image
												src={v0Logo.src}
												alt="v0 logo"
												className="h-4 w-8"
												width={100}
												height={50}
											/>
										</Button>
									</a>
								</div>
								<Tabs
									className="w-full text-black"
									items={["npm", "pnpm", "yarn", "bun"]}
									defaultIndex={3}
								>
									<Tab value="npm">
										<Button variant="outline" className="w-full">
											<span className="text-sm">npx shadcn@latest add {nextjsurl}</span>
										</Button>
									</Tab>
									<Tab value="pnpm">
										<Button variant="outline" className="w-full">
											<span className="text-sm">pnpm dlx shadcn@latest add {nextjsurl}</span>
										</Button>
									</Tab>
									<Tab value="yarn">
										<Button variant="outline" className="w-full">
											<span className="text-sm">yarn dlx shadcn@latest add {nextjsurl}</span>
										</Button>
									</Tab>
									<Tab value="bun">
										<Button variant="outline" className="w-full">
											<span className="text-sm">bunx shadcn@latest add {nextjsurl}</span>
										</Button>
									</Tab>
								</Tabs>
							</>
						)}
						{repourl && (
							<div className={"flex flex-row items-center gap-2"}>
								<p className="text-xl font-bold">Install manually</p>
								<a
									href={repourl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:underline"
								>
									<Button className={"bg-white text-black ml-2"} variant={"outline"} size={"sm"}>
										View code
										<Image
											src={githubLogo.src}
											alt="v0 logo"
											className="h-4 w-4"
											width={50}
											height={50}
										/>
									</Button>
								</a>
							</div>
						)}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</main>
	);
};
