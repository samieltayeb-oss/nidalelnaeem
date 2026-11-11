import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
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

export default async function WorkDetailPage({
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
    <div className="bg-white py-12 sm:py-20 text-[#090A0F]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Breadcrumb Navigation */}
        <nav
          aria-label={isAr ? "مسار الصفحة" : "Breadcrumb"}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.06] pb-4 text-xs font-semibold text-[#525866]"
        >
          <div className="flex items-center gap-3">
            <Link
              href={
                work.featuredInWords
                  ? `/${typedLocale}/words`
                  : `/${typedLocale}/on-screen`
              }
              className="inline-flex items-center gap-1.5 font-extrabold text-[#090A0F] hover:text-[#FF1E2D]"
            >
              {isAr ? (
                <ArrowRight className="h-3.5 w-3.5 text-[#FF1E2D]" />
              ) : (
                <ArrowLeft className="h-3.5 w-3.5 text-[#FF1E2D]" />
              )}
              <span>
                {work.featuredInWords
                  ? UI_LABELS.common.backToWords[typedLocale]
                  : UI_LABELS.common.backToOnScreen[typedLocale]}
              </span>
            </Link>
            <span>/</span>
            <span className="font-bold text-[#525866]">
              {work.categoryLabel[typedLocale]}
            </span>
          </div>

          <span className="rounded-full bg-[#F3F4F7] px-3.5 py-1 text-[11px] font-bold text-[#090A0F]">
            {work.broadcasterOrPlatform[typedLocale]}
          </span>
        </nav>

        {/* Title & Role Header */}
        <header className="space-y-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF1E2D] px-3.5 py-1 text-xs font-extrabold text-white">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{work.verifiedRole[typedLocale]}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F4F7] px-3.5 py-1 text-xs font-bold text-[#090A0F]">
              <Calendar className="h-3.5 w-3.5 text-[#FF1E2D]" />
              <span>{work.dateDisplay[typedLocale]}</span>
            </span>

            {work.duration && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F4F7] px-3.5 py-1 font-mono-code text-xs font-bold text-[#090A0F]">
                <Clock className="h-3.5 w-3.5 text-[#FF1E2D]" />
                <span>{work.duration}</span>
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F4F7] px-3.5 py-1 text-xs font-bold text-[#090A0F]">
              <Globe className="h-3.5 w-3.5 text-[#FF1E2D]" />
              <span>{work.language[typedLocale]}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#090A0F] leading-[1.15]">
            {work.title[typedLocale]}
          </h1>

          <p className="max-w-3xl text-base sm:text-lg font-bold leading-relaxed text-[#525866]">
            {work.subtitle[typedLocale]}
          </p>
        </header>

        {/* Media Player / Visual Viewer */}
        <section aria-label={isAr ? "مشغل ومستعرض المادة" : "Media & Source Viewer"}>
          <CuratedMediaPlayer work={work} locale={typedLocale} />
        </section>

        {/* Content & Context Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left 7 Cols: Summary, Highlights & Context */}
          <div className="lg:col-span-7 space-y-8">
            <section className="space-y-3">
              <h2 className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                {isAr ? "نبذة عن المادة" : "OVERVIEW"}
              </h2>
              <p className="text-base sm:text-lg leading-[1.85] text-[#090A0F]">
                {work.summary[typedLocale]}
              </p>
            </section>

            <section className="rounded-[32px] bg-[#F3F4F7] p-6 sm:p-7 space-y-4">
              <h2 className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                {isAr ? "أبرز النقاط" : "KEY HIGHLIGHTS"}
              </h2>
              <ul className="space-y-2.5 text-sm leading-relaxed text-[#090A0F] font-medium">
                {work.keyTakeaways[typedLocale].map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF1E2D]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border-s-4 border-[#FF1E2D] bg-[#F3F4F7] p-5 space-y-2">
              <h2 className="text-xs font-extrabold tracking-wider text-[#090A0F] uppercase">
                {isAr ? "إضاءة تحريرية" : "EDITORIAL NOTE"}
              </h2>
              <p className="text-sm leading-relaxed text-[#525866]">
                {work.editorialContext[typedLocale]}
              </p>
            </section>
          </div>

          {/* Right 5 Cols: Publication Details & Direct Source Links */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-[32px] border border-black/[0.07] bg-white p-6 sm:p-7 shadow-sm space-y-5">
              <h2 className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                {isAr ? "موقع العمل في المسيرة" : "SIGNIFICANCE"}
              </h2>
              <p className="text-sm leading-relaxed text-[#090A0F] font-medium">
                {work.whySelected[typedLocale]}
              </p>

              <div className="border-t border-black/[0.06] pt-4 space-y-3 text-xs text-[#525866]">
                <div>
                  <span className="block font-semibold">
                    {isAr ? "المنصة / جهة النشر:" : "Broadcaster / Platform:"}
                  </span>
                  <strong className="text-sm font-extrabold text-[#090A0F]">
                    {work.broadcasterOrPlatform[typedLocale]}
                  </strong>
                </div>

                <div>
                  <span className="block font-semibold">
                    {UI_LABELS.common.rightsAndProvenance[typedLocale]}:
                  </span>
                  <span>{work.rightsStatus[typedLocale]}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={work.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF1E2D] px-5 py-3.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#090A0F]"
                >
                  <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                {work.secondarySourceUrl && (
                  <a
                    href={work.secondarySourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F3F4F7] px-5 py-3 text-xs font-bold text-[#090A0F] transition hover:bg-[#E5E7EB]"
                  >
                    <span>
                      {isAr ? "رابط إضافي للمادة" : "Additional Reference Link"}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#FF1E2D]" />
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Next / Previous Work Navigation */}
        <nav
          aria-label={isAr ? "التنقل بين الأعمال المختارة" : "Adjacent Works Navigation"}
          className="grid grid-cols-1 gap-4 border-t border-black/[0.06] pt-10 sm:grid-cols-2"
        >
          <Link
            href={`/${typedLocale}/work/${prevWork.slug}`}
            className="group rounded-[28px] bg-[#F3F4F7] p-6 transition hover:bg-[#090A0F] hover:text-white"
          >
            <span className="block text-[11px] font-extrabold text-[#FF1E2D] uppercase">
              {isAr ? "→ العمل السابق" : "← PREVIOUS WORK"}
            </span>
            <span className="mt-1.5 block text-lg font-extrabold">
              {prevWork.title[typedLocale]}
            </span>
          </Link>

          <Link
            href={`/${typedLocale}/work/${nextWork.slug}`}
            className="group rounded-[28px] bg-[#F3F4F7] p-6 text-end transition hover:bg-[#090A0F] hover:text-white"
          >
            <span className="block text-[11px] font-extrabold text-[#FF1E2D] uppercase">
              {isAr ? "العمل التالي ←" : "NEXT WORK →"}
            </span>
            <span className="mt-1.5 block text-lg font-extrabold">
              {nextWork.title[typedLocale]}
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
