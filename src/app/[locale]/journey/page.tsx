import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpLeft, ArrowUpRight, Briefcase } from "lucide-react";
import {
  Locale,
  JOURNEY_CHAPTERS,
  SITE_IDENTITY,
} from "@/data/portfolio-data";
import { JourneyChapterSection } from "@/components/journey/JourneyChapterSection";
import { AlHadathMark, LinkedInIcon } from "@/components/brand/BrandVectors";

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();
  const typedLocale = locale as Locale;
  const isAr = typedLocale === "ar";

  return (
    <div className="bg-[#060E16]">
      {/* Documentary Page Header */}
      <section className="relative overflow-hidden border-b border-[#F4EEE3]/10 bg-[radial-gradient(ellipse_at_top,#102538_0%,#060E16_75%)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-3 rounded border border-[#C8B692]/30 bg-[#0B1926]/80 px-3.5 py-1.5 text-xs text-[#C8B692]">
              <AlHadathMark className="h-4 w-auto" />
              <span>
                {isAr
                  ? "السيرة الوثائقية · أربعة فصول موثقة"
                  : "DOCUMENTARY CHRONICLE · FOUR VERIFIED CHAPTERS"}
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
                ? "المسيرة: من أثير الإذاعة في الخرطوم إلى غرف الأخبار العربية"
                : "The Journey: From Khartoum’s Radio Console to the Pan-Arab Newsroom"}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#D1C7B8]">
              {isAr
                ? "لا تُقرأ مسيرة نضال النعيم كقائمة وظائف جامدة، بل كرحلة متصلة لصقل الصوت والكلمة؛ بدأت خلف ميكروفون إذاعة «هلا 96 إف إم»، وتوسعت عبر العمل المتزامن في التلفزيون والمنصات الرقمية، حتى استقرت في صياغة الخبر وتقديمه عبر «الحدث» و«العربية»."
                : "Nidal Elnaeem’s trajectory is not a linear checklist of job titles—it is an evolving study in voice, reporting, and audience trust, moving from live radio in Khartoum through concurrent television roles to senior digital writing and presenting with Al Hadath and Al Arabiya."}
            </p>

            {/* Chapter Quick-Jump Index */}
            <nav
              aria-label={isAr ? "فهرس الفصول" : "Chapter Index"}
              className="pt-4 flex flex-wrap gap-2.5"
            >
              {JOURNEY_CHAPTERS.map((ch) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  className="inline-flex items-center gap-2 rounded border border-[#F4EEE3]/15 bg-[#0B1926]/90 px-3.5 py-2 text-xs font-medium text-[#F4EEE3] transition hover:border-[#C8B692]"
                >
                  <span className="font-mono-code text-[#ED2530]">{ch.number}</span>
                  <span>{ch.title[typedLocale]}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Structured Career Experience Summary (Matching Official LinkedIn Experience) */}
      <section className="border-b border-[#F4EEE3]/10 bg-[#050B12] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Briefcase className="h-4 w-4 text-[#ED2530]" />
              <h2
                className={`text-lg sm:text-xl font-bold text-[#F4EEE3] ${
                  isAr ? "font-display-ar" : "font-display-en"
                }`}
              >
                {isAr ? "ملخص الخبرة المهنية" : "Professional Experience Summary"}
              </h2>
            </div>

            <a
              href={SITE_IDENTITY.socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-[#C8B692]/35 bg-[#0B1926] px-3.5 py-1.5 text-xs font-medium text-[#C8B692] transition hover:border-[#C8B692] hover:text-[#F4EEE3]"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              <span>{isAr ? "الحساب المهني على لينكدإن ↗" : "Official LinkedIn Profile ↗"}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* 1. Al Arabiya News Channel */}
            <div className="flex flex-col justify-between rounded-sm border border-[#C8B692]/35 bg-[#0B1926]/90 p-5 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded bg-[#ED2530]/20 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#ED2530]">
                    {isAr ? "مارس 2019 – الحاضر" : "Mar 2019 – Present"}
                  </span>
                  <span className="text-[11px] text-[#C8B692]">
                    {isAr ? "دوام كامل" : "Full-time"}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#F4EEE3]">
                  {isAr
                    ? "كاتبة أولى لمنصات التواصل · مراسلة · مذيعة"
                    : "Senior Social Media Writer Reporter / Presenter"}
                </h3>
                <p className="text-xs font-semibold text-[#C8B692]">
                  {isAr ? "قناة العربية · الحدث" : "Al Arabiya News Channel"}
                </p>
                <p className="text-xs text-[#93A3B1]">
                  {isAr ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                </p>
              </div>
              <p className="border-t border-[#F4EEE3]/10 pt-3 text-xs leading-relaxed text-[#D1C7B8]">
                {isAr
                  ? "الصحافة الرقمية، وصياغة الأخبار لمنصات التواصل، وإعداد التقارير والتقديم."
                  : "Social Media, Journalism, newsroom reporting, and broadcast presenting."}
              </p>
            </div>

            {/* 2. Sudani */}
            <div className="flex flex-col justify-between rounded-sm border border-[#F4EEE3]/15 bg-[#0B1926]/75 p-5 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-semibold text-[#C8B692]">
                    {isAr ? "يناير 2018 – ديسمبر 2018" : "Jan 2018 – Dec 2018 · 1 yr"}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#F4EEE3]">
                  {isAr ? "مقدمة برامج (Presenter)" : "Presenter"}
                </h3>
                <p className="text-xs font-semibold text-[#C8B692]">
                  {isAr ? "سوداني (Sudani)" : "Sudani"}
                </p>
                <p className="text-xs text-[#93A3B1]">
                  {isAr ? "الخرطوم، السودان" : "Khartoum, Sudan"}
                </p>
              </div>
              <p className="border-t border-[#F4EEE3]/10 pt-3 text-xs leading-relaxed text-[#D1C7B8]">
                {isAr
                  ? "المشاركة في تقديم المجلة المرئية الشهرية لـ «سوداني»، وتغطية أخبار الشركة وخدمات المسؤولية المجتمعية وأثرها في المجتمع."
                  : "Co-hosting Sudani’s monthly video magazine, covering company news, social responsibility services, and community impact."}
              </p>
            </div>

            {/* 3. Hala 96 FM (3 roles) */}
            <div className="flex flex-col justify-between rounded-sm border border-[#F4EEE3]/15 bg-[#0B1926]/75 p-5 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-semibold text-[#C8B692]">
                    {isAr ? "أغسطس 2015 – أكتوبر 2018" : "Aug 2015 – Oct 2018 · 3 yrs 3 mos"}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#F4EEE3]">
                  {isAr ? "إذاعة هلا 96 إف إم" : "Hala 96 FM"}
                </h3>
                <p className="text-xs text-[#93A3B1]">
                  {isAr ? "الخرطوم، السودان" : "Khartoum, Sudan"}
                </p>
                <ul className="space-y-1.5 pt-1 text-xs text-[#D1C7B8]">
                  <li className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED2530]" />
                    <span>
                      <strong>{isAr ? "مذيعة ومعدة:" : "Radio Jockey:"}</strong>{" "}
                      {isAr ? "أغسطس 2015 – أكتوبر 2018 («هلا وهن»)" : "Aug 2015 – Oct 2018 (Hala & Her)"}
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8B692]" />
                    <span>
                      <strong>{isAr ? "مشرفة التواصل الاجتماعي:" : "Social Media Supervisor:"}</strong>{" "}
                      {isAr ? "يونيو – سبتمبر 2018" : "Jun – Sep 2018"}
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#93A3B1]" />
                    <span>
                      <strong>{isAr ? "مسؤولة موارد بشرية ومديرة مكتب:" : "HR Officer - Office Manager:"}</strong>{" "}
                      {isAr ? "ديسمبر 2017 – مارس 2018" : "Dec 2017 – Mar 2018"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Ashorooq TV */}
            <div className="flex flex-col justify-between rounded-sm border border-[#F4EEE3]/15 bg-[#0B1926]/75 p-5 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-semibold text-[#C8B692]">
                    {isAr ? "أبريل 2017 – أغسطس 2018" : "Apr 2017 – Aug 2018 · 1 yr 5 mos"}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#F4EEE3]">
                  {isAr ? "مذيعة تلفزيونية (Television Presenter)" : "Television Presenter"}
                </h3>
                <p className="text-xs font-semibold text-[#C8B692]">
                  {isAr ? "قناة الشروق الفضائية" : "Ashorooq TV"}
                </p>
                <p className="text-xs text-[#93A3B1]">
                  {isAr ? "السودان" : "Sudan"}
                </p>
              </div>
              <p className="border-t border-[#F4EEE3]/10 pt-3 text-xs leading-relaxed text-[#D1C7B8]">
                {isAr
                  ? "تقديم 3 برامج رئيسية على شاشة قناة الشروق، من بينها البرنامج الصباحي اليومي المباشر وبرامج المنوعات."
                  : "Presenter for 3 main programs on Ashorooq TV, including its daily live morning variety program."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Render All 4 Distinct Chapters */}
      <div>
        {JOURNEY_CHAPTERS.map((chapter) => (
          <JourneyChapterSection
            key={chapter.id}
            chapter={chapter}
            locale={typedLocale}
          />
        ))}
      </div>

      {/* Closing Transition to On Screen & Words */}
      <section className="bg-[#060E16] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 space-y-6">
          <span
            className={`text-xs font-semibold text-[#C8B692] ${
              isAr ? "" : "font-mono-code uppercase tracking-[0.18em]"
            }`}
          >
            {isAr ? "المحطة التالية" : "CONTINUE EXPLORING"}
          </span>
          <h2
            className={`text-3xl sm:text-4xl text-[#F4EEE3] ${
              isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
            }`}
          >
            {isAr
              ? "شاهد كيف تترجم هذه المسيرة على الشاشة وفي النصوص المكتوبة"
              : "Experience These Chapters Through Her Broadcasts and Written Stories"}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href={`/${typedLocale}/on-screen`}
              className="inline-flex items-center gap-2 rounded bg-[#ED2530] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d41f2a]"
            >
              <span>
                {isAr ? "الدخول إلى قاعة العرض (على الشاشة)" : "Enter the Screening Room (On Screen)"}
              </span>
              {isAr ? <ArrowUpLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
            </Link>
            <Link
              href={`/${typedLocale}/words`}
              className="inline-flex items-center gap-2 rounded border border-[#C8B692]/40 bg-[#0B1926] px-6 py-3 text-sm font-medium text-[#F4EEE3] hover:border-[#C8B692]"
            >
              <span>
                {isAr ? "قراءة التقارير والقصص المكتوبة" : "Read Words & Stories"}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
