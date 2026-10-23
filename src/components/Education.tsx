import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Building2,
  BookOpen,
  Award,
  CheckCircle2,
  FileCode2
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] radial-glow-blue pointer-events-none -z-10 blur-3xl opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & Learning Journey
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Building rigorous foundations in computer applications, algorithmic problem-solving, and software development methodologies.
          </p>
        </div>

        {/* Education Timeline & Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
            
            {/* Ambient corner gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-600/20 via-indigo-600/10 to-transparent blur-2xl pointer-events-none" />

            <div className="relative z-10">
              
              {/* Institution and Degree Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px] shadow-lg shadow-indigo-500/25 shrink-0">
                    <div className="w-full h-full bg-[#0a0f1d] rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-7 h-7 text-indigo-400" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{EDUCATION_DATA.status}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {EDUCATION_DATA.degree}
                    </h3>
                    <p className="text-sm font-semibold text-purple-300">
                      {EDUCATION_DATA.field}
                    </p>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="flex flex-col sm:items-end justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-indigo-300">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{EDUCATION_DATA.period}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1">3-Year Degree Program</span>
                </div>
              </div>

              {/* College & Location Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-white/10 text-xs">
                <div className="flex items-center gap-3 text-slate-300">
                  <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">College / Institution:</span>
                    <span className="font-semibold text-white">{EDUCATION_DATA.institution}</span>
                    <span className="text-slate-400"> ({EDUCATION_DATA.campus})</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Campus Location:</span>
                    <span className="font-semibold text-white">{EDUCATION_DATA.location}</span>
                  </div>
                </div>
              </div>

              {/* Coursework & Curriculum Highlights */}
              <div className="pt-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Key Coursework & Academic Focus</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EDUCATION_DATA.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 hover:bg-white/[0.04] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Competencies Summary */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Emphasis on Practical Laboratory Sessions, Relational Databases & Web Projects</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-indigo-300">
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>STG Chinakurali · Mandya</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
