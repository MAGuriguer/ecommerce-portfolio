import { Product } from '@/types/product';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
