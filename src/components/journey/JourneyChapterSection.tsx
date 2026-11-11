import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  Radio,
  Tv,
  Newspaper,
  Globe2,
  ArrowUpLeft,
  ArrowUpRight,
} from "lucide-react";
import {
  JourneyChapter,
  Locale,
  WORK_ITEMS,
  UI_LABELS,
} from "@/data/portfolio-data";

interface JourneyChapterSectionProps {
  chapter: JourneyChapter;
  locale: Locale;
  isAlternateGrey?: boolean;
}

export function JourneyChapterSection({
  chapter,
  locale,
  isAlternateGrey = false,
}: JourneyChapterSectionProps) {
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;
  const linkedWorks = WORK_ITEMS.filter((w) =>
    chapter.linkedWorkSlugs.includes(w.slug)
  );

  const ChapterIcon =
    chapter.rhythmStyle === "radio-concentric"
      ? Radio
      : chapter.rhythmStyle === "television-split"
      ? Tv
      : chapter.rhythmStyle === "newsroom-monograph"
      ? Newspaper
      : Globe2;

  return (
    <article
      id={chapter.id}
      className={`border-b border-black/[0.06] py-16 sm:py-24 ${
        isAlternateGrey ? "bg-[#F3F4F7]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Chapter Header Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0F1] text-[#FF1E2D]">
              <ChapterIcon className="h-4 w-4" />
            </span>
            <span className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
              {chapter.eraBadge[locale]}
            </span>
          </div>

          <span className="font-mono-code text-3xl sm:text-4xl font-extrabold text-black/15">
            {chapter.number}
          </span>
        </div>

        {/* Main Chapter Grid */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Narrative Prose & Milestones Column */}
          <div
            className={`lg:col-span-7 space-y-6 ${
              chapter.rhythmStyle === "television-split" ? "lg:order-2" : ""
            }`}
          >
            <div className="space-y-2.5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#090A0F] leading-tight">
                {chapter.title[locale]}
              </h2>
              <p className="text-sm sm:text-base font-extrabold text-[#FF1E2D]">
                {chapter.subtitle[locale]}
              </p>
            </div>

            <p className="text-base sm:text-lg leading-[1.85] font-bold text-[#090A0F]">
              {chapter.leadParagraph[locale]}
            </p>

            <div className="space-y-4 text-sm sm:text-base leading-[1.85] text-[#525866]">
              {chapter.bodyParagraphs[locale].map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Pull Quote */}
            {chapter.pullQuote && (
              <blockquote
                className={`my-6 rounded-[28px] border-s-4 border-[#FF1E2D] p-6 ${
                  isAlternateGrey ? "bg-white shadow-2xs" : "bg-[#F3F4F7]"
                }`}
              >
                <p className="text-lg sm:text-xl font-extrabold leading-relaxed text-[#090A0F]">
                  {chapter.pullQuote.text[locale]}
                </p>
                <footer className="mt-2 text-xs font-bold text-[#525866]">
                  — {chapter.pullQuote.attribution[locale]}
                </footer>
              </blockquote>
            )}

            {/* Chapter Milestones */}
            <div className="pt-3 space-y-4">
              <h3 className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                {isAr ? "أبرز محطات هذا الفصل" : "KEY CHAPTER MILESTONES"}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {chapter.milestones.map((ms) => (
                  <div
                    key={ms.id}
                    className={`rounded-[28px] p-6 transition ${
                      isAlternateGrey
                        ? "bg-white shadow-2xs"
                        : "bg-[#F3F4F7]"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono-code text-xs font-extrabold text-[#FF1E2D]">
                        {ms.period[locale]}
                      </span>
                      <span
                        className={`rounded-full px-3.5 py-1 text-[11px] font-extrabold text-[#090A0F] ${
                          isAlternateGrey ? "bg-[#F3F4F7]" : "bg-white"
                        }`}
                      >
                        {ms.natureBadge[locale]}
                      </span>
                    </div>

                    <h4 className="mt-2 text-base font-extrabold text-[#090A0F]">
                      {ms.organization[locale]}{" "}
                      <span className="font-semibold text-[#525866]">
                        · {ms.role[locale]}
                      </span>
                    </h4>

                    <p className="mt-1.5 text-sm leading-relaxed text-[#525866]">
                      {ms.summary[locale]}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-black/[0.06] pt-3 text-xs font-semibold text-[#525866]">
                      <span>{ms.sourceNote[locale]}</span>
                      <a
                        href={ms.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-[#090A0F] hover:text-[#FF1E2D]"
                      >
                        <span>{UI_LABELS.common.sourceLink[locale]}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Linked Curated Works */}
            {linkedWorks.length > 0 && (
              <div className="pt-3">
                <h3 className="mb-3 text-xs font-extrabold tracking-wider text-[#525866] uppercase">
                  {isAr
                    ? "أعمال مختارة مرتبطة بهذا الفصل"
                    : "SELECTED WORKS FROM THIS CHAPTER"}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {linkedWorks.map((work) => (
                    <Link
                      key={work.slug}
                      href={`/${locale}/work/${work.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#090A0F] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#FF1E2D]"
                    >
                      <span>{work.title[locale]}</span>
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Chapter Portrait Column */}
          <div
            className={`lg:col-span-5 ${
              chapter.rhythmStyle === "television-split" ? "lg:order-1" : ""
            }`}
          >
            <figure
              className={`overflow-hidden rounded-[36px] p-3.5 shadow-[0_24px_60px_rgba(9,10,15,0.08)] ${
                isAlternateGrey ? "bg-white" : "bg-[#F3F4F7]"
              }`}
            >
              <div className="relative overflow-hidden rounded-[26px]">
                <picture className="block w-full">
                  <source srcSet={chapter.portraitAvif} type="image/avif" />
                  <img
                    src={chapter.portraitAsset}
                    alt={chapter.title[locale]}
                    style={{ objectPosition: chapter.portraitFocalPoint }}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </picture>
              </div>
              <figcaption className="mt-3 px-2 pb-1 text-xs font-medium leading-relaxed text-[#525866]">
                <p>{chapter.portraitCaption[locale]}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </article>
  );
}
