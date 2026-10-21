import React, { useState } from 'react';
import { Presentation, ExternalLink, Menu, X, ShieldCheck } from 'lucide-react';
import { SMAN_KREMBUNG_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenPresentation: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPresentation,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil KS & Visi' },
    { id: 'rapor-pbd', label: 'Rapor PBD' },
    { id: 'program-kerja', label: '34 Program Unggulan' },
    { id: 'prestasi', label: 'Prestasi' },
    { id: 'galeri', label: 'Galeri & Media' },
    { id: 'testimoni', label: 'Sinergi' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900/95 backdrop-blur-md border-b border-blue-900/40 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Single brand wordmark with logo */}
          <div
            onClick={() => handleLinkClick('beranda')}
            className="flex items-center gap-3.5 cursor-pointer shrink-0 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/30 p-1 flex items-center justify-center shadow-inner overflow-hidden group-hover:scale-105 transition-transform">
              <img
                src={SMAN_KREMBUNG_INFO.logoUrl}
                alt="Logo SMAN 1 Krembung"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors whitespace-nowrap">
                SMAN 1 KREMBUNG
              </span>
              <span className="text-xs text-blue-200/80 font-medium tracking-wide flex items-center gap-1.5 whitespace-nowrap">
                <span>PKKS Ruang GTK</span>
                <span aria-hidden="true" className="text-blue-400">·</span>
                <span className="text-cyan-300">Kepemimpinan Berbasis Data</span>
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation Links (Desk View) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 text-sm ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPresentation}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm hover:shadow-blue-500/25 transition-all whitespace-nowrap border border-blue-400/40"
              title="Mulai Mode Presentasi Layar Penuh untuk Penilaian Pengawas"
            >
              <Presentation className="w-4 h-4 text-cyan-300" />
              <span>Mode Presentasi PKKS</span>
            </button>

            <a
              href={SMAN_KREMBUNG_INFO.documentationDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              <span>Drive Bukti</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-blue-900/60 px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-blue-600/30 text-cyan-300 border border-blue-500/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPresentation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
            >
              <Presentation className="w-4 h-4" />
              <span>Mulai Presentasi PKKS</span>
            </button>
            <a
              href={SMAN_KREMBUNG_INFO.documentationDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Buka Google Drive Bukti Fisik PKKS</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
