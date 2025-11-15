export const metadata = {
  title: "AutoHub – Automotive Reviews, Guides & EV Insights",
  description:
    "Expert car reviews, bike insights, EV knowledge, comparisons, buying guides & maintenance tips.",
  alternates: { canonical: "https://yourwebsite.com/" },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute inset-0 bg-linear-to-br from-blue-700 via-blue-500 to-slate-900 opacity-90"></div>

        <div className="relative z-10 text-center py-28 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Your Complete Automotive Knowledge Hub
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Discover expert automotive insights — cars, bikes, EVs, reviews,
            comparisons & buying guides.
          </p>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">Featured Insights</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            ["Latest Car Reviews", "Deep analysis of sedans, SUVs & luxury cars."],
            ["Motorcycle Guides", "Sport, cruiser, touring & adventure bikes."],
            ["Electric Vehicle Insights", "Range, charging, battery tech & more."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">Popular Categories</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            ["Sedans", "Efficiency, comfort & modern tech."],
            ["SUVs & Crossovers", "Capability & spaciousness."],
            ["Sport Bikes", "Aggressive performance & speed."],
            ["Cruiser Motorcycles", "Classic styling & comfort."],
            ["Trucks & Pickups", "Towing power & durability."],
            ["Scooters & Commuters", "Perfect for daily city rides."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY AUTOHUB */}
      <section className="mt-24 mb-24">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Why AutoHub?</h2>

        <ul className="grid md:grid-cols-2 gap-6 text-slate-700 text-lg leading-relaxed">
          <li>✔ Expert vehicle reviews</li>
          <li>✔ Powerful comparison tools</li>
          <li>✔ EV knowledge for modern buyers</li>
          <li>✔ Detailed buying guides</li>
          <li>✔ Smart maintenance tips</li>
          <li>✔ Latest automotive news</li>
        </ul>
      </section>
    </>
  );
}
