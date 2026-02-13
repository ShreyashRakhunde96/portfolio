import { cn } from "../utils/cn";

export const BackgroundBlob = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className={cn(
                "absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]",
                "animate-blob opacity-70"
            )} />
            <div className={cn(
                "absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]",
                "animate-blob animation-delay-2000 opacity-70"
            )} />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
    );
};
