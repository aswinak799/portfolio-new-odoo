import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Github, Linkedin, TerminalSquare } from 'lucide-react';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                    ...formData
                }),
            });
            const result = await res.json();
            if (result.success) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 5000);
            }
        } catch (error) {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 relative bg-white border-b-2 border-black overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-5/12 text-black"
                    >
                        <h2 className="text-[40px] sm:text-[50px] md:text-[80px] leading-[0.9] font-display uppercase tracking-tighter mb-8 break-words">
                            INITIATE <br />
                            <span className="text-black underline decoration-8 decoration-accent">CONTACT.</span>
                        </h2>
                        <p className="text-black text-xl font-body font-bold leading-tight mb-12 border-l-8 border-black pl-6">
                            READY TO AUTOMATE WORKFLOWS OR ARCHITECT A NEW ERP IMPLEMENTATION? DEPLOY YOUR MESSAGE BELOW.
                        </p>

                        <div className="space-y-8 font-display uppercase text-lg tracking-widest">
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-black text-white flex items-center justify-center border-4 border-black group-hover:bg-accent group-hover:text-black transition-colors">
                                    <Mail size={32} />
                                </div>
                                <div>
                                    <h4 className="text-black font-bold mb-1">EMAIL</h4>
                                    <a href="mailto:aswinak799@gmail.com" className="text-muted hover:text-black transition-colors">ASWINAK799@GMAIL.COM</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-black text-white flex items-center justify-center border-4 border-black group-hover:bg-accent group-hover:text-black transition-colors">
                                    <MapPin size={32} />
                                </div>
                                <div>
                                    <h4 className="text-black font-bold mb-1">LOCATION</h4>
                                    <p className="text-muted leading-tight">KERALA, INDIA <br /> (REMOTE WORLDWIDE)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t-4 border-black flex gap-6">
                            <SocialIcon href="https://github.com/aswinak799/" icon={<Github size={28} />} />
                            <SocialIcon href="https://www.linkedin.com/in/odoo-wizard-120888234/" icon={<Linkedin size={28} />} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-7/12"
                    >
                        <form onSubmit={handleSubmit} className="p-8 md:p-12 border-4 border-black bg-[#0f0f0f] shadow-[15px_15px_0px_0px_#ccff00] relative">
                            <div className="absolute top-0 right-0 bg-accent text-black font-display font-bold px-4 py-1 border-b-4 border-l-4 border-black uppercase">
                                SYSTEM.INPUT
                            </div>

                            <div className="relative z-10 space-y-8 mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-display font-bold text-white uppercase tracking-widest">IDENTIFICATION / NAME</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white border-0 px-4 py-4 text-black font-body font-bold rounded-none focus:outline-none focus:ring-4 focus:ring-accent transition-all placeholder:text-muted"
                                            placeholder="JOHN DOE"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-display font-bold text-white uppercase tracking-widest">COMM CHANNEL / EMAIL</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white border-0 px-4 py-4 text-black font-body font-bold rounded-none focus:outline-none focus:ring-4 focus:ring-accent transition-all placeholder:text-muted"
                                            placeholder="JOHN@COMPANY.COM"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-display font-bold text-white uppercase tracking-widest">PARAMETERS / DETAILS</label>
                                    <textarea
                                        rows={6}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-white border-0 px-4 py-4 text-black font-body font-bold rounded-none focus:outline-none focus:ring-4 focus:ring-accent transition-all resize-none placeholder:text-muted"
                                        placeholder="STATE YOUR REQUIREMENTS..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className={`w-full brutal-button !py-6 transition-all duration-300 ${formStatus === 'success'
                                            ? '!bg-black !text-accent hover:!bg-black border-2 border-accent'
                                            : formStatus === 'error'
                                                ? '!bg-red-600 !text-white hover:!bg-red-700'
                                                : '!bg-accent !text-black hover:!bg-white disabled:opacity-50'
                                        }`}
                                >
                                    {formStatus === 'submitting' ? (
                                        "PROCESSING..."
                                    ) : formStatus === 'success' ? (
                                        "TRANSMISSION SUCCESSFUL"
                                    ) : formStatus === 'error' ? (
                                        "ERROR: RETRY TRANSMISSION"
                                    ) : (
                                        <>
                                            EXECUTE TRANSMISSION
                                            <TerminalSquare size={24} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
    >
        {icon}
    </a>
);
