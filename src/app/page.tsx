'use client';

import dynamic from 'next/dynamic';
import Navigation3D from '@/components/Navigation3D';
import Hero3D from '@/components/Hero3D';
import About3D from '@/components/About3D';
import Projects3D from '@/components/Projects3D';
import Contact3D from '@/components/Contact3D';
import Footer3D from '@/components/Footer3D';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="relative">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Content Overlay */}
      <div className="relative z-10">
        <Navigation3D />
        <Hero3D />
        <About3D />
        <Projects3D />
        <Contact3D />
        <Footer3D />
      </div>
    </main>
  );
}
