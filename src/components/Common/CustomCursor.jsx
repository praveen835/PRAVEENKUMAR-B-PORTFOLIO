import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [cursorState, setCursorState] = useState(''); // '', 'is-view', 'is-click', 'is-explore'
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Only run on non-touch devices and when motion is not reduced
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch || prefersReducedMotion) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check what element is being hovered
      const rawTarget = e.target;
      const target = rawTarget && rawTarget.nodeType === 1 ? rawTarget : rawTarget?.parentElement;
      const cursorTarget = target && typeof target.closest === 'function' ? target.closest('[data-cursor]') : null;
      const clickableTarget = target && typeof target.closest === 'function' ? target.closest('a, button, [role="button"], input, select') : null;

      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'view') {
          setCursorState('is-view');
          setCursorText('VIEW');
        } else if (type === 'explore') {
          setCursorState('is-explore');
          setCursorText('EXPLORE');
        } else if (type === 'click') {
          setCursorState('is-click');
          setCursorText('CLICK');
        } else {
          setCursorState('is-hovering');
          setCursorText('');
        }
      } else if (clickableTarget) {
        setCursorState('is-hovering');
        setCursorText('');
      } else {
        setCursorState('');
        setCursorText('');
      }
    };

    const render = () => {
      // Smooth interpolation for the follower circle
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor" aria-hidden="true" />
      <div
        ref={followerRef}
        className={`custom-cursor-follower ${cursorState}`}
        aria-hidden="true"
      >
        <span className="cursor-text">{cursorText}</span>
      </div>
    </>
  );
}
