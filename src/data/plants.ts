// Plants Configuration
// Add your plants here - drop image files in /public/images/projects/meadow-breeze/plants/
// Use the same filename (without extension) in the imagePath field
// Supports: jpg, jpeg, png, webp, svg

export interface Plant {
  id: number;
  name: string;
  description: string;
  category: string;
  quantity: number;
  imagePath: string; // Base path without extension, e.g., '/images/projects/meadow-breeze/plants/neem'
}

export const plantCategories = {
  canopy: 'Tall / Canopy Trees',
  palm: 'Palms',
  bamboo: 'Bamboo & Grasses',
  shrub: 'Shrubs',
  ornamental: 'Ornamental Anchors',
  herbs: 'Herbs / Medicinal',
  fruit: 'Fruit Trees',
};

export const plants: Plant[] = [
  // =====================
  // TALL / CANOPY TREES (High Oxygen)
  // =====================
  {
    id: 1,
    name: 'Tabebuia Rosea (12 ft)',
    description: 'High oxygen output, wide canopy, temperature reduction',
    category: 'canopy',
    quantity: 10,
    imagePath: '/images/projects/meadow-breeze/plants/Tabebuia Rosea',
  },
  {
    id: 2,
    name: 'Spathodea (12 ft)',
    description: 'Large leaf surface, strong air purification, shade',
    category: 'canopy',
    quantity: 10,
    imagePath: '/images/projects/meadow-breeze/plants/Spethodea',
  },
  {
    id: 3,
    name: 'Khaya Senegalensis (12 ft)',
    description: 'High carbon absorption, stable long-life tree',
    category: 'canopy',
    quantity: 5,
    imagePath: '/images/projects/meadow-breeze/plants/Khaya Senegalensis',
  },
  {
    id: 4,
    name: 'Pongamia / Arjun',
    description: 'Nitrogen-fixing (Pongamia) / very high oxygen (Arjun)',
    category: 'canopy',
    quantity: 2,
    imagePath: '/images/projects/meadow-breeze/plants/Pongamia',
  },
  {
    id: 5,
    name: 'Cordia Sebastian (12 ft)',
    description: 'Dense foliage, dust trapping, moderate-high oxygen',
    category: 'canopy',
    quantity: 5,
    imagePath: '/images/projects/meadow-breeze/plants/Cardia Sebastian',
  },

  // =====================
  // PALMS (Moderate-High Oxygen)
  // =====================
  {
    id: 6,
    name: 'Areca Palm (6 ft)',
    description: 'Excellent oxygen, improves humidity, air purifier',
    category: 'palm',
    quantity: 30,
    imagePath: '/images/projects/meadow-breeze/plants/Areca Palm',
  },
  {
    id: 7,
    name: 'Foxtail Palm',
    description: 'Dust filtration, vertical green mass',
    category: 'palm',
    quantity: 20,
    imagePath: '/images/projects/meadow-breeze/plants/Foxtail Palm',
  },
  {
    id: 8,
    name: 'Coconut Palm (10 ft)',
    description: 'High oxygen release, tropical micro-climate',
    category: 'palm',
    quantity: 4,
    imagePath: '/images/projects/meadow-breeze/plants/Coconut Palm',
  },

  // =====================
  // BAMBOO & GRASSES (Very High Oxygen)
  // =====================
  {
    id: 9,
    name: 'Buddha Bamboo (5 ft)',
    description: 'Very high oxygen day & night, sound and dust barrier',
    category: 'bamboo',
    quantity: 100,
    imagePath: '/images/projects/meadow-breeze/plants/Buddha Bamboo',
  },
  {
    id: 10,
    name: 'Golden Bamboo',
    description: 'Fast green wall, carbon sink',
    category: 'bamboo',
    quantity: 6,
    imagePath: '/images/projects/meadow-breeze/plants/Golden Bamboo',
  },
  {
    id: 11,
    name: 'Green Bamboo',
    description: 'Dense screening, air purification',
    category: 'bamboo',
    quantity: 6,
    imagePath: '/images/projects/meadow-breeze/plants/Green Bamboo',
  },
  {
    id: 12,
    name: 'Vetiver Grass',
    description: 'Deep roots, soil binding, pollution control',
    category: 'bamboo',
    quantity: 40,
    imagePath: '/images/projects/meadow-breeze/plants/Vetiver Grass',
  },
  {
    id: 13,
    name: 'Lemongrass',
    description: 'Oxygen rich, mosquito repellent, fragrance',
    category: 'bamboo',
    quantity: 25,
    imagePath: '/images/projects/meadow-breeze/plants/Lemongrass',
  },

  // =====================
  // SHRUBS (High Oxygen per Sq Ft)
  // =====================
  {
    id: 14,
    name: 'Ficus Panda Balls',
    description: 'Very high oxygen, CO₂ absorption, dense hedge',
    category: 'shrub',
    quantity: 100,
    imagePath: '/images/projects/meadow-breeze/plants/Ficus Panda Balls',
  },
  {
    id: 15,
    name: 'Acalypha / Eranthemum',
    description: 'Continuous oxygen cycling, visual fullness',
    category: 'shrub',
    quantity: 100,
    imagePath: '/images/projects/meadow-breeze/plants/Acalypha',
  },
  {
    id: 16,
    name: 'Hibiscus / Ixora',
    description: 'Pollinator friendly, moderate oxygen, color accent',
    category: 'shrub',
    quantity: 15,
    imagePath: '/images/projects/meadow-breeze/plants/Hibiscus',
  },

  // =====================
  // ORNAMENTAL ANCHORS (Moderate Oxygen)
  // =====================
  {
    id: 17,
    name: 'Ficus Microcarpa (Balls)',
    description: 'High oxygen, premium sculpted look',
    category: 'ornamental',
    quantity: 2,
    imagePath: '/images/projects/meadow-breeze/plants/Ficus Microcarpa Balls',
  },
  {
    id: 18,
    name: 'Ficus Microcarpa (Cone)',
    description: 'Strong CO₂ absorption, entry focal point',
    category: 'ornamental',
    quantity: 2,
    imagePath: '/images/projects/meadow-breeze/plants/Ficus Microcarpa Cone',
  },

  // =====================
  // HERBS / MEDICINAL (High Oxygen)
  // =====================
  {
    id: 19,
    name: 'Tulsi',
    description: 'Very high oxygen, medicinal, improves air quality',
    category: 'herbs',
    quantity: 15,
    imagePath: '/images/projects/meadow-breeze/plants/Tulsi',
  },

  // =====================
  // FRUIT TREES (Moderate Oxygen)
  // =====================
  {
    id: 20,
    name: 'Jamun',
    description: 'Oxygen rich, bird attraction',
    category: 'fruit',
    quantity: 2,
    imagePath: '/images/projects/meadow-breeze/plants/Jama (Jamun)',
  },
  {
    id: 21,
    name: 'Water Apple',
    description: 'Moderate oxygen, pollinator support',
    category: 'fruit',
    quantity: 2,
    imagePath: '/images/projects/meadow-breeze/plants/Water Apple',
  },
  {
    id: 22,
    name: 'Kamala',
    description: 'Native biodiversity support',
    category: 'fruit',
    quantity: 2,
    imagePath: '/images/projects/meadow-breeze/plants/Kamala',
  },
  {
    id: 23,
    name: 'Bathayi',
    description: 'Low maintenance fruit tree',
    category: 'fruit',
    quantity: 2,
    imagePath: '/images/projects/meadow-breeze/plants/Bathayi',
  },
];

// Stats (auto-calculated)
export const plantStats = {
  totalSpecies: plants.length,
  totalPlants: plants.reduce((sum, plant) => sum + plant.quantity, 0),
  categories: Object.keys(plantCategories).length,
};
