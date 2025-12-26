import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

interface PictureThreeJSProps {
  techIcons: Array<{
    name: string;
    image: string;
    color: string;
  }>;
}

const PictureThreeJS: React.FC<PictureThreeJSProps> = ({ techIcons }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Colors based on theme
    const primaryColor = theme === 'dark' ? 0x4fc3f7 : 0x2563eb;
    const secondaryColor = theme === 'dark' ? 0x60a5fa : 0x3b82f6;

    // Create orbital rings around picture
    const ringCount = 3;
    const rings: THREE.Mesh[] = [];
    
    for (let i = 0; i < ringCount; i++) {
      const radius = 8 + i * 2;
      const geometry = new THREE.TorusGeometry(radius, 0.05, 16, 100);
      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? primaryColor : secondaryColor,
        transparent: true,
        opacity: 0.3
      });
      
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.x = Math.PI / 2 + (i * 0.2);
      ring.rotation.y = i * 0.3;
      scene.add(ring);
      rings.push(ring);
    }

    // Create particle field around picture
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      const radius = 10 + Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      const color = new THREE.Color(Math.random() > 0.5 ? primaryColor : secondaryColor);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      sizes[i] = Math.random() * 0.5 + 0.2;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Create glowing spheres
    const sphereCount = 8;
    const spheres: THREE.Mesh[] = [];
    
    for (let i = 0; i < sphereCount; i++) {
      const geometry = new THREE.SphereGeometry(0.3, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? primaryColor : secondaryColor,
        transparent: true,
        opacity: 0.7
      });
      
      const sphere = new THREE.Mesh(geometry, material);
      const angle = (i / sphereCount) * Math.PI * 2;
      const radius = 12;
      
      sphere.position.x = Math.cos(angle) * radius;
      sphere.position.y = Math.sin(angle) * radius;
      sphere.position.z = 0;
      
      sphere.userData = {
        angle: angle,
        radius: radius,
        speed: 0.5 + Math.random() * 0.5
      };
      
      scene.add(sphere);
      spheres.push(sphere);
    }

    // Create connecting lines between spheres
    const lineMaterial = new THREE.LineBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.2
    });
    
    const lines: THREE.Line[] = [];

    // Create DNA-like helix
    const helixParticles: THREE.Mesh[] = [];
    const helixCount = 50;
    
    for (let i = 0; i < helixCount; i++) {
      const t = (i / helixCount) * Math.PI * 4;
      const radius = 6;
      
      const geometry = new THREE.SphereGeometry(0.15, 8, 8);
      const material = new THREE.MeshBasicMaterial({
        color: primaryColor,
        transparent: true,
        opacity: 0.5
      });
      
      const particle = new THREE.Mesh(geometry, material);
      particle.position.x = Math.cos(t) * radius;
      particle.position.y = (i / helixCount) * 20 - 10;
      particle.position.z = Math.sin(t) * radius;
      
      particle.userData = { t: t, radius: radius };
      
      scene.add(particle);
      helixParticles.push(particle);
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / height) * 2 + 1;
    };
    
    container.addEventListener('mousemove', handleMouseMove);

    // Animation
    let animationId: number;
    let time = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      // Rotate rings
      rings.forEach((ring, i) => {
        ring.rotation.z += 0.001 * (i + 1);
        ring.rotation.x += 0.0005;
        (ring.material as THREE.MeshBasicMaterial).opacity = 0.2 + Math.sin(time + i) * 0.1;
      });

      // Animate particles
      const positions = particles.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const radius = Math.sqrt(
          positions[i3] * positions[i3] + 
          positions[i3 + 1] * positions[i3 + 1] + 
          positions[i3 + 2] * positions[i3 + 2]
        );
        
        const angle = Math.atan2(positions[i3 + 1], positions[i3]) + 0.001;
        const newRadius = radius + Math.sin(time + i * 0.1) * 0.05;
        
        positions[i3] = Math.cos(angle) * newRadius;
        positions[i3 + 1] = Math.sin(angle) * newRadius;
      }
      
      particles.geometry.attributes.position.needsUpdate = true;
      particles.rotation.y += 0.0005;

      // Animate spheres
      spheres.forEach((sphere, i) => {
        const angle = sphere.userData.angle + time * sphere.userData.speed;
        const radius = sphere.userData.radius + Math.sin(time * 2 + i) * 1;
        
        sphere.position.x = Math.cos(angle) * radius;
        sphere.position.y = Math.sin(angle) * radius;
        sphere.position.z = Math.sin(time + i) * 3;
        
        (sphere.material as THREE.MeshBasicMaterial).opacity = 0.5 + Math.sin(time * 2 + i) * 0.2;
      });

      // Update connecting lines
      lines.forEach(line => scene.remove(line));
      lines.length = 0;
      
      for (let i = 0; i < spheres.length; i++) {
        const nextIndex = (i + 1) % spheres.length;
        const points = [spheres[i].position, spheres[nextIndex].position];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, lineMaterial);
        scene.add(line);
        lines.push(line);
      }

      // Animate helix
      helixParticles.forEach((particle, i) => {
        const t = particle.userData.t + time;
        particle.position.x = Math.cos(t) * particle.userData.radius;
        particle.position.z = Math.sin(t) * particle.userData.radius;
        (particle.material as THREE.MeshBasicMaterial).opacity = 0.3 + Math.sin(time * 2 + i * 0.1) * 0.2;
      });

      // Camera follows mouse
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = container.offsetWidth;
      const newHeight = container.offsetHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      
      rings.forEach(ring => {
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
      });
      
      particleGeometry.dispose();
      particleMaterial.dispose();
      
      spheres.forEach(sphere => {
        sphere.geometry.dispose();
        (sphere.material as THREE.Material).dispose();
      });
      
      lines.forEach(line => {
        line.geometry.dispose();
      });
      
      helixParticles.forEach(particle => {
        particle.geometry.dispose();
        (particle.material as THREE.Material).dispose();
      });
      
      lineMaterial.dispose();
      renderer.dispose();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [theme, techIcons]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default PictureThreeJS;
