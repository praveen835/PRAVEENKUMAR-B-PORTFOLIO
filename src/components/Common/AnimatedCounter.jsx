import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function AnimatedCounter({
  target,
  isDecimal = false,
  duration = 2000,
  suffix = '',
  prefix = ''
}) {
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(() => (prefersReducedMotion ? target : 0));
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const currentElem = elementRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic: 1 - Math.pow(1 - progress, 3)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeOut;

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.3 }
    );

    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [target, duration, prefersReducedMotion]);

  const displayValue = isDecimal
    ? count.toFixed(2)
    : Math.floor(count);

  return (
    <span ref={elementRef} className="counter-number">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
