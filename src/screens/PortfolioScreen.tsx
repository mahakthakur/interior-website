import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/projects';

interface PortfolioScreenProps {
  onOpenCaseStudy: (projectId: string) => void;
  onBookConsultation: () => void;
}

export const PortfolioScreen: React.FC<PortfolioScreenProps> = ({
  onOpenCaseStudy,
  onBookConsultation
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedQuickview, setSelectedQuickview] = useState<Project | null>(null);

  const categories = [
    { key: 'all', label: 'All Works' },
    { key: 'residential', label: 'Residential' },
    { key: 'tea-sanctuary', label: 'Tea Sanctuaries' },
    { key: 'wellness', label: 'Wellness' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-20">
      {/* Header Monograph intro */}
      <div className="flex flex-col mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] uppercase tracking-widest text-[#5c614d] font-semibold">
            Archive of Works
          </span>
          <span className="text-[11px] text-[#4f4540]/60 font-mono">
            {filteredProjects.length} Curated Sanctuaries
          </span>
        </div>
        <h1 className="font-serif-luxury text-[30px] sm:text-[36px] text-[#25160e] font-normal leading-tight">
          Curated Architectural Works
        </h1>
        <p className="text-[14px] text-[#4f4540] mt-1 max-w-xl leading-relaxed">
          Each project is an unhurried, tailor-made dialogue between natural timber, mineral plaster, filtered light, and contemplative stillness.
        </p>
      </div>

      {/* Category Filter Pills (Functional Buttons) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-6">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-[12px] font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#25160e] text-[#fcf9f2] shadow-sm'
                  : 'bg-[#f1eee7] text-[#4f4540] hover:bg-[#e5e2db]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col rounded-xl overflow-hidden bg-[#f1eee7] border border-[#3c2a21]/5 shadow-sm group hover:shadow-md transition-shadow"
          >
            {/* Image Box */}
            <div
              onClick={() => onOpenCaseStudy(project.id)}
              className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#e5e2db] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#fcf9f2]/90 backdrop-blur-md text-[10px] font-semibold text-[#25160e] uppercase tracking-wider shadow-sm">
                {project.categoryLabel}
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#25160e]/80 backdrop-blur-md text-[11px] text-[#fcf9f2] flex items-center gap-1">
                <span>{project.completed}</span>
                <span>·</span>
                <span>{project.footprint}</span>
              </div>
            </div>

            {/* Info Box */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <h2 className="font-serif-luxury text-[22px] text-[#25160e] font-normal group-hover:text-[#5c614d] transition-colors">
                    {project.title}
                  </h2>
                </div>
                <span className="text-[12px] text-[#4f4540]/80 block mb-2.5">
                  {project.location}
                </span>

                <p className="text-[13px] text-[#4f4540] leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tactile Material tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.materials.slice(0, 3).map((mat, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-[#4f4540]/90 bg-[#e5e2db]/70 px-2 py-0.5 rounded text-xs"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-[#3c2a21]/5">
                <button
                  onClick={() => setSelectedQuickview(project)}
                  className="text-[12px] text-[#5c614d] font-semibold hover:text-[#25160e] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  Quick Specs
                </button>

                <button
                  onClick={() => onOpenCaseStudy(project.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25160e] text-[#fcf9f2] text-[11px] font-semibold uppercase tracking-wider hover:bg-[#3c2a21] transition-transform active:scale-95 shadow-sm cursor-pointer"
                >
                  <span>Monograph</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Commission Inquiry Card */}
      <div className="mt-10 p-6 rounded-xl bg-[#f6f3ec] border border-[#3c2a21]/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h3 className="font-serif-luxury text-[20px] text-[#25160e] font-normal mb-1">
            Envisioning Your Sanctuary?
          </h3>
          <p className="text-[13px] text-[#4f4540]">
            We undertake a limited suite of residential and pavilion commissions globally.
          </p>
        </div>
        <button
          onClick={onBookConsultation}
          className="px-5 py-2.5 rounded-lg bg-[#25160e] text-[#fcf9f2] text-[12px] font-semibold uppercase tracking-wider hover:bg-[#3c2a21] transition-colors shrink-0 cursor-pointer shadow-sm"
        >
          Book Discovery Call
        </button>
      </div>

      {/* Quickview Modal */}
      {selectedQuickview && (
        <div
          className="fixed inset-0 z-50 bg-[#1c1c18]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedQuickview(null)}
        >
          <div
            className="bg-[#fcf9f2] rounded-xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#3c2a21]/10 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 bg-[#e5e2db]">
              <img
                src={selectedQuickview.image}
                alt={selectedQuickview.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedQuickview(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1c1c18]/70 text-white flex items-center justify-center hover:bg-[#1c1c18] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-3 bg-[#fcf9f2]/95 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-semibold text-[#25160e]">
                {selectedQuickview.location}
              </div>
            </div>

            <div className="p-6 overflow-y-auto no-scrollbar flex flex-col gap-4">
              <div>
                <h3 className="font-serif-luxury text-[24px] text-[#25160e] font-normal">
                  {selectedQuickview.title}
                </h3>
                <p className="text-[13px] text-[#4f4540] mt-1 leading-relaxed">
                  {selectedQuickview.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-[#f1eee7] text-center border border-[#3c2a21]/5">
                <div>
                  <span className="text-[10px] uppercase text-[#4f4540]/70 font-semibold block">Footprint</span>
                  <span className="text-[12px] font-semibold text-[#25160e]">{selectedQuickview.footprint}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#4f4540]/70 font-semibold block">Scope</span>
                  <span className="text-[12px] font-semibold text-[#25160e]">{selectedQuickview.scope}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#4f4540]/70 font-semibold block">Year</span>
                  <span className="text-[12px] font-semibold text-[#25160e]">{selectedQuickview.completed}</span>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-[#5c614d] font-semibold mb-1">
                  Architectural Challenge & Resolution
                </h4>
                <p className="text-[13px] text-[#4f4540] leading-relaxed">
                  {selectedQuickview.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-[#5c614d] font-semibold mb-1.5">
                  Artisan Materials
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedQuickview.materials.map((m, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-1 rounded bg-[#f1eee7] text-[#25160e] border border-[#3c2a21]/5"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const id = selectedQuickview.id;
                    setSelectedQuickview(null);
                    onOpenCaseStudy(id);
                  }}
                  className="flex-1 py-2.5 rounded-lg bg-[#25160e] text-[#fcf9f2] text-[12px] font-semibold uppercase tracking-wider hover:bg-[#3c2a21] transition-colors cursor-pointer text-center"
                >
                  Open Full Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
