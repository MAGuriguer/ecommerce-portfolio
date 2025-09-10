import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'sku-classic-tee',
    slug: 'classic-tee',
    title: 'Classic Tee',
    description: 'T-shirt 100% cotone, taglio regular.',
    priceCents: 1999,
    currency: 'EUR',
    image: 'https://picsum.photos/seed/classic-tee/600/600',
    tags: ['tshirt', 'cotone'],
    rating: 4.6,
  },
  {
    id: 'sku-hoodie',
    slug: 'cozy-hoodie',
    title: 'Cozy Hoodie',
    description: 'Felpa con cappuccio, interno felpato.',
    priceCents: 4499,
    currency: 'EUR',
    image: 'https://picsum.photos/seed/cozy-hoodie/600/600',
    tags: ['felpa', 'hoodie'],
    rating: 4.8,
  },
  {
    id: 'sku-cap',
    slug: 'minimal-cap',
    title: 'Minimal Cap',
    description: 'Cappellino minimal, regolabile.',
    priceCents: 1499,
    currency: 'EUR',
    image: 'https://picsum.photos/seed/minimal-cap/600/600',
    tags: ['cap'],
    rating: 4.2,
  },
  {
    id: 'sku-sneakers',
    slug: 'lite-sneakers',
    title: 'Lite Sneakers',
    description: 'Sneakers leggere per tutti i giorni.',
    priceCents: 6999,
    currency: 'EUR',
    image: 'https://picsum.photos/seed/lite-sneakers/600/600',
    tags: ['scarpe'],
    rating: 4.5,
  },
  {
    id: 'sku-tote',
    slug: 'eco-tote',
    title: 'Eco Tote',
    description: 'Shopper in cotone riciclato.',
    priceCents: 1299,
    currency: 'EUR',
    image: 'https://picsum.photos/seed/eco-tote/600/600',
    tags: ['bag'],
    rating: 4.1,
  },
  {
    id: 'sku-mug',
    slug: 'coffee-mug',
    title: 'Coffee Mug',
    description: 'Tazza in ceramica, 300ml.',
    priceCents: 999,
    currency: 'EUR',
    image: 'https://picsum.photos/seed/coffee-mug/600/600',
    tags: ['mug'],
    rating: 4.3,
  },
];

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}
