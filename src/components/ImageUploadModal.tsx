import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  Image as ImageIcon,
  Link as LinkIcon,
  Check,
  Trash2,
  Sparkles,
  RefreshCw,
  Eye,
  Camera,
  FolderOpen
} from 'lucide-react';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetId: string; // 'profile' or project ID e.g. 'personal-portfolio', 'todo-list', etc.
  targetTitle: string;
  currentImage?: string;
  onSaveImage: (targetId: string, imageDataUrl: string) => void;
}

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  isOpen,
  onClose,
  targetId,
  targetTitle,
  currentImage,
  onSaveImage
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'presets'>('upload');
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [previewImage, setPreviewImage] = useState<string>(currentImage || '');
  const [fileName, setFileName] = useState<string>('');
  const [fileSize, setFileSize] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Curated modern dark-mode mockup presets
  const presets = targetId === 'profile'
    ? [
        {
          name: 'Developer Tech Portrait',
          url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
        },
        {
          name: 'Coding Creative Headshot',
          url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
        },
        {
          name: 'Tech Workspace Avatar',
          url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
        }
      ]
    : [
        {
          name: 'Modern Web Dashboard',
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Minimal Dark UI Code',
          url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'App Mobile Interface',
          url: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=800&q=80'
        }
      ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg('');
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file (PNG, JPG, WebP, SVG, GIF).');
      return;
    }

    // Limit to 5MB for smooth localStorage storage
    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('File size is larger than 5MB. Please choose a smaller image for optimal browser performance.');
      return;
    }

    setFileName(file.name);
    setFileSize((file.size / 1024).toFixed(1) + ' KB');

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setPreviewImage(result);
    };
    reader.onerror = () => {
      setErrorMsg('Failed to read the image file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrlInput.trim()) {
      setErrorMsg('Please enter a valid image URL.');
      return;
    }
    setPreviewImage(imageUrlInput.trim());
    setFileName('Web Image Link');
    setFileSize('');
    setErrorMsg('');
  };

  const handleSelectPreset = (url: string) => {
    setPreviewImage(url);
    setFileName('Selected Preset');
    setFileSize('');
    setErrorMsg('');
  };

  const handleSave = () => {
    onSaveImage(targetId, previewImage);
    onClose();
  };

  const handleRemove = () => {
    setPreviewImage('');
    setFileName('');
    setFileSize('');
    onSaveImage(targetId, '');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#0a0f1d] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 id="image-modal-title" className="text-base sm:text-lg font-bold text-white">
                Add Picture: {targetTitle}
              </h3>
              <p className="text-xs text-indigo-200">
                Upload from device, paste web URL, or choose a mockup
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
        <div className="flex items-center border-b border-white/10 px-6 pt-2 bg-white/[0.02] gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'upload'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload File</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('url')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'url'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Image URL</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('presets')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'presets'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Presets</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-300">
          
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
              {errorMsg}
            </div>
          )}

          {/* TAB 1: Upload from Device */}
          {activeTab === 'upload' && (
            <div className="space-y-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-white/20 hover:border-indigo-500/60 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <FolderOpen className="w-7 h-7 text-indigo-400" />
                </div>
                <p className="text-sm font-semibold text-white">
                  Click to select an image from your computer or phone
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Supports JPG, PNG, WebP, SVG, GIF (up to 5MB)
                </p>
                <button
                  type="button"
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors pointer-events-none"
                >
                  Choose Picture File
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Image URL */}
          {activeTab === 'url' && (
            <form onSubmit={handleApplyUrl} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Paste Direct Image Address (HTTPS URL):
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={imageUrlInput}
                    onChange={(e) => setImageUrlInput(e.target.value)}
                    placeholder="https://images.unsplash.com/... or https://your-site/screenshot.png"
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shrink-0 cursor-pointer"
                  >
                    Load URL
                  </button>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                Tip: You can use images hosted on GitHub, Imgur, Cloudinary, or Google Drive (direct image links).
              </p>
            </form>
          )}

          {/* TAB 3: Presets */}
          {activeTab === 'presets' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-400">
                Select a high-resolution dark aesthetic preset to preview right away:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {presets.map((preset) => (
                  <div
                    key={preset.name}
                    onClick={() => handleSelectPreset(preset.url)}
                    className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 cursor-pointer group transition-all"
                  >
                    <div className="w-full h-24 rounded-lg overflow-hidden mb-2 bg-black/40">
                      <img
                        src={preset.url}
                        alt={preset.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[11px] font-medium text-white block truncate">
                      {preset.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preview Box */}
          <div className="pt-2 border-t border-white/10">
            <span className="block text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-indigo-400" />
                Live Preview
              </span>
              {fileName && (
                <span className="text-[11px] text-slate-400 font-mono">
                  {fileName} {fileSize ? `(${fileSize})` : ''}
                </span>
              )}
            </span>

            {previewImage ? (
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/50 group">
                <div className={`w-full ${targetId === 'profile' ? 'h-52' : 'h-44'} flex items-center justify-center overflow-hidden`}>
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={() => setErrorMsg('Failed to load image from URL. Please verify the link is accessible.')}
                  />
                </div>
                <div className="absolute top-2 right-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewImage('')}
                    className="p-1.5 rounded-lg bg-black/70 hover:bg-rose-900/80 text-rose-300 border border-white/10 text-xs flex items-center gap-1 cursor-pointer"
                    title="Clear preview"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-32 rounded-2xl border border-dashed border-white/10 bg-white/[0.01] flex flex-col items-center justify-center text-slate-500">
                <ImageIcon className="w-8 h-8 mb-1 opacity-40" />
                <span>No picture selected. The interactive vector mockup will be used.</span>
              </div>
            )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between gap-3">
          {currentImage ? (
            <button
              type="button"
              onClick={handleRemove}
              className="px-3 py-2 text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-950/30 rounded-xl border border-rose-500/20 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Remove Picture</span>
            </button>
          ) : (
            <span className="text-[11px] text-slate-500">
              Saved automatically in browser storage
            </span>
          )}

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-slate-400 hover:text-white rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl transition-all shadow-md shadow-indigo-600/30 flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Save & Apply Picture</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
