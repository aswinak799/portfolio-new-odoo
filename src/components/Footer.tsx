import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-white bg-[#0f0f0f] pt-16 pb-8 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <span className="font-display uppercase text-4xl tracking-tighter text-white">
                        ASWIN A K<span className="text-accent underline">.</span>
                    </span>
                    <p className="text-foreground text-lg max-w-sm text-center md:text-left font-body font-bold uppercase">
                        TRANSFORMING BUSINESS WORKFLOWS INTO AUTOMATED SOLUTIONS.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <SocialLink href="https://github.com/aswinak799/" icon={<Github size={28} />} />
                    <SocialLink href="https://www.linkedin.com/in/odoo-wizard-120888234/" icon={<Linkedin size={28} />} />
                    <SocialLink href="mailto:aswinak799@gmail.com" icon={<Mail size={28} />} />
                    <SocialLink href="https://twitter.com" icon={<Twitter size={28} />} />
                </div>
            </div>

            <div className="container mx-auto px-6 pt-8 border-t-2 border-white flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-display tracking-widest uppercase text-white">
                    © {new Date().getFullYear()} ASWIN A K. ALL RIGHTS RESERVED.
                </p>
                <div className="flex items-center gap-6 font-display uppercase tracking-widest text-white">
                    <a href="#" className="hover:text-accent hover:underline transition-all">PRIVACY DIRECTIVE</a>
                    <a href="#" className="hover:text-accent hover:underline transition-all">SERVICE TERMS</a>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-black flex items-center justify-center text-white border-4 border-black hover:bg-accent hover:text-black transition-colors"
    >
        {icon}
    </a>
);
