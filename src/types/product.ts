export type Product = {
  id: string;            // sku
  slug: string;          // url-friendly
  title: string;
  description: string;
  priceCents: number;    // es. 1999 = €19.99
  currency: 'EUR';
  image: string;         // per M2 usiamo placeholder esterni
  tags?: string[];
  rating?: number;       // 0..5
};
