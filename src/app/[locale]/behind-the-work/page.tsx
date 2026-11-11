import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Camera,
  ExternalLink,
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
    <div className="bg-[#07090E]">
      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-white/8 bg-[radial-gradient(ellipse_at_top,#121826_0%,#07090E_75%)] py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(560px circle at 20% 20%, rgba(212, 190, 150, 0.10), transparent 70%), radial-gradient(480px circle at 82% 20%, rgba(230, 36, 47, 0.08), transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-[#D4BE96]/30 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-[#D4BE96] ${
                isAr ? "" : "uppercase tracking-[0.16em]"
              }`}
            >
              <Camera className="h-3.5 w-3.5 text-[#E6242F]" />
              <span>
                {isAr
                  ? "خلف الكواليس · الاستوديو والمحافل الإعلامية"
                  : "BEHIND THE WORK · STUDIO & MEDIA FORUMS"}
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
                ? "خلف الكواليس: الاستوديو، الأرشيف، والمحافل الإعلامية"
                : "Behind the Work: Studio Poise, Archival Walls & Industry Forums"}
            </h1>

            <p className="text-base sm:text-lg leading-[1.85] text-[#C8C2B8]">
              {isAr
                ? "مقال فوتوغرافي يجمع اللقطات الكاملة من استوديوهات الأخبار في دبي والرياض، وحضورها المهني في المنتدى السعودي للإعلام."
                : "A photographic essay presenting full portraits from broadcast studios in Dubai and Riyadh alongside her attendance at the Saudi Media Forum."}
            </p>
          </div>
        </div>
      </section>

      {/* Six Curated Photo Essay Plates */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {PHOTO_ESSAY_PLATES.map((plate, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={plate.id}
                className="grid grid-cols-1 items-center gap-10 border-b border-white/8 pb-16 last:border-b-0 lg:grid-cols-12 lg:gap-14"
              >
                {/* Plate Photograph */}
                <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                  <figure className="overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] p-3 shadow-2xl">
                    <div className="relative overflow-hidden rounded-2xl">
                      <picture>
                        <source srcSet={plate.imageAvif} type="image/avif" />
                        <img
                          src={plate.imageWebp}
                          alt={plate.title[typedLocale]}
                          style={{ objectPosition: plate.focalPoint }}
                          loading="lazy"
                          className={`w-full object-cover transition-transform duration-700 hover:scale-[1.02] ${plate.aspectClass}`}
                        />
                      </picture>
                    </div>

                    <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 pb-1 text-xs text-[#9E988E]">
                      <span className="font-mono-code text-[#D4BE96]">
                        {isAr ? `لوحة ${plate.plateNumber}` : `PLATE ${plate.plateNumber}`} ·{" "}
                        {plate.nativeDimensions}
                      </span>
                      <span>{plate.rightsBadge[typedLocale]}</span>
                    </figcaption>
                  </figure>
                </div>

                {/* Plate Editorial Commentary */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full bg-[#E6242F]/15 px-3 py-1 text-xs font-semibold text-[#E6242F] ${
                        isAr ? "" : "font-mono-code uppercase tracking-[0.16em]"
                      }`}
                    >
                      {isAr ? `اللوحة ${plate.plateNumber}` : `PLATE ${plate.plateNumber}`}
                    </span>
                    <span className="text-xs font-medium text-[#D4BE96]">
                      {plate.setting[typedLocale]}
                    </span>
                  </div>

                  <h2
                    className={`text-3xl sm:text-4xl text-[#F7F4EE] ${
                      isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                    }`}
                  >
                    {plate.title[typedLocale]}
                  </h2>

                  <p className="text-base leading-[1.85] text-[#E6E1D8]">
                    {plate.caption[typedLocale]}
                  </p>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-xs leading-relaxed text-[#C8C2B8]">
                    {plate.documentaryNote[typedLocale]}
                  </div>

                  <div className="pt-1">
                    <a
                      href={plate.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#D4BE96]/35 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold text-[#F7F4EE] transition hover:border-[#D4BE96] hover:bg-white/[0.08]"
                    >
                      <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                      <ExternalLink className="h-3.5 w-3.5 text-[#D4BE96]" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Hosted Programs & Broadcast Record Section (Warm Alabaster Paper Band) */}
      <section className="border-t border-[#141A24]/10 bg-[#F7F4EE] py-16 text-[#121722] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div
              className={`inline-flex items-center gap-2 text-xs font-semibold text-[#B81D26] ${
                isAr ? "" : "uppercase tracking-[0.16em]"
              }`}
            >
              <Layers className="h-4 w-4 text-[#E6242F]" />
              <span>
                {isAr
                  ? "سجل البرامج والمحطات (2015 – الحاضر)"
                  : "PROGRAMS & BROADCAST RECORD (2015 – PRESENT)"}
              </span>
            </div>

            <h2
              className={`text-2xl sm:text-4xl text-[#121722] ${
                isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
              }`}
            >
              {isAr
                ? "برامج ومناصب إعلامية عبر الإذاعة والتلفزيون والمنصات الرقمية"
                : "Programs Hosted & Editorial Roles Across Radio, TV & Digital"}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-[#4E4940]">
              {isAr
                ? "حصيلة البرامج الحوارية، والصباحية، والثقافية، والمهام الإخبارية التي تولتها نضال النعيم منذ انطلاقتها في إذاعة «هلا 96» وحتى غرف أخبار «العربية» و«الحدث»."
                : "An overview of the live radio shows, flagship television programs, digital series, and newsroom roles Nidal Elnaeem has led since 2015."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HOSTED_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="flex flex-col justify-between rounded-2xl border border-[#141A24]/10 bg-white p-6 shadow-sm space-y-4 transition hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-mono-code font-semibold text-[#B81D26]">
                      {prog.period[typedLocale]}
                    </span>
                    <span className="rounded-full bg-[#EFEAE0] px-3 py-0.5 text-[11px] font-medium text-[#121722]">
                      {prog.medium[typedLocale]}
                    </span>
                  </div>
                  <h3
                    className={`text-lg text-[#121722] ${
                      isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                    }`}
                  >
                    {prog.title[typedLocale]}
                  </h3>
                  <p className="text-xs font-semibold text-[#5E584E]">
                    {prog.network[typedLocale]}
                  </p>
                  <p className="text-xs leading-relaxed text-[#45413A]">
                    {prog.description[typedLocale]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#141A24]/10 pt-6 text-xs">
            <Link
              href={`/${typedLocale}/life`}
              className="inline-flex items-center gap-1.5 font-semibold text-[#121722] hover:text-[#B81D26]"
            >
              <span>
                {isAr
                  ? "استكشف أيضاً: حياتها ويومياتها"
                  : "Explore Also: Life & Moments"}
              </span>
              {isAr ? (
                <ArrowUpLeft className="h-3.5 w-3.5 text-[#E6242F]" />
              ) : (
                <ArrowUpRight className="h-3.5 w-3.5 text-[#E6242F]" />
              )}
            </Link>

            <Link
              href={`/${typedLocale}/connect`}
              className="inline-flex items-center gap-1.5 font-semibold text-[#121722] hover:text-[#B81D26]"
            >
              <span>{UI_LABELS.nav.connect[typedLocale]}</span>
              {isAr ? (
                <ArrowUpLeft className="h-3.5 w-3.5 text-[#E6242F]" />
              ) : (
                <ArrowUpRight className="h-3.5 w-3.5 text-[#E6242F]" />
              )}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
