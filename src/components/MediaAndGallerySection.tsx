import React, { useState } from 'react';
import {
  Camera,
  ExternalLink,
  Newspaper,
  Award,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  ChevronRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { GALLERY_PHOTOS, PRESS_COVERAGE_SMB, GalleryPhoto } from '../data/galleryData';
import { SMAN_KREMBUNG_INFO } from '../data/schoolData';

export const MediaAndGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Dokumentasi (12)' },
    { id: 'Prestasi & Siswa', label: 'Para Juara & Siswa' },
    { id: 'Budaya & Karakter', label: 'Karnaval & Budaya' },
    { id: 'Adiwiyata & Lingkungan', label: 'Berling & Adiwiyata' },
    { id: 'Demokrasi & OSIS', label: 'Demokrasi Pilketos' },
    { id: 'Religi & Spiritual', label: 'Maulid Nabi & Ibadah' },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeCategory === 'all') return true;
    return photo.category === activeCategory;
  });

  return (
    <section id="galeri" className="py-16 lg:py-24 bg-slate-900 text-white border-b border-blue-900/40 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">
            <Camera className="w-4 h-4 text-cyan-400" />
            <span>Eviden Visual & Publikasi Media Massa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Galeri Bukti Nyata & Sorotan Media Nasional
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            Dokumentasi otentik kegiatan pembiasaan, panen prestasi, kepemimpinan lapangan kepala sekolah, serta liputan pers penobatan SMAN 1 Krembung sebagai percontohan.
          </p>
        </div>

        {/* FEATURED PRESS SPOTLIGHT: RADAR JATIM SMB 2026 */}
        <div className="mb-14 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-blue-800/50">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600/30 border border-blue-400/40 text-cyan-300 text-xs font-mono">
                <Newspaper className="w-3.5 h-3.5" />
                <span>LIPUTAN MEDIA MASSA · {PRESS_COVERAGE_SMB.media.toUpperCase()}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                {PRESS_COVERAGE_SMB.title}
              </h3>
              <p className="text-xs sm:text-sm text-blue-200">
                Pemberitaan Resmi Tanggal: <span className="font-mono text-cyan-300">{PRESS_COVERAGE_SMB.date}</span> · Penanggung Jawab Program: <strong className="text-white">Siwi Kuntarsih, S.Pd., M.Pd. & Ulfatul Husna, S.Ag., M.Pd.</strong>
              </p>
            </div>

            <a
              href={PRESS_COVERAGE_SMB.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/30 border border-blue-400/40 transition-all shrink-0 hover:scale-[1.02]"
            >
              <span>Baca Berita di Radar Jatim</span>
              <ExternalLink className="w-4 h-4 text-cyan-200" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                {PRESS_COVERAGE_SMB.lead}
              </p>

              <blockquote className="text-xs sm:text-sm text-cyan-200 italic bg-blue-950/60 p-4 rounded-xl border border-blue-800/60 leading-relaxed">
                {PRESS_COVERAGE_SMB.quote}
              </blockquote>
            </div>

            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Poin Keberhasilan Role Model SMB:</span>
              </div>
              {PRESS_COVERAGE_SMB.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-800/80 rounded-xl border border-slate-700">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === c.id
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Klik gambar untuk memperbesar foto & detail bukti kegiatan
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo)}
              className="group bg-slate-800/60 rounded-2xl border border-slate-700/80 overflow-hidden shadow-lg hover:border-blue-400/80 transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Photo Image Frame */}
              <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded bg-slate-900/80 text-cyan-300 border border-slate-700 backdrop-blur-sm">
                    {photo.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-blue-600/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Photo Caption */}
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {photo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{photo.date}</span>
                  </span>
                  <span className="text-blue-300 font-medium group-hover:underline">
                    Perbesar
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drive Documentation Prompt Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-800/70 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-cyan-300 flex items-center justify-center shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Ratusan Dokumentasi Lengkap Tersedia di Cloud Drive
              </div>
              <div className="text-xs text-slate-400">
                Akses folder resmi Google Drive SMAN 1 Krembung untuk meninjau dokumentasi foto & berkas PKKS.
              </div>
            </div>
          </div>

          <a
            href={SMAN_KREMBUNG_INFO.documentationDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow transition-colors shrink-0"
          >
            <span>Buka Google Drive Dokumentasi</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-200" />
          </a>
        </div>
      </div>

      {/* Lightbox Image Preview Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Expanded Image */}
            <div className="flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px]">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption bar */}
            <div className="p-5 bg-slate-900 border-t border-slate-800 text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-cyan-300 border border-blue-700/50">
                  {selectedImage.category}
                </span>
                <span className="text-xs text-slate-400">· {selectedImage.date}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
