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
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

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
    <div className="bg-white text-[#090A0F]">
      {/* Page Opening Header */}
      <section className="border-b border-black/[0.06] bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F1] px-4 py-2 text-xs font-extrabold text-[#FF1E2D]">
              <Feather className="h-3.5 w-3.5" />
              <span>
                {isAr
                  ? "كلمات وقصص · الصحافة المكتوبة والسرد الرقمي"
                  : "WORDS & STORIES · WRITTEN JOURNALISM & DIGITAL NARRATIVE"}
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
                ? "كلمات وقصص: حين تمنح الكلمةُ المكتوبة معنىً للصورة"
                : "Words & Stories: Where Written Craft Anchors the Broadcast"}
            </h1>

            <p className="text-base sm:text-lg leading-[1.85] text-[#525866]">
              {isAr
                ? "قبل أن تضيء إشارة البث، تبدأ القصة على الورق وفي غرفة التحرير. يجمع هذا القسم أعمال نضال النعيم المكتوبة، من التقارير المنشورة باسمها في «العربية.نت» إلى سلاسل السرد الرقمي والتأملات الإنسانية."
                : "Before the studio camera rolls, journalism begins on the page. This section brings together Nidal Elnaeem’s written reporting on Al Arabiya Net, digital storytelling series, and personal essays."}
            </p>
          </div>
        </div>
      </section>

      {/* Lead Authored Feature — Studio Grey Band */}
      <section
        aria-labelledby="alarabiya-feature-heading"
        className="border-b border-black/[0.06] bg-[#F3F4F7] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.07] pb-5">
            <div className="flex items-center gap-2.5">
              <BookOpen className="h-4 w-4 text-[#FF1E2D]" />
              <span className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                {isAr
                  ? "تقرير صحفي · العربية.نت (26 مايو 2019)"
                  : "BYLINED FEATURE · AL ARABIYA NET (MAY 26, 2019)"}
              </span>
            </div>
            <span className="rounded-full bg-[#090A0F] px-4 py-1 text-xs font-bold text-white">
              {alArabiyaFeature.verifiedRole[typedLocale]}
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-6">
              <h2
                id="alarabiya-feature-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#090A0F]"
              >
                {alArabiyaFeature.title[typedLocale]}
              </h2>

              <p className="text-lg font-bold leading-relaxed text-[#090A0F]">
                {alArabiyaFeature.subtitle[typedLocale]}
              </p>

              <p className="text-base leading-[1.85] text-[#525866]">
                {alArabiyaFeature.summary[typedLocale]}
              </p>

              <div className="rounded-[28px] bg-white p-6 sm:p-7 shadow-2xs space-y-3">
                <h3 className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                  {isAr ? "أبرز المحاور في التقرير" : "KEY HIGHLIGHTS"}
                </h3>
                <ul className="space-y-2.5 text-sm font-medium text-[#090A0F]">
                  {alArabiyaFeature.keyTakeaways[typedLocale].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF1E2D]" />
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
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-[#090A0F]"
                >
                  <span>{UI_LABELS.common.readOriginalArticle[typedLocale]}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                <Link
                  href={`/${typedLocale}/work/${alArabiyaFeature.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-bold text-[#090A0F] shadow-2xs transition hover:bg-[#090A0F] hover:text-white"
                >
                  <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
                  <ArrowIcon className="h-4 w-4 text-[#FF1E2D]" />
                </Link>
              </div>
            </div>

            {/* Editorial Context Card */}
            <aside className="lg:col-span-4 rounded-[32px] bg-white p-7 shadow-xs space-y-4">
              <div className="h-1.5 w-12 rounded-full bg-[#FF1E2D]" />
              <h3 className="text-xl font-extrabold text-[#090A0F]">
                {isAr
                  ? "لماذا يمثل هذا التقرير محطة محورية؟"
                  : "Why This Feature Matters"}
              </h3>
              <p className="text-sm leading-relaxed text-[#525866]">
                {alArabiyaFeature.whySelected[typedLocale]}
              </p>
              <div className="border-t border-black/[0.06] pt-4 text-xs font-medium text-[#525866] space-y-1.5">
                <div>
                  <strong className="text-[#090A0F]">
                    {isAr ? "الناشر:" : "Publisher:"}
                  </strong>{" "}
                  {alArabiyaFeature.broadcasterOrPlatform[typedLocale]}
                </div>
                <div>
                  <strong className="text-[#090A0F]">
                    {isAr ? "تاريخ النشر:" : "Published:"}
                  </strong>{" "}
                  {alArabiyaFeature.dateDisplay[typedLocale]}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Personal Reflection & Digital Storytelling Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Piece 2: Personal Reflection Essay */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-[36px] bg-[#F3F4F7] p-3.5 shadow-[0_24px_60px_rgba(9,10,15,0.08)]">
                <div className="overflow-hidden rounded-[26px]">
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
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F1] px-4 py-1.5 text-xs font-extrabold text-[#FF1E2D]">
                <span>{personalEssay.verifiedRole[typedLocale]}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090A0F]">
                {personalEssay.title[typedLocale]}
              </h2>

              <p className="text-base leading-[1.85] text-[#525866]">
                {personalEssay.summary[typedLocale]}
              </p>

              <div className="rounded-2xl border-s-4 border-[#FF1E2D] bg-[#F3F4F7] p-5 text-xs sm:text-sm leading-relaxed text-[#525866]">
                {personalEssay.editorialContext[typedLocale]}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/${typedLocale}/work/${personalEssay.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#090A0F]"
                >
                  <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={personalEssay.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F4F7] px-5 py-3 text-xs font-bold text-[#090A0F] transition hover:bg-[#E5E7EB]"
                >
                  <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#FF1E2D]" />
                </a>
              </div>
            </div>
          </div>

          {/* Piece 3: "Hikayat Nidal" + Senior Social Media Writing Craft */}
          <div className="grid grid-cols-1 gap-8 border-t border-black/[0.06] pt-14 lg:grid-cols-2">
            {/* Card A: Hikayat Nidal */}
            <article className="flex flex-col justify-between rounded-[32px] bg-[#F3F4F7] p-7 sm:p-8 space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono-code font-extrabold text-[#FF1E2D]">
                    {hikayatSeries.dateDisplay[typedLocale]}
                  </span>
                  <span className="rounded-full bg-white px-3.5 py-1 font-bold text-[#090A0F]">
                    {hikayatSeries.verifiedRole[typedLocale]}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#090A0F]">
                  {hikayatSeries.title[typedLocale]}
                </h3>

                <p className="text-sm leading-relaxed text-[#525866]">
                  {hikayatSeries.summary[typedLocale]}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-4 text-xs font-bold">
                <Link
                  href={`/${typedLocale}/work/${hikayatSeries.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#090A0F] hover:text-[#FF1E2D]"
                >
                  <span>{UI_LABELS.common.openDossier[typedLocale]}</span>
                  <ArrowIcon className="h-3.5 w-3.5 text-[#FF1E2D]" />
                </Link>

                <a
                  href={hikayatSeries.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#525866] hover:text-[#090A0F]"
                >
                  <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>

            {/* Card B: The Discipline of Senior Social Media Writing */}
            <article className="flex flex-col justify-between rounded-[32px] bg-[#090A0F] p-7 sm:p-8 text-white space-y-5">
              <div className="space-y-3">
                <span className="inline-block rounded-full bg-[#FF1E2D] px-3.5 py-1 text-xs font-extrabold text-white">
                  {isAr
                    ? "غرفة الأخبار الرقمية · العربية والحدث"
                    : "DIGITAL NEWSROOM CRAFT · AL ARABIYA & AL HADATH"}
                </span>

                <h3 className="text-2xl font-extrabold text-white">
                  {isAr
                    ? "الكتابة لمنصات التواصل في غرفة الأخبار: تحرير الخبر وصناعة القصة"
                    : "End-to-End Social Media Journalism Across 50+ Channels"}
                </h3>

                <p className="text-sm leading-relaxed text-white/75">
                  {isAr
                    ? "بوصفها «كاتبة أولى لمنصات التواصل ومقدمة أخبار»، يجمع عملها اليومي بين التغطية العاجلة لأحداث الشرق الأوسط وشمال أفريقيا، وإنتاج القصص الرقمية من الفكرة حتى النشر، وتوظيف أدوات الذكاء الاصطناعي وأنظمة البث الحديثة (iNews وWildmoka وSprinklr) لتقديم محتوى دقيق وسريع."
                    : "As Senior Social Media Writer Reporter / Presenter, her daily newsroom work spans breaking MENA stories, coordinating multi-platform storytelling across 50+ official channels, and leveraging AI tools alongside iNews, Wildmoka, and Sprinklr."}
                </p>
              </div>

              <div className="border-t border-white/15 pt-4 text-xs font-semibold text-white/70">
                {isAr
                  ? "مجموعة MBC · العربية والحدث — دبي والرياض (2019 – الحاضر)."
                  : "MBC Group · Al Arabiya & Al Hadath — Dubai & Riyadh (2019 – Present)."}
              </div>
            </article>
          </div>

          {/* Written Reflections from Dubai */}
          {dubaiReflections.length > 0 && (
            <div className="border-t border-black/[0.06] pt-14 space-y-8">
              <div className="max-w-2xl space-y-1.5">
                <span className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                  {isAr ? "تأملات مكتوبة من دبي" : "WRITTEN REFLECTIONS FROM DUBAI"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090A0F]">
                  {isAr
                    ? "نصوص قصيرة حول القراءة، والأمل، وبناء الإنسان"
                    : "Short Notes on Reading, Hope, and Personal Growth"}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {dubaiReflections.map((item) => (
                  <article
                    key={item.slug}
                    className="flex flex-col sm:flex-row gap-6 rounded-[32px] border border-black/[0.06] bg-[#F3F4F7] p-5 sm:p-6"
                  >
                    <div className="w-full sm:w-44 shrink-0 overflow-hidden rounded-[24px] bg-white">
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
                        <span className="font-mono-code text-xs font-bold text-[#FF1E2D]">
                          {item.dateDisplay[typedLocale]}
                        </span>
                        <h3 className="text-xl font-extrabold text-[#090A0F]">
                          {item.title[typedLocale]}
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-[#525866]">
                          {item.summary[typedLocale]}
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-black/[0.06] pt-3 text-xs font-bold">
                        <Link
                          href={`/${typedLocale}/work/${item.slug}`}
                          className="text-[#090A0F] hover:text-[#FF1E2D]"
                        >
                          {UI_LABELS.common.openDossier[typedLocale]}
                        </Link>
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#525866] hover:text-[#090A0F]"
                        >
                          <span>{UI_LABELS.common.sourceLink[typedLocale]}</span>
                          <ExternalLink className="h-3 w-3 text-[#FF1E2D]" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Press & Media Coverage Archive */}
          <div className="border-t border-black/[0.06] pt-14 space-y-8">
            <div className="max-w-2xl space-y-1.5">
              <span className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                {isAr ? "أصداء الصحافة والحوارات المكتوبة" : "PRESS COVERAGE & INTERVIEWS"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090A0F]">
                {isAr
                  ? "تغطيات وحوارات صحفية حول مسيرتها وبرامجها"
                  : "Press Profiles & Written Interviews on Her Career"}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {PRESS_FEATURES.map((press) => (
                <article
                  key={press.id}
                  className="flex flex-col justify-between rounded-[28px] border border-black/[0.06] bg-[#F3F4F7] p-6 space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-bold text-[#FF1E2D]">
                      <span>{press.publication[typedLocale]}</span>
                      <span className="font-mono-code text-[#525866]">
                        {press.dateDisplay[typedLocale]}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-[#090A0F]">
                      {press.headline[typedLocale]}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#525866]">
                      {press.summary[typedLocale]}
                    </p>
                  </div>

                  <div className="border-t border-black/[0.06] pt-3 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-medium text-[#525866] truncate max-w-[70%]">
                      {press.programsMentioned[typedLocale]}
                    </span>
                    <a
                      href={press.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-extrabold text-[#090A0F] hover:text-[#FF1E2D] shrink-0"
                    >
                      <span>{isAr ? "المصدر" : "Source"}</span>
                      <ExternalLink className="h-3 w-3 text-[#FF1E2D]" />
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
