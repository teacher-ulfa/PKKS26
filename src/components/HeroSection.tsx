import React from 'react';
import {
  Presentation,
  TrendingUp,
  FileSpreadsheet,
  Award,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Sparkles,
  Camera,
  Newspaper
} from 'lucide-react';
import { PRINCIPAL_PROFILE, SMAN_KREMBUNG_INFO } from '../data/schoolData';
import { PRESTASI_STATS } from '../data/prestasiData';

interface HeroSectionProps {
  onOpenPresentation: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPresentation,
  onNavigate,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white pt-10 pb-16 lg:py-20 border-b border-blue-900/40">
      {/* Background Decorative Grid & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Operational Pill Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-8 border-b border-blue-800/30 text-xs sm:text-sm text-blue-200">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyan-300">Agenda Kedinasan</span>
            <span aria-hidden="true" className="text-blue-500">·</span>
            <span>Penilaian Kinerja Kepala Sekolah (PKKS)</span>
            <span aria-hidden="true" className="text-blue-500">·</span>
            <span className="text-white font-medium">Ruang GTK SMAN 1 Krembung</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Tahun Penilaian:</span>
            <span className="px-2 py-0.5 bg-blue-900/60 border border-blue-700/50 rounded text-cyan-300 font-mono">
              2026
            </span>
          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Call-to-actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Indikator Penilaian: Presentasi Program Sekolah Berbasis Data</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight lg:leading-tight">
              Praktik Kepemimpinan Berbasis Data untuk{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-200">
                Peningkatan Mutu Pembelajaran
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Portal akuntabilitas dan visualisasi kinerja kepemimpinan kepala sekolah di SMA Negeri 1 Krembung. Mengintegrasikan capaian Rapor Pendidikan (PBD), implementasi pembelajaran mendalam (<span className="text-cyan-300 italic font-medium">Deep Learning</span>), dan 34 program kerja unggulan berkelanjutan.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenPresentation}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/30 border border-blue-400/40 transition-all hover:scale-[1.02]"
              >
                <Presentation className="w-4 h-4 text-cyan-200" />
                <span>Mulai Presentasi Pengawas (Slide Mode)</span>
                <ChevronRight className="w-4 h-4 text-blue-200" />
              </button>

              <button
                onClick={() => onNavigate('program-kerja')}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>34 Program Unggulan</span>
              </button>

              <button
                onClick={() => onNavigate('rapor-pbd')}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <span>Data Rapor PBD</span>
              </button>
            </div>

            {/* Quick trust indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NPSN 20501846 · Akreditasi A</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Sekolah Moderasi Beragama Kemenag</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Sekolah Berbudaya Lingkungan Adiwiyata</span>
              </span>
            </div>
          </div>

          {/* Right Column: Principal Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/90 to-blue-950/70 border border-blue-700/40 p-6 shadow-2xl backdrop-blur-md">
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded bg-blue-900/60 border border-blue-600/40 text-[11px] font-mono text-cyan-300">
                <span>PKKS 2026</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {/* Photo frame */}
                <div className="relative shrink-0">
                  <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden border-2 border-cyan-400/60 shadow-lg bg-slate-800">
                    <img
                      src={PRINCIPAL_PROFILE.photoUrl}
                      alt={PRINCIPAL_PROFILE.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-blue-600 border-2 border-slate-900 flex items-center justify-center shadow">
                    <Award className="w-4 h-4 text-yellow-300" />
                  </div>
                </div>

                {/* Bio text */}
                <div className="text-center sm:text-left space-y-2">
                  <div className="inline-block px-2 py-0.5 rounded bg-blue-950 border border-blue-800 text-[10px] font-medium text-blue-300 uppercase tracking-wider">
                    Kepala Sekolah
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {PRINCIPAL_PROFILE.name}
                  </h3>
                  <div className="text-xs text-slate-300 space-y-0.5 font-mono">
                    <p>NIP. {PRINCIPAL_PROFILE.nip}</p>
                    <p className="text-cyan-300">{PRINCIPAL_PROFILE.rank}</p>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 pt-1 font-sans">
                    {PRINCIPAL_PROFILE.unit}
                  </p>
                </div>
              </div>

              {/* Quote from Principal */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <blockquote className="text-xs italic text-slate-300 leading-relaxed">
                  "{PRINCIPAL_PROFILE.quote}"
                </blockquote>
              </div>

              {/* Quick links to Google Drive evidence */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Bukti Fisik PKKS:</span>
                <a
                  href={SMAN_KREMBUNG_INFO.documentationDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 font-medium"
                >
                  <span>Buka Google Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Photo Eviden Showcase Strip */}
        <div className="mt-10 pt-6 border-t border-blue-900/40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-200">
              <Camera className="w-4 h-4 text-cyan-300" />
              <span>Dokumentasi Nyata Lapangan SMANIKRE 2026:</span>
            </div>
            <button
              onClick={() => onNavigate('galeri')}
              className="text-xs text-cyan-300 hover:text-cyan-200 font-medium inline-flex items-center gap-1 group"
            >
              <span>Lihat Seluruh Galeri & Liputan Media</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              {
                title: 'Para Juara 2026',
                img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjunD85y9yjoSP-eoUKPMRteSo-SFsvgJWCDQdOY6sHSYVg9D8pnYk2kjfCQoNFU6TzAI9lecP7zhxVAb6mqVkTBQOgBWzmNqDOvamOf3DlAUpGivh8AnN8TpgiXqcb198B1KzQVG5BhCLp2mbYVUUc14xF8z-Zm9Npmj7fYU_uISGx581d7RGY3Qy1Quif/s320/para%20juara.jpeg',
                tag: 'Prestasi'
              },
              {
                title: 'Karnaval Nusantara',
                img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim1NRwrtEtbcsxJfCNVvjwNjXz3TK_cdLhkYClcHd4dUHpOJy59sQ6Dwbz82m3o85ctjUJmFwk6EMnoAUY7hJ_eEIre-sqVaR983EDQkRpJI2XtE4utLFIRzxLxEYDNEg6mklhfSJAbzw3jU5fU1zUwC4MJ0IW-3niHLVlMunNx3LQ9AeQvL1VkOteCD_X/s320/karnaval%20budaya.jpeg',
                tag: 'Kebinekaan'
              },
              {
                title: 'Demokrasi Pilketos',
                img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3_fHLCHXyOderPtJk0as8SPomovBL8SqdEaIdicnqd9Gl-Rt7-QhZtAbyVYEYTAlHr1o1OPg81H6BQFeUNBwx4NeuObT9DZ1aczuoIPYSBY-Cmz0Sa_61U0x_Mj6e74pBE3QSo7QuRFtH5otIZDYmiZ_gpRf4f9y3NdUzQ0hHqCUbKZNVIQVqZ5WPpb2l/s320/pilketos.jpeg',
                tag: 'Inklusif'
              },
              {
                title: 'Jumat Berling',
                img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUmdxycau9S-MYlxsMLwjUjnM_2Z6Q-4-mYbDjGjmyX-y3HGbr9jG2CLpPea8q9KYkbU9ZrUUDdyW0Nks80mGjysGZbRuTugYw1u1a15cfhXeBVhCPpPxyfW_bXyImvF998O0u59jcmjh-p5f3grAKcyRYbayTKJU-FjD7Va46JRxv6nH6Lf979lbDidc9/s320/berling%20bu%20siwi.jpeg',
                tag: 'Adiwiyata'
              },
              {
                title: 'Panen Lahan SIKAP',
                img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6W3sjCtDFYJala2sRHz9rYjjMsH_SLTs8G6DBGVuaGUdOq1JeVlr_vFC1mHbuhvz-JQNDWBl_FXLwWBP8H9VaPWOsC6955-6vt_9s96SxZAzSlYG4i28-7kdTUIHBT9EI2iwVzV8JOzfBwl-YVluOM7duah35RLg490yJIUVRL9tdsQkWRfgbspjb_EZn/s320/panen%20lahan%20sikap.jpeg',
                tag: 'Produktivitas'
              },
              {
                title: 'Klaim Asuransi Siswa',
                img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiD6vUASWaZPUtTHyiZ8hd-Y92vMQ8kWTVE0t-1nFiENVLLv-nSmA-nm_5O5O38Ov4DL-K28nxj6chw1vD_1MAX5ARueOuIW6fYSF5DJr5keabwBO6iFAgQqa8s1KLPBZ51A7S9K6UukAvPbU1Hp15jGCE9UQ-gkbOiVMQJRefF9Wd_is6zqmxwKqqIsfBL/s320/WhatsApp%20Image%202026-10-21%20at%2014.31.55.jpeg',
                tag: 'Pelayanan'
              },
              {
                title: 'Maulid Nabi SAW',
                img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidJ0tlqKHaEKZZzIFD5e1elG6MzRgo4XbPuU_4GF-jAfzknwjGSq6diMUN2OpoGXYxZTpIJWW-Jd5faNvPNewItxOOun_qCfQigcnfX8pavGb_uqfJgpWbsn5qetZktUumtMbnLsfG1rZFOWLW1TmT4MS9uPf0PH-3-0gM5rWoO-EIXm2UmUQkO7apUmLL/s320/maulid%20nabi%20penceramah.jpeg',
                tag: 'Religius'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('galeri')}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 border border-blue-900/60 hover:border-cyan-400/80 transition-all cursor-pointer shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-1.5 left-2 right-2">
                  <div className="text-[9px] font-mono text-cyan-300 font-semibold">{item.tag}</div>
                  <div className="text-[11px] font-bold text-white truncate">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Column KPI Stats Strip */}
        <div className="mt-8 pt-8 border-t border-blue-900/40 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-slate-900/60 border border-blue-900/50 rounded-xl p-4 sm:p-5 hover:border-blue-700/60 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1.5">
              <span>Capaian Literasi</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              100%
            </div>
            <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <span>● Kategori Baik (Tuntas Minimum)</span>
            </p>
          </div>

          <div className="bg-slate-900/60 border border-blue-900/50 rounded-xl p-4 sm:p-5 hover:border-blue-700/60 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1.5">
              <span>Capaian Numerasi</span>
              <TrendingUp className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              93,33%
            </div>
            <p className="text-[11px] text-cyan-300 mt-1">
              <span>Kategori Baik (Domain Geometri)</span>
            </p>
          </div>

          <div className="bg-slate-900/60 border border-blue-900/50 rounded-xl p-4 sm:p-5 hover:border-blue-700/60 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1.5">
              <span>Program Unggulan</span>
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              34 Program
            </div>
            <p className="text-[11px] text-blue-300 mt-1">
              <span>100% Terealisasi & Dilaporkan</span>
            </p>
          </div>

          <div className="bg-slate-900/60 border border-blue-900/50 rounded-xl p-4 sm:p-5 hover:border-blue-700/60 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-1.5">
              <span>Prestasi Siswa 2026</span>
              <Award className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              {PRESTASI_STATS.totalMedals} Medali
            </div>
            <p className="text-[11px] text-yellow-300 mt-1">
              <span>8 Nasional · 7 Provinsi · 36 Kab/Kota</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
