import { Card } from "./Card";
import { Github, ExternalLink } from "lucide-react";

export const ProjectCard = () => {
    return (
        <Card className="md:col-span-1 row-span-1 p-0 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

            {/* Background Image Placeholder or Color */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity" />

            <div className="relative z-20 h-full flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Latest Project</span>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"><Github className="w-4 h-4" /></a>
                            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"><ExternalLink className="w-4 h-4" /></a>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">AI Code Assistant</h3>
                    <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                        A smart coding companion built with React and OpenAI. Features real-time syntax highlighting.
                    </p>
                </div>
            </div>
        </Card>
    );
};
