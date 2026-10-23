import React from 'react';
import {
  CheckSquare,
  Utensils,
  RefreshCw,
  Layout,
  Star,
  Search,
  ShoppingCart,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';

import { useState } from 'react';

interface ProjectCardGraphicProps {
  projectId: string;
  imageUrl?: string;
  onOpenImageModal?: () => void;
}

export const ProjectCardGraphic: React.FC<ProjectCardGraphicProps> = ({
  projectId,
  imageUrl,
  onOpenImageModal
}) => {
  const [imgError, setImgError] = useState(false);

  // If a valid custom image is provided and hasn't errored out, render the photo preview!
  if (imageUrl && !imgError) {
    return (
      <div className="w-full h-48 bg-[#090e1f] rounded-t-xl relative overflow-hidden group border-b border-white/10">
        <img
          src={imageUrl}
          alt={`Screenshot preview for ${projectId}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
        />
        {/* Subtle dark gradient scrim at bottom and top for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-black/40 pointer-events-none" />

        {/* Top bar with quick Change Picture affordance */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-mono text-slate-300">Custom Picture</span>
          </div>

          {onOpenImageModal && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenImageModal();
              }}
              className="text-[10px] px-2.5 py-1 rounded-full bg-black/70 hover:bg-black/90 text-white font-medium border border-white/20 transition-all flex items-center gap-1 cursor-pointer opacity-90 group-hover:opacity-100 shadow-md"
              title="Change this picture"
            >
              <span>Change Picture</span>
            </button>
          )}
        </div>
      </div>
    );
  }
  if (projectId === 'personal-portfolio') {
    return (
      <div className="w-full h-48 bg-[#090e1f] rounded-t-xl relative overflow-hidden flex flex-col justify-between p-4 border-b border-white/10 group">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/20 blur-2xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/20 blur-2xl rounded-full pointer-events-none" />

        {/* Browser Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[10px] font-mono text-slate-400 bg-white/5 px-3 py-0.5 rounded border border-white/10 truncate max-w-[200px]">
            rajarajeshwari.dev/portfolio
          </div>
          <div className="flex items-center gap-2">
            {onOpenImageModal && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenImageModal();
                }}
                className="text-[9px] px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-indigo-200 transition-colors cursor-pointer"
              >
                + Add Picture
              </button>
            )}
            <Layout className="w-3.5 h-3.5 text-purple-400" />
          </div>
        </div>

        {/* Mock UI Canvas */}
        <div className="relative z-10 grid grid-cols-12 gap-3 items-center py-2">
          <div className="col-span-7 space-y-2">
            <div className="flex items-center gap-1 text-[10px] text-indigo-400 font-semibold uppercase">
              <Sparkles className="w-3 h-3" />
              <span>Developer Portfolio</span>
            </div>
            <div className="h-4 w-3/4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-md animate-pulse" />
            <div className="h-2.5 w-full bg-slate-700/60 rounded" />
            <div className="h-2.5 w-5/6 bg-slate-700/40 rounded" />
            <div className="flex items-center gap-2 pt-1">
              <span className="px-2 py-0.5 rounded text-[9px] font-semibold bg-indigo-600 text-white">Hire Me</span>
              <span className="px-2 py-0.5 rounded text-[9px] bg-white/10 text-slate-300">Projects</span>
            </div>
          </div>

          <div className="col-span-5 flex justify-center">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px] shadow-lg shadow-indigo-500/30">
              <div className="w-full h-full bg-[#0a0f1d] rounded-xl flex flex-col items-center justify-center p-2 text-center">
                <span className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  RS
                </span>
                <span className="text-[9px] text-slate-300 font-mono mt-1">BCA 24–27</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1 relative z-10">
          <span>Dark Navy + Glowing Accents</span>
          <span className="text-indigo-300 font-mono">React + Tailwind</span>
        </div>
      </div>
    );
  }

  if (projectId === 'todo-list') {
    return (
      <div className="w-full h-48 bg-[#090e1f] rounded-t-xl relative overflow-hidden flex flex-col justify-between p-4 border-b border-white/10 group">
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-500/15 blur-2xl rounded-full pointer-events-none" />

        {/* Browser Top Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[10px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
            tasks-productivity.app
          </div>
          <div className="flex items-center gap-2">
            {onOpenImageModal && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenImageModal();
                }}
                className="text-[9px] px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-indigo-200 transition-colors cursor-pointer"
              >
                + Add Picture
              </button>
            )}
            <CheckSquare className="w-3.5 h-3.5 text-amber-400" />
          </div>
        </div>

        {/* Task List Mockup */}
        <div className="relative z-10 space-y-2 py-1">
          {/* Item 1 */}
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/5 border border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-[10px] text-emerald-400 font-bold">✓</span>
              <span className="text-[11px] text-slate-400 line-through">Complete BCA DBMS Lab Assignment</span>
            </div>
            <span className="text-[9px] font-mono text-emerald-400">Done</span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded border border-slate-500 flex items-center justify-center" />
              <span className="text-[11px] text-white font-medium">Build React Food Delivery Cart</span>
            </div>
            <span className="text-[9px] font-mono text-indigo-300">High Priority</span>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/5 border border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded border border-slate-500 flex items-center justify-center" />
              <span className="text-[11px] text-slate-300">Review Python OOP Concepts</span>
            </div>
            <span className="text-[9px] font-mono text-slate-400">Study</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
          <span>1 / 3 Completed</span>
          <span className="text-amber-300 font-mono">LocalStorage Sync</span>
        </div>
      </div>
    );
  }

  if (projectId === 'food-delivery') {
    return (
      <div className="w-full h-48 bg-[#090e1f] rounded-t-xl relative overflow-hidden flex flex-col justify-between p-4 border-b border-white/10 group">
        <div className="absolute top-0 right-10 w-36 h-36 bg-rose-500/15 blur-2xl rounded-full pointer-events-none" />

        {/* Browser Top Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[10px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
            crave-express.food/order
          </div>
          <div className="flex items-center gap-2">
            {onOpenImageModal && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenImageModal();
                }}
                className="text-[9px] px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-indigo-200 transition-colors cursor-pointer"
              >
                + Add Picture
              </button>
            )}
            <Utensils className="w-3.5 h-3.5 text-rose-400" />
          </div>
        </div>

        {/* Food Delivery UI Cards */}
        <div className="relative z-10 grid grid-cols-2 gap-2.5 py-1">
          {/* Dish 1 */}
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-white">Butter Paneer Meal</span>
              <span className="text-[10px] text-rose-400 font-mono font-bold">₹180</span>
            </div>
            <p className="text-[9px] text-slate-400 mt-1 line-clamp-1">Fresh cottage cheese with basmati rice</p>
            <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5">
              <span className="text-[9px] text-emerald-400 flex items-center gap-0.5">
                <Star className="w-2.5 h-2.5 fill-current" /> 4.8
              </span>
              <span className="text-[9px] bg-rose-600/30 text-rose-200 px-1.5 py-0.5 rounded">Add +</span>
            </div>
          </div>

          {/* Dish 2 */}
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-white">Crispy Dosa Platter</span>
              <span className="text-[10px] text-rose-400 font-mono font-bold">₹90</span>
            </div>
            <p className="text-[9px] text-slate-400 mt-1 line-clamp-1">Crispy crepe with 3 chutneys & sambar</p>
            <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5">
              <span className="text-[9px] text-emerald-400 flex items-center gap-0.5">
                <Star className="w-2.5 h-2.5 fill-current" /> 4.9
              </span>
              <span className="text-[9px] bg-rose-600/30 text-rose-200 px-1.5 py-0.5 rounded">Add +</span>
            </div>
          </div>
        </div>

        {/* Cart Bar */}
        <div className="flex items-center justify-between p-1.5 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-[10px] text-white">
          <div className="flex items-center gap-1.5">
            <ShoppingCart className="w-3 h-3 text-indigo-400" />
            <span>2 Items in Cart</span>
          </div>
          <span className="font-mono text-indigo-300 font-bold">₹270 · Checkout →</span>
        </div>
      </div>
    );
  }

  // Reuse Market
  return (
    <div className="w-full h-48 bg-[#090e1f] rounded-t-xl relative overflow-hidden flex flex-col justify-between p-4 border-b border-white/10 group">
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/15 blur-2xl rounded-full pointer-events-none" />

      {/* Browser Top Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-2">
          {onOpenImageModal && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenImageModal();
              }}
              className="text-[9px] px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-indigo-200 transition-colors cursor-pointer"
            >
              + Add Picture
            </button>
          )}
          <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
        </div>
      </div>

      {/* Market Item Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-2.5 py-1">
        <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-white">BCA DBMS Textbook</span>
            <span className="text-[9px] text-emerald-400 font-mono">₹250</span>
          </div>
          <div className="text-[9px] text-slate-400 mt-1">Condition: Good (Mandya Campus)</div>
          <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5">
            <span className="text-[9px] text-teal-300 font-mono">Book / Notes</span>
            <span className="text-[9px] text-slate-300">Contact Seller</span>
          </div>
        </div>

        <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-white">Scientific Calculator</span>
            <span className="text-[9px] text-emerald-400 font-mono">₹450</span>
          </div>
          <div className="text-[9px] text-slate-400 mt-1">Casio fx-991ES Plus · Like New</div>
          <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5">
            <span className="text-[9px] text-teal-300 font-mono">Gadget</span>
            <span className="text-[9px] text-slate-300">Contact Seller</span>
          </div>
        </div>
      </div>

      {/* Sustainable badge */}
      <div className="flex items-center justify-between text-[10px] text-emerald-300 pt-1 border-t border-white/5">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          Circular Campus Economy
        </span>
        <span className="font-mono text-slate-400">Python + SQL / Mongo</span>
      </div>
    </div>
  );
};
