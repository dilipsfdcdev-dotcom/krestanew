export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  totalArea: string;
  totalPlots: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  highlights: string[];
  thumbnail: string;
  logo: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: 'meadow-breeze',
    name: 'The Meadow Breeze',
    tagline: 'Where the hills whisper peace and the breeze carries serenity',
    description: 'Premium 50-acre farmland community nestled amidst the lush green hills of Rachakonda with 360° panoramic mountain views. Every plot features 600-900 plants creating an oxygen-rich environment.',
    location: 'Peepal Pahad, Choutuppal, Yadadri Bhuvanagiri District',
    totalArea: '179,103 Sq. Yards',
    totalPlots: 124,
    status: 'ongoing',
    highlights: [
      '600-900 Plants per plot',
      '360° Mountain Views',
      '25 km from ORR Exit 11',
      'Gated Community',
    ],
    thumbnail: '/images/projects/meadow-breeze/gallery/hero.jpg',
    logo: '/images/projects/meadow-breeze/logo.jpg',
    slug: 'meadow-breeze',
  },
];

export const companyInfo = {
  name: 'Kresta Infra & Developers Pvt. Ltd.',
  shortName: 'Kresta',
  tagline: 'Crafting Luxury, Building Dreams',
  description: 'An emerging real estate development company dedicated to creating exceptional farmland communities and residential spaces that harmonize with nature.',
  mission: 'To transform how people connect with land, offering not just property but a lifestyle of tranquility and growth through sustainable development.',
  vision: 'To be the most trusted name in premium farmland development, creating communities where nature and modern living coexist in perfect harmony.',
  established: 2024,
  logo: '/images/company/logo.jpg',
  contact: {
    phone: '+91-9888932555',
    email: 'info@kresta.in',
    address: '94, HIG, TV Colony, Vanasthalipuram, Hyderabad - 500070',
    whatsapp: '919888932555',
  },
  social: {
    facebook: 'https://facebook.com/krestadevelopers',
    instagram: 'https://instagram.com/krestadevelopers',
    youtube: 'https://youtube.com/@krestadevelopers',
    linkedin: 'https://linkedin.com/company/kresta-developers',
  },
};

export const masterPlanData = {
  totalPlotArea: '179,103 Sq. Yards',
  totalRoads: '57,558 Sq. Yards',
  totalPlots: 124,
  roadWidths: ['60 ft Wide Roads', '40 ft Wide Roads', '33 ft Wide Roads'],
  features: [
    'Forest Area surrounding the community',
    'Premium Villa Section',
    'Existing Boulders preserved as natural landmarks',
    'Walking Trails throughout',
    'Strategic Entrance with wide access',
  ],
  architect: 'S&S Architects and Infra',
};
