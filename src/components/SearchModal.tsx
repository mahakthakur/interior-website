import React, { useState } from 'react';
import { PROJECTS, MATERIAL_SWATCHES, Project, MaterialSwatch } from '../data/projects';
import { TabKey } from './BottomNav';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject: (projectId: string) => void;
  onSelectMaterial: (material: MaterialSwatch) => void;
  onSelectTab: (tab: TabKey) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onOpenProject,
  onSelectMaterial,
  onSelectTab
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase()) ||
      p.materials.some((m) => m.toLowerCase().includes(query.toLowerCase())) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredMaterials = MATERIAL_SWATCHES.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.sub.toLowerCase().includes(query.toLowerCase()) ||
      m.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1c1c18]/60 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#fcf9f2] w-full max-w-xl rounded-xl shadow-2xl border border-[#3c2a21]/10 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#3c2a21]/10 flex items-center gap-3 bg-[#f6f3ec]">
          <span className="material-symbols-outlined text-[#4f4540] text-[22px]">
            search
          </span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, materials (e.g. travertine, oak), or locations..."
            className="flex-1 bg-transparent text-[15px] text-[#1c1c18] placeholder-[#4f4540]/60 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#4f4540] text-[13px] hover:text-[#25160e] cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#e5e2db] text-[#4f4540] flex items-center justify-center hover:bg-[#d3c3bd] transition-colors cursor-pointer text-xs"
          >
            ✕
          </button>
        </div>

        {/* Results Container */}
        <div className="p-5 overflow-y-auto no-scrollbar flex flex-col gap-5">
          {/* Quick Shortcuts if empty */}
          {!query && (
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#5c614d] font-semibold block mb-2">
                Popular Inquiries
              </span>
              <div className="flex flex-wrap gap-2">
                {['Kyoto Residence', 'White Oak', 'Lime Plaster', 'Travertine', 'Archipelago Haven', 'Tea Pavilion'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full bg-[#f1eee7] text-[12px] text-[#25160e] hover:bg-[#e5e2db] transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects Results */}
          {filteredProjects.length > 0 && (
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#5c614d] font-semibold block mb-2">
                Sanctuaries & Architectural Works ({filteredProjects.length})
              </span>
              <div className="space-y-2">
                {filteredProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onClose();
                      onOpenProject(p.id);
                    }}
                    className="p-3 rounded-lg bg-[#f1eee7] hover:bg-[#e5e2db] flex items-center justify-between cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.title}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div>
                        <h4 className="font-serif-luxury text-[15px] text-[#25160e] font-normal group-hover:text-[#5c614d]">
                          {p.title}
                        </h4>
                        <span className="text-[11px] text-[#4f4540]">
                          {p.location} · {p.footprint}
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#4f4540] text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Materials Results */}
          {filteredMaterials.length > 0 && (
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#5c614d] font-semibold block mb-2">
                Tactile Materials ({filteredMaterials.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredMaterials.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => {
                      onClose();
                      onSelectMaterial(m);
                    }}
                    className="p-3 rounded-lg bg-[#f1eee7] hover:bg-[#e5e2db] flex items-center gap-3 cursor-pointer transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#e5e2db] flex items-center justify-center text-[#25160e] shrink-0">
                      <span className="material-symbols-outlined text-[18px]">
                        {m.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-[13px] font-semibold text-[#25160e]">
                        {m.name}
                      </h4>
                      <span className="text-[10px] text-[#4f4540] block">
                        {m.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredProjects.length === 0 && filteredMaterials.length === 0 && query && (
            <div className="py-8 text-center text-[#4f4540]">
              <span className="material-symbols-outlined text-[32px] text-[#d3c3bd] mb-2 block">
                search_off
              </span>
              <p className="text-[14px]">No exact matches found for "{query}".</p>
              <button
                onClick={() => {
                  onClose();
                  onSelectTab('consult');
                }}
                className="mt-3 text-[12px] font-semibold text-[#25160e] underline"
              >
                Inquire directly with our architectural team →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
