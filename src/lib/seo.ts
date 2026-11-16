import type { Metadata } from "next";
import { SITE_NAME, SITE_OG_IMAGE, SITE_URL, buildAlternates } from "@/data/site";

interface PageSeoInput {
  locale: string;
  /** Locale-less path, e.g. "" for home or "/destinations". */
  path: string;
  title: string;
  description: string;
  image?: string;
}

/** Complete per-page metadata: canonical + hreflang, OpenGraph and Twitter cards. */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  image,
}: PageSeoInput): Metadata {
  const ogImage = image || SITE_OG_IMAGE;
  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? ["en_US"] : ["id_ID"],
      url: `${SITE_URL}/${locale}${path}`,
      title,
      description,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
