import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  FolderGit2,
  Sparkles,
  ArrowRight,
  Info,
  Copy,
  Check,
  Settings,
  X,
  Camera,
  Image as ImageIcon
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectCardGraphic } from './ProjectCardGraphic';
import { ProjectModal } from './ProjectModal';
import { ImageUploadModal } from './ImageUploadModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [customLinkConfig, setCustomLinkConfig] = useState(false);
  const [activeImageModal, setActiveImageModal] = useState<{ id: string; title: string } | null>(null);

  // Persistent Project Pictures
  const [projectImages, setProjectImages] = useState<{ [id: string]: string }>(() => {
    try {
      const saved = localStorage.getItem('Rupika_project_images');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Custom links state (lets the user replace/test links live in UI as requested!)
  const [projectLinks, setProjectLinks] = useState<{ [id: string]: { demo: string; github: string } }>({
    'personal-portfolio': { demo: '#', github: 'https://github.com/your-username/personal-portfolio' },
    'todo-list': { demo: '#', github: 'https://github.com/your-username/todo-list-app' },
    'food-delivery': { demo: '#', github: 'https://github.com/your-username/food-delivery-platform' },
    'reuse-market': { demo: '#', github: 'https://github.com/your-username/reuse-market' }
  });

  const handleCopyLink = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const handleUrlChange = (id: string, field: 'demo' | 'github', value: string) => {
    setProjectLinks(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value
      }
    }));
  };

  const handleSaveProjectImage = (targetId: string, imageDataUrl: string) => {
    setProjectImages(prev => {
      const updated = { ...prev, [targetId]: imageDataUrl };
      try {
        if (imageDataUrl) {
          localStorage.setItem('Rupika_project_images', JSON.stringify(updated));
        } else {
          delete updated[targetId];
          localStorage.setItem('Rupika_project_images', JSON.stringify(updated));
        }
      } catch (e) {
        console.warn("Storage quota full, retaining in memory", e);
      }
      return updated;
    });
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] radial-glow-blue pointer-events-none -z-10 blur-3xl opacity-35" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] radial-glow-purple pointer-events-none -z-10 blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Featured Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Real-world applications built to solve problems, streamline everyday workflows, and demonstrate end-to-end software development.
            </p>
          </div>

          {/* Quick Toolbar: Add Picture & Link Editor */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setActiveImageModal({ id: 'personal-portfolio', title: 'Personal Portfolio' })}
              className="text-xs font-semibold text-white px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md shadow-indigo-600/25 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Add / Change Pictures</span>
            </button>

            <button
              type="button"
              onClick={() => setCustomLinkConfig(!customLinkConfig)}
              className="text-xs font-medium text-slate-300 hover:text-white px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5 text-indigo-400" />
              <span>{customLinkConfig ? 'Hide Link Editor' : 'Customize Links'}</span>
            </button>
          </div>
        </div>

        {/* Custom Link Editor Drawer */}
        {customLinkConfig && (
          <div className="mb-10 p-6 rounded-2xl glass-panel border border-indigo-500/30 animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Settings className="w-4 h-4 text-indigo-400" />
                  Replaceable Demo & GitHub Links
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Replace the default placeholders with your actual GitHub repositories or live URLs. These persist for your session and can be made permanent in <code className="text-indigo-300 font-mono">portfolioData.ts</code>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCustomLinkConfig(false)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{proj.title}</span>
                    <button
                      type="button"
                      onClick={() => setActiveImageModal({ id: proj.id, title: proj.title })}
                      className="text-[11px] text-purple-300 hover:text-purple-200 flex items-center gap-1 cursor-pointer"
                    >
                      <Camera className="w-3 h-3" />
                      <span>{projectImages[proj.id] ? 'Change Picture' : 'Add Picture'}</span>
                    </button>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block">GitHub Repo URL:</label>
                    <input
                      type="url"
                      value={projectLinks[proj.id]?.github || ''}
                      onChange={(e) => handleUrlChange(proj.id, 'github', e.target.value)}
                      placeholder="https://github.com/..."
                      className="w-full text-xs px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/10 text-slate-200 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block">Live Demo URL:</label>
                    <input
                      type="text"
                      value={projectLinks[proj.id]?.demo || ''}
                      onChange={(e) => handleUrlChange(proj.id, 'demo', e.target.value)}
                      placeholder="https://... or #"
                      className="w-full text-xs px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/10 text-slate-200 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => {
            const currentLinks = projectLinks[project.id] || {
              demo: project.demoUrl,
              github: project.githubUrl
            };
            const currentCustomImage = projectImages[project.id];

            return (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group"
              >
                {/* Visual Preview Graphic */}
                <div
                  className="cursor-pointer relative"
                  onClick={() => setSelectedProject(project)}
                  title="Click to view detailed specs & architecture"
                >
                  <ProjectCardGraphic
                    projectId={project.id}
                    imageUrl={currentCustomImage}
                    onOpenImageModal={() => setActiveImageModal({ id: project.id, title: project.title })}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Title + Category + Picture Status */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-slate-400 font-normal">{project.status}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveImageModal({ id: project.id, title: project.title })}
                        className="text-[11px] font-medium text-purple-300 hover:text-purple-200 flex items-center gap-1 cursor-pointer"
                        title="Upload screenshot or custom image for this project"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>{currentCustomImage ? 'Edit Picture' : 'Add Picture'}</span>
                      </button>
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-0.5 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Clean unboxed technology stack items (anti-slop discipline) */}
                    <div className="flex flex-wrap items-center gap-1.5 py-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono text-indigo-300 bg-white/[0.04] px-2 py-0.5 rounded border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    {/* Demo and Github Links */}
                    <div className="flex items-center gap-2">
                      <a
                        href={currentLinks.demo === '#' ? '#projects' : currentLinks.demo}
                        target={currentLinks.demo === '#' ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (currentLinks.demo === '#') {
                            e.preventDefault();
                            setSelectedProject(project);
                          }
                        }}
                        className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                        title="Launch or preview project demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={currentLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={() => handleCopyLink(currentLinks.github, project.id)}
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                        title="Copy GitHub URL"
                      >
                        {copiedLink === project.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {/* Add Picture Icon button */}
                      <button
                        type="button"
                        onClick={() => setActiveImageModal({ id: project.id, title: project.title })}
                        className="p-2 rounded-xl bg-white/5 hover:bg-purple-950/40 text-purple-300 hover:text-purple-200 border border-white/10 hover:border-purple-500/40 transition-colors cursor-pointer"
                        title="Upload or change project picture"
                      >
                        <Camera className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Details button */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-purple-300 hover:text-purple-200 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* In-depth Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        projectImage={selectedProject ? projectImages[selectedProject.id] : undefined}
        onOpenImageModal={() => {
          if (selectedProject) {
            setActiveImageModal({ id: selectedProject.id, title: selectedProject.title });
          }
        }}
      />

      {/* Image Upload & Management Modal */}
      {activeImageModal && (
        <ImageUploadModal
          isOpen={true}
          onClose={() => setActiveImageModal(null)}
          targetId={activeImageModal.id}
          targetTitle={activeImageModal.title}
          currentImage={projectImages[activeImageModal.id]}
          onSaveImage={handleSaveProjectImage}
        />
      )}
    </section>
  );
};
