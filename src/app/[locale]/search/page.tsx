import { redirect } from "next/navigation";

// The old search page used mock package data that did not match the real
// destinations. All search traffic now goes to the destinations list,
// which filters the same real data the detail pages use. Query params
// (category, destination, duration) are forwarded unchanged.
export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(sp)) {
    if (typeof value === "string") {
      query.set(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((v) => query.append(key, v));
    }
  }
  const qs = query.toString();
  redirect(`/${locale}/destinations${qs ? `?${qs}` : ""}`);
}
