import { useNavigate } from "react-router-dom";
import { Window } from "../components/layout/Window";
import { User, Code, Layers, Mail, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export const Home = () => {
    const navigate = useNavigate();

    return (
        <Window title="Terminal ~ Home">
            <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-min md:grid-rows-4 gap-4 h-full p-2 pb-20 md:pb-2">

                {/* Main Welcome - Spans 2x2 */}
                <div className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-6 border border-white/10 flex flex-col justify-between group hover:border-white/20 transition-all">
                    <div>
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Hello, I'm Shreyash.
                        </h1>
                        <p className="mt-2 text-gray-400 text-lg">
                            Full Stack Developer building <span className="text-white">digital experiences</span> that matter.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/projects')}
                        className="flex items-center gap-2 text-sm font-mono text-blue-300 group-hover:text-blue-200 transition-colors"
                    >
                        view_projects.exe <ArrowRight size={14} />
                    </button>
                </div>

                {/* Quick About - Spans 1x2 */}
                <div
                    onClick={() => navigate('/about')}
                    className="col-span-1 row-span-2 bg-black/40 rounded-xl p-6 border border-white/10 cursor-pointer hover:bg-white/5 transition-all group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <User className="w-8 h-8 text-purple-400 mb-4" />
                    <h2 className="text-xl font-bold z-20 relative">About Me</h2>
                    <p className="text-xs text-gray-500 mt-2 z-20 relative group-hover:text-gray-300 transition-colors">
                        Passionate about clean code, UI design, and scalable systems.
                    </p>
                </div>

                {/* Tech Stack Preview - Spans 1x1 */}
                <div
                    onClick={() => navigate('/stack')}
                    className="col-span-1 bg-black/40 rounded-xl p-4 border border-white/10 flex flex-col justify-center items-center cursor-pointer hover:bg-white/5 transition-all"
                >
                    <Layers className="w-8 h-8 text-green-400 mb-2" />
                    <span className="font-mono text-sm">Stack</span>
                </div>

                {/* Socials - Spans 1x1 */}
                <div className="col-span-1 bg-black/40 rounded-xl p-4 border border-white/10 flex justify-center items-center gap-4">
                    <a href="#" className="hover:text-white text-gray-400 transition-colors"><Github size={20} /></a>
                    <a href="#" className="hover:text-blue-400 text-gray-400 transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="hover:text-blue-300 text-gray-400 transition-colors"><Twitter size={20} /></a>
                </div>

                {/* Projects Preview - 2x1 */}
                <div
                    onClick={() => navigate('/projects')}
                    className="col-span-1 md:col-span-2 bg-black/40 rounded-xl p-6 border border-white/10 cursor-pointer hover:bg-white/5 transition-all flex items-center justify-between"
                >
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <Code className="text-yellow-400" size={20} /> Latest Work
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">Check out my recent builds</p>
                    </div>
                    <ArrowRight className="text-gray-600" />
                </div>

                {/* Contact - 2x1 */}
                <div
                    onClick={() => navigate('/connect')}
                    className="col-span-1 md:col-span-2 bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-xl p-6 border border-white/10 cursor-pointer hover:border-pink-500/30 transition-all flex items-center justify-between"
                >
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <Mail className="text-pink-400" size={20} /> Let's Talk
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">Available for freelance & collabs</p>
                    </div>
                </div>

            </div>
        </Window>
    );
};
