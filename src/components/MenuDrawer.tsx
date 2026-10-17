import React from 'react';
import { TabKey } from './BottomNav';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: TabKey) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectTab
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1c1c18]/60 backdrop-blur-sm flex justify-end animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#fcf9f2] w-full max-w-sm h-full shadow-2xl border-l border-[#3c2a21]/10 p-6 flex flex-col justify-between overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#3c2a21]/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-serif-luxury text-[20px] text-[#25160e] font-medium">
                Kroma Studio
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#f1eee7] text-[#4f4540] flex items-center justify-center hover:bg-[#e5e2db] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#5c614d] font-semibold">
              Exploration
            </span>
            {[
              { key: 'home', label: 'Home & Monograph' },
              { key: 'portfolio', label: 'Selected Works' },
              { key: 'case-study', label: 'Architectural Studies' },
              { key: 'services', label: 'Services & Estimator' },
              { key: 'consult', label: 'Book Discovery Call' },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  onSelectTab(item.key as TabKey);
                  onClose();
                }}
                className="text-left font-serif-luxury text-[20px] text-[#25160e] hover:text-[#5c614d] transition-colors flex items-center justify-between py-1 border-b border-[#3c2a21]/5 cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[18px] text-[#4f4540]/60">
                  chevron_right
                </span>
              </button>
            ))}
          </nav>

          {/* Studio Principles (Ma, Shizen, Kanso) */}
          <div className="p-4 rounded-xl bg-[#f1eee7] border border-[#3c2a21]/5 mb-6">
            <span className="text-[10px] uppercase tracking-wider text-[#5c614d] font-semibold block mb-2">
              Founding Principles
            </span>
            <div className="space-y-2 text-[12px]">
              <div>
                <span className="font-semibold text-[#25160e]">Ma (間) · Negative Space:</span>
                <p className="text-[#4f4540]">Valuing the unbuilt void as sacred silence.</p>
              </div>
              <div>
                <span className="font-semibold text-[#25160e]">Shizen (自然) · Naturalness:</span>
                <p className="text-[#4f4540]">Embracing raw grain, unbleached linen, and honest patina.</p>
              </div>
              <div>
                <span className="font-semibold text-[#25160e]">Kanso (簡素) · Simplicity:</span>
                <p className="text-[#4f4540]">Eliminating decorative excess to reveal calm utility.</p>
              </div>
            </div>
          </div>

          {/* Founders Note */}
          <div className="mb-6">
            <span className="text-[10px] uppercase tracking-wider text-[#5c614d] font-semibold block mb-1">
              Founders
            </span>
            <p className="text-[13px] text-[#25160e] font-medium">
              Kajsa Lindqvist (Stockholm) &amp; Kenzo Tanaka (Kyoto)
            </p>
            <p className="text-[12px] text-[#4f4540] mt-0.5">
              Merging Nordic humanism with centuries of Japanese carpentry tradition.
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="pt-4 border-t border-[#3c2a21]/10 text-[11px] text-[#4f4540]">
          <div className="flex justify-between mb-1">
            <span>Kyoto Atelier:</span>
            <span className="text-[#25160e]">Higashiyama-ku, Kyoto</span>
          </div>
          <div className="flex justify-between mb-3">
            <span>Stockholm Studio:</span>
            <span className="text-[#25160e]">Östermalm, Stockholm</span>
          </div>
          <p className="text-[10px] text-[#4f4540]/70">
            © {new Date().getFullYear()} Kroma Studio. All architectural commissions protected under bespoke copyright.
          </p>
        </div>
      </div>
    </div>
  );
};
