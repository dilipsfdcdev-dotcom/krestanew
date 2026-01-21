// Plants Configuration
// Add your plants here - drop image files in /public/images/projects/meadow-breeze/plants/
// Use the same filename (without extension) in the imagePath field
// Supports: jpg, jpeg, png, webp, svg

export interface Plant {
  id: number;
  name: string;
  description: string;
  category: string;
  imagePath: string; // Base path without extension, e.g., '/images/projects/meadow-breeze/plants/neem'
}

export const plantCategories = {
  avenue: 'Avenue Trees',
  palm: 'Palm Trees',
  fruit: 'Fruit Plants',
  ornamental: 'Ornamental Plants',
  bamboo: 'Bamboo Plants',
};

export const plants: Plant[] = [
  // =====================
  // AVENUE TREES
  // =====================
  {
    id: 1,
    name: 'Vepa (Neem)',
    description: 'Air purification, medicinal properties, natural pesticide, provides cooling shade',
    category: 'avenue',
    imagePath: '/images/projects/meadow-breeze/plants/Vepa (Neem)',
  },
  {
    id: 2,
    name: 'Raavi (Peepal)',
    description: '24-hour oxygen release, sacred significance, large canopy, wildlife habitat',
    category: 'avenue',
    imagePath: '/images/projects/meadow-breeze/plants/Raavi (Peepal)',
  },
  {
    id: 3,
    name: 'Marri (Banyan)',
    description: 'Massive shade coverage, air purification, spiritual significance, long lifespan',
    category: 'avenue',
    imagePath: '/images/projects/meadow-breeze/plants/Marri (Banyan)',
  },
  {
    id: 4,
    name: 'China Badam',
    description: 'Ornamental beauty, shade provider, low maintenance, drought resistant',
    category: 'avenue',
    imagePath: '/images/projects/meadow-breeze/plants/China Badam',
  },
  {
    id: 5,
    name: 'Cordia Sebastiana',
    description: 'Fast growing, ornamental flowers, bird attraction, excellent shade provider',
    category: 'avenue',
    imagePath: '/images/projects/meadow-breeze/plants/Cardia Sebastian',
  },
  {
    id: 6,
    name: 'Tabebuia Rosea',
    description: 'Beautiful pink flowers, ornamental value, moderate shade, attracts pollinators',
    category: 'avenue',
    imagePath: '/images/projects/meadow-breeze/plants/Tabebuia Rosea',
  },
  {
    id: 7,
    name: 'Spathodea',
    description: 'Flame-colored flowers, fast growing, ornamental beauty, attracts birds',
    category: 'avenue',
    imagePath: '/images/projects/meadow-breeze/plants/Spethodea',
  },
  {
    id: 8,
    name: 'Kadamba',
    description: 'Fragrant flowers, medicinal uses, cultural significance, fast growing',
    category: 'avenue',
    imagePath: '/images/projects/meadow-breeze/plants/Kadamba',
  },
  {
    id: 9,
    name: 'Mahogany',
    description: 'Premium timber, dense shade, air purification, extremely long lifespan',
    category: 'avenue',
    imagePath: '/images/projects/meadow-breeze/plants/Mahogany',
  },
  {
    id: 10,
    name: 'Gulmohar',
    description: 'Vibrant red flowers, large canopy, summer blooming, stunning ornamental beauty',
    category: 'avenue',
    imagePath: '/images/projects/meadow-breeze/plants/Gulmohar',
  },
  {
    id: 11,
    name: 'Peltophorum',
    description: 'Yellow flowers, nitrogen fixing, fast growing, provides good shade',
    category: 'avenue',
    imagePath: '/images/projects/meadow-breeze/plants/Peltophorum',
  },
  {
    id: 12,
    name: 'Rain Tree',
    description: 'Massive canopy, nitrogen fixing, rain collection, excellent wildlife habitat',
    category: 'avenue',
    imagePath: '/images/projects/meadow-breeze/plants/Rain Tree',
  },

  // =====================
  // PALM TREES
  // =====================
  {
    id: 13,
    name: 'Royal Palm',
    description: 'Majestic appearance, tropical aesthetic, wind resistant, low maintenance',
    category: 'palm',
    imagePath: '/images/projects/meadow-breeze/plants/Royal Palm',
  },
  {
    id: 14,
    name: 'Foxtail Palm',
    description: 'Elegant fronds, self-cleaning, drought tolerant, modern aesthetic',
    category: 'palm',
    imagePath: '/images/projects/meadow-breeze/plants/Foxtail Palm',
  },
  {
    id: 15,
    name: 'Areca Palm',
    description: 'Air purification, humidity control, NASA recommended, pet safe',
    category: 'palm',
    imagePath: '/images/projects/meadow-breeze/plants/Areca Palm',
  },
  {
    id: 16,
    name: 'Traveller Palm',
    description: 'Unique fan shape, water storage, tropical landmark, attracts birds',
    category: 'palm',
    imagePath: '/images/projects/meadow-breeze/plants/Traveller Palm',
  },
  {
    id: 17,
    name: 'Supari Palm',
    description: 'Betel nut producer, cultural significance, slender beauty, tropical feel',
    category: 'palm',
    imagePath: '/images/projects/meadow-breeze/plants/Supari Palm',
  },

  // =====================
  // FRUIT PLANTS
  // =====================
  {
    id: 18,
    name: 'Jamun (Java Plum)',
    description: 'Delicious fruits, diabetes management, antioxidant rich, provides shade',
    category: 'fruit',
    imagePath: '/images/projects/meadow-breeze/plants/Jama (Jamun)',
  },
  {
    id: 19,
    name: 'Water Apple',
    description: 'Refreshing fruits, excellent hydration, vitamin rich, ornamental flowers',
    category: 'fruit',
    imagePath: '/images/projects/meadow-breeze/plants/Water Apple',
  },
  {
    id: 20,
    name: 'Sapota (Chikoo)',
    description: 'Sweet fruits, energy booster, fiber rich, very low maintenance',
    category: 'fruit',
    imagePath: '/images/projects/meadow-breeze/plants/Sapota (Chikoo)',
  },
  {
    id: 21,
    name: 'Custard Apple',
    description: 'Unique flavor, vitamin C rich, heart health benefits, drought tolerant',
    category: 'fruit',
    imagePath: '/images/projects/meadow-breeze/plants/Sitaphal (Custard Apple)',
  },
  {
    id: 22,
    name: 'Pomegranate',
    description: 'Superfood, rich in antioxidants, heart health, beautiful flowers',
    category: 'fruit',
    imagePath: '/images/projects/meadow-breeze/plants/Dhanimma (Pomegranate)',
  },
  {
    id: 23,
    name: 'Guava',
    description: 'High vitamin C, digestive health, fast fruiting, hardy plant',
    category: 'fruit',
    imagePath: '/images/projects/meadow-breeze/plants/Guava',
  },
  {
    id: 24,
    name: 'Amla (Indian Gooseberry)',
    description: 'Ayurvedic superfood, hair & skin health, immunity booster, long fruiting season',
    category: 'fruit',
    imagePath: '/images/projects/meadow-breeze/plants/Usiri (Amla)',
  },

  // =====================
  // BAMBOO PLANTS
  // =====================
  {
    id: 25,
    name: 'Buddha Bamboo',
    description: 'Unique bulging nodes, ornamental, feng shui significance, compact growth',
    category: 'bamboo',
    imagePath: '/images/projects/meadow-breeze/plants/Buddha Bamboo',
  },
  {
    id: 26,
    name: 'Golden Bamboo',
    description: 'Golden culms, privacy screen, fast growing, excellent wind break',
    category: 'bamboo',
    imagePath: '/images/projects/meadow-breeze/plants/Golden Bamboo',
  },
  {
    id: 27,
    name: 'Green Bamboo',
    description: 'Classic beauty, oxygen producer, carbon sequester, sustainable resource',
    category: 'bamboo',
    imagePath: '/images/projects/meadow-breeze/plants/Green Bamboo',
  },

  // =====================
  // ADD MORE PLANTS BELOW
  // =====================
  // Example:
  // {
  //   id: 28,
  //   name: 'Your Plant Name',
  //   description: 'Description of the plant and its benefits',
  //   category: 'avenue', // or 'palm', 'fruit', 'ornamental', 'bamboo'
  //   imagePath: '/images/projects/meadow-breeze/plants/your-image-name',
  // },
];

// Stats (auto-calculated)
export const plantStats = {
  totalSpecies: plants.length,
  categories: Object.keys(plantCategories).length,
};
