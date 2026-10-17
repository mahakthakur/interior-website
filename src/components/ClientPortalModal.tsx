import React, { useState } from 'react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation
}) => {
  const [activeTab, setActiveTab] = useState<'status' | 'approvals' | 'messages'>('status');
  const [noteSent, setNoteSent] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');

  if (!isOpen) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage) return;
    setNoteSent(true);
    setQuickMessage('');
    setTimeout(() => setNoteSent(false), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1c1c18]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#fcf9f2] w-full max-w-lg rounded-2xl shadow-2xl border border-[#3c2a21]/10 overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Profile Lockup */}
        <div className="p-5 bg-[#25160e] text-[#fcf9f2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#3c2a21] flex items-center justify-center font-serif-luxury text-[18px] text-[#fbdcce]">
              MK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif-luxury text-[18px] font-normal leading-none">
                  M. &amp; K. Sorenson
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#5c614d] text-[9px] uppercase tracking-wider font-semibold">
                  Active Commission
                </span>
              </div>
              <span className="text-[12px] text-[#dec1b3] mt-1 block">
                Kyoto Machiya II · Higashiyama
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#3c2a21] text-[#dec1b3] flex items-center justify-center hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#3c2a21]/10 bg-[#f1eee7] px-4 pt-2">
          {[
            { key: 'status', label: 'Timeline & Status' },
            { key: 'approvals', label: 'Milestones (2)' },
            { key: 'messages', label: 'Studio Direct' },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key as any)}
              className={`pb-2.5 px-3 text-[12px] font-semibold border-b-2 transition-colors cursor-pointer ${
                activeTab === t.key
                  ? 'border-[#25160e] text-[#25160e]'
                  : 'border-transparent text-[#4f4540] hover:text-[#25160e]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content body */}
        <div className="p-5 overflow-y-auto no-scrollbar flex flex-col gap-4">
          {activeTab === 'status' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#f1eee7] border border-[#3c2a21]/5">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#5c614d] font-semibold">
                    Current Execution Phase
                  </span>
                  <span className="font-mono text-[12px] font-semibold text-[#25160e]">
                    68% Complete
                  </span>
                </div>
                <h4 className="font-serif-luxury text-[18px] text-[#25160e] font-normal mb-1">
                  Phase 03: Precision Joinery & Slaked Lime Troweling
                </h4>
                <p className="text-[12px] text-[#4f4540] leading-relaxed mb-3">
                  Master carpenters in Kyoto are installing the floor-to-ceiling white oak shoji dividers and testing hidden acoustics.
                </p>

                <div className="w-full h-2 rounded-full bg-[#e5e2db] overflow-hidden">
                  <div className="h-full bg-[#5c614d] rounded-full" style={{ width: '68%' }} />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f6f3ec] border border-[#3c2a21]/5 space-y-2 text-[12px]">
                <span className="text-[10px] uppercase tracking-wider text-[#5c614d] font-semibold block">
                  Next Milestone On-Site
                </span>
                <div className="flex items-center justify-between text-[#1c1c18]">
                  <span className="font-semibold">Honed Travertine Tub Delivery:</span>
                  <span className="text-[#5c614d] font-medium">Nov 18, 2026</span>
                </div>
                <div className="flex items-center justify-between text-[#1c1c18]">
                  <span className="font-semibold">Circadian Lighting Calibration:</span>
                  <span className="text-[#5c614d] font-medium">Dec 02, 2026</span>
                </div>
                <div className="flex items-center justify-between text-[#1c1c18]">
                  <span className="font-semibold">Projected Handover Ceremony:</span>
                  <span className="text-[#25160e] font-bold">Jan 14, 2027</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'approvals' && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#f1eee7] border border-[#3c2a21]/5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#ba1a1a] font-semibold">
                    Action Required
                  </span>
                  <span className="text-[11px] text-[#4f4540]">Due Tomorrow</span>
                </div>
                <h4 className="font-serif-luxury text-[16px] text-[#25160e] font-normal">
                  Tea Room Cedar Slat Finish Grade Approval
                </h4>
                <p className="text-[12px] text-[#4f4540]">
                  Kenzo has uploaded two camellia-oil rub options for the south tea nook.
                </p>
                <div className="flex gap-2 mt-2">
                  <button className="px-3 py-1.5 rounded bg-[#25160e] text-[#fcf9f2] text-[11px] font-semibold uppercase hover:bg-[#3c2a21] cursor-pointer">
                    Approve Matte Camellia
                  </button>
                  <button className="px-3 py-1.5 rounded bg-[#e5e2db] text-[#4f4540] text-[11px] font-semibold hover:bg-[#d3c3bd] cursor-pointer">
                    View Studio Samples
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f1eee7] border border-[#3c2a21]/5 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#5c614d] font-semibold">
                    Approved · In Fabrication
                  </span>
                  <span className="text-[11px] text-[#4f4540]">Oct 12</span>
                </div>
                <h4 className="font-serif-luxury text-[15px] text-[#25160e] font-normal">
                  Master Bedroom Unbleached Flax Drapery Weave
                </h4>
                <span className="text-[11px] text-[#4f4540]">Signed off by Maya Sorenson</span>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="flex flex-col gap-3">
              <div className="p-3.5 rounded-lg bg-[#f1eee7] text-[12px] text-[#4f4540] flex flex-col gap-1">
                <div className="flex justify-between items-center text-[#25160e] font-semibold text-[11px]">
                  <span>Kenzo Tanaka · Lead Architect</span>
                  <span className="text-[#4f4540]/70 font-normal">Yesterday 4:15 PM</span>
                </div>
                <p className="leading-relaxed">
                  "The morning light study on the lime plaster walls exceeded our computer models. The soft oat tint casts an extraordinary calm over the courtyard."
                </p>
              </div>

              {noteSent && (
                <div className="p-2.5 rounded bg-[#e0e5cc] text-[#191d0e] text-[11px] font-semibold text-center animate-in fade-in">
                  Message delivered directly to Kenzo Tanaka and Kajsa Lindqvist.
                </div>
              )}

              <form onSubmit={handleSendMessage} className="flex flex-col gap-2 pt-2">
                <textarea
                  rows={2}
                  value={quickMessage}
                  onChange={(e) => setQuickMessage(e.target.value)}
                  placeholder="Inquire with your assigned architectural team..."
                  className="w-full p-2.5 rounded-lg bg-[#f1eee7] border border-[#3c2a21]/15 text-[12px] text-[#1c1c18] focus:outline-none focus:border-[#25160e]"
                />
                <button
                  type="submit"
                  className="py-2 px-4 rounded-lg bg-[#25160e] text-[#fcf9f2] text-[11px] font-semibold uppercase tracking-wider hover:bg-[#3c2a21] self-end cursor-pointer"
                >
                  Send To Studio
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f6f3ec] border-t border-[#3c2a21]/10 flex items-center justify-between">
          <span className="text-[11px] text-[#4f4540]">
            Need another commission?
          </span>
          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="text-[11px] font-semibold text-[#25160e] underline hover:text-[#5c614d] cursor-pointer"
          >
            Start New Discovery Flow
          </button>
        </div>
      </div>
    </div>
  );
};
