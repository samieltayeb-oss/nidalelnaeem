import React from "react";
import Link from "next/link";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Play,
  Mail,
  MapPin,
  GraduationCap,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import {
  type Locale,
  SITE_IDENTITY,
  WORK_ITEMS,
} from "@/data/portfolio-data";
import {
  NIDAL_SIGNATURE_LINE,
  CV_BIO_SUMMARY,
  CV_CONTACT_INFO,
  CV_IMPACT_STATS,
  CV_EXPERIENCE_TIMELINE,
  CV_EDUCATION,
  CV_NEWSROOM_TOOLS,
} from "@/data/cv-profile-data";
import { LIFE_MOMENTS } from "@/data/life-and-press-data";
import {
  AlHadathMark,
  NidalSignature,
  SocialPlatformIcon,
} from "@/components/brand/BrandVectors";

/**
 * CONCEPT 01: "THE IVORY BROADSHEET"
 * Vogue Arabia × Financial Times Weekend Magazine
 * 100% Light-First Haute Editorial — Sunlit Warm Ivory (#FAF7F2), Deep Espresso Ink (#111318),
 * Vermilion Accent (#D91E2A), Newspaper Dateline, Monumental Masthead, 3-Column Magazine Spread.
 */
export function ConceptOneBroadsheet({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

  const videoSelections = WORK_ITEMS.filter((w) => w.featuredOnScreen).slice(0, 3);
  const alArabiyaArticle = WORK_ITEMS.find(
    (w) => w.slug === "alarabiya-sudan-protest-lexicon"
  )!;
  const lifeSelections = LIFE_MOMENTS.slice(0, 3);

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#FAF7F2] text-[#111318] selection:bg-[#D91E2A] selection:text-white ${
        isAr ? "font-sans-ar" : "font-sans-en"
      }`}
    >
      {/* Top Broadsheet Dateline & Editorial Masthead */}
      <header className="border-b border-[#111318]/15 bg-[#FAF7F2]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Upper Fine Dateline */}
          <div className="hidden sm:flex items-center justify-between border-b border-[#111318]/10 py-2 text-[11px] font-medium text-[#5A554C]">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#D91E2A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D91E2A]" />
                <span>
                  {isAr
                    ? "مجموعة MBC · قناتي العربية والحدث"
                    : "MBC GROUP · AL ARABIYA & AL HADATH"}
                </span>
              </span>
              <span>·</span>
              <span>
                {isAr
                  ? "الرياض · دبي · الخرطوم"
                  : "RIYADH · DUBAI · KHARTOUM"}
              </span>
            </div>

            <div className="flex items-center gap-5">
              <a
                href={`mailto:${CV_CONTACT_INFO.email}`}
                dir="ltr"
                className="font-mono-code hover:text-[#111318]"
              >
                {CV_CONTACT_INFO.email}
              </a>
              <Link
                href={`/concepts/${isAr ? "en" : "ar"}/1`}
                className="font-semibold text-[#111318] underline underline-offset-4"
              >
                {isAr ? "English Edition" : "النسخة العربية"}
              </Link>
            </div>
          </div>

          {/* Main Magazine Nav Bar */}
          <div className="flex h-16 items-center justify-between gap-4">
            <a href="#top" className="flex items-baseline gap-3">
              <span
                className={`text-2xl tracking-tight text-[#111318] ${
                  isAr
                    ? "font-serif-ar font-bold"
                    : "font-display-en font-bold uppercase tracking-[0.08em]"
                }`}
              >
                {SITE_IDENTITY.name[locale]}
              </span>
              <span className="hidden md:inline-block text-xs text-[#6E675C]">
                {isAr ? "صحفية ومقدمة أخبار" : "Journalist & News Presenter"}
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#2E2B26]">
              <a href="#profile" className="hover:text-[#D91E2A] transition">
                {isAr ? "الملف المهني" : "Profile"}
              </a>
              <a href="#career" className="hover:text-[#D91E2A] transition">
                {isAr ? "السيرة والخبرات" : "Experience"}
              </a>
              <a href="#broadcasts" className="hover:text-[#D91E2A] transition">
                {isAr ? "على الشاشة" : "On Screen"}
              </a>
              <a href="#journal" className="hover:text-[#D91E2A] transition">
                {isAr ? "كلمات ويوميات" : "Words & Life"}
              </a>
            </nav>

            <a
              href={`mailto:${CV_CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#111318] px-4 py-2 text-xs font-semibold text-[#FAF7F2] transition hover:bg-[#D91E2A]"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{isAr ? "تواصل مباشر" : "Get in Touch"}</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SPREAD: Monumental Masthead + 3-Column Magazine Cover */}
      <section id="top" className="border-b border-[#111318]/15 pt-8 pb-16 sm:pt-12 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Giant Full-Width Editorial Title Banner */}
          <div className="border-b-2 border-[#111318] pb-9 mb-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#D91E2A] uppercase">
                <span>
                  {isAr
                    ? "بورتريه صحفي · إصدار خاص"
                    : "MONOGRAPH EDITION · SENIOR JOURNALIST & PRESENTER"}
                </span>
              </span>
              <span className={`text-xs font-medium text-[#6E675C] ${isAr ? "" : "font-mono-code"}`}>
                {isAr ? "2015 — 2026 · +7 سنوات في العربية والحدث" : "2015 — 2026 · 7+ YRS AL ARABIYA & AL HADATH"}
              </span>
            </div>

            <h1
              className={`text-[#111318] ${
                isAr
                  ? "font-serif-ar text-5xl sm:text-7xl lg:text-[5.4rem] font-bold leading-[1.22]"
                  : "font-display-en text-5xl sm:text-7xl lg:text-[6.2rem] font-semibold leading-[1.04] tracking-tight"
              }`}
            >
              {SITE_IDENTITY.name[locale]}
            </h1>
          </div>

          {/* Asymmetric 3-Column Vogue / FT Spread */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 items-start">
            {/* Column 1 (4 cols): Signature Quote, Bio & Signature */}
            <div className="lg:col-span-4 space-y-6 lg:pe-4 lg:border-e lg:border-[#111318]/12">
              <div className="inline-block border-b-2 border-[#D91E2A] pb-1 text-xs font-bold text-[#D91E2A]">
                {isAr ? "الرحلة في سطر" : "THE SIGNATURE LINE"}
              </div>

              <blockquote
                className={`text-[#111318] leading-[1.45] ${
                  isAr
                    ? "font-serif-ar text-2xl sm:text-3xl font-bold"
                    : "font-display-en text-2xl sm:text-3xl italic font-medium"
                }`}
              >
                {isAr
                  ? `«${NIDAL_SIGNATURE_LINE.ar}»`
                  : `“${NIDAL_SIGNATURE_LINE.en}”`}
              </blockquote>

              <p className="text-sm sm:text-base leading-[1.85] text-[#3E3A33]">
                {CV_BIO_SUMMARY[locale]}
              </p>

              <div className="pt-1">
                <NidalSignature className="h-auto w-44" color="#111318" />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#broadcasts"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D91E2A] px-6 py-3 text-xs font-semibold text-white shadow-md transition hover:bg-[#b51621]"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>{isAr ? "شاهد المختارات المرئية" : "Watch Broadcasts"}</span>
                </a>
                <a
                  href="#career"
                  className="inline-flex items-center gap-2 rounded-full border border-[#111318]/25 bg-white px-5 py-3 text-xs font-semibold text-[#111318] transition hover:bg-[#111318] hover:text-white"
                >
                  <span>{isAr ? "السيرة الذاتية الكاملة" : "Full CV Record"}</span>
                </a>
              </div>
            </div>

            {/* Column 2 (5 cols): Centerpiece Sunlit Editorial Portrait */}
            <div className="lg:col-span-5">
              <figure className="border border-[#111318]/20 bg-white p-3 shadow-[0_24px_60px_rgba(17,19,24,0.08)]">
                <div className="relative overflow-hidden bg-[#EAE4D8]">
                  <picture>
                    <source
                      srcSet="/media/social/ig-CwVltyRSO9d-1.avif"
                      type="image/avif"
                    />
                    <img
                      src="/media/social/ig-CwVltyRSO9d-1.webp"
                      alt={SITE_IDENTITY.name[locale]}
                      className="aspect-[4/5] w-full object-cover object-[50%_20%]"
                    />
                  </picture>
                  <div className="absolute top-3 start-3 bg-white/92 px-3 py-1 text-[11px] font-bold text-[#111318] backdrop-blur-sm">
                    {isAr ? "قناة العربية · دبي والرياض" : "AL ARABIYA · DUBAI & RIYADH"}
                  </div>
                </div>
                <figcaption className="mt-3 flex items-center justify-between text-xs text-[#5A554C] px-1">
                  <span>{SITE_IDENTITY.verifiedTitle[locale]}</span>
                  <span className="font-mono-code text-[#D91E2A]">01 / COVER</span>
                </figcaption>
              </figure>
            </div>

            {/* Column 3 (3 cols): Vertical Numbers Ledger + Secondary Studio Thumbnail */}
            <div className="lg:col-span-3 space-y-5 lg:ps-4 lg:border-s lg:border-[#111318]/12">
              <div className="text-xs font-bold tracking-wider text-[#5A554C] uppercase">
                {isAr ? "أرقام ومحطات رئيسية" : "CAREER TELEMETRY"}
              </div>

              <div className="divide-y divide-[#111318]/12 border-y border-[#111318]/12">
                {CV_IMPACT_STATS.map((stat, idx) => (
                  <div key={idx} className="py-3.5 space-y-0.5">
                    <div className="font-display-en text-3xl font-bold text-[#111318]">
                      {stat.value[locale]}
                    </div>
                    <div className="text-xs font-bold text-[#D91E2A]">
                      {stat.label[locale]}
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#5A554C]">
                      {stat.detail[locale]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Secondary Studio Card */}
              <div className="border border-[#111318]/15 bg-white p-3 space-y-2.5">
                <div className="flex items-center gap-3">
                  <img
                    src="/media/derivatives/portrait-04-broadcast-yellow-blazer.webp"
                    alt=""
                    className="h-14 w-14 object-cover object-top shrink-0"
                  />
                  <div className="text-xs">
                    <div className="font-bold text-[#111318]">
                      {CV_EDUCATION.degree[locale]}
                    </div>
                    <div className="text-[#6E675C]">
                      {CV_EDUCATION.university[locale]} · {CV_EDUCATION.year}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Structured Editorial CV & LinkedIn Ledger */}
      <section id="career" className="border-b border-[#111318]/15 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-[#111318] pb-5">
            <div>
              <span className="text-xs font-bold text-[#D91E2A] uppercase tracking-wider">
                {isAr ? "الفهرس المهني الكامل" : "CURRICULUM VITAE & LINKEDIN"}
              </span>
              <h2
                className={`mt-1 text-3xl sm:text-5xl text-[#111318] ${
                  isAr ? "font-serif-ar font-bold" : "font-display-en font-semibold"
                }`}
              >
                {isAr
                  ? "المسيرة المهنية: من الخرطوم إلى دبي والرياض"
                  : "Career Chronicle: Khartoum, Dubai & Riyadh"}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {CV_NEWSROOM_TOOLS.map((tool) => (
                <span
                  key={tool.name}
                  className="border border-[#111318]/20 bg-[#FAF7F2] px-3 py-1 font-mono-code text-[11px] font-semibold text-[#111318]"
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>

          <div className="divide-y divide-[#111318]/15">
            {CV_EXPERIENCE_TIMELINE.map((item, i) => (
              <div
                key={item.id}
                className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-12"
              >
                <div className="lg:col-span-4 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-code text-xs font-bold text-[#D91E2A]">
                      0{i + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#5A554C]">
                      {item.period[locale]}
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-bold text-[#111318] ${
                      isAr ? "font-serif-ar text-2xl" : "font-display-en text-2xl"
                    }`}
                  >
                    {item.organization[locale]}
                  </h3>
                  <p className="text-xs text-[#6E675C]">{item.location[locale]}</p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {item.roles.map((role, rIdx) => (
                    <div
                      key={rIdx}
                      className={`border border-[#111318]/12 bg-[#FAF7F2] p-5 space-y-2.5 ${
                        item.roles.length === 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <h4 className="text-sm font-bold text-[#111318]">
                        {role.title[locale]}
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm leading-relaxed text-[#3E3A33]">
                        {role.bullets[locale].map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D91E2A]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Broadcasts & Featured Journalism */}
      <section id="broadcasts" className="border-b border-[#111318]/15 bg-[#F3EFE6] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#D91E2A] uppercase">
                {isAr ? "مختارات الفيديو والصحافة" : "BROADCASTS & BYLINES"}
              </span>
              <h2
                className={`mt-1 text-3xl sm:text-5xl text-[#111318] ${
                  isAr ? "font-serif-ar font-bold" : "font-display-en font-semibold"
                }`}
              >
                {isAr ? "أعمال مختارة على الشاشة وفي الصحافة" : "Selected Screen & Written Works"}
              </h2>
            </div>
            <Link
              href={`/${locale}/on-screen`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111318] underline underline-offset-4 hover:text-[#D91E2A]"
            >
              <span>{isAr ? "عرض الأرشيف الكامل" : "Open Full Archive"}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {videoSelections.map((video) => (
              <a
                key={video.slug}
                href={video.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between border border-[#111318]/15 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#111318]">
                    <img
                      src={video.posterAsset}
                      alt={video.title[locale]}
                      style={{ objectPosition: video.posterFocalPoint }}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 start-3 inline-flex items-center gap-1.5 bg-[#D91E2A] px-2.5 py-1 text-[11px] font-bold text-white">
                      <Play className="h-3 w-3 fill-current" />
                      <span>{video.duration || "Video"}</span>
                    </span>
                  </div>
                  <div className="pt-4 space-y-2">
                    <div className="text-[11px] font-semibold text-[#D91E2A]">
                      {video.broadcasterOrPlatform[locale]}
                    </div>
                    <h3 className="text-lg font-bold leading-snug text-[#111318] group-hover:text-[#D91E2A]">
                      {video.title[locale]}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#5A554C] line-clamp-2">
                      {video.summary[locale]}
                    </p>
                  </div>
                </div>
                <div className="mt-4 border-t border-[#111318]/10 pt-3 flex items-center justify-between text-xs font-bold text-[#111318]">
                  <span>{isAr ? "مشاهدة المادة" : "Watch Segment"}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#D91E2A]" />
                </div>
              </a>
            ))}
          </div>

          {/* Al Arabiya Bylined Feature Banner */}
          <div className="border-2 border-[#111318] bg-white p-7 sm:p-10 grid grid-cols-1 gap-6 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-block bg-[#111318] px-3 py-1 text-[11px] font-bold text-white">
                {isAr ? "مقال منشور باسمها · العربية.نت" : "BYLINED REPORT · AL ARABIYA NET"}
              </span>
              <h3
                className={`text-2xl sm:text-3xl text-[#111318] ${
                  isAr ? "font-serif-ar font-bold" : "font-display-en font-semibold"
                }`}
              >
                {alArabiyaArticle.title[locale]}
              </h3>
              <p className="text-sm leading-relaxed text-[#4A453D]">
                {alArabiyaArticle.summary[locale]}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={alArabiyaArticle.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#D91E2A] px-6 py-3.5 text-xs font-bold text-white transition hover:bg-[#111318]"
              >
                <span>{isAr ? "قراءة المقال في العربية.نت" : "Read on Al Arabiya Net"}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Polaroid Magazine Triptych — Life & Moments */}
      <section id="journal" className="bg-[#FAF7F2] py-16 sm:py-24 border-b border-[#111318]/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#D91E2A] uppercase">
              {isAr ? "يوميات وصور مختارة" : "LIFE & MOMENTS"}
            </span>
            <h2
              className={`text-3xl sm:text-5xl text-[#111318] ${
                isAr ? "font-serif-ar font-bold" : "font-display-en font-semibold"
              }`}
            >
              {isAr ? "بين شاشات الأخبار وتأملات الحياة" : "Inside the Studio & Quiet Reflections"}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {lifeSelections.map((moment) => (
              <figure
                key={moment.id}
                className="border border-[#111318]/15 bg-white p-4 shadow-md space-y-4"
              >
                <img
                  src={moment.imageWebp}
                  alt={moment.title[locale]}
                  style={{ objectPosition: moment.focalPoint }}
                  className="aspect-[4/5] w-full object-cover"
                />
                <figcaption className="space-y-1.5 px-1">
                  <div className="text-[11px] font-bold text-[#D91E2A]">
                    {moment.location[locale]}
                  </div>
                  <h3 className="text-base font-bold text-[#111318]">
                    {moment.title[locale]}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#5A554C]">
                    {moment.captionExcerpt[locale]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Sunlit Ivory Editorial Footer */}
      <footer className="bg-white py-12 text-[#111318]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="font-bold text-lg">{SITE_IDENTITY.name[locale]}</div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#5A554C]">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-[#D91E2A]" />
                {CV_CONTACT_INFO.location[locale]}
              </span>
              <span>·</span>
              <a
                href={`mailto:${CV_CONTACT_INFO.email}`}
                dir="ltr"
                className="font-mono-code underline"
              >
                {CV_CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {(["linkedin", "instagram", "x", "facebook"] as const).map((p) => (
              <a
                key={p}
                href={SITE_IDENTITY.socialLinks[p].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#111318]/20 text-[#111318] transition hover:bg-[#111318] hover:text-white"
              >
                <SocialPlatformIcon platform={p} className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="text-xs text-[#5A554C]">
            Built by{" "}
            <a
              href="https://nexorayyc.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#111318] underline decoration-[#D91E2A] underline-offset-4"
            >
              Nexora
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
