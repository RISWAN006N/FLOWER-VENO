import { Product } from './types';

export const COMPANY_PHONE = "9746818482";
export const DELIVERY_AREA = "Madiwala & 4km Surroundings";

// Mock data using Picsum as requested. 
// Ideally these would be real flower images.
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Red Rose Bouquet",
    price: 499,
    description: "A timeless symbol of love. 12 fresh red roses wrapped in elegance.",
    image: "https://picsum.photos/id/106/400/400", // Using specific IDs to try and get relevant-ish looking colors if possible, otherwise random
    category: 'bouquet'
  },
  {
    id: 2,
    name: "Sunshine Sunflower Bundle",
    price: 399,
    description: "Brighten their day with these radiant sunflowers.",
    image: "https://picsum.photos/id/10/400/400",
    category: 'bouquet'
  },
  {
    id: 3,
    name: "Pink Lily Perfection",
    price: 650,
    description: "Elegant pink lilies arranged to perfection.",
    image: "https://picsum.photos/id/30/400/400",
    category: 'basket'
  },
  {
    id: 4,
    name: "Romantic Couple Special",
    price: 999,
    description: "Our premium large bouquet for your special one.",
    image: "https://picsum.photos/id/64/400/400",
    category: 'bouquet'
  },
  {
    id: 5,
    name: "Orchid Majesty",
    price: 850,
    description: "Exotic purple orchids that last long.",
    image: "https://picsum.photos/id/88/400/400",
    category: 'single'
  },
  {
    id: 6,
    name: "Mixed Flower Basket",
    price: 550,
    description: "A colorful assortment of seasonal blooms.",
    image: "https://picsum.photos/id/96/400/400",
    category: 'basket'
  }
];

export const HERO_IMAGES = [
  "https://picsum.photos/id/152/1200/600",
  "https://picsum.photos/id/292/1200/600",
];