import { Card } from "./Card";
import { Github, Linkedin, Mail } from "lucide-react";

export const ConnectCard = () => {
    return (
        <Card className="p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-900/10 to-purple-900/10">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
                Let's Connect
            </h2>

            <div className="flex gap-4">
                <a href="#" className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                    <Github className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                </a>
                <a href="#" className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                    <Linkedin className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                </a>
                <a href="#" className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                    <Mail className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                </a>
            </div>
        </Card>
    );
};
