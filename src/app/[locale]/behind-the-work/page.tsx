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
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

  return (
    <div className="bg-white text-[#090A0F]">
      {/* Page Header */}
      <section className="border-b border-black/[0.06] bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F1] px-4 py-2 text-xs font-extrabold text-[#FF1E2D]">
              <Camera className="h-3.5 w-3.5" />
              <span>
                {isAr
                  ? "خلف الكواليس · الاستوديو والمحافل الإعلامية"
                  : "BEHIND THE WORK · STUDIO & MEDIA FORUMS"}
              </span>
            </div>

            <h1
              className={`font-extrabold tracking-tight text-[#090A0F] ${
                isAr
                  ? "text-3xl sm:text-5xl lg:text-[3.35rem] leading-[1.28]"
                  : "text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
              }`}
            >
              {isAr
                ? "خلف الكواليس: الاستوديو، الأرشيف، والمحافل الإعلامية"
                : "Behind the Work: Studio Poise, Archival Walls & Industry Forums"}
            </h1>

            <p className="text-base sm:text-lg leading-[1.85] text-[#525866]">
              {isAr
                ? "مقال فوتوغرافي يجمع اللقطات الكاملة من استوديوهات الأخبار في دبي والرياض، وحضورها المهني في المنتدى السعودي للإعلام."
                : "A photographic essay presenting full portraits from broadcast studios in Dubai and Riyadh alongside her attendance at the Saudi Media Forum."}
            </p>
          </div>
        </div>
      </section>

      {/* Six Curated Photo Essay Plates */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {PHOTO_ESSAY_PLATES.map((plate, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={plate.id}
                className="grid grid-cols-1 items-center gap-10 border-b border-black/[0.06] pb-16 last:border-b-0 lg:grid-cols-12 lg:gap-14"
              >
                {/* Plate Photograph */}
                <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                  <figure className="overflow-hidden rounded-[36px] bg-[#F3F4F7] p-3.5 shadow-[0_20px_50px_rgba(9,10,15,0.06)]">
                    <div className="relative overflow-hidden rounded-[26px]">
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

                    <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 pb-1 text-xs font-semibold text-[#525866]">
                      <span className="font-mono-code font-bold text-[#090A0F]">
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
                    <span className="rounded-full bg-[#FFF0F1] px-3.5 py-1 text-xs font-extrabold text-[#FF1E2D]">
                      {isAr ? `اللوحة ${plate.plateNumber}` : `PLATE ${plate.plateNumber}`}
                    </span>
                    <span className="text-xs font-bold text-[#525866]">
                      {plate.setting[typedLocale]}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090A0F]">
                    {plate.title[typedLocale]}
                  </h2>

                  <p className="text-base leading-[1.85] text-[#090A0F] font-medium">
                    {plate.caption[typedLocale]}
                  </p>

                  <div className="rounded-2xl bg-[#F3F4F7] p-5 text-xs sm:text-sm leading-relaxed text-[#525866]">
                    {plate.documentaryNote[typedLocale]}
                  </div>

                  <div className="pt-1">
                    <a
                      href={plate.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#090A0F] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#FF1E2D]"
                    >
                      <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Hosted Programs & Broadcast Record Section (Studio Grey Band) */}
      <section className="border-t border-black/[0.06] bg-[#F3F4F7] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
              <Layers className="h-4 w-4" />
              <span>
                {isAr
                  ? "سجل البرامج والمحطات (2015 – الحاضر)"
                  : "PROGRAMS & BROADCAST RECORD (2015 – PRESENT)"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#090A0F]">
              {isAr
                ? "برامج ومناصب إعلامية عبر الإذاعة والتلفزيون والمنصات الرقمية"
                : "Programs Hosted & Editorial Roles Across Radio, TV & Digital"}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-[#525866]">
              {isAr
                ? "حصيلة البرامج الحوارية، والصباحية، والثقافية، والمهام الإخبارية التي تولتها نضال النعيم منذ انطلاقتها في إذاعة «هلا 96» وحتى غرف أخبار «العربية» و«الحدث»."
                : "An overview of the live radio shows, flagship television programs, digital series, and newsroom roles Nidal Elnaeem has led since 2015."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HOSTED_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="flex flex-col justify-between rounded-[28px] bg-white p-6 shadow-xs space-y-4 transition hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-mono-code font-extrabold text-[#FF1E2D]">
                      {prog.period[typedLocale]}
                    </span>
                    <span className="rounded-full bg-[#F3F4F7] px-3 py-1 text-[11px] font-bold text-[#090A0F]">
                      {prog.medium[typedLocale]}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#090A0F]">
                    {prog.title[typedLocale]}
                  </h3>
                  <p className="text-xs font-bold text-[#525866]">
                    {prog.network[typedLocale]}
                  </p>
                  <p className="text-xs leading-relaxed text-[#525866]">
                    {prog.description[typedLocale]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.06] pt-6 text-xs">
            <Link
              href={`/${typedLocale}/life`}
              className="inline-flex items-center gap-1.5 font-extrabold text-[#090A0F] hover:text-[#FF1E2D]"
            >
              <span>
                {isAr
                  ? "استكشف أيضاً: حياتها ويومياتها"
                  : "Explore Also: Life & Moments"}
              </span>
              <ArrowIcon className="h-3.5 w-3.5 text-[#FF1E2D]" />
            </Link>

            <Link
              href={`/${typedLocale}/connect`}
              className="inline-flex items-center gap-1.5 font-extrabold text-[#090A0F] hover:text-[#FF1E2D]"
            >
              <span>{UI_LABELS.nav.connect[typedLocale]}</span>
              <ArrowIcon className="h-3.5 w-3.5 text-[#FF1E2D]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
