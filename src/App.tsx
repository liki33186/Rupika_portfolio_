import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { HireMeModal } from './components/HireMeModal';
import { DeploymentModal } from './components/DeploymentModal';

export default function App() {
  const [hireMeOpen, setHireMeOpen] = useState(false);
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col relative selection:bg-purple-600/30 selection:text-purple-200">
      {/* Background ambient lighting gradients */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        {/* Top-right violet orb */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-[120px]" />
        {/* Center-left cobalt orb */}
        <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-blue-700/10 rounded-full blur-[120px]" />
        {/* Bottom indigo glow */}
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-indigo-700/10 rounded-full blur-[140px]" />
      </div>

      {/* 1. Navbar */}
      <Navbar
        onOpenHireMe={() => setHireMeOpen(true)}
        onOpenDeployGuide={() => setDeployGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenHireMe={() => setHireMeOpen(true)}
          onViewProjects={handleScrollToProjects}
        />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section */}
        <Projects />

        {/* 5. Education Section */}
        <Education />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer
        onOpenDeployGuide={() => setDeployGuideOpen(true)}
      />

      {/* Interactive Modals */}
      <HireMeModal
        isOpen={hireMeOpen}
        onClose={() => setHireMeOpen(false)}
      />

      <DeploymentModal
        isOpen={deployGuideOpen}
        onClose={() => setDeployGuideOpen(false)}
      />
    </div>
  );
}
