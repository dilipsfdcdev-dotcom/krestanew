import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import PlantForest from "@/components/PlantForest";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Project />
      <PlantForest />
      <Amenities />
      <Contact />
      <Footer />
    </main>
  );
}
