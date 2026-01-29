import ProjectHero from '@/components/project/ProjectHero';
import ProjectOverview from '@/components/project/ProjectOverview';
import VisionPhilosophy from '@/components/project/VisionPhilosophy';
import LocationAdvantage from '@/components/project/LocationAdvantage';
import MasterPlan from '@/components/project/MasterPlan';
import PlantForestScroll from '@/components/project/PlantForestScroll';
import ProjectAmenities from '@/components/project/ProjectAmenities';
import LifestylePathways from '@/components/project/LifestylePathways';
import WhyInvest from '@/components/project/WhyInvest';
import VideoGallery from '@/components/project/VideoGallery';
import ProjectContact from '@/components/project/ProjectContact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
