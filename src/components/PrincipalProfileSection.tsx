import React, { useState } from 'react';
import {
  Compass,
  Award,
  Users,
  Target,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  Shield,
  Clock,
  BookOpen,
  MapPin,
  Building
} from 'lucide-react';
import {
  PRINCIPAL_PROFILE,
  SMAN_KREMBUNG_INFO,
  VISION_MISSION,
  SCHOOL_DEMOGRAPHICS
} from '../data/schoolData';

export const PrincipalProfileSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kepemimpinan' | 'visi-misi' | 'demografi'>('kepemimpinan');

  return (
    <section id="profil" className="py-16 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-blue-600" />
            <span>Praktik Kepemimpinan & Visi Satuan Pendidikan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Profil Kepala Sekolah & Arah Strategis SMAN 1 Krembung
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Meneguhkan peran kepala sekolah sebagai pemimpin pembelajaran (<span className="italic font-medium text-slate-800">instructional leader</span>) yang adaptif, visioner, dan menakhodai transformasi mutu berlandaskan data evaluasi diri.
          </p>
        </div>

        {/* Tab Switcher (Segmented Control) */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-200/80 rounded-xl max-w-md mb-8">
          <button
            onClick={() => setActiveTab('kepemimpinan')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'kepemimpinan'
                ? 'bg-white text-blue-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Kepemimpinan KS
          </button>
          <button
            onClick={() => setActiveTab('visi-misi')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'visi-misi'
                ? 'bg-white text-blue-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Visi, Misi & Tujuan
          </button>
          <button
            onClick={() => setActiveTab('demografi')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'demografi'
                ? 'bg-white text-blue-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Data Demografi & GTK
          </button>
        </div>

        {/* Tab 1: Kepemimpinan & Kompetensi Kepala Sekolah */}
        {activeTab === 'kepemimpinan' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Top Overview Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="w-40 h-52 rounded-2xl overflow-hidden border-4 border-blue-100 shadow-md bg-slate-100 mb-4">
                    <img
                      src={PRINCIPAL_PROFILE.photoUrl}
                      alt={PRINCIPAL_PROFILE.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{PRINCIPAL_PROFILE.name}</h3>
                  <p className="text-xs font-mono text-blue-700 font-medium">NIP. {PRINCIPAL_PROFILE.nip}</p>
                  <span className="mt-1 text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-200">
                    {PRINCIPAL_PROFILE.rank}
                  </span>
                  <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-3 text-xs">
                    <a
                      href={SMAN_KREMBUNG_INFO.disiplinPegawaiDriveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Drive Disiplin Pegawai</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Filosofi Kepemimpinan Instruksional
                    </h4>
                    <p className="text-base text-slate-700 leading-relaxed italic bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                      "{PRINCIPAL_PROFILE.quote}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PRINCIPAL_PROFILE.leadershipPillars.map((pillar, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center gap-2 mb-2 text-blue-800 font-semibold text-sm">
                          <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-mono">
                            0{idx + 1}
                          </span>
                          <span>{pillar.title}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pelatihan Kompetensi Kepala Sekolah Box */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-blue-800/60">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    Pengembangan Keprofesian Berkelanjutan (PKB)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Laporan Pelatihan Peningkatan Kompetensi Kepala Sekolah
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-200 mt-1">
                    Pelatihan PM KKA Berbasis Kelompok Kerja (Review Visi Misi & Kepemimpinan Pembelajaran Mendalam)
                  </p>
                </div>
                <a
                  href="/assets/aistudio/7__Rapor__Laporan_Pelatihan_Kompetensi_KS_64d99958.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold bg-white text-blue-900 hover:bg-blue-50 rounded-xl shadow transition-all shrink-0"
                >
                  <BookOpen className="w-4 h-4 text-blue-700" />
                  <span>Unduh Dokumen Laporan (PDF)</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-200">
                <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800/40">
                  <div className="font-semibold text-cyan-300 text-sm mb-1">Penyelenggara & Waktu</div>
                  <p>BBGTK Provinsi Jawa Timur bekerja sama dengan Universitas Negeri Malang (UM).</p>
                  <p className="mt-2 text-slate-400 font-mono">12 September - 6 November 2026</p>
                  <p className="text-slate-400">Tempat: SMAN 2 Sidoarjo & LMS</p>
                </div>

                <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800/40">
                  <div className="font-semibold text-cyan-300 text-sm mb-1">Materi Esensial</div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>Penyelarasan Visi-Misi berbasis Rapor Pendidikan</li>
                    <li>Supervisi instruksional berbasis coaching klinis</li>
                    <li>Desain modul Deep Learning (mindful, meaningful, joyful)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800/40">
                  <div className="font-semibold text-cyan-300 text-sm mb-1">Rencana Tindak Lanjut (RTL)</div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>Diseminasi Deep Learning ke 75 guru (Nov 2026)</li>
                    <li>Reviu Dokumen KSP berbasis data PBD (Des 2026)</li>
                    <li>Supervisi klinis reflektif berkelanjutan (Jan-Mar 2027)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Visi, Misi, dan Tujuan */}
        {activeTab === 'visi-misi' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Vision Marquee */}
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl border border-blue-200 p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Visi Satuan Pendidikan
              </span>
              <p className="mt-2 text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                "{VISION_MISSION.vision}"
              </p>
            </div>

            {/* Missions List */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span>6 Misi Strategis Peningkatan Mutu</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {VISION_MISSION.missions.map((mission, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {mission}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* School Goals */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
                <span>Target & Tujuan Mutu SMAN 1 Krembung</span>
              </h3>
              <div className="space-y-3">
                {VISION_MISSION.schoolGoals.map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                    <span>{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Data Demografi & GTK */}
        {activeTab === 'demografi' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Demographic Stat Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Total Peserta Didik</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 font-mono">
                  {SCHOOL_DEMOGRAPHICS.totalStudents}
                </div>
                <div className="text-xs text-slate-400 mt-1">36 Rombel (X, XI, XII)</div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Tenaga Pendidik (Guru)</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 font-mono">
                  {SCHOOL_DEMOGRAPHICS.gtkComposition.totalTeachers} Guru
                </div>
                <div className="text-xs text-slate-400 mt-1">12 Magister (S2) · 63 Sarjana (S1)</div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Tenaga Kependidikan</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 font-mono">
                  {SCHOOL_DEMOGRAPHICS.gtkComposition.totalStaff} Staf
                </div>
                <div className="text-xs text-slate-400 mt-1">TU, Lab & Perpustakaan</div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Luas Lahan Sekolah</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 font-mono">
                  22.771 m²
                </div>
                <div className="text-xs text-slate-400 mt-1">Asri, Bersih & Berbudaya</div>
              </div>
            </div>

            {/* Class distribution table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Distribusi Rombongan Belajar Peserta Didik</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-4 font-semibold">Tingkat Kelas</th>
                      <th className="py-2.5 px-4 font-semibold">Jumlah Rombel</th>
                      <th className="py-2.5 px-4 font-semibold">Jumlah Siswa</th>
                      <th className="py-2.5 px-4 font-semibold">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {SCHOOL_DEMOGRAPHICS.classesDistribution.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80">
                        <td className="py-2.5 px-4 font-medium text-slate-900">{row.grade}</td>
                        <td className="py-2.5 px-4 font-mono">{row.classes} Rombel</td>
                        <td className="py-2.5 px-4 font-mono font-bold text-blue-900">{row.count} Siswa</td>
                        <td className="py-2.5 px-4 text-slate-500">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Facilities Highlight */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-600" />
                <span>32 Sarana & Fasilitas Penunjang Pembelajaran</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SCHOOL_DEMOGRAPHICS.facilitiesSummary.map((fac, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-xs font-semibold text-slate-900 mb-1">{fac.name}</div>
                    <div className="text-[11px] text-slate-500 leading-relaxed">{fac.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
