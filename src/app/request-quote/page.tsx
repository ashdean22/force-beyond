import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Get a free quote for superalloy, Inconel, or titanium casting, forging, and machining. Response within 24 hours.',
};

export default function RequestQuotePage() {
  return (
    <>
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Request a Quote</h1>
          <p className="text-gray-500 mb-8">Tell us about your project. We'll respond with a detailed estimate within 24 hours.</p>

          <form className="space-y-5" action="#" method="POST">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input type="text" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input type="text" name="company" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" name="phone" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
              <select name="service" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select a service...</option>
                <option>Superalloys Casting</option>
                <option>Superalloys Forging</option>
                <option>Superalloys Machining</option>
                <option>Inconel Casting</option>
                <option>Inconel Forging</option>
                <option>Inconel Machining</option>
                <option>Titanium Casting</option>
                <option>Titanium Machining</option>
                <option>Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Material / Alloy Grade</label>
              <input type="text" name="material" placeholder="e.g. Inconel 718, Ti-6Al-4V" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Details *</label>
              <textarea name="details" rows={5} required placeholder="Describe your part, quantity, tolerances, application..." className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Submit Quote Request
            </button>
            <p className="text-xs text-gray-400 text-center">We respect your privacy. Your information will not be shared.</p>
          </form>
        </div>
      </section>
    </>
  );
}
