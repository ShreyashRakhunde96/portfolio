import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-12"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-green-300 mb-4 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Open to Work
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
                Building the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-300% animate-gradient">
                    Future of Tech
                </span>
            </h1>

            <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
                Crafting digital experiences with code, creativity, and a touch of magic.
            </p>
        </motion.div>
    );
};
