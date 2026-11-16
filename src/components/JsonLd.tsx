import {
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_INSTAGRAM,
  SITE_NAME,
  SITE_PHONE_SCHEMA,
  SITE_URL,
} from "@/data/site";
import { getLocale, getTranslations } from "next-intl/server";

/**
 * TravelAgency structured data (schema.org) so Google understands this is a
 * local Lombok travel business — helps local search and Maps visibility.
 * Deliberately has no aggregateRating: the on-site reviews are samples.
 */
export default async function JsonLd() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "seo.home" });

  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    description: t("description"),
    telephone: SITE_PHONE_SCHEMA,
    email: SITE_EMAIL,
    priceRange: "Rp 1.200.000 - Rp 6.500.000",
    currenciesAccepted: "IDR",
    address: {
      "@type": "PostalAddress",
      ...SITE_ADDRESS,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
    areaServed: {
      "@type": "Place",
      name: "Lombok, Nusa Tenggara Barat, Indonesia",
    },
    sameAs: [SITE_INSTAGRAM],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
