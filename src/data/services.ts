export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 's1',
    title: 'Wedding Planning',
    description: 'End-to-end wedding coordination from venue selection to the last dance, crafted around your love story.',
    icon: 'Heart',
    features: ['Venue sourcing', 'Floral design', 'Catering', 'Photography'],
  },
  {
    id: 's2',
    title: 'Corporate Events',
    description: 'Conferences, product launches, and executive retreats designed to inspire and impress your stakeholders.',
    icon: 'Briefcase',
    features: ['Stage production', 'AV & streaming', 'Brand activation', 'Guest management'],
  },
  {
    id: 's3',
    title: 'Birthday Celebrations',
    description: 'From intimate gatherings to grand soirées, we design birthday experiences that feel uniquely yours.',
    icon: 'Gift',
    features: ['Themed decor', 'Entertainment', 'Custom cakes', 'Photo experiences'],
  },
  {
    id: 's4',
    title: 'Concert Production',
    description: 'Full-scale concert production with world-class sound, lighting, and stage design that captivates.',
    icon: 'Music',
    features: ['Sound engineering', 'Lighting design', 'Artist liaison', 'Ticketing'],
  },
  {
    id: 's5',
    title: 'Festival Management',
    description: 'Large-scale festival operations with crowd flow, multi-stage scheduling, and safety at the core.',
    icon: 'PartyPopper',
    features: ['Site planning', 'Vendor coordination', 'Security', 'Crowd flow'],
  },
  {
    id: 's6',
    title: 'Private Galas',
    description: 'Exclusive, black-tie gatherings for milestones and celebrations that demand absolute prestige.',
    icon: 'Crown',
    features: ['Bespoke menus', 'Live performances', 'Valet & transport', 'Concierge'],
  },
];
