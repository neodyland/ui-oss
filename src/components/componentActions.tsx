import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import Image from "next/image";

import v0Logo from "@/assets/v0.png";

interface Props {
	url: string;
	nextjsurl?: string;
}

export const ComponentActions = ({ url, nextjsurl }: Props) => {
	return (
		<main>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger className={"font-bold text-xl"}>Install</AccordionTrigger>
					<AccordionContent>
						<div className={"flex flex-col"}>
							<div className={"flex flex-row items-center gap-4"}>
								<p className={"text-xl font-bold"}>Install with shadcn CLI</p>
								<a
									href={`https://v0.dev/chat/api/open?url=${url}`}
									target={"_blank"}
									rel="noopener noreferrer"
								>
									<Button className={"bg-white text-black"} variant={"outline"}>
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
									<div className={"flex flex-row items-center gap-4"}>
										<p className={"text-xl font-bold"}>Next.js optimized version</p>
										<a
											href={`https://v0.dev/chat/api/open?url=${nextjsurl}`}
											target={"_blank"}
											rel="noopener noreferrer"
										>
											<Button className={"bg-white text-black"} variant={"outline"}>
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
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</main>
	);
};
