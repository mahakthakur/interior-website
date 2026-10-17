import React from 'react';

interface HeaderProps {
  currentTab: string;
  onOpenSearch: () => void;
  onOpenMenu: () => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onOpenSearch,
  onOpenMenu,
  onOpenProfile
}) => {
  const getTabLabel = (tab: string) => {
    switch (tab) {
      case 'home':
        return 'Home';
      case 'portfolio':
        return 'Portfolio';
      case 'case-study':
        return 'Case Study';
      case 'services':
        return 'Services';
      case 'consult':
        return 'Consultation';
      default:
        return 'Studio';
    }
  };

  return (
    <header className="fixed top-0 w-full z-40 bg-[#fcf9f2]/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(60,42,33,0.04)] pt-safe border-b border-[#3c2a21]/5">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Brand Lockup */}
        <div className="flex items-center gap-2.5">
          <img
            alt="Kroma Studio Logo"
            className="h-8 w-auto object-contain shrink-0"
            src="https://lh3.googleusercontent.com/aida/AEtjO1UxlzZMgr4dt8mcuVBMjANa9YW9dIinLrQUcy-p6HvBov2bT8927RVBlL3XZLZNsRs0xNrOAsX2Q2EN7QmfNIgK_quv387qJpUMtu7m2bfEOHcwO5btCujrkNcNHuZuTotIwE4Es3X-jkm7hUv6qLm_kiwBGvVWSNwhWZMTUR9PihT2BObFf3ntRX0giQnuqM6UqdoN5kA3DmuCwTafEpamRK-ipltxaV7FvRSGi7L2zxJm4SVHT6DaYW8"
          />
          <div className="flex flex-col">
            <span className="font-serif-luxury text-[20px] tracking-tight text-[#25160e] leading-none font-medium">
              Kroma Studio
            </span>
            <span className="text-[10px] text-[#4f4540]/80 tracking-widest uppercase font-semibold mt-0.5">
              {getTabLabel(currentTab)}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={onOpenSearch}
            aria-label="Search and Inquire"
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#4f4540] hover:text-[#25160e] hover:bg-[#f1eee7] transition-colors"
          >
            <span className="material-symbols-outlined text-[21px]">search</span>
          </button>
          <button
            onClick={onOpenMenu}
            aria-label="Menu & Studio Principles"
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#4f4540] hover:text-[#25160e] hover:bg-[#f1eee7] transition-colors"
          >
            <span className="material-symbols-outlined text-[21px]">menu</span>
          </button>
          <button
            onClick={onOpenProfile}
            aria-label="Client Portal"
            className="w-8 h-8 rounded-full bg-[#25160e] flex items-center justify-center text-[#ffffff] ml-1 shadow-sm hover:bg-[#3c2a21] transition-transform active:scale-95"
          >
            <span className="material-symbols-outlined text-[17px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
