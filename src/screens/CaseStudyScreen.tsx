import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';

interface CaseStudyScreenProps {
  initialProjectId?: string;
  onBookConsultation: () => void;
}

export const CaseStudyScreen: React.FC<CaseStudyScreenProps> = ({
  initialProjectId = 'kyoto-residence',
  onBookConsultation
}) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(initialProjectId);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeViewMode, setActiveViewMode] = useState<'monograph' | 'transformation' | 'spatial'>('monograph');

  const currentProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-24">
      {/* Project Selector Bar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 border-b border-[#3c2a21]/5">
        {PROJECTS.map((p) => {
          const isActive = p.id === currentProject.id;
          return (
            <button
              key={p.id}
              onClick={() => setActiveProjectId(p.id)}
              className={`px-4 py-2 rounded-lg text-[12px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#25160e] text-[#fcf9f2] shadow-sm'
                  : 'bg-[#f1eee7] text-[#4f4540] hover:bg-[#e5e2db]'
              }`}
            >
              {p.title}
            </button>
          );
        })}
      </div>

      {/* Header Monograph Intro */}
      <div className="flex flex-col mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] uppercase tracking-widest text-[#5c614d] font-semibold">
            Architectural Monograph
          </span>
          <span className="text-[11px] text-[#4f4540]/60 font-mono">
            {currentProject.location}
          </span>
        </div>
        <h1 className="font-serif-luxury text-[32px] sm:text-[40px] text-[#25160e] font-normal leading-tight">
          {currentProject.title}
        </h1>
        <p className="text-[15px] text-[#4f4540] mt-2 leading-relaxed max-w-2xl">
          {currentProject.longDescription}
        </p>
      </div>

      {/* View Mode Switcher */}
      <div className="flex items-center gap-1.5 p-1 bg-[#f1eee7] rounded-lg self-start mb-4 border border-[#3c2a21]/5">
        <button
          onClick={() => setActiveViewMode('monograph')}
          className={`px-3 py-1.5 rounded-md text-[12px] font-semibold transition-all cursor-pointer ${
            activeViewMode === 'monograph'
              ? 'bg-[#fcf9f2] text-[#25160e] shadow-sm'
              : 'text-[#4f4540] hover:text-[#25160e]'
          }`}
        >
          Photography
        </button>
        <button
          onClick={() => setActiveViewMode('transformation')}
          className={`px-3 py-1.5 rounded-md text-[12px] font-semibold transition-all cursor-pointer ${
            activeViewMode === 'transformation'
              ? 'bg-[#fcf9f2] text-[#25160e] shadow-sm'
              : 'text-[#4f4540] hover:text-[#25160e]'
          }`}
        >
          Before / After Reveal
        </button>
        <button
          onClick={() => setActiveViewMode('spatial')}
          className={`px-3 py-1.5 rounded-md text-[12px] font-semibold transition-all cursor-pointer ${
            activeViewMode === 'spatial'
              ? 'bg-[#fcf9f2] text-[#25160e] shadow-sm'
              : 'text-[#4f4540] hover:text-[#25160e]'
          }`}
        >
          Spatial Dimensions
        </button>
      </div>

      {/* Main Visual Display */}
      {activeViewMode === 'monograph' && (
        <div className="relative w-full h-80 sm:h-[460px] rounded-xl overflow-hidden shadow-sm bg-[#e5e2db] mb-6">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-[#fcf9f2]/95 backdrop-blur-md rounded-lg p-3 sm:p-4 flex items-center justify-between shadow-sm border border-[#3c2a21]/5">
            <div className="flex items-center gap-4 text-left">
              <div>
                <span className="text-[10px] uppercase text-[#4f4540]/80 font-semibold block">Footprint</span>
                <span className="text-[13px] font-semibold text-[#25160e]">{currentProject.footprint}</span>
              </div>
              <div className="w-[1px] h-6 bg-[#d3c3bd]" />
              <div>
                <span className="text-[10px] uppercase text-[#4f4540]/80 font-semibold block">Scope</span>
                <span className="text-[13px] font-semibold text-[#25160e]">{currentProject.scope}</span>
              </div>
              <div className="w-[1px] h-6 bg-[#d3c3bd]" />
              <div>
                <span className="text-[10px] uppercase text-[#4f4540]/80 font-semibold block">Completed</span>
                <span className="text-[13px] font-semibold text-[#25160e]">{currentProject.completed}</span>
              </div>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-semibold text-[#5c614d] uppercase tracking-wider">
              {currentProject.categoryLabel}
            </span>
          </div>
        </div>
      )}

      {/* Interactive Before / After transformation slider */}
      {activeViewMode === 'transformation' && (
        <div className="flex flex-col mb-6">
          <div className="relative w-full h-80 sm:h-[460px] rounded-xl overflow-hidden shadow-sm select-none">
            {/* After (Completed Sanctuary) */}
            <img
              src={currentProject.image}
              alt="Completed Sanctuary"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Before (Original Raw Framework with grayscale & sepia filter to denote historical state) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentProject.image}
                alt="Original Framework"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-90 sepia-[0.3]"
                style={{ width: '100%', minWidth: '100%' }}
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#1c1c18]/80 text-[#ffffff] text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                Original Historic Framework (Prior to Renovation)
              </div>
            </div>

            <div className="absolute top-4 right-4 px-3 py-1 rounded bg-[#25160e]/85 text-[#fcf9f2] text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
              Completed Mindful Living
            </div>

            {/* Slider Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#ffffff] shadow-lg cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-[#fcf9f2] text-[#25160e] shadow-xl flex items-center justify-center text-[13px] font-bold border border-[#3c2a21]/20">
                ↔
              </div>
            </div>

            {/* Hidden native slider for touch and mouse dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
              aria-label="Before and after slider"
            />
          </div>
          <span className="text-[11px] text-[#4f4540]/70 text-center mt-2">
            Drag the slider horizontally to view the structural conservation and restorative transformation.
          </span>
        </div>
      )}

      {/* Spatial Dimensions & Blueprint Overview */}
      {activeViewMode === 'spatial' && (
        <div className="p-5 sm:p-6 rounded-xl bg-[#f1eee7] border border-[#3c2a21]/5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif-luxury text-[20px] text-[#25160e] font-normal">
              Spatial Program & Floor Allocations
            </h3>
            <span className="text-[11px] text-[#5c614d] font-semibold uppercase tracking-wider">
              Total {currentProject.footprint}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {currentProject.dimensions.map((dim, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#fcf9f2] border border-[#3c2a21]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#e5e2db] text-[#25160e] flex items-center justify-center text-[11px] font-semibold shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="font-semibold text-[14px] text-[#25160e]">
                    {dim.room}
                  </span>
                </div>
                <span className="text-[12px] text-[#4f4540]/90">
                  {dim.details}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Structural Challenge & Solution Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-5 rounded-xl bg-[#f1eee7] border border-[#3c2a21]/5 flex flex-col">
          <div className="flex items-center gap-2 mb-2 text-[#5c614d]">
            <span className="material-symbols-outlined text-[19px]">troubleshoot</span>
            <span className="text-[11px] uppercase tracking-wider font-semibold">Architectural Challenge</span>
          </div>
          <p className="text-[13px] text-[#4f4540] leading-relaxed">
            {currentProject.challenge}
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[#f1eee7] border border-[#3c2a21]/5 flex flex-col">
          <div className="flex items-center gap-2 mb-2 text-[#5c614d]">
            <span className="material-symbols-outlined text-[19px]">verified</span>
            <span className="text-[11px] uppercase tracking-wider font-semibold">Artisan Resolution</span>
          </div>
          <p className="text-[13px] text-[#4f4540] leading-relaxed">
            {currentProject.solution}
          </p>
        </div>
      </div>

      {/* Tactile Material Palette & Artisan Note */}
      <div className="p-5 sm:p-6 rounded-xl bg-[#f6f3ec] border border-[#3c2a21]/5 mb-8">
        <h3 className="font-serif-luxury text-[20px] text-[#25160e] font-normal mb-3">
          Tactile Material Palette
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {currentProject.materials.map((m, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-[#fcf9f2] border border-[#3c2a21]/5 flex flex-col justify-between"
            >
              <span className="text-[10px] text-[#5c614d] font-semibold uppercase tracking-wider">
                Material 0{idx + 1}
              </span>
              <span className="text-[12px] font-semibold text-[#25160e] mt-1 leading-snug">
                {m}
              </span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-[#e0e5cc]/30 border border-[#5c614d]/20 flex items-start gap-3">
          <span className="material-symbols-outlined text-[#5c614d] text-[20px] shrink-0 mt-0.5">
            format_quote
          </span>
          <p className="text-[12px] text-[#1c1c18] italic leading-relaxed">
            "{currentProject.artisanNote}"
          </p>
        </div>
      </div>

      {/* Inquiry CTA */}
      <div className="p-6 rounded-xl bg-[#25160e] text-[#ffffff] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h3 className="font-serif-luxury text-[22px] font-normal text-[#fcf9f2] mb-1">
            Commission a Sanctuary of Similar Caliber
          </h3>
          <p className="text-[13px] text-[#e5e2db]/80 max-w-md">
            Every project begins with a 45-minute discovery consultation with our founding partners.
          </p>
        </div>
        <button
          onClick={onBookConsultation}
          className="px-6 py-3 rounded-lg bg-[#fcf9f2] text-[#25160e] text-[12px] font-semibold uppercase tracking-wider hover:bg-[#e5e2db] transition-colors shrink-0 shadow-sm cursor-pointer"
        >
          Book Discovery Call
        </button>
      </div>
    </div>
  );
};
