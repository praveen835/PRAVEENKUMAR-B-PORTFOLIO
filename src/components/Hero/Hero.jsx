import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Hero.css';
import { personalData } from '../../data/portfolio';
import NeuralBackground3D from './NeuralBackground3D';
import MagneticButton from '../Common/MagneticButton';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Hero() {
  const heroRef = useRef(null);
  const titlesRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Subtle parallax on mouse move
    const handleMouseMove = (e) => {
      if (!titlesRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      gsap.to(titlesRef.current, {
        x: x * 12,
        y: y * 8,
        duration: 0.6,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <section id="home" ref={heroRef} className="hero-section" aria-label="Hero Introduction">
      {/* 3D Neural / Data network background */}
      <NeuralBackground3D />

      <div className="container hero-content">
        {/* Editorial Metadata Bar */}
        <div className="hero-meta-bar">
          <div className="hero-meta-item">
            <span className="hero-meta-dot" />
            <span>{personalData.location}</span>
          </div>
          <span style={{ opacity: 0.3 }}>/</span>
          <div className="hero-meta-item">
            <span>{personalData.domains}</span>
          </div>
          <span style={{ opacity: 0.3 }}>/</span>
          <div className="hero-meta-item">
            <span>{personalData.yearSpan}</span>
          </div>
        </div>

        {/* Oversized Typographic Architecture */}
        <div ref={titlesRef} className="hero-title-group">
          <div className="hero-eyebrow">
            // DIGITAL LABORATORY & ENGINEERING
          </div>
          <h1 className="hero-title-line">
            {personalData.name.split(' ')[0]}
          </h1>
          <div className="hero-title-line outline">
            {personalData.name.split(' ')[1]}
          </div>
          <div className="hero-title-line accent">
            PYTHON
          </div>
          <div className="hero-title-line">
            DEVELOPER
          </div>
        </div>

        {/* Asymmetric Description & Action Buttons */}
        <div className="hero-description-row">
          <p className="hero-bio">
            {personalData.heroTagline}
          </p>

          <div className="hero-actions">
            <MagneticButton
              href="#projects"
              className="btn-primary"
              dataCursor="click"
              ariaLabel="Navigate to Projects"
            >
              <span>VIEW MY WORK</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="btn-secondary"
              dataCursor="click"
              ariaLabel="Navigate to Contact"
            >
              <span>CONTACT ME</span>
            </MagneticButton>

            {personalData.resumeUrl && (
              <MagneticButton
                href={personalData.resumeUrl}
                download="Praveenkumar-Balakrishnan-Resume.pdf"
                className="btn-secondary"
                dataCursor="click"
                ariaLabel="Download Resume PDF"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}
              >
                <span>DOWNLOAD RESUME ↓</span>
              </MagneticButton>
            )}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="hero-scroll-line" />
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
