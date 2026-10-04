import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import MoreProjects from './components/MoreProjects';
import WhatIBuild from './components/WhatIBuild';
import Approach from './components/Approach';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#0f172a] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-500/20 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <MoreProjects />
        <WhatIBuild />
        <Approach />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
