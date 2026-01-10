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
  logoPath: string;
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
    logoPath: '/images/projects/meadow-breeze/logo',
    slug: 'meadow-breeze',
  },
];

export const companyInfo = {
  name: 'Kresta Infra & Developers Pvt. Ltd.',
  shortName: 'Kresta',
  tagline: 'Crafting Luxury, Building Dreams',
  description: 'A premier real estate development company specializing in luxury residential projects, premium farmland communities, commercial spaces, and integrated township developments.',
  mission: 'To deliver exceptional real estate solutions that transform spaces into thriving communities, combining world-class quality with sustainable design.',
  vision: 'To be the most trusted name in premium real estate development, creating diverse projects from luxury residences to farmland estates that exceed expectations.',
  established: 2024,
  logoPath: '/images/company/logo',
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
