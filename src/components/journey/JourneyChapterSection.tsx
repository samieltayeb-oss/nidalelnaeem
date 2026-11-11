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
}

export function JourneyChapterSection({
  chapter,
  locale,
}: JourneyChapterSectionProps) {
  const isAr = locale === "ar";
  const linkedWorks = WORK_ITEMS.filter((w) =>
    chapter.linkedWorkSlugs.includes(w.slug)
  );

  // Chapter III uses Warm Alabaster Paper monograph contrast
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
      className={`relative overflow-hidden border-b py-16 sm:py-24 ${
        isIvoryMonograph
          ? "border-[#141A24]/10 bg-[#F7F4EE] text-[#121722]"
          : chapter.rhythmStyle === "radio-concentric"
          ? "border-white/8 bg-[#0A0E17] text-[#F7F4EE]"
          : chapter.rhythmStyle === "television-split"
          ? "border-white/8 bg-[#07090E] text-[#F7F4EE]"
          : "border-white/8 bg-[#0C101B] text-[#F7F4EE]"
      }`}
    >
      {/* Chapter I Subtle Acoustic Concentric Rings */}
      {chapter.rhythmStyle === "radio-concentric" && (
        <svg
          viewBox="0 0 1200 800"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
        >
          <circle cx="900" cy="400" r="220" stroke="#D4BE96" strokeOpacity="0.25" strokeWidth="1" />
          <circle cx="900" cy="400" r="320" stroke="#D4BE96" strokeOpacity="0.18" strokeWidth="1" />
          <circle cx="900" cy="400" r="420" stroke="#D4BE96" strokeOpacity="0.12" strokeWidth="1" />
          <circle cx="900" cy="400" r="520" stroke="#E6242F" strokeOpacity="0.22" strokeWidth="1" />
        </svg>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Chapter Header Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-current/12 pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6242F]/40 bg-[#E6242F]/10 text-[#E6242F]">
              <ChapterIcon className="h-4 w-4" />
            </span>
            <span
              className={`text-xs font-semibold ${
                isIvoryMonograph ? "text-[#B81D26]" : "text-[#D4BE96]"
              } ${isAr ? "" : "font-mono-code uppercase tracking-[0.16em]"}`}
            >
              {chapter.eraBadge[locale]}
            </span>
          </div>

          <span
            className={`font-display-en text-4xl font-light tracking-widest ${
              isIvoryMonograph ? "text-[#121722]/20" : "text-[#D4BE96]/25"
            }`}
          >
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
                  isIvoryMonograph ? "text-[#B81D26]" : "text-[#D4BE96]"
                }`}
              >
                {chapter.subtitle[locale]}
              </p>
            </div>

            <p
              className={`text-base sm:text-lg leading-[1.85] font-medium ${
                isIvoryMonograph ? "text-[#121722]" : "text-[#F7F4EE]"
              }`}
            >
              {chapter.leadParagraph[locale]}
            </p>

            <div
              className={`space-y-4 text-sm sm:text-base leading-[1.85] ${
                isIvoryMonograph ? "text-[#3A3731]" : "text-[#C8C2B8]"
              }`}
            >
              {chapter.bodyParagraphs[locale].map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Pull Quote */}
            {chapter.pullQuote && (
              <blockquote
                className={`my-6 rounded-2xl border-s-4 border-[#E6242F] p-5 sm:p-6 ${
                  isIvoryMonograph
                    ? "bg-[#EFEAE0] text-[#121722]"
                    : "bg-white/[0.04] text-[#F7F4EE]"
                }`}
              >
                <p
                  className={`text-lg sm:text-2xl leading-relaxed ${
                    isAr
                      ? "font-serif-ar font-bold"
                      : "font-display-en italic"
                  }`}
                >
                  {chapter.pullQuote.text[locale]}
                </p>
                <footer
                  className={`mt-2 text-xs font-medium ${
                    isIvoryMonograph ? "text-[#5E584E]" : "text-[#D4BE96]"
                  }`}
                >
                  — {chapter.pullQuote.attribution[locale]}
                </footer>
              </blockquote>
            )}

            {/* Chapter Milestones */}
            <div className="pt-3 space-y-4">
              <h3
                className={`text-xs font-semibold ${
                  isAr ? "" : "uppercase tracking-[0.16em]"
                } ${isIvoryMonograph ? "text-[#5E584E]" : "text-[#D4BE96]"}`}
              >
                {isAr ? "أبرز محطات هذا الفصل" : "KEY CHAPTER MILESTONES"}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {chapter.milestones.map((ms) => (
                  <div
                    key={ms.id}
                    className={`rounded-2xl border p-5 transition ${
                      isIvoryMonograph
                        ? "border-[#141A24]/10 bg-white shadow-sm text-[#121722]"
                        : "border-white/10 bg-white/[0.03] text-[#F7F4EE] hover:border-[#D4BE96]/30"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono-code text-xs font-semibold text-[#E6242F]">
                        {ms.period[locale]}
                      </span>
                      <span
                        className={`rounded-full px-3 py-0.5 text-[11px] font-medium ${
                          isIvoryMonograph
                            ? "bg-[#EFEAE0] text-[#121722]"
                            : "bg-white/[0.08] text-[#D4BE96]"
                        }`}
                      >
                        {ms.natureBadge[locale]}
                      </span>
                    </div>

                    <h4 className="mt-2 text-base font-bold">
                      {ms.organization[locale]}{" "}
                      <span className="font-normal opacity-85">
                        · {ms.role[locale]}
                      </span>
                    </h4>

                    <p
                      className={`mt-1.5 text-sm leading-relaxed ${
                        isIvoryMonograph ? "text-[#4A463E]" : "text-[#C8C2B8]"
                      }`}
                    >
                      {ms.summary[locale]}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-current/10 pt-3 text-xs opacity-80">
                      <span>{ms.sourceNote[locale]}</span>
                      <a
                        href={ms.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium underline underline-offset-4 hover:text-[#E6242F]"
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
                <h3
                  className={`mb-3 text-xs font-semibold ${
                    isAr ? "" : "uppercase tracking-[0.16em]"
                  } ${isIvoryMonograph ? "text-[#5E584E]" : "text-[#D4BE96]"}`}
                >
                  {isAr
                    ? "أعمال مختارة مرتبطة بهذا الفصل"
                    : "SELECTED WORKS FROM THIS CHAPTER"}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {linkedWorks.map((work) => (
                    <Link
                      key={work.slug}
                      href={`/${locale}/work/${work.slug}`}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition ${
                        isIvoryMonograph
                          ? "border-[#121722]/20 bg-[#121722] text-[#F7F4EE] hover:bg-[#1e2638]"
                          : "border-[#D4BE96]/30 bg-white/[0.05] text-[#F7F4EE] hover:border-[#D4BE96]"
                      }`}
                    >
                      <span>{work.title[locale]}</span>
                      {isAr ? (
                        <ArrowUpLeft className="h-3.5 w-3.5 text-[#E6242F]" />
                      ) : (
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#E6242F]" />
                      )}
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
              className={`overflow-hidden rounded-3xl border p-3 shadow-2xl ${
                isIvoryMonograph
                  ? "border-[#141A24]/12 bg-white"
                  : "border-white/12 bg-white/[0.03]"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl">
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
              <figcaption
                className={`mt-3 px-2 pb-1 text-xs leading-relaxed ${
                  isIvoryMonograph ? "text-[#4A463E]" : "text-[#C8C2B8]"
                }`}
              >
                <p>{chapter.portraitCaption[locale]}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </article>
  );
}
