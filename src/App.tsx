import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import SoftwareSection from './sections/SoftwareSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';
import SocialSection from './sections/SocialSection';

// Software Pages
import Photoshop from './pages/photoshop';
import Illustrator from './pages/illustrator';
import Coreldraw from './pages/Coreldraw';
import Figma from './pages/Figma';
import Canva from './pages/Canva';
import PremierePro from './pages/Premiere pro';
import AfterEffects from './pages/After Effects';
import HtmlCss from './pages/html-css';

function HomePage() {
  return (
    <div
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
      className="min-h-screen w-full"
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <SoftwareSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SocialSection />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* MAIN PORTFOLIO */}
        <Route path="/" element={<HomePage />} />

        {/* SOFTWARE PAGES */}
        <Route
          path="/software/photoshop"
          element={<Photoshop />}
        />

        <Route
          path="/software/illustrator"
          element={<Illustrator />}
        />

        <Route
          path="/software/coreldraw"
          element={<Coreldraw />}
        />

        <Route
          path="/software/figma"
          element={<Figma />}
        />

        <Route
          path="/software/canva"
          element={<Canva />}
        />

        <Route
          path="/software/premiere-pro"
          element={<PremierePro />}
        />

        <Route
          path="/software/after-effects"
          element={<AfterEffects />}
        />

        <Route
          path="/software/html-css"
          element={<HtmlCss />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;