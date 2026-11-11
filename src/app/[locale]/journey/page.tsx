import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Cpu,
  Languages,
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

  return (
    <div className="bg-[#07090E]">
      {/* Page Hero */}
      <section className="relative overflow-hidden border-b border-white/8 bg-[radial-gradient(ellipse_at_top,#121826_0%,#07090E_75%)] py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-65"
          style={{
            background:
              "radial-gradient(600px circle at 18% 20%, rgba(212, 190, 150, 0.10), transparent 70%), radial-gradient(520px circle at 82% 18%, rgba(230, 36, 47, 0.08), transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#D4BE96]/30 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-[#D4BE96] backdrop-blur-md">
              <AlHadathMark className="h-4 w-auto" />
              <span>
                {isAr
                  ? "السيرة المهنية الكاملة · أربعة فصول"
                  : "CAREER MONOGRAPH & OFFICIAL CV · FOUR CHAPTERS"}
              </span>
            </div>

            <h1
              className={`text-[#F7F4EE] leading-[1.15] ${
                isAr
                  ? "font-display-ar text-3xl sm:text-5xl lg:text-6xl font-bold"
                  : "font-display-en text-4xl sm:text-5xl lg:text-6xl font-semibold"
              }`}
            >
              {isAr
                ? "المسيرة المهنية لنضال النعيم"
                : "The Career & Broadcast Journey of Nidal Elnaeem"}
            </h1>

            {/* Nidal's Exact Signature Quote */}
            <blockquote className="rounded-2xl border border-[#D4BE96]/25 bg-white/[0.03] px-5 py-4 sm:px-6 sm:py-5 backdrop-blur-sm">
              <p
                className={`text-[#F7F4EE] ${
                  isAr
                    ? "font-serif-ar text-xl sm:text-2xl font-bold leading-relaxed"
                    : "font-display-en text-xl sm:text-2xl italic leading-relaxed"
                }`}
              >
                {isAr
                  ? `«${NIDAL_SIGNATURE_LINE.ar}»`
                  : `“${NIDAL_SIGNATURE_LINE.en}”`}
              </p>
            </blockquote>

            <p className="max-w-3xl text-base sm:text-lg leading-[1.85] text-[#C8C2B8]">
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
                className="inline-flex items-center gap-2 rounded-full border border-[#E6242F]/40 bg-[#E6242F]/15 px-4 py-2 text-xs font-semibold text-[#F7F4EE] transition hover:bg-[#E6242F]/25"
              >
                <span>{isAr ? "السجل الوظيفي الكامل" : "Full CV Timeline"}</span>
              </a>
              {JOURNEY_CHAPTERS.map((ch) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-medium text-[#EAE4D9] transition hover:border-[#D4BE96]/50 hover:bg-white/[0.08]"
                >
                  <span className="font-mono-code text-[#D4BE96]">{ch.number}</span>
                  <span>{ch.title[typedLocale]}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Band 1 (Warm Sand #EFEAE0): Official CV & LinkedIn Experience Timeline */}
      <section
        id="cv-experience"
        className="border-b border-[#141A24]/10 bg-[#EFEAE0] py-16 text-[#121722] sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#141A24]/12 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B81D26]">
                <Briefcase className="h-4 w-4" />
                <span className={isAr ? "" : "font-mono-code uppercase tracking-[0.16em]"}>
                  {isAr
                    ? "السجل المهني والوظيفي · السيرة الذاتية ولينكدإن"
                    : "OFFICIAL EXPERIENCE RECORD · CV & LINKEDIN"}
                </span>
              </div>
              <h2
                className={`text-2xl sm:text-4xl text-[#121722] ${
                  isAr
                    ? "font-display-ar font-bold"
                    : "font-display-en font-semibold"
                }`}
              >
                {isAr
                  ? "الخبرات العملية والمناصب الإعلامية (2015 – الحاضر)"
                  : "Professional Experience & Newsroom Roles (2015 – Present)"}
              </h2>
            </div>

            <a
              href={SITE_IDENTITY.socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-[#121722]/20 bg-white px-4 py-2 text-xs font-semibold text-[#121722] shadow-sm transition hover:border-[#121722] hover:bg-[#121722] hover:text-[#F7F4EE]"
            >
              <LinkedInIcon className="h-3.5 w-3.5 text-[#B81D26]" />
              <span>
                {isAr ? "الحساب المهني على لينكدإن ↗" : "Official LinkedIn Profile ↗"}
              </span>
            </a>
          </div>

          {/* 5-Stage Detailed CV Cards */}
          <div className="space-y-6">
            {CV_EXPERIENCE_TIMELINE.map((entry) => (
              <article
                key={entry.id}
                className={`rounded-2xl border p-6 sm:p-8 shadow-sm transition ${
                  entry.isCurrent
                    ? "border-[#E6242F]/35 bg-white ring-1 ring-[#E6242F]/10"
                    : "border-[#141A24]/10 bg-[#FAF8F4]"
                }`}
              >
                <div className="flex flex-col gap-4 border-b border-[#141A24]/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                          entry.isCurrent
                            ? "bg-[#E6242F] text-white"
                            : "bg-[#121722]/8 text-[#121722]"
                        }`}
                      >
                        {entry.badge[typedLocale]}
                      </span>
                      <span className="font-mono-code text-xs font-semibold text-[#645E54]">
                        {entry.period[typedLocale]}
                      </span>
                    </div>
                    <h3
                      className={`pt-1 text-xl sm:text-2xl text-[#121722] ${
                        isAr
                          ? "font-display-ar font-bold"
                          : "font-display-en font-semibold"
                      }`}
                    >
                      {entry.organization[typedLocale]}
                    </h3>
                  </div>

                  <span className="inline-flex self-start sm:self-center rounded-full border border-[#141A24]/12 bg-[#EFEAE0]/70 px-3.5 py-1 text-xs font-medium text-[#46423B]">
                    {entry.location[typedLocale]}
                  </span>
                </div>

                {/* Roles inside this organization */}
                <div
                  className={`mt-5 grid grid-cols-1 gap-6 ${
                    entry.roles.length > 1 ? "lg:grid-cols-3" : ""
                  }`}
                >
                  {entry.roles.map((role, rIdx) => (
                    <div
                      key={rIdx}
                      className={`space-y-2.5 ${
                        entry.roles.length > 1
                          ? "rounded-xl border border-[#141A24]/8 bg-white/80 p-4"
                          : ""
                      }`}
                    >
                      <h4 className="text-sm sm:text-base font-bold text-[#121722]">
                        {role.title[typedLocale]}
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm leading-relaxed text-[#3A3731]">
                        {role.bullets[typedLocale].map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E6242F]" />
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

      {/* Band 2 (Warm Alabaster #F7F4EE): Education, Broadcast Tech Stack, Languages & Core Capabilities */}
      <section className="border-b border-[#141A24]/10 bg-[#F7F4EE] py-16 text-[#121722] sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Education & Languages Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Software Engineering Degree */}
              <div className="rounded-2xl border border-[#141A24]/10 bg-white p-6 sm:p-7 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#B81D26]">
                    <GraduationCap className="h-4 w-4" />
                    <span>{isAr ? "المؤهل الأكاديمي" : "EDUCATION"}</span>
                  </span>
                  <span className="rounded-full bg-[#EFEAE0] px-3 py-0.5 font-mono-code text-xs font-semibold text-[#121722]">
                    {CV_EDUCATION.year}
                  </span>
                </div>
                <h3
                  className={`text-xl text-[#121722] ${
                    isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                  }`}
                >
                  {CV_EDUCATION.degree[typedLocale]}
                </h3>
                <p className="text-sm font-medium text-[#524D44]">
                  {CV_EDUCATION.university[typedLocale]}
                </p>
                <p className="border-t border-[#141A24]/8 pt-3 text-xs leading-relaxed text-[#5F5A50]">
                  {CV_EDUCATION.note[typedLocale]}
                </p>
              </div>

              {/* Languages */}
              <div className="rounded-2xl border border-[#141A24]/10 bg-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B81D26]">
                  <Languages className="h-4 w-4" />
                  <span>{isAr ? "اللغات" : "LANGUAGES"}</span>
                </div>
                <div className="space-y-4">
                  {CV_LANGUAGES.map((lang) => (
                    <div
                      key={lang.name.en}
                      className="flex items-center justify-between gap-4 border-b border-[#141A24]/8 pb-3 last:border-b-0 last:pb-0"
                    >
                      <div>
                        <div className="text-sm font-bold text-[#121722]">
                          {lang.name[typedLocale]}
                        </div>
                        <div className="text-xs text-[#645E54]">
                          {lang.levelLabel[typedLocale]}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5" aria-hidden="true">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <span
                            key={dot}
                            className={`h-2.5 w-2.5 rounded-full ${
                              dot <= lang.dots
                                ? "bg-[#E6242F]"
                                : "bg-[#121722]/15"
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
              <div className="rounded-2xl border border-[#141A24]/10 bg-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B81D26]">
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
                      className="flex items-center justify-between gap-3 rounded-xl border border-[#141A24]/8 bg-[#FAF8F4] px-4 py-3"
                    >
                      <div>
                        <div className="font-mono-code text-sm font-bold text-[#121722]">
                          {tool.name}
                        </div>
                        <div className="text-xs text-[#645E54]">
                          {tool.role[typedLocale]}
                        </div>
                      </div>
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#D4BE96]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities Pillars */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {CV_CAPABILITIES.map((cap) => (
                  <div
                    key={cap.id}
                    className="rounded-2xl border border-[#141A24]/10 bg-white p-5 shadow-sm space-y-3"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#121722]">
                      <Sparkles className="h-3.5 w-3.5 text-[#E6242F]" />
                      <span>{cap.category[typedLocale]}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs leading-relaxed text-[#4E4940]">
                      {cap.items[typedLocale].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#B81D26]" />
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
        {JOURNEY_CHAPTERS.map((chapter) => (
          <JourneyChapterSection
            key={chapter.id}
            chapter={chapter}
            locale={typedLocale}
          />
        ))}
      </div>

      {/* Closing Transition to On Screen & Words */}
      <section className="bg-[#07090E] py-16 sm:py-24 border-t border-white/8">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 space-y-6">
          <span
            className={`text-xs font-semibold text-[#D4BE96] ${
              isAr ? "" : "font-mono-code uppercase tracking-[0.18em]"
            }`}
          >
            {isAr ? "المحطة التالية" : "CONTINUE EXPLORING"}
          </span>
          <h2
            className={`text-2xl sm:text-4xl text-[#F7F4EE] ${
              isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
            }`}
          >
            {isAr
              ? "شاهد مختاراتها المرئية واقرأ قصصها وتقاريرها المكتوبة"
              : "Watch Selected Broadcasts & Read Her Authored Stories"}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href={`/${typedLocale}/on-screen`}
              className="inline-flex items-center gap-2 rounded-full bg-[#E6242F] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E6242F]/20 transition hover:bg-[#cc1d27]"
            >
              <span>
                {isAr ? "على الشاشة (قاعة العرض)" : "On Screen (Screening Room)"}
              </span>
              {isAr ? (
                <ArrowUpLeft className="h-4 w-4" />
              ) : (
                <ArrowUpRight className="h-4 w-4" />
              )}
            </Link>
            <Link
              href={`/${typedLocale}/words`}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4BE96]/35 bg-white/[0.04] px-6 py-3 text-sm font-medium text-[#F7F4EE] transition hover:border-[#D4BE96] hover:bg-white/[0.08]"
            >
              <span>
                {isAr ? "كلمات وقصص" : "Words & Stories"}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
