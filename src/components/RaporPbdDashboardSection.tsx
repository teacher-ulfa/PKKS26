import React, { useState } from 'react';
import {
  FileSpreadsheet,
  TrendingUp,
  Search,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  BookOpen,
  Layers,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { RAPOR_PENDIDIKAN_INDICATORS, PBD_SUMMARY_STATS, PbdIndicator } from '../data/raporPbdData';

interface RaporPbdDashboardSectionProps {
  onSelectProgramPdf?: (pdfPath: string, title: string) => void;
}

export const RaporPbdDashboardSection: React.FC<RaporPbdDashboardSectionProps> = ({
  onSelectProgramPdf,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<number | null>(1); // Expand first indicator by default
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Semua Indikator (6)' },
    { id: 'Hasil Belajar Siswa', label: 'Hasil Belajar (3)' },
    { id: 'Kualitas Pembelajaran', label: 'Proses & Pedagogi (1)' },
    { id: 'Iklim Lingkungan Belajar', label: 'Iklim Sekolah (2)' },
  ];

  const filteredIndicators = RAPOR_PENDIDIKAN_INDICATORS.filter((ind) => {
    const matchesCategory = selectedCategory === 'all' || ind.category === selectedCategory;
    const matchesSearch =
      ind.indicatorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.rootCauseL2.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.programSmankre.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="rapor-pbd" className="py-16 lg:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <FileSpreadsheet className="w-4 h-4 text-blue-600" />
            <span>Perencanaan Berbasis Data (PBD)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Dashboard Visualisasi Rapor Pendidikan SMAN 1 Krembung
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Peta komprehensif capaian mutu sekolah tahun 2025/2026. Menghubungkan capaian indikator prioritas, refleksi akar masalah (Level 1 & 2), rekomendasi benahi Kemendikbudristek, dan realisasi program nyata sekolah.
          </p>
        </div>

        {/* 4-Step PBD Cycle Card */}
        <div className="mb-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-900/40">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                Siklus Manajemen Mutu
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                4 Tahapan Perencanaan Berbasis Data (PBD) di SMAN 1 Krembung
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-3 py-1 rounded bg-blue-900/60 text-cyan-300 font-mono border border-blue-700/50">
                Permendikbudristek No. 9/2022
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <div className="text-cyan-400 font-mono text-xs font-semibold mb-1">TAHAP 01</div>
              <div className="text-white font-bold text-sm mb-2">IDENTIFIKASI</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Memaknai kondisi riil sekolah melalui data Rapor Pendidikan (Asesmen Nasional & Sulingjar) dan evaluasi diri guru.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <div className="text-cyan-400 font-mono text-xs font-semibold mb-1">TAHAP 02</div>
              <div className="text-white font-bold text-sm mb-2">REFLEKSI</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Menemukan akar masalah paling mendasar (Level 1 & 2) yang mempengaruhi capaian indikator prioritas bersama pemangku kepentingan.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <div className="text-cyan-400 font-mono text-xs font-semibold mb-1">TAHAP 03</div>
              <div className="text-white font-bold text-sm mb-2">BENAHI</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Menyusun program pembenahan terukur ke dalam Rencana Kerja Tahunan (RKT) dan rencana anggaran ARKAS yang transparan.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <div className="text-cyan-400 font-mono text-xs font-semibold mb-1">TAHAP 04</div>
              <div className="text-white font-bold text-sm mb-2">IMPLEMENTASI & EVALUASI</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mengeksekusi 34 program kerja unggulan, supervisi klinis reflektif, serta monitoring berkala bersama pengawas sekolah.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Charts: Bar Graphic of Achievements */}
        <div className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Grafik Capaian 6 Indikator Prioritas Rapor Pendidikan
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Seluruh indikator berada pada predikat <span className="font-semibold text-emerald-600">Baik</span> dengan lonjakan tertinggi pada kemampuan literasi dan iklim keamanan.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-600 inline-block" />
                <span>Skor Capaian SMAN 1 Krembung</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-500 inline-block" />
                <span>Status Kategori Baik</span>
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {RAPOR_PENDIDIKAN_INDICATORS.map((ind) => {
              const numericValue = typeof ind.score === 'number' ? ind.score : parseFloat(ind.score);
              return (
                <div key={ind.no} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono font-bold text-xs">
                        {ind.indicatorCode}
                      </span>
                      <span className="font-semibold text-slate-900">{ind.indicatorName}</span>
                      <span className="text-slate-400 text-xs hidden sm:inline">({ind.category})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-slate-900 text-sm">
                        {ind.scoreFormatted}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                        {ind.status}
                      </span>
                    </div>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500"
                      style={{ width: `${Math.min(numericValue, 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          {/* Segmented Filter */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white text-blue-900 font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari indikator, akar masalah, program..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Detailed Interactive Indicators List */}
        <div className="space-y-4">
          {filteredIndicators.map((item) => {
            const isExpanded = expandedId === item.no;
            return (
              <div
                key={item.no}
                className={`bg-white rounded-2xl border transition-all ${
                  isExpanded
                    ? 'border-blue-400 shadow-md ring-1 ring-blue-100'
                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Header Row (Clickable) */}
                <div
                  onClick={() => toggleExpand(item.no)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-bold flex items-center justify-center font-mono shrink-0 border border-blue-200">
                      {item.indicatorCode}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900">
                          {item.indicatorName}
                        </h4>
                        <span className="text-xs text-slate-400 hidden sm:inline">·</span>
                        <span className="text-xs text-slate-500 hidden sm:inline">{item.category}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-1">
                        <span className="font-medium text-slate-700">Akar Masalah:</span> {item.rootCauseL2}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="text-right">
                      <div className="font-mono font-extrabold text-blue-900 text-base">
                        {item.scoreFormatted}
                      </div>
                      <span className="text-[11px] text-emerald-700 font-semibold px-2 py-0.5 rounded bg-emerald-50">
                        {item.status}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-slate-100 space-y-5 animate-in fade-in duration-150">
                    {/* Root cause analysis grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-900 uppercase tracking-wider mb-1.5">
                          <AlertCircle className="w-4 h-4 text-amber-700" />
                          <span>Akar Masalah (Level 1 & Level 2)</span>
                        </div>
                        <div className="text-xs font-mono font-semibold text-amber-950 mb-1">
                          {item.rootCauseL2}
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {item.rootCauseDesc}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1.5">
                          <CheckCircle className="w-4 h-4 text-blue-700" />
                          <span>Inspirasi Kegiatan Benahi (Kemdikbudristek)</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {item.benahiKemdikbud}
                        </p>
                      </div>
                    </div>

                    {/* Program SMAN 1 Krembung Execution */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                        <span>Realisasi Program Kerja SMAN 1 Krembung</span>
                        <span className="text-[11px] font-normal text-slate-500 font-mono">
                          {item.programSmankre.length} Agenda Terlaksana
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.programSmankre.map((prog, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200/80 text-xs text-slate-800"
                          >
                            <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                              {pIdx + 1}
                            </span>
                            <span className="font-medium">{prog}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact & Evidence Footer */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-700">Dampak Nyata:</span>
                        <span>{item.impactDescription}</span>
                      </div>
                      {item.evidenceFiles && item.evidenceFiles.length > 0 && (
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-semibold text-slate-700">Bukti Fisik:</span>
                          {item.evidenceFiles.map((evFile, eIdx) => (
                            <a
                              key={eIdx}
                              href={evFile}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium bg-blue-50 px-2.5 py-1 rounded border border-blue-200"
                            >
                              <BookOpen className="w-3 h-3" />
                              <span>Laporan #{eIdx + 1} (PDF)</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
