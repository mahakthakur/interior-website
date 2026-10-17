import React from 'react';
import { MaterialSwatch } from '../data/projects';

interface MaterialDrawerProps {
  material: MaterialSwatch | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const MaterialDrawer: React.FC<MaterialDrawerProps> = ({
  material,
  onClose,
  onBookConsultation
}) => {
  if (!material) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1c1c18]/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#fcf9f2] w-full max-w-lg rounded-t-2xl sm:rounded-2xl p-6 shadow-2xl border border-[#3c2a21]/10 flex flex-col max-h-[85vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#e5e2db] flex items-center justify-center text-[#25160e]">
              <span className="material-symbols-outlined text-[26px]">
                {material.icon}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#5c614d] font-semibold block">
                Artisan Material Spec
              </span>
              <h3 className="font-serif-luxury text-[24px] text-[#25160e] font-normal leading-tight">
                {material.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f1eee7] text-[#4f4540] flex items-center justify-center hover:bg-[#e5e2db] transition-colors cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <p className="text-[14px] text-[#4f4540] leading-relaxed mb-5">
          {material.description}
        </p>

        {/* Spec Details */}
        <div className="space-y-3 p-4 rounded-xl bg-[#f1eee7] border border-[#3c2a21]/5 mb-6 text-[13px]">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#5c614d] font-semibold block">
              Origin & Sourcing
            </span>
            <span className="font-medium text-[#25160e]">{material.origin}</span>
          </div>
          <div className="w-full h-[1px] bg-[#e5e2db]" />
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#5c614d] font-semibold block">
              Surface & Tactility
            </span>
            <span className="font-medium text-[#25160e]">{material.texture}</span>
          </div>
          <div className="w-full h-[1px] bg-[#e5e2db]" />
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#5c614d] font-semibold block">
              Sustainability & Air Quality
            </span>
            <span className="font-medium text-[#25160e]">{material.sustainability}</span>
          </div>
          <div className="w-full h-[1px] bg-[#e5e2db]" />
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#5c614d] font-semibold block">
              Acoustic Profile
            </span>
            <span className="font-medium text-[#25160e]">{material.acousticRating}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="flex-1 py-3 rounded-lg bg-[#25160e] text-[#fcf9f2] text-[12px] font-semibold uppercase tracking-wider hover:bg-[#3c2a21] transition-transform active:scale-95 text-center cursor-pointer shadow-sm"
          >
            Inquire For Your Project
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-lg bg-[#f1eee7] text-[#4f4540] text-[12px] font-semibold hover:bg-[#e5e2db] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
