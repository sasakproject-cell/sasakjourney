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
  const t = await getTranslations({ locale, namespace: "seo.destinations" });
  return buildPageMetadata({
    locale,
    path: "/destinations",
    title: t("title"),
    description: t("description"),
  });
}

export default function DestinationsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
