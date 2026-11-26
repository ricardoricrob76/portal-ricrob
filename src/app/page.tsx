import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Teaching from "@/components/Teaching";
import Projects from "@/components/Projects";
import Talks from "@/components/Talks";
import Publications from "@/components/Publications";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Teaching />
      <Projects />
      <Talks />
      <Publications />
      <Certifications />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
