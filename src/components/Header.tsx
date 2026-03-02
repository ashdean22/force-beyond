'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
          SuperAlloy<span className="text-blue-600">Pro</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/superalloys/" className="hover:text-gray-900">Superalloys</Link>
          <Link href="/inconel/" className="hover:text-gray-900">Inconel</Link>
          <Link href="/titanium/" className="hover:text-gray-900">Titanium</Link>
          <Link href="/resources/" className="hover:text-gray-900">Resources</Link>
          <Link href="/about/" className="hover:text-gray-900">About</Link>
          <Link href="/request-quote/" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-gray-100 px-6 py-4 space-y-3 text-sm font-medium text-gray-600">
          <Link href="/superalloys/" className="block" onClick={() => setOpen(false)}>Superalloys</Link>
          <Link href="/inconel/" className="block" onClick={() => setOpen(false)}>Inconel</Link>
          <Link href="/titanium/" className="block" onClick={() => setOpen(false)}>Titanium</Link>
          <Link href="/resources/" className="block" onClick={() => setOpen(false)}>Resources</Link>
          <Link href="/about/" className="block" onClick={() => setOpen(false)}>About</Link>
          <Link href="/request-quote/" className="block mt-3 text-center px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={() => setOpen(false)}>
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
