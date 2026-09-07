import { ServiceItem, ReviewItem, RateItem } from './types';

export const PATNA_PHONE_DISPLAY = "+91 6206366989";
export const PATNA_PHONE_TEL = "tel:+916206366989";
export const PATNA_WHATSAPP_NUMBER = "916206366989";

export const PATNA_LOCALITIES = [
  "Boring Road",
  "Kankarbagh",
  "Bailey Road",
  "Raja Bazar",
  "Ashiana Nagar",
  "Danapur / Saguna More",
  "Patliputra Colony",
  "Fraser Road / Exhibition Rd",
  "Rajendra Nagar",
  "Anisabad",
  "SK Puri",
  "Gola Road",
  "Other Area in Patna"
];

export const TIME_SLOTS = [
  "⚡ Within Next 60 Mins (Urgent / Emergency)",
  "☀️ Today: Morning (9:00 AM - 12:00 PM)",
  "🌤️ Today: Afternoon (1:00 PM - 4:00 PM)",
  "🌆 Today: Evening (5:00 PM - 8:30 PM)",
  "📅 Tomorrow: Morning (9:00 AM - 12:00 PM)",
  "📅 Tomorrow: Afternoon (1:00 PM - 4:00 PM)"
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ac-hvac',
    name: 'AC & HVAC Servicing',
    category: 'ac',
    categoryLabel: 'Cooling & HVAC',
    startingPrice: '₹399',
    popular: true,
    highlight: 'Deep Jet Foam Wash & Gas Refill',
    features: [
      'Power Jet Pump Foam Wash (Indoor + Outdoor)',
      'Gas Leak Detection & Genuine Refill',
      'Compressor & Capacitor Replacement',
      'Uninstallation & Relocation Support'
    ],
    iconName: 'Wind'
  },
  {
    id: 'electrical',
    name: 'Electrical Repairs & Wiring',
    category: 'electrical',
    categoryLabel: 'Electricians',
    startingPrice: '₹79',
    popular: false,
    highlight: 'Fans, MCB & Inverter Setup',
    features: [
      'Ceiling Fan & Exhaust Installation',
      'MCB Tripping & Short Circuit Resolution',
      'Complete Inverter & Battery Wiring',
      'Switchboard & Heavy Appliance Points'
    ],
    iconName: 'Zap'
  },
  {
    id: 'plumbing',
    name: 'Plumbing & Water Systems',
    category: 'plumbing',
    categoryLabel: 'Plumbing',
    startingPrice: '₹99',
    popular: false,
    highlight: 'Leak Fix, Taps & Tank Cleaning',
    features: [
      'Taps, Faucets & Valve Replacement',
      'Concealed Pipe Leakage Detection',
      'Motor Pump Installation & Repair',
      'Overhead Rooftop Tank Deep Cleaning'
    ],
    iconName: 'Droplets'
  },
  {
    id: 'appliances',
    name: 'Home Appliance Repair',
    category: 'appliances',
    categoryLabel: 'Appliances',
    startingPrice: '₹199',
    popular: false,
    highlight: 'RO, Washing Machine & Geyser',
    features: [
      'RO Water Purifier Filter & Membrane Care',
      'Fully/Semi-Automatic Washing Machine',
      'Instant & Storage Water Geyser Repair',
      'Microwave Oven & Refrigerator Fix'
    ],
    iconName: 'Cpu'
  },
  {
    id: 'cleaning',
    name: 'Deep Cleaning & Sanitization',
    category: 'cleaning',
    categoryLabel: 'Cleaning',
    startingPrice: '₹499',
    popular: true,
    highlight: 'Bathroom, Kitchen & Sofa Wash',
    features: [
      'Deep Bathroom Descaling & Tile Scrubbing',
      'Modular Kitchen Degreasing & Chimney Cleaning',
      'Fabric Sofa & Mattress Vacuum Shampooing',
      'Complete Full-Home Move-in Deep Clean'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'cctv',
    name: 'CCTV Installation & Security',
    category: 'cctv',
    categoryLabel: 'Security',
    startingPrice: '₹299',
    popular: false,
    highlight: 'Setup, Mobile Sync & Troubleshooting',
    features: [
      'IP / HD Camera Doorstep Fitting',
      'DVR / NVR Hard Disk Setup & Cable Routing',
      'Live Mobile Remote Viewing Setup',
      'Signal Loss & Night Vision Troubleshooting'
    ],
    iconName: 'Camera'
  },
  {
    id: 'auto',
    name: 'Car & Bike Care & Denting/Painting',
    category: 'auto',
    categoryLabel: 'Auto Care',
    startingPrice: '₹349',
    popular: true,
    highlight: 'Doorstep Rubbing, Wash & Panel Paint',
    features: [
      'Doorstep Waterless Eco Foam Car Wash',
      'Scratch Removal, 3M Rubbing & Wax Polish',
      'Bumper & Fender Panel Denting / Painting',
      'Two-Wheeler Full Engine Oil & Brake Tuneup'
    ],
    iconName: 'Car'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rahul Kumar Srivastava',
    locality: 'Kankarbagh (Near Tiwari Bechar)',
    rating: 5,
    date: '3 days ago',
    service: 'AC Jet Cleaning & Gas Topup',
    comment: 'Booked AC jet service in Kankarbagh during peak summer heat. The technician arrived in just 35 minutes on his bike with all professional pressure tools. Fixed the cooling issue quickly and cleaned up the floor before leaving. Transparent ₹399 rate as promised!',
    avatarBg: 'bg-blue-600'
  },
  {
    id: 'rev-2',
    author: 'Ananya Singh',
    locality: 'Patliputra Colony (Road No. 4)',
    rating: 5,
    date: '1 week ago',
    service: 'Emergency Electrical MCB Repair',
    comment: 'Had a sudden MCB tripping and our entire inverter system went dead at 8:15 PM. QuickServe sent an experienced electrician to Patliputra within 45 minutes. Diagnosed the neutral short immediately. Very polite and verified technician. Lifesavers!',
    avatarBg: 'bg-emerald-600'
  },
  {
    id: 'rev-3',
    author: 'Vikramaditya Prasad',
    locality: 'Danapur (Near Saguna More)',
    rating: 5,
    date: '2 weeks ago',
    service: 'Doorstep Car Rubbing & Scratch Paint',
    comment: 'Got doorstep scratch buffing and panel paint done for my Creta near Saguna More. Incredible factory-grade finish right in my apartment parking. Much cheaper and faster than leaving the car at a workshop for 3 days.',
    avatarBg: 'bg-amber-600'
  }
];

export const DETAILED_RATES: RateItem[] = [
  { service: "Split / Window AC Jet Service", rate: "₹399", scope: "Indoor & outdoor coil pressure washing, tray cleaning", warranty: "30-Day Cooling Guarantee" },
  { service: "AC Gas Charging (Complete)", rate: "₹1,899", scope: "Nitrogen test, leak solder, vacuuming & R32/R410 refill", warranty: "60-Day Leakage Guarantee" },
  { service: "Ceiling Fan / Exhaust Installation", rate: "₹79", scope: "Hook mounting, blade balancing, regulator connection", warranty: "15-Day Service Guarantee" },
  { service: "Inverter & Battery Setup", rate: "₹299", scope: "Heavy DC cable crimping, bypass switch testing", warranty: "30-Day Guarantee" },
  { service: "Water Tap / Spout Repair or Replace", rate: "₹99", scope: "Washer fix, Teflon sealing, angle valve replacement", warranty: "15-Day Leak Guarantee" },
  { service: "Overhead Water Tank Cleaning (1000L)", rate: "₹699", scope: "Sludge pumping, high-pressure rotary spray, UV treatment", warranty: "100% Hygienic Certified" },
  { service: "RO Purifier Service & Filter Change", rate: "₹249", scope: "Sediment + Carbon filter sanitization, TDS test", warranty: "30-Day Water Purity" },
  { service: "Washing Machine Motor / Drum Fix", rate: "₹349", scope: "Belt replacement, drain pump unclogging, sensor test", warranty: "30-Day Guarantee" },
  { service: "Intense Bathroom Deep Descaling", rate: "₹499", scope: "Acid-free tile scrubbing, chrome buffing, grout stain removal", warranty: "Spotless Finish" },
  { service: "3-Seater Sofa Shampoo & Vacuum", rate: "₹599", scope: "Foam extraction, dust mite removal, fabric conditioning", warranty: "Fast 2-Hour Drying" },
  { service: "CCTV Single Point Installation", rate: "₹299", scope: "Wall bracket mount, BNC connector, mobile sync", warranty: "Lifetime Wire Dressing" },
  { service: "Doorstep Full Car Polish & 3M Rubbing", rate: "₹999", scope: "High-speed buffer wax, swirl remover, tyre dressing", warranty: "Showroom Gloss" }
];
