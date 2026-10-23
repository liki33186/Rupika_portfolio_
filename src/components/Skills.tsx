import React, { useState, useEffect } from 'react';
import {
  Code,
  Palette,
  FileCode,
  Terminal,
  Database,
  HardDrive,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Database'>('All');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger smooth bar animation upon mounting
    const timer = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', 'Frontend', 'Backend', 'Database'] as const;

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-5 h-5 text-orange-400" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-blue-400" />;
      case 'file-code':
        return <FileCode className="w-5 h-5 text-yellow-400" />;
      case 'terminal':
        return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'hard-drive':
        return <HardDrive className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] radial-glow-purple pointer-events-none -z-10 blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Core Skills & Proficiencies
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Hands-on experience with modern frontend styling, core programming logic, structured querying, and document-based databases.
          </p>

          {/* Interactive Category Segmented Control */}
          <div className="mt-8 inline-flex items-center gap-1 p-1.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 relative overflow-hidden group"
            >
              {/* Header inside Card */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                      {skill.name}
                    </h3>
                    {/* Unboxed metadata separator */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <span>{skill.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-indigo-300 font-mono">Proficiency</span>
                    </div>
                  </div>
                </div>

                {/* Percentage with tabular numbers */}
                <div className="text-right">
                  <span className="text-2xl font-extrabold font-mono text-white tabular-nums tracking-tight">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="space-y-1.5 my-3">
                <div className="w-full h-3 rounded-full bg-slate-900/80 p-0.5 border border-white/10 overflow-hidden relative">
                  {/* Subtle track background grid */}
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.tagColor} transition-all duration-1000 ease-out relative`}
                    style={{
                      width: animated ? `${skill.level}%` : '0%',
                      boxShadow: '0 0 14px rgba(129, 140, 248, 0.5)',
                    }}
                  >
                    {/* Glowing head pulse */}
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/70 rounded-full blur-[1px]" />
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                {skill.description}
              </p>

            </div>
          ))}
        </div>

        {/* Skill Highlights Footer */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Continual Learning Philosophy</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Actively expanding JavaScript & Python capabilities with daily code challenges and university lab coursework.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
            <span>Status:</span>
            <span className="text-emerald-400 font-semibold">Active Practice</span>
          </div>
        </div>

      </div>
    </section>
  );
};
