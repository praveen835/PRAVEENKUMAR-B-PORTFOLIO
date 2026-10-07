import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';
import { skillsData } from '../../data/portfolio';
import SectionHeader from '../Common/SectionHeader';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const [activeCluster, setActiveCluster] = useState(null);
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-cluster-card',
        { y: 20, opacity: 0.3 },
        {
          scrollTrigger: {
            trigger: '.skills-clusters-grid',
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="skills" ref={sectionRef} className="section skills-section" aria-label="Technical Skills Ecosystem">
      <div className="container">
        <SectionHeader
          number="02"
          label="COMPETENCIES & STACK"
          title="WHAT I WORK WITH"
          subtitle="An interconnected engineering ecosystem organized around Python computation, scalable APIs, and machine intelligence."
        />

        <div className="skills-ecosystem">
          {/* Gravitational Core Hub */}
          <div
            className="skills-core-hub"
            data-cursor="explore"
            onMouseEnter={() => setActiveCluster('all')}
            onMouseLeave={() => setActiveCluster(null)}
          >
            <svg className="core-hub-bg-rings" viewBox="0 0 800 300" fill="none">
              <circle cx="400" cy="150" r="130" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="400" cy="150" r="85" stroke="#E53935" strokeWidth="1.5" />
            </svg>
            <div className="core-hub-badge">// GRAVITATIONAL CORE</div>
            <h3 className="core-hub-title">{skillsData.center}</h3>
            <p className="core-hub-desc">
              The primary language driving backend architecture, algorithmic computations, and data science pipelines.
            </p>
          </div>

          {/* Interconnected Skill Clusters */}
          <div className="skills-clusters-grid">
            {skillsData.categories.map((cluster) => {
              const isActive = activeCluster === cluster.id || activeCluster === 'all';
              return (
                <div
                  key={cluster.id}
                  className={`skill-cluster-card ${isActive ? 'active-cluster' : ''}`}
                  onMouseEnter={() => setActiveCluster(cluster.id)}
                  onMouseLeave={() => setActiveCluster(null)}
                  data-cursor="explore"
                >
                  <div className="cluster-header">
                    <div>
                      <span className="cluster-tag">// {cluster.tag}</span>
                      <h4 className="cluster-title">{cluster.title}</h4>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      [0{skillsData.categories.indexOf(cluster) + 1}]
                    </span>
                  </div>

                  <div className="cluster-items">
                    {cluster.items.map((item) => (
                      <span key={item} className="skill-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="cluster-desc">
                    {cluster.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
