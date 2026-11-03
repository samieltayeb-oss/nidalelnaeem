import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Calendar,
  Globe,
} from "lucide-react";
import {
  Locale,
  WORK_ITEMS,
  getWorkBySlug,
  UI_LABELS,
} from "@/data/portfolio-data";
import { CuratedMediaPlayer } from "@/components/media/CuratedMediaPlayer";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["ar", "en"]) {
    for (const item of WORK_ITEMS) {
      params.push({ locale, slug: item.slug });
    }
  }
  return params;
}

export default async function WorkDossierPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (locale !== "ar" && locale !== "en") notFound();
  const typedLocale = locale as Locale;
  const isAr = typedLocale === "ar";

  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const currentIndex = WORK_ITEMS.findIndex((w) => w.slug === work.slug);
  const nextWork = WORK_ITEMS[(currentIndex + 1) % WORK_ITEMS.length];
  const prevWork =
    WORK_ITEMS[(currentIndex - 1 + WORK_ITEMS.length) % WORK_ITEMS.length];

  return (
    <div className="bg-[#060E16] py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Breadcrumb Navigation */}
        <nav
          aria-label={isAr ? "مسار الصفحة" : "Breadcrumb"}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F4EEE3]/10 pb-4 text-xs text-[#93A3B1]"
        >
          <div className="flex items-center gap-3">
            <Link
              href={
                work.featuredInWords
                  ? `/${typedLocale}/words`
                  : `/${typedLocale}/on-screen`
              }
              className="inline-flex items-center gap-1.5 font-medium text-[#C8B692] hover:text-[#F4EEE3]"
            >
              {isAr ? (
                <ArrowRight className="h-3.5 w-3.5 text-[#ED2530]" />
              ) : (
                <ArrowLeft className="h-3.5 w-3.5 text-[#ED2530]" />
              )}
              <span>
                {work.featuredInWords
                  ? UI_LABELS.common.backToWords[typedLocale]
                  : UI_LABELS.common.backToOnScreen[typedLocale]}
              </span>
            </Link>
            <span>/</span>
            <span className="text-[#F4EEE3]">{work.categoryLabel[typedLocale]}</span>
          </div>

          <span className="text-[11px] font-medium text-[#C8B692]">
            {work.broadcasterOrPlatform[typedLocale]}
          </span>
        </nav>

        {/* Dossier Title & Verified Role Header */}
        <header className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded bg-[#ED2530] px-3 py-1 text-xs font-semibold text-white">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{work.verifiedRole[typedLocale]}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded border border-[#F4EEE3]/15 bg-[#0B1926] px-3 py-1 text-xs text-[#D1C7B8]">
              <Calendar className="h-3.5 w-3.5 text-[#C8B692]" />
              <span>{work.dateDisplay[typedLocale]}</span>
            </span>

            {work.duration && (
              <span className="inline-flex items-center gap-1.5 rounded border border-[#F4EEE3]/15 bg-[#0B1926] px-3 py-1 font-mono-code text-xs text-[#F4EEE3]">
                <Clock className="h-3.5 w-3.5 text-[#C8B692]" />
                <span>{work.duration}</span>
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 rounded border border-[#F4EEE3]/15 bg-[#0B1926] px-3 py-1 text-xs text-[#D1C7B8]">
              <Globe className="h-3.5 w-3.5 text-[#C8B692]" />
              <span>{work.language[typedLocale]}</span>
            </span>
          </div>

          <h1
            className={`text-[#F4EEE3] leading-tight ${
              isAr
                ? "font-display-ar text-3xl sm:text-5xl font-bold"
                : "font-display-en text-3xl sm:text-5xl font-semibold"
            }`}
          >
            {work.title[typedLocale]}
          </h1>

          <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-[#C8B692]">
            {work.subtitle[typedLocale]}
          </p>
        </header>

        {/* Media Player / Visual Dossier Viewer */}
        <section aria-label={isAr ? "مشغل ومستعرض المادة" : "Media & Source Viewer"}>
          <CuratedMediaPlayer work={work} locale={typedLocale} />
        </section>

        {/* Detailed Documentary Dossier Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left 7 Cols: Factual Summary, Key Takeaways & Editorial Context */}
          <div className="lg:col-span-7 space-y-8">
            <section className="space-y-3">
              <h2
                className={`text-xs font-semibold text-[#C8B692] ${
                  isAr ? "" : "uppercase tracking-[0.18em]"
                }`}
              >
                {isAr ? "ملخص المادة" : "SUMMARY"}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#F4EEE3]">
                {work.summary[typedLocale]}
              </p>
            </section>

            <section className="rounded-sm border border-[#F4EEE3]/12 bg-[#0B1926]/85 p-6 space-y-4">
              <h2
                className={`text-xs font-semibold text-[#ED2530] ${
                  isAr ? "" : "uppercase tracking-[0.18em]"
                }`}
              >
                {isAr ? "أبرز النقاط" : "KEY HIGHLIGHTS"}
              </h2>
              <ul className="space-y-2.5 text-sm leading-relaxed text-[#D1C7B8]">
                {work.keyTakeaways[typedLocale].map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C8B692]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-sm border-s-2 border-[#ED2530] bg-[#08131E] p-5 space-y-2">
              <h2
                className={`text-xs font-semibold text-[#F4EEE3] ${
                  isAr ? "" : "uppercase tracking-[0.16em]"
                }`}
              >
                {isAr ? "السياق التحريري" : "EDITORIAL CONTEXT"}
              </h2>
              <p className="text-sm leading-relaxed text-[#D1C7B8]">
                {work.editorialContext[typedLocale]}
              </p>
            </section>
          </div>

          {/* Right 5 Cols: Provenance, Why Selected, & Direct Source Links */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-sm border border-[#C8B692]/30 bg-[#0B1926] p-6 space-y-4">
              <h2
                className={`text-xs font-semibold text-[#C8B692] ${
                  isAr ? "" : "uppercase tracking-[0.18em]"
                }`}
              >
                {isAr ? "أهمية هذا العمل في المسيرة" : "SIGNIFICANCE IN HER WORK"}
              </h2>
              <p className="text-sm leading-relaxed text-[#F4EEE3]">
                {work.whySelected[typedLocale]}
              </p>

              <div className="border-t border-[#F4EEE3]/10 pt-4 space-y-3 text-xs text-[#D1C7B8]">
                <div>
                  <span className="block text-[#93A3B1]">
                    {isAr ? "المنصة / جهة النشر:" : "Broadcaster / Platform:"}
                  </span>
                  <strong className="text-[#F4EEE3]">
                    {work.broadcasterOrPlatform[typedLocale]}
                  </strong>
                </div>

                <div>
                  <span className="block text-[#93A3B1]">
                    {UI_LABELS.common.rightsAndProvenance[typedLocale]}:
                  </span>
                  <span>{work.rightsStatus[typedLocale]}</span>
                </div>

                {work.photographerCredit && (
                  <div>
                    <span className="block text-[#93A3B1]">
                      {isAr ? "حقوق التصوير الفوتوغرافي:" : "Photography Credit:"}
                    </span>
                    <strong className="text-[#C8B692]">{work.photographerCredit}</strong>
                  </div>
                )}
              </div>

              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href={work.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded bg-[#ED2530] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#d41f2a]"
                >
                  <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                {work.secondarySourceUrl && (
                  <a
                    href={work.secondarySourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded border border-[#F4EEE3]/20 bg-[#060E16] px-5 py-2.5 text-xs font-medium text-[#D1C7B8] hover:border-[#C8B692] hover:text-[#F4EEE3]"
                  >
                    <span>
                      {isAr
                        ? "رابط توثيقي إضافي للمادة"
                        : "Secondary Verification Source Link"}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#C8B692]" />
                  </a>
                )}
              </div>
            </div>

            <div className="rounded-sm border border-[#F4EEE3]/10 bg-[#07111B] p-5 text-xs text-[#93A3B1] flex items-start gap-2.5">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#C8B692] mt-0.5" />
              <p>
                {isAr
                  ? "جميع الروابط تفتح في المصدر الأصلي للناشر. لا يقوم هذا الموقع بإعادة استضافة البث التلفزيوني الكامل أو إزالة العلامات المائية."
                  : "All external links point directly to the original publisher or verified profile. Broadcasts are never rehosted without permission or stripped of watermarks."}
              </p>
            </div>
          </aside>
        </div>

        {/* Next / Previous Work Navigation */}
        <nav
          aria-label={isAr ? "التنقل بين الأعمال المختارة" : "Adjacent Works Navigation"}
          className="grid grid-cols-1 gap-4 border-t border-[#F4EEE3]/10 pt-10 sm:grid-cols-2"
        >
          <Link
            href={`/${typedLocale}/work/${prevWork.slug}`}
            className="group rounded-sm border border-[#F4EEE3]/12 bg-[#0B1926]/70 p-5 transition hover:border-[#C8B692]/50"
          >
            <span
              className={`block text-[11px] text-[#93A3B1] ${
                isAr ? "" : "font-mono-code uppercase tracking-wider"
              }`}
            >
              {isAr ? "→ العمل السابق" : "← PREVIOUS WORK"}
            </span>
            <span
              className={`mt-1 block text-lg text-[#F4EEE3] group-hover:text-[#C8B692] ${
                isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
              }`}
            >
              {prevWork.title[typedLocale]}
            </span>
          </Link>

          <Link
            href={`/${typedLocale}/work/${nextWork.slug}`}
            className="group rounded-sm border border-[#F4EEE3]/12 bg-[#0B1926]/70 p-5 text-end transition hover:border-[#C8B692]/50"
          >
            <span
              className={`block text-[11px] text-[#93A3B1] ${
                isAr ? "" : "font-mono-code uppercase tracking-wider"
              }`}
            >
              {isAr ? "العمل التالي ←" : "NEXT WORK →"}
            </span>
            <span
              className={`mt-1 block text-lg text-[#F4EEE3] group-hover:text-[#C8B692] ${
                isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
              }`}
            >
              {nextWork.title[typedLocale]}
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
