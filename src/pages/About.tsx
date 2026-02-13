import { Window } from "../components/layout/Window";
import { Heart, Coffee, Globe } from "lucide-react";

export const About = () => {
    return (
        <Window title="System ~ User Info">
            <div className="flex flex-col md:flex-row gap-8 h-full">
                {/* Left Column - Avatar & Stats */}
                <div className="w-full md:w-1/3 flex flex-col gap-4">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:bg-blue-500/20 transition-all" />
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                            alt="Profile"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                            <div className="text-2xl font-bold text-white">2+</div>
                            <div className="text-[10px] uppercase tracking-wider text-gray-500">Years Exp</div>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                            <div className="text-2xl font-bold text-white">15+</div>
                            <div className="text-[10px] uppercase tracking-wider text-gray-500">Projects</div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Content */}
                <div className="flex-1 space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Developed by Shreyash</h1>
                        <p className="text-gray-400 leading-relaxed">
                            I am a passionate software engineer with a knack for building elegant, efficient, and scalable web applications.
                            My journey started with a curiosity for how things work on the internet, which quickly turned into an obsession with creating unique digital experiences.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-mono text-blue-400 uppercase tracking-wider">Core Values</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                <Globe className="mb-2 text-purple-400" size={20} />
                                <h4 className="font-bold text-sm">Global Perspective</h4>
                                <p className="text-xs text-gray-500 mt-1">Building for everyone, everywhere.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                <Heart className="mb-2 text-red-400" size={20} />
                                <h4 className="font-bold text-sm">User Centric</h4>
                                <p className="text-xs text-gray-500 mt-1">Design driven by empathy and utility.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                <Coffee className="mb-2 text-yellow-400" size={20} />
                                <h4 className="font-bold text-sm">Continuous Learning</h4>
                                <p className="text-xs text-gray-500 mt-1">Always upgrading my mental stack.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Window>
    );
};
