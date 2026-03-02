import Link from 'next/link';

const services = [
  { title: 'Superalloys Casting', href: '/superalloys-casting/' },
  { title: 'Superalloys Forging', href: '/superalloys-forging/' },
  { title: 'Superalloys Machining', href: '/superalloys-machining/' },
  { title: 'Inconel Casting', href: '/inconel-casting/' },
  { title: 'Inconel Forging', href: '/inconel-forging/' },
  { title: 'Inconel Machining', href: '/inconel-machining/' },
  { title: 'Inconel 718 Casting', href: '/inconel-718-casting/' },
  { title: 'Inconel 718 Forging', href: '/inconel-718-forging/' },
  { title: 'Inconel 718 Machining', href: '/inconel-718-machining/' },
  { title: 'Inconel 625 Casting', href: '/inconel-625-casting/' },
  { title: 'Inconel 625 Forging', href: '/inconel-625-forging/' },
  { title: 'Inconel 625 Machining', href: '/inconel-625-machining/' },
  { title: 'Titanium Casting', href: '/titanium-casting/' },
  { title: 'Titanium Machining', href: '/titanium-machining/' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 text-sm font-semibold mb-4">ISO 9001:2015 CERTIFIED</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Superalloy Casting, Forging &amp; Machining
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mb-8">
            Precision manufacturing of Inconel, titanium, and nickel-based superalloys for aerospace, energy, nuclear, and defense applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/request-quote/" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
              Request a Quote →
            </Link>
            <Link href="/superalloys/" className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-200 hover:border-gray-300">
              Explore Materials
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 px-6 py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: '30+', label: 'Years Experience' },
            { val: '14', label: 'Alloy Grades' },
            { val: '±0.005"', label: 'Casting Tolerance' },
            { val: 'ISO 9001', label: 'Certified' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-extrabold text-gray-900">{s.val}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid — all 14 keyword pages */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Our Services</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Dedicated capabilities for every material and process combination.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map(svc => (
              <Link
                key={svc.href}
                href={svc.href}
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all text-sm font-medium text-gray-800 hover:text-blue-600"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                {svc.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Material Hubs */}
      <section className="bg-gray-50 px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Materials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Superalloys', desc: 'Nickel, cobalt, and iron-based alloys for extreme temperatures.', href: '/superalloys/' },
              { name: 'Inconel', desc: 'Full range — 718, 625, 600, and specialty grades.', href: '/inconel/' },
              { name: 'Titanium', desc: 'Lightweight, corrosion-resistant alloys for aerospace and medical.', href: '/titanium/' },
            ].map(m => (
              <Link key={m.href} href={m.href} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{m.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{m.desc}</p>
                <span className="text-sm text-blue-600 font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-900 text-white px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Aerospace', 'Power Generation', 'Nuclear & SMR', 'Oil & Gas', 'Medical', 'Defense'].map(i => (
              <div key={i} className="py-4 px-3 rounded-lg bg-gray-800 text-sm font-medium">{i}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
