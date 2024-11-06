"use client";

import {
	type ComponentPropsWithoutRef,
	type ReactNode,
	forwardRef,
} from "react";
import { tv } from "tailwind-variants";
import {
	HiCheckCircle,
	HiExclamation,
	HiExclamationCircle,
	HiInformationCircle,
	HiOutlineCheckCircle,
	HiOutlineExclamation,
	HiOutlineExclamationCircle,
	HiOutlineInformationCircle,
} from "react-icons/hi";

const ICONS = {
	success: {
		solid: HiCheckCircle,
		outline: HiOutlineCheckCircle,
	},
	warning: {
		solid: HiExclamation,
		outline: HiOutlineExclamation,
	},
	error: {
		solid: HiExclamationCircle,
		outline: HiOutlineExclamationCircle,
	},
	info: {
		solid: HiInformationCircle,
		outline: HiOutlineInformationCircle,
	},
};

const alertVariants = tv({
	slots: {
		base: "rounded-md border px-4 py-2 text-sm tracking-wide transition-colors",
		icon: "h-5 w-5 flex-shrink-0",
		text: "tracking-wide",
		title: "text-lg font-bold",
	},
	variants: {
		type: {
			success: {
				base: "border-success-200 bg-success-50",
				icon: "text-success-500",
				title: "text-success-800",
				text: "text-success-800",
			},
			warning: {
				base: "border-warn-200 bg-warn-50",
				icon: "text-warn-500",
				title: "text-warn-800",
				text: "text-warn-800",
			},
			error: {
				base: "border-error-200 bg-error-50",
				icon: "text-error-500",
				title: "text-error-800",
				text: "text-error-800",
			},
			info: {
				base: "border-info-200 bg-info-50",
				icon: "text-info-500",
				title: "text-info-800",
				text: "text-info-800",
			},
		},
		title: {
			true: {
				icon: "my-0.5 mr-3 h-6 w-6",
			},
			false: {
				text: "ml-2 font-semibold",
			},
		},
	},
});

export interface AlertProps extends ComponentPropsWithoutRef<"div"> {
	/**
	 * アラートの状態を指定します。
	 *
	 * @default 'info'
	 */
	type?: "success" | "warning" | "error" | "info";
	/**
	 * アラートのバリエーションを指定します。
	 *
	 * @default 'outline'
	 */
	variant?: "solid" | "outline";
	/**
	 * アラートのタイトルを指定します。
	 */
	title?: string;
	/**
	 * アラートの内容を指定します。
	 */
	children?: ReactNode;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
	(
		{
			type = "info",
			variant = "outline",
			title,
			children,
			className,
			...props
		}: AlertProps,
		ref,
	) => {
		const {
			base,
			icon,
			text,
			title: titleStyle,
		} = alertVariants({ type, title: !!title });

		const theirProps = props as object;
		const Icon = ICONS[type][variant];
		return (
			<div ref={ref as never} className={base({ className })} {...theirProps}>
				<div className="flex">
					<Icon className={icon()} />
					<div>
						<div className={title ? titleStyle() : text()}>
							{title ?? children}
						</div>
						{title && <div className={text()}>{children}</div>}
					</div>
				</div>
			</div>
		);
	},
);
Alert.displayName = "Alert";
