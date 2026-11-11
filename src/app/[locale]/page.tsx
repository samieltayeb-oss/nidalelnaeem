import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Film,
  BookOpen,
  GraduationCap,
  Cpu,
  Play,
  Mail,
  Sparkles,
} from "lucide-react";
import {
  Locale,
  WORK_ITEMS,
  UI_LABELS,
} from "@/data/portfolio-data";
import {
  CV_BIO_SUMMARY,
  CV_CAPABILITIES,
  CV_CONTACT_INFO,
  CV_EDUCATION,
  CV_EXPERIENCE_TIMELINE,
  CV_NEWSROOM_TOOLS,
  NIDAL_SIGNATURE_LINE,
} from "@/data/cv-profile-data";
import { LIFE_MOMENTS } from "@/data/life-and-press-data";
import { InFocusHero } from "@/components/home/InFocusHero";
import { CuratedMediaPlayer } from "@/components/media/CuratedMediaPlayer";

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();
  const typedLocale = locale as Locale;
  const isAr = typedLocale === "ar";

  const leadVideoWork =
    WORK_ITEMS.find((w) => w.slug === "sudan-school-grant-explainer") ||
    WORK_ITEMS[0];

  const featuredVideos = WORK_ITEMS.filter(
    (w) =>
      w.slug === "tedx-wad-medani-colorful-woman" ||
      w.slug === "makana-program-episode-9" ||
      w.slug === "almahatta-dubai-media-dialogue"
  );

  const featuredWritten = WORK_ITEMS.filter(
    (w) =>
      w.slug === "alarabiya-sudan-protest-lexicon" ||
      w.slug === "mbc-group-harvest-reflection" ||
      w.slug === "passion-and-perseverance-reflection"
  );

  const previewLifeMoments = LIFE_MOMENTS.slice(0, 3);

  return (
    <div>
      {/* 1. Opening Scene: Obsidian Newsroom + Signature Line + Impact Ribbon */}
      <InFocusHero locale={typedLocale} />

      {/* 2. Warm Alabaster Editorial Profile: Craft, Capabilities & Newsroom Systems */}
      <section
        aria-labelledby="editorial-profile-heading"
        className="surface-paper py-18 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Main Editorial Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#111622]/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#E6242F]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>
                  {isAr ? "البورتريه المهني · السيرة والحضور" : "EDITORIAL PROFILE · CRAFT & PRESENCE"}
                </span>
              </div>

              <h2
                id="editorial-profile-heading"
                className={`text-[#111622] leading-[1.2] ${
                  isAr
                    ? "font-display-ar text-3xl sm:text-4xl lg:text-[2.65rem] font-bold"
                    : "font-display-en text-3xl sm:text-5xl font-semibold"
                }`}
              >
                {isAr
                  ? "بين البث المباشر وصناعة القصة الرقمية الحديثة"
                  : "Bridging Live Broadcast Authority and Modern Digital Storytelling"}
              </h2>

              <p className="text-base sm:text-lg leading-[1.9] text-[#2B3345]">
                {CV_BIO_SUMMARY[typedLocale]}
              </p>

              {/* Capabilities Trio */}
              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
                {CV_CAPABILITIES.map((group) => (
                  <div
                    key={group.id}
                    className="surface-paper-card rounded-2xl p-5 space-y-3"
                  >
                    <h3 className="text-xs font-bold text-[#E6242F]">
                      {group.category[typedLocale]}
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-[13px] font-medium text-[#1F2636]">
                      {group.items[typedLocale].map((skill, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#111622]" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Engineering Foundation + Newsroom Tech Stack */}
            <div className="lg:col-span-5 space-y-5">
              {/* Education Card */}
              <div className="rounded-2xl border border-[#111622]/12 bg-[#111622] p-6 sm:p-7 text-[#F7F4EE] shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4BE96]">
                    <GraduationCap className="h-4 w-4 text-[#E6242F]" />
                    <span>{isAr ? "الخلفية الأكاديمية" : "EDUCATION"}</span>
                  </span>
                  <span className="font-mono-code text-xs text-[#D4BE96]">
                    {CV_EDUCATION.year}
                  </span>
                </div>
                <h3 className="font-display-ar text-lg sm:text-xl font-bold text-white">
                  {CV_EDUCATION.degree[typedLocale]}
                </h3>
                <p className="text-xs font-medium text-[#D4BE96]">
                  {CV_EDUCATION.university[typedLocale]}
                </p>
                <p className="text-xs leading-relaxed text-[#D6CFC2]">
                  {CV_EDUCATION.note[typedLocale]}
                </p>
              </div>

              {/* Newsroom Tech Stack */}
              <div className="surface-paper-card rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#111622]">
                  <Cpu className="h-4 w-4 text-[#E6242F]" />
                  <span>
                    {isAr
                      ? "أنظمة غرف الأخبار والإنتاج الرقمي"
                      : "BROADCAST & NEWSROOM SYSTEMS"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {CV_NEWSROOM_TOOLS.map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-xl border border-[#111622]/10 bg-[#F7F4EE] px-3.5 py-2.5"
                    >
                      <div className="font-mono-code text-xs font-semibold text-[#111622]">
                        {tool.name}
                      </div>
                      <div className="mt-0.5 text-[11px] text-[#525B70]">
                        {tool.role[typedLocale]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Obsidian Screening Stage: Selected On-Air & Video Work */}
      <section
        aria-labelledby="on-screen-showcase-heading"
        className="bg-[#080B12] py-18 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4BE96]">
                <Film className="h-3.5 w-3.5 text-[#E6242F]" />
                <span>{isAr ? "مختارات مرئية · على الشاشة" : "ON SCREEN · SELECTED BROADCASTS"}</span>
              </span>
              <h2
                id="on-screen-showcase-heading"
                className={`text-[#F7F4EE] ${
                  isAr
                    ? "font-display-ar text-3xl sm:text-4xl font-bold"
                    : "font-display-en text-3xl sm:text-5xl font-semibold"
                }`}
              >
                {isAr
                  ? "حضور مباشر بين التوضيح الخبري والمنصات الحوارية"
                  : "On-Camera Explainers, Stage Talks & Broadcast Dialogues"}
              </h2>
            </div>

            <Link
              href={`/${typedLocale}/on-screen`}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4BE96]/35 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold text-[#F7F4EE] transition hover:border-[#D4BE96] hover:bg-white/[0.09]"
            >
              <span>{isAr ? "عرض جميع الأعمال المرئية" : "View All Videos"}</span>
              {isAr ? (
                <ArrowUpLeft className="h-4 w-4 text-[#E6242F]" />
              ) : (
                <ArrowUpRight className="h-4 w-4 text-[#E6242F]" />
              )}
            </Link>
          </div>

          {/* Lead Video Feature */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <CuratedMediaPlayer work={leadVideoWork} locale={typedLocale} />
            </div>

            <div className="lg:col-span-5 surface-glass-dark rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-[#E6242F]/15 px-3 py-1 font-semibold text-[#E6242F]">
                  {leadVideoWork.categoryLabel[typedLocale]}
                </span>
                <span className="font-mono-code text-[#D4BE96]">
                  {leadVideoWork.dateDisplay[typedLocale]}
                </span>
              </div>

              <h3
                className={`text-2xl sm:text-3xl text-[#F7F4EE] leading-snug ${
                  isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                }`}
              >
                {leadVideoWork.title[typedLocale]}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-[#D6CFC2]">
                {leadVideoWork.summary[typedLocale]}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={`/${typedLocale}/work/${leadVideoWork.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#D4BE96] px-5 py-2.5 text-xs font-bold text-[#07090E] transition hover:bg-white"
                >
                  <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
                  {isAr ? (
                    <ArrowUpLeft className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  )}
                </Link>
              </div>
            </div>
          </div>

          {/* Three Additional Broadcast Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredVideos.map((video) => (
              <Link
                key={video.slug}
                href={`/${typedLocale}/work/${video.slug}`}
                className="group surface-glass-dark flex flex-col justify-between overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#05070B]">
                    <img
                      src={video.posterAsset}
                      alt={video.title[typedLocale]}
                      style={{ objectPosition: video.posterFocalPoint }}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-transparent" />
                    <span className="absolute top-3 end-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#E6242F] text-white shadow-lg transition-transform group-hover:scale-110">
                      <Play className="h-3.5 w-3.5 fill-current" />
                    </span>
                    <span className="absolute bottom-3 start-3 rounded-full bg-[#07090E]/85 px-3 py-1 text-[11px] font-medium text-[#D4BE96] backdrop-blur-md">
                      {video.categoryLabel[typedLocale]}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-2.5">
                    <div className="text-xs text-[#949BA8]">{video.dateDisplay[typedLocale]}</div>
                    <h3
                      className={`text-lg text-[#F7F4EE] group-hover:text-[#D4BE96] transition-colors ${
                        isAr ? "font-display-ar font-bold" : "font-display-en font-semibold text-xl"
                      }`}
                    >
                      {video.title[typedLocale]}
                    </h3>
                    <p className="line-clamp-2 text-xs leading-relaxed text-[#D6CFC2]">
                      {video.summary[typedLocale]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.08] px-5 py-3.5 text-xs text-[#D4BE96]">
                  <span>{video.verifiedRole[typedLocale]}</span>
                  {isAr ? (
                    <ArrowUpLeft className="h-3.5 w-3.5 text-[#E6242F]" />
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#E6242F]" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Warm Sand Career Chronicle: From Hala 96 FM to Al Arabiya & Al Hadath */}
      <section
        aria-labelledby="career-arc-heading"
        className="bg-[#EFEAE0] py-18 text-[#111622] sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#111622]/12 pb-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-[#E6242F]">
                {isAr ? "محطات المسيرة المهنية (2015 – الحاضر)" : "CAREER TIMELINE (2015 – PRESENT)"}
              </span>
              <h2
                id="career-arc-heading"
                className={`text-[#111622] ${
                  isAr
                    ? "font-display-ar text-3xl sm:text-4xl font-bold"
                    : "font-display-en text-3xl sm:text-5xl font-semibold"
                }`}
              >
                {NIDAL_SIGNATURE_LINE[typedLocale]}
              </h2>
            </div>

            <Link
              href={`/${typedLocale}/journey`}
              className="inline-flex items-center gap-2 rounded-full bg-[#111622] px-5 py-2.5 text-xs font-semibold text-[#F7F4EE] transition hover:bg-[#1e2638]"
            >
              <span>{isAr ? "تفاصيل السيرة والفصول الأربعة" : "Full Career Chronicle"}</span>
              {isAr ? (
                <ArrowUpLeft className="h-4 w-4 text-[#D4BE96]" />
              ) : (
                <ArrowUpRight className="h-4 w-4 text-[#D4BE96]" />
              )}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
            {CV_EXPERIENCE_TIMELINE.map((entry) => (
              <div
                key={entry.id}
                className={`flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition ${
                  entry.isCurrent
                    ? "bg-[#111622] text-[#F7F4EE] shadow-xl ring-1 ring-[#E6242F]/40"
                    : "bg-white text-[#111622] border border-[#111622]/10 shadow-sm"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono-code text-[11px] font-semibold ${
                        entry.isCurrent
                          ? "bg-[#E6242F] text-white"
                          : "bg-[#EFEAE0] text-[#111622]"
                      }`}
                    >
                      {entry.period[typedLocale]}
                    </span>
                  </div>

                  <h3 className="font-display-ar text-base font-bold leading-snug">
                    {entry.organization[typedLocale]}
                  </h3>

                  <p
                    className={`text-xs font-medium ${
                      entry.isCurrent ? "text-[#D4BE96]" : "text-[#E6242F]"
                    }`}
                  >
                    {entry.roles.map((r) => r.title[typedLocale].split(" (")[0]).join(" · ")}
                  </p>

                  <p
                    className={`text-xs leading-relaxed ${
                      entry.isCurrent ? "text-[#D6CFC2]" : "text-[#424B5E]"
                    }`}
                  >
                    {entry.roles[0].bullets[typedLocale][0]}
                  </p>
                </div>

                <div
                  className={`mt-5 border-t pt-3 text-[11px] font-medium ${
                    entry.isCurrent
                      ? "border-white/10 text-[#949BA8]"
                      : "border-[#111622]/10 text-[#667085]"
                  }`}
                >
                  {entry.location[typedLocale]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Obsidian Editorial Closing: Written Stories + Life & Moments Gallery */}
      <section className="bg-[#07090E] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-18">
          {/* Written Journalism Strip */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4BE96]">
                  <BookOpen className="h-3.5 w-3.5 text-[#E6242F]" />
                  <span>{isAr ? "كلمات وقصص" : "WORDS & STORIES"}</span>
                </span>
                <h2
                  className={`text-[#F7F4EE] ${
                    isAr
                      ? "font-display-ar text-2xl sm:text-3xl font-bold"
                      : "font-display-en text-3xl sm:text-4xl font-semibold"
                  }`}
                >
                  {isAr
                    ? "مقالات صحفية وتأملات مكتوبة"
                    : "Bylined Articles & Written Reflections"}
                </h2>
              </div>

              <Link
                href={`/${typedLocale}/words`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4BE96] hover:text-white"
              >
                <span>{isAr ? "قراءة جميع النصوص" : "All Articles & Notes"}</span>
                {isAr ? (
                  <ArrowUpLeft className="h-4 w-4 text-[#E6242F]" />
                ) : (
                  <ArrowUpRight className="h-4 w-4 text-[#E6242F]" />
                )}
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {featuredWritten.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${typedLocale}/work/${item.slug}`}
                  className="group surface-glass-dark flex flex-col justify-between rounded-2xl p-6 transition-all hover:-translate-y-0.5"
                >
                  <div className="space-y-3">
                    <span className="inline-block rounded-full bg-white/[0.05] px-3 py-1 text-[11px] font-medium text-[#D4BE96]">
                      {item.categoryLabel[typedLocale]}
                    </span>
                    <h3
                      className={`text-xl text-[#F7F4EE] group-hover:text-[#D4BE96] transition-colors ${
                        isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                      }`}
                    >
                      {item.title[typedLocale]}
                    </h3>
                    <p className="line-clamp-3 text-xs leading-relaxed text-[#D6CFC2]">
                      {item.summary[typedLocale]}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-3.5 text-xs text-[#949BA8]">
                    <span>{item.broadcasterOrPlatform[typedLocale]}</span>
                    <span className="font-semibold text-[#D4BE96] group-hover:text-white">
                      {UI_LABELS.common.openDossier[typedLocale]} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Life & Moments Visual Triptych */}
          <div className="space-y-8 border-t border-white/[0.08] pt-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-[#D4BE96]">
                  {isAr ? "حياتها ويومياتها" : "LIFE & MOMENTS"}
                </span>
                <h2
                  className={`text-[#F7F4EE] ${
                    isAr
                      ? "font-display-ar text-2xl sm:text-3xl font-bold"
                      : "font-display-en text-3xl sm:text-4xl font-semibold"
                  }`}
                >
                  {isAr
                    ? "من داخل غرفة الأخبار إلى لحظات التأمل"
                    : "Inside the Studio & Quiet Moments"}
                  </h2>
              </div>

              <Link
                href={`/${typedLocale}/life`}
                className="inline-flex items-center gap-2 rounded-full border border-[#D4BE96]/35 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold text-[#F7F4EE] transition hover:border-[#D4BE96]"
              >
                <span>{UI_LABELS.nav.life[typedLocale]}</span>
                {isAr ? (
                  <ArrowUpLeft className="h-4 w-4 text-[#E6242F]" />
                ) : (
                  <ArrowUpRight className="h-4 w-4 text-[#E6242F]" />
                )}
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {previewLifeMoments.map((moment) => (
                <Link
                  key={moment.id}
                  href={`/${typedLocale}/life`}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#0D111A]"
                >
                  <picture>
                    <source srcSet={moment.imageAvif} type="image/avif" />
                    <img
                      src={moment.imageWebp}
                      alt={moment.title[typedLocale]}
                      style={{ objectPosition: moment.focalPoint }}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/20 to-transparent opacity-85" />
                  <div className="absolute inset-x-0 bottom-0 p-6 space-y-1.5">
                    <span className="text-[11px] font-medium text-[#D4BE96]">
                      {moment.location[typedLocale]}
                    </span>
                    <h3 className="font-display-ar text-lg font-bold text-white leading-snug">
                      {moment.title[typedLocale]}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Editorial Contact Banner */}
          <div className="rounded-3xl border border-[#D4BE96]/30 bg-gradient-to-r from-[#111726] via-[#0D121E] to-[#111726] p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold text-[#D4BE96]">
                  {isAr
                    ? "للتواصل المهني · إدارة الجلسات · الاستضافات الإعلامية"
                    : "SPEAKING, MODERATION & EDITORIAL ENQUIRIES"}
                </span>
                <h2
                  className={`text-2xl sm:text-3xl text-[#F7F4EE] ${
                    isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                  }`}
                >
                  {isAr
                    ? "هل ترغب في التواصل مع نضال النعيم لحوار إعلامي أو إدارة جلسة حوارية؟"
                    : "Get in touch for broadcast dialogues, panel moderation, or media training"}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${CV_CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#E6242F] px-6 py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#cf1d27]"
                >
                  <Mail className="h-4 w-4" />
                  <span>{isAr ? "مراسلة عبر البريد الإلكتروني" : "Send Email"}</span>
                </a>
                <Link
                  href={`/${typedLocale}/connect`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D4BE96]/40 bg-white/[0.04] px-6 py-3 text-xs sm:text-sm font-medium text-[#F7F4EE] hover:border-[#D4BE96]"
                >
                  <span>{UI_LABELS.nav.connect[typedLocale]}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
