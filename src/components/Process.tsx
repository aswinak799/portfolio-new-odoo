import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: "PROBLEM ANALYSIS",
        desc: "Mapping out current workflows, identifying bottlenecks, and defining the true business objective. No assumptions, just data.",
    },
    {
        title: "SOLUTION ARCHITECTURE",
        desc: "Designing strict data models, mapping out Odoo module relationships, and planning the exact UI/UX flow for end-users.",
    },
    {
        title: "RAW IMPLEMENTATION",
        desc: "Applying Python and JavaScript to build custom logic, automate data handling, and implement ruthless QWeb views without bloat.",
    },
    {
        title: "OPTIMIZATION & SCALE",
        desc: "Refactoring ORM queries, eliminating deadlocks, and testing under heavy loads to ensure a zero-latency environment.",
    }
];

export const Process = () => {
    return (
        <section className="py-24 relative bg-[#0f0f0f] border-b-2 border-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 px-4 md:px-0">
                    <span className="inline-block px-4 py-2 border-2 border-white text-white font-display uppercase tracking-widest text-lg mb-8 bg-accent text-black font-bold">
                        EXECUTION PROTOCOL
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[40px] sm:text-[50px] md:text-[100px] leading-[0.9] font-display text-white uppercase tracking-tighter"
                    >
                        DEVELOPER <br />
                        <span className="hero-text-stroke">MINDSET</span>
                    </motion.h2>
                </div>

                <div className="w-full">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col md:flex-row border-t-2 border-white py-12 md:py-16 group hover:bg-white transition-colors px-6 md:px-12"
                        >
                            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                                <span className="text-6xl md:text-8xl font-display text-white group-hover:text-black transition-colors">
                                    0{index + 1}
                                </span>
                            </div>
                            <div className="w-full md:w-3/4 flex flex-col justify-center">
                                <h3 className="text-4xl md:text-5xl font-display text-white group-hover:text-black uppercase mb-4 tracking-tighter transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-xl font-body text-foreground group-hover:text-black leading-tight max-w-2xl font-bold transition-colors">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t-2 border-white w-full" />
                </div>
            </div>
        </section>
    );
};
