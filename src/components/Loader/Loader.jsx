import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Loader.css';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const WORDS = ['PRAVEEN', 'KUMAR', 'PYTHON', 'AI'];
const STATUS_STEPS = [
  '00% // INITIALIZING DIGITAL LABORATORY',
  '25% // COMPILING PYTHON RUNTIME & AST',
  '50% // CONNECTING RESTful API GATEWAYS',
  '75% // LOADING AI & DATA STRUCTURES',
  '100% // SYSTEM INITIALIZED'
];
const COUNTER_VALUES = ['00%', '25%', '50%', '75%', '100%'];

export default function Loader({ onComplete }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const loaderRef = useRef(null);
  const wordRef = useRef(null);
  const fillRef = useRef(null);
  const svgRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const totalDuration = prefersReducedMotion ? 600 : 2000;
    const stepDuration = totalDuration / 4;

    // Failsafe safety fallback to ensure portfolio is never stuck
    const failsafe = setTimeout(() => {
      onComplete();
    }, 2800);

    // Timeline for word and progress stepping
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= 4) {
        setStepIndex(currentStep);
        if (currentStep < 4) {
          setCurrentWordIndex(currentStep);
        }

        // Animate progress bar fill
        if (fillRef.current) {
          fillRef.current.style.width = `${currentStep * 25}%`;
        }

        // Micro bounce on word change
        if (wordRef.current && !prefersReducedMotion) {
          gsap.fromTo(
            wordRef.current,
            { y: 20, opacity: 0.2, scale: 0.98 },
            { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' }
          );
        }
      } else {
        clearInterval(interval);
        clearTimeout(failsafe);
        triggerExit();
      }
    }, stepDuration);

    // Initial word entrance
    if (wordRef.current && !prefersReducedMotion) {
      gsap.fromTo(
        wordRef.current,
        { y: 25, opacity: 0.2 },
        { y: 0, opacity: 1, duration: 0.35, ease: 'power3.out' }
      );
    }

    // Continuous subtle rotation of the wireframe node network
    let rotateTween;
    if (svgRef.current && !prefersReducedMotion) {
      rotateTween = gsap.to(svgRef.current, {
        rotation: 360,
        duration: 30,
        ease: 'none',
        repeat: -1
      });
    }

    function triggerExit() {
      if (rotateTween) rotateTween.kill();

      if (prefersReducedMotion) {
        onComplete();
        return;
      }

      // Transform loader into hero smoothly (cinematic slide/wipe upward with scale)
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        }
      });

      tl.to('.loader-center, .loader-top-bar, .loader-bottom-bar', {
        opacity: 0,
        y: -30,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.in'
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.95,
        ease: 'power4.inOut'
      }, '-=0.2');
    }

    return () => {
      clearInterval(interval);
      if (rotateTween) rotateTween.kill();
    };
  }, [onComplete, prefersReducedMotion]);

  return (
    <div ref={loaderRef} className="loader-overlay" role="progressbar" aria-valuenow={stepIndex * 25} aria-valuemin="0" aria-valuemax="100">
      <div className="loader-top-bar">
        <div className="loader-brand">
          <span className="loader-brand-dot" />
          <span>PRAVEENKUMAR BALAKRISHNAN</span>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)' }}>
          [COIMBATORE // 11.0168° N, 76.9558° E]
        </div>
      </div>

      <div className="loader-center">
        {/* Technical AI node network / wireframe data structure visual */}
        <svg
          ref={svgRef}
          className="loader-wireframe-svg"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric orbital rings */}
          <circle cx="250" cy="250" r="230" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
          <circle cx="250" cy="250" r="170" stroke="#0A0A0A" strokeWidth="1" opacity="0.3" />
          <circle cx="250" cy="250" r="100" stroke="#E53935" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
          
          {/* Dynamic data nodes and connecting vectors */}
          <line x1="120" y1="120" x2="380" y2="380" stroke="#0A0A0A" strokeWidth="1" opacity="0.2" />
          <line x1="380" y1="120" x2="120" y2="380" stroke="#0A0A0A" strokeWidth="1" opacity="0.2" />
          <line x1="250" y1="20" x2="250" y2="480" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="3 6" opacity="0.2" />
          <line x1="20" y1="250" x2="480" y2="250" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="3 6" opacity="0.2" />

          {/* Neural nodes */}
          <circle cx="120" cy="120" r="5" fill="#0A0A0A" />
          <circle cx="380" cy="120" r="5" fill="#0A0A0A" />
          <circle cx="380" cy="380" r="5" fill="#0A0A0A" />
          <circle cx="120" cy="380" r="5" fill="#0A0A0A" />
          <circle cx="250" cy="80" r="4" fill="#E53935" />
          <circle cx="250" cy="420" r="4" fill="#E53935" />
          <circle cx="80" cy="250" r="4" fill="#E53935" />
          <circle cx="420" cy="250" r="4" fill="#E53935" />
          <circle cx="250" cy="250" r="7" fill="#0A0A0A" />
        </svg>

        <div className="loader-word-container">
          <h1
            ref={wordRef}
            className={`loader-word ${currentWordIndex >= 2 ? 'accent-word' : ''}`}
          >
            {WORDS[currentWordIndex]}
          </h1>
        </div>
      </div>

      <div className="loader-bottom-bar">
        <div className="loader-progress-row">
          <div className="loader-status-text">
            {STATUS_STEPS[stepIndex]}
          </div>
          <div className="loader-counter">
            {COUNTER_VALUES[stepIndex]}
          </div>
        </div>
        <div className="loader-track">
          <div ref={fillRef} className="loader-fill" style={{ width: '0%' }} />
        </div>
      </div>
    </div>
  );
}
