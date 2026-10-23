import React, { useState } from 'react';
import { X, Sparkles, Send, Copy, CheckCircle, Mail, MapPin, Calendar, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const [roleType, setRoleType] = useState('Internship (Full-Stack / Frontend)');
  const [recruiterName, setRecruiterName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const roleOptions = [
    'Web Development Internship',
    'Junior Frontend / React Developer',
    'Python & Database Project',
    'Freelance Website Development',
    'Open Source Collaboration'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`[Opportunity] ${roleType} at ${companyName || 'our company'}`);
    const body = encodeURIComponent(
      `Hi ${PERSONAL_INFO.name},\n\nI came across your portfolio. We are interested in discussing an opportunity for ${roleType}.\n\nDetails:\n${message || 'We would like to connect with you regarding your technical skills in HTML, CSS, JavaScript, Python, SQL, and MongoDB.'}\n\nBest regards,\n${recruiterName || 'Hiring Team'}\n${companyName || ''}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hire-modal-title"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#0a0f1d] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 id="hire-modal-title" className="text-lg font-bold text-white">
                Work with {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-indigo-200">
                Available for internships, developer roles & projects
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10"
            aria-label="Close hire modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {/* Quick Profile Summary */}
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Degree & Status:</span>
              <span className="font-semibold text-white">BCA (2024–2027)</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">College:</span>
              <span className="font-semibold text-white">STG First Grade College</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Location:</span>
              <span className="font-semibold text-white">Chinakurali, Mandya</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Key Skills:</span>
              <span className="font-semibold text-indigo-300">HTML, CSS, JS, Python, SQL, Mongo</span>
            </div>
          </div>

          {/* Role Type Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Select Opportunity Type:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {roleOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setRoleType(opt)}
                  className={`px-3 py-2 text-xs rounded-xl text-left border transition-all ${
                    roleType === opt
                      ? 'bg-indigo-600/30 border-indigo-500 text-white font-medium'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Input Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                Your Name / Recruiter:
              </label>
              <input
                type="text"
                value={recruiterName}
                onChange={(e) => setRecruiterName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                Company / Organization:
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Tech Solutions Mandya"
                className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 mb-1">
              Short Note or Project Scope:
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me a little about the role or requirements..."
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={generateMailto()}
              className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
            >
              <Mail className="w-4 h-4" />
              <span>Compose Email with this Inquiry</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
