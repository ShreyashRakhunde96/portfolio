import { motion } from "framer-motion";
import { Home, User, Code, Layers, Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn";

const dockItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: User, label: "About", path: "/about" },
    { icon: Layers, label: "Stack", path: "/stack" },
    { icon: Code, label: "Projects", path: "/projects" },
    { icon: Mail, label: "Connect", path: "/connect" },
];

export const Dock = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] md:w-auto md:max-w-none flex justify-center">
            <div className="flex items-center justify-between md:justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 ring-1 ring-white/5 w-full md:w-auto overflow-x-auto custom-scrollbar">
                {dockItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    const Icon = item.icon;

                    return (
                        <motion.button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className={cn(
                                "relative group p-3 rounded-xl transition-all duration-300",
                                isActive
                                    ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/20"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <Icon size={24} strokeWidth={1.5} />

                            {/* Tooltip */}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-black/80 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 backdrop-blur-md">
                                {item.label}
                            </span>

                            {/* Active Dot */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeDock"
                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_10px_#60A5FA]"
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};
