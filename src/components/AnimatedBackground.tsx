
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0.05); // Very subtle dark background
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1000; // Reduced particle count for cleaner look
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Create a grid pattern
    const gridSize = Math.ceil(Math.cbrt(particleCount));
    const spacing = 2; // Space between particles

    let index = 0;
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          if (index >= particleCount * 3) break;
          
          positions[index] = (x - gridSize / 2) * spacing;
          positions[index + 1] = (y - gridSize / 2) * spacing;
          positions[index + 2] = (z - gridSize / 2) * spacing;

          // Soft blue and purple gradient
          colors[index] = 0.4;     // R: subtle purple
          colors[index + 1] = 0.5; // G: minimal for depth
          colors[index + 2] = 0.8; // B: dominant but soft blue
          
          index += 3;
        }
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    camera.position.z = 30;

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.0002; // Very slow, smooth animation

      // Create a gentle floating effect
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const initialX = positions[i];
        const initialY = positions[i + 1];
        const initialZ = positions[i + 2];
        
        // Gentle wave motion
        positions[i] = initialX + Math.sin(time + initialY * 0.1) * 0.3;
        positions[i + 1] = initialY + Math.cos(time + initialX * 0.1) * 0.3;
        positions[i + 2] = initialZ + Math.sin(time + initialZ * 0.1) * 0.3;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Very slow rotation
      particleSystem.rotation.y += 0.0001;
      particleSystem.rotation.x += 0.00005;
      
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
      scene.remove(particleSystem);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};

export default AnimatedBackground;
