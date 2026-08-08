export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'f1',
    question: 'How far in advance should I book my event?',
    answer: 'For weddings and large-scale events, we recommend booking 6–12 months in advance to secure your preferred venue and vendors. For corporate events and private parties, 2–3 months is usually sufficient, though we do accommodate rush bookings when possible.',
    category: 'Booking',
  },
  {
    id: 'f2',
    question: 'What is included in your event planning packages?',
    answer: 'Our packages include venue sourcing, decor and floral design, catering coordination, entertainment booking, and day-of management. The Premiere and Signature tiers add custom production, concierge services, and extended planning support. You can customize any package to fit your vision.',
    category: 'Services',
  },
  {
    id: 'f3',
    question: 'Do you handle events outside the city or country?',
    answer: 'Yes. We plan and produce destination events worldwide. Our team handles travel logistics, local vendor coordination, and on-site management wherever your event takes place.',
    category: 'Logistics',
  },
  {
    id: 'f4',
    question: 'Can I customize my event package?',
    answer: 'Absolutely. Every event is unique, and we encourage customization. You can add or remove services, upgrade decor tiers, and request bespoke elements. Your planner will tailor the package to your budget and vision.',
    category: 'Services',
  },
  {
    id: 'f5',
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, major credit cards, and select digital payment platforms. A 30% deposit secures your date, with the balance due in installments leading up to the event.',
    category: 'Payment',
  },
  {
    id: 'f6',
    question: 'What happens if I need to cancel or reschedule?',
    answer: 'We understand plans change. Cancellations made 90+ days before the event receive a full refund minus the deposit. Rescheduling is free within 12 months, subject to venue and vendor availability.',
    category: 'Booking',
  },
  {
    id: 'f7',
    question: 'Do you provide catering and bar services?',
    answer: 'Yes. We partner with award-winning caterers and mixologists to design menus that match your theme and dietary needs. From plated dinners to interactive food stations, we handle it all.',
    category: 'Services',
  },
  {
    id: 'f8',
    question: 'How do you handle event safety and security?',
    answer: 'Safety is central to our planning. For large events we coordinate licensed security teams, crowd-flow specialists, medical staff, and emergency protocols, all vetted and insured.',
    category: 'Logistics',
  },
];

export const faqCategories = ['All', 'Booking', 'Services', 'Logistics', 'Payment'];
