export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://images.pexels.com/photos/16935897/pexels-photo-16935897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Wedding reception with floral centerpieces', category: 'Weddings' },
  { id: 'g2', src: 'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Conference audience watching a presentation', category: 'Corporate' },
  { id: 'g3', src: 'https://images.pexels.com/photos/30682919/pexels-photo-30682919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Birthday party with balloons', category: 'Birthdays' },
  { id: 'g4', src: 'https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Night concert with colorful lighting', category: 'Concerts' },
  { id: 'g5', src: 'https://images.pexels.com/photos/12657546/pexels-photo-12657546.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Outdoor music festival crowd', category: 'Festivals' },
  { id: 'g6', src: 'https://images.pexels.com/photos/12689009/pexels-photo-12689009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Elegant ballroom with crystal candelabras', category: 'Weddings' },
  { id: 'g7', src: 'https://images.pexels.com/photos/26202153/pexels-photo-26202153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Business professionals at a conference', category: 'Corporate' },
  { id: 'g8', src: 'https://images.pexels.com/photos/30844787/pexels-photo-30844787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Golden birthday celebration', category: 'Birthdays' },
  { id: 'g9', src: 'https://images.pexels.com/photos/4218027/pexels-photo-4218027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Live music concert performance', category: 'Concerts' },
  { id: 'g10', src: 'https://images.pexels.com/photos/15203359/pexels-photo-15203359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Music festival with stage lights', category: 'Festivals' },
  { id: 'g11', src: 'https://images.pexels.com/photos/17023042/pexels-photo-17023042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Wedding reception with floral decorations', category: 'Weddings' },
  { id: 'g12', src: 'https://images.pexels.com/photos/8761536/pexels-photo-8761536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Business conference participants', category: 'Corporate' },
];

export const galleryFilters = ['All', 'Weddings', 'Corporate', 'Birthdays', 'Concerts', 'Festivals'];
