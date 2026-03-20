import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { CursorGlow } from './components/CursorGlow';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Loader } from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll behavior
  useEffect(() => {
    const handleAddSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
    handleAddSmoothScroll();
  }, []);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-background text-slate-300 font-body selection:bg-primary/30 selection:text-white relative">
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Process />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
