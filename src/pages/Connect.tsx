import { Window } from "../components/layout/Window";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export const Connect = () => {
    return (
        <Window title="System ~ Network/Transmit">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">

                {/* Contact Info */}
                <div className="flex flex-col justify-center gap-6 p-4">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
                        <p className="text-gray-400">
                            Have a project in mind or just want to say hi? My inbox is always open.
                        </p>
                    </div>

                    <div className="space-y-4 text-sm text-gray-300">
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <Mail className="text-blue-400" />
                            <span>hello@shreyash.dev</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <Phone className="text-green-400" />
                            <span>+1 (234) 567-890</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <MapPin className="text-red-400" />
                            <span>Remote / Worldwide</span>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form className="bg-black/20 p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-mono text-gray-500 uppercase">Input_ID</label>
                        <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors mt-1" />
                    </div>
                    <div>
                        <label className="text-xs font-mono text-gray-500 uppercase">Input_Source</label>
                        <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors mt-1" />
                    </div>
                    <div>
                        <label className="text-xs font-mono text-gray-500 uppercase">Payload</label>
                        <textarea rows={4} placeholder="Message..." className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors mt-1 resize-none" />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                        <Send size={18} /> Transmit
                    </button>
                </form>

            </div>
        </Window>
    );
};
