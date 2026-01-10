// Video Configuration
// Simply add your videos here - drop the file in /public/videos/projects/meadow-breeze/
// and add an entry below. The video will automatically appear in the gallery.

export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string; // URL or path to thumbnail image
  videoFile: string; // Just the filename, e.g., 'my-video.mp4'
  duration: string;  // e.g., '2:30'
}

// Add your videos here - just add the filename and details
export const meadowBreezeVideos: Video[] = [
  {
    id: 1,
    title: 'Aerial View of The Meadow Breeze',
    description: 'Stunning drone footage showcasing the entire project layout',
    thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600',
    videoFile: 'aerial-view.mp4',
    duration: '2:30',
  },
  {
    id: 2,
    title: 'Site Walkthrough',
    description: 'Take a virtual tour of the premium farmland plots',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    videoFile: 'walkthrough.mp4',
    duration: '4:15',
  },
  {
    id: 3,
    title: '360° Mountain Views',
    description: 'Experience the breathtaking panoramic views',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600',
    videoFile: 'mountain-views.mp4',
    duration: '1:45',
  },
  {
    id: 4,
    title: 'Infrastructure & Amenities',
    description: 'Explore the world-class amenities and infrastructure',
    thumbnail: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600',
    videoFile: 'amenities.mp4',
    duration: '3:20',
  },
  // ============================================
  // ADD MORE VIDEOS BELOW - Example:
  // ============================================
  // {
  //   id: 5,
  //   title: 'Your Video Title',
  //   description: 'Description of your video',
  //   thumbnail: 'https://example.com/thumbnail.jpg', // or '/images/your-thumbnail.jpg'
  //   videoFile: 'your-video.mp4',
  //   duration: '3:00',
  // },
];

// Base path for videos - don't change this
export const VIDEO_BASE_PATH = '/videos/projects/meadow-breeze';
