import { useRef, useEffect } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  dataCursor = 'click',
  ariaLabel,
  ...props
}) {
  const btnRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = btnRef.current;
    if (!el || prefersReducedMotion) return;

    let bounds = el.getBoundingClientRect();

    const handleMouseMove = (e) => {
      bounds = el.getBoundingClientRect();
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;
      el.style.transform = `translate3d(${x * 0.25}px, ${y * 0.25}px, 0)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'translate3d(0px, 0px, 0px)';
      el.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    const handleMouseEnter = () => {
      el.style.transition = 'transform 0.1s ease-out';
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        target={target}
        rel={rel}
        className={className}
        data-cursor={dataCursor}
        aria-label={ariaLabel}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      type="button"
      className={className}
      data-cursor={dataCursor}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
