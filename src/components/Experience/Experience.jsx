import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';
import { experienceData } from '../../data/portfolio';
import SectionHeader from '../Common/SectionHeader';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.experience-item',
        { y: 20, opacity: 0.3 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="experience" ref={sectionRef} className="section experience-section" aria-label="Professional Experience">
      <div className="container">
        <SectionHeader
          number="04"
          label="CHRONOLOGY & INTERNSHIP"
          title="EXPERIENCE"
          subtitle="Applied software engineering in production environments, contributing to component systems and API data streams."
        />

        <div className="experience-timeline">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="experience-item">
              <div className="exp-date-col">
                <span className="exp-year">{exp.year}</span>
                <span className="exp-period">{exp.period}</span>
                <span className="exp-location">{exp.location}</span>
              </div>

              <div className="exp-details-col">
                <div>
                  <h3 className="exp-role-title">{exp.role}</h3>
                  <div className="exp-company">{exp.company}</div>
                </div>

                <div className="exp-responsibilities">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="exp-resp-item">
                      <span className="exp-resp-bullet" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                <div className="exp-tech-row">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
