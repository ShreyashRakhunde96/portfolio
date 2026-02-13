import { motion } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn";

interface WindowProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    onClose?: () => void;
}

export const Window = ({ title, children, className, onClose }: WindowProps) => {
    const navigate = useNavigate();

    const handleClose = () => {
        if (onClose) onClose();
        else navigate("/");
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className={cn(
                "relative w-full md:max-w-6xl mx-auto h-[calc(100vh-160px)] md:h-[85vh]",
                "bg-black/40 backdrop-blur-2xl border border-white/10",
                "rounded-xl shadow-2xl overflow-hidden flex flex-col",
                "ring-1 ring-white/5",
                "mt-4 md:mt-0", // Add clear margin on mobile top
                className
            )}
        >
            {/* Title Bar */}
            <div className="h-10 px-4 flex items-center justify-between border-b border-white/5 bg-white/5 select-none">

                {/* Window Controls (Mac Style) */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleClose}
                        className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 flex items-center justify-center group transition-colors"
                    >
                        <X size={8} className="text-black opacity-0 group-hover:opacity-100" />
                    </button>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 flex items-center justify-center group transition-colors">
                        <Minus size={8} className="text-black opacity-0 group-hover:opacity-100" />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 flex items-center justify-center group transition-colors">
                        <Square size={6} className="text-black opacity-0 group-hover:opacity-100" />
                    </div>
                </div>

                {/* Title */}
                <div className="text-xs font-mono text-gray-400 tracking-wider uppercase">
                    {title}
                </div>

                {/* Spacer */}
                <div className="w-14" />
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 pb-20 md:pb-6 custom-scrollbar scroll-smooth">
                {children}
            </div>
        </motion.div>
    );
};
