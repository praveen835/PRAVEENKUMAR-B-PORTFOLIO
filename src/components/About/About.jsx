import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import { personalData, educationData } from '../../data/portfolio';
import SectionHeader from '../Common/SectionHeader';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const narrativeRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const college = educationData[0];

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-keyword',
        { x: -20, opacity: 0.3 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all'
        }
      );

      gsap.fromTo(
        narrativeRef.current,
        { y: 20, opacity: 0.3 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="about" ref={sectionRef} className="section about-section" aria-label="About Praveenkumar">
      <div className="container">
        <SectionHeader
          number="01"
          label="IDENTITY & FOUNDATION"
          title="WHO AM I?"
          subtitle="Engineering robust systems at the intersection of Python architecture and machine intelligence."
        />

        <div className="about-grid">
          {/* Large Keywords Stack & Profile Portrait */}
          <div className="about-keywords-col">
            <div className="about-keywords">
              <span className="about-keyword">PYTHON</span>
              <span className="about-keyword dim">AI</span>
              <span className="about-keyword">BACKEND</span>
              <span className="about-keyword dim">BUILDER</span>
            </div>

            <div className="about-portrait-card" data-cursor="explore">
              <div className="about-portrait-frame">
                <img
                  src="/images/praveenkumar-profile.png"
                  alt="Praveenkumar Balakrishnan - Python Developer & AI Engineer"
                  className="about-portrait-img"
                  loading="lazy"
                />
                <div className="about-portrait-badge">
                  <span className="portrait-badge-dot" />
                  <span>PRAVEENKUMAR BALAKRISHNAN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Academic Truth Card */}
          <div ref={narrativeRef} className="about-narrative">
            <p className="about-main-text">
              &ldquo;{personalData.aboutBio}&rdquo;
            </p>

            <div className="about-credentials-box">
              <div className="about-cred-row">
                <span className="about-cred-label">DEGREE</span>
                <span className="about-cred-value">B.TECH AI & DATA SCIENCE</span>
              </div>
              <div className="about-cred-row">
                <span className="about-cred-label">INSTITUTION</span>
                <span className="about-cred-value">{college.institution.toUpperCase()}</span>
              </div>
              <div className="about-cred-row">
                <span className="about-cred-label">ACADEMIC CGPA</span>
                <span className="about-cred-value accent-val">{college.score}</span>
              </div>
              <div className="about-cred-row">
                <span className="about-cred-label">DURATION</span>
                <span className="about-cred-value">{college.period}</span>
              </div>
              <div className="about-cred-row">
                <span className="about-cred-label">LOCATION</span>
                <span className="about-cred-value">{personalData.location.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
