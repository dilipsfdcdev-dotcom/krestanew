'use client';

import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import ParticleField from './ParticleField';
import FloatingGeometry from './FloatingGeometry';

function SceneContent({ scrollProgress }: { scrollProgress: number }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#c9a962" />
      <pointLight position={[-10, -10, -5]} intensity={0.2} color="#2d6a4f" />
      <ParticleField scrollProgress={scrollProgress} />
      <FloatingGeometry scrollProgress={scrollProgress} />
      <fog attach="fog" args={['#0a0a0f', 8, 35]} />
      <Preload all />
    </>
  );
}

export default function Scene3D() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 12], fov: isMobile ? 60 : 45 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          <SceneContent scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
