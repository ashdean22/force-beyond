import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SuperAlloyPro',
  description: 'Learn about SuperAlloyPro — your trusted partner for superalloy, Inconel, and titanium casting, forging, and machining services.',
};

export default function AboutPage() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">About SuperAlloyPro</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          SuperAlloyPro is a premier manufacturer specializing in the casting, forging, and precision machining of superalloys, Inconel, and titanium. With over 30 years of combined experience, we serve the aerospace, power generation, nuclear, oil & gas, and defense industries.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our capabilities include vacuum investment casting (VIM), open-die and closed-die forging, rolled ring forging, and 3-to-5-axis CNC machining — all optimized specifically for high-temperature and corrosion-resistant alloys.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          We are ISO 9001:2015 certified and maintain full material traceability from melt to final inspection. Every component is backed by comprehensive NDT, mechanical testing, and certification documentation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Choose Us</h2>
        <ul className="space-y-3 text-gray-600 text-sm">
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />Specialized exclusively in superalloys, Inconel, and titanium</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />Vacuum casting, forging, and precision machining under one roof</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />Full traceability and NDT on every component</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />Engineering support from material selection to final inspection</li>
          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />US-based operations with competitive global pricing</li>
        </ul>
      </div>
    </section>
  );
}
