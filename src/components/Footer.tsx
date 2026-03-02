import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA bar */}
      <div className="bg-blue-600 py-10 text-center px-6">
        <h2 className="text-2xl font-bold mb-2">Ready to Start Your Project?</h2>
        <p className="text-blue-100 mb-5">Get a quote for your superalloy components within 24 hours.</p>
        <Link href="/request-quote/" className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50">
          Request a Free Quote →
        </Link>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold text-gray-400 uppercase text-xs tracking-wider mb-3">Casting</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/superalloys-casting/" className="hover:text-white">Superalloys Casting</Link></li>
            <li><Link href="/inconel-casting/" className="hover:text-white">Inconel Casting</Link></li>
            <li><Link href="/inconel-718-casting/" className="hover:text-white">Inconel 718 Casting</Link></li>
            <li><Link href="/inconel-625-casting/" className="hover:text-white">Inconel 625 Casting</Link></li>
            <li><Link href="/titanium-casting/" className="hover:text-white">Titanium Casting</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-400 uppercase text-xs tracking-wider mb-3">Forging</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/superalloys-forging/" className="hover:text-white">Superalloys Forging</Link></li>
            <li><Link href="/inconel-forging/" className="hover:text-white">Inconel Forging</Link></li>
            <li><Link href="/inconel-718-forging/" className="hover:text-white">Inconel 718 Forging</Link></li>
            <li><Link href="/inconel-625-forging/" className="hover:text-white">Inconel 625 Forging</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-400 uppercase text-xs tracking-wider mb-3">Machining</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/superalloys-machining/" className="hover:text-white">Superalloys Machining</Link></li>
            <li><Link href="/inconel-machining/" className="hover:text-white">Inconel Machining</Link></li>
            <li><Link href="/inconel-718-machining/" className="hover:text-white">Inconel 718 Machining</Link></li>
            <li><Link href="/inconel-625-machining/" className="hover:text-white">Inconel 625 Machining</Link></li>
            <li><Link href="/titanium-machining/" className="hover:text-white">Titanium Machining</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-400 uppercase text-xs tracking-wider mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/about/" className="hover:text-white">About</Link></li>
            <li><Link href="/resources/" className="hover:text-white">Resources</Link></li>
            <li><Link href="/request-quote/" className="hover:text-white">Request Quote</Link></li>
            <li><Link href="/contact/" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500 px-6">
        © {new Date().getFullYear()} SuperAlloyPro. All rights reserved.
      </div>
    </footer>
  );
}
