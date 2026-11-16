import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.transportation" });
  return buildPageMetadata({
    locale,
    path: "/transportation",
    title: t("title"),
    description: t("description"),
  });
}

export default function TransportationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
