import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Film,
  BookOpen,
  Compass,
  Camera,
  CheckCircle2,
} from "lucide-react";
import {
  Locale,
  WORK_ITEMS,
  JOURNEY_CHAPTERS,
  UI_LABELS,
} from "@/data/portfolio-data";
import { InFocusHero } from "@/components/home/InFocusHero";
import { CuratedMediaPlayer } from "@/components/media/CuratedMediaPlayer";
import { JourneyChapterSection } from "@/components/journey/JourneyChapterSection";

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
  const featuredChapter = JOURNEY_CHAPTERS[0];
  const highlightedWorks = WORK_ITEMS.filter((w) => w.featuredOnHome);

  const pathways = [
    {
      href: `/${typedLocale}/journey`,
      icon: Compass,
      tag: { ar: "المسار الأول · السيرة الوثائقية", en: "PATHWAY I · THE BIOGRAPHY" },
      title: {
        ar: "المسيرة: من أثير الخرطوم إلى غرفة الأخبار العربية",
        en: "The Journey: From Khartoum’s Airwaves to Pan-Arab Newsrooms",
      },
      description: {
        ar: "أربعة فصول بصرية تحكي البدايات في إذاعة «هلا 96»، والعمل التلفزيوني المتزامن في «الشروق» و«سوداني»، وصولاً إلى دورها الحالي في «الحدث» و«العربية».",
        en: "A four-chapter visual chronicle tracing her radio beginnings at Hala 96 FM, concurrent television work at Ashorooq TV and Sudani, and her newsroom craft with Al Hadath and Al Arabiya.",
      },
    },
    {
      href: `/${typedLocale}/on-screen`,
      icon: Film,
      tag: { ar: "المسار الثاني · قاعة العرض", en: "PATHWAY II · SCREENING ROOM" },
      title: {
        ar: "على الشاشة: مختارات مرئية وحوارات موثقة",
        en: "On Screen: Curated Broadcasts, Explainers & Stage Talks",
      },
      description: {
        ar: "مجموعة منتقاة من الشروح التوعوية، وكلمتها على منصة TEDx، والحوارات التلفزيونية الأرشيفية مع توصيف أمين لدورها في كل عمل.",
        en: "Selected moving-image pieces—including her March 2026 Sudan education explainer, her TEDxWadMedani talk, and archival broadcasts—with user-initiated playback and verified role labels.",
      },
    },
    {
      href: `/${typedLocale}/words`,
      icon: BookOpen,
      tag: { ar: "المسار الثالث · التحرير والكتابة", en: "PATHWAY III · EDITORIAL & WRITING" },
      title: {
        ar: "كلمات وقصص: التقارير الصحفية والسرد الرقمي",
        en: "Words & Stories: Bylined Journalism & Digital Storytelling",
      },
      description: {
        ar: "تقاريرها التحليلية المنشورة في «العربية.نت»، وسلسلة «حكايات نضال» الرقمية، وتأملاتها المكتوبة حول الشغف والمثابرة في المهنة.",
        en: "Verified authored journalism on Al Arabiya Net, her “Hikayat Nidal” digital storytelling series, and personal essays on endurance in media.",
      },
    },
  ];

  return (
    <div>
      {/* 1. Full-Viewport "In Focus" Interactive Newsroom Opening Scene */}
      <InFocusHero locale={typedLocale} />

      {/* 2. Selected Moving-Image Story Spotlight */}
      <section
        aria-labelledby="featured-story-heading"
        className="border-b border-[#F4EEE3]/10 bg-[#07121C] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-[#F4EEE3]/10 pb-6">
            <div>
              <span
                className={`text-xs font-semibold text-[#ED2530] ${
                  isAr ? "" : "font-mono-code uppercase tracking-[0.18em]"
                }`}
              >
                {isAr
                  ? "عمل مرئي مختار · إعلام الخدمة العامة"
                  : "SELECTED MOVING-IMAGE STORY · PUBLIC-INTEREST MEDIA"}
              </span>
              <h2
                id="featured-story-heading"
                className={`mt-2 text-[#F4EEE3] ${
                  isAr
                    ? "font-display-ar text-3xl sm:text-4xl font-bold"
                    : "font-display-en text-3xl sm:text-4xl font-semibold"
                }`}
              >
                {leadVideoWork.title[typedLocale]}
              </h2>
            </div>

            <Link
              href={`/${typedLocale}/work/${leadVideoWork.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C8B692] hover:text-[#F4EEE3]"
            >
              <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
              {isAr ? (
                <ArrowUpLeft className="h-4 w-4 text-[#ED2530]" />
              ) : (
                <ArrowUpRight className="h-4 w-4 text-[#ED2530]" />
              )}
            </Link>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <CuratedMediaPlayer work={leadVideoWork} locale={typedLocale} />
            </div>

            <div className="lg:col-span-5 space-y-5 rounded-sm border border-[#F4EEE3]/12 bg-[#0B1926]/90 p-6 sm:p-7">
              <div className="inline-flex items-center gap-2 rounded bg-[#ED2530]/15 px-3 py-1 text-xs font-medium text-[#F4EEE3]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#ED2530]" />
                <span>{leadVideoWork.verifiedRole[typedLocale]}</span>
              </div>

              <p className="text-base leading-relaxed text-[#F4EEE3]">
                {leadVideoWork.summary[typedLocale]}
              </p>

              <div className="rounded border-s-2 border-[#C8B692] bg-[#060E16]/80 p-4 text-xs leading-relaxed text-[#D1C7B8]">
                {leadVideoWork.editorialContext[typedLocale]}
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={`/${typedLocale}/work/${leadVideoWork.slug}`}
                  className="inline-flex items-center gap-2 rounded bg-[#102232] border border-[#C8B692]/35 px-4 py-2.5 text-xs font-semibold text-[#F4EEE3] transition hover:border-[#C8B692]"
                >
                  <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
                  {isAr ? (
                    <ArrowUpLeft className="h-3.5 w-3.5 text-[#ED2530]" />
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#ED2530]" />
                  )}
                </Link>

                <Link
                  href={`/${typedLocale}/on-screen`}
                  className="inline-flex items-center gap-2 rounded px-4 py-2.5 text-xs font-medium text-[#C8B692] hover:text-[#F4EEE3]"
                >
                  <span>
                    {isAr ? "تصفح جميع الأعمال المرئية" : "View All Screening Room Works"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Editorial Pathways Into Her Work */}
      <section
        aria-labelledby="pathways-heading"
        className="border-b border-[#F4EEE3]/10 bg-[#060E16] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span
              className={`text-xs font-semibold text-[#C8B692] ${
                isAr ? "" : "font-mono-code uppercase tracking-[0.18em]"
              }`}
            >
              {isAr ? "مسارات القراءة والمشاهدة" : "THREE EDITORIAL PATHWAYS"}
            </span>
            <h2
              id="pathways-heading"
              className={`mt-2 text-[#F4EEE3] ${
                isAr
                  ? "font-display-ar text-3xl sm:text-4xl font-bold"
                  : "font-display-en text-3xl sm:text-4xl font-semibold"
              }`}
            >
              {isAr
                ? "ثلاث نوافذ لاستكشاف الصوت، والصورة، والكلمة"
                : "Three Portals Through Voice, Broadcast, and Written Craft"}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pathways.map((pathway, idx) => {
              const Icon = pathway.icon;
              return (
                <Link
                  key={pathway.href}
                  href={pathway.href}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-[#F4EEE3]/12 bg-[#0B1926]/80 p-7 transition duration-300 hover:border-[#C8B692]/60 hover:bg-[#0F2132]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[11px] font-semibold text-[#C8B692] ${
                          isAr ? "" : "font-mono-code tracking-[0.16em]"
                        }`}
                      >
                        {pathway.tag[typedLocale]}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded border border-[#F4EEE3]/10 bg-[#060E16] text-[#ED2530]">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>

                    <h3
                      className={`text-[#F4EEE3] group-hover:text-white ${
                        isAr
                          ? "font-display-ar text-2xl font-bold leading-snug"
                          : "font-display-en text-2xl font-semibold leading-snug"
                      }`}
                    >
                      {pathway.title[typedLocale]}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#D1C7B8]">
                      {pathway.description[typedLocale]}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#F4EEE3]/10 pt-4 text-xs font-semibold text-[#C8B692] group-hover:text-[#F4EEE3]">
                    <span>
                      {isAr ? `الدخول إلى المسار 0${idx + 1}` : `Enter Chapter 0${idx + 1}`}
                    </span>
                    {isAr ? (
                      <ArrowUpLeft className="h-4 w-4 text-[#ED2530] transition-transform group-hover:-translate-x-1" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-[#ED2530] transition-transform group-hover:translate-x-1" />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. First Journey Chapter Implemented In Full ("The Radio Microphone") */}
      <JourneyChapterSection chapter={featuredChapter} locale={typedLocale} />

      {/* 5. Selected Dossiers Strip & Quiet Invitation to Continue */}
      <section className="bg-[#060E16] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span
                className={`text-xs font-semibold text-[#ED2530] ${
                  isAr ? "" : "font-mono-code uppercase tracking-[0.18em]"
                }`}
              >
                {isAr ? "مختارات من الأرشيف" : "CURATED ARCHIVE HIGHLIGHTS"}
              </span>
              <h2
                className={`mt-2 text-[#F4EEE3] ${
                  isAr
                    ? "font-display-ar text-3xl font-bold"
                    : "font-display-en text-3xl font-semibold"
                }`}
              >
                {isAr
                  ? "أعمال تجمع بين التحليل الصحفي والحضور الإنساني"
                  : "Works Bridging Analytical Journalism and Human Presence"}
              </h2>
            </div>

            <Link
              href={`/${typedLocale}/journey`}
              className="inline-flex items-center gap-2 rounded border border-[#C8B692]/40 bg-[#0B1926] px-5 py-2.5 text-xs font-semibold text-[#F4EEE3] hover:border-[#C8B692]"
            >
              <span>
                {isAr
                  ? "متابعة قراءة الفصول الأربعة للمسيرة"
                  : "Continue Reading All Four Journey Chapters"}
              </span>
              {isAr ? (
                <ArrowUpLeft className="h-4 w-4 text-[#ED2530]" />
              ) : (
                <ArrowUpRight className="h-4 w-4 text-[#ED2530]" />
              )}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlightedWorks.map((work) => (
              <Link
                key={work.slug}
                href={`/${typedLocale}/work/${work.slug}`}
                className="group flex flex-col justify-between overflow-hidden rounded-sm border border-[#F4EEE3]/12 bg-[#0B1926]/70 transition hover:border-[#C8B692]/50"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050C14]">
                    <img
                      src={work.posterAsset}
                      alt={work.title[typedLocale]}
                      style={{ objectPosition: work.posterFocalPoint }}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1926] via-transparent to-transparent" />
                    <span className="absolute bottom-3 start-3 rounded bg-[#060E16]/90 px-2.5 py-1 text-[11px] font-medium text-[#C8B692]">
                      {work.categoryLabel[typedLocale]}
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="text-xs text-[#93A3B1]">{work.dateDisplay[typedLocale]}</div>
                    <h3
                      className={`text-lg text-[#F4EEE3] group-hover:text-white ${
                        isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                      }`}
                    >
                      {work.title[typedLocale]}
                    </h3>
                    <p className="line-clamp-3 text-xs leading-relaxed text-[#D1C7B8]">
                      {work.summary[typedLocale]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[#F4EEE3]/10 px-5 py-3 text-xs text-[#C8B692]">
                  <span>{work.verifiedRole[typedLocale]}</span>
                  {isAr ? (
                    <ArrowUpLeft className="h-3.5 w-3.5 text-[#ED2530]" />
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#ED2530]" />
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Life & Moments + Behind the Work Teaser Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col items-start justify-between gap-6 rounded-sm border border-[#C8B692]/30 bg-gradient-to-r from-[#0B1926] via-[#102232] to-[#0B1926] p-7 sm:flex-row sm:items-center">
              <div className="space-y-1.5">
                <div
                  className={`inline-flex items-center gap-2 text-xs font-semibold text-[#C8B692] ${
                    isAr ? "" : "uppercase tracking-wider"
                  }`}
                >
                  <Camera className="h-4 w-4 text-[#ED2530]" />
                  <span>
                    {isAr
                      ? "جديد · حياتها ويومياتها"
                      : "NEW · LIFE & MOMENTS"}
                  </span>
                </div>
                <h3
                  className={`text-xl text-[#F4EEE3] ${
                    isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                  }`}
                >
                  {isAr
                    ? "بين شاشات غرفة الأخبار في دبي ولحظات التأمل والسفر"
                    : "From the Broadcast Newsroom in Dubai to Quiet Horizons"}
                </h3>
              </div>

              <Link
                href={`/${typedLocale}/life`}
                className="shrink-0 inline-flex items-center gap-2 rounded bg-[#ED2530] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#d41f2a]"
              >
                <span>{UI_LABELS.nav.life[typedLocale]}</span>
                {isAr ? (
                  <ArrowUpLeft className="h-4 w-4" />
                ) : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </Link>
            </div>

            <div className="flex flex-col items-start justify-between gap-6 rounded-sm border border-[#F4EEE3]/15 bg-[#0B1926]/85 p-7 sm:flex-row sm:items-center">
              <div className="space-y-1.5">
                <div
                  className={`inline-flex items-center gap-2 text-xs font-semibold text-[#C8B692] ${
                    isAr ? "" : "uppercase tracking-wider"
                  }`}
                >
                  <Camera className="h-4 w-4 text-[#ED2530]" />
                  <span>
                    {isAr
                      ? "خلف الكواليس وسجل البرامج"
                      : "BEHIND THE WORK & PROGRAMS"}
                  </span>
                </div>
                <h3
                  className={`text-xl text-[#F4EEE3] ${
                    isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                  }`}
                >
                  {isAr
                    ? "لقطات الاستوديو والمنتدى السعودي للإعلام وسجل برامجها"
                    : "Studio Portraits, Media Forums & Complete Program Record"}
                </h3>
              </div>

              <Link
                href={`/${typedLocale}/behind-the-work`}
                className="shrink-0 inline-flex items-center gap-2 rounded border border-[#C8B692]/40 bg-[#102232] px-5 py-2.5 text-xs font-semibold text-[#F4EEE3] hover:border-[#C8B692]"
              >
                <span>{UI_LABELS.nav.behind[typedLocale]}</span>
                {isAr ? (
                  <ArrowUpLeft className="h-4 w-4 text-[#ED2530]" />
                ) : (
                  <ArrowUpRight className="h-4 w-4 text-[#ED2530]" />
                )}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
