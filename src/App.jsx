import { useState, useEffect } from 'react';
import CustomCursor from './components/Common/CustomCursor';
import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Achievements from './components/Achievements/Achievements';
import Education from './components/Education/Education';
import CurrentFocus from './components/CurrentFocus/CurrentFocus';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);

  useEffect(() => {
    // Disable default browser scroll restoration on page reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Always scroll to top (Hero section) on initial page load / refresh
    window.scrollTo(0, 0);

    // Top-level safety net: guarantee loader unmounts within 1.8s
    const safetyTimer = setTimeout(() => {
      setLoaderFinished(true);
    }, 1800);
    return () => clearTimeout(safetyTimer);
  }, []);

  useEffect(() => {
    if (loaderFinished) {
      window.scrollTo(0, 0);
    }
  }, [loaderFinished]);

  return (
    <>
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* 4-6s Cinematic Loader with animated typography & wireframe network */}
      {!loaderFinished && (
        <Loader onComplete={() => setLoaderFinished(true)} />
      )}

      {/* Main continuous portfolio experience */}
      <div className="main-content-flow">
        <Navigation />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Education />
          <CurrentFocus />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

