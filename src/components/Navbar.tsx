import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TerminalSquare } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-[#0f0f0f] border-b-2 border-white' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-accent text-black border-2 border-white shadow-[4px_4px_0px_0px_#ffffff] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                        <TerminalSquare size={28} />
                    </div>
                    <span className="font-display font-bold text-3xl tracking-tighter text-white uppercase mt-1">
                        Aswin A K
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-display uppercase tracking-widest text-white hover:bg-white hover:text-black px-4 py-2 border-2 border-transparent hover:border-black transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="hidden md:flex brutal-button !py-2 !text-xl shadow-[4px_4px_0px_0px_#ccff00] hover:shadow-[6px_6px_0px_0px_#ccff00]"
                >
                    LET'S TALK
                </a>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden bg-white text-black p-2 border-2 border-black"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-[#0f0f0f] border-b-2 border-white flex flex-col items-center py-10 md:hidden overflow-hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-4xl font-display uppercase tracking-widest text-white hover:text-accent w-full text-center py-4 border-b-2 border-white/20"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="brutal-button mt-8 w-[80%]"
                        >
                            LET'S TALK
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
