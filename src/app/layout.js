import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AutoHub – Complete Automotive Information",
  description: "Cars, bikes, EVs, reviews, comparisons & buying guides.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* NAVBAR */}
        <nav className="backdrop-blur-xl bg-white/70 border-b border-slate-200 shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
            >
              AutoHub
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
              <Link
                href="/cars-complete-guide"
                className="hover:text-blue-600 transition"
              >
                Cars
              </Link>
              <Link
                href="/motorcycles-complete-guide"
                className="hover:text-blue-600 transition"
              >
                Bikes
              </Link>
              <Link
                href="/electric-vehicles-guide"
                className="hover:text-blue-600 transition"
              >
                Electric Vehicles
              </Link>
             
            </div>

            {/* Mobile menu toggle (optional later) */}
            <div className="md:hidden text-blue-600 font-semibold">Menu</div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="max-w-7xl mx-auto px-6 py-16">{children}</main>

        {/* FOOTER */}
        <footer className="bg-slate-900 text-slate-300 mt-28">
          <div className="max-w-7xl mx-auto px-6 py-14">
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  AutoHub
                </h3>
                <p className="text-sm text-slate-400">
                  Your trusted source for automotive reviews, EV knowledge,
                  comparisons and buying guides.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cars-complete-guide.html"
                      className="hover:text-white transition"
                    >
                      Cars
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/motorcycles-complete-guide.html"
                      className="hover:text-white transition"
                    >
                      Bikes & Motorcycles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/electric-vehicles-guide.html"
                      className="hover:text-white transition"
                    >
                      Electric Vehicles
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">More</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/reviews"
                      className="hover:text-white transition"
                    >
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/comparisons"
                      className="hover:text-white transition"
                    >
                      Comparisons
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/buying-guides"
                      className="hover:text-white transition"
                    >
                      Buying Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/maintenance"
                      className="hover:text-white transition"
                    >
                      Maintenance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center text-xs text-slate-500 mt-10 border-t border-slate-700 pt-6">
              © 2025 AutoHub. All Rights Reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
