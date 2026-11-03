import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Camera,
  ExternalLink,
  ShieldCheck,
  Layers,
  ArrowUpLeft,
  ArrowUpRight,
} from "lucide-react";
import {
  Locale,
  PHOTO_ESSAY_PLATES,
  UI_LABELS,
} from "@/data/portfolio-data";
import { HOSTED_PROGRAMS } from "@/data/life-and-press-data";

export default async function BehindTheWorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();
  const typedLocale = locale as Locale;
  const isAr = typedLocale === "ar";

  return (
    <div className="bg-[#060E16]">
      {/* Page Header */}
      <section className="border-b border-[#F4EEE3]/10 bg-[radial-gradient(ellipse_at_top,#102538_0%,#060E16_75%)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div
              className={`inline-flex items-center gap-2 rounded border border-[#C8B692]/35 bg-[#0B1926]/90 px-3.5 py-1 text-xs font-semibold text-[#C8B692] ${
                isAr ? "" : "uppercase tracking-[0.16em]"
              }`}
            >
              <Camera className="h-3.5 w-3.5 text-[#ED2530]" />
              <span>
                {isAr
                  ? "خلف الكواليس · مقال فوتوغرافي"
                  : "BEHIND THE WORK · PHOTO ESSAY"}
              </span>
            </div>

            <h1
              className={`text-[#F4EEE3] leading-tight ${
                isAr
                  ? "font-display-ar text-4xl sm:text-5xl lg:text-6xl font-bold"
                  : "font-display-en text-4xl sm:text-5xl lg:text-6xl font-semibold"
              }`}
            >
              {isAr
                ? "خلف الكواليس: الاستوديو، الأرشيف، والمحافل الإعلامية"
                : "Behind the Work: Studio Poise, Archival Walls & Industry Forums"}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#D1C7B8]">
              {isAr
                ? "مقال فوتوغرافي يجمع اللقطات الأصلية الكاملة من استوديوهات البث ومن حضورها المهني في المنتدى السعودي للإعلام بالرياض."
                : "A photographic essay presenting the full, uncropped portraits from broadcast studios and the Saudi Media Forum in Riyadh."}
            </p>
          </div>
        </div>
      </section>

      {/* Four Documentary Photo Essay Plates */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {PHOTO_ESSAY_PLATES.map((plate, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={plate.id}
                className="grid grid-cols-1 items-center gap-10 border-b border-[#F4EEE3]/10 pb-16 last:border-b-0 lg:grid-cols-12 lg:gap-12"
              >
                {/* Plate Photograph */}
                <div
                  className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}
                >
                  <figure className="overflow-hidden rounded-sm border border-[#C8B692]/30 bg-[#0B1926] p-3 shadow-2xl">
                    <div className="relative overflow-hidden">
                      <div className="h-1 w-full bg-[#ED2530]" />
                      <picture>
                        <source srcSet={plate.imageAvif} type="image/avif" />
                        <img
                          src={plate.imageWebp}
                          alt={plate.title[typedLocale]}
                          style={{ objectPosition: plate.focalPoint }}
                          loading="lazy"
                          className={`w-full object-cover ${plate.aspectClass}`}
                        />
                      </picture>
                    </div>

                    <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-[#93A3B1]">
                      <span className="font-mono-code text-[#C8B692]">
                        {isAr ? `لوحة ${plate.plateNumber}` : `PLATE ${plate.plateNumber}`} ·{" "}
                        {plate.nativeDimensions}
                      </span>
                      {plate.photographerCredit && (
                        <span className="font-semibold text-[#F4EEE3]">
                          {isAr
                            ? `تصوير: ${plate.photographerCredit}`
                            : `Photo Credit: ${plate.photographerCredit}`}
                        </span>
                      )}
                    </figcaption>
                  </figure>
                </div>

                {/* Plate Documentary Commentary & Provenance */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`text-xs font-semibold text-[#ED2530] ${
                        isAr ? "" : "font-mono-code uppercase tracking-[0.18em]"
                      }`}
                    >
                      {isAr ? `اللوحة ${plate.plateNumber}` : `PLATE ${plate.plateNumber}`}
                    </span>
                    <span className="h-3 w-[1px] bg-[#F4EEE3]/20" />
                    <span className="text-xs font-medium text-[#C8B692]">
                      {plate.setting[typedLocale]}
                    </span>
                  </div>

                  <h2
                    className={`text-3xl sm:text-4xl text-[#F4EEE3] ${
                      isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                    }`}
                  >
                    {plate.title[typedLocale]}
                  </h2>

                  <p className="text-base leading-relaxed text-[#F4EEE3]">
                    {plate.caption[typedLocale]}
                  </p>

                  <div className="rounded-sm border border-[#F4EEE3]/12 bg-[#0B1926]/85 p-5 space-y-2 text-xs leading-relaxed text-[#D1C7B8]">
                    <div className="flex items-center gap-2 font-semibold text-[#C8B692]">
                      <ShieldCheck className="h-4 w-4 text-[#ED2530]" />
                      <span>{UI_LABELS.common.rightsAndProvenance[typedLocale]}</span>
                    </div>
                    <p>{plate.documentaryNote[typedLocale]}</p>
                    <p className="pt-1 font-mono-code text-[11px] text-[#93A3B1]">
                      {plate.rightsBadge[typedLocale]}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={plate.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded border border-[#C8B692]/35 bg-[#102232] px-4 py-2.5 text-xs font-semibold text-[#F4EEE3] hover:border-[#C8B692]"
                    >
                      <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                      <ExternalLink className="h-3.5 w-3.5 text-[#C8B692]" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Hosted Programs & Broadcast Record Section */}
      <section className="border-t border-[#F4EEE3]/10 bg-[#050C14] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div
              className={`inline-flex items-center gap-2 text-xs font-semibold text-[#C8B692] ${
                isAr ? "" : "uppercase tracking-[0.16em]"
              }`}
            >
              <Layers className="h-4 w-4 text-[#ED2530]" />
              <span>
                {isAr
                  ? "سجل البرامج والمحطات"
                  : "PROGRAMS & BROADCAST RECORD"}
              </span>
            </div>

            <h2
              className={`text-2xl sm:text-3xl text-[#F4EEE3] ${
                isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
              }`}
            >
              {isAr
                ? "برامج أعدتها وقدمتها عبر الإذاعة والتلفزيون والمنصات الرقمية"
                : "Programs Prepared & Hosted Across Radio, Television, and Digital Media"}
            </h2>

            <p className="text-sm leading-relaxed text-[#D1C7B8]">
              {isAr
                ? "حصيلة متنوعة من البرامج الحوارية، والاجتماعية، والثقافية، والتقارير الخبرية التي قدمتها نضال النعيم منذ انطلاقتها عام 2015."
                : "A overview of the live radio shows, evening television programs, digital series, and newsroom roles Nidal Elnaeem has held since 2015."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HOSTED_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="flex flex-col justify-between rounded-sm border border-[#F4EEE3]/15 bg-[#0A1722] p-6 space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#ED2530] font-semibold">
                      {prog.period[typedLocale]}
                    </span>
                    <span className="rounded bg-[#102232] px-2.5 py-0.5 text-[11px] text-[#C8B692]">
                      {prog.medium[typedLocale]}
                    </span>
                  </div>
                  <h3
                    className={`text-lg text-[#F4EEE3] ${
                      isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                    }`}
                  >
                    {prog.title[typedLocale]}
                  </h3>
                  <p className="text-xs font-medium text-[#C8B692]">
                    {prog.network[typedLocale]}
                  </p>
                  <p className="text-xs leading-relaxed text-[#D1C7B8]">
                    {prog.description[typedLocale]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#F4EEE3]/10 pt-6 text-xs text-[#93A3B1]">
            <Link
              href={`/${typedLocale}/life`}
              className="inline-flex items-center gap-1.5 font-semibold text-[#C8B692] hover:text-[#F4EEE3]"
            >
              <span>
                {isAr
                  ? "استكشف أيضاً: حياتها ويومياتها في دبي"
                  : "Explore Also: Life & Moments in Dubai"}
              </span>
              {isAr ? (
                <ArrowUpLeft className="h-3.5 w-3.5 text-[#ED2530]" />
              ) : (
                <ArrowUpRight className="h-3.5 w-3.5 text-[#ED2530]" />
              )}
            </Link>

            <Link
              href={`/${typedLocale}/connect`}
              className="inline-flex items-center gap-1 font-semibold text-[#C8B692] hover:text-[#F4EEE3]"
            >
              <span>{UI_LABELS.nav.connect[typedLocale]}</span>
              {isAr ? (
                <ArrowUpLeft className="h-3.5 w-3.5 text-[#ED2530]" />
              ) : (
                <ArrowUpRight className="h-3.5 w-3.5 text-[#ED2530]" />
              )}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
