
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

    // Create spider web effect with multiple grey lines
    const webLines = [];
    const numberOfLines = 15;
    const greyColors = [
      '#8E9196', // Neutral Grey
      '#C8C8C9', // Light Grey
      '#8A898C', // Medium Grey
      '#9F9EA1', // Silver Grey
    ];

    // Create circular web structure
    for (let i = 0; i < numberOfLines; i++) {
      const material = new THREE.LineBasicMaterial({ 
        color: greyColors[i % greyColors.length],
        transparent: true,
        opacity: 0.2
      });

      const points = [];
      const radius = 3;
      const segments = 8;
      
      // Create spiral effect
      for (let j = 0; j <= segments * 2; j++) {
        const angle = (j / segments) * Math.PI * 2;
        const radiusOffset = (j / (segments * 2)) * radius;
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * radiusOffset,
            Math.sin(angle) * radiusOffset,
            (Math.random() - 0.5) * 0.5
          )
        );
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      webLines.push(line);
      scene.add(line);

      // Add connecting lines (radial lines)
      if (i % 2 === 0) {
        const radialPoints = [];
        for (let k = 0; k < 6; k++) {
          const angle = (k / 6) * Math.PI * 2;
          radialPoints.push(
            new THREE.Vector3(
              Math.cos(angle) * radius,
              Math.sin(angle) * radius,
              (Math.random() - 0.5) * 0.5
            )
          );
        }
        const radialGeometry = new THREE.BufferGeometry().setFromPoints(radialPoints);
        const radialLine = new THREE.Line(radialGeometry, material);
        webLines.push(radialLine);
        scene.add(radialLine);
      }
    }

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      webLines.forEach((line, index) => {
        line.rotation.x += 0.0002 * Math.sin(index);
        line.rotation.y += 0.0002 * Math.cos(index);
        line.rotation.z += 0.0001;
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
      webLines.forEach(line => {
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
