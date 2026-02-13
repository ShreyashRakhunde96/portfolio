import { Window } from "../components/layout/Window";

const stack = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Supabase", "Firebase"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma", "Vercel"] },
];

export const Stack = () => {
    return (
        <Window title="System ~ Dependencies">
            <div className="grid grid-cols-1 gap-6">
                {stack.map((group, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-md">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {group.items.map((tech) => (
                                <div
                                    key={tech}
                                    className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-default text-sm text-gray-300 hover:text-white"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Window>
    );
};
