import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import {Education} from "./components/Education";

import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { Certification } from "./components/Certification";

export default function App() {
  return (
    <div id="home" className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certification/>
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
