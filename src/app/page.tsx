import Navigation from "@/components/Navigation";
import CompanyHero from "@/components/CompanyHero";
import About from "@/components/About";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
