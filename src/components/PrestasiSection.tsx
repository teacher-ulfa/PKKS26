import React, { useState } from 'react';
import {
  Award,
  Search,
  Filter,
  Medal,
  ExternalLink,
  Trophy,
  FileCheck,
  GraduationCap
} from 'lucide-react';
import {
  STUDENT_ACHIEVEMENTS,
  PRESTASI_STATS,
  StudentAchievement
} from '../data/prestasiData';
import { SMAN_KREMBUNG_INFO } from '../data/schoolData';

export const PrestasiSection: React.FC = () => {
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const levels = [
    { id: 'all', label: 'Semua Tingkat (51)' },
    { id: 'Nasional', label: 'Nasional (8)' },
    { id: 'Provinsi', label: 'Provinsi (7)' },
    { id: 'Kabupaten/Kota', label: 'Kabupaten/Kota (36)' },
  ];

  const categories = [
    { id: 'all', label: 'Semua Bidang' },
    { id: 'Bela Diri', label: 'Bela Diri (22)' },
    { id: 'Olahraga & Atletik', label: 'Olahraga (14)' },
    { id: 'Akademik & Sains', label: 'Akademik/OSN (5)' },
    { id: 'Seni, Sastra & Duta', label: 'Seni & Duta (8)' },
    { id: 'E-Sport & Teknologi', label: 'E-Sport (2)' },
  ];

  const filteredAchievements = STUDENT_ACHIEVEMENTS.filter((item) => {
    const matchesLevel = levelFilter === 'all' || item.level === levelFilter;
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      item.studentName.toLowerCase().includes(q) ||
      item.eventName.toLowerCase().includes(q) ||
      item.rank.toLowerCase().includes(q) ||
      item.organizer.toLowerCase().includes(q);
    return matchesLevel && matchesCategory && matchesSearch;
  });

  return (
    <section id="prestasi" className="py-16 lg:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
              <Trophy className="w-4 h-4 text-blue-600" />
              <span>Direktori Prestasi Siswa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Data Prestasi Akademik & Non-Akademik Siswa 2026
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Sebanyak 51 capaian kejuaraan resmi peserta didik SMAN 1 Krembung dari tingkat Kabupaten, Provinsi, hingga Nasional lengkap dengan dokumen sertifikat dan bukti foto.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/assets/aistudio/33._Data_Prestasi_Akademik___Non_Akademik_Siswa_Tahun_2026_2555fb35.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-blue-700 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 rounded-xl transition-all"
            >
              <FileCheck className="w-4 h-4" />
              <span>Unduh Rekap PDF Prestasi</span>
            </a>
          </div>
        </div>

        {/* Medal Summary Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
              <Medal className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold text-amber-900 uppercase tracking-wide">
                Medali Emas / Juara 1
              </div>
              <div className="text-2xl font-extrabold text-amber-950 font-mono">
                {PRESTASI_STATS.goldMedals} Juara
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/90 border border-slate-300 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-400 text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
              <Medal className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Medali Perak / Juara 2
              </div>
              <div className="text-2xl font-extrabold text-slate-900 font-mono">
                {PRESTASI_STATS.silverMedals} Juara
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/70 border border-orange-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-700 text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
              <Medal className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold text-orange-900 uppercase tracking-wide">
                Medali Perunggu / Juara 3
              </div>
              <div className="text-2xl font-extrabold text-orange-950 font-mono">
                {PRESTASI_STATS.bronzeMedals} Juara
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold text-blue-900 uppercase tracking-wide">
                Tingkat Nasional
              </div>
              <div className="text-2xl font-extrabold text-blue-950 font-mono">
                {PRESTASI_STATS.nationalLevel} Kejuaraan
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="space-y-3 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Level Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
              {levels.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setLevelFilter(lvl.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    levelFilter === lvl.id
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>

            {/* Category Dropdown/Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    categoryFilter === cat.id
                      ? 'bg-white text-blue-900 font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari nama siswa, cabang lomba, penyelenggara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>
            <div className="text-xs text-slate-500 font-mono">
              Menampilkan <span className="font-bold text-blue-900">{filteredAchievements.length}</span> dari 51 Prestasi
            </div>
          </div>
        </div>

        {/* Achievements Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/90 text-slate-700 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4 w-12 text-center font-mono">No</th>
                  <th className="py-3 px-4">Nama Siswa / Tim</th>
                  <th className="py-3 px-4">Capaian Prestasi</th>
                  <th className="py-3 px-4 hidden md:table-cell">Kejuaraan & Penyelenggara</th>
                  <th className="py-3 px-4 text-center">Tingkat</th>
                  <th className="py-3 px-4 text-center">Bukti / Eviden</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredAchievements.map((item) => (
                  <tr key={item.no} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 text-center font-mono text-slate-400 font-medium">
                      {item.no}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900">{item.studentName}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                        <span className="font-mono text-blue-700 font-semibold">{item.classRoom}</span>
                        <span>·</span>
                        <span>{item.category}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        item.rank.includes('Juara I') || item.rank.includes('Emas')
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : item.rank.includes('Juara II') || item.rank.includes('Perak')
                          ? 'bg-slate-200 text-slate-800'
                          : 'bg-orange-100 text-orange-900'
                      }`}>
                        {item.rank}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 hidden md:table-cell text-xs">
                      <div className="text-slate-800 font-medium line-clamp-1">{item.eventName}</div>
                      <div className="text-slate-400 text-[11px] mt-0.5 line-clamp-1">
                        {item.organizer} · {item.venue} ({item.dateYear})
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium font-mono ${
                        item.level === 'Nasional'
                          ? 'bg-blue-100 text-blue-800 font-bold'
                          : item.level === 'Provinsi'
                          ? 'bg-indigo-100 text-indigo-800 font-semibold'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {item.level}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        {item.certificateUrl && (
                          <a
                            href={item.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-blue-700 hover:text-white bg-blue-50 hover:bg-blue-600 rounded border border-blue-200 transition-colors"
                            title="Lihat Sertifikat Asli di Google Drive"
                          >
                            <FileCheck className="w-3 h-3" />
                            <span>Sertif</span>
                          </a>
                        )}
                        {item.photoUrl && (
                          <a
                            href={item.photoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-emerald-700 hover:text-white bg-emerald-50 hover:bg-emerald-600 rounded border border-emerald-200 transition-colors"
                            title="Lihat Dokumentasi Foto di Google Drive"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Foto</span>
                          </a>
                        )}
                        {!item.certificateUrl && !item.photoUrl && (
                          <span className="text-[11px] text-slate-400 italic">Terarsip TU</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
