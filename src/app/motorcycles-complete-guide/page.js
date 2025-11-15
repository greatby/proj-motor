export const metadata = {
  title: "Motorcycles & Bikes – Complete Guide to Two-Wheelers | AutoHub",
  description:
    "Explore the complete guide to motorcycles and bikes — sport bikes, cruisers, touring models, adventure two-wheelers, and scooters with expert insights.",
  alternates: {
    canonical: "https://yourwebsite.com/motorcycles-complete-guide.html",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Motorcycles & Bikes – Complete Guide",
  "description":
    "A complete guide to motorcycles covering sport bikes, naked bikes, cruisers, touring motorcycles, adventure bikes, and scooters.",
  "publisher": {
    "@type": "Organization",
    "name": "AutoHub",
  },
  "url": "https://yourwebsite.com/motorcycles-complete-guide.html",
  "datePublished": "2025-11-14",
};

export default function BikesPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl shadow-2xl mb-20">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-700 to-blue-500 opacity-95"></div>

        <div className="relative z-10 text-center py-28 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Complete Guide to Motorcycles & Bikes
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore the world of two-wheelers — performance, comfort, adventure,
            practicality and everything in between.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          The World of Two-Wheel Freedom
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">
          Motorcycles represent the purest form of motorized mobility—lightweight, 
          efficient, and thrilling. Whether you're riding for adrenaline, comfort, 
          or daily convenience, the world of motorcycles offers endless variety 
          and engineering excellence.
        </p>
      </section>

      {/* MOTORCYCLE TYPES */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">
          Types of Motorcycles
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Sport Bikes */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Sport Bikes
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Aerodynamic, aggressive, and performance-focused. Built for speed, 
              precision, and track-ready handling with high-revving engines.
            </p>
          </div>

          {/* Naked Bikes */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Naked / Standard Bikes
            </h3>
            <p className="text-slate-600">
              Versatile two-wheelers with upright ergonomics, strong mid-range 
              engines and everyday practicality. Great for city and highway.
            </p>
          </div>

          {/* Cruisers */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Cruisers
            </h3>
            <p className="text-slate-600">
              Low-slung seating, torquey engines and relaxed riding geometry. 
              Perfect for long-distance comfort and iconic styling.
            </p>
          </div>

          {/* Touring & Adventure */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Touring & Adventure Bikes
            </h3>
            <p className="text-slate-600">
              Built for long rides, high comfort, big fuel tanks and versatile 
              terrain capability. Adventure models blend touring comfort with 
              off-road readiness.
            </p>
          </div>

          {/* Scooters */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl hover:-translate-y-1 transition md:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Scooters & Commuters
            </h3>
            <p className="text-slate-600">
              Perfect for city commuting—light, fuel-efficient, easy to maneuver 
              and low maintenance. Increasingly popular for daily use.
            </p>
          </div>
        </div>
      </section>

      {/* RIDING & PERFORMANCE INSIGHTS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Performance & Riding Characteristics
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-lg text-slate-700 leading-relaxed">
          <li>🏍️ <strong>Handling:</strong> Lightweight frames mean unmatched agility.</li>
          <li>⚡ <strong>Power Delivery:</strong> Instant torque across all categories.</li>
          <li>🛞 <strong>Braking:</strong> ABS, dual-disc setups & enhanced stopping power.</li>
          <li>🎯 <strong>Purpose-Built Engineering:</strong> Every category serves a unique need.</li>
          <li>🛣️ <strong>Touring Comfort:</strong> Ergonomics & suspension tuned for long rides.</li>
          <li>🔥 <strong>Performance Bikes:</strong> Precision control and high-rev engines.</li>
        </ul>
      </section>

      {/* SAFETY SECTION */}
      <section className="mt-24 mb-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Staying Safe While Riding
        </h2>

        <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
          Motorcycle safety is essential—always wear proper riding gear, follow 
          traffic rules, maintain your bike regularly, and stay aware on the road. 
          ABS, traction control, and modern rider aids significantly improve safety.
        </p>
      </section>
    </>
  );
}
