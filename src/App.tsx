import React, { useEffect } from 'react';
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

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    const handleAddSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
    handleAddSmoothScroll();
  }, []);

  return (
    <div className="min-h-screen bg-background text-slate-300 font-body selection:bg-primary/30 selection:text-white">
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
