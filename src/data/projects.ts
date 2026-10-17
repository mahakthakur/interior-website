export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'residential' | 'tea-sanctuary' | 'wellness' | 'joinery';
  categoryLabel: string;
  footprint: string;
  scope: string;
  completed: string;
  description: string;
  longDescription: string;
  image: string;
  secondaryImages?: string[];
  materials: string[];
  dimensions: {
    room: string;
    details: string;
  }[];
  challenge: string;
  solution: string;
  artisanNote: string;
}

export interface MaterialSwatch {
  id: string;
  name: string;
  sub: string;
  icon: string;
  origin: string;
  sustainability: string;
  texture: string;
  description: string;
  acousticRating: string;
}

export const MATERIAL_SWATCHES: MaterialSwatch[] = [
  {
    id: 'white-oak',
    name: 'White Oak',
    sub: 'Sustainably Milled Timber',
    icon: 'nature',
    origin: 'Hokkaido & Småland certified forests',
    sustainability: 'FSC-Certified, zero VOC oil finish',
    texture: 'Wire-brushed open grain with natural matte soap-wash treatment',
    description: 'Slow-grown Nordic and Japanese white oak provides unparalleled structural stability, warm ambient acoustics, and a soft honeyed patina that deepens gracefully with decades of living.',
    acousticRating: 'NRC 0.45 (perforated acoustic backing available)'
  },
  {
    id: 'lime-plaster',
    name: 'Lime Plaster',
    sub: 'Hand-Troweled Mineral',
    icon: 'brush',
    origin: 'Natural limestone slaked in Kyoto tradition',
    sustainability: '100% breathable mineral, naturally mold & humidity regulating',
    texture: 'Tactile trowel striations with micro-honed velvety finish',
    description: 'Slaked lime mixed with fine river sand and powdered marble dust. Applied in three paper-thin coats by certified plaster artisans to refract morning light softly throughout the interior.',
    acousticRating: 'Diffuse light refraction & balanced sound absorption'
  },
  {
    id: 'travertine',
    name: 'Travertine',
    sub: 'Honed Matte Stone',
    icon: 'landscape',
    origin: 'Tivoli quarried sedimentary limestone',
    sustainability: 'Unfilled pore structure with natural organic mineral veins',
    texture: 'Silky honed matte surface preserving natural thermal mass',
    description: 'Selected for its earthy tonal depth and low-luster tactile warmth. Honed dry without resin filler to preserve the honest porosity and ancient geological story of each slab.',
    acousticRating: 'Thermal mass buffer with natural floor radiant compatibility'
  },
  {
    id: 'organic-linen',
    name: 'Organic Linen',
    sub: 'Unbleached Loom Weave',
    icon: 'texture',
    origin: 'Flanders unbleached flax woven in Kyoto',
    sustainability: '100% biodegradable, GOTS organic certified fiber',
    texture: 'Slubbed tactile grain with loose architectural drape',
    description: 'Heavyweight unbleached flax linen engineered for floor-to-ceiling privacy curtains and low-slung seating upholstery. Softens direct sunlight into warm diffuse illumination.',
    acousticRating: 'NRC 0.60 high-frequency sound dampening'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'kyoto-residence',
    title: 'The Kyoto Residence',
    location: 'Kiyomizu, Kyoto',
    category: 'residential',
    categoryLabel: 'Machiya Renovation',
    footprint: '3,200 sq.ft',
    scope: 'Full Renovation',
    completed: '2024',
    description: 'Harmonizing a 90-year-old Machiya framework with Scandi modular kitchen joinery and recessed natural paper lights.',
    longDescription: 'Situated beneath the quiet cedar slopes of Higashiyama, The Kyoto Residence is a preservation masterpiece. We carefully preserved the structural keyaki timber framework while introducing a seamless Japanese-Scandinavian dialogue through custom white oak cabinetry, radiant tatami flooring, and sliding washi screens that welcome the tranquil moss courtyard inside.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFA0UQ4_ebc-5K0dTzeBrKwHwuOqzU4uWkRG1tAmnTgAEpXmBDVuNxYzDwVKpRXrB11xYqOqJc9pxaLAMgRvNbB2JWkzQ1WpYf_lZrFJNbkcz-egPNX4Z5uWZbN_YEhFThgR9loOeSztzOVJwCUkynKCbpUwTjkwCpvjecz0VJzDRTq9T8i2dujtR6gabTRezzr6xK9GYCgTIIJZ7jJhxiX2Ot0dERl-9f4hgTXCFr7VlpBre-alJe',
    materials: ['Sustainably Milled White Oak', 'Kyoto Slaked Lime Plaster', 'Honed Roman Travertine', 'Unbleached Belgian Linen', 'Handmade Echizen Washi'],
    dimensions: [
      { room: 'Master Sanctuary', details: '680 sq.ft · Tatami & Platform Bed · South Garden Aspect' },
      { room: 'Living & Engawa Gallery', details: '1,200 sq.ft · Exposed Timber Vault · Floor-to-Ceiling Shoji' },
      { room: 'Tea Nook & Garden Portico', details: '320 sq.ft · Sunken Fireplace · Moss Garden View' }
    ],
    challenge: 'Preserving the seismically sensitive 90-year-old timber framework while incorporating contemporary radiant heating and minimalist airtight insulation without altering historic aesthetic integrity.',
    solution: 'Artisans dismounted the inner wall sheathing, inserted hidden aero-gel thermal insulation, and reapplied traditional slaked lime plaster mixed with organic straw fiber.',
    artisanNote: 'Keyaki posts and beams were hand-rubbed with natural camellia oil, celebrating their century-old saw marks.'
  },
  {
    id: 'stockholm-haven',
    title: 'Stockholm Archipelago Haven',
    location: 'Vaxholm, Sweden',
    category: 'residential',
    categoryLabel: 'Coastal Sanctuary',
    footprint: '2,850 sq.ft',
    scope: 'Interior Architecture & Millwork',
    completed: '2024',
    description: 'Nordic shoreline living elevated through pale Scandinavian white oak joinery, natural woven linen lighting, and framed Baltic pine horizons.',
    longDescription: 'Perched on the granite bluffs of the Stockholm archipelago, this home invites Nordic coastal stillness. Custom-built white oak cabinetry with recessed continuous finger pulls complements smooth lime-washed walls. An oversized hand-loomed flax pendant anchors the family dining table overlooking the maritime pine forest.',
    image: '/src/assets/images/portfolio_stockholm_haven_1792231724653.jpg',
    materials: ['Pale Nordic White Oak', 'Hand-loomed Flax Linen', 'Matte Fluted Glass', 'Cast River Stone Sink'],
    dimensions: [
      { room: 'Kitchen & Dining Hearth', details: '850 sq.ft · Integrated Milled Oak · Panoramic Pine Vista' },
      { room: 'Lounge Sanctuary', details: '940 sq.ft · Travertine Hearth Bench · Wool Bouclé Seating' },
      { room: 'Reading Gallery', details: '360 sq.ft · Recessed Book Walls · Skylight Daylight' }
    ],
    challenge: 'Maximizing low-angle Nordic winter light while shielding against harsh coastal Baltic gales.',
    solution: 'Triple-glazed minimalist steel apertures paired with lime-plaster light wells bouncing soft indirect daylight across every gathering zone.',
    artisanNote: 'Dining chairs and low benches were custom-turned in Småland from storm-felled Swedish oak.'
  },
  {
    id: 'nara-tea-pavilion',
    title: 'Nara Tea Pavilion',
    location: 'Yoshino, Nara',
    category: 'tea-sanctuary',
    categoryLabel: 'Zen Pavilion',
    footprint: '950 sq.ft',
    scope: 'Bespoke Pavilion Architecture',
    completed: '2023',
    description: 'A contemplative tea pavilion combining blackened cedar eaves, sunken charcoal hearth, and sliding washi partitions onto a sacred moss garden.',
    longDescription: 'Commissioned as a secluded private meditation retreat, the Nara Tea Pavilion explores the wabi-sabi poetry of shadow and time. Tatami mats are framed with aged American walnut, while sliding paper screens soften daylight into an ethereal glow that shifts across unglazed ceramic vessels throughout the tea ritual.',
    image: '/src/assets/images/portfolio_nara_tea_pavilion_1792231725253.jpg',
    materials: ['Yoshino Cedar (Sugi)', 'Aged Black Walnut', 'Hand-Woven Rush Tatami', 'Echizen Mulberry Washi'],
    dimensions: [
      { room: 'Tea Ceremony Room (Chashitsu)', details: '420 sq.ft · 8-Tatami Configuration · Sunken Ro Hearth' },
      { room: 'Preparation Mizuya', details: '180 sq.ft · Bamboo Water Basin · Raw Brass Spigot' },
      { room: 'Engawa Veranda', details: '350 sq.ft · Cedar Planking · Direct Moss Garden Access' }
    ],
    challenge: 'Crafting a completely wood-pinned joinery structure without visible metal fasteners or screws.',
    solution: 'Master carpenters (Miya-daiku) utilized complex traditional mortise-and-tenon joints engineered to flex safely during earth tremors.',
    artisanNote: 'Tatami straw cores were seasoned for twelve months with natural dried mountain rushes from Kumamoto.'
  },
  {
    id: 'kamakura-villa',
    title: 'Kamakura Onsen Sanctuary',
    location: 'Hase, Kamakura',
    category: 'wellness',
    categoryLabel: 'Private Spa & Residence',
    footprint: '4,100 sq.ft',
    scope: 'Turnkey Architectural Design',
    completed: '2024',
    description: 'An understated private wellness retreat centered around a monolithic honed travertine soaking bath framed by cedar battens and bamboo courtyard views.',
    longDescription: 'Designed for a collector of contemporary Japanese ceramics, this Kamakura estate reconciles deep relaxation with architectural austerity. The centerpiece master bath features a massive custom-carved travertine soaking tub nestled into river pebbles with vertical hinoki wood slatting, creating an aromatic cedar steam sanctuary.',
    image: '/src/assets/images/portfolio_kamakura_villa_1792231724801.jpg',
    materials: ['Honed Travertine Monolith', 'Natural Hinoki Cypress', 'Polished River Pebbles', 'Brushed Raw Brass'],
    dimensions: [
      { room: 'Onsen Bath Suite', details: '720 sq.ft · Monolithic Soaking Tub · Rain Shower · Bamboo Courtyard' },
      { room: 'Master Rest Pavilion', details: '1,100 sq.ft · Low Walnut Platform · Silk-wool Rugs' },
      { room: 'Courtyard Engawa', details: '520 sq.ft · Weathered Teak · Reflection Pond' }
    ],
    challenge: 'Managing high humidity and natural steam while preserving natural untreated cypress timber surfaces.',
    solution: 'Custom micro-ventilation concealed in shadow reveals behind the cedar battens with continuous fresh air circulation.',
    artisanNote: 'Travertine tub was carved from a single 6-ton Italian travertine block and hand-honed on site.'
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: "Kroma Studio transformed our home into a deeply tranquil haven. Their eye for tactile surfaces and natural light created an atmosphere we treasure every single morning.",
    author: "M. & K. Sorenson",
    title: "Private Villa · Kyoto",
    initials: "MK",
    stars: 5
  },
  {
    quote: "The seamless integration between Scandinavian functionality and Japanese craft gave our coastal home an enduring soul. Truly an unhurried, mindful collaboration.",
    author: "Astrid Lindholm",
    title: "Archipelago Residence · Vaxholm",
    initials: "AL",
    stars: 5
  },
  {
    quote: "Their reverence for wood grain, lime plaster, and acoustic calm exceeded every expectation. Our guests comment on the palpable sense of peace the moment they cross the threshold.",
    author: "Kenji & Elena Takahashi",
    title: "Hillside Haven · Kamakura",
    initials: "KT",
    stars: 5
  }
];
