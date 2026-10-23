import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Sparkles, Layers, ShieldCheck, Camera } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ProjectCardGraphic } from './ProjectCardGraphic';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  projectImage?: string;
  onOpenImageModal?: () => void;
  onUpdateUrls?: (id: string, demoUrl: string, githubUrl: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  projectImage,
  onOpenImageModal
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#0a0f1d] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Top Header Graphic */}
        <div className="relative">
          <ProjectCardGraphic
            projectId={project.id}
            imageUrl={projectImage}
            onOpenImageModal={onOpenImageModal}
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 transition-colors z-20 cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400">{project.status}</span>
            </div>
            <h3 id="project-modal-title" className="text-2xl font-bold text-white mt-1">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-purple-300 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          {/* Detailed description */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Overview & Architecture
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Key Capabilities & Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used (Unboxed clean metadata) */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Technologies & Stacks
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
              {project.technologies.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="font-mono text-indigo-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                    {tech}
                  </span>
                  {i < project.technologies.length - 1 && <span className="text-slate-600">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Configurable Links Notice & Actions */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Project URLs can be updated directly in <code className="text-indigo-300 font-mono">portfolioData.ts</code></span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={project.demoUrl === '#' ? '#projects' : project.demoUrl}
                target={project.demoUrl === '#' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (project.demoUrl === '#') {
                    e.preventDefault();
                    alert("This is a portfolio project preview. You can configure your custom live demo URL in src/data/portfolioData.ts!");
                  }
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all flex items-center gap-2 shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Launch Live Demo</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/10 transition-colors flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
              </a>

              {onOpenImageModal && (
                <button
                  type="button"
                  onClick={onOpenImageModal}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-purple-300 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{projectImage ? 'Change Picture' : 'Add Picture'}</span>
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                className="ml-auto px-4 py-2 text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
