import { Window } from "../components/layout/Window";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Project Alpha",
        desc: "A high-performance e-commerce dashboard with real-time analytics.",
        tags: ["React", "TypeScript", "D3.js"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
        title: "Neon Nexus",
        desc: "Cyberpunk-inspired social media platform with 3D avatars.",
        tags: ["Three.js", "WebSockets", "Node.js"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop"
    },
    {
        title: "Flow State",
        desc: "Productivity app for developers with integrated music and task tracking.",
        tags: ["Electron", "React", "Spotify API"],
        image: "https://images.unsplash.com/photo-1481487484168-9b995ecc168d?q=80&w=2340&auto=format&fit=crop"
    },
    {
        title: "Obsidian V1",
        desc: "My previous portfolio iteration using glassmorphism principles.",
        tags: ["HTML", "CSS", "JS"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop"
    }
];

export const Projects = () => {
    return (
        <Window title="Directory ~ /projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                    <div key={idx} className="group relative bg-black/40 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                        {/* Image */}
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                                {project.title}
                                <div className="flex gap-2">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={18} /></a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={18} /></a>
                                </div>
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Window>
    );
};
