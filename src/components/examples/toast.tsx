"use client";
import { useToast } from "@/components/toast";

import { Button } from "@/components/ui/button";

export function ToastExample() {
	const toast = useToast();

	return (
		<div className="flex flex-row items-center justify-center gap-2 mb-10">
			<Button
				variant={"default"}
				onClick={() => {
					toast.open({ title: "Toast", description: "Toast description", type: "success" });
				}}
			>
				Success
			</Button>
			<Button
				variant={"default"}
				onClick={() => {
					toast.open({ title: "Toast", description: "Toast description", type: "error" });
				}}
			>
				Error
			</Button>
			<Button
				variant={"default"}
				onClick={() => {
					toast.open({ title: "Toast", description: "Toast description", type: "info" });
				}}
			>
				Info
			</Button>
			<Button
				variant={"default"}
				onClick={() => {
					toast.open({ title: "Toast", description: "Toast description", type: "warning" });
				}}
			>
				Warning
			</Button>
		</div>
	);
}
