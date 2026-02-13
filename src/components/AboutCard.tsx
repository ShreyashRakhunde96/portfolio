import { Card } from "./Card";
import { User } from "lucide-react";

export const AboutCard = () => {
    return (
        <Card className="md:col-span-2 row-span-1 p-8 flex flex-col justify-between group">
            <div className="flex items-start justify-between">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium uppercase tracking-wider">
                        <User className="w-4 h-4" />
                        <span>About Me</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white group-hover:text-blue-200 transition-colors">
                        Engineering Student & <br /> Full-Stack Developer
                    </h2>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <img src="https://github.com/shadcn.png" alt="Avatar" className="w-full h-full rounded-full opacity-90" />
                </div>
            </div>

            <p className="text-gray-400 leading-relaxed mt-4 max-w-2xl">
                I'm passionate about building scalable web applications and exploring new technologies.
                Currently focusing on React, Node.js, and modern UI/UX design patterns.
                I love turning complex problems into simple, beautiful interface.
            </p>
        </Card>
    );
};
