
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

    // Create more vibrant lines with gradient effect
    const gradientColors = [
      new THREE.Color('#8B5CF6'), // Vivid Purple
      new THREE.Color('#D946EF'), // Magenta Pink
      new THREE.Color('#F97316'), // Bright Orange
      new THREE.Color('#0EA5E9'), // Ocean Blue
    ];

    const lines = [];
    for(let i = 0; i < 4; i++) {
      const material = new THREE.LineBasicMaterial({ 
        color: gradientColors[i],
        transparent: true,
        opacity: 0.8
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
        line.rotation.x += 0.001 * (index + 1);
        line.rotation.y += 0.001 * (index + 1);
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
