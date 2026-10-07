import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

function checkWebglSupport() {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

export default function NeuralBackground3D() {
  const mountRef = useRef(null);
  const [webglSupported] = useState(checkWebglSupport);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!webglSupported || prefersReducedMotion) return;

    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 180;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Generate node particles (data network nodes)
    const particleCount = 42; // Low count for high performance
    const positions = new Float32Array(particleCount * 3);
    const particleData = [];

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 160;
      const y = (Math.random() - 0.5) * 120;
      const z = (Math.random() - 0.5) * 80;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      particleData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.15,
          (Math.random() - 0.5) * 0.15,
          (Math.random() - 0.5) * 0.1
        ),
        numConnections: 0
      });
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle nodes material - Deep graphite black & strategic crimson
    const pMaterial = new THREE.PointsMaterial({
      color: 0x0a0a0a,
      size: 3.5,
      transparent: true,
      opacity: 0.65,
      blending: THREE.NormalBlending
    });

    const pointCloud = new THREE.Points(particlesGeometry, pMaterial);
    scene.add(pointCloud);

    // Dynamic interconnecting vectors
    const linePositions = new Float32Array(particleCount * particleCount * 3);
    const lineColors = new Float32Array(particleCount * particleCount * 3);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const linesMaterial = new THREE.LineSegments(
      linesGeometry,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.25,
        blending: THREE.NormalBlending
      })
    );
    scene.add(linesMaterial);

    // Mouse movement parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const halfX = window.innerWidth / 2;
      const halfY = window.innerHeight / 2;
      mouseX = (e.clientX - halfX) * 0.04;
      mouseY = (e.clientY - halfY) * 0.04;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Window resize handler
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Subtle mouse tracking
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      scene.rotation.y = targetX * 0.015;
      scene.rotation.x = targetY * 0.015;

      const pPositions = particlesGeometry.attributes.position.array;
      let vertexPos = 0;
      let colorPos = 0;
      let lineCount = 0;

      for (let i = 0; i < particleCount; i++) {
        particleData[i].numConnections = 0;
      }

      for (let i = 0; i < particleCount; i++) {
        // Move nodes
        pPositions[i * 3] += particleData[i].velocity.x;
        pPositions[i * 3 + 1] += particleData[i].velocity.y;
        pPositions[i * 3 + 2] += particleData[i].velocity.z;

        // Bounce boundaries
        if (pPositions[i * 3] < -80 || pPositions[i * 3] > 80) particleData[i].velocity.x *= -1;
        if (pPositions[i * 3 + 1] < -60 || pPositions[i * 3 + 1] > 60) particleData[i].velocity.y *= -1;
        if (pPositions[i * 3 + 2] < -40 || pPositions[i * 3 + 2] > 40) particleData[i].velocity.z *= -1;

        // Connect nearby nodes
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pPositions[i * 3] - pPositions[j * 3];
          const dy = pPositions[i * 3 + 1] - pPositions[j * 3 + 1];
          const dz = pPositions[i * 3 + 2] - pPositions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 45) {
            particleData[i].numConnections++;
            particleData[j].numConnections++;

            linePositions[vertexPos++] = pPositions[i * 3];
            linePositions[vertexPos++] = pPositions[i * 3 + 1];
            linePositions[vertexPos++] = pPositions[i * 3 + 2];

            linePositions[vertexPos++] = pPositions[j * 3];
            linePositions[vertexPos++] = pPositions[j * 3 + 1];
            linePositions[vertexPos++] = pPositions[j * 3 + 2];

            // Subtle crimson accent on some lines
            const isAccent = (i + j) % 7 === 0;
            const r = isAccent ? 0.9 : 0.04;
            const g = isAccent ? 0.22 : 0.04;
            const b = isAccent ? 0.21 : 0.04;

            lineColors[colorPos++] = r;
            lineColors[colorPos++] = g;
            lineColors[colorPos++] = b;

            lineColors[colorPos++] = r;
            lineColors[colorPos++] = g;
            lineColors[colorPos++] = b;

            lineCount++;
          }
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.setDrawRange(0, lineCount * 2);
      linesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

      try {
        if (container && renderer?.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }

        particlesGeometry?.dispose();
        pMaterial?.dispose();
        linesGeometry?.dispose();
        linesMaterial?.material?.dispose();
        linesMaterial?.dispose();
        renderer?.dispose();
      } catch {
        // Safe cleanup fallback
      }
    };
  }, [webglSupported, prefersReducedMotion]);

  if (!webglSupported || prefersReducedMotion) {
    // Elegant SVG fallback with animated technical data geometry
    return (
      <div className="neural-fallback-svg-container" aria-hidden="true">
        <svg viewBox="0 0 800 600" className="neural-fallback-svg" fill="none">
          <circle cx="400" cy="300" r="220" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="4 6" opacity="0.15" />
          <circle cx="400" cy="300" r="140" stroke="#E53935" strokeWidth="1" strokeDasharray="2 4" opacity="0.25" />
          <line x1="200" y1="180" x2="600" y2="420" stroke="#0A0A0A" strokeWidth="1" opacity="0.12" />
          <line x1="600" y1="180" x2="200" y2="420" stroke="#0A0A0A" strokeWidth="1" opacity="0.12" />
          <circle cx="200" cy="180" r="4" fill="#0A0A0A" opacity="0.4" />
          <circle cx="600" cy="180" r="4" fill="#E53935" opacity="0.6" />
          <circle cx="200" cy="420" r="4" fill="#E53935" opacity="0.6" />
          <circle cx="600" cy="420" r="4" fill="#0A0A0A" opacity="0.4" />
          <circle cx="400" cy="300" r="6" fill="#0A0A0A" opacity="0.7" />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="neural-canvas-container"
      data-cursor="explore"
      aria-hidden="true"
    />
  );
}
