'use client';

import dynamic from 'next/dynamic';
import Navigation3D from '@/components/Navigation3D';
import ProjectHero3D from '@/components/project/ProjectHero3D';
import ProjectOverview3D from '@/components/project/ProjectOverview3D';
import Footer3D from '@/components/Footer3D';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false });

const VisionPhilosophy3D = dynamic(() => import('@/components/project/VisionPhilosophy3D'), {
  loading: () => <div className="min-h-[50vh]" />,
});
const LocationAdvantage3D = dynamic(() => import('@/components/project/LocationAdvantage3D'), {
  loading: () => <div className="min-h-[50vh]" />,
});
const MasterPlan3D = dynamic(() => import('@/components/project/MasterPlan3D'), {
  loading: () => <div className="min-h-[50vh]" />,
});
const PlantForest3D = dynamic(() => import('@/components/project/PlantForest3D'), {
  loading: () => <div className="min-h-[50vh]" />,
});
const Amenities3D = dynamic(() => import('@/components/project/Amenities3D'), {
  loading: () => <div className="min-h-[50vh]" />,
});
const WhyInvest3D = dynamic(() => import('@/components/project/WhyInvest3D'), {
  loading: () => <div className="min-h-[50vh]" />,
});
const VideoGallery3D = dynamic(() => import('@/components/project/VideoGallery3D'), {
  loading: () => <div className="min-h-[50vh]" />,
});
const ProjectContact3D = dynamic(() => import('@/components/project/ProjectContact3D'), {
  loading: () => <div className="min-h-[50vh]" />,
});

export default function MeadowBreezePage() {
  return (
    <main className="relative">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Content */}
      <div className="relative z-10">
        <Navigation3D />
        <ProjectHero3D />
        <ProjectOverview3D />
        <VisionPhilosophy3D />
        <LocationAdvantage3D />
        <MasterPlan3D />
        <PlantForest3D />
        <Amenities3D />
        <WhyInvest3D />
        <VideoGallery3D />
        <ProjectContact3D />
        <Footer3D />
      </div>
    </main>
  );
}
