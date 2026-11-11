import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Locale } from "@/data/portfolio-data";
import { ConceptOneBroadsheet } from "@/components/concepts/ConceptOneBroadsheet";
import { ConceptTwoBento } from "@/components/concepts/ConceptTwoBento";
import { ConceptThreeSplitStage } from "@/components/concepts/ConceptThreeSplitStage";
import { ConceptSwitcherBar } from "@/components/concepts/ConceptSwitcherBar";

export function generateStaticParams() {
  return [
    { locale: "ar", id: "1" },
    { locale: "ar", id: "2" },
    { locale: "ar", id: "3" },
    { locale: "en", id: "1" },
    { locale: "en", id: "2" },
    { locale: "en", id: "3" },
  ];
}

export default async function ConceptPreviewPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  if ((locale !== "ar" && locale !== "en") || !["1", "2", "3"].includes(id)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const typedId = id as "1" | "2" | "3";

  return (
    <>
      {typedId === "1" && <ConceptOneBroadsheet locale={typedLocale} />}
      {typedId === "2" && <ConceptTwoBento locale={typedLocale} />}
      {typedId === "3" && <ConceptThreeSplitStage locale={typedLocale} />}

      <Suspense fallback={null}>
        <ConceptSwitcherBar locale={typedLocale} activeId={typedId} />
      </Suspense>
    </>
  );
}
