import React, { useState } from 'react';

interface ServicesScreenProps {
  onBookConsultation: () => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ onBookConsultation }) => {
  const [sqft, setSqft] = useState<number>(2500);
  const [serviceScope, setServiceScope] = useState<'full' | 'interior' | 'pavilion'>('full');
  const [finishGrade, setFinishGrade] = useState<'bespoke' | 'masterwork'>('bespoke');

  // Interactive Commission Estimation
  const calculateEstimate = () => {
    let baseRate = serviceScope === 'full' ? 85 : serviceScope === 'interior' ? 60 : 110;
    if (finishGrade === 'masterwork') baseRate *= 1.35;
    const estTotal = sqft * baseRate;
    const months = serviceScope === 'full' ? Math.round(sqft / 450) + 4 : Math.round(sqft / 600) + 3;
    const artisans = serviceScope === 'full' ? 8 : 5;
    return {
      range: `$${(estTotal * 0.9 / 1000).toFixed(0)}k – $${(estTotal * 1.15 / 1000).toFixed(0)}k`,
      timeline: `${months} – ${months + 3} Months`,
      artisans: `${artisans} Certified Master Joiners & Plasterers`
    };
  };

  const estimate = calculateEstimate();

  const services = [
    {
      num: '01',
      title: 'Interior Architecture & Spatial Flow',
      subtitle: 'Spatial Paucity (Ma) & Structural Clarity',
      description: 'Re-engineering residential boundaries, partition flows, and natural lighting channels to evoke effortless harmony, acoustic silence, and contemplative serenity.',
      deliverables: ['Custom floor plans & CAD documentation', 'Acoustic & circadian lighting strategy', '3D tactile renders & light studies']
    },
    {
      num: '02',
      title: 'Bespoke Joinery & Architectural Millwork',
      subtitle: 'Slow-Grown Timber & Pinned Craftsmanship',
      description: 'Commissioning custom-milled cabinetry, hidden pocket doors, platform beds, and monolithic timber tables crafted by heritage Scandinavian and Japanese woodworkers.',
      deliverables: ['1:1 joinery fabrication drawings', 'Hand-selected timber slab curation', 'Integrated concealed lighting reveals']
    },
    {
      num: '03',
      title: 'Tactile Material Sourcing & Finishes',
      subtitle: 'Earth, Stone, Mineral Plaster & Raw Flax',
      description: 'Exclusive sourcing of natural materials that age with grace: slaked lime plaster, honed unsealed travertine, handwoven rush tatami, and untreated Belgian linen.',
      deliverables: ['Physical tactile sample board', 'Breathability & thermal mass audits', 'Zero-VOC eco-finish protocols']
    },
    {
      num: '04',
      title: 'Turnkey Commission Direction',
      subtitle: 'Artisan Supervision from Demolition to Inhabitation',
      description: 'On-site direction of heritage plasterers, carpenters, and stonemasons to guarantee fidelity to the architectural vision without compromise.',
      deliverables: ['Weekly artisan progress reports', 'Direct procurement administration', 'Final white-glove handover & scent ritual']
    }
  ];

  const processSteps = [
    { step: 'Phase 01', title: 'Discovery & Spatial Audit', time: 'Weeks 1–3', desc: 'In-depth lifestyle audit, light trajectory mapping, and spatial orientation analysis.' },
    { step: 'Phase 02', title: 'Tactile Concept & Material Board', time: 'Weeks 4–8', desc: 'Physical swatch curation, spatial 3D visualization, and structural detailing.' },
    { step: 'Phase 03', title: 'Joinery Fabrication & Site Craft', time: 'Weeks 9–22', desc: 'Artisan workshop carpentry, slaked lime troweling, and precision stone setting.' },
    { step: 'Phase 04', title: 'Sanctuary Handover & Living In', time: 'Final Week', desc: 'Acoustic calibration, lighting balance, bespoke furnishings placement, and keys.' },
  ];

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-24">
      {/* Intro Header */}
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] uppercase tracking-widest text-[#5c614d] font-semibold">
            Architectural Services
          </span>
          <span className="text-[11px] text-[#4f4540]/60 font-mono">
            Bespoke Residential Direction
          </span>
        </div>
        <h1 className="font-serif-luxury text-[32px] sm:text-[40px] text-[#25160e] font-normal leading-tight">
          Crafting Living Sanctuaries
        </h1>
        <p className="text-[15px] text-[#4f4540] mt-2 leading-relaxed max-w-2xl">
          We oversee every facet of interior architecture and material curation, ensuring your home becomes an enduring sanctuary of sensory calm.
        </p>
      </div>

      {/* 4 Core Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {services.map((svc) => (
          <div
            key={svc.num}
            className="p-6 rounded-xl bg-[#f1eee7] border border-[#3c2a21]/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-serif-luxury text-[22px] text-[#5c614d] font-normal">
                  {svc.num}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#4f4540]/70 font-semibold">
                  Artisan Service
                </span>
              </div>
              <h2 className="font-serif-luxury text-[20px] text-[#25160e] font-normal mb-1">
                {svc.title}
              </h2>
              <span className="text-[12px] text-[#5c614d] font-semibold block mb-3">
                {svc.subtitle}
              </span>
              <p className="text-[13px] text-[#4f4540] leading-relaxed mb-4">
                {svc.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#3c2a21]/5">
              <span className="text-[11px] uppercase tracking-wider text-[#25160e] font-semibold block mb-1.5">
                Key Deliverables
              </span>
              <ul className="flex flex-col gap-1 text-[12px] text-[#4f4540]">
                {svc.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#5c614d]" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* The 4-Phase Commission Roadmap */}
      <div className="p-6 sm:p-8 rounded-xl bg-[#f6f3ec] border border-[#3c2a21]/5 mb-10">
        <div className="flex flex-col mb-6">
          <span className="text-[10px] uppercase tracking-widest text-[#5c614d] font-semibold mb-1">
            Methodology
          </span>
          <h2 className="font-serif-luxury text-[24px] sm:text-[28px] text-[#25160e] font-normal">
            The Commission Roadmap
          </h2>
          <p className="text-[13px] text-[#4f4540] mt-1">
            An unhurried, transparent progression from structural intent to finished sanctuary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-[#fcf9f2] border border-[#3c2a21]/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5c614d]">
                    {step.step}
                  </span>
                  <span className="text-[11px] text-[#4f4540]/70 font-mono">
                    {step.time}
                  </span>
                </div>
                <h3 className="font-serif-luxury text-[16px] text-[#25160e] font-medium mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[12px] text-[#4f4540] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Commission & Feasibility Estimator */}
      <div className="p-6 sm:p-8 rounded-xl bg-[#f1eee7] border border-[#3c2a21]/5 mb-10">
        <div className="flex flex-col mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase tracking-widest text-[#5c614d] font-semibold">
              Feasibility Planning
            </span>
          </div>
          <h2 className="font-serif-luxury text-[24px] text-[#25160e] font-normal">
            Commission Investment & Timeline Estimator
          </h2>
          <p className="text-[13px] text-[#4f4540]">
            Calculate estimated artisan allocation and architectural investment based on your property footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Controls */}
          <div className="flex flex-col gap-5">
            {/* Sqft Slider */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-[12px] uppercase tracking-wider text-[#25160e] font-semibold">
                  Interior Footprint
                </label>
                <span className="font-serif-luxury text-[18px] text-[#25160e]">
                  {sqft.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min="800"
                max="8000"
                step="100"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-1.5 bg-[#d3c3bd] rounded-lg appearance-none cursor-pointer accent-[#25160e]"
              />
              <div className="flex justify-between text-[10px] text-[#4f4540]/70 mt-1">
                <span>800 sq.ft (Pied-à-terre)</span>
                <span>8,000 sq.ft (Estate)</span>
              </div>
            </div>

            {/* Scope Selection */}
            <div>
              <label className="text-[12px] uppercase tracking-wider text-[#25160e] font-semibold block mb-2">
                Commission Scope
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'full', label: 'Full Overhaul' },
                  { key: 'interior', label: 'Joinery & Finishes' },
                  { key: 'pavilion', label: 'Pavilion / Spa' },
                ].map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setServiceScope(s.key as any)}
                    className={`py-2 px-2 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer ${
                      serviceScope === s.key
                        ? 'bg-[#25160e] text-[#fcf9f2] border-[#25160e]'
                        : 'bg-[#fcf9f2] text-[#4f4540] border-[#3c2a21]/10 hover:border-[#3c2a21]/30'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Grade */}
            <div>
              <label className="text-[12px] uppercase tracking-wider text-[#25160e] font-semibold block mb-2">
                Artisan Finish Grade
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: 'bespoke', label: 'Bespoke Artisan', desc: 'White oak, lime plaster, travertine' },
                  { key: 'masterwork', label: 'Museum Masterwork', desc: 'Century keyaki timber, bespoke onsen' },
                ].map((g) => (
                  <button
                    key={g.key}
                    type="button"
                    onClick={() => setFinishGrade(g.key as any)}
                    className={`p-2.5 text-left rounded-lg border transition-all cursor-pointer ${
                      finishGrade === g.key
                        ? 'bg-[#25160e] text-[#fcf9f2] border-[#25160e]'
                        : 'bg-[#fcf9f2] text-[#4f4540] border-[#3c2a21]/10 hover:border-[#3c2a21]/30'
                    }`}
                  >
                    <span className="text-[12px] font-semibold block">{g.label}</span>
                    <span className="text-[10px] opacity-80 block">{g.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="p-6 rounded-xl bg-[#fcf9f2] border border-[#3c2a21]/10 shadow-sm flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-[#5c614d] font-semibold mb-3 block">
              Estimated Investment Guidance
            </span>

            <div className="mb-4">
              <span className="text-[11px] text-[#4f4540]/80 block">Ballpark Architectural Investment</span>
              <span className="font-serif-luxury text-[32px] text-[#25160e] font-normal block leading-tight">
                {estimate.range}
              </span>
              <span className="text-[11px] text-[#4f4540]/70 italic">Includes architectural design, custom millwork & finishes</span>
            </div>

            <div className="space-y-3 pt-3 border-t border-[#3c2a21]/10 mb-5">
              <div className="flex justify-between text-[12px]">
                <span className="text-[#4f4540]">Estimated Duration:</span>
                <span className="font-semibold text-[#25160e]">{estimate.timeline}</span>
              </div>
              <div className="flex justify-between text-[12px]">
                <span className="text-[#4f4540]">Dedicated Team:</span>
                <span className="font-semibold text-[#25160e] text-right max-w-[55%]">{estimate.artisans}</span>
              </div>
            </div>

            <button
              onClick={onBookConsultation}
              className="w-full py-3 rounded-lg bg-[#25160e] text-[#fcf9f2] text-[12px] font-semibold uppercase tracking-wider hover:bg-[#3c2a21] transition-transform active:scale-[0.99] text-center shadow-sm cursor-pointer"
            >
              Discuss Your Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
