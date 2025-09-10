export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container mx-auto px-4 py-8 text-sm text-gray-600">
        © {new Date().getFullYear()} MiniShop · Built with Next.js + Tailwind
      </div>
    </footer>
  );
}
