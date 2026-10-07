import { useEffect } from 'react';
import './Projects.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="project-modal-drawer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="modal-header-row">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)' }}>
            [{project.number}] // {project.category}
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
            data-cursor="click"
          >
            <span>CLOSE</span>
            <span>✕</span>
          </button>
        </div>

        {/* Title */}
        <div>
          <h2 id="modal-project-title" className="project-title-editorial" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            {project.title}
          </h2>
          <div className="project-subtitle-editorial" style={{ marginTop: '0.5rem' }}>
            {project.subtitle}
          </div>
        </div>

        {/* Modal content body */}
        <div className="modal-body">
          {/* Technologies */}
          <div className="modal-section">
            <span className="modal-section-title">TECHNOLOGIES & TOOLS</span>
            <div className="project-tech-pills">
              {project.technologies.map((tech) => (
                <span key={tech} className="project-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="modal-section">
            <span className="modal-section-title">OVERVIEW</span>
            <p style={{ color: 'var(--text-primary)', lineHeight: 1.6 }}>
              {project.overview}
            </p>
          </div>

          {/* Problem */}
          <div className="modal-section">
            <span className="modal-section-title">THE PROBLEM</span>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="modal-section">
            <span className="modal-section-title">THE SOLUTION</span>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.solution}
            </p>
          </div>

          {/* Features */}
          <div className="modal-section">
            <span className="modal-section-title">KEY SYSTEM FEATURES</span>
            <div className="modal-feature-list">
              {project.features.map((feature) => (
                <div key={feature} className="modal-feature-item">
                  <span className="modal-feature-dot" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Flow */}
          <div className="modal-section">
            <span className="modal-section-title">OPERATIONAL PIPELINE FLOW</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginTop: '0.5rem' }}>
              {project.flow.map((step, idx) => (
                <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="project-tech-pill" style={{ background: 'rgba(229, 57, 53, 0.08)', borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                    {step}
                  </span>
                  {idx < project.flow.length - 1 && (
                    <span style={{ color: 'var(--accent)', opacity: 0.7 }}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
