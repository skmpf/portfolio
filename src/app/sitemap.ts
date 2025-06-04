import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  return [
    {
      url: "https://skempf.com",
      lastModified: currentDate,
      priority: 1,
      changeFrequency: "monthly",
    },
  ];
}
