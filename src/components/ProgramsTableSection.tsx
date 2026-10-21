import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
  Download,
  Calendar,
  Users,
  Eye,
  LayoutGrid,
  Table as TableIcon,
  ChevronRight
} from 'lucide-react';
import { FEATURED_PROGRAMS, FeaturedProgram } from '../data/programsData';

interface ProgramsTableSectionProps {
  onSelectProgram: (program: FeaturedProgram) => void;
}

export const ProgramsTableSection: React.FC<ProgramsTableSectionProps> = ({
  onSelectProgram,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  const categories = [
    { id: 'all', label: 'Semua (34)' },
    { id: 'Pembiasaan & Karakter', label: 'Karakter & Pembiasaan (10)' },
    { id: 'Literasi & Numerasi', label: 'Literasi & Numerasi (3)' },
    { id: 'Kesehatan & Lingkungan', label: 'Kesehatan & Lingkungan (8)' },
    { id: 'GTK & Kepemimpinan', label: 'GTK & Kepemimpinan (5)' },
    { id: 'Kesiswaan & Prestasi', label: 'Kesiswaan & Vokasi (5)' },
    { id: 'Sarpras & Kemitraan', label: 'Sarpras & Kemitraan (3)' },
  ];

  const filteredPrograms = FEATURED_PROGRAMS.filter((prog) => {
    const matchesCat = activeCategory === 'all' || prog.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      prog.title.toLowerCase().includes(q) ||
      prog.pic.toLowerCase().includes(q) ||
      prog.objective.toLowerCase().includes(q) ||
      prog.highlightPoints.some((p) => p.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="program-kerja" className="py-16 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Portofolio Program Kerja Sekolah</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              34 Program Kerja Unggulan SMAN 1 Krembung
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Direktori lengkap program kerja berbasis data yang telah terencana, dilaksanakan, dan dievaluasi dengan bukti fisik dokumen laporan terverifikasi.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-slate-500 font-medium">Tampilan:</span>
            <div className="flex items-center p-1 bg-slate-200/80 rounded-lg">
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded transition-all ${
                  viewMode === 'table' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tampilan Tabel"
              >
                <TableIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded transition-all ${
                  viewMode === 'grid' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tampilan Grid Card"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 shadow-sm">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === c.id
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari program (contoh: 5S, Kartu Surga, Glow & Lovely, BPVP, Kantin, dll)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>
            <div className="text-xs text-slate-500 font-mono">
              Menampilkan <span className="font-bold text-blue-900">{filteredPrograms.length}</span> dari 34 Program
            </div>
          </div>
        </div>

        {/* View Mode: Table */}
        {viewMode === 'table' ? (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100/90 text-slate-700 border-b border-slate-200 font-semibold">
                  <tr>
                    <th className="py-3.5 px-4 w-12 text-center font-mono">No</th>
                    <th className="py-3.5 px-4">Nama Program Unggulan</th>
                    <th className="py-3.5 px-4 hidden md:table-cell">Klaster & Kategori</th>
                    <th className="py-3.5 px-4 hidden lg:table-cell">Penanggung Jawab (PIC)</th>
                    <th className="py-3.5 px-4 text-center">Realisasi</th>
                    <th className="py-3.5 px-4 text-center">Dokumen / Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredPrograms.map((prog) => (
                    <tr
                      key={prog.id}
                      className="hover:bg-blue-50/50 transition-colors group cursor-pointer"
                      onClick={() => onSelectProgram(prog)}
                    >
                      <td className="py-3.5 px-4 text-center font-mono text-slate-500 font-medium">
                        {prog.id}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {prog.title}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                          {prog.objective}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 hidden md:table-cell">
                        <span className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
                          {prog.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 hidden lg:table-cell text-xs text-slate-600">
                        {prog.pic}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="inline-flex items-center gap-1 font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{prog.progressPercentage}%</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => onSelectProgram(prog)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-blue-700 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 hover:border-blue-600 rounded-lg transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Detail</span>
                          </button>
                          {prog.pdfPath && (
                            <a
                              href={prog.pdfPath}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded border border-slate-200 transition-colors"
                              title="Buka Dokumen Laporan Resmi (PDF)"
                            >
                              <Download className="w-3.5 h-3.5 text-blue-600" />
                            </a>
                          )}
                          {prog.externalLink && (
                            <a
                              href={prog.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded border border-slate-200 transition-colors"
                              title="Buka Tautan Google Drive"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* View Mode: Grid Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                onClick={() => onSelectProgram(prog)}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-mono font-bold text-xs flex items-center justify-center">
                      #{prog.id}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {prog.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {prog.objective}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{prog.pic}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                      <span className="truncate">{prog.schedule}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{prog.progressPercentage}% Terealisasi</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                    <span>Lihat Detail</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
