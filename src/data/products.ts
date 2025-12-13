import boppTape from "@/assets/products/bopp-tape.jpg";
import epeFoamRoll from "@/assets/products/epe-foam-roll.jpg";
import stretchFilm from "@/assets/products/stretch-film.jpg";
import greenPetStrap from "@/assets/products/green-pet-strap.jpg";
import airBubbleRoll from "@/assets/products/air-bubble-roll.jpg";
import maskingTape from "@/assets/products/masking-tape.jpg";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  applications: string[];
  category: string;
  image?: string;
}

export const productCategories = [
  "All Products",
  "BOPP & Packaging Tapes",
  "Foam Tapes",
  "Double Sided Tapes",
  "Specialty Tapes",
  "Industrial Tapes",
  "Protective Materials",
];

export const products: Product[] = [
  {
    id: "1",
    name: "BOPP Tape",
    slug: "bopp-tape",
    description: "High-quality Biaxially Oriented Polypropylene tape designed for secure carton sealing and packaging applications. Offers excellent adhesion, tensile strength, and resistance to moisture.",
    applications: ["Carton sealing", "Box packaging", "Bundling", "General purpose sealing"],
    category: "BOPP & Packaging Tapes",
    image: boppTape,
  },
  {
    id: "2",
    name: "EPE Foam Roll",
    slug: "epe-foam-roll",
    description: "Expanded Polyethylene foam roll providing superior cushioning and protection for fragile items during transit and storage. Lightweight yet highly effective shock absorber.",
    applications: ["Product wrapping", "Surface protection", "Cushioning", "Void filling"],
    category: "Protective Materials",
    image: epeFoamRoll,
  },
  {
    id: "3",
    name: "Stretch Film Roll",
    slug: "stretch-film-roll",
    description: "Premium quality stretch film for pallet wrapping and load stabilization. Provides excellent cling, puncture resistance, and load retention.",
    applications: ["Pallet wrapping", "Load unitizing", "Product bundling", "Storage protection"],
    category: "Protective Materials",
    image: stretchFilm,
  },
  {
    id: "4",
    name: "Single Side Black Foam Tape",
    slug: "single-side-black-foam-tape",
    description: "Durable single-sided black foam tape with strong adhesive backing. Ideal for mounting, sealing, and vibration dampening applications.",
    applications: ["Mounting", "Sealing gaps", "Vibration dampening", "Weatherstripping"],
    category: "Foam Tapes",
  },
  {
    id: "5",
    name: "Green PET Strap",
    slug: "green-pet-strap",
    description: "Eco-friendly polyester strapping solution offering high tensile strength and excellent elongation recovery. Perfect for heavy-duty bundling and palletizing.",
    applications: ["Heavy load strapping", "Palletizing", "Bundling lumber", "Metal coil strapping"],
    category: "Industrial Tapes",
    image: greenPetStrap,
  },
  {
    id: "6",
    name: "Air Bubble Roll",
    slug: "air-bubble-roll",
    description: "Protective air bubble wrap providing excellent cushioning for fragile items. Available in various bubble sizes for different protection levels.",
    applications: ["Fragile item protection", "Void filling", "Surface wrapping", "Shipping protection"],
    category: "Protective Materials",
    image: airBubbleRoll,
  },
  {
    id: "7",
    name: "Double Side Cotton Tape",
    slug: "double-side-cotton-tape",
    description: "Premium double-sided cotton tape with excellent conformability and strong adhesion on both sides. Ideal for mounting and bonding applications.",
    applications: ["Carpet fixing", "Mounting displays", "Craft applications", "Temporary bonding"],
    category: "Double Sided Tapes",
  },
  {
    id: "8",
    name: "Double Side Blue PE Foam Tape",
    slug: "double-side-blue-pe-foam-tape",
    description: "High-performance double-sided polyethylene foam tape with blue liner. Provides excellent bonding strength and gap-filling capabilities.",
    applications: ["Panel mounting", "Sign installation", "Glazing", "Automotive trim"],
    category: "Double Sided Tapes",
  },
  {
    id: "9",
    name: "Kapton Tape",
    slug: "kapton-tape",
    description: "High-temperature resistant polyimide tape with excellent electrical insulation properties. Withstands temperatures up to 260°C.",
    applications: ["PCB masking", "Electrical insulation", "3D printing", "Heat shielding"],
    category: "Specialty Tapes",
  },
  {
    id: "10",
    name: "VHB Tape",
    slug: "vhb-tape",
    description: "Very High Bond acrylic foam tape providing permanent, high-strength bonding. Replaces mechanical fasteners in many applications.",
    applications: ["Metal bonding", "Glass attachment", "Architectural panels", "Signage mounting"],
    category: "Industrial Tapes",
  },
  {
    id: "11",
    name: "Double Side Red Polyester Tape",
    slug: "double-side-red-polyester-tape",
    description: "High-clarity double-sided polyester tape with red liner for easy handling. Excellent for splicing and laminating applications.",
    applications: ["Film splicing", "Label application", "Graphic arts", "Nameplate attachment"],
    category: "Double Sided Tapes",
  },
  {
    id: "12",
    name: "Double Side EVA Foam Tape",
    slug: "double-side-eva-foam-tape",
    description: "Ethylene Vinyl Acetate foam tape with adhesive on both sides. Provides good conformability to irregular surfaces and excellent cushioning.",
    applications: ["Automotive parts", "Electronics assembly", "Mirror mounting", "Decorative trim"],
    category: "Double Sided Tapes",
  },
  {
    id: "13",
    name: "Masking Tape",
    slug: "masking-tape",
    description: "Premium quality masking tape for clean paint lines and surface protection. Easy to apply and remove without residue.",
    applications: ["Painting projects", "Surface masking", "Bundling", "Labeling"],
    category: "BOPP & Packaging Tapes",
    image: maskingTape,
  },
  {
    id: "14",
    name: "Aluminium Tape",
    slug: "aluminium-tape",
    description: "Dead-soft aluminium foil tape with strong acrylic adhesive. Excellent for HVAC sealing, thermal insulation, and EMI shielding.",
    applications: ["HVAC duct sealing", "Thermal insulation", "Heat reflection", "Pipe wrapping"],
    category: "Specialty Tapes",
  },
  {
    id: "15",
    name: "Floor Marking Tape",
    slug: "floor-marking-tape",
    description: "Durable vinyl floor marking tape for warehouse and factory floor delineation. Highly visible colors for safety compliance.",
    applications: ["Warehouse lanes", "Safety zones", "Hazard marking", "Aisle identification"],
    category: "Industrial Tapes",
  },
  {
    id: "16",
    name: "Duct Tape",
    slug: "duct-tape",
    description: "Heavy-duty cloth-backed tape with strong adhesive for general purpose repairs and applications. Water-resistant and highly versatile.",
    applications: ["General repairs", "Bundling", "Temporary fixes", "Craft projects"],
    category: "Industrial Tapes",
  },
  {
    id: "17",
    name: "Paper Reinforcement Tape",
    slug: "paper-reinforcement-tape",
    description: "Reinforced paper tape with fiberglass threads for extra strength. Ideal for carton sealing requiring tamper-evidence.",
    applications: ["Carton sealing", "Secure packaging", "Export shipments", "Heavy box sealing"],
    category: "BOPP & Packaging Tapes",
  },
  {
    id: "18",
    name: "Craft Paper Tape",
    slug: "craft-paper-tape",
    description: "Eco-friendly kraft paper tape with water-activated or self-adhesive backing. Sustainable packaging solution.",
    applications: ["Eco packaging", "Box sealing", "Gift wrapping", "Sustainable shipping"],
    category: "BOPP & Packaging Tapes",
  },
  {
    id: "19",
    name: "Mono Filament Tape",
    slug: "mono-filament-tape",
    description: "High-strength filament tape reinforced with fiberglass strands. Exceptional tensile strength for heavy-duty strapping.",
    applications: ["Bundle strapping", "Pallet reinforcing", "Heavy load securing", "Appliance packaging"],
    category: "Industrial Tapes",
  },
  {
    id: "20",
    name: "HDPE Tape",
    slug: "hdpe-tape",
    description: "High-Density Polyethylene tape for pipe wrapping and corrosion protection. Excellent chemical and moisture resistance.",
    applications: ["Pipe wrapping", "Corrosion protection", "Underground applications", "Cable protection"],
    category: "Industrial Tapes",
  },
  {
    id: "21",
    name: "Double Side Tissue Tape",
    slug: "double-side-tissue-tape",
    description: "Thin double-sided tissue tape for splicing and mounting light-weight materials. Easy handling with good adhesion.",
    applications: ["Paper splicing", "Mounting photos", "Craft applications", "Envelope sealing"],
    category: "Double Sided Tapes",
  },
  {
    id: "22",
    name: "Single Side Polyester Tape",
    slug: "single-side-polyester-tape",
    description: "Single-sided polyester film tape with excellent dimensional stability and electrical properties. Suitable for high-temperature applications.",
    applications: ["Transformer insulation", "Coil wrapping", "Color coding", "Electrical applications"],
    category: "Specialty Tapes",
  },
  {
    id: "23",
    name: "Scappa Thermal Tape",
    slug: "scappa-thermal-tape",
    description: "Specialized thermal interface tape for heat dissipation applications. Provides efficient thermal transfer between components.",
    applications: ["Heat sink mounting", "LED assembly", "Electronics cooling", "Thermal management"],
    category: "Specialty Tapes",
  },
  {
    id: "24",
    name: "High Polymer Butyl Rubber Tape",
    slug: "high-polymer-butyl-rubber-tape",
    description: "Self-fusing butyl rubber tape for waterproofing and sealing applications. Excellent weather and UV resistance.",
    applications: ["Roof sealing", "Waterproofing", "Pipe repair", "HVAC sealing"],
    category: "Specialty Tapes",
  },
  {
    id: "25",
    name: "Anti-Skid Tape",
    slug: "anti-skid-tape",
    description: "High-grip anti-slip tape for safety applications on stairs, ramps, and walkways. Durable mineral-coated surface.",
    applications: ["Stair treads", "Ramp safety", "Walkway marking", "Industrial flooring"],
    category: "Industrial Tapes",
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All Products") return products;
  return products.filter((p) => p.category === category);
};
