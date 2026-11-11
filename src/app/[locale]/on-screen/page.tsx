import React from "react";
import { notFound } from "next/navigation";
import { Film } from "lucide-react";
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
    <div className="bg-[#07090E] py-14 sm:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4BE96]/30 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-[#D4BE96]">
            <Film className="h-3.5 w-3.5 text-[#E6242F]" />
            <span>
              {isAr ? "على الشاشة · أعمال مرئية وحوارات" : "ON SCREEN · BROADCASTS & TALKS"}
            </span>
          </div>

          <h1
            className={`text-[#F7F4EE] leading-tight ${
              isAr
                ? "font-display-ar text-3xl sm:text-5xl font-bold"
                : "font-display-en text-4xl sm:text-6xl font-semibold"
            }`}
          >
            {isAr
              ? "على الشاشة: التوضيح الخبري، ومنصة TEDx، واللقاءات التلفزيونية"
              : "On Screen: Explainers, Stage Talks & Broadcast Interviews"}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-[#D6CFC2]">
            {isAr
              ? "مختارات مرئية من أعمال نضال النعيم وحواراتها التلفزيونية، تجمع بين شروح القضايا الخدمية، وكلمتها على منصة TEDxWadMedani، ومحطات من أرشيف البث."
              : "Selected moving-image work featuring Nidal Elnaeem’s public-interest explainers, her TEDxWadMedani talk, and television dialogues."}
          </p>
        </header>

        <ScreeningRoomClient works={screenWorks} locale={typedLocale} />
      </div>
    </div>
  );
}
