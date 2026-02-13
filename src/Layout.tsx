import type { ReactNode } from "react";
import { BackgroundBlob } from "./components/BackgroundBlob";
import { Dock } from "./components/layout/Dock";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-purple-500/30 font-sans overflow-hidden fixed inset-0">
            <BackgroundBlob />

            {/* Main Desktop Area */}
            <main className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
                {children}
            </main>

            <Dock />
        </div>
    );
};
