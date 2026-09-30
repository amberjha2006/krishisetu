'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary/90 text-white px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold">KrishiSetu 🌾</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {/* Language switcher placeholder */}
            <button className="hover:opacity-80 transition-opacity">
              🌐 English
            </button>
            {/* AI status placeholder */}
            <div className="flex items-center space-x-2">
              <div
                className="w-2 h-2 bg-green-500 rounded-full"
                title="AI Online"
              ></div>
              <span className="text-sm">AI Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="hidden md:hidden bg-white border-t px-3 py-2">
        <div className="flex justify-around">
          <Link
            href="/advisory"
            className={`
              flex flex-col items-center space-y-1 px-2 py-1 rounded-md
              ${pathname === '/advisory' ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50'}
            `}
            aria-current={pathname === '/advisory' ? 'page' : undefined}
          >
            <span>🌱 Advisory</span>
          </Link>
          <Link
            href="/doctor"
            className={`
              flex flex-col items-center space-y-1 px-2 py-1 rounded-md
              ${pathname === '/doctor' ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50'}
            `}
            aria-current={pathname === '/doctor' ? 'page' : undefined}
          >
            <span>🩺 Crop Doctor</span>
          </Link>
          <Link
            href="/network"
            className={`
              flex flex-col items-center space-y-1 px-2 py-1 rounded-md
              ${pathname === '/network' ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50'}
            `}
            aria-current={pathname === '/network' ? 'page' : undefined}
          >
            <span>🌐 BRICS Network</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}