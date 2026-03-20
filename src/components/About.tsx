import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lightbulb, Clock, Code2 } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-24 relative bg-[#0f0f0f] border-b-2 border-white">
            {/* Brutalist Warning Tape */}
            <div className="absolute top-0 left-0 w-full overflow-hidden bg-accent border-b-2 border-white py-2 z-10 pointer-events-none">
                <div className="animate-marquee inline-block font-display text-2xl text-black uppercase tracking-widest whitespace-nowrap">
                    WARNING: HIGH PERFORMANCE ARCHITECTURE • WARNING: HIGH PERFORMANCE ARCHITECTURE • WARNING: HIGH PERFORMANCE ARCHITECTURE •
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-[60px] md:text-[80px] leading-[0.9] font-display text-white uppercase mb-8 break-words">
                            ENGINEERING <br />
                            <span className="text-accent">EFFICIENCY</span>.<br />
                            DELIVERING <br />
                            <span className="hero-text-stroke">SCALE</span>.
                        </h2>

                        <div className="space-y-6 text-foreground text-xl font-body leading-tight max-w-lg">
                            <p>
                                As a specialized Odoo Developer with an architectural mindset, I bridge the gap between complex business processes and brutal digital solutions.
                            </p>
                            <p>
                                My focus isn't just writing code—it's understanding the fundamental heartbeat of your business and optimizing it through intelligent ERP customization and automation.
                            </p>

                            <div className="mt-12 grid grid-cols-2 gap-4 border-2 border-white p-6 bg-white text-black">
                                <div>
                                    <div className="text-5xl font-display uppercase tracking-tighter">2+ YRS</div>
                                    <div className="text-sm font-bold uppercase tracking-widest mt-2">EXPERIENCE</div>
                                </div>
                                <div className="border-l-2 border-black pl-4">
                                    <div className="text-5xl font-display uppercase tracking-tighter">40%</div>
                                    <div className="text-sm font-bold uppercase tracking-widest mt-2">EFFICIENCY GAIN</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <FeatureCard
                            icon={<Globe size={40} className="text-white group-hover:text-black transition-colors" />}
                            title="GLOBAL EXP"
                            desc="Deployments across USA, UAE, Saudi, Turkey, and Australia."
                            delay={0}
                        />
                        <FeatureCard
                            icon={<code className="font-display text-4xl text-white group-hover:text-black transition-colors">ERP</code>}
                            title="SYSTEM MASTERY"
                            desc="Sales, Inventory, Accounting, HR, and Manufacturing domains."
                            className="md:translate-y-12"
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={<Code2 size={40} className="text-white group-hover:text-black transition-colors" />}
                            title="RAW ARCHITECTURE"
                            desc="Tailored Odoo modules, ORM proficiency, and strict QWeb templating."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={<Clock size={40} className="text-white group-hover:text-black transition-colors" />}
                            title="NO-NONSENSE AUTO"
                            desc="Transforming manual redundancies into automated, ruthless pipelines."
                            className="md:translate-y-12"
                            delay={0.3}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({
    icon, title, desc, className = "", delay = 0
}: {
    icon: React.ReactNode, title: string, desc: string, className?: string, delay?: number
}) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`brutal-card group flex flex-col justify-between min-h-[250px] ${className}`}
    >
        <div className="mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
            {icon}
        </div>
        <div>
            <h3 className="text-2xl font-display text-white uppercase mb-4 tracking-wider group-hover:text-black transition-colors">{title}</h3>
            <p className="text-foreground font-body leading-tight group-hover:text-black transition-colors">{desc}</p>
        </div>
    </motion.div>
);
