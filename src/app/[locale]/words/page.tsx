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
    <div className="bg-[#07090E]">
      {/* Page Opening Header */}
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
              <Feather className="h-3.5 w-3.5 text-[#E6242F]" />
              <span>
                {isAr
                  ? "كلمات وقصص · الصحافة المكتوبة والسرد الرقمي"
                  : "WORDS & STORIES · WRITTEN JOURNALISM & DIGITAL NARRATIVE"}
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
                ? "كلمات وقصص: حين تمنح الكلمةُ المكتوبة معنىً للصورة"
                : "Words & Stories: Where Written Craft Anchors the Broadcast"}
            </h1>

            <p className="text-base sm:text-lg leading-[1.85] text-[#C8C2B8]">
              {isAr
                ? "قبل أن تضيء إشارة البث، تبدأ القصة على الورق وفي غرفة التحرير. يجمع هذا القسم أعمال نضال النعيم المكتوبة، من التقارير المنشورة باسمها في «العربية.نت» إلى سلاسل السرد الرقمي والتأملات الإنسانية."
                : "Before the studio camera rolls, journalism begins on the page. This section brings together Nidal Elnaeem’s written reporting on Al Arabiya Net, digital storytelling series, and personal essays."}
            </p>
          </div>
        </div>
      </section>

      {/* Lead Authored Feature — Warm Alabaster Paper Monograph */}
      <section
        aria-labelledby="alarabiya-feature-heading"
        className="border-b border-[#141A24]/10 bg-[#F7F4EE] py-16 text-[#121722] sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#141A24]/12 pb-5">
            <div className="flex items-center gap-2.5">
              <BookOpen className="h-4 w-4 text-[#E6242F]" />
              <span
                className={`text-xs font-semibold text-[#B81D26] ${
                  isAr ? "" : "font-mono-code uppercase tracking-[0.16em]"
                }`}
              >
                {isAr
                  ? "تقرير صحفي · العربية.نت (26 مايو 2019)"
                  : "BYLINED FEATURE · AL ARABIYA NET (MAY 26, 2019)"}
              </span>
            </div>
            <span className="rounded-full bg-[#121722] px-3.5 py-1 text-xs font-medium text-[#F7F4EE]">
              {alArabiyaFeature.verifiedRole[typedLocale]}
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-6">
              <h2
                id="alarabiya-feature-heading"
                className={`leading-tight text-[#121722] ${
                  isAr
                    ? "font-display-ar text-3xl sm:text-4xl lg:text-5xl font-bold"
                    : "font-display-en text-3xl sm:text-4xl lg:text-5xl font-semibold"
                }`}
              >
                {alArabiyaFeature.title[typedLocale]}
              </h2>

              <p className="text-lg font-medium leading-relaxed text-[#2C2A25]">
                {alArabiyaFeature.subtitle[typedLocale]}
              </p>

              <p className="text-base leading-[1.85] text-[#45413A]">
                {alArabiyaFeature.summary[typedLocale]}
              </p>

              <div className="rounded-2xl border border-[#141A24]/10 bg-white p-6 shadow-sm space-y-3">
                <h3
                  className={`text-xs font-semibold text-[#B81D26] ${
                    isAr ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {isAr ? "أبرز المحاور في التقرير" : "KEY HIGHLIGHTS"}
                </h3>
                <ul className="space-y-2.5 text-sm text-[#121722]">
                  {alArabiyaFeature.keyTakeaways[typedLocale].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E6242F]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href={alArabiyaFeature.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#121722] px-6 py-3 text-xs sm:text-sm font-semibold text-[#F7F4EE] transition hover:bg-[#1e2638]"
                >
                  <span>{UI_LABELS.common.readOriginalArticle[typedLocale]}</span>
                  <ExternalLink className="h-4 w-4 text-[#E6242F]" />
                </a>

                <Link
                  href={`/${typedLocale}/work/${alArabiyaFeature.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#121722]/25 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-[#121722] transition hover:bg-[#EFEAE0]"
                >
                  <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
                  {isAr ? (
                    <ArrowUpLeft className="h-4 w-4 text-[#E6242F]" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-[#E6242F]" />
                  )}
                </Link>
              </div>
            </div>

            {/* Editorial Context Card */}
            <aside className="lg:col-span-4 rounded-3xl border border-[#141A24]/10 bg-[#EFEAE0] p-7 space-y-4">
              <div className="h-1 w-12 rounded-full bg-[#E6242F]" />
              <h3
                className={`text-xl text-[#121722] ${
                  isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                }`}
              >
                {isAr
                  ? "لماذا يمثل هذا التقرير محطة محورية؟"
                  : "Why This Feature Matters"}
              </h3>
              <p className="text-sm leading-relaxed text-[#45413A]">
                {alArabiyaFeature.whySelected[typedLocale]}
              </p>
              <div className="border-t border-[#141A24]/12 pt-4 text-xs text-[#5E584E] space-y-1.5">
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
          {/* Piece 2: Personal Reflection Essay */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] p-3 shadow-2xl">
                <div className="overflow-hidden rounded-2xl">
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
                </div>
              </figure>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4BE96]/30 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-[#D4BE96]">
                <span>{personalEssay.verifiedRole[typedLocale]}</span>
              </div>

              <h2
                className={`text-3xl sm:text-4xl text-[#F7F4EE] ${
                  isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                }`}
              >
                {personalEssay.title[typedLocale]}
              </h2>

              <p className="text-base leading-[1.85] text-[#C8C2B8]">
                {personalEssay.summary[typedLocale]}
              </p>

              <div className="rounded-2xl border-s-4 border-[#E6242F] bg-white/[0.03] p-4 text-xs leading-relaxed text-[#9E988E]">
                {personalEssay.editorialContext[typedLocale]}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/${typedLocale}/work/${personalEssay.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#E6242F] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#cc1d27]"
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
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-[#F7F4EE] transition hover:border-[#D4BE96]"
                >
                  <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#D4BE96]" />
                </a>
              </div>
            </div>
          </div>

          {/* Piece 3: "Hikayat Nidal" + Senior Social Media Writing Craft */}
          <div className="grid grid-cols-1 gap-8 border-t border-white/8 pt-14 lg:grid-cols-2">
            {/* Card A: Hikayat Nidal */}
            <article className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7 space-y-5 transition hover:border-[#D4BE96]/35">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono-code font-semibold text-[#E6242F]">
                    {hikayatSeries.dateDisplay[typedLocale]}
                  </span>
                  <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[#D4BE96]">
                    {hikayatSeries.verifiedRole[typedLocale]}
                  </span>
                </div>

                <h3
                  className={`text-2xl text-[#F7F4EE] ${
                    isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                  }`}
                >
                  {hikayatSeries.title[typedLocale]}
                </h3>

                <p className="text-sm leading-relaxed text-[#C8C2B8]">
                  {hikayatSeries.summary[typedLocale]}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-4 text-xs">
                <Link
                  href={`/${typedLocale}/work/${hikayatSeries.slug}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#D4BE96] hover:text-[#F7F4EE]"
                >
                  <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
                  {isAr ? (
                    <ArrowUpLeft className="h-3.5 w-3.5 text-[#E6242F]" />
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#E6242F]" />
                  )}
                </Link>

                <a
                  href={hikayatSeries.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#9E988E] hover:text-[#F7F4EE]"
                >
                  <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>

            {/* Card B: The Discipline of Senior Social Media Writing */}
            <article className="flex flex-col justify-between rounded-3xl border border-[#D4BE96]/25 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7 space-y-5">
              <div className="space-y-3">
                <span
                  className={`text-xs font-semibold text-[#D4BE96] ${
                    isAr ? "" : "font-mono-code uppercase tracking-[0.16em]"
                  }`}
                >
                  {isAr
                    ? "غرفة الأخبار الرقمية · العربية والحدث"
                    : "DIGITAL NEWSROOM CRAFT · AL ARABIYA & AL HADATH"}
                </span>

                <h3
                  className={`text-2xl text-[#F7F4EE] ${
                    isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                  }`}
                >
                  {isAr
                    ? "الكتابة لمنصات التواصل في غرفة الأخبار: تحرير الخبر وصناعة القصة"
                    : "End-to-End Social Media Journalism Across 50+ Channels"}
                </h3>

                <p className="text-sm leading-relaxed text-[#C8C2B8]">
                  {isAr
                    ? "بوصفها «كاتبة أولى لمنصات التواصل ومقدمة أخبار»، يجمع عملها اليومي بين التغطية العاجلة لأحداث الشرق الأوسط وشمال أفريقيا، وإنتاج القصص الرقمية من الفكرة حتى النشر، وتوظيف أدوات الذكاء الاصطناعي وأنظمة البث الحديثة (iNews وWildmoka وSprinklr) لتقديم محتوى دقيق وسريع."
                    : "As Senior Social Media Writer Reporter / Presenter, her daily newsroom work spans breaking MENA stories, coordinating multi-platform storytelling across 50+ official channels, and leveraging AI tools alongside iNews, Wildmoka, and Sprinklr."}
                </p>
              </div>

              <div className="border-t border-white/8 pt-4 text-xs text-[#9E988E]">
                {isAr
                  ? "مجموعة MBC · العربية والحدث — دبي والرياض (2019 – الحاضر)."
                  : "MBC Group · Al Arabiya & Al Hadath — Dubai & Riyadh (2019 – Present)."}
              </div>
            </article>
          </div>

          {/* Written Reflections from Dubai */}
          {dubaiReflections.length > 0 && (
            <div className="border-t border-white/8 pt-14 space-y-8">
              <div className="max-w-2xl space-y-2">
                <span className="font-mono-code text-xs font-semibold text-[#D4BE96] uppercase">
                  {isAr ? "تأملات مكتوبة من دبي" : "WRITTEN REFLECTIONS FROM DUBAI"}
                </span>
                <h2
                  className={`text-2xl sm:text-3xl text-[#F7F4EE] ${
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
                    className="flex flex-col sm:flex-row gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#D4BE96]/35"
                  >
                    <div className="w-full sm:w-44 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#07090E]">
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
                        <span className="font-mono-code text-xs text-[#D4BE96]">
                          {item.dateDisplay[typedLocale]}
                        </span>
                        <h3
                          className={`text-xl text-[#F7F4EE] ${
                            isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                          }`}
                        >
                          {item.title[typedLocale]}
                        </h3>
                        <p className="text-xs leading-relaxed text-[#C8C2B8]">
                          {item.summary[typedLocale]}
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/8 pt-3 text-xs">
                        <Link
                          href={`/${typedLocale}/work/${item.slug}`}
                          className="font-semibold text-[#D4BE96] hover:text-[#F7F4EE]"
                        >
                          {UI_LABELS.common.openDossier[typedLocale]}
                        </Link>
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#9E988E] hover:text-[#F7F4EE]"
                        >
                          <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                          <ExternalLink className="h-3 w-3 text-[#E6242F]" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Press & Media Coverage Archive */}
          <div className="border-t border-white/8 pt-14 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono-code text-xs font-semibold text-[#E6242F] uppercase">
                {isAr ? "أصداء الصحافة والحوارات المكتوبة" : "PRESS COVERAGE & INTERVIEWS"}
              </span>
              <h2
                className={`text-2xl sm:text-3xl text-[#F7F4EE] ${
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
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-4 transition hover:border-[#D4BE96]/35"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-[#D4BE96]">
                      <span>{press.publication[typedLocale]}</span>
                      <span className="font-mono-code text-[#9E988E]">
                        {press.dateDisplay[typedLocale]}
                      </span>
                    </div>
                    <h3
                      className={`text-lg text-[#F7F4EE] ${
                        isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                      }`}
                    >
                      {press.headline[typedLocale]}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#C8C2B8]">
                      {press.summary[typedLocale]}
                    </p>
                  </div>

                  <div className="border-t border-white/8 pt-3 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#9E988E] truncate max-w-[70%]">
                      {press.programsMentioned[typedLocale]}
                    </span>
                    <a
                      href={press.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#D4BE96] hover:text-[#F7F4EE] shrink-0"
                    >
                      <span>{isAr ? "المصدر" : "Source"}</span>
                      <ExternalLink className="h-3 w-3 text-[#E6242F]" />
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
