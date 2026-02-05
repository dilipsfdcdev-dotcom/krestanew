import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectOverview from '@/components/project/ProjectOverview';

// Lazy load below-the-fold components for faster initial page load
const VisionPhilosophy = dynamic(() => import('@/components/project/VisionPhilosophy'), {
  loading: () => <div className="min-h-[50vh] bg-[#faf8f5]" />,
});
const LocationAdvantage = dynamic(() => import('@/components/project/LocationAdvantage'), {
  loading: () => <div className="min-h-[50vh] bg-[#0a0a0a]" />,
});
const MasterPlan = dynamic(() => import('@/components/project/MasterPlan'), {
  loading: () => <div className="min-h-[50vh] bg-[#faf8f5]" />,
});
const PlantForestScroll = dynamic(() => import('@/components/project/PlantForestScroll'), {
  loading: () => <div className="min-h-[50vh] bg-[#faf8f5]" />,
});
const ProjectAmenities = dynamic(() => import('@/components/project/ProjectAmenities'), {
  loading: () => <div className="min-h-[50vh] bg-[#0a0a0a]" />,
});
const LifestylePathways = dynamic(() => import('@/components/project/LifestylePathways'), {
  loading: () => <div className="min-h-[50vh] bg-[#faf8f5]" />,
});
const WhyInvest = dynamic(() => import('@/components/project/WhyInvest'), {
  loading: () => <div className="min-h-[50vh] bg-[#0a0a0a]" />,
});
const VideoGallery = dynamic(() => import('@/components/project/VideoGallery'), {
  loading: () => <div className="min-h-[50vh] bg-[#0a0a0a]" />,
});
const ProjectContact = dynamic(() => import('@/components/project/ProjectContact'), {
  loading: () => <div className="min-h-[50vh] bg-[#faf8f5]" />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[20vh] bg-[#0a0a0a]" />,
});

export const metadata = {
  title: 'The Meadow Breeze | A Distinguished 100-Acre Farmland Estate by Kresta',
  description: 'A distinguished 100-acre farmland estate nestled amidst the majestic Rachakonda Hills. 600-900 plants per plot, 360° panoramic mountain views, gated community with world-class amenities. 30 km from ORR Exit 11.',
};

export default function MeadowBreezePage() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <ProjectHero />
      <ProjectOverview />
      <VisionPhilosophy />
      <LocationAdvantage />
      <MasterPlan />
      <PlantForestScroll />
      <ProjectAmenities />
      <LifestylePathways />
      <WhyInvest />
      <VideoGallery />
      <ProjectContact />
      <Footer />
    </main>
  );
}
