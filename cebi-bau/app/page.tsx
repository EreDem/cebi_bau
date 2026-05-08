import About from "@/components/about";
import CTA from "@/components/cta";
import FeatureBar from "@/components/featurebar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureBar />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}