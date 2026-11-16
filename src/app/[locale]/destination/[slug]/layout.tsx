import { formatPrice, popularDestinations } from "@/data/destinations";
import { SITE_NAME } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const destination = popularDestinations.find((d) => d.slug === slug);
  const tSeo = await getTranslations({
    locale,
    namespace: "seo.destinationDetail",
  });

  if (!destination) {
    const tFallback = await getTranslations({
      locale,
      namespace: "seo.destinations",
    });
    return buildPageMetadata({
      locale,
      path: `/destination/${slug}`,
      title: tFallback("title"),
      description: tFallback("description"),
    });
  }

  const tItems = await getTranslations({
    locale,
    namespace: "destinations.items",
  });
  const itemTitle = tItems(`${destination.key}.title`);
  const itemDescription = tItems(`${destination.key}.description`);
  const price = formatPrice(destination.priceFrom, destination.currency);

  return buildPageMetadata({
    locale,
    path: `/destination/${slug}`,
    title: `${itemTitle} — ${tSeo("titleSuffix")} | ${SITE_NAME}`,
    description: `${itemDescription} ${tSeo("fromPrefix")} ${price}.`,
    image: destination.image,
  });
}

export default function DestinationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
