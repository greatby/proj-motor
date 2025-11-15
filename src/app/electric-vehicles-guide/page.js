export const metadata = {
  title: "Electric Vehicles Guide – EV Types, Charging, Range & Future | AutoHub",
  description:
    "Explore the complete guide to electric vehicles — EV types, charging systems, battery technology, range insights, performance, benefits, costs and the future of electric mobility.",
  alternates: {
    canonical: "https://yourwebsite.com/electric-vehicles-guide.html",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Electric Vehicles Guide",
  "description":
    "A comprehensive EV guide covering electric motor technology, charging types, range, battery systems, EV types, hybrids, PHEVs, and the future of electric transportation.",
  "publisher": {
    "@type": "Organization",
    "name": "AutoHub",
  },
  "url": "https://yourwebsite.com/electric-vehicles-guide.html",
  "datePublished": "2025-11-14",
};

export default function EVGuidePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl shadow-2xl mb-20">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-700 to-emerald-500 opacity-95" />
        <div className="relative z-10 text-center py-28 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow">
            Complete Guide to Electric Vehicles (EVs)
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Understand EV technology, charging systems, battery types, range,
            plug-in hybrids, and the sustainable future of transportation.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <h2 className="text-3xl font-bold text-slate-800">
          The Electric Mobility Revolution
        </h2>
        <p className="text-lg text-slate-700 mt-4 leading-relaxed max-w-4xl">
          Electric vehicles have changed the landscape of modern mobility. 
          With zero tailpipe emissions, instant torque, lower running costs 
          and advanced technology, EVs are shaping the future of global 
          transportation.
        </p>
      </section>

      {/* EV BASICS */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">
          How Electric Vehicles Work
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Electric Motor
            </h3>
            <p className="text-slate-600 leading-relaxed">
              EVs use electric motors powered by rechargeable battery packs. 
              They deliver instant torque, smooth acceleration, and quiet 
              operation with fewer moving parts than combustion engines.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Battery Pack
            </h3>
            <p className="text-slate-600">
              Lithium-ion battery packs store electrical energy. Capacity 
              (kWh) determines range, performance, and charging time.
            </p>
          </div>
        </div>
      </section>

      {/* TYPES OF EVs */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">
          Types of Electric Vehicles
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-2xl border shadow-lg hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Battery Electric Vehicles (BEVs)
            </h3>
            <p className="text-slate-600">
              Fully electric with no fuel engine. They run on battery power 
              alone and offer zero emissions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-lg hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Plug-In Hybrid Electric Vehicles (PHEVs)
            </h3>
            <p className="text-slate-600">
              Combine a battery-powered electric motor with a gasoline engine. 
              Capable of short electric-only driving.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-lg hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Hybrid Electric Vehicles (HEVs)
            </h3>
            <p className="text-slate-600">
              Use both a petrol engine and electric motor, with regenerative 
              braking charging the battery.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-lg hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Fuel Cell Electric Vehicles (FCEVs)
            </h3>
            <p className="text-slate-600">
              Powered by hydrogen fuel cells producing electricity. Zero 
              emissions and fast refueling.
            </p>
          </div>
        </div>
      </section>

      {/* CHARGING */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Charging Infrastructure
        </h2>

        <p className="text-lg text-slate-700 max-w-3xl mb-8">
          EV charging varies by speed, power delivery, and connector type. 
          Home chargers, workplace stations, and public fast chargers form 
          the backbone of EV usability.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-xl font-bold text-slate-900">
              Level 1 Charging (Slow)
            </h3>
            <p className="mt-2 text-slate-600">
              Uses standard home outlets. Best for overnight home charging.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-xl font-bold text-slate-900">
              Level 2 Charging (AC Fast)
            </h3>
            <p className="mt-2 text-slate-600">
              Home wall boxes & public chargers. Much faster than Level 1.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-xl font-bold text-slate-900">
              DC Fast Charging
            </h3>
            <p className="mt-2 text-slate-600">
              High-power charging — 0 to 80% in 20–40 minutes depending on EV.
            </p>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Advantages of Electric Vehicles
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-lg text-slate-700 leading-relaxed">
          <li>⚡ Zero tailpipe emissions</li>
          <li>⚡ Lower running & maintenance costs</li>
          <li>⚡ Instant torque & smooth performance</li>
          <li>⚡ Silent, vibration-free drive</li>
          <li>⚡ Regenerative braking boosts efficiency</li>
          <li>⚡ Future-ready technology & features</li>
        </ul>
      </section>

      {/* FUTURE OF EVs */}
      <section className="mt-24 mb-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          The Future of EV Technology
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
          As battery technology improves and fast-charging networks expand, 
          EVs are rapidly becoming mainstream. Innovations like solid-state 
          batteries, autonomous systems, renewable energy integration and 
          advanced charging infrastructure will define the next era of clean 
          transportation.
        </p>
      </section>
    </>
  );
}
