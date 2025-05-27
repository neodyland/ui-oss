import React, { useState, createContext, useContext, useMemo, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { tv } from "tailwind-variants";
import { CircleCheck, TriangleAlert, CircleAlert, Info, X } from "lucide-react";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

type ToastType = "success" | "warning" | "error" | "info";

const useTimeout = (callback: () => void, delay?: number) => {
	const savedCallback = useRef(callback);

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	const timeoutCallback = useCallback(() => {
		savedCallback.current();
	}, [savedCallback]);

	useEffect(() => {
		if (delay === null) return;

		const id = delay ? setTimeout(timeoutCallback, delay) : null;

		return () => {
			if (id) clearTimeout(id);
		};
	}, [delay, timeoutCallback]);
};

type BaseToastProps = {
	title: string;
	description?: string;
	type?: ToastType;
	duration?: number;
	isClosable?: boolean;
};

type ToastData = {
	id: string;
} & Required<BaseToastProps>;

type ToastContext = {
	open: (data: BaseToastProps) => void;
	close: (id: string) => void;
};

const ToastContext = createContext<ToastContext | undefined>(undefined);
ToastContext.displayName = "ToastContext";

export const useToast = () => {
	const context = useContext(ToastContext);

	if (!context) {
		throw new Error("useToast should be used within the ToastProvider!");
	}

	return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isMounted, setIsMounted] = useState(false);
	const [toastList, setToastList] = useState<ToastData[]>([]);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const open = useCallback(
		({ title, description = "", type = "success", duration = 5000, isClosable = true }: BaseToastProps) => {
			if (!title) throw new Error("Toast title is required!");
			setToastList((prev) => [
				...prev,
				{
					id: uuidv4(),
					title,
					description,
					type,
					duration,
					isClosable,
				},
			]);
		},
		[],
	);

	const close = useCallback((id: string) => {
		setToastList((prev) => prev.filter((toast) => toast.id !== id));
	}, []);

	const contextValue = useMemo(() => ({ open, close }), [open, close]);

	return (
		<ToastContext.Provider value={contextValue}>
			{children}
			{isMounted &&
				createPortal(
					<motion.div
						className="pointer-events-none fixed inset-x-0 bottom-6 flex flex-col items-center space-y-4"
						layout
					>
						<LayoutGroup>
							<AnimatePresence>
								{toastList.map((toast) => (
									<Toast
										key={toast.id}
										id={toast.id}
										title={toast.title}
										description={toast.description}
										type={toast.type}
										duration={toast.duration}
										isClosable={toast.isClosable}
										onClose={() => close(toast.id)}
									/>
								))}
							</AnimatePresence>
						</LayoutGroup>
					</motion.div>,
					document.body,
				)}
		</ToastContext.Provider>
	);
};

const toastVariants = tv({
	slots: {
		base: "pointer-events-auto mx-2 flex min-h-14 items-center rounded-md border py-3 pl-4 pr-3 text-sm tracking-wide transition-colors",
		flex: "flex items-center space-x-3",
		icon: "h-6 w-6 flex-shrink-0",
		title: "text-base font-bold tracking-wide",
		text: "mt-0.5 font-medium tracking-wider",
		closeBtn: "rounded-full p-1 transition-transform duration-200 ease-in-out hover:scale-110 active:scale-90",
	},
	variants: {
		type: {
			success: {
				base: "border-success-200 bg-success-50",
				icon: "text-success-500",
				title: "text-success-800",
				text: "text-success-800",
				closeBtn: "text-success-800",
			},
			warning: {
				base: "border-warn-200 bg-warn-50",
				icon: "text-warn-500",
				title: "text-warn-800",
				text: "text-warn-800",
				closeBtn: "text-warn-800",
			},
			error: {
				base: "border-error-200 bg-error-50",
				icon: "text-error-500",
				title: "text-error-800",
				text: "text-error-800",
				closeBtn: "text-error-800",
			},
			info: {
				base: "border-info-200 bg-info-50",
				icon: "text-info-500",
				title: "text-info-800",
				text: "text-info-800",
				closeBtn: "text-info-800",
			},
		},
	},
});

const animation = {
	animate: { opacity: 1, transition: { duration: 0.6 } },
	initial: { opacity: 0 },
	exit: { opacity: 0 },
};

const ICONS = {
	success: {
		solid: CircleCheck,
		outline: CircleCheck,
	},
	warning: {
		solid: TriangleAlert,
		outline: TriangleAlert,
	},
	error: {
		solid: CircleAlert,
		outline: CircleAlert,
	},
	info: {
		solid: Info,
		outline: Info,
	},
};

export interface ToastProps extends ComponentPropsWithoutRef<"div"> {
	title: string;
	description: string;
	type: "success" | "warning" | "error" | "info";
	duration: number;
	isClosable: boolean;
	onClose: () => void;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
	({ title, description, type, duration, isClosable, onClose, className, ...props }, ref) => {
		useTimeout(onClose, duration);

		const { base, icon, text, title: titlev, flex, closeBtn } = toastVariants({ type });

		const theirProps = props as object;
		const ToastIcon = ICONS[type].solid;
		return (
			<motion.div ref={ref} layout="position" className={base({ className })} {...animation} {...theirProps}>
				<div className={flex()}>
					<ToastIcon className={icon()} />
					<div>
						<div className={titlev()}>{title}</div>
						{title && <div className={text()}>{description}</div>}
					</div>
					{isClosable && (
						<button type="button" onClick={onClose} className={closeBtn()}>
							<X className="h-4 w-4" />
						</button>
					)}
				</div>
			</motion.div>
		);
	},
);
Toast.displayName = "Toast";
