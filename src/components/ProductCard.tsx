import Link from 'next/link';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/currency';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-xl border shadow-sm overflow-hidden bg-white">
      {/* Per semplicità usiamo <img>, niente next/image per ora */}
      <Link href={`/products/${product.slug}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full aspect-square object-cover"
          loading="lazy"
        />
      </Link>

      <div className="p-4 space-y-2">
        <Link
          href={`/products/${product.slug}`}
          className="block text-lg font-medium hover:underline"
        >
          {product.title}
        </Link>

        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-base font-semibold">
            {formatPrice(product.priceCents, product.currency ?? 'EUR')}
          </span>
          <Link
            href={`/products/${product.slug}`}
            className="px-3 py-1.5 rounded-lg border hover:bg-gray-50 text-sm"
          >
            Dettagli
          </Link>
        </div>
      </div>
    </article>
  );
}
