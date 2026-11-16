// ==========================================
// Central site config — used by SEO metadata, sitemap, robots and JSON-LD.
// When the custom domain (sasakjourney.com) is connected in Vercel,
// change SITE_URL here only and every canonical/OG/sitemap URL follows.
// ==========================================

export const SITE_URL = "https://sasakjourney.vercel.app";
export const SITE_NAME = "Sasak Journey";

export const SITE_PHONE_DISPLAY = "+62 895-6340-60842";
export const SITE_PHONE_SCHEMA = "+62-895-6340-60842";
export const SITE_EMAIL = "sasakproject@gmail.com";
export const SITE_INSTAGRAM = "https://www.instagram.com/sasakjourney";

// Default social-share image (Gili Trawangan photo also used in destinations data)
export const SITE_OG_IMAGE =
  "https://gobackpacking.com/wp-content/uploads/2021/08/Gili-Trawangan-Indonesia.jpg";

export const SITE_ADDRESS = {
  streetAddress: "Jl. Aneka, Dasan Agung, Kec. Selaparang",
  addressLocality: "Kota Mataram",
  addressRegion: "Nusa Tenggara Barat",
  postalCode: "83125",
  addressCountry: "ID",
} as const;

export const LOCALES = ["id", "en"] as const;
export type SiteLocale = (typeof LOCALES)[number];

/** Build canonical + hreflang alternates for a locale-less path like "/destinations". */
export function buildAlternates(locale: string, path: string) {
  return {
    canonical: `${SITE_URL}/${locale}${path}`,
    languages: {
      id: `${SITE_URL}/id${path}`,
      en: `${SITE_URL}/en${path}`,
      "x-default": `${SITE_URL}/id${path}`,
    },
  };
}
