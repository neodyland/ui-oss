import React from 'react';
import { useToast } from './ToastProvider';
import { Button } from "./shadcn/ui/button.tsx";

export function CurrentToast() {
    const { open } = useToast();

    return (
        <div>
            <Button onClick={() => open({ title: "This is a toast message!", description: "Toast description", type: "success" })}>
                Show Toast
            </Button>
        </div>
    );
}