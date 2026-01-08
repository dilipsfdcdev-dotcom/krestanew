import ProjectHero from '@/components/project/ProjectHero';
import ProjectOverview from '@/components/project/ProjectOverview';
import MasterPlan from '@/components/project/MasterPlan';
import PlantForestScroll from '@/components/project/PlantForestScroll';
import ProjectAmenities from '@/components/project/ProjectAmenities';
import VideoGallery from '@/components/project/VideoGallery';
import ProjectContact from '@/components/project/ProjectContact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'The Meadow Breeze | Premium Farmland by Kresta',
  description: 'Premium 50-acre farmland community at Peepal Pahad, Choutuppal. 600-900 plants per plot, 360° mountain views, gated community with world-class amenities.',
};

export default function MeadowBreezePage() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <ProjectHero />
      <ProjectOverview />
      <MasterPlan />
      <PlantForestScroll />
      <ProjectAmenities />
      <VideoGallery />
      <ProjectContact />
      <Footer />
    </main>
  );
}
