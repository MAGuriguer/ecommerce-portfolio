'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Prodotti' },
  { href: '/cart', label: 'Carrello' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">MiniShop</Link>

        <button
          className="sm:hidden p-2 border rounded-md"
          onClick={() => setOpen(s => !s)}
          aria-label="Apri menu"
        >
          ☰
        </button>

        <nav className={`sm:flex gap-6 ${open ? 'block mt-3' : 'hidden sm:flex'}`}>
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`py-2 sm:py-0 hover:underline ${
                pathname === item.href ? 'font-medium underline' : ''
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
