import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
    {
        title: "CYLLO ERP",
        desc: "A comprehensive enterprise resource planning system tailored for multi-national deployments.",
        fullDesc: "Cyllo ERP represents the pinnacle of localized Odoo implementations. Featuring specialized accounting localizations, custom payroll engines, and advanced inventory tracking systems used natively by global businesses.",
        tags: ["Odoo v17", "Python", "QWeb", "PostgreSQL"],
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        color: "primary"
    },
    {
        title: "WORKFLOW AUTOMATION ENGINE",
        desc: "Reducing manual execution time by 40% through intelligent node-based triggers.",
        fullDesc: "Designed to remove redundant steps across departments. The engine reads system events, analyzes conditions via a robust rule-engine, and executes batch processes reducing inter-departmental latency by hours.",
        tags: ["Odoo Studio", "Python Scripting", "Cron Jobs", "XML-RPC"],
        img: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800",
        color: "accent"
    },
    {
        title: "ODOO MIGRATION SYSTEMS",
        desc: "Seamlessly upgrading enterprise environments across multiple versions with zero data loss.",
        fullDesc: "A proprietary scripted pipeline designed to upgrade complex legacy Odoo systems (v12/v15) to v18. Handles data transformations, custom field mappings, and automated regression testing before production deployment.",
        tags: ["Data Migration", "Python", "SQL", "Testing"],
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        color: "brand"
    },
    {
        title: "MULTI-COUNTRY IMPLEMENTS",
        desc: "Scaling architectures for international branches including USA, UAE, and KSA.",
        fullDesc: "Enterprise implementation supporting multi-company environments with localized accounting, varied tax engines, and consolidated financial reporting designed for parent corporations.",
        tags: ["Multi-Company", "Accounting", "HRMS", "Localization"],
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        color: "purple-500"
    }
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    return (
        <section id="projects" className="py-24 relative bg-[#0f0f0f] border-b-2 border-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 border-b-2 border-white pb-6 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[40px] sm:text-[50px] md:text-[80px] leading-[0.9] font-display text-white uppercase tracking-tighter"
                    >
                        DEPLOYED <br />
                        <span className="hero-text-stroke">SYSTEMS</span>
                    </motion.h2>
                    <p className="text-foreground max-w-sm text-xl font-body uppercase font-bold text-right hidden md:block">
                        Real-world software driving efficiency at global scale. No BS.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

const ProjectCard = ({ project, onClick }: { project: any, onClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            onClick={onClick}
            className="group cursor-pointer brutal-card p-0 overflow-hidden flex flex-col"
        >
            <div className="w-full h-64 border-b-2 border-white overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 bg-[#0f0f0f]">
                <h3 className="text-4xl font-display text-white uppercase mb-4 group-hover:text-accent transition-colors tracking-widest">
                    {project.title}
                </h3>
                <p className="text-foreground text-lg mb-6 font-body leading-tight">
                    {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 border-2 border-white text-white font-display uppercase tracking-widest text-sm group-hover:border-accent group-hover:text-accent transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/90"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-6xl bg-white border-4 border-black shadow-[15px_15px_0px_0px_#ccff00] z-10 flex flex-col md:flex-row overflow-hidden"
            >
                <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-black grayscale">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                </div>

                <div className="w-full md:w-3/5 p-8 md:p-12 bg-white flex flex-col justify-between">
                    <div>
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 bg-black text-white hover:bg-accent hover:text-black transition-colors border-2 border-transparent hover:border-black"
                        >
                            <X size={32} />
                        </button>

                        <h3 className="text-5xl md:text-6xl font-display text-black uppercase mb-6 tracking-tighter w-[90%]">{project.title}</h3>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag: string) => (
                                <span key={tag} className="px-4 py-1 bg-black text-white font-display uppercase tracking-widest text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-black text-2xl font-body leading-tight mb-12 border-l-4 border-black pl-6">
                            {project.fullDesc}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="brutal-button !bg-black !text-white hover:!bg-accent hover:!text-black hover:!border-black w-full md:w-auto">
                            <ExternalLink size={24} /> LAUNCH
                        </button>
                        <button className="brutal-button-outline !text-black border-black hover:!bg-black hover:!text-white w-full md:w-auto">
                            <Github size={24} /> SOURCE
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
