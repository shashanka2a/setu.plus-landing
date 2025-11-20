import { ShoppingBag, Truck, Wrench, Camera, Car, Stethoscope, Ticket } from 'lucide-react';

export type IconName = 'ShoppingBag' | 'Truck' | 'Wrench' | 'Camera' | 'Car' | 'Stethoscope' | 'Ticket';

export interface AppConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: IconName;
  color: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  features: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  cta: {
    primary: string;
    secondary: string;
  };
  stats?: {
    label: string;
    value: string;
  }[];
  heroImage?: string;
}

export const appsConfig: Record<string, AppConfig> = {
  shoppe: {
    id: 'shoppe',
    name: 'ShopPe',
    tagline: 'Used Goods Marketplace',
    description: 'The ultimate marketplace for buying and selling used goods. Connect with buyers and sellers in your community with AI-powered recommendations and instant logistics.',
    icon: 'ShoppingBag',
    color: {
      primary: 'purple',
      secondary: 'purple-600',
      gradient: 'from-purple-600 via-purple-500 to-purple-600',
    },
    features: [
      {
        title: 'AI-Powered Matching',
        description: 'Smart algorithms connect buyers with the perfect sellers based on location, preferences, and ratings.',
      },
      {
        title: 'Instant Logistics',
        description: 'Seamless delivery integration with real-time tracking and secure payment processing.',
      },
      {
        title: 'Trust & Safety',
        description: 'Verified sellers, secure transactions, and buyer protection for peace of mind.',
      },
      {
        title: 'Community Driven',
        description: 'Build your reputation and connect with local buyers and sellers in your area.',
      },
    ],
    benefits: [
      'List items in under 2 minutes',
      'Reach thousands of local buyers',
      'Secure payment processing',
      'Built-in messaging system',
      'Mobile-first experience',
    ],
    cta: {
      primary: 'Start Selling',
      secondary: 'Browse Marketplace',
    },
    stats: [
      { label: 'Active Users', value: '500K+' },
      { label: 'Listings', value: '2M+' },
      { label: 'Cities', value: '150+' },
    ],
  },
  foodpe: {
    id: 'foodpe',
    name: 'FoodPe',
    tagline: 'Hyper-Local Food Delivery',
    description: 'Supporting local restaurants with fast, reliable food delivery. Order from your favorite neighborhood eateries and get meals delivered to your doorstep.',
    icon: 'Truck',
    color: {
      primary: 'orange',
      secondary: 'orange-600',
      gradient: 'from-orange-600 via-orange-500 to-orange-600',
    },
    features: [
      {
        title: 'Local Restaurant Focus',
        description: 'Exclusively featuring neighborhood restaurants and local food businesses.',
      },
      {
        title: 'Fast Delivery',
        description: 'Average delivery time of 30 minutes with real-time order tracking.',
      },
      {
        title: 'Restaurant Support',
        description: 'Zero commission model supporting local businesses and food entrepreneurs.',
      },
      {
        title: 'Diverse Cuisines',
        description: 'From street food to fine dining, discover the best local flavors.',
      },
    ],
    benefits: [
      'Support local businesses',
      'Fast 30-minute delivery',
      'Wide variety of cuisines',
      'Easy ordering process',
      'Real-time tracking',
    ],
    cta: {
      primary: 'Order Now',
      secondary: 'Partner With Us',
    },
    stats: [
      { label: 'Restaurants', value: '10K+' },
      { label: 'Orders/Day', value: '50K+' },
      { label: 'Cities', value: '80+' },
    ],
  },
  kiranape: {
    id: 'kiranape',
    name: 'KiranaPe',
    tagline: 'Digitize Your Neighborhood Store',
    description: 'Instantly digitize your neighborhood grocery store. Manage inventory, accept online orders, and serve customers both in-store and online.',
    icon: 'ShoppingBag',
    color: {
      primary: 'green',
      secondary: 'green-600',
      gradient: 'from-green-600 via-green-500 to-green-600',
    },
    features: [
      {
        title: 'Instant Digitization',
        description: 'Go online in minutes with our simple setup process. No technical knowledge required.',
      },
      {
        title: 'Inventory Management',
        description: 'Track stock levels, manage products, and automate reordering.',
      },
      {
        title: 'Dual Channel Sales',
        description: 'Serve customers both in-store and online from a single platform.',
      },
      {
        title: 'Payment Integration',
        description: 'Accept UPI, cards, and cash with seamless payment processing.',
      },
    ],
    benefits: [
      'Go live in under 10 minutes',
      'Manage inventory easily',
      'Accept online orders',
      'Customer management tools',
      'Analytics dashboard',
    ],
    cta: {
      primary: 'Get Started',
      secondary: 'See Demo',
    },
    stats: [
      { label: 'Stores', value: '25K+' },
      { label: 'Products Listed', value: '5M+' },
      { label: 'Cities', value: '200+' },
    ],
  },
  repairpe: {
    id: 'repairpe',
    name: 'RepairPe',
    tagline: 'Trusted Home Services On Demand',
    description: 'Connect with verified service providers for all your home repair and maintenance needs. From plumbing to electrical, we\'ve got you covered.',
    icon: 'Wrench',
    color: {
      primary: 'blue',
      secondary: 'blue-600',
      gradient: 'from-blue-600 via-blue-500 to-blue-600',
    },
    features: [
      {
        title: 'Verified Professionals',
        description: 'All service providers are background-checked and verified for your safety.',
      },
      {
        title: 'On-Demand Service',
        description: 'Book services instantly with same-day or scheduled appointments.',
      },
      {
        title: 'Transparent Pricing',
        description: 'Know the cost upfront with no hidden charges or surprise fees.',
      },
      {
        title: 'Quality Guarantee',
        description: '100% satisfaction guarantee with our quality assurance program.',
      },
    ],
    benefits: [
      'Verified service providers',
      'Same-day service available',
      'Transparent pricing',
      'Quality guarantee',
      'Easy booking process',
    ],
    cta: {
      primary: 'Book Service',
      secondary: 'Become Provider',
    },
    stats: [
      { label: 'Service Providers', value: '15K+' },
      { label: 'Services Completed', value: '1M+' },
      { label: 'Cities', value: '100+' },
    ],
  },
  snappe: {
    id: 'snappe',
    name: 'SnapPe',
    tagline: 'Professional Photography Marketplace',
    description: 'Find professional photographers for every occasion. From weddings to corporate events, connect with skilled photographers in your area.',
    icon: 'Camera',
    color: {
      primary: 'pink',
      secondary: 'pink-600',
      gradient: 'from-pink-600 via-pink-500 to-pink-600',
    },
    features: [
      {
        title: 'Curated Photographers',
        description: 'Hand-picked professional photographers with verified portfolios and reviews.',
      },
      {
        title: 'Portfolio Showcase',
        description: 'Browse portfolios, compare styles, and find the perfect match for your event.',
      },
      {
        title: 'Flexible Packages',
        description: 'Choose from hourly, half-day, or full-day packages to fit your budget.',
      },
      {
        title: 'Easy Booking',
        description: 'Book and pay securely through the platform with instant confirmation.',
      },
    ],
    benefits: [
      'Verified photographers',
      'Portfolio browsing',
      'Flexible packages',
      'Secure booking',
      'Quality guarantee',
    ],
    cta: {
      primary: 'Find Photographer',
      secondary: 'Join as Photographer',
    },
    stats: [
      { label: 'Photographers', value: '5K+' },
      { label: 'Events Booked', value: '50K+' },
      { label: 'Cities', value: '60+' },
    ],
  },
  ridepe: {
    id: 'ridepe',
    name: 'RidePe',
    tagline: 'Community-Driven Mobility',
    description: 'Carpooling and mobility solutions for the modern commuter. Share rides, reduce costs, and build a sustainable transportation community.',
    icon: 'Car',
    color: {
      primary: 'yellow',
      secondary: 'yellow-600',
      gradient: 'from-yellow-600 via-yellow-500 to-yellow-600',
    },
    features: [
      {
        title: 'Carpool Matching',
        description: 'Smart algorithms match you with commuters on similar routes.',
      },
      {
        title: 'Cost Sharing',
        description: 'Split travel costs fairly with transparent pricing.',
      },
      {
        title: 'Safety First',
        description: 'Verified users, background checks, and in-app emergency features.',
      },
      {
        title: 'Eco-Friendly',
        description: 'Reduce carbon footprint by sharing rides and reducing traffic.',
      },
    ],
    benefits: [
      'Save on commute costs',
      'Reduce carbon footprint',
      'Verified community',
      'Flexible scheduling',
      'Safe and secure',
    ],
    cta: {
      primary: 'Start Riding',
      secondary: 'Learn More',
    },
    stats: [
      { label: 'Active Riders', value: '200K+' },
      { label: 'Rides Shared', value: '1M+' },
      { label: 'Cities', value: '50+' },
    ],
  },
  docpe: {
    id: 'docpe',
    name: 'DocPe',
    tagline: 'Doctor Appointment Marketplace',
    description: 'Book appointments with verified doctors instantly. Connect with healthcare providers in your area for consultations, check-ups, and medical services.',
    icon: 'Stethoscope',
    color: {
      primary: 'red',
      secondary: 'red-600',
      gradient: 'from-red-600 via-red-500 to-red-600',
    },
    features: [
      {
        title: 'Verified Doctors',
        description: 'All healthcare providers are verified and licensed for your safety and peace of mind.',
      },
      {
        title: 'Instant Booking',
        description: 'Book appointments in real-time with instant confirmation and reminders.',
      },
      {
        title: 'Multiple Specialties',
        description: 'Access doctors across all specialties from general medicine to specialized care.',
      },
      {
        title: 'Telemedicine Support',
        description: 'Video consultations available for remote healthcare access.',
      },
    ],
    benefits: [
      'Verified healthcare providers',
      'Instant appointment booking',
      'Multiple specialties available',
      'Telemedicine consultations',
      'Health records management',
    ],
    cta: {
      primary: 'Book Appointment',
      secondary: 'Find Doctor',
    },
    stats: [
      { label: 'Doctors', value: '10K+' },
      { label: 'Appointments', value: '500K+' },
      { label: 'Cities', value: '100+' },
    ],
  },
  ticketpe: {
    id: 'ticketpe',
    name: 'TicketPe',
    tagline: 'Entertainment Booking Platform',
    description: 'Book movie tickets, event passes, and entertainment experiences. Your alternative to BMS with better deals and seamless booking.',
    icon: 'Ticket',
    color: {
      primary: 'teal',
      secondary: 'teal-600',
      gradient: 'from-teal-600 via-teal-500 to-teal-600',
    },
    features: [
      {
        title: 'Movie Tickets',
        description: 'Book cinema tickets with seat selection and instant confirmation.',
      },
      {
        title: 'Event Passes',
        description: 'Access concerts, sports events, and live shows with exclusive deals.',
      },
      {
        title: 'Best Prices',
        description: 'Competitive pricing with special offers and discounts for members.',
      },
      {
        title: 'Easy Refunds',
        description: 'Hassle-free cancellation and refund policies for your convenience.',
      },
    ],
    benefits: [
      'Movie ticket booking',
      'Event passes available',
      'Best prices guaranteed',
      'Easy refunds',
      'Mobile-first experience',
    ],
    cta: {
      primary: 'Book Tickets',
      secondary: 'Browse Events',
    },
    stats: [
      { label: 'Theaters', value: '5K+' },
      { label: 'Events', value: '10K+' },
      { label: 'Cities', value: '200+' },
    ],
  },
};

export const getAllApps = () => Object.values(appsConfig);
export const getAppById = (id: string): AppConfig | undefined => appsConfig[id];

