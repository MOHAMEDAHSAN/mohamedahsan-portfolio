
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
    renderer.setClearColor(0x000000, 0.05);
    containerRef.current.appendChild(renderer.domElement);

    // Create lotus petals
    const createPetal = () => {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.bezierCurveTo(2, 2, 3, 4, 0, 8);
      shape.bezierCurveTo(-3, 4, -2, 2, 0, 0);
      return shape;
    };

    const petalGeometry = new THREE.ShapeGeometry(createPetal());
    const petalMaterial = new THREE.MeshPhongMaterial({
      color: 0xE5DEFF,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    });

    // Create multiple layers of petals
    const lotusGroup = new THREE.Group();
    const petalLayers = 5;
    const petalsPerLayer = 8;

    for (let layer = 0; layer < petalLayers; layer++) {
      for (let i = 0; i < petalsPerLayer; i++) {
        const petal = new THREE.Mesh(petalGeometry, petalMaterial.clone());
        const angle = (i / petalsPerLayer) * Math.PI * 2;
        const layerScale = 1 - layer * 0.15;
        
        petal.scale.set(layerScale, layerScale, 1);
        petal.position.x = Math.cos(angle) * (2 + layer);
        petal.position.y = Math.sin(angle) * (2 + layer);
        petal.rotation.z = angle;
        petal.rotation.x = Math.PI * 0.3 * (layer / petalLayers);
        
        // Add slight color variation
        (petal.material as THREE.MeshPhongMaterial).color.setHSL(
          0.7 + Math.random() * 0.1,
          0.3 + Math.random() * 0.2,
          0.6 + Math.random() * 0.2
        );
        
        lotusGroup.add(petal);
      }
    }

    scene.add(lotusGroup);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x8B5CF6, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0x33C3F0, 0.4);
    backLight.position.set(-5, -5, -5);
    scene.add(backLight);

    camera.position.z = 20;

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.001; // Very slow rotation

      // Gentle floating motion
      lotusGroup.rotation.y = Math.sin(time * 0.5) * 0.2 + time * 0.2;
      lotusGroup.rotation.x = Math.cos(time * 0.5) * 0.1;
      lotusGroup.position.y = Math.sin(time) * 0.5;

      // Subtle petal animation
      lotusGroup.children.forEach((petal, i) => {
        petal.rotation.z += Math.sin(time + i) * 0.0002;
        petal.position.z = Math.sin(time * 0.5 + i * 0.1) * 0.2;
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
      scene.remove(lotusGroup);
      petalGeometry.dispose();
      petalMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};

export default AnimatedBackground;
