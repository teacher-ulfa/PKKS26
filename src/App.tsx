/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PrincipalProfileSection } from './components/PrincipalProfileSection';
import { RaporPbdDashboardSection } from './components/RaporPbdDashboardSection';
import { ProgramsTableSection } from './components/ProgramsTableSection';
import { PrestasiSection } from './components/PrestasiSection';
import { MediaAndGallerySection } from './components/MediaAndGallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { PresentationMode } from './components/PresentationMode';
import { FeaturedProgram } from './data/programsData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);
  const [selectedProgram, setSelectedProgram] = useState<FeaturedProgram | null>(null);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'profil', 'rapor-pbd', 'program-kerja', 'prestasi', 'galeri', 'testimoni'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section === 'beranda') {
          if (window.scrollY < 400) {
            setActiveSection('beranda');
            break;
          }
        } else {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenPresentation={() => setIsPresentationOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Viewport */}
      <main className="flex-1">
        <HeroSection
          onOpenPresentation={() => setIsPresentationOpen(true)}
          onNavigate={handleNavigate}
        />

        <PrincipalProfileSection />

        <RaporPbdDashboardSection />

        <ProgramsTableSection
          onSelectProgram={(program) => setSelectedProgram(program)}
        />

        <PrestasiSection />

        <MediaAndGallerySection />

        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals and Overlays */}
      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />

      {isPresentationOpen && (
        <PresentationMode onClose={() => setIsPresentationOpen(false)} />
      )}
    </div>
  );
}
