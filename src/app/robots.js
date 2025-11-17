export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://proj-hospitality.vercel.app/sitemap.xml",
  };
}
