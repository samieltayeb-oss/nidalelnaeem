import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Cpu,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Play,
  BookOpen,
} from "lucide-react";
import {
  Locale,
  SITE_IDENTITY,
  WORK_ITEMS,
  UI_LABELS,
} from "@/data/portfolio-data";
import { SELECTED_VIDEO_WORKS } from "@/data/selected-video-work";
import {
  CV_BIO_SUMMARY,
  CV_CAPABILITIES,
  CV_CONTACT_INFO,
  CV_EDUCATION,
  CV_EXPERIENCE_TIMELINE,
  CV_IMPACT_STATS,
  CV_NEWSROOM_TOOLS,
  NIDAL_SIGNATURE_LINE,
} from "@/data/cv-profile-data";
import { LIFE_MOMENTS } from "@/data/life-and-press-data";
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
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

  const leadVideoWork =
    WORK_ITEMS.find((w) => w.slug === "sudan-school-grant-explainer") ||
    WORK_ITEMS[0];

  const featuredVideos = WORK_ITEMS.filter(
    (w) =>
      w.slug === "tedx-wad-medani-colorful-woman" ||
      w.slug === "almahatta-dubai-media-dialogue" ||
      w.slug === "makana-program-episode-9"
  );

  const featuredWritten = WORK_ITEMS.filter(
    (w) =>
      w.slug === "alarabiya-sudan-protest-lexicon" ||
      w.slug === "mbc-group-harvest-reflection" ||
      w.slug === "passion-and-perseverance-reflection"
  );

  const previewLifeMoments = LIFE_MOMENTS.slice(0, 4);
  const featuredBroadcastReels = SELECTED_VIDEO_WORKS.filter(
    (v) => v.featuredOnHome
  );

  return (
    <div className="bg-white text-[#090A0F]">
      {/* 1. MODERN PURE WHITE STUDIO HERO + TELEMETRY PODS + AI NEWSROOM BAR */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-20 sm:px-6 sm:pt-12 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left / Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Crisp Soft-Red Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F1] px-4 py-2 text-xs font-extrabold text-[#FF1E2D]">
              <span className="h-2 w-2 rounded-full bg-[#FF1E2D]" />
              <span>
                {isAr
                  ? "العربية والحدث · الرياض ودبي"
                  : "AL ARABIYA & AL HADATH · RIYADH & DUBAI"}
              </span>
            </div>

            {/* Giant Geometric Display Typography with Inline Circular Studio Avatars */}
            <div className="space-y-3">
              <h1
                className={`font-extrabold tracking-tight text-[#090A0F] ${
                  isAr
                    ? "text-4xl sm:text-6xl lg:text-[4.3rem] leading-[1.16]"
                    : "text-5xl sm:text-6xl lg:text-[4.6rem] leading-[1.05]"
                }`}
              >
                {SITE_IDENTITY.name[typedLocale]}
                <span className="mx-2.5 sm:mx-3 inline-flex align-middle items-center -space-x-2 rtl:space-x-reverse">
                  <img
                    src="/media/social/ig-CwVltyRSO9d-1.webp"
                    alt=""
                    className="inline-block h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover object-top border-2 border-white shadow-md"
                  />
                  <img
                    src="/media/derivatives/portrait-02-saudi-media-forum.webp"
                    alt=""
                    className="inline-block h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover object-top border-2 border-white shadow-md"
                  />
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-[#525866]">
                {SITE_IDENTITY.verifiedTitle[typedLocale]}
              </p>
            </div>

            {/* Clean Apple-Grey Capsule for Her Exact Signature Quote */}
            <div className="rounded-[28px] bg-[#F3F4F7] p-6 sm:p-7 space-y-2">
              <div className="text-[11px] font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                {isAr ? "المسيرة الإعلامية" : "BROADCAST JOURNEY"}
              </div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#090A0F] leading-relaxed">
                {isAr
                  ? `«${NIDAL_SIGNATURE_LINE.ar}»`
                  : `“${NIDAL_SIGNATURE_LINE.en}”`}
              </p>
            </div>

            <p className="max-w-2xl text-sm sm:text-base leading-[1.8] text-[#525866]">
              {CV_BIO_SUMMARY[typedLocale]}
            </p>

            {/* Clean Modern Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href={`/${typedLocale}/on-screen`}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#FF1E2D] px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-[0_14px_30px_rgba(255,30,45,0.26)] transition hover:bg-[#090A0F]"
              >
                <Play className="h-4 w-4 fill-current" />
                <span>
                  {isAr ? "شاهد المختارات المرئية" : "Watch Featured Work"}
                </span>
              </Link>
              <Link
                href={`/${typedLocale}/journey`}
                className="inline-flex items-center gap-2 rounded-full bg-[#F3F4F7] px-7 py-4 text-xs sm:text-sm font-bold text-[#090A0F] transition hover:bg-[#E5E7EB]"
              >
                <span>
                  {isAr ? "السيرة الذاتية والخبرات" : "Full Experience & CV"}
                </span>
                <ArrowIcon className="h-4 w-4 text-[#FF1E2D]" />
              </Link>
            </div>
          </div>

          {/* Right / Super-Ellipse Portrait Card with Floating Frosted-White UI Chips (5 cols) */}
          <div className="lg:col-span-5 relative sm:px-3 lg:px-0">
            <div className="relative overflow-hidden rounded-[40px] bg-[#F3F4F7] shadow-[0_30px_80px_rgba(9,10,15,0.10)]">
              <picture>
                <source
                  srcSet="/media/social/ig-DJAecEGMcm1-1.avif"
                  type="image/avif"
                />
                <img
                  src="/media/social/ig-DJAecEGMcm1-1.webp"
                  alt={SITE_IDENTITY.name[typedLocale]}
                  className="aspect-[4/5] w-full object-cover object-[50%_20%]"
                />
              </picture>
            </div>

            {/* Floating White Metric Chip 1 */}
            <div className="mt-3 sm:mt-0 sm:absolute sm:top-6 sm:-start-5 rounded-2xl border border-black/[0.06] bg-white/95 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF0F1] font-mono-code text-sm font-extrabold text-[#FF1E2D]">
                  +7
                </span>
                <div>
                  <div className="text-xs font-extrabold text-[#090A0F]">
                    {isAr ? "سنوات في العربية" : "Years @ Al Arabiya"}
                  </div>
                  <div className="text-[11px] text-[#525866]">
                    {isAr ? "دبي والرياض" : "Dubai & Riyadh"}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating White Metric Chip 2 */}
            <div className="mt-2.5 sm:mt-0 sm:absolute sm:bottom-6 sm:-end-4 rounded-2xl border border-black/[0.06] bg-white/95 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#090A0F] text-white">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs font-extrabold text-[#090A0F]">
                    {CV_EDUCATION.degree[typedLocale]}
                  </div>
                  <div className="text-[11px] text-[#525866]">
                    {isAr
                      ? `الذكاء الاصطناعي والإعلام · ${CV_EDUCATION.year}`
                      : `AI & Digital Newsrooms · ${CV_EDUCATION.year}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Modern Rounded Metric Pods */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CV_IMPACT_STATS.map((st, idx) => (
            <div
              key={idx}
              className="rounded-[32px] bg-[#F3F4F7] p-7 transition hover:bg-[#EAECEF]"
            >
              <div className="font-mono-code text-4xl font-extrabold text-[#090A0F] whitespace-nowrap">
                {st.value[typedLocale]}
              </div>
              <div className="mt-2 text-sm font-extrabold text-[#FF1E2D]">
                {st.label[typedLocale]}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-[#525866]">
                {st.detail[typedLocale]}
              </p>
            </div>
          ))}
        </div>

        {/* Broadcast & AI Stack Pill Strip */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-black/[0.07] bg-white p-5">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#090A0F]">
            <Cpu className="h-4 w-4 text-[#FF1E2D]" />
            {isAr
              ? "أنظمة البث والذكاء الاصطناعي في غرفة الأخبار:"
              : "Newsroom & AI Systems:"}
          </span>
          <div className="flex flex-wrap gap-2">
            {CV_NEWSROOM_TOOLS.map((tool) => (
              <span
                key={tool.name}
                title={tool.role[typedLocale]}
                className="rounded-full bg-[#F3F4F7] px-4 py-1.5 font-mono-code text-xs font-bold text-[#090A0F]"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. STUDIO GREY BAND: SELECTED BROADCAST REELS + INTERACTIVE VIDEO STAGE */}
      <section
        id="on-screen-showcase"
        aria-labelledby="on-screen-showcase-heading"
        className="bg-[#F3F4F7] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                {isAr
                  ? "ملف الأعمال المرئية · العربية والحدث (15 فيديو)"
                  : "SELECTED VIDEO WORK · AL ARABIYA & AL HADATH (15 VIDEOS)"}
              </span>
              <h2
                id="on-screen-showcase-heading"
                className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#090A0F]"
              >
                {isAr
                  ? "مختارات التقديم الإخباري والفيديو الرقمي"
                  : "Selected Broadcast Reels & Video Work"}
              </h2>
            </div>

            <Link
              href={`/${typedLocale}/on-screen`}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#090A0F] px-5 py-3 text-xs font-extrabold text-white shadow-xs transition hover:bg-[#FF1E2D]"
            >
              <span>
                {isAr
                  ? "استعراض جميع الفيديوهات المختارة (15)"
                  : "View All 15 Selected Videos"}
              </span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* 4 Flagship 9:16 Broadcast Reels (Al Arabiya, Al Hadath & Al Arabiya 24) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredBroadcastReels.map((reel) => (
              <a
                key={reel.id}
                href={reel.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-auto flex w-full max-w-sm sm:max-w-none flex-col justify-between overflow-hidden rounded-[32px] bg-white p-3 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[24px] bg-[#090A0F]">
                    <picture className="block h-full w-full">
                      {reel.posterAvif && (
                        <source srcSet={reel.posterAvif} type="image/avif" />
                      )}
                      <img
                        src={reel.posterWebp}
                        alt={reel.title[typedLocale]}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    </picture>
                    <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 font-mono-code text-[11px] font-extrabold text-[#090A0F] shadow-md backdrop-blur-md">
                      #{reel.number}
                    </span>
                  </div>

                  <div className="p-2.5 pt-4 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <span className="rounded-full bg-[#FFF0F1] px-3 py-0.5 text-[11px] font-extrabold text-[#FF1E2D]">
                        {reel.networkBadge[typedLocale]}
                      </span>
                      <span className="font-mono-code text-[11px] font-semibold text-[#525866]">
                        {reel.dateDisplay[typedLocale]}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-[#090A0F] leading-snug group-hover:text-[#FF1E2D] transition-colors line-clamp-2">
                      {reel.title[typedLocale]}
                    </h3>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-black/[0.06] px-2.5 pt-3 pb-1 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-bold text-[#090A0F]">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#FF1E2D]" />
                    <span>{reel.formatBadge[typedLocale]}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-extrabold text-[#FF1E2D]">
                    <span>{isAr ? "مشاهدة" : "Watch"}</span>
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Lead Interactive Video Feature */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <CuratedMediaPlayer work={leadVideoWork} locale={typedLocale} />
            </div>

            <div className="lg:col-span-5 rounded-[32px] bg-white p-7 sm:p-8 shadow-xs space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="rounded-full bg-[#FFF0F1] px-3.5 py-1 font-extrabold text-[#FF1E2D]">
                  {leadVideoWork.categoryLabel[typedLocale]}
                </span>
                <span className="font-mono-code font-bold text-[#525866]">
                  {leadVideoWork.dateDisplay[typedLocale]}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#090A0F] leading-snug">
                {leadVideoWork.title[typedLocale]}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-[#525866]">
                {leadVideoWork.summary[typedLocale]}
              </p>

              <div className="pt-1 flex flex-wrap gap-3">
                <Link
                  href={`/${typedLocale}/work/${leadVideoWork.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#090A0F] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#FF1E2D]"
                >
                  <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* 3 Clean White Rounded [32px] Video Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredVideos.map((vid) => (
              <Link
                key={vid.slug}
                href={`/${typedLocale}/work/${vid.slug}`}
                className="group flex flex-col justify-between rounded-[32px] bg-white p-3.5 shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-black">
                    <img
                      src={vid.posterAsset}
                      alt={vid.title[typedLocale]}
                      style={{ objectPosition: vid.posterFocalPoint }}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    {vid.duration && (
                      <span className="absolute bottom-3 start-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-[#090A0F] shadow-md">
                        <Play className="h-3 w-3 fill-[#FF1E2D] text-[#FF1E2D]" />
                        <span className="font-mono-code">{vid.duration}</span>
                      </span>
                    )}
                  </div>

                  <div className="p-3 pt-4 space-y-1.5">
                    <div className="text-xs font-extrabold text-[#FF1E2D]">
                      {vid.broadcasterOrPlatform[typedLocale]}
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#090A0F] leading-snug group-hover:text-[#FF1E2D] transition-colors">
                      {vid.title[typedLocale]}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#525866] line-clamp-2">
                      {vid.summary[typedLocale]}
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-black/[0.06] px-3 pt-3 pb-1 text-xs font-bold text-[#090A0F]">
                  <span>{vid.verifiedRole[typedLocale]}</span>
                  <ArrowIcon className="h-3.5 w-3.5 text-[#FF1E2D]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PURE WHITE BAND: COMPLETE CV & LINKEDIN CAREER EXPERIENCE + CAPABILITIES */}
      <section
        id="career-experience"
        aria-labelledby="career-experience-heading"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 space-y-12"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
              {isAr ? "السيرة الذاتية الكاملة · 2015 – 2026" : "FULL CV & LINKEDIN RECORD · 2015 – 2026"}
            </span>
            <h2
              id="career-experience-heading"
              className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#090A0F]"
            >
              {isAr
                ? "الخبرات المهنية والإعلامية"
                : "Career Experience & Broadcast Roles"}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href={`/${typedLocale}/journey`}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#090A0F] px-5 py-2.5 text-xs font-extrabold text-white transition hover:bg-[#FF1E2D]"
            >
              <span>{isAr ? "الفصول الأربعة للمسيرة" : "Read 4-Chapter Chronicle"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
            <a
              href={SITE_IDENTITY.socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F4F7] px-5 py-2.5 text-xs font-extrabold text-[#090A0F] transition hover:bg-[#E5E7EB]"
            >
              <span>{isAr ? "لينكدإن" : "LinkedIn"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Full Detailed Rounded [36px] CV Cards */}
        <div className="space-y-4">
          {CV_EXPERIENCE_TIMELINE.map((item) => (
            <div
              key={item.id}
              className="rounded-[36px] border border-black/[0.06] bg-[#F3F4F7] p-6 sm:p-8 transition hover:bg-[#EDEEF2]"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-4 space-y-2">
                  <span
                    className={`inline-block rounded-full px-3.5 py-1 text-xs font-extrabold ${
                      item.isCurrent
                        ? "bg-[#FF1E2D] text-white"
                        : "bg-white text-[#090A0F]"
                    }`}
                  >
                    {item.period[typedLocale]}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#090A0F] pt-1">
                    {item.organization[typedLocale]}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#525866]">
                    <MapPin className="h-3.5 w-3.5 text-[#FF1E2D]" />
                    <span>{item.location[typedLocale]}</span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  {item.roles.map((role, rIdx) => (
                    <div
                      key={rIdx}
                      className="rounded-[24px] bg-white p-5 sm:p-6 shadow-2xs space-y-2.5"
                    >
                      <h4 className="text-sm sm:text-base font-extrabold text-[#090A0F]">
                        {role.title[typedLocale]}
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#525866] leading-relaxed">
                        {role.bullets[typedLocale].map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#FF1E2D]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Capabilities Trio */}
        <div className="grid grid-cols-1 gap-5 pt-4 md:grid-cols-3">
          {CV_CAPABILITIES.map((group) => (
            <div
              key={group.id}
              className="rounded-[32px] border border-black/[0.07] bg-white p-6 sm:p-7 shadow-2xs space-y-3"
            >
              <h3 className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                {group.category[typedLocale]}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#090A0F]">
                {group.items[typedLocale].map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF1E2D]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STUDIO GREY CLOSING BAND: WORDS & STORIES + LIFE MOMENTS + DIRECT CONTACT */}
      <section className="bg-[#F3F4F7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Written Journalism Strip */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>{isAr ? "كلمات وقصص" : "WORDS & STORIES"}</span>
                </span>
                <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#090A0F]">
                  {isAr
                    ? "مقالات صحفية وتأملات مكتوبة"
                    : "Bylined Articles & Written Reflections"}
                </h2>
              </div>

              <Link
                href={`/${typedLocale}/words`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold text-[#090A0F] shadow-xs transition hover:bg-[#090A0F] hover:text-white"
              >
                <span>{isAr ? "قراءة جميع النصوص" : "All Articles & Notes"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {featuredWritten.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${typedLocale}/work/${item.slug}`}
                  className="group flex flex-col justify-between rounded-[32px] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="space-y-3">
                    <span className="inline-block rounded-full bg-[#FFF0F1] px-3.5 py-1 text-[11px] font-extrabold text-[#FF1E2D]">
                      {item.categoryLabel[typedLocale]}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#090A0F] leading-snug group-hover:text-[#FF1E2D] transition-colors">
                      {item.title[typedLocale]}
                    </h3>
                    <p className="line-clamp-3 text-xs sm:text-sm leading-relaxed text-[#525866]">
                      {item.summary[typedLocale]}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-black/[0.06] pt-4 text-xs font-bold text-[#525866]">
                    <span>{item.broadcasterOrPlatform[typedLocale]}</span>
                    <span className="inline-flex items-center gap-1 text-[#090A0F] group-hover:text-[#FF1E2D]">
                      <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Studio & Life Moments 4-Card Visual Grid */}
          <div className="space-y-8 border-t border-black/[0.07] pt-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                  {isAr ? "يوميات الاستوديو والحياة" : "STUDIO & LIFE MOMENTS"}
                </span>
                <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#090A0F]">
                  {isAr
                    ? "لقطات من دبي والرياض وخارج الاستوديو"
                    : "Visual Journal Across Riyadh & Dubai"}
                </h2>
              </div>

              <Link
                href={`/${typedLocale}/life`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold text-[#090A0F] shadow-xs transition hover:bg-[#090A0F] hover:text-white"
              >
                <span>{UI_LABELS.nav.life[typedLocale]}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {previewLifeMoments.map((m) => (
                <Link
                  key={m.id}
                  href={`/${typedLocale}/life`}
                  className="group relative aspect-[3/4] overflow-hidden rounded-[32px] bg-white shadow-xs"
                >
                  <picture>
                    <source srcSet={m.imageAvif} type="image/avif" />
                    <img
                      src={m.imageWebp}
                      alt={m.title[typedLocale]}
                      style={{ objectPosition: m.focalPoint }}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <span className="text-[11px] font-bold text-white/80">
                      {m.location[typedLocale]}
                    </span>
                    <h3 className="mt-0.5 text-sm sm:text-base font-extrabold leading-snug">
                      {m.title[typedLocale]}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Contact Callout Card */}
          <div className="rounded-[40px] bg-white p-8 sm:p-12 shadow-[0_20px_60px_rgba(9,10,15,0.06)]">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="space-y-2 max-w-2xl">
                <span className="inline-block rounded-full bg-[#FFF0F1] px-3.5 py-1 text-xs font-extrabold text-[#FF1E2D]">
                  {isAr
                    ? "للتواصل المهني · إدارة الجلسات · الاستضافات الإعلامية"
                    : "SPEAKING, MODERATION & EDITORIAL INQUIRIES"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090A0F] leading-snug">
                  {isAr
                    ? "هل ترغب في التواصل مع نضال النعيم لحوار إعلامي أو إدارة جلسة حوارية؟"
                    : "Get in touch for broadcast dialogues, panel moderation, or media training"}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${CV_CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_12px_28px_rgba(255,30,45,0.28)] transition hover:bg-[#090A0F]"
                >
                  <Mail className="h-4 w-4" />
                  <span>
                    {isAr ? "مراسلة عبر البريد الإلكتروني" : "Send Email"}
                  </span>
                </a>
                <Link
                  href={`/${typedLocale}/connect`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#F3F4F7] px-7 py-3.5 text-xs sm:text-sm font-bold text-[#090A0F] transition hover:bg-[#E5E7EB]"
                >
                  <span>{UI_LABELS.nav.connect[typedLocale]}</span>
                  <ArrowIcon className="h-4 w-4 text-[#FF1E2D]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
