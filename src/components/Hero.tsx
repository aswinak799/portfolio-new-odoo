import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="hero" className="relative h-screen w-full bg-[#0f0f0f] overflow-hidden flex flex-col justify-center border-b-2 border-white">

            {/* Background Marquee */}
            <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-20 rotate-[-2deg] z-0 pointer-events-none">
                <div className="animate-marquee inline-block font-display text-[150px] md:text-[200px] text-white uppercase tracking-tighter mix-blend-difference">
                    ODOO ARCHITECT • SYSTEM BUILDER • ERP MASTER MIND • ODOO ARCHITECT • SYSTEM BUILDER •
                </div>
            </div>

            <div className="relative z-10 w-full px-6 md:px-12 pointer-events-none mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6"
                >
                    <div className="md:col-span-12">
                        <div className="inline-flex items-center gap-3 px-6 py-2 border-2 border-white bg-accent text-black font-display uppercase tracking-widest pointer-events-auto shadow-[4px_4px_0px_0px_#ffffff] mb-8">
                            <span className="w-3 h-3 bg-black rounded-full animate-blink"></span>
                            AVAILABLE FOR HIRE
                        </div>
                    </div>

                    <div className="md:col-span-12">
                        <h1 className="text-[60px] md:text-[120px] lg:text-[180px] font-display leading-[0.8] tracking-tighter text-white uppercase break-words mix-blend-difference">
                            I BUILD <br />
                            <span className="hero-text-stroke transition-colors duration-500">SMART</span> ERP <br />
                            SYSTEMS.
                        </h1>
                    </div>

                    <div className="md:col-span-8 md:col-start-5 mt-12 border-t-2 border-white pt-6">
                        <p className="font-body text-xl md:text-3xl font-light text-foreground max-w-2xl leading-tight">
                            I transform complex business workflows into automated, high-performance solutions capable of scaling globally. No fluff, just architecture that works.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mt-12 pointer-events-auto">
                            <a
                                href="#projects"
                                className="brutal-button group"
                            >
                                VIEW PROJECTS
                                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </a>

                            <a
                                href="#contact"
                                className="brutal-button-outline"
                            >
                                CONTACT ME
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Brutalist Grid Decorators */}
            <div className="absolute top-0 right-0 w-32 h-32 border-b-2 border-l-2 border-white z-0 pointer-events-none opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-t-2 border-r-2 border-white z-0 pointer-events-none opacity-50"></div>

        </section>
    );
};
