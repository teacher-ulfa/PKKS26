import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Youtube,
  Instagram
} from 'lucide-react';
import { SMAN_KREMBUNG_INFO, PRINCIPAL_PROFILE } from '../data/schoolData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Identity & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 p-1 flex items-center justify-center">
                <img
                  src={SMAN_KREMBUNG_INFO.logoUrl}
                  alt="Logo SMAN 1 Krembung"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="text-white font-bold text-sm">SMAN 1 KREMBUNG</div>
                <div className="text-[11px] text-cyan-300 font-mono">NPSN: {SMAN_KREMBUNG_INFO.npsn}</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Portal Resmi Penilaian Kinerja Kepala Sekolah (PKKS) Tahun Pelajaran 2026/2027. Praktik kepemimpinan berbasis data untuk peningkatan mutu pembelajaran di Ruang GTK.
            </p>
            <div className="text-[11px] text-slate-500">
              Kepala Sekolah: <span className="text-slate-300 font-medium">{PRINCIPAL_PROFILE.name}</span>
            </div>
          </div>

          {/* Col 2: Alamat & Kontak */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-sm">Alamat & Kontak</div>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {SMAN_KREMBUNG_INFO.address}, {SMAN_KREMBUNG_INFO.subdistrict}, {SMAN_KREMBUNG_INFO.regency}, {SMAN_KREMBUNG_INFO.province} {SMAN_KREMBUNG_INFO.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{SMAN_KREMBUNG_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{SMAN_KREMBUNG_INFO.email}</span>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={SMAN_KREMBUNG_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 3: Arsip Bukti Fisik Digital */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-sm">Bukti Fisik & Eviden</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href={SMAN_KREMBUNG_INFO.documentationDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                  <span>Google Drive Dokumentasi Utama</span>
                </a>
              </li>
              <li>
                <a
                  href={SMAN_KREMBUNG_INFO.disiplinPegawaiDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                  <span>Google Drive Disiplin Pegawai GTK</span>
                </a>
              </li>
              <li>
                <a
                  href="/assets/aistudio/26._SMB_SMAN_1_Krembung__2__46ce99a3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Portofolio Sekolah Moderasi Beragama</span>
                </a>
              </li>
              <li>
                <a
                  href="/assets/aistudio/7__Rapor__Laporan_Pelatihan_Kompetensi_KS_64d99958.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Laporan Pelatihan KS BBGTK Jatim</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Kanal Media Sosial Resmi */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-sm">Media Sosial Resmi</div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Ikuti dokumentasi kegiatan harian, prestasi siswa, dan video profil sekolah melalui kanal resmi SMAN 1 Krembung:
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={SMAN_KREMBUNG_INFO.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-500" />
                <span>YouTube: @sman1krembung564</span>
              </a>
              <a
                href={SMAN_KREMBUNG_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>Instagram: @sman1krembung</span>
              </a>
              <a
                href={SMAN_KREMBUNG_INFO.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-mono"
              >
                <span className="font-bold text-cyan-400">TikTok:</span>
                <span>@smankrez.krembung</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            SMAN 1 Krembung , Jl.Raya Kecamatan No.2 Krembung 2026. Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-4">
            <span>Akreditasi A</span>
            <span>·</span>
            <span>Kurikulum Merdeka</span>
            <span>·</span>
            <a
              href={SMAN_KREMBUNG_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Lokasi Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
