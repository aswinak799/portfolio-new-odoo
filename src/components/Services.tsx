import React from 'react';
import { motion } from 'framer-motion';
import { Server, Settings, Database, Code } from 'lucide-react';

const services = [
    {
        title: "ODOO CUSTOM DEV",
        desc: "Building tailored modules and extending core functionalities to perfectly align with your unique business rules and workflows.",
        icon: <Code size={48} />
    },
    {
        title: "ERP IMPLEMENTATION",
        desc: "End-to-end setup of Odoo from initial requirement gathering to configuring accounting, sales, and inventory networks.",
        icon: <Server size={48} />
    },
    {
        title: "MIGRATION & UPGRADE",
        desc: "Seamlessly upgrading from legacy systems or older Odoo versions to the latest releases with completely preserved data integrity.",
        icon: <Database size={48} />
    },
    {
        title: "API INTEGRATIONS",
        desc: "Connecting Odoo with third-party ecosystems, payment gateways, and standalone applications via REST and XML-RPC interfaces.",
        icon: <Settings size={48} />
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-24 relative bg-[#0f0f0f] border-b-2 border-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-end justify-between border-b-2 border-white pb-6 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[60px] md:text-[80px] leading-[0.9] font-display text-white uppercase tracking-tighter"
                    >
                        ENTERPRISE <br />
                        <span className="hero-text-stroke">OFFERINGS</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-auto"
                    >
                        <a href="#contact" className="brutal-button !bg-accent !text-black !py-4 hover:!bg-white">
                            DISCUSS A PROJECT
                        </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="brutal-card group flex flex-col md:flex-row gap-6 p-8"
                        >
                            <div className="w-24 h-24 shrink-0 bg-white text-black flex items-center justify-center border-2 border-black group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                                {service.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl font-display text-white uppercase mb-4 tracking-widest group-hover:text-accent transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-foreground text-lg leading-tight font-body group-hover:text-white transition-colors">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
