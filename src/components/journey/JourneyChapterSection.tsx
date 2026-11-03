import React from "react";
import Link from "next/link";
import { ExternalLink, Radio, Tv, Newspaper, Globe2, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import {
  JourneyChapter,
  Locale,
  WORK_ITEMS,
  UI_LABELS,
} from "@/data/portfolio-data";

interface JourneyChapterSectionProps {
  chapter: JourneyChapter;
  locale: Locale;
}

export function JourneyChapterSection({
  chapter,
  locale,
}: JourneyChapterSectionProps) {
  const isAr = locale === "ar";
  const linkedWorks = WORK_ITEMS.filter((w) =>
    chapter.linkedWorkSlugs.includes(w.slug)
  );

  // Chapter III uses a warm ivory monograph reading block inspired by 01_Editorial_Portrait
  const isIvoryMonograph = chapter.rhythmStyle === "newsroom-monograph";

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
      className={`relative overflow-hidden border-b border-[#F4EEE3]/10 py-16 sm:py-24 ${
        isIvoryMonograph
          ? "bg-[#F4F0E8] text-[#102535]"
          : chapter.rhythmStyle === "radio-concentric"
          ? "bg-[#08131E] text-[#F4EEE3]"
          : chapter.rhythmStyle === "television-split"
          ? "bg-[#060E16] text-[#F4EEE3]"
          : "bg-[#0A1722] text-[#F4EEE3]"
      }`}
    >
      {/* Chapter I Acoustic Concentric Rings (Inspired by 02_Midnight_Broadcast.svg) */}
      {chapter.rhythmStyle === "radio-concentric" && (
        <svg
          viewBox="0 0 1200 800"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        >
          <circle cx="900" cy="400" r="220" stroke="#24404C" strokeWidth="1" />
          <circle cx="900" cy="400" r="310" stroke="#24404C" strokeWidth="1" />
          <circle cx="900" cy="400" r="400" stroke="#24404C" strokeWidth="1" />
          <circle cx="900" cy="400" r="490" stroke="#ED2530" strokeOpacity="0.35" strokeWidth="1" />
        </svg>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Chapter Header Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-current/15 pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ED2530]/50 bg-[#ED2530]/10 text-[#ED2530]">
              <ChapterIcon className="h-4 w-4" />
            </span>
            <span
              className={`text-xs font-semibold text-[#ED2530] ${
                isAr ? "" : "font-mono-code uppercase tracking-[0.18em]"
              }`}
            >
              {chapter.eraBadge[locale]}
            </span>
          </div>

          <span
            className={`font-display-en text-4xl font-light tracking-widest ${
              isIvoryMonograph ? "text-[#102535]/25" : "text-[#C8B692]/30"
            }`}
          >
            {chapter.number}
          </span>
        </div>

        {/* Main Chapter Grid */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Narrative Prose & Documented Milestones Column */}
          <div
            className={`lg:col-span-7 space-y-6 ${
              chapter.rhythmStyle === "television-split" ? "lg:order-2" : ""
            }`}
          >
            <div className="space-y-3">
              <h2
                className={`leading-tight ${
                  isAr
                    ? "font-display-ar text-3xl sm:text-4xl lg:text-5xl font-bold"
                    : "font-display-en text-3xl sm:text-4xl lg:text-5xl font-semibold"
                }`}
              >
                {chapter.title[locale]}
              </h2>
              <p
                className={`text-sm sm:text-base font-medium ${
                  isIvoryMonograph ? "text-[#BC2937]" : "text-[#C8B692]"
                }`}
              >
                {chapter.subtitle[locale]}
              </p>
            </div>

            <p
              className={`text-base sm:text-lg leading-relaxed font-medium ${
                isIvoryMonograph ? "text-[#102535]" : "text-[#F4EEE3]"
              }`}
            >
              {chapter.leadParagraph[locale]}
            </p>

            <div
              className={`space-y-4 text-sm sm:text-base leading-relaxed ${
                isIvoryMonograph ? "text-[#243B4E]" : "text-[#D1C7B8]"
              }`}
            >
              {chapter.bodyParagraphs[locale].map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Pull Quote if present */}
            {chapter.pullQuote && (
              <blockquote
                className={`my-6 border-s-2 border-[#ED2530] ps-5 py-2 ${
                  isIvoryMonograph
                    ? "bg-[#EAE3D5]/70 text-[#102535]"
                    : "bg-[#0B1926]/80 text-[#F4EEE3]"
                } p-4 rounded-e`}
              >
                <p
                  className={`text-lg sm:text-xl italic leading-relaxed ${
                    isAr ? "font-display-ar" : "font-display-en"
                  }`}
                >
                  {chapter.pullQuote.text[locale]}
                </p>
                <footer
                  className={`mt-2 text-xs ${
                    isIvoryMonograph ? "text-[#475E70]" : "text-[#C8B692]"
                  }`}
                >
                  — {chapter.pullQuote.attribution[locale]}
                </footer>
              </blockquote>
            )}

            {/* Verified Chapter Records (Honest Simultaneous & Training Distinction) */}
            <div className="pt-4 space-y-4">
              <h3
                className={`text-xs font-semibold ${
                  isAr ? "" : "uppercase tracking-[0.18em]"
                } ${isIvoryMonograph ? "text-[#102535]/70" : "text-[#C8B692]"}`}
              >
                {isAr ? "محطات هذا الفصل" : "CHAPTER MILESTONES"}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {chapter.milestones.map((ms) => (
                  <div
                    key={ms.id}
                    className={`rounded-sm border p-4 transition ${
                      isIvoryMonograph
                        ? "border-[#102535]/15 bg-white/80 text-[#102535]"
                        : "border-[#F4EEE3]/12 bg-[#0B1926]/85 text-[#F4EEE3]"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono-code text-xs font-semibold text-[#ED2530]">
                        {ms.period[locale]}
                      </span>
                      <span
                        className={`rounded px-2.5 py-0.5 text-[11px] font-medium ${
                          ms.natureOfEntry === "journalism_training"
                            ? isIvoryMonograph
                              ? "bg-[#102535]/10 text-[#102535]"
                              : "bg-[#C8B692]/15 text-[#C8B692]"
                            : ms.natureOfEntry === "social_participation"
                            ? "bg-[#ED2530]/15 text-[#ED2530]"
                            : isIvoryMonograph
                            ? "bg-[#102535] text-[#F4F0E8]"
                            : "bg-[#162D42] text-[#F4EEE3]"
                        }`}
                      >
                        {ms.natureBadge[locale]}
                      </span>
                    </div>

                    <h4 className="mt-2 text-base font-semibold">
                      {ms.organization[locale]} —{" "}
                      <span className="font-normal opacity-90">{ms.role[locale]}</span>
                    </h4>

                    <p
                      className={`mt-1.5 text-sm leading-relaxed ${
                        isIvoryMonograph ? "text-[#2A4256]" : "text-[#D1C7B8]"
                      }`}
                    >
                      {ms.summary[locale]}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-current/10 pt-2.5 text-xs opacity-80">
                      <span>{ms.sourceNote[locale]}</span>
                      <a
                        href={ms.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium underline underline-offset-4 hover:text-[#ED2530]"
                      >
                        <span>{UI_LABELS.common.sourceLink[locale]}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Linked Curated Works in this Chapter */}
            {linkedWorks.length > 0 && (
              <div className="pt-4">
                <h3
                  className={`mb-3 text-xs font-semibold ${
                    isAr ? "" : "uppercase tracking-[0.18em]"
                  } ${isIvoryMonograph ? "text-[#102535]/70" : "text-[#C8B692]"}`}
                >
                  {isAr ? "أعمال مختارة من هذه المرحلة" : "SELECTED WORKS FROM THIS CHAPTER"}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {linkedWorks.map((work) => (
                    <Link
                      key={work.slug}
                      href={`/${locale}/work/${work.slug}`}
                      className={`inline-flex items-center gap-2 rounded border px-4 py-2 text-xs font-medium transition ${
                        isIvoryMonograph
                          ? "border-[#102535]/25 bg-[#102535] text-[#F4F0E8] hover:bg-[#1c3b52]"
                          : "border-[#C8B692]/35 bg-[#102232] text-[#F4EEE3] hover:border-[#C8B692]"
                      }`}
                    >
                      <span>{work.title[locale]}</span>
                      {isAr ? (
                        <ArrowUpLeft className="h-3.5 w-3.5 text-[#ED2530]" />
                      ) : (
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#ED2530]" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Chapter Portrait Plate Column */}
          <div
            className={`lg:col-span-5 ${
              chapter.rhythmStyle === "television-split" ? "lg:order-1" : ""
            }`}
          >
            <figure
              className={`overflow-hidden rounded-sm border shadow-xl ${
                isIvoryMonograph
                  ? "border-[#102535]/20 bg-white p-3"
                  : "border-[#C8B692]/25 bg-[#0B1926] p-2.5"
              }`}
            >
              <div className="relative overflow-hidden rounded-xs">
                <div className="h-1 w-full bg-[#ED2530]" />
                <picture className="block w-full">
                  <source srcSet={chapter.portraitAvif} type="image/avif" />
                  <img
                    src={chapter.portraitAsset}
                    alt={chapter.title[locale]}
                    style={{ objectPosition: chapter.portraitFocalPoint }}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </picture>
              </div>
              <figcaption
                className={`mt-3 px-1 text-xs leading-relaxed ${
                  isIvoryMonograph ? "text-[#2A4256]" : "text-[#D1C7B8]"
                }`}
              >
                <p>{chapter.portraitCaption[locale]}</p>
                {chapter.photographerCredit && (
                  <p className="mt-1 font-mono-code text-[11px] font-medium text-[#ED2530]">
                    {isAr
                      ? `تصوير: ${chapter.photographerCredit}`
                      : `Photo Credit: ${chapter.photographerCredit}`}
                  </p>
                )}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </article>
  );
}
