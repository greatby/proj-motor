export function GET() {
  const baseUrl = "https://yourwebsite.com";
  const lastmod = "2025-11-14";

  const urls = [
    {
      loc: `${baseUrl}/`,
      changefreq: "daily",
      priority: "1.0",
      lastmod,
    },
    {
      loc: `${baseUrl}/cars-complete-guide.html`,
      changefreq: "weekly",
      priority: "0.9",
      lastmod,
    },
    {
      loc: `${baseUrl}/motorcycles-complete-guide.html`,
      changefreq: "weekly",
      priority: "0.9",
      lastmod,
    },
    {
      loc: `${baseUrl}/electric-vehicles-guide.html`,
      changefreq: "weekly",
      priority: "0.9",
      lastmod,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
