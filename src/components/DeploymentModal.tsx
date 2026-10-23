import React, { useState } from 'react';
import { X, Terminal, Server, Globe, Check, Copy, ExternalLink, BookOpen, Sparkles, Code2 } from 'lucide-react';
import { DEPLOYMENT_GUIDE, PERSONAL_INFO } from '../data/portfolioData';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'local' | 'vercel' | 'render' | 'email'>('local');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="deploy-modal-title"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#0a0f1d] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 id="deploy-modal-title" className="text-lg font-bold text-white">
                Run Locally & Deployment Guide
              </h3>
              <p className="text-xs text-indigo-200">
                How to run this project on your machine & publish to Render or Vercel
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center border-b border-white/10 px-6 pt-3 bg-white/[0.02] gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('local')}
            className={`px-3.5 py-2 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'local'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Local Run (Terminal)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('vercel')}
            className={`px-3.5 py-2 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'vercel'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Deploy to Vercel
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('render')}
            className={`px-3.5 py-2 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'render'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Deploy to Render
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('email')}
            className={`px-3.5 py-2 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'email'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Email Backend Setup
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-300">
          
          {activeTab === 'local' && (
            <div className="space-y-4">
              <p className="leading-relaxed">
                To run {PERSONAL_INFO.name}'s portfolio locally on your computer with Node.js and Vite:
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="font-semibold text-white">1. Install Dependencies & Start Dev Server</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('npm install && npm run dev', 'local-all')}
                    className="text-[11px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    {copiedIndex === 'local-all' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy command</span>
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-indigo-300 space-y-1">
                  <p># Clone your repository or extract project folder</p>
                  <p>cd portfolio</p>
                  <p>npm install</p>
                  <p>npm run dev</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <span className="text-white font-semibold block">Configuring Your Details</span>
                <p className="text-slate-400 leading-relaxed">
                  Open <code className="text-indigo-300 font-mono">src/data/portfolioData.ts</code>. You can change your name, email, GitHub links, skill percentages, and projects in one place!
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <span className="text-white font-semibold block">Production Build Test</span>
                <div className="p-2.5 rounded bg-black/50 font-mono text-indigo-300 text-[11px]">
                  npm run build && npm run preview
                </div>
                <p className="text-slate-400">
                  Compiles optimized static assets into the <code className="text-indigo-300 font-mono">dist/</code> directory.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'vercel' && (
            <div className="space-y-4">
              <p className="leading-relaxed">
                Vercel provides free, high-performance static hosting with automatic HTTPS and instant CI/CD upon Git push:
              </p>

              <ol className="space-y-2.5 list-decimal list-inside text-slate-300">
                <li className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  Push this repository to your GitHub account (<code className="text-indigo-300 font-mono">git push origin main</code>).
                </li>
                <li className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  Go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline font-semibold">vercel.com</a> and sign in with GitHub.
                </li>
                <li className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  Click <strong className="text-white">"Add New..."</strong> &gt; <strong className="text-white">"Project"</strong> and select your portfolio repository.
                </li>
                <li className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-white font-semibold block">Build & Output Settings (Auto-Detected by Vercel):</span>
                  <div className="font-mono text-[11px] text-indigo-300 bg-black/40 p-2 rounded">
                    Framework Preset: Vite<br />
                    Build Command: npm run build<br />
                    Output Directory: dist<br />
                    Install Command: npm install --legacy-peer-deps (pre-set in vercel.json &amp; .npmrc)
                  </div>
                </li>
                <li className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  Click <strong className="text-emerald-400">"Deploy"</strong>. Your portfolio will be live in ~25 seconds with a custom <code className="text-indigo-300 font-mono">.vercel.app</code> address.
                </li>
              </ol>
            </div>
          )}

          {activeTab === 'render' && (
            <div className="space-y-4">
              <p className="leading-relaxed">
                Render offers free static web hosting with custom domains, global CDN, and automated Git deploys:
              </p>

              <ol className="space-y-2.5 list-decimal list-inside text-slate-300">
                <li className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  Push your project to GitHub.
                </li>
                <li className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  Visit <a href="https://render.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline font-semibold">render.com</a> and log in.
                </li>
                <li className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  Click <strong className="text-white">"New +"</strong> and select <strong className="text-white">"Static Site"</strong>.
                </li>
                <li className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-white font-semibold block">Specify Configuration:</span>
                  <div className="font-mono text-[11px] text-indigo-300 bg-black/40 p-2 rounded">
                    Name: rajarajeshwari-portfolio<br />
                    Branch: main<br />
                    Build Command: npm run build<br />
                    Publish Directory: dist
                  </div>
                </li>
                <li className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  Click <strong className="text-emerald-400">"Create Static Site"</strong>. Render automatically compiles the project and generates your public HTTPS URL!
                </li>
              </ol>
            </div>
          )}

          {activeTab === 'email' && (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200">
                <strong>Why is this needed?</strong> A static front-end in the browser cannot send SMTP emails on its own without exposing email passwords or API secrets in the browser bundle.
              </div>

              <p className="leading-relaxed">
                You have 3 easy options to receive emails from the contact form:
              </p>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-white font-semibold mb-1">Option 1: Direct Mailto (Current Default)</h4>
                  <p className="text-slate-400">
                    The form already includes a direct "Send via Email App" button that launches the sender's default mail client with your prefilled email and subject.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-white font-semibold mb-1">Option 2: Formspree (No Code Required)</h4>
                  <p className="text-slate-400">
                    Sign up at formspree.io, obtain your form ID, and replace the form action with <code className="text-indigo-300 font-mono">https://formspree.io/f/YOUR_ID</code>.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-white font-semibold mb-1">Option 3: EmailJS (Client-Side SDK)</h4>
                  <p className="text-slate-400">
                    Run <code className="text-indigo-300 font-mono">npm install @emailjs/browser</code> to dispatch emails directly from React via EmailJS templates.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            All configuration lives cleanly in <code className="text-indigo-300 font-mono">src/data/portfolioData.ts</code>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-white/10 hover:bg-white/15 text-white rounded-xl transition-colors"
          >
            Got it
          </button>
        </div>

      </div>
    </div>
  );
};
