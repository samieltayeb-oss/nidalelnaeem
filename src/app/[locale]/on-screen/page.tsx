import React from "react";
import { notFound } from "next/navigation";
import { Locale, WORK_ITEMS } from "@/data/portfolio-data";
import { ScreeningRoomClient } from "@/components/screening/ScreeningRoomClient";

export default async function OnScreenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();
  const typedLocale = locale as Locale;
  const isAr = typedLocale === "ar";

  const screenWorks = WORK_ITEMS.filter((w) => w.featuredOnScreen);

  return (
    <div className="bg-[#060E16] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-12 max-w-3xl space-y-4">
          <div
            className={`inline-flex items-center gap-2 rounded border border-[#ED2530]/40 bg-[#ED2530]/10 px-3 py-1 text-xs font-semibold text-[#ED2530] ${
              isAr ? "" : "font-mono-code uppercase tracking-[0.18em]"
            }`}
          >
            <span>
              {isAr ? "قاعة العرض · على الشاشة" : "THE SCREENING ROOM · ON SCREEN"}
            </span>
          </div>

          <h1
            className={`text-[#F4EEE3] leading-tight ${
              isAr
                ? "font-display-ar text-4xl sm:text-5xl lg:text-6xl font-bold"
                : "font-display-en text-4xl sm:text-5xl lg:text-6xl font-semibold"
            }`}
          >
            {isAr
              ? "على الشاشة: شروح الخدمة العامة، المنصة، والأرشيف التلفزيوني"
              : "On Screen: Public-Service Explainers, Stage Talks & Broadcast Archives"}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-[#D1C7B8]">
            {isAr
              ? "مختارات مرئية من أعمال نضال النعيم وحواراتها، تجمع بين شروح الخدمة العامة، وكلمتها على منصة TEDx، ومحطات من أرشيفها التلفزيوني والإذاعي."
              : "Selected moving-image work featuring Nidal Elnaeem’s public-service explainers, her TEDxWadMedani talk, and archival television dialogues."}
          </p>
        </header>

        <ScreeningRoomClient works={screenWorks} locale={typedLocale} />
      </div>
    </div>
  );
}
