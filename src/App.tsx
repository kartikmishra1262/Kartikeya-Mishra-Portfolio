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

import GraphicDesignPage from './pages/GraphicDesignPage';

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

        {/* GRAPHIC DESIGN PAGE */}
        <Route
        path="/:skill"
        element={<GraphicDesignPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;