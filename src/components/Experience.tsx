import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "ODOO DEVELOPER",
        company: "CYBROSYS TECHNOLOGIES",
        period: "2023 - PRESENT",
        achievements: [
            "Engineered automated workflow engines resulting in a 40% efficiency improvement across client operations.",
            "Architected and deployed custom Odoo modules for multi-country enterprise systems.",
            "Spearheaded complex data migrations and version upgrades (v15 to v18)."
        ]
    },
    {
        role: "ODOO TRAINEE",
        company: "CYBROSYS TECHNOLOGIES",
        period: "2022 - 2023",
        achievements: [
            "Mastered Odoo core architecture, ORM, and QWeb templating frameworks.",
            "Developed internal utility modules for inventory reporting and automated billing.",
            "Gained hands-on experience in PostgreSQL optimization and Python backend development."
        ]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 relative bg-[#0f0f0f] border-b-2 border-white">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 border-b-2 border-white pb-6"
                >
                    <h2 className="text-[40px] sm:text-[50px] md:text-[100px] leading-[0.9] font-display text-white uppercase tracking-tighter">
                        EXPERIENCE <br />
                        <span className="hero-text-stroke">TIMELINE</span>
                    </h2>
                </motion.div>

                <div className="relative w-full border-l-4 border-white pl-8 md:pl-16">
                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <TimelineItem
                                key={index}
                                exp={exp}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ exp, index }: { exp: any, index: number }) => {
    return (
        <div className="relative w-full group">
            {/* Brutalist Node */}
            <div className="absolute -left-[42px] md:-left-[74px] top-0 w-6 h-6 bg-accent border-4 border-white z-10 group-hover:bg-white transition-colors" />
            <div className="absolute -left-[30px] md:-left-[62px] top-3 w-8 md:w-16 h-[4px] bg-white z-0" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full"
            >
                <div className="brutal-card w-full">
                    <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-white/20 pb-4 mb-6">
                        <div>
                            <span className="inline-block px-4 py-1 bg-white text-black font-display text-lg uppercase tracking-widest mb-4">
                                {exp.period}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-display text-white uppercase tracking-wider group-hover:text-accent transition-colors">
                                {exp.role}
                            </h3>
                        </div>
                        <h4 className="text-xl font-body text-foreground uppercase tracking-widest mt-2 md:mt-0 font-bold">
                            {exp.company}
                        </h4>
                    </div>

                    <ul className="space-y-4">
                        {exp.achievements.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-4 text-foreground text-lg leading-tight font-body">
                                <span className="mt-2 w-3 h-3 bg-white shrink-0 group-hover:bg-accent transition-colors" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};
