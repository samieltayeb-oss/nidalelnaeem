import React from "react";
import { notFound } from "next/navigation";
import { Film } from "lucide-react";
import { Locale, WORK_ITEMS } from "@/data/portfolio-data";
import { ScreeningRoomClient } from "@/components/screening/ScreeningRoomClient";
import { SelectedVideoWorkShowcase } from "@/components/screening/SelectedVideoWorkShowcase";

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        <header className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F1] px-4 py-2 text-xs font-extrabold text-[#FF1E2D]">
            <Film className="h-3.5 w-3.5" />
            <span>
              {isAr
                ? "على الشاشة · ملف الأعمال المرئية واللقاءات"
                : "ON SCREEN · SELECTED VIDEO WORK & BROADCASTS"}
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
              ? "على الشاشة: التقديم الإخباري، السرد الرقمي، والحوارات التلفزيونية"
              : "On Screen: Broadcast Presenting, Digital Video & Stage Talks"}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-[#525866]">
            {isAr
              ? "ملف الأعمال المرئية لنضال النعيم عبر منصات «العربية» و«الحدث» و«العربية 24» وفيسبوك، إلى جانب كلمتها على مسرح TEDxWadMedani وحواراتها التلفزيونية."
              : "Nidal Elnaeem’s selected video portfolio across Al Arabiya, Al Hadath, Al Arabiya 24, and Facebook, alongside her TEDxWadMedani talk and broadcast interviews."}
          </p>
        </header>

        {/* 1. Official 15-Link Selected Video Work Portfolio (11 IG Reels + 4 FB Videos) */}
        <SelectedVideoWorkShowcase locale={typedLocale} />

        {/* 2. Interactive Long-Form Broadcast & Stage Archive */}
        <div className="space-y-8 border-t border-black/[0.07] pt-16">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
              {isAr
                ? "الأرشيف التلفزيوني والمنصات المسرحية"
                : "STAGE TALKS & TELEVISION ARCHIVE"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#090A0F]">
              {isAr
                ? "لقاءات مطوّلة، شروح توعوية، ومنصة TEDx"
                : "Long-Form Interviews, Public Explainers & TEDx"}
            </h2>
          </div>

          <ScreeningRoomClient works={screenWorks} locale={typedLocale} />
        </div>
      </div>
    </div>
  );
}
