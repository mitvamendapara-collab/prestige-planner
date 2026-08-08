export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'p1',
    name: 'Essential',
    price: '$2,500',
    period: 'per event',
    description: 'Perfect for intimate gatherings and private celebrations.',
    features: [
      'Up to 50 guests',
      'Event coordinator',
      'Venue selection',
      'Day-of management',
      'Standard decor package',
      '4 weeks planning support',
    ],
  },
  {
    id: 'p2',
    name: 'Premiere',
    price: '$8,500',
    period: 'per event',
    description: 'Our most popular package for weddings and corporate events.',
    popular: true,
    features: [
      'Up to 200 guests',
      'Dedicated planning team',
      'Premium venue sourcing',
      'Custom decor & floral design',
      'Catering coordination',
      'Live entertainment booking',
      '12 weeks planning support',
    ],
  },
  {
    id: 'p3',
    name: 'Signature',
    price: '$25,000',
    period: 'per event',
    description: 'A fully bespoke experience for galas, festivals, and large productions.',
    features: [
      'Unlimited guests',
      'Full production team',
      'Bespoke venue acquisition',
      'Custom stage & lighting design',
      'Gourmet catering & bar',
      'Celebrity entertainment',
      'Concierge & transport',
      'Unlimited planning support',
    ],
  },
];
