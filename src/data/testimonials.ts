export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Isabella Rossi',
    role: 'Bride, Royal Garden Wedding',
    avatar: 'https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    quote: 'Prestige Planner turned our dream wedding into reality. Every petal, every note, every moment was flawless. Our guests are still talking about it.',
  },
  {
    id: 't2',
    name: 'James Whitmore',
    role: 'CEO, Global Tech Summit',
    avatar: 'https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    quote: 'They handled a 2,000-person conference with the calm of seasoned pros. The production quality was the best we have ever seen.',
  },
  {
    id: 't3',
    name: 'Sophia Laurent',
    role: 'Host, Golden Jubilee',
    avatar: 'https://images.pexels.com/photos/38707525/pexels-photo-38707525.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    quote: 'From the golden decor to the live jazz band, my 50th birthday was pure magic. They thought of details I did not even know I wanted.',
  },
  {
    id: 't4',
    name: 'Daniel Okafor',
    role: 'Producer, Neon Night Concert',
    avatar: 'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    quote: 'The lighting and sound design was on another level. Prestige Planner understands how to make a crowd feel something unforgettable.',
  },
  {
    id: 't5',
    name: 'Elena Marchetti',
    role: 'Director, Carnival of Colors',
    avatar: 'https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    quote: 'Managing a 30,000-person festival is no small feat. Their crowd flow and safety planning gave us total peace of mind.',
  },
  {
    id: 't6',
    name: 'Marcus Bennett',
    role: 'COO, Innovation Forum',
    avatar: 'https://images.pexels.com/photos/38740728/pexels-photo-38740728.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    quote: 'Professional, creative, and incredibly organized. They elevated our executive forum into an experience people will remember for years.',
  },
];
