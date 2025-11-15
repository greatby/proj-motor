export const metadata = {
  title: "Cars Complete Guide – Types, Features, Reviews & Insights | AutoHub",
  description:
    "Explore a complete guide to cars — sedans, SUVs, sports cars, luxury vehicles, EVs, specs, features, buying tips & expert automotive insights.",
  alternates: {
    canonical: "https://yourwebsite.com/cars-complete-guide.html",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cars Complete Guide",
  "description":
    "A complete guide covering sedans, SUVs, sports cars, EVs, specifications, performance, reviews & comparisons.",
  "publisher": {
    "@type": "Organization",
    "name": "AutoHub",
  },
  "url": "https://yourwebsite.com/cars-complete-guide.html",
  "datePublished": "2025-11-14",
};

export default function CarsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl shadow-2xl mb-20">
        <div className="absolute inset-0 bg-linear-to-br from-blue-800 via-blue-600 to-slate-900 opacity-90" />
        <div className="relative z-10 text-center py-28 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Complete Guide to Cars
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Explore sedans, SUVs, sports cars, EVs, features, specs, buying
            tips, performance insights & more.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section>
        <h2 className="text-3xl font-bold text-slate-800">Understanding Cars</h2>
        <p className="text-lg text-slate-700 mt-4 leading-relaxed">
          Cars have transformed personal mobility for more than a century. From
          compact hatchbacks to luxury sedans and high-performance sports cars,
          today’s automotive world offers something for every type of driver.
        </p>
      </section>

      {/* CAR TYPES */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">Types of Cars</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* SEDANS */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Sedans</h3>
            <p className="text-slate-600">
              Sedans offer comfort, fuel efficiency & smooth dynamics. Perfect
              for families and everyday commuting.
            </p>
          </div>

          {/* SUVS */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">SUVs</h3>
            <p className="text-slate-600">
              SUVs provide higher seating, greater cargo space & the ability to
              handle rugged terrain with ease.
            </p>
          </div>

          {/* SPORTS CARS */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Sports Cars</h3>
            <p className="text-slate-600">
              Designed for speed & precision, sports cars deliver unmatched
              performance & driving excitement.
            </p>
          </div>

          {/* TRUCKS / PICKUPS */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Trucks & Pickups
            </h3>
            <p className="text-slate-600">
              Built for towing, hauling, durability & practicality — ideal for
              heavy-duty tasks.
            </p>
          </div>

          {/* ELECTRIC VEHICLES */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition hover:-translate-y-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Electric Vehicles (EVs)
            </h3>
            <p className="text-slate-600">
              The future of mobility — EVs offer zero emissions, instant torque,
              and advanced technology.
            </p>
          </div>
        </div>
      </section>

      {/* KEY SPECIFICATIONS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Key Specifications to Know
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-lg text-slate-700 leading-relaxed">
          <li>⚙️ <strong>Engine Type:</strong> Petrol, diesel, hybrid, or electric</li>
          <li>🔧 <strong>Transmission:</strong> Manual, automatic, CVT, DCT</li>
          <li>🛞 <strong>Drivetrain:</strong> FWD, RWD, AWD, 4x4</li>
          <li>⛽ <strong>Fuel Efficiency:</strong> Mileage & running cost</li>
          <li>🧳 <strong>Boot Space:</strong> Practicality for daily & long trips</li>
          <li>🛡 <strong>Safety:</strong> Airbags, ADAS, crash ratings</li>
        </ul>
      </section>

      {/* BUYING ADVICE */}
      <section className="mt-24 mb-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Buying Advice
        </h2>
        <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
          Choosing the right car depends on your budget, family needs, usage
          pattern and desired features. Always compare multiple models, check
          ownership cost, and read expert reviews before buying.
        </p>
      </section>
    </>
  );
}
