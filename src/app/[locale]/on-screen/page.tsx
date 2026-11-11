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
    <div className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F1] px-4 py-2 text-xs font-extrabold text-[#FF1E2D]">
            <Film className="h-3.5 w-3.5" />
            <span>
              {isAr ? "على الشاشة · أعمال مرئية وحوارات" : "ON SCREEN · BROADCASTS & TALKS"}
            </span>
          </div>

          <h1
            className={`font-extrabold tracking-tight text-[#090A0F] ${
              isAr
                ? "text-3xl sm:text-5xl lg:text-[3.35rem] leading-[1.28]"
                : "text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
            }`}
          >
            {isAr
              ? "على الشاشة: التوضيح الخبري، ومنصة TEDx، واللقاءات التلفزيونية"
              : "On Screen: Explainers, Stage Talks & Broadcast Interviews"}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-[#525866]">
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
