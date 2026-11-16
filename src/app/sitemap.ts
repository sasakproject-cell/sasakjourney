import { popularDestinations } from "@/data/destinations";
import { LOCALES, SITE_URL } from "@/data/site";
import type { MetadataRoute } from "next";

const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/destinations", changeFrequency: "weekly", priority: 0.9 },
  { path: "/transportation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
];

function languagesFor(path: string) {
  return {
    id: `${SITE_URL}/id${path}`,
    en: `${SITE_URL}/en${path}`,
    "x-default": `${SITE_URL}/id${path}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of STATIC_ROUTES) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}${route.path}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages: languagesFor(route.path) },
      });
    }
  }

  for (const destination of popularDestinations) {
    const path = `/destination/${destination.slug}`;
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: languagesFor(path) },
      });
    }
  }

  return entries;
}
