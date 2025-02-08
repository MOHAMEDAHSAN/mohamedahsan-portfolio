
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create lines with more subtle colors
    const colors = [
      new THREE.Color('#4B4B4B'), // Grey
      new THREE.Color('#D72638'), // Primary
      new THREE.Color('#2563EB'), // Highlight
    ];

    const lines = [];
    for(let i = 0; i < 3; i++) {
      const material = new THREE.LineBasicMaterial({ 
        color: colors[i],
        transparent: true,
        opacity: 0.3
      });

      const points = [];
      for(let j = 0; j < 100; j++) {
        points.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          )
        );
      }

      const linesGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(linesGeometry, material);
      lines.push(line);
      scene.add(line);
    }

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      lines.forEach((line, index) => {
        line.rotation.x += 0.0005 * (index + 1);
        line.rotation.y += 0.0005 * (index + 1);
      });
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      lines.forEach(line => {
        scene.remove(line);
        line.geometry.dispose();
        line.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};

export default AnimatedBackground;
