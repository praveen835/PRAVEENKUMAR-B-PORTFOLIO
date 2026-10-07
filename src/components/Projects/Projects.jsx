import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';
import { projectsData } from '../../data/portfolio';
import SectionHeader from '../Common/SectionHeader';
import ProjectModal from './ProjectModal';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate NextHire AI flow steps on scroll
      gsap.fromTo(
        '.flow-step-nexthire',
        { y: 15, opacity: 0.3 },
        {
          scrollTrigger: {
            trigger: '#project-nexthire',
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all'
        }
      );

      // Animate Quiz flow cards on scroll
      gsap.fromTo(
        '.flow-quiz-card',
        { scale: 0.95, opacity: 0.3 },
        {
          scrollTrigger: {
            trigger: '#project-quiz',
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          scale: 1,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const p1 = projectsData[0];
  const p2 = projectsData[1];
  const p3 = projectsData[2];
  const p4 = projectsData[3];

  return (
    <section id="projects" ref={sectionRef} className="section projects-section" aria-label="Selected Projects">
      <div className="container">
        <SectionHeader
          number="03"
          label="PORTFOLIO & LAB WORK"
          title="SELECTED WORK"
          subtitle="Engineered systems featuring machine learning pipelines, full-stack REST APIs, FastAPI backends, relational storage, and interactive JavaScript engines."
        />

        <div className="projects-gallery">
          {/* PROJECT 01: NEXT HIRE AI */}
          <article
            id="project-nexthire"
            className="project-card-editorial"
            onClick={() => setSelectedProject(p1)}
            data-cursor="view"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedProject(p1);
              }
            }}
            aria-label={`View Project Details: ${p1.title}`}
          >
            <div className="project-meta-col">
              <div className="project-num-row">
                <span className="project-num-editorial">{p1.number}</span>
                <span className="project-category-editorial">// {p1.category}</span>
              </div>

              <div>
                <h3 className="project-title-editorial">{p1.title}</h3>
                <p className="project-subtitle-editorial">{p1.subtitle}</p>
              </div>

              <div className="project-tech-pills">
                {p1.technologies.map((t) => (
                  <span key={t} className="project-tech-pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-view-cta">
                <span>VIEW CASE STUDY</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Visual Column: Animated NextHire Flow */}
            <div className="project-visual-col">
              <div className="project-visual-label">
                <span>NLP INFERENCE PIPELINE</span>
                <span>[SCROLL-REACTIVE]</span>
              </div>

              <div className="flow-diagram-nexthire">
                {p1.flow.map((step, index) => (
                  <div key={step} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div className={`flow-step-nexthire ${index === 3 || index === 4 ? 'flow-highlight' : ''}`}>
                      <span style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>0{index + 1}</span>
                      <span>{step}</span>
                    </div>
                    {index < p1.flow.length - 1 && (
                      <div className="flow-arrow-down">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* PROJECT 02: INTERACTIVE QUIZ APPLICATION */}
          <article
            id="project-quiz"
            className="project-card-editorial"
            onClick={() => setSelectedProject(p2)}
            data-cursor="view"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedProject(p2);
              }
            }}
            aria-label={`View Project Details: ${p2.title}`}
          >
            <div className="project-meta-col">
              <div className="project-num-row">
                <span className="project-num-editorial">{p2.number}</span>
                <span className="project-category-editorial">// {p2.category}</span>
              </div>

              <div>
                <h3 className="project-title-editorial">{p2.title}</h3>
                <p className="project-subtitle-editorial">{p2.subtitle}</p>
              </div>

              <div className="project-tech-pills">
                {p2.technologies.map((t) => (
                  <span key={t} className="project-tech-pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-view-cta">
                <span>VIEW CASE STUDY</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Visual Column: Distinct Quiz Application Flow */}
            <div className="project-visual-col">
              <div className="project-visual-label">
                <span>DYNAMIC STATE ENGINE</span>
                <span>[INTERACTIVE LOOP]</span>
              </div>

              <div className="flow-diagram-quiz">
                <div className="flow-quiz-card">
                  <span className="flow-quiz-icon">?</span>
                  <span className="flow-quiz-title">QUESTION</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Timed State</span>
                </div>

                <div style={{ color: 'var(--accent)', fontWeight: 'bold' }}>→</div>

                <div className="flow-quiz-card highlight">
                  <span className="flow-quiz-icon">✓</span>
                  <span className="flow-quiz-title">ANSWER</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Instant Feed</span>
                </div>

                <div style={{ color: 'var(--accent)', fontWeight: 'bold' }}>→</div>

                <div className="flow-quiz-card">
                  <span className="flow-quiz-icon">%</span>
                  <span className="flow-quiz-title">RESULT</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Score / %</span>
                </div>
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>CATEGORIES: ACTIVE</span>
                <span>FEEDBACK: REAL-TIME</span>
              </div>
            </div>
          </article>

          {/* PROJECT 03: STUDENT TASK MANAGER */}
          {p3 && (
            <article
              id="project-taskmanager"
              className="project-card-editorial"
              onClick={() => setSelectedProject(p3)}
              data-cursor="view"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(p3);
                }
              }}
              aria-label={`View Project Details: ${p3.title}`}
            >
              <div className="project-meta-col">
                <div className="project-num-row">
                  <span className="project-num-editorial">{p3.number}</span>
                  <span className="project-category-editorial">// {p3.category}</span>
                </div>

                <div>
                  <h3 className="project-title-editorial">{p3.title}</h3>
                  <p className="project-subtitle-editorial">{p3.subtitle}</p>
                </div>

                <div className="project-tech-pills">
                  {p3.technologies.map((t) => (
                    <span key={t} className="project-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-view-cta">
                  <span>VIEW CASE STUDY</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Visual Column: Student Task Manager Pipeline */}
              <div className="project-visual-col">
                <div className="project-visual-label">
                  <span>FULL-STACK ARCHITECTURE</span>
                  <span>[CRUD & DASHBOARD]</span>
                </div>

                <div className="flow-diagram-nexthire">
                  {p3.flow.map((step, index) => (
                    <div key={step} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <div className={`flow-step-nexthire ${index === 2 || index === 3 ? 'flow-highlight' : ''}`}>
                        <span style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>0{index + 1}</span>
                        <span>{step}</span>
                      </div>
                      {index < p3.flow.length - 1 && (
                        <div className="flow-arrow-down">↓</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          )}

          {/* PROJECT 04: INTERVIEW QUESTION MANAGER */}
          {p4 && (
            <article
              id="project-interviewmgr"
              className="project-card-editorial"
              onClick={() => setSelectedProject(p4)}
              data-cursor="view"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(p4);
                }
              }}
              aria-label={`View Project Details: ${p4.title}`}
            >
              <div className="project-meta-col">
                <div className="project-num-row">
                  <span className="project-num-editorial">{p4.number}</span>
                  <span className="project-category-editorial">// {p4.category}</span>
                </div>

                <div>
                  <h3 className="project-title-editorial">{p4.title}</h3>
                  <p className="project-subtitle-editorial">{p4.subtitle}</p>
                </div>

                <div className="project-tech-pills">
                  {p4.technologies.map((t) => (
                    <span key={t} className="project-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-view-cta">
                  <span>VIEW CASE STUDY</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Visual Column: Interview Question Manager Flow */}
              <div className="project-visual-col">
                <div className="project-visual-label">
                  <span>KNOWLEDGE PIPELINE</span>
                  <span>[SEARCH & TOPICS]</span>
                </div>

                <div className="flow-diagram-nexthire">
                  {p4.flow.map((step, index) => (
                    <div key={step} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <div className={`flow-step-nexthire ${index === 1 || index === 3 ? 'flow-highlight' : ''}`}>
                        <span style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>0{index + 1}</span>
                        <span>{step}</span>
                      </div>
                      {index < p4.flow.length - 1 && (
                        <div className="flow-arrow-down">↓</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          )}
        </div>
      </div>

      {/* Project Detail Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
