import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Briefcase,
  Check,
  Cpu,
  GraduationCap,
  Languages,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  Locale,
  JOURNEY_CHAPTERS,
  SITE_IDENTITY,
} from "@/data/portfolio-data";
import {
  NIDAL_SIGNATURE_LINE,
  CV_EXPERIENCE_TIMELINE,
  CV_EDUCATION,
  CV_NEWSROOM_TOOLS,
  CV_LANGUAGES,
  CV_CAPABILITIES,
} from "@/data/cv-profile-data";
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
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

  return (
    <div className="bg-white text-[#090A0F]">
      {/* Page Hero */}
      <section className="border-b border-black/[0.06] bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#FFF0F1] px-4 py-2 text-xs font-extrabold text-[#FF1E2D]">
              <AlHadathMark
                className="h-3.5 w-auto"
                wordmarkColor="#090A0F"
                bracketColor="#FF1E2D"
              />
              <span>
                {isAr
                  ? "السيرة المهنية الكاملة · أربعة فصول"
                  : "OFFICIAL CV & CAREER CHRONICLE · FOUR CHAPTERS"}
              </span>
            </div>

            <h1
              className={`font-extrabold tracking-tight text-[#090A0F] ${
                isAr
                  ? "text-3xl sm:text-5xl lg:text-[3.5rem] leading-[1.25]"
                  : "text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
              }`}
            >
              {isAr
                ? "المسيرة المهنية لنضال النعيم"
                : "The Career & Broadcast Journey of Nidal Elnaeem"}
            </h1>

            {/* Nidal's Exact Signature Quote in Clean Apple-Grey Capsule */}
            <blockquote className="rounded-[28px] bg-[#F3F4F7] p-6 sm:p-7 border-s-4 border-[#FF1E2D]">
              <p className="text-xl sm:text-2xl font-extrabold text-[#090A0F] leading-relaxed">
                {isAr
                  ? `«${NIDAL_SIGNATURE_LINE.ar}»`
                  : `“${NIDAL_SIGNATURE_LINE.en}”`}
              </p>
            </blockquote>

            <p className="max-w-3xl text-base sm:text-lg leading-[1.85] text-[#525866]">
              {isAr
                ? "رحلة مهنية متصلة بدأت عام 2015 خلف ميكروفون إذاعة «هلا 96 إف إم» في الخرطوم، وتوسعت عبر البث التلفزيوني المباشر في «قناة الشروق» والمجلة المرئية لـ «سوداني»، وصولاً إلى أكثر من سبع سنوات من التقديم الإخباري وصناعة المحتوى الرقمي في قناتي «العربية» و«الحدث» بين دبي والرياض."
                : "An evolving career that began behind the microphone of Hala 96 FM in Khartoum in 2015, expanded through live television on Ashorooq TV and Sudani’s monthly video magazine, and grew into more than seven years of news presenting, reporting, and senior social media journalism at Al Arabiya and Al Hadath across Dubai and Riyadh."}
            </p>

            {/* Chapter Quick-Jump Pills */}
            <nav
              aria-label={isAr ? "فهرس الفصول" : "Chapter Index"}
              className="pt-2 flex flex-wrap gap-2.5"
            >
              <a
                href="#cv-experience"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-5 py-2.5 text-xs font-extrabold text-white shadow-sm transition hover:bg-[#090A0F]"
              >
                <span>{isAr ? "السجل الوظيفي الكامل" : "Full CV Timeline"}</span>
              </a>
              {JOURNEY_CHAPTERS.map((ch) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#F3F4F7] px-4 py-2.5 text-xs font-bold text-[#090A0F] transition hover:bg-[#E5E7EB]"
                >
                  <span className="font-mono-code font-extrabold text-[#FF1E2D]">
                    {ch.number}
                  </span>
                  <span>{ch.title[typedLocale]}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Band 1 (Studio Grey #F3F4F7): Official CV & LinkedIn Experience Timeline */}
      <section
        id="cv-experience"
        className="border-b border-black/[0.06] bg-[#F3F4F7] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                <Briefcase className="h-4 w-4" />
                <span>
                  {isAr
                    ? "السجل المهني والوظيفي · السيرة الذاتية ولينكدإن"
                    : "OFFICIAL EXPERIENCE RECORD · CV & LINKEDIN"}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#090A0F]">
                {isAr
                  ? "الخبرات العملية والمناصب الإعلامية (2015 – الحاضر)"
                  : "Professional Experience & Newsroom Roles (2015 – Present)"}
              </h2>
            </div>

            <a
              href={SITE_IDENTITY.socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold text-[#090A0F] shadow-xs transition hover:bg-[#090A0F] hover:text-white"
            >
              <LinkedInIcon className="h-3.5 w-3.5 text-[#FF1E2D]" />
              <span>
                {isAr ? "الحساب المهني على لينكدإن ↗" : "Official LinkedIn Profile ↗"}
              </span>
            </a>
          </div>

          {/* 5-Stage Detailed CV Cards */}
          <div className="space-y-5">
            {CV_EXPERIENCE_TIMELINE.map((entry) => (
              <article
                key={entry.id}
                className="rounded-[36px] border border-black/[0.06] bg-white p-6 sm:p-8 shadow-xs"
              >
                <div className="flex flex-col gap-4 border-b border-black/[0.06] pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span
                        className={`inline-flex items-center rounded-full px-3.5 py-1 text-xs font-extrabold ${
                          entry.isCurrent
                            ? "bg-[#FF1E2D] text-white"
                            : "bg-[#F3F4F7] text-[#090A0F]"
                        }`}
                      >
                        {entry.badge[typedLocale]}
                      </span>
                      <span className="font-mono-code text-xs font-bold text-[#525866]">
                        {entry.period[typedLocale]}
                      </span>
                    </div>
                    <h3 className="pt-1 text-xl sm:text-2xl font-extrabold text-[#090A0F]">
                      {entry.organization[typedLocale]}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-full bg-[#F3F4F7] px-4 py-1.5 text-xs font-bold text-[#090A0F]">
                    <MapPin className="h-3.5 w-3.5 text-[#FF1E2D]" />
                    <span>{entry.location[typedLocale]}</span>
                  </span>
                </div>

                {/* Roles inside this organization */}
                <div
                  className={`mt-6 grid grid-cols-1 gap-5 ${
                    entry.roles.length > 1 ? "lg:grid-cols-3" : ""
                  }`}
                >
                  {entry.roles.map((role, rIdx) => (
                    <div
                      key={rIdx}
                      className={`space-y-2.5 ${
                        entry.roles.length > 1
                          ? "rounded-[24px] bg-[#F3F4F7] p-5"
                          : ""
                      }`}
                    >
                      <h4 className="text-sm sm:text-base font-extrabold text-[#090A0F]">
                        {role.title[typedLocale]}
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm leading-relaxed text-[#525866]">
                        {role.bullets[typedLocale].map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#FF1E2D]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Band 2 (Pure White): Education, Broadcast Tech Stack, Languages & Core Capabilities */}
      <section className="border-b border-black/[0.06] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Education & Languages Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Software Engineering Degree */}
              <div className="rounded-[32px] bg-[#F3F4F7] p-6 sm:p-7 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#FF1E2D] uppercase">
                    <GraduationCap className="h-4 w-4" />
                    <span>{isAr ? "المؤهل الأكاديمي" : "EDUCATION"}</span>
                  </span>
                  <span className="rounded-full bg-white px-3.5 py-1 font-mono-code text-xs font-extrabold text-[#090A0F]">
                    {CV_EDUCATION.year}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#090A0F]">
                  {CV_EDUCATION.degree[typedLocale]}
                </h3>
                <p className="text-sm font-bold text-[#525866]">
                  {CV_EDUCATION.university[typedLocale]}
                </p>
                <p className="border-t border-black/[0.06] pt-3 text-xs leading-relaxed text-[#525866]">
                  {CV_EDUCATION.note[typedLocale]}
                </p>
              </div>

              {/* Languages */}
              <div className="rounded-[32px] bg-[#F3F4F7] p-6 sm:p-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#FF1E2D] uppercase">
                  <Languages className="h-4 w-4" />
                  <span>{isAr ? "اللغات" : "LANGUAGES"}</span>
                </div>
                <div className="space-y-4">
                  {CV_LANGUAGES.map((lang) => (
                    <div
                      key={lang.name.en}
                      className="flex items-center justify-between gap-4 border-b border-black/[0.06] pb-3 last:border-b-0 last:pb-0"
                    >
                      <div>
                        <div className="text-sm font-extrabold text-[#090A0F]">
                          {lang.name[typedLocale]}
                        </div>
                        <div className="text-xs font-medium text-[#525866]">
                          {lang.levelLabel[typedLocale]}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5" aria-hidden="true">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <span
                            key={dot}
                            className={`h-2.5 w-2.5 rounded-full ${
                              dot <= lang.dots
                                ? "bg-[#FF1E2D]"
                                : "bg-black/15"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsroom Systems & Core Capabilities Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Technical Broadcast Stack */}
              <div className="rounded-[32px] bg-[#F3F4F7] p-6 sm:p-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#FF1E2D] uppercase">
                  <Cpu className="h-4 w-4" />
                  <span>
                    {isAr
                      ? "أنظمة غرف الأخبار والأدوات التقنية"
                      : "NEWSROOM SYSTEMS & TECHNICAL PROFICIENCY"}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {CV_NEWSROOM_TOOLS.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-2xs"
                    >
                      <div>
                        <div className="font-mono-code text-sm font-extrabold text-[#090A0F]">
                          {tool.name}
                        </div>
                        <div className="text-xs text-[#525866]">
                          {tool.role[typedLocale]}
                        </div>
                      </div>
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF1E2D]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities Pillars */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {CV_CAPABILITIES.map((cap) => (
                  <div
                    key={cap.id}
                    className="rounded-[28px] border border-black/[0.06] bg-white p-5 shadow-2xs space-y-3"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#090A0F]">
                      <Sparkles className="h-3.5 w-3.5 text-[#FF1E2D]" />
                      <span>{cap.category[typedLocale]}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs leading-relaxed text-[#525866]">
                      {cap.items[typedLocale].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF1E2D]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Render All 4 Narrative Chapters */}
      <div>
        {JOURNEY_CHAPTERS.map((chapter, index) => (
          <JourneyChapterSection
            key={chapter.id}
            chapter={chapter}
            locale={typedLocale}
            isAlternateGrey={index % 2 === 0}
          />
        ))}
      </div>

      {/* Closing Transition to On Screen & Words */}
      <section className="bg-[#F3F4F7] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-extrabold tracking-widest text-[#FF1E2D] uppercase">
            {isAr ? "المحطة التالية" : "CONTINUE EXPLORING"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#090A0F]">
            {isAr
              ? "شاهد مختاراتها المرئية واقرأ قصصها وتقاريرها المكتوبة"
              : "Watch Selected Broadcasts & Read Her Authored Stories"}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href={`/${typedLocale}/on-screen`}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(255,30,45,0.25)] transition hover:bg-[#090A0F]"
            >
              <span>
                {isAr ? "على الشاشة (قاعة العرض)" : "On Screen (Screening Room)"}
              </span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link
              href={`/${typedLocale}/words`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#090A0F] shadow-xs transition hover:bg-[#090A0F] hover:text-white"
            >
              <span>{isAr ? "كلمات وقصص" : "Words & Stories"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
