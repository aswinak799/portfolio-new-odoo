import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 600); // Wait briefly fully loaded before sliding up
                    return 100;
                }
                // Randomize progress increments to simulate real loading behavior
                return Math.min(prev + Math.floor(Math.random() * 15) + 3, 100);
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.17, 1] }}
            className="fixed inset-0 z-[9999] bg-[#0f0f0f] border-b-8 border-white flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Marquees */}
            <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-20 pointer-events-none">
                <div className="animate-marquee inline-block font-display text-[80px] md:text-[150px] text-white uppercase tracking-tighter mix-blend-difference">
                    SYSTEM INITIALIZATION • SYSTEM INITIALIZATION • SYSTEM INITIALIZATION •
                </div>
            </div>

            <div className="absolute bottom-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-20 pointer-events-none">
                <div className="animate-marquee inline-block font-display text-[80px] md:text-[150px] text-white uppercase tracking-tighter mix-blend-difference" style={{ animationDirection: 'reverse' }}>
                    COMPILING ASSETS • LOADING MODULES • COMPILING ASSETS • LOADING MODULES •
                </div>
            </div>

            {/* Central Counter */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="text-[120px] md:text-[250px] font-display text-white leading-none tracking-tighter">
                    {progress}%
                </div>

                <div className={`mt-8 px-8 md:px-12 py-3 md:py-4 font-display text-2xl md:text-4xl uppercase border-4 border-black transition-colors duration-300 ${progress >= 100 ? 'bg-white text-black shadow-[15px_15px_0px_0px_#ccff00]' : 'bg-accent text-black shadow-[15px_15px_0px_0px_#ffffff]'}`}>
                    {progress >= 100 ? 'ACCESS GRANTED' : 'BOOTING KERNEL...'}
                </div>
            </div>

            {/* Progress Bar Footer */}
            <div className="absolute bottom-0 left-0 h-4 bg-accent transition-all duration-200 ease-out" style={{ width: `${progress}%` }}></div>
            <div className="absolute bottom-4 left-4 font-display text-white uppercase tracking-widest text-sm opacity-50">
                Aswin A K Portfolio Protocol
            </div>
        </motion.div>
    );
};
