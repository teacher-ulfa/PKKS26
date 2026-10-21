import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  Sparkles,
  Presentation,
  CheckCircle2,
  Layers,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PKKS_PRESENTATION_SLIDES } from '../data/presentationSlides';
import { PRINCIPAL_PROFILE, SMAN_KREMBUNG_INFO } from '../data/schoolData';

interface PresentationModeProps {
  onClose: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({ onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [showNotes, setShowNotes] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const slides = PKKS_PRESENTATION_SLIDES;
  const currentSlide = slides[currentSlideIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      // Fire celebratory confetti on reaching last slide
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col justify-between overflow-hidden select-none">
      {/* Top Slide Control Ribbon */}
      <div className="h-16 px-6 bg-slate-900/90 border-b border-blue-900/40 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <img
            src={SMAN_KREMBUNG_INFO.logoUrl}
            alt="Logo SMANIKRE"
            className="w-8 h-8 object-contain"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="text-xs font-bold text-white tracking-wide">
              SMAN 1 KREMBUNG · PRESENTASI PKKS
            </div>
            <div className="text-[10px] text-blue-300 font-mono">
              Ruang GTK · Ibu {PRINCIPAL_PROFILE.name}
            </div>
          </div>
        </div>

        {/* Slide Counter & Indicators */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-cyan-300 font-bold px-2 py-0.5 rounded bg-blue-950 border border-blue-800">
            Slide {currentSlideIndex + 1} / {slides.length}
          </span>
          <div className="hidden sm:flex items-center gap-1.5 ml-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentSlideIndex
                    ? 'w-6 bg-cyan-400'
                    : 'bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Pindah ke Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 ${
              showNotes
                ? 'bg-blue-600/30 text-cyan-300 border-blue-500/50'
                : 'text-slate-400 border-slate-700 hover:text-white'
            }`}
            title="Tampilkan / Sembunyikan Catatan Pemateri"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Catatan Pemateri</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            title="Layar Penuh"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-rose-900/40 rounded-lg transition-colors"
            title="Keluar dari Mode Presentasi (Esc)"
          >
            <X className="w-5 h-5 text-rose-400" />
          </button>
        </div>
      </div>

      {/* Main Slide Stage */}
      <div className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-12 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

        <div className="max-w-5xl w-full mx-auto space-y-8 relative z-10 animate-in fade-in duration-200">
          {/* Slide Header */}
          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-900/60 border border-blue-700/50 text-cyan-300 text-xs font-mono tracking-wider uppercase">
              <span>{currentSlide.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {currentSlide.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Talking Points & Key Metrics Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Talking Points List */}
            <div className="lg:col-span-7 bg-slate-900/80 rounded-2xl border border-blue-900/50 p-6 space-y-4 shadow-xl backdrop-blur-sm">
              <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Poin-Poin Pokok Pemaparan</span>
              </div>
              <div className="space-y-3">
                {currentSlide.talkingPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-blue-600/30 text-cyan-300 font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 border border-blue-500/30">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Box */}
              <div className="mt-4 pt-4 border-t border-slate-800">
                <div className="text-xs font-bold text-amber-300 mb-1">
                  {currentSlide.highlightBox.title}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed bg-blue-950/40 p-3 rounded-lg border border-blue-900/50">
                  {currentSlide.highlightBox.description}
                </p>
              </div>
            </div>

            {/* Right: Key Metrics Strip */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {currentSlide.keyMetrics.map((km, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-900 to-blue-950/80 rounded-2xl border border-blue-800/40 p-4 sm:p-5 flex flex-col justify-between shadow-lg"
                >
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {km.label}
                  </div>
                  <div className="my-2 text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono tabular-nums">
                    {km.value}
                  </div>
                  <div className="text-[10px] text-slate-400 leading-tight">
                    {km.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Presenter Notes Bar (Collapsible) */}
          {showNotes && (
            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/50 text-amber-200 text-xs leading-relaxed flex items-start gap-3 animate-in fade-in duration-150">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">Catatan Pemateri (Ibu Kepala Sekolah):</strong>{' '}
                {currentSlide.presenterNotes}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Nav Control Bar */}
      <div className="h-16 px-6 bg-slate-900/90 border-t border-blue-900/40 flex items-center justify-between shrink-0">
        <button
          onClick={handlePrev}
          disabled={currentSlideIndex === 0}
          className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
            currentSlideIndex === 0
              ? 'text-slate-600 bg-slate-800/40 cursor-not-allowed'
              : 'text-white bg-slate-800 hover:bg-slate-700'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </button>

        <div className="text-xs text-slate-400 hidden sm:block font-mono">
          Tekan tombol [Panah Kanan] untuk lanjut · [Esc] untuk keluar
        </div>

        <button
          onClick={handleNext}
          className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow transition-colors"
        >
          <span>{currentSlideIndex === slides.length - 1 ? 'Selesai (Apresiasi)' : 'Selanjutnya'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
