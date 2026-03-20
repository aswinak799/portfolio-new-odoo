import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    {
        category: "ODOO ECOSYSTEM",
        items: ["Odoo (v15-18)", "Custom Modules", "ORM", "QWeb", "Studio", "Migrations"]
    },
    {
        category: "BACKEND ARCHITECTURE",
        items: ["Python", "PostgreSQL", "REST APIs", "XML-RPC", "Integration Engines"]
    },
    {
        category: "FRONTEND ENGINEERING",
        items: ["JavaScript", "OWL Framework", "React", "Tailwind CSS", "TypeScript"]
    },
    {
        category: "DEVOPS & TOOLS",
        items: ["Git / GitHub", "Docker", "Linux", "CI/CD", "Nginx"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 relative bg-[#0f0f0f] border-b-2 border-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-white pb-6 mb-16 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[60px] md:text-[80px] leading-[0.9] font-display text-white uppercase tracking-tighter"
                    >
                        TECHNICAL <br />
                        <span className="hero-text-stroke">ARSENAL</span>
                    </motion.h2>
                    <p className="text-foreground max-w-xs text-xl font-body uppercase font-bold text-right hidden md:block">
                        A raw stack optimized for building enterprise systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="brutal-card flex flex-col p-8 md:p-12 hover:bg-white hover:text-black transition-colors group"
                        >
                            <h3 className="text-4xl font-display text-white uppercase mb-8 tracking-tighter group-hover:text-black">
                                {skillGroup.category}
                            </h3>

                            <div className="flex flex-wrap gap-3 mt-auto">
                                {skillGroup.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 border-2 border-white text-white font-display uppercase tracking-widest text-sm group-hover:border-black group-hover:bg-black group-hover:text-white transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
