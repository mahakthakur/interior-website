import React, { useState } from 'react';
import { TabKey } from '../components/BottomNav';
import { MATERIAL_SWATCHES, MaterialSwatch, CLIENT_TESTIMONIALS } from '../data/projects';

interface HomeScreenProps {
  onSelectTab: (tab: TabKey) => void;
  onOpenCaseStudy: (projectId: string) => void;
  onSelectMaterial: (material: MaterialSwatch) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectTab,
  onOpenCaseStudy,
  onSelectMaterial
}) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [projectBtnText, setProjectBtnText] = useState('Start Your Project');
  const [isBtnSuccess, setIsBtnSuccess] = useState(false);

  const currentTestimonial = CLIENT_TESTIMONIALS[activeTestimonialIdx];

  const handleStartProject = () => {
    setProjectBtnText('Request Received • Opening Consult...');
    setIsBtnSuccess(true);
    setTimeout(() => {
      onSelectTab('consult');
      setProjectBtnText('Start Your Project');
      setIsBtnSuccess(false);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto pb-12">
      {/* 1. Editorial Hero Section */}
      <section className="relative w-full px-4 sm:px-6 pt-4 pb-6">
        <div className="relative w-full h-[520px] rounded-xl overflow-hidden shadow-sm bg-[#f1eee7]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out hover:scale-105"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQuKwIY8vQh--ZzwOiCj80X81F20SwWvfjaKrVpArVMP_x607rzGp3KfVkjeNP_mVmguCW9tt1aL3riz81QWw0RyaDQX1UCZwhlInKOQMmqCjz3B8DfOqdYvldJdnL5vVuzErUEtbkt5x5QWPSEeKbblabcPxpwxsBnE-Cg1WmOPUyHUROiN1XKuOxB1ps5e6UWM09eoeX6Nchwo3D2dekwz2yOZdF4kHz6Z4uwR2yO-dxhMx-C1jM')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#25160e]/90 via-[#25160e]/40 to-transparent" />
          
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex flex-col justify-end text-[#ffffff]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6f3ec]/20 backdrop-blur-md self-start mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0e5cc]" />
              <span className="text-[10px] uppercase tracking-widest text-[#fcf9f2] font-semibold">
                Bespoke Interiors
              </span>
            </div>

            <h1 className="font-serif-luxury text-[28px] sm:text-[34px] leading-tight text-[#fcf9f2] mb-2 font-normal">
              Harmonious Spaces for Mindful Living
            </h1>

            <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#e5e2db]/90 mb-5 line-clamp-3">
              Award-winning interior architecture marrying Scandinavian warmth with Japanese wabi-sabi simplicity.
            </p>

            <div className="flex flex-col gap-2 w-full">
              <button
                onClick={() => onSelectTab('portfolio')}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-[#fcf9f2] text-[#25160e] text-[12px] font-semibold tracking-wider uppercase transition-colors hover:bg-[#e5e2db] active:scale-[0.99] shadow-sm cursor-pointer"
              >
                <span>Explore Curated Works</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <button
                onClick={() => onSelectTab('consult')}
                className="w-full flex items-center justify-center py-2.5 px-6 rounded-lg bg-transparent text-[#fcf9f2] text-[12px] font-semibold tracking-wider uppercase transition-colors hover:bg-[#fcf9f2]/10 text-center cursor-pointer"
              >
                Book Discovery Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Credibility Ticker */}
      <section className="w-full px-4 sm:px-6 py-4 bg-[#f6f3ec] border-y border-[#3c2a21]/5">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-widest text-[#4f4540]/80 text-center font-semibold">
            Honored in Global Publications
          </span>
          <div className="flex items-center justify-around gap-4 py-1 overflow-x-auto no-scrollbar opacity-85 text-[#1c1c18]">
            <span className="font-serif-luxury text-[15px] tracking-tight whitespace-nowrap">
              Architectural Digest
            </span>
            <span className="w-1 h-1 rounded-full bg-[#d3c3bd] shrink-0" />
            <span className="font-serif-luxury text-[15px] tracking-tight whitespace-nowrap">
              Elle Decor
            </span>
            <span className="w-1 h-1 rounded-full bg-[#d3c3bd] shrink-0" />
            <span className="font-serif-luxury text-[15px] italic tracking-tight whitespace-nowrap">
              Wallpaper*
            </span>
            <span className="w-1 h-1 rounded-full bg-[#d3c3bd] shrink-0" />
            <span className="font-serif-luxury text-[15px] tracking-tight whitespace-nowrap">
              Vogue Living
            </span>
          </div>
        </div>
      </section>

      {/* 3. Studio Philosophy & Tactile Materiality */}
      <section className="w-full px-4 sm:px-6 py-8 flex flex-col">
        <div className="flex items-baseline justify-between mb-1.5">
          <span className="text-[10px] uppercase tracking-widest text-[#5c614d] font-semibold">
            Philosophy
          </span>
          <span className="text-[11px] text-[#4f4540]/70 font-mono">01 / 04</span>
        </div>

        <h2 className="font-serif-luxury text-[26px] sm:text-[30px] text-[#25160e] mb-2 font-normal leading-tight">
          The Art of Quiet Luxury
        </h2>

        <p className="text-[14px] sm:text-[15px] text-[#4f4540] mb-5 leading-relaxed">
          We conceive unhurried residential sanctuaries rooted in architectural balance, natural patina, and genuine tactile materiality.
        </p>

        {/* Swatches Bento Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {MATERIAL_SWATCHES.map((swatch) => (
            <button
              key={swatch.id}
              onClick={() => onSelectMaterial(swatch)}
              className="p-3.5 rounded-lg bg-[#f1eee7] hover:bg-[#e5e2db] flex flex-col justify-between h-36 relative overflow-hidden group text-left transition-all border border-[#3c2a21]/5 active:scale-[0.98] cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#e5e2db] group-hover:bg-[#fcf9f2] flex items-center justify-center text-[#25160e] mb-2 shadow-sm transition-colors">
                <span className="material-symbols-outlined text-[20px]">{swatch.icon}</span>
              </div>
              <div>
                <span className="text-[13px] font-semibold text-[#25160e] block leading-snug">
                  {swatch.name}
                </span>
                <span className="text-[11px] text-[#4f4540]/80 block leading-tight mt-0.5">
                  {swatch.sub}
                </span>
              </div>
              <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-wider text-[#5c614d] font-semibold">
                Specs ↗
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 4. Featured Project Spotlight */}
      <section className="w-full px-4 sm:px-6 py-7 flex flex-col bg-[#f6f3ec] border-y border-[#3c2a21]/5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#5c614d] font-semibold">
              Selected Work
            </span>
            <h3 className="font-serif-luxury text-[24px] sm:text-[28px] text-[#25160e] font-normal leading-tight">
              The Kyoto Residence
            </h3>
          </div>
          <span className="text-[12px] text-[#4f4540]/80">Kiyomizu, Kyoto</span>
        </div>

        {/* Image Showcase Card */}
        <div
          onClick={() => onOpenCaseStudy('kyoto-residence')}
          className="relative w-full h-80 rounded-xl overflow-hidden bg-[#f1eee7] mb-3 shadow-sm group cursor-pointer"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFA0UQ4_ebc-5K0dTzeBrKwHwuOqzU4uWkRG1tAmnTgAEpXmBDVuNxYzDwVKpRXrB11xYqOqJc9pxaLAMgRvNbB2JWkzQ1WpYf_lZrFJNbkcz-egPNX4Z5uWZbN_YEhFThgR9loOeSztzOVJwCUkynKCbpUwTjkwCpvjecz0VJzDRTq9T8i2dujtR6gabTRezzr6xK9GYCgTIIJZ7jJhxiX2Ot0dERl-9f4hgTXCFr7VlpBre-alJe')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Quick Metrics Overlay */}
          <div className="absolute bottom-3 inset-x-3 bg-[#ffffff]/95 backdrop-blur-md rounded-lg p-3 flex items-center justify-between text-[#1c1c18] shadow-sm border border-[#3c2a21]/5">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#4f4540]/80 font-medium">Footprint</span>
              <span className="text-[12px] text-[#25160e] font-semibold">3,200 sq.ft</span>
            </div>
            <div className="w-[1px] h-6 bg-[#e5e2db]" />
            <div className="flex flex-col">
              <span className="text-[10px] text-[#4f4540]/80 font-medium">Scope</span>
              <span className="text-[12px] text-[#25160e] font-semibold">Full Renovation</span>
            </div>
            <div className="w-[1px] h-6 bg-[#e5e2db]" />
            <div className="flex flex-col">
              <span className="text-[10px] text-[#4f4540]/80 font-medium">Completed</span>
              <span className="text-[12px] text-[#25160e] font-semibold">2024</span>
            </div>
          </div>
        </div>

        {/* Detail Row & Link */}
        <div className="flex items-center justify-between py-1">
          <p className="text-[13px] text-[#4f4540] max-w-[78%] leading-relaxed">
            Harmonizing a 90-year-old Machiya framework with Scandi modular kitchen joinery and recessed natural paper lights.
          </p>
          <button
            onClick={() => onOpenCaseStudy('kyoto-residence')}
            aria-label="View Kyoto Residence Case Study"
            className="w-10 h-10 rounded-full bg-[#25160e] flex items-center justify-center text-[#ffffff] transition-all hover:bg-[#3c2a21] active:scale-95 shrink-0 shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[19px]">north_east</span>
          </button>
        </div>
      </section>

      {/* 5. Client Praise Testimonial */}
      <section className="w-full px-4 sm:px-6 py-8 flex flex-col items-center">
        <div className="w-full rounded-xl bg-[#f1eee7] p-5 sm:p-6 shadow-sm flex flex-col relative overflow-hidden border border-[#3c2a21]/5">
          {/* Decorative Organic Arc SVG */}
          <svg
            className="absolute top-0 right-0 w-32 h-32 opacity-10 text-[#25160e] pointer-events-none"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <circle cx="80" cy="20" r="70" />
          </svg>

          <div className="flex items-center justify-between mb-3 z-10">
            <div className="flex items-center gap-1 text-[#5c614d]">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[17px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              {CLIENT_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    activeTestimonialIdx === idx
                      ? 'bg-[#25160e] w-4'
                      : 'bg-[#d3c3bd] hover:bg-[#81756f]'
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <blockquote className="font-serif-luxury text-[17px] sm:text-[19px] text-[#25160e] mb-4 leading-relaxed font-normal italic z-10">
            “{currentTestimonial.quote}”
          </blockquote>

          <div className="flex items-center gap-3 mt-auto z-10">
            <div className="w-10 h-10 rounded-full bg-[#3c2a21] flex items-center justify-center text-[#ffffff] font-serif-luxury text-[15px] font-medium shrink-0">
              {currentTestimonial.initials}
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] text-[#25160e] font-semibold">
                {currentTestimonial.author}
              </span>
              <span className="text-[11px] text-[#4f4540]/80">
                {currentTestimonial.title}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Teaser Banner */}
      <section className="w-full px-4 sm:px-6 pb-6">
        <div className="w-full rounded-xl bg-[#25160e] p-6 sm:p-8 text-[#ffffff] flex flex-col items-center text-center relative overflow-hidden shadow-md">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#e0e5cc]/15 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#fbdcce]/15 blur-2xl pointer-events-none" />

          <span className="text-[10px] uppercase tracking-widest text-[#fbdcce] mb-2 font-semibold z-10">
            Initiate Your Journey
          </span>

          <h3 className="font-serif-luxury text-[24px] sm:text-[28px] text-[#fcf9f2] mb-2 font-normal leading-tight z-10 max-w-md">
            Ready to Breathe Stillness Into Your Space?
          </h3>

          <p className="text-[13px] sm:text-[14px] text-[#e5e2db]/80 mb-5 max-w-sm leading-relaxed z-10">
            We accept a limited number of commissions each season to ensure uncompromising artisan attention.
          </p>

          <button
            onClick={handleStartProject}
            className={`w-full max-w-sm py-3 px-6 rounded-lg text-[12px] font-semibold tracking-wider uppercase transition-all duration-300 active:scale-[0.98] shadow-sm cursor-pointer z-10 ${
              isBtnSuccess
                ? 'bg-[#e0e5cc] text-[#191d0e]'
                : 'bg-[#fcf9f2] text-[#25160e] hover:bg-[#e5e2db]'
            }`}
          >
            {projectBtnText}
          </button>

          <span className="text-[10px] text-[#e5e2db]/60 mt-3 z-10">
            Typically responds within 24 business hours
          </span>
        </div>
      </section>
    </div>
  );
};
