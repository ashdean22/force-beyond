import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { TARGET_KEYWORDS, CONTENT_HUBS, AI_PAGES, getServiceBySlug, getHubBySlug } from '@/data/services';

export function generateStaticParams() {
  return [
    ...TARGET_KEYWORDS.map(s => ({ slug: s.slug })),
    ...CONTENT_HUBS.map(h => ({ slug: h.slug })),
    ...AI_PAGES.map(a => ({ slug: a.slug })),
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const svc = getServiceBySlug(params.slug);
  if (svc) return { title: svc.metaTitle, description: svc.metaDescription };
  const hub = getHubBySlug(params.slug);
  if (hub) return { title: hub.metaTitle, description: hub.metaDescription };
  const ai = AI_PAGES.find(a => a.slug === params.slug);
  if (ai) return { title: ai.metaTitle, description: ai.metaDescription };
  return {};
}

export default function SlugPage({ params }: { params: { slug: string } }) {
  const svc = getServiceBySlug(params.slug);
  if (svc) return <ServicePage data={svc} />;

  const hub = getHubBySlug(params.slug);
  if (hub) return <HubPage data={hub} />;

  const ai = AI_PAGES.find(a => a.slug === params.slug);
  if (ai) return <AIPage data={ai} />;

  notFound();
}

/* ── SERVICE PAGE (14 keyword pages) ─────────────────────────── */
function ServicePage({ data }: { data: typeof TARGET_KEYWORDS[0] }) {
  const related = data.relatedSlugs.map(s => getServiceBySlug(s)).filter(Boolean);

  return (
    <>
      {/* Schema: FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: data.faqs.map(f => ({
          '@type': 'Question', name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      })}} />

      {/* Hero */}
      <section className="bg-gray-50 px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 text-sm font-semibold mb-3 uppercase tracking-wide">{data.material.replace(/-/g, ' ')} · {data.process}</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{data.heroTagline}</h1>
          <p className="text-lg text-gray-500 max-w-2xl mb-6">{data.heroDescription}</p>
          <Link href="/request-quote/" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Request a Quote →
          </Link>
        </div>
      </section>

      {/* Body Content */}
      <section className="px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          {data.overview.split('\n\n').map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      </section>

      {/* Specs Table */}
      <section className="bg-gray-50 px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {data.specifications.map((spec, i) => (
              <div key={i} className={`flex justify-between px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <span className="font-medium text-gray-700">{spec.label}</span>
                <span className="text-gray-500 text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Industries */}
      <section className="px-6 py-14">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Applications</h2>
            <ul className="space-y-2">
              {data.applications.map(a => (
                <li key={a} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />{a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Industries</h2>
            <div className="flex flex-wrap gap-2">
              {data.industries.map(ind => (
                <span key={ind} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">{ind}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {data.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="px-6 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {related.map(r => r && (
                <Link key={r.slug} href={`/${r.slug}/`} className="p-4 rounded-lg border border-gray-100 hover:border-blue-200 text-sm font-medium text-gray-800 hover:text-blue-600 transition-all">
                  {r.title} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-blue-600 text-white px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">Get a Quote for {data.title}</h2>
        <p className="text-blue-100 mb-5 max-w-lg mx-auto">Tell us about your project and we'll provide a detailed estimate within 24 hours.</p>
        <Link href="/request-quote/" className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50">
          Request a Free Quote →
        </Link>
      </section>
    </>
  );
}

/* ── HUB PAGE (Superalloys, Inconel, Titanium) ───────────────── */
function HubPage({ data }: { data: typeof CONTENT_HUBS[0] }) {
  const children = data.childSlugs.map(s => getServiceBySlug(s)).filter(Boolean);

  return (
    <>
      <section className="bg-gray-50 px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{data.heroTagline}</h1>
          <p className="text-lg text-gray-500 max-w-2xl">{data.heroDescription}</p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-4xl mx-auto">
          {data.overview.split('\n\n').map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {children.map(c => c && (
              <Link key={c.slug} href={`/${c.slug}/`} className="bg-white p-5 rounded-lg border border-gray-100 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-1">{c.title}</h3>
                <p className="text-xs text-gray-400 capitalize">{c.process} · {c.keyword}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── AI / LONG-TAIL PAGES ─────────────────────────────────────── */
function AIPage({ data }: { data: typeof AI_PAGES[0] }) {
  return (
    <>
      <section className="bg-gray-50 px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">{data.type}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">{data.title}</h1>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-6">{data.content}</p>
          <p className="text-gray-400 text-sm italic">Full article content coming soon. This page targets: <strong>{data.metaDescription}</strong></p>
        </div>
      </section>

      <section className="bg-blue-600 text-white px-6 py-10 text-center">
        <h2 className="text-xl font-bold mb-3">Need Help Choosing?</h2>
        <Link href="/request-quote/" className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg">
          Talk to an Engineer →
        </Link>
      </section>
    </>
  );
}
