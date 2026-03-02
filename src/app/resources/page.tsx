import Link from 'next/link';
import type { Metadata } from 'next';
import { AI_PAGES } from '@/data/services';

export const metadata: Metadata = {
  title: 'Engineering Resources',
  description: 'Technical guides, alloy comparisons, and selection tools for superalloy, Inconel, and titanium manufacturing.',
};

export default function ResourcesPage() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Engineering Resources</h1>
        <p className="text-gray-500 mb-10">Technical guides, comparisons, and selection tools for engineers and procurement teams.</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {AI_PAGES.map(page => (
            <Link key={page.slug} href={`/${page.slug}/`} className="p-5 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <span className="text-xs font-medium text-blue-600 uppercase">{page.type}</span>
              <h2 className="font-semibold text-gray-900 mt-1 mb-2">{page.title}</h2>
              <p className="text-sm text-gray-500 line-clamp-2">{page.content}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
