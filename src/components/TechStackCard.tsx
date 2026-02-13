import { Card } from "./Card";
import { Code2, Database, Globe, Layout, Cpu, Server, Terminal, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const stack = [
    { name: "React", icon: Globe },
    { name: "TypeScript", icon: Code2 },
    { name: "Tailwind", icon: Layout },
    { name: "Node.js", icon: Server },
    { name: "PostgreSQL", icon: Database },
    { name: "Next.js", icon: Terminal },
    { name: "Framer Motion", icon: Smartphone },
    { name: "System Design", icon: Cpu },
];

export const TechStackCard = () => {
    return (
        <Card className="row-span-2 p-6 overflow-hidden flex flex-col">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-400" />
                Tech Stack
            </h2>

            <div className="relative flex-1 mask-gradient -mx-6 px-6">
                {/* Simple list for now, could be a marquee */}
                <div className="space-y-3">
                    {stack.map((tech) => (
                        <motion.div
                            key={tech.name}
                            whileHover={{ x: 5 }}
                            className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-default"
                        >
                            <tech.icon className="w-5 h-5 text-blue-400" />
                            <span className="font-medium text-gray-200">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Card>
    );
};
