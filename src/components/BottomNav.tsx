import React from 'react';

export type TabKey = 'home' | 'portfolio' | 'case-study' | 'services' | 'consult';

interface BottomNavProps {
  currentTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const tabs: { key: TabKey; label: string; icon: string }[] = [
    { key: 'home', label: 'Home', icon: 'cottage' },
    { key: 'portfolio', label: 'Portfolio', icon: 'grid_view' },
    { key: 'case-study', label: 'Case Study', icon: 'auto_stories' },
    { key: 'services', label: 'Services', icon: 'design_services' },
    { key: 'consult', label: 'Consult', icon: 'calendar_today' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 pb-safe bg-[#fcf9f2]/90 backdrop-blur-xl border-t border-[#3c2a21]/5 shadow-[0_-4px_20px_rgba(60,42,33,0.04)]">
      <div className="max-w-md mx-auto flex items-center justify-around h-16 px-1">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => {
                onSelectTab(tab.key);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center flex-1 h-full min-w-[44px] transition-colors ${
                isActive
                  ? 'text-[#25160e] font-semibold'
                  : 'text-[#4f4540]/75 hover:text-[#25160e]'
              }`}
            >
              <span
                className="material-symbols-outlined text-[22px] transition-transform"
                style={{
                  fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"
                }}
              >
                {tab.icon}
              </span>
              <span className="text-[11px] tracking-wide mt-0.5 leading-none">
                {tab.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#5c614d] mt-1" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
