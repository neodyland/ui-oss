import React, { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { Toast } from './nUI/toast';

interface ToastContextType {
    open: (options: { title: string; description: string; type: string }) => void;
}

const defaultContext: ToastContextType = {
    open: () => {
        throw new Error('open function must be overridden');
    },
};

export const ToastContext = createContext<ToastContextType>(defaultContext);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [toastList, setToastList] = useState<{ id: string; title: string; description: string; type: string; duration: number; isClosable: boolean }[]>([]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const open = ({ title, description = '', type = 'success', duration = 5000, isClosable = true }: { title: string; description: string; type: string; duration: number; isClosable: boolean }) => {
        if (!title) {
            throw new Error('Toast title is required!');
        }

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
    };

    const close = (id: string) => setToastList((prev) => prev.filter((toast) => toast.id !== id));

    const contextValue = useMemo(() => ({ open, close }), []);

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            {isMounted &&
                createPortal(
                    <motion.div className='pointer-events-none fixed inset-x-0 bottom-6 flex flex-col items-center space-y-4' layout>
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

export const useToast = () => {
    return useContext(ToastContext);
};