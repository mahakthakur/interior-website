import React, { useState } from 'react';
import { MATERIAL_SWATCHES } from '../data/projects';

export const ConsultScreen: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [scope, setScope] = useState<string>('Full Private Residence');
  const [location, setLocation] = useState<string>('Kyoto, Japan');
  const [footprint, setFootprint] = useState<string>('3,000 sq.ft');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(['White Oak', 'Lime Plaster']);
  const [selectedDate, setSelectedDate] = useState<string>('2026-11-05');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM (JST / CET)');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const availableDates = [
    { date: '2026-11-05', label: 'Thu, Nov 5' },
    { date: '2026-11-06', label: 'Fri, Nov 6' },
    { date: '2026-11-09', label: 'Mon, Nov 9' },
    { date: '2026-11-12', label: 'Thu, Nov 12' },
  ];

  const availableTimes = [
    '09:00 AM (Tokyo / Stockholm Sync)',
    '11:30 AM (Tokyo / Stockholm Sync)',
    '02:00 PM (Tokyo / Stockholm Sync)',
    '04:30 PM (Tokyo / Stockholm Sync)',
  ];

  const toggleMaterial = (name: string) => {
    if (selectedMaterials.includes(name)) {
      if (selectedMaterials.length > 1) {
        setSelectedMaterials(selectedMaterials.filter((m) => m !== name));
      }
    } else {
      setSelectedMaterials([...selectedMaterials, name]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) {
      alert('Please provide your name and email to confirm the discovery call.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleDownloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Kroma Studio//Discovery Consultation//EN
BEGIN:VEVENT
SUMMARY:Kroma Studio · Architectural Discovery Call
DESCRIPTION:Discovery consultation with founding partners Kajsa Lindqvist & Kenzo Tanaka.\\nProject: ${scope}\\nFootprint: ${footprint}\\nLocation: ${location}
DTSTART:20261105T010000Z
DTEND:20261105T014500Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'kroma-studio-discovery-call.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col w-full max-w-2xl mx-auto px-4 sm:px-6 py-10 pb-24 text-center items-center">
        <div className="w-16 h-16 rounded-full bg-[#e0e5cc] text-[#191d0e] flex items-center justify-center mb-5 shadow-sm">
          <span className="material-symbols-outlined text-[32px]">check</span>
        </div>

        <span className="text-[10px] uppercase tracking-widest text-[#5c614d] font-semibold mb-2">
          Commission Discovery Scheduled
        </span>

        <h1 className="font-serif-luxury text-[32px] sm:text-[38px] text-[#25160e] font-normal mb-3">
          We Await Our Conversation
        </h1>

        <p className="text-[14px] text-[#4f4540] max-w-md leading-relaxed mb-8">
          Thank you, <span className="font-semibold text-[#25160e]">{clientName}</span>. A calendar invitation and preliminary architectural dossier have been transmitted to <span className="font-semibold text-[#25160e]">{clientEmail}</span>.
        </p>

        {/* Confirmation Summary Card */}
        <div className="w-full text-left p-6 rounded-xl bg-[#f1eee7] border border-[#3c2a21]/5 mb-8 shadow-sm">
          <h2 className="text-[11px] uppercase tracking-wider text-[#5c614d] font-semibold mb-3">
            Appointment Details
          </h2>

          <div className="space-y-3 text-[13px]">
            <div className="flex justify-between border-b border-[#3c2a21]/5 pb-2">
              <span className="text-[#4f4540]">Date & Slot:</span>
              <span className="font-semibold text-[#25160e]">{selectedDate} · {selectedTime}</span>
            </div>
            <div className="flex justify-between border-b border-[#3c2a21]/5 pb-2">
              <span className="text-[#4f4540]">Commission Scope:</span>
              <span className="font-semibold text-[#25160e]">{scope}</span>
            </div>
            <div className="flex justify-between border-b border-[#3c2a21]/5 pb-2">
              <span className="text-[#4f4540]">Property Location:</span>
              <span className="font-semibold text-[#25160e]">{location} ({footprint})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#4f4540]">Selected Materials:</span>
              <span className="font-semibold text-[#25160e]">{selectedMaterials.join(', ')}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <button
            onClick={handleDownloadICS}
            className="flex-1 py-3 px-4 rounded-lg bg-[#25160e] text-[#fcf9f2] text-[12px] font-semibold uppercase tracking-wider hover:bg-[#3c2a21] transition-transform active:scale-95 shadow-sm cursor-pointer flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
            <span>Download Calendar Event</span>
          </button>

          <button
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
            }}
            className="py-3 px-5 rounded-lg bg-[#f1eee7] text-[#4f4540] text-[12px] font-semibold hover:bg-[#e5e2db] transition-colors cursor-pointer"
          >
            Modify Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto px-4 sm:px-6 py-6 pb-24">
      {/* Header Intro */}
      <div className="flex flex-col mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] uppercase tracking-widest text-[#5c614d] font-semibold">
            Discovery Consultation
          </span>
          <span className="text-[11px] text-[#4f4540]/60 font-mono">
            Step 0{step} / 04
          </span>
        </div>
        <h1 className="font-serif-luxury text-[30px] sm:text-[36px] text-[#25160e] font-normal leading-tight">
          Initiate Your Commission
        </h1>
        <p className="text-[14px] text-[#4f4540] mt-1 leading-relaxed">
          We dedicate 45 minutes to explore your architectural aspirations, light needs, and tactile sensibilities with our founders.
        </p>
      </div>

      {/* Step Progress Line */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              step >= s ? 'bg-[#25160e]' : 'bg-[#e5e2db]'
            }`}
          />
        ))}
      </div>

      {/* Step 1: Scope & Project Type */}
      {step === 1 && (
        <div className="flex flex-col gap-5 animate-in fade-in">
          <div>
            <h2 className="font-serif-luxury text-[20px] text-[#25160e] font-normal mb-1">
              Select Your Project Typology
            </h2>
            <p className="text-[13px] text-[#4f4540]">
              Which sanctuary category best describes your vision?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'Full Private Residence', desc: 'Complete architectural interior overhaul & joinery', icon: 'cottage' },
              { id: 'Living & Dining Sanctuary', desc: 'Bespoke living hearth, kitchen, and woodcraft', icon: 'living' },
              { id: 'Tea House or Pavilion', desc: 'Contemplative freestanding pavilion or garden room', icon: 'nature' },
              { id: 'Wellness & Onsen Spa', desc: 'Stone baths, cedar cedar saunas, and steam suite', icon: 'hot_tub' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setScope(item.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between h-32 ${
                  scope === item.id
                    ? 'bg-[#25160e] text-[#fcf9f2] border-[#25160e] shadow-sm'
                    : 'bg-[#f1eee7] text-[#1c1c18] border-[#3c2a21]/5 hover:bg-[#e5e2db]'
                }`}
              >
                <span className="material-symbols-outlined text-[24px]">
                  {item.icon}
                </span>
                <div>
                  <span className="text-[14px] font-semibold block">{item.id}</span>
                  <span className={`text-[11px] block mt-0.5 ${scope === item.id ? 'text-[#e5e2db]/80' : 'text-[#4f4540]'}`}>
                    {item.desc}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={() => setStep(2)}
              className="py-3 px-6 rounded-lg bg-[#25160e] text-[#fcf9f2] text-[12px] font-semibold uppercase tracking-wider hover:bg-[#3c2a21] transition-transform active:scale-95 cursor-pointer"
            >
              Next: Location & Scale →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Location & Footprint */}
      {step === 2 && (
        <div className="flex flex-col gap-5 animate-in fade-in">
          <div>
            <h2 className="font-serif-luxury text-[20px] text-[#25160e] font-normal mb-1">
              Location & Spatial Footprint
            </h2>
            <p className="text-[13px] text-[#4f4540]">
              Where will this sanctuary reside?
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#25160e] font-semibold block mb-1.5">
                City / Region & Country
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Kyoto, Japan or Stockholm, Sweden"
                className="w-full p-3 rounded-lg bg-[#f1eee7] border border-[#3c2a21]/15 text-[14px] text-[#1c1c18] focus:outline-none focus:border-[#25160e]"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#25160e] font-semibold block mb-1.5">
                Approximate Footprint
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['1,500 sq.ft', '3,000 sq.ft', '5,000+ sq.ft'].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setFootprint(val)}
                    className={`py-2.5 rounded-lg text-[12px] font-semibold border transition-all cursor-pointer ${
                      footprint === val
                        ? 'bg-[#25160e] text-[#fcf9f2] border-[#25160e]'
                        : 'bg-[#f1eee7] text-[#4f4540] border-[#3c2a21]/10 hover:bg-[#e5e2db]'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => setStep(1)}
              className="py-3 px-5 rounded-lg text-[#4f4540] text-[12px] font-semibold hover:bg-[#e5e2db] transition-colors cursor-pointer"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="py-3 px-6 rounded-lg bg-[#25160e] text-[#fcf9f2] text-[12px] font-semibold uppercase tracking-wider hover:bg-[#3c2a21] transition-transform active:scale-95 cursor-pointer"
            >
              Next: Tactile Palettes →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Tactile Palette Selection */}
      {step === 3 && (
        <div className="flex flex-col gap-5 animate-in fade-in">
          <div>
            <h2 className="font-serif-luxury text-[20px] text-[#25160e] font-normal mb-1">
              Tactile Material Sensibilities
            </h2>
            <p className="text-[13px] text-[#4f4540]">
              Select the natural textures that resonate most with your living ideal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {MATERIAL_SWATCHES.map((swatch) => {
              const isSelected = selectedMaterials.includes(swatch.name);
              return (
                <button
                  key={swatch.id}
                  type="button"
                  onClick={() => toggleMaterial(swatch.name)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between h-36 ${
                    isSelected
                      ? 'bg-[#25160e] text-[#fcf9f2] border-[#25160e] shadow-sm'
                      : 'bg-[#f1eee7] text-[#1c1c18] border-[#3c2a21]/5 hover:bg-[#e5e2db]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-[22px]">
                      {swatch.icon}
                    </span>
                    <span className="text-[11px] font-semibold">
                      {isSelected ? '✓ Selected' : '+ Add'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[14px] font-semibold block">{swatch.name}</span>
                    <span className={`text-[11px] block mt-0.5 ${isSelected ? 'text-[#e5e2db]/80' : 'text-[#4f4540]'}`}>
                      {swatch.sub}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => setStep(2)}
              className="py-3 px-5 rounded-lg text-[#4f4540] text-[12px] font-semibold hover:bg-[#e5e2db] transition-colors cursor-pointer"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="py-3 px-6 rounded-lg bg-[#25160e] text-[#fcf9f2] text-[12px] font-semibold uppercase tracking-wider hover:bg-[#3c2a21] transition-transform active:scale-95 cursor-pointer"
            >
              Next: Schedule & Confirm →
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Schedule Discovery Call & Contact Info */}
      {step === 4 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 animate-in fade-in">
          <div>
            <h2 className="font-serif-luxury text-[20px] text-[#25160e] font-normal mb-1">
              Select Date & Slot with Founders
            </h2>
            <p className="text-[13px] text-[#4f4540]">
              Conversations are conducted via secure private video or in our Kyoto / Stockholm ateliérs.
            </p>
          </div>

          {/* Dates */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-[#25160e] font-semibold block mb-2">
              Available Dates
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {availableDates.map((d) => (
                <button
                  key={d.date}
                  type="button"
                  onClick={() => setSelectedDate(d.date)}
                  className={`p-2.5 rounded-lg text-center border transition-all cursor-pointer ${
                    selectedDate === d.date
                      ? 'bg-[#25160e] text-[#fcf9f2] border-[#25160e]'
                      : 'bg-[#f1eee7] text-[#4f4540] border-[#3c2a21]/10 hover:bg-[#e5e2db]'
                  }`}
                >
                  <span className="text-[12px] font-semibold block">{d.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Times */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-[#25160e] font-semibold block mb-2">
              Consultation Slot
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {availableTimes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTime(t)}
                  className={`p-2.5 rounded-lg text-left border transition-all cursor-pointer ${
                    selectedTime === t
                      ? 'bg-[#25160e] text-[#fcf9f2] border-[#25160e]'
                      : 'bg-[#f1eee7] text-[#4f4540] border-[#3c2a21]/10 hover:bg-[#e5e2db]'
                  }`}
                >
                  <span className="text-[12px] font-medium block">{t}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#25160e] font-semibold block mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Henrik & Maya Lindqvist"
                className="w-full p-2.5 rounded-lg bg-[#f1eee7] border border-[#3c2a21]/15 text-[13px] text-[#1c1c18] focus:outline-none focus:border-[#25160e]"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#25160e] font-semibold block mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="e.g. maya@lindqvist.com"
                className="w-full p-2.5 rounded-lg bg-[#f1eee7] border border-[#3c2a21]/15 text-[13px] text-[#1c1c18] focus:outline-none focus:border-[#25160e]"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] uppercase tracking-wider text-[#25160e] font-semibold block mb-1">
              Architectural Context & Aspirations
            </label>
            <textarea
              rows={3}
              value={clientNotes}
              onChange={(e) => setClientNotes(e.target.value)}
              placeholder="Tell us about the light, surroundings, or particular textures you envision..."
              className="w-full p-2.5 rounded-lg bg-[#f1eee7] border border-[#3c2a21]/15 text-[13px] text-[#1c1c18] focus:outline-none focus:border-[#25160e]"
            />
          </div>

          <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#3c2a21]/5">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="py-3 px-5 rounded-lg text-[#4f4540] text-[12px] font-semibold hover:bg-[#e5e2db] transition-colors cursor-pointer"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="py-3 px-8 rounded-lg bg-[#25160e] text-[#fcf9f2] text-[12px] font-semibold uppercase tracking-wider hover:bg-[#3c2a21] transition-transform active:scale-95 shadow-md cursor-pointer"
            >
              Confirm Discovery Call
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
