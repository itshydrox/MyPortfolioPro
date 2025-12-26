import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

const ThreeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    grid: THREE.GridHelper;
    lines: THREE.LineSegments;
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const isMobile = window.innerWidth < 768;
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 60 : 75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 40 : 30;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle system - Reduce particles on mobile
    const particleCount = isMobile ? 400 : 1000;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;
      
      velocities[i] = (Math.random() - 0.5) * 0.02;
      velocities[i + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i + 2] = (Math.random() - 0.5) * 0.02;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.2 : 0.15,
      color: theme === 'dark' ? 0x60a5fa : 0x3b82f6,
      transparent: true,
      opacity: isMobile ? 0.4 : 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Grid helper - Simpler on mobile
    const gridHelper = new THREE.GridHelper(
      100,
      isMobile ? 30 : 50,
      theme === 'dark' ? 0x1e3a8a : 0x93c5fd,
      theme === 'dark' ? 0x1e293b : 0xdbeafe
    );
    gridHelper.position.y = -20;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = isMobile ? 0.08 : 0.15;
    scene.add(gridHelper);

    // Connection lines between nearby particles
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: theme === 'dark' ? 0x3b82f6 : 0x60a5fa,
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    if (!isMobile) {
      scene.add(lines);
    }

    // Floating geometric shapes - Fewer on mobile
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.OctahedronGeometry(0.7),
      new THREE.TetrahedronGeometry(0.8),
    ];

    const shapeMaterial = new THREE.MeshBasicMaterial({
      color: theme === 'dark' ? 0x60a5fa : 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: isMobile ? 0.2 : 0.3,
    });

    const shapes: THREE.Mesh[] = [];
    const shapeCount = isMobile ? 4 : 8;
    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const shape = new THREE.Mesh(geometry, shapeMaterial.clone());
      shape.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shapes.push(shape);
      scene.add(shape);
    }

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.001;

      // Animate particles
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        // Boundary check
        if (Math.abs(positions[i]) > 50) velocities[i] *= -1;
        if (Math.abs(positions[i + 1]) > 50) velocities[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 50) velocities[i + 2] *= -1;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Update connection lines - Skip on mobile for performance
      if (!isMobile) {
        const linePositions: number[] = [];
        const maxDistance = 8;
        
        for (let i = 0; i < particleCount; i++) {
          for (let j = i + 1; j < particleCount; j++) {
            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (distance < maxDistance) {
              linePositions.push(
                positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
              );
            }
          }
        }

        lineGeometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(linePositions, 3)
        );
      }

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.001 * (index + 1);
        shape.rotation.y += 0.002 * (index + 1);
        shape.position.y += Math.sin(time * 2 + index) * 0.01;
      });

      // Rotate camera slightly - Less movement on mobile
      const cameraMovement = isMobile ? 1 : 2;
      camera.position.x = Math.sin(time * 0.2) * cameraMovement;
      camera.position.y = Math.cos(time * 0.15) * cameraMovement;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      const animationId = requestAnimationFrame(animate);
      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      grid: gridHelper,
      lines,
      animationId: 0,
    };

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        sceneRef.current.renderer.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
        geometries.forEach(g => g.dispose());
        shapeMaterial.dispose();
      }
    };
  }, []);

  // Update colors when theme changes
  useEffect(() => {
    if (!sceneRef.current) return;

    const { particles, grid, lines } = sceneRef.current;
    
    // Update particle color
    (particles.material as THREE.PointsMaterial).color.setHex(
      theme === 'dark' ? 0x60a5fa : 0x3b82f6
    );

    // Update grid colors
    (grid.material as THREE.LineBasicMaterial).color.setHex(
      theme === 'dark' ? 0x1e293b : 0xdbeafe
    );

    // Update line color
    (lines.material as THREE.LineBasicMaterial).color.setHex(
      theme === 'dark' ? 0x3b82f6 : 0x60a5fa
    );
  }, [theme]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20 md:opacity-40">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ThreeBackground;
