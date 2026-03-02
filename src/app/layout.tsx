import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'SuperAlloyPro | Superalloy Casting, Forging & Machining',
    template: '%s | SuperAlloyPro',
  },
  description: 'Premium superalloy, Inconel, and titanium casting, forging & machining. Vacuum investment casting, precision CNC. ISO 9001 certified.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Replace GA_MEASUREMENT_ID with your actual GA4 ID before launch */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'SuperAlloyPro',
          url: 'https://superalloypro.com',
          description: 'Superalloy, Inconel, and titanium casting, forging & machining services.',
        })}} />
      </head>
      <body className="bg-white text-gray-700">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
