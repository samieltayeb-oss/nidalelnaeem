import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ExternalLink,
  BookOpen,
  Feather,
  ArrowUpLeft,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Locale, WORK_ITEMS, UI_LABELS } from "@/data/portfolio-data";
import { PRESS_FEATURES } from "@/data/life-and-press-data";

export default async function WordsAndStoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();
  const typedLocale = locale as Locale;
  const isAr = typedLocale === "ar";

  const alArabiyaFeature = WORK_ITEMS.find(
    (w) => w.slug === "alarabiya-sudan-protest-lexicon"
  )!;
  const personalEssay = WORK_ITEMS.find(
    (w) => w.slug === "passion-and-perseverance-reflection"
  )!;
  const hikayatSeries = WORK_ITEMS.find(
    (w) => w.slug === "hikayat-nidal-digital-series"
  )!;
  const dubaiReflections = WORK_ITEMS.filter(
    (w) =>
      w.slug === "mbc-group-harvest-reflection" ||
      w.slug === "alarabiya-campus-hope-reflection"
  );

  return (
    <div className="bg-[#060E16]">
      {/* Page Opening Header */}
      <section className="border-b border-[#F4EEE3]/10 bg-[radial-gradient(ellipse_at_top,#102538_0%,#060E16_75%)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div
              className={`inline-flex items-center gap-2 rounded border border-[#C8B692]/35 bg-[#0B1926]/90 px-3.5 py-1 text-xs font-semibold text-[#C8B692] ${
                isAr ? "" : "uppercase tracking-[0.16em]"
              }`}
            >
              <Feather className="h-3.5 w-3.5 text-[#ED2530]" />
              <span>
                {isAr
                  ? "كلمات وقصص · الصحافة المكتوبة والسرد الرقمي"
                  : "WORDS & STORIES · AUTHORED JOURNALISM & DIGITAL NARRATIVE"}
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
                ? "كلمات وقصص: حين تمنح الكلمةُ المكتوبة معنىً للصورة"
                : "Words & Stories: Where Written Rigor Anchors the Broadcast"}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#D1C7B8]">
              {isAr
                ? "قبل أن تضيء إشارة البث، تبدأ القصة على الورق وفي غرفة التحرير. يجمع هذا القسم أعمال نضال النعيم المكتوبة، من التقارير المنشورة باسمها في «العربية.نت» إلى سلاسل السرد الرقمي والتأملات المهنية."
                : "Before the studio camera rolls, journalism begins on the page. This section curates Nidal Elnaeem’s written reporting, digital storytelling series, and personal reflections—with contextual summaries and direct links to original sources."}
            </p>
          </div>
        </div>
      </section>

      {/* Lead Authored Feature — Warm Editorial Ivory Reading Monograph */}
      <section
        aria-labelledby="alarabiya-feature-heading"
        className="border-b border-[#102535]/15 bg-[#F4F0E8] py-16 text-[#102535] sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#102535]/15 pb-4">
            <div className="flex items-center gap-2.5">
              <BookOpen className="h-4 w-4 text-[#ED2530]" />
              <span
                className={`text-xs font-semibold text-[#BC2937] ${
                  isAr ? "" : "font-mono-code uppercase tracking-[0.18em]"
                }`}
              >
                {isAr
                  ? "تقرير صحفي · العربية.نت (26 مايو 2019)"
                  : "BYLINED JOURNALISM · AL ARABIYA NET (MAY 26, 2019)"}
              </span>
            </div>
            <span className="rounded bg-[#102535] px-3 py-1 text-xs font-medium text-[#F4F0E8]">
              {alArabiyaFeature.verifiedRole[typedLocale]}
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-6">
              <h2
                id="alarabiya-feature-heading"
                className={`leading-tight text-[#102535] ${
                  isAr
                    ? "font-display-ar text-3xl sm:text-4xl lg:text-5xl font-bold"
                    : "font-display-en text-3xl sm:text-4xl lg:text-5xl font-semibold"
                }`}
              >
                {alArabiyaFeature.title[typedLocale]}
              </h2>

              <p className="text-lg font-medium leading-relaxed text-[#1B364B]">
                {alArabiyaFeature.subtitle[typedLocale]}
              </p>

              <p className="text-base leading-relaxed text-[#243B4E]">
                {alArabiyaFeature.summary[typedLocale]}
              </p>

              <div className="rounded-sm border border-[#102535]/15 bg-white/80 p-6 space-y-3">
                <h3
                  className={`text-xs font-semibold text-[#BC2937] ${
                    isAr ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {isAr ? "أبرز المحاور في التقرير" : "KEY EDITORIAL DIMENSIONS"}
                </h3>
                <ul className="space-y-2 text-sm text-[#102535]">
                  {alArabiyaFeature.keyTakeaways[typedLocale].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ED2530]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={alArabiyaFeature.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-[#102535] px-6 py-3 text-xs sm:text-sm font-semibold text-[#F4F0E8] transition hover:bg-[#1b3a52]"
                >
                  <span>{UI_LABELS.common.readOriginalArticle[typedLocale]}</span>
                  <ExternalLink className="h-4 w-4 text-[#ED2530]" />
                </a>

                <Link
                  href={`/${typedLocale}/work/${alArabiyaFeature.slug}`}
                  className="inline-flex items-center gap-1.5 rounded border border-[#102535]/30 px-5 py-3 text-xs sm:text-sm font-semibold text-[#102535] hover:bg-[#102535]/5"
                >
                  <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
                  {isAr ? (
                    <ArrowUpLeft className="h-4 w-4 text-[#ED2530]" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-[#ED2530]" />
                  )}
                </Link>
              </div>
            </div>

            {/* Editorial Context Card */}
            <aside className="lg:col-span-4 rounded-sm border border-[#102535]/15 bg-[#EAE3D5] p-6 space-y-4">
              <div className="h-1 w-12 bg-[#ED2530]" />
              <h3
                className={`text-xl text-[#102535] ${
                  isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                }`}
              >
                {isAr
                  ? "لماذا يمثل هذا التقرير محطة محورية؟"
                  : "Why This Feature Matters"}
              </h3>
              <p className="text-sm leading-relaxed text-[#243B4E]">
                {alArabiyaFeature.whySelected[typedLocale]}
              </p>
              <div className="border-t border-[#102535]/15 pt-4 text-xs text-[#475E70] space-y-1">
                <div>
                  <strong>{isAr ? "الناشر:" : "Publisher:"}</strong>{" "}
                  {alArabiyaFeature.broadcasterOrPlatform[typedLocale]}
                </div>
                <div>
                  <strong>{isAr ? "تاريخ النشر:" : "Published:"}</strong>{" "}
                  {alArabiyaFeature.dateDisplay[typedLocale]}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Personal Reflection & Digital Storytelling Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Piece 2: Personal Reflection Essay with Archival Wall Portrait */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-sm border border-[#C8B692]/30 bg-[#0B1926] p-2.5 shadow-xl">
                <picture>
                  <source srcSet={personalEssay.posterAvif} type="image/avif" />
                  <img
                    src={personalEssay.posterAsset}
                    alt={personalEssay.title[typedLocale]}
                    style={{ objectPosition: personalEssay.posterFocalPoint }}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </picture>
              </figure>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded bg-[#C8B692]/15 px-3 py-1 text-xs font-medium text-[#C8B692]">
                <span>{personalEssay.verifiedRole[typedLocale]}</span>
              </div>

              <h2
                className={`text-3xl sm:text-4xl text-[#F4EEE3] ${
                  isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                }`}
              >
                {personalEssay.title[typedLocale]}
              </h2>

              <p className="text-base leading-relaxed text-[#D1C7B8]">
                {personalEssay.summary[typedLocale]}
              </p>

              <div className="rounded border-s-2 border-[#ED2530] bg-[#0B1926] p-4 text-xs leading-relaxed text-[#93A3B1]">
                {personalEssay.editorialContext[typedLocale]}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/${typedLocale}/work/${personalEssay.slug}`}
                  className="inline-flex items-center gap-2 rounded bg-[#ED2530] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#d41f2a]"
                >
                  <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
                  {isAr ? (
                    <ArrowUpLeft className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  )}
                </Link>
                <a
                  href={personalEssay.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded border border-[#F4EEE3]/20 bg-[#0B1926] px-4 py-2.5 text-xs font-medium text-[#F4EEE3] hover:border-[#C8B692]"
                >
                  <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#C8B692]" />
                </a>
              </div>
            </div>
          </div>

          {/* Piece 3: "Hikayat Nidal" Digital Storytelling Series + Senior Social Media Writing Craft */}
          <div className="grid grid-cols-1 gap-8 border-t border-[#F4EEE3]/10 pt-14 lg:grid-cols-2">
            {/* Card A: Hikayat Nidal */}
            <article className="flex flex-col justify-between rounded-sm border border-[#F4EEE3]/15 bg-[#0B1926]/85 p-7 space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono-code font-semibold text-[#ED2530]">
                    {hikayatSeries.dateDisplay[typedLocale]}
                  </span>
                  <span className="rounded bg-[#102232] px-2.5 py-1 text-[#C8B692]">
                    {hikayatSeries.verifiedRole[typedLocale]}
                  </span>
                </div>

                <h3
                  className={`text-2xl text-[#F4EEE3] ${
                    isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                  }`}
                >
                  {hikayatSeries.title[typedLocale]}
                </h3>

                <p className="text-sm leading-relaxed text-[#D1C7B8]">
                  {hikayatSeries.summary[typedLocale]}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#F4EEE3]/10 pt-4 text-xs">
                <Link
                  href={`/${typedLocale}/work/${hikayatSeries.slug}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#C8B692] hover:text-[#F4EEE3]"
                >
                  <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
                  {isAr ? (
                    <ArrowUpLeft className="h-3.5 w-3.5 text-[#ED2530]" />
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#ED2530]" />
                  )}
                </Link>

                <a
                  href={hikayatSeries.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#93A3B1] hover:text-[#F4EEE3]"
                >
                  <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>

            {/* Card B: The Discipline of Senior Social Media Writing */}
            <article className="flex flex-col justify-between rounded-sm border border-[#C8B692]/25 bg-[#091520] p-7 space-y-5">
              <div className="space-y-3">
                <span
                  className={`text-xs font-semibold text-[#C8B692] ${
                    isAr ? "" : "font-mono-code uppercase tracking-[0.16em]"
                  }`}
                >
                  {isAr
                    ? "طبيعة الدور التحريري · الحدث والعربية"
                    : "THE EDITORIAL CRAFT · SENIOR SOCIAL MEDIA WRITER"}
                </span>

                <h3
                  className={`text-2xl text-[#F4EEE3] ${
                    isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                  }`}
                >
                  {isAr
                    ? "الكتابة لمنصات التواصل في غرفة الأخبار: تحرير الخبر قبل انتشاره"
                    : "Social Media Writing in the Newsroom: Verification & Narrative Precision"}
                </h3>

                <p className="text-sm leading-relaxed text-[#D1C7B8]">
                  {isAr
                    ? "بوصفها «كاتبة أولى لمنصات التواصل الاجتماعي» (Senior Social Media Writer)، يجمع عملها اليومي بين التحقق الصارم من المصادر المفتوحة، وصياغة العناوين والقصص الإخبارية الرقمية بلغة عربية سليمة ومكثفة، وتحويل التطورات المتسارعة إلى شروح مرئية ومكتوبة واضحة السياق."
                    : "As Senior Social Media Writer · Reporter · Presenter, her daily newsroom practice sits at the intersection of open-source verification, concise Arabic headline architecture, and multi-platform scripting—translating breaking broadcast coverage into trustworthy digital narratives."}
                </p>
              </div>

              <div className="border-t border-[#F4EEE3]/10 pt-4 text-xs text-[#93A3B1]">
                {isAr
                  ? "الحدث · العربية — تحرير الأخبار الرقمية والتقارير المصورة."
                  : "Al Hadath · Al Arabiya — Digital newsroom writing and reporting."}
              </div>
            </article>
          </div>

          {/* Dubai Written Reflections */}
          {dubaiReflections.length > 0 && (
            <div className="border-t border-[#F4EEE3]/10 pt-14 space-y-8">
              <div className="max-w-2xl space-y-2">
                <span className="font-mono text-xs font-semibold text-[#C8B692] uppercase">
                  {isAr ? "تأملات مكتوبة من دبي" : "WRITTEN REFLECTIONS FROM DUBAI"}
                </span>
                <h2
                  className={`text-2xl sm:text-3xl text-[#F4EEE3] ${
                    isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                  }`}
                >
                  {isAr
                    ? "نصوص قصيرة حول القراءة، والأمل، وبناء الإنسان"
                    : "Short Notes on Reading, Hope, and Personal Growth"}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {dubaiReflections.map((item) => (
                  <article
                    key={item.slug}
                    className="flex flex-col sm:flex-row gap-6 rounded-sm border border-[#C8B692]/25 bg-[#0B1926]/85 p-6"
                  >
                    <div className="w-full sm:w-44 shrink-0 overflow-hidden rounded-sm border border-[#F4EEE3]/15 bg-[#060E16]">
                      <img
                        src={item.posterAsset}
                        alt={item.title[typedLocale]}
                        style={{ objectPosition: item.posterFocalPoint }}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <span className="font-mono text-xs text-[#C8B692]">
                          {item.dateDisplay[typedLocale]}
                        </span>
                        <h3
                          className={`text-xl text-[#F4EEE3] ${
                            isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                          }`}
                        >
                          {item.title[typedLocale]}
                        </h3>
                        <p className="text-xs leading-relaxed text-[#D1C7B8]">
                          {item.summary[typedLocale]}
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-[#F4EEE3]/10 pt-3 text-xs">
                        <Link
                          href={`/${typedLocale}/work/${item.slug}`}
                          className="font-semibold text-[#C8B692] hover:text-[#F4EEE3]"
                        >
                          {UI_LABELS.common.openDossier[typedLocale]}
                        </Link>
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#93A3B1] hover:text-[#F4EEE3]"
                        >
                          <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                          <ExternalLink className="h-3 w-3 text-[#ED2530]" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Press & Media Coverage Archive */}
          <div className="border-t border-[#F4EEE3]/10 pt-14 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs font-semibold text-[#ED2530] uppercase">
                {isAr ? "أصداء الصحافة والحوارات المكتوبة" : "PRESS COVERAGE & INTERVIEWS"}
              </span>
              <h2
                className={`text-2xl sm:text-3xl text-[#F4EEE3] ${
                  isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                }`}
              >
                {isAr
                  ? "تغطيات وحوارات صحفية حول مسيرتها وبرامجها"
                  : "Press Profiles & Written Interviews on Her Career"}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {PRESS_FEATURES.map((press) => (
                <article
                  key={press.id}
                  className="flex flex-col justify-between rounded-sm border border-[#F4EEE3]/12 bg-[#0B1926]/80 p-6 space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-[#C8B692]">
                      <span>{press.publication[typedLocale]}</span>
                      <span className="font-mono text-[#93A3B1]">
                        {press.dateDisplay[typedLocale]}
                      </span>
                    </div>
                    <h3
                      className={`text-lg text-[#F4EEE3] ${
                        isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                      }`}
                    >
                      {press.headline[typedLocale]}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#D1C7B8]">
                      {press.summary[typedLocale]}
                    </p>
                  </div>

                  <div className="border-t border-[#F4EEE3]/10 pt-3 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#93A3B1] truncate max-w-[70%]">
                      {press.programsMentioned[typedLocale]}
                    </span>
                    <a
                      href={press.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#C8B692] hover:text-[#F4EEE3] shrink-0"
                    >
                      <span>{isAr ? "المصدر" : "Source"}</span>
                      <ExternalLink className="h-3 w-3 text-[#ED2530]" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
