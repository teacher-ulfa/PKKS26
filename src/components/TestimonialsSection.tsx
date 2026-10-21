import React from 'react';
import { Quote, HeartHandshake, Award, ExternalLink, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonialsData';
import { SMAN_KREMBUNG_INFO } from '../data/schoolData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="py-16 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <HeartHandshake className="w-4 h-4 text-blue-600" />
            <span>Sinergi Pemangku Kepentingan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Apresiasi & Testimoni Kinerja SMAN 1 Krembung
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Pengakuan objektif dari pengawas sekolah, komite, pendidik, dan siswa atas terwujudnya lingkungan belajar yang aman, suportif, dan bertransformasi mutu.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {item.badge}
                  </span>
                  <Quote className="w-5 h-5 text-slate-300" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.comment}"
                </p>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-medium text-blue-900">
                  <span className="text-slate-500 font-normal">Poin Kunci: </span>
                  {item.highlight}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold flex items-center justify-center font-mono text-xs shrink-0 shadow-sm">
                  {item.avatarText}
                </div>
                <div className="overflow-hidden">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {item.role}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {item.institution}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stakeholder Partners Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 text-center">
            Kemitraan Strategis Lintas Lembaga Terverifikasi
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Dinas Pendidikan Provinsi Jawa Timur</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Kementerian Agama Kab. Sidoarjo (SMB)</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Koramil & Polsek Krembung</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>BPVP Sidoarjo (Kemnaker RI)</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Puskesmas Krembung & PMI</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>PT Bank Central Asia (BCA)</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
