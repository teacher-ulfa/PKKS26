import React from 'react';
import {
  X,
  BookOpen,
  Calendar,
  Users,
  Target,
  CheckCircle2,
  Download,
  ExternalLink,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { FeaturedProgram } from '../data/programsData';

interface ProgramDetailModalProps {
  program: FeaturedProgram | null;
  onClose: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyan-300">
            <span>PROGRAM UNGGULAN #{program.id}</span>
            <span aria-hidden="true">·</span>
            <span>{program.category}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight pr-8">
            {program.title}
          </h3>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-blue-200 border-t border-blue-800/60 pt-3">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
              <span>PIC: <strong className="text-white">{program.pic}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
              <span>Jadwal: <strong className="text-white">{program.schedule}</strong></span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-xs sm:text-sm text-slate-700">
          {/* Progress & Target strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Sasaran Program
              </span>
              <p className="font-medium text-slate-900 mt-0.5">{program.target}</p>
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Ketercapaian & Status
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono font-extrabold text-emerald-700 text-base">
                  {program.progressPercentage}%
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold">
                  {program.status}
                </span>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div>
            <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-600" />
              <span>Tujuan Program</span>
            </h4>
            <p className="text-slate-600 leading-relaxed bg-blue-50/40 p-3.5 rounded-xl border border-blue-100">
              {program.objective}
            </p>
          </div>

          {/* Implementation Mechanism */}
          <div>
            <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Bentuk & Mekanisme Pelaksanaan</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {program.implementation}
            </p>
          </div>

          {/* Highlight Points */}
          <div>
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Poin-Poin Kunci & Praktik Baik</span>
            </h4>
            <div className="space-y-2">
              {program.highlightPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact on Learning */}
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
            <h4 className="font-bold text-emerald-950 mb-1">
              Dampak Terhadap Peningkatan Mutu & Karakter Siswa
            </h4>
            <p className="text-emerald-900 leading-relaxed text-xs sm:text-sm">
              {program.impact}
            </p>
          </div>
        </div>

        {/* Modal Footer (Actions) */}
        <div className="bg-slate-50 p-4 sm:p-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Dokumen resmi disahkan oleh Kepala SMAN 1 Krembung
          </div>

          <div className="flex items-center gap-2.5">
            {program.pdfPath && (
              <a
                href={program.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh Laporan PDF</span>
              </a>
            )}

            {program.externalLink && (
              <a
                href={program.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg shadow-sm transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                <span>Buka Google Drive</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-200/70 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
