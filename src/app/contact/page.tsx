import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact SuperAlloyPro for superalloy casting, forging, and machining quotes and technical inquiries.',
};

export default function ContactPage() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Contact Us</h1>
        <p className="text-gray-500 mb-8">Have questions about our capabilities? Need a quote? Reach out and we'll get back to you within 24 hours.</p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-600 mb-2"><strong>Email:</strong> info@superalloypro.com</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Phone:</strong> (800) 555-0199</p>
          <p className="text-sm text-gray-600"><strong>Hours:</strong> Monday–Friday, 8:00 AM – 5:00 PM EST</p>
        </div>

        <Link href="/request-quote/" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Request a Quote Instead →
        </Link>
      </div>
    </section>
  );
}
