import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  MapPin,
  GraduationCap,
  Download,
  Copy,
  Check,
  Code2,
  Terminal,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenHireMe: () => void;
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireMe, onViewProjects }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  // Check if browser currently has a previously uploaded photo in localStorage
  const localUploadedPhoto = typeof window !== 'undefined' ? localStorage.getItem('Rupika_profile_photo') : null;

  // Permanent photo priority:
  // 1. Direct project file in public folder: PERSONAL_INFO.avatarUrl (e.g. /profile.jpg)
  // 2. Local uploaded photo if present in this browser session
  // 3. Fallback to /profile.svg
  const photoSrc = !imgError
    ? (PERSONAL_INFO.avatarUrl || localUploadedPhoto || '/profile.svg')
    : (localUploadedPhoto || '/profile.svg');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadProfileJpg = () => {
    if (!localUploadedPhoto) return;
    const link = document.createElement('a');
    link.href = localUploadedPhoto;
    link.download = 'profile.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setHasDownloaded(true);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[450px] radial-glow-purple pointer-events-none -z-10 blur-3xl opacity-60" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[350px] radial-glow-blue pointer-events-none -z-10 blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location & Status Tagline (unboxed typography) */}
            <div className="flex items-center flex-wrap gap-2 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5 text-indigo-400 font-semibold tracking-wide uppercase">
                <Terminal className="w-3.5 h-3.5" />
                Portfolio
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {PERSONAL_INFO.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
                {PERSONAL_INFO.statusText}
              </span>
            </div>

            {/* Main Headline & Name */}
            <div>
              <p className="text-base sm:text-lg font-medium text-purple-300/90 mb-1">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <div className="mt-3 flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.title}
                </h2>
              </div>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Action Buttons: Hire Me & View Projects */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenHireMe}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onViewProjects}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 transition-all duration-200 flex items-center gap-2 active:scale-95 cursor-pointer hover:text-white"
              >
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span>View Projects</span>
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mr-1">
                Connect:
              </span>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-900/20 transition-all duration-200 group"
                aria-label="GitHub Profile"
                title="Visit GitHub (Configurable in data file)"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-900/20 transition-all duration-200 group"
                aria-label="LinkedIn Profile"
                title="Visit LinkedIn (Configurable in data file)"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              {/* Email Client */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-900/20 transition-all duration-200 group"
                aria-label="Send direct email"
                title={`Email: ${PERSONAL_INFO.email}`}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              {/* Copy Email Fast */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Permanent Visual Profile Picture Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 opacity-70 blur-lg transition duration-500 group-hover:opacity-100 animate-pulse" />

              {/* Card Container */}
              <div className="relative rounded-3xl glass-panel p-6 sm:p-8 border border-white/15 shadow-2xl flex flex-col items-center text-center">
                
                {/* Permanent Photo Element */}
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl p-[3px] bg-gradient-to-tr from-blue-500 via-indigo-400 to-purple-500 shadow-inner overflow-hidden relative">
                    {photoSrc ? (
                      <img
                        src={photoSrc}
                        alt={`${PERSONAL_INFO.name} Profile`}
                        className="w-full h-full object-cover rounded-[14px]"
                        referrerPolicy="no-referrer"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#0a1022] rounded-[14px] flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-indigo-950/40 to-[#070b14]" />
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-600/40 mb-2">
                            <span className="text-2xl font-black text-white tracking-wider">
                              {PERSONAL_INFO.initials}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-slate-200">
                            {PERSONAL_INFO.name}
                          </span>
                          <span className="text-xs text-indigo-300 font-mono mt-0.5">
                            BCA Undergrad
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Floating verification badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0a0f1d] border border-indigo-500/40 text-[11px] font-semibold text-indigo-300 shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span>STG First Grade College</span>
                  </div>
                </div>

                {/* Card Sub-Info */}
                <div className="mt-7 w-full pt-4 border-t border-white/10 space-y-2 text-left">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="text-slate-400">Current Degree:</span>
                    <span className="font-semibold text-white">BCA (2024–2027)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-slate-200">Mandya, Karnataka</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="text-slate-400">Primary Focus:</span>
                    <span className="text-purple-300 font-medium">Full-Stack & Systems</span>
                  </div>
                </div>

                {/* Permanent File Location Info */}
                <div className="mt-4 w-full pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Permanent Image:
                    </span>
                    <code className="text-indigo-300 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      /public/profile.jpg
                    </code>
                  </div>

                  {/* If user has the uploaded photo in this browser, provide 1-click download as profile.jpg */}
                  {localUploadedPhoto && (
                    <div className="mt-3 p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] text-indigo-200 font-medium">
                          Export this photo file:
                        </span>
                        <button
                          type="button"
                          onClick={handleDownloadProfileJpg}
                          className="px-2.5 py-1 text-[11px] font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg flex items-center gap-1 cursor-pointer transition-colors shadow-sm shrink-0"
                          title="Save this image file as profile.jpg to drop into your public folder"
                        >
                          <Download className="w-3 h-3" />
                          <span>{hasDownloaded ? 'Downloaded profile.jpg!' : 'Download profile.jpg'}</span>
                        </button>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1 leading-normal">
                        Save it to your project's <code className="text-indigo-300">public/</code> folder so it displays permanently on other computers and Vercel!
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Full-width proof strip below the hero split */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              BCA
            </p>
            <p className="text-xs text-slate-400 mt-1">STG First Grade College</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono tabular-nums">
              2024–27
            </p>
            <p className="text-xs text-slate-400 mt-1">Graduation Cohort</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <p className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono tabular-nums">
              6+
            </p>
            <p className="text-xs text-slate-400 mt-1">Core Tech & Stacks</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              100%
            </p>
            <p className="text-xs text-slate-400 mt-1">Eager to Learn & Build</p>
          </div>
        </div>

      </div>
    </section>
  );
};
