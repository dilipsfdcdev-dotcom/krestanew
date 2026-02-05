import dynamic from 'next/dynamic';
import Navigation from "@/components/Navigation";
import CompanyHero from "@/components/CompanyHero";

// Lazy load below-the-fold components for faster initial page load
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-[50vh] bg-[#faf8f5]" />,
});
const ProjectsShowcase = dynamic(() => import("@/components/ProjectsShowcase"), {
  loading: () => <div className="min-h-[50vh] bg-[#0a0a0a]" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[50vh] bg-[#faf8f5]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[20vh] bg-[#0a0a0a]" />,
});

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <CompanyHero />
      <About />
      <ProjectsShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
