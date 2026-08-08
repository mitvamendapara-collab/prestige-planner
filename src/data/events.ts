export type Category = 'Weddings' | 'Corporate' | 'Birthdays' | 'Concerts' | 'Festivals';

export interface EventItem {
  id: string;
  title: string;
  category: Category;
  date: string;
  location: string;
  image: string;
  price: string;
  description: string;
  featured?: boolean;
}

export const events: EventItem[] = [
  {
    id: 'e1',
    title: 'Royal Garden Wedding',
    category: 'Weddings',
    date: '2026-09-14',
    location: 'Villa Toscana, Florence',
    image: 'https://images.pexels.com/photos/16935897/pexels-photo-16935897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$48,000',
    description: 'A breathtaking outdoor wedding with floral arches, candlelit aisles, and a gourmet reception under the stars.',
    featured: true,
  },
  {
    id: 'e2',
    title: 'Global Tech Summit',
    category: 'Corporate',
    date: '2026-10-02',
    location: 'Skyline Convention Center, NYC',
    image: 'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$32,000',
    description: 'A flagship technology conference with keynote stages, breakout rooms, and an exclusive networking lounge.',
    featured: true,
  },
  {
    id: 'e3',
    title: 'Midnight Jazz Concert',
    category: 'Concerts',
    date: '2026-08-22',
    location: 'The Apollo Theater, Chicago',
    image: 'https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$18,500',
    description: 'An intimate evening of live jazz with world-class performers and a curated cocktail experience.',
    featured: true,
  },
  {
    id: 'e4',
    title: 'Golden Jubilee Birthday',
    category: 'Birthdays',
    date: '2026-07-30',
    location: 'The Grand Ballroom, Paris',
    image: 'https://images.pexels.com/photos/30844787/pexels-photo-30844787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$12,000',
    description: 'A glamorous 50th birthday celebration with golden decor, live music, and a custom dessert atelier.',
  },
  {
    id: 'e5',
    title: 'Summer Beats Festival',
    category: 'Festivals',
    date: '2026-08-08',
    location: 'Riverside Park, Berlin',
    image: 'https://images.pexels.com/photos/12657546/pexels-photo-12657546.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$65,000',
    description: 'A three-day open-air music festival featuring international artists, food trucks, and immersive art.',
    featured: true,
  },
  {
    id: 'e6',
    title: 'Crystal Anniversary Gala',
    category: 'Weddings',
    date: '2026-11-20',
    location: 'Château de Versailles, France',
    image: 'https://images.pexels.com/photos/12689009/pexels-photo-12689009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$72,000',
    description: 'An opulent anniversary gala with crystal chandeliers, a string quartet, and a seven-course tasting menu.',
  },
  {
    id: 'e7',
    title: 'Innovation Leadership Forum',
    category: 'Corporate',
    date: '2026-09-28',
    location: 'Harbourfront Hall, Toronto',
    image: 'https://images.pexels.com/photos/20733081/pexels-photo-20733081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$28,000',
    description: 'An executive forum for industry leaders with panel discussions, an awards ceremony, and a gala dinner.',
  },
  {
    id: 'e8',
    title: 'Neon Night Concert',
    category: 'Concerts',
    date: '2026-10-15',
    location: 'Aurora Arena, Stockholm',
    image: 'https://images.pexels.com/photos/3661650/pexels-photo-3661650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$24,000',
    description: 'A high-energy concert with immersive lighting design, pyrotechnics, and a VIP backstage experience.',
  },
  {
    id: 'e9',
    title: 'Carnival of Colors Festival',
    category: 'Festivals',
    date: '2026-09-05',
    location: 'Marina Beach, Barcelona',
    image: 'https://images.pexels.com/photos/15203359/pexels-photo-15203359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$54,000',
    description: 'A vibrant cultural festival with live performances, street food, and a spectacular fireworks finale.',
  },
  {
    id: 'e10',
    title: 'Sweet Sixteen Soirée',
    category: 'Birthdays',
    date: '2026-08-18',
    location: 'The Rooftop Garden, Miami',
    image: 'https://images.pexels.com/photos/7180713/pexels-photo-7180713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '$9,500',
    description: 'A chic rooftop birthday with balloon installations, a DJ, and a custom photo wall experience.',
  },
];

export const categories: { name: Category; icon: string; count: number; image: string }[] = [
  { name: 'Weddings', icon: 'Heart', count: 142, image: 'https://images.pexels.com/photos/19024679/pexels-photo-19024679.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Corporate', icon: 'Briefcase', count: 98, image: 'https://images.pexels.com/photos/26202153/pexels-photo-26202153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Birthdays', icon: 'Gift', count: 210, image: 'https://images.pexels.com/photos/30682919/pexels-photo-30682919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Concerts', icon: 'Music', count: 76, image: 'https://images.pexels.com/photos/4218027/pexels-photo-4218027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Festivals', icon: 'PartyPopper', count: 54, image: 'https://images.pexels.com/photos/7513442/pexels-photo-7513442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];
