import React, { useState } from 'react';
import {
  Mail,
  Send,
  MapPin,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Info,
  Building2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please type a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Automatically trigger mailto link to open sender's default mail client
    const mailtoUrl = generateMailtoUrl();
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopyDraft = () => {
    const draftText = `Subject: ${formData.subject}\nFrom: ${formData.name} <${formData.email}>\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello ${PERSONAL_INFO.name},\n\n${formData.message}\n\n---\nSender: ${formData.name} (${formData.email})`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] radial-glow-purple pointer-events-none -z-10 blur-3xl opacity-35" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] radial-glow-blue pointer-events-none -z-10 blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Interested in discussing an internship, project collaboration, or tech opportunities? Reach out using the form below or via direct channels.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Contact Information</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Configurable direct contact channels and verified social profiles.
                </p>
              </div>

              {/* Contact list */}
              <div className="space-y-4 text-xs">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-3.5 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="truncate">
                    <span className="text-slate-400 block text-[11px]">Email Address</span>
                    <span className="font-semibold text-white truncate block">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Location</span>
                    <span className="font-semibold text-white block">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                {/* College Campus */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Institution</span>
                    <span className="font-semibold text-white block">{PERSONAL_INFO.college}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">
                  Social & Developer Links
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors text-xs font-semibold"
                  >
                    <Github className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
              
              {/* Clean Form Header */}
              <div className="mb-6 flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Send className="w-5 h-5 text-indigo-400" />
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Your note will be sent directly to <span className="text-indigo-300 font-mono">{PERSONAL_INFO.email}</span>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowDeliveryInfo(!showDeliveryInfo)}
                  className="text-[11px] text-slate-400 hover:text-indigo-300 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer shrink-0"
                  title="How email delivery works"
                >
                  <Info className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{showDeliveryInfo ? 'Hide Info' : 'Delivery Note'}</span>
                </button>
              </div>

              {/* Optional Delivery Information Drawer */}
              {showDeliveryInfo && (
                <div className="mb-6 p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 text-xs flex items-start justify-between gap-3 animate-in fade-in duration-200">
                  <div className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-bold text-white block">
                        Email Delivery Configuration:
                      </span>
                      <p className="text-slate-300 leading-relaxed text-[11px]">
                        Clicking <strong>"Submit Message"</strong> opens your default email client (Gmail, Outlook, Apple Mail) with everything pre-filled to {PERSONAL_INFO.email}. For automated serverless delivery without opening your email app, Formspree or EmailJS can be connected in <code className="text-indigo-300 font-mono">portfolioData.ts</code>.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowDeliveryInfo(false)}
                    className="text-slate-400 hover:text-white p-1 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              )}

              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been formulated successfully. To ensure {PERSONAL_INFO.name} receives your message immediately, choose an option below:
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateMailtoUrl()}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Default Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                      {copiedDraft ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Message Draft</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                      }}
                      className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name and Email in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Rao"
                        className={`w-full px-4 py-2.5 rounded-xl text-xs bg-black/40 border transition-all text-white placeholder-slate-500 focus:outline-none ${
                          errors.name
                            ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ananya@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl text-xs bg-black/40 border transition-all text-white placeholder-slate-500 focus:outline-none ${
                          errors.email
                            ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject / Topic
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#0a0f1d] border border-white/10 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Internship Opportunity">Internship Opportunity</option>
                      <option value="Project Collaboration">Project Collaboration</option>
                      <option value="Freelance Web Development">Freelance Web Development</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share project details, timelines, questions, or introductory note..."
                      className={`w-full px-4 py-2.5 rounded-xl text-xs bg-black/40 border transition-all text-white placeholder-slate-500 focus:outline-none resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3 px-6 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-200 shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-60"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Opening Mail Client...' : 'Send Message'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      title="Copy draft message to clipboard"
                    >
                      {copiedDraft ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Copy Draft</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    <span>Direct dispatch to {PERSONAL_INFO.email}</span>
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
