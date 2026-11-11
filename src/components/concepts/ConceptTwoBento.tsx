import React from "react";
import Link from "next/link";
import {
  Play,
  Radio,
  Tv,
  Cpu,
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  ArrowUpLeft,
  ArrowUpRight,
  Sparkles,
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
 * CONCEPT 02: "SIGNAL & STUDIO BENTO"
 * Apple TV+ × Modern Broadcast Control Room
 * Modular 12-column frosted carbon bento command stage above the fold,
 * live frequency wave motif ("96 FM -> Al Arabiya & Al Hadath"), telemetry & AI stack tiles.
 */
export function ConceptTwoBento({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

  const videoSelections = WORK_ITEMS.filter((w) => w.featuredOnScreen).slice(0, 3);
  const lifeSelections = LIFE_MOMENTS.slice(0, 3);

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#07080D] text-[#F8FAFC] selection:bg-[#FF2A38] selection:text-white ${
        isAr ? "font-sans-ar" : "font-sans-en"
      }`}
    >
      {/* Ambient Radial Studio Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(800px circle at 15% 10%, rgba(255,42,56,0.09), transparent 65%), radial-gradient(700px circle at 85% 20%, rgba(226,198,149,0.08), transparent 65%)",
        }}
      />

      {/* Sleek Floating Pill Top Bar */}
      <header className="sticky top-4 z-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-[#10131D]/85 px-4 sm:px-6 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2A38] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FF2A38]" />
            </span>
            <span className="font-bold tracking-tight text-white">
              {SITE_IDENTITY.name[locale]}
            </span>
            <span className={`hidden md:inline-flex items-center rounded-md bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-[#E2C695] ${isAr ? "" : "font-mono-code"}`}>
              {isAr ? "العربية · الحدث" : "AL ARABIYA · AL HADATH"}
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#bento-stage" className="hover:text-white transition">
              {isAr ? "غرفة الأخبار" : "Command Stage"}
            </a>
            <a href="#bento-career" className="hover:text-white transition">
              {isAr ? "المسيرة (CV)" : "Career Track"}
            </a>
            <a href="#bento-reels" className="hover:text-white transition">
              {isAr ? "البث المرئي" : "Broadcasts"}
            </a>
            <a href="#bento-life" className="hover:text-white transition">
              {isAr ? "يومياتها" : "Moments"}
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href={`/concepts/${isAr ? "en" : "ar"}/2`}
              className="rounded-xl border border-white/12 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[#E2C695] hover:bg-white/10"
            >
              {isAr ? "EN" : "عربي"}
            </Link>
            <a
              href={`mailto:${CV_CONTACT_INFO.email}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#FF2A38] px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-[#FF2A38]/25 hover:bg-[#e0202d]"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{isAr ? "تواصل" : "Contact"}</span>
            </a>
          </div>
        </div>
      </header>

      {/* ABOVE-THE-FOLD ARCHITECTURAL BENTO COMMAND STAGE */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 pt-8 pb-20 sm:px-6 lg:px-8 space-y-20">
        <section id="bento-stage" className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          {/* TILE 1 (7 cols): Identity, Acoustic Frequency Wave & Signature Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-[#131724] via-[#0E111B] to-[#0A0C14] p-7 sm:p-9 shadow-2xl">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[#FF2A38]/35 bg-[#FF2A38]/10 px-3.5 py-1 text-xs font-semibold text-[#FF6B75]">
                  <AlHadathMark className="h-3.5 w-auto" />
                  <span>
                    {isAr
                      ? "كاتبة أولى لمنصات التواصل · مراسلة · مقدمة أخبار"
                      : "Senior Social Media Writer · Reporter · Presenter"}
                  </span>
                </div>
                <span className={`inline-flex items-center gap-1.5 text-xs text-slate-400 ${isAr ? "" : "font-mono-code"}`}>
                  <MapPin className="h-3.5 w-3.5 text-[#E2C695]" />
                  {CV_CONTACT_INFO.location[locale]}
                </span>
              </div>

              <h1
                className={`text-white leading-[1.08] ${
                  isAr
                    ? "font-display-ar text-4xl sm:text-6xl font-bold"
                    : "font-sans-en text-4xl sm:text-6xl font-bold tracking-tight"
                }`}
              >
                {SITE_IDENTITY.name[locale]}
              </h1>

              {/* Signature FM-to-Newsroom Frequency Card */}
              <div className="rounded-2xl border border-[#E2C695]/25 bg-white/[0.03] p-5 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono-code text-[#E2C695]">
                  <span className="inline-flex items-center gap-1.5">
                    <Radio className="h-3.5 w-3.5 text-[#FF2A38]" />
                    96.0 FM KHARTOUM
                  </span>
                  {/* Stylized Broadcast Signal Bars */}
                  <div className="hidden sm:flex items-center gap-1" aria-hidden="true">
                    {[3, 6, 10, 5, 12, 8, 14, 7, 11, 15, 9, 6, 12, 5].map((h, idx) => (
                      <span
                        key={idx}
                        style={{ height: `${h}px` }}
                        className={`w-1 rounded-full ${
                          idx > 7 ? "bg-[#FF2A38]" : "bg-[#E2C695]/60"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5">
                    <Tv className="h-3.5 w-3.5 text-[#FF2A38]" />
                    AL ARABIYA & AL HADATH
                  </span>
                </div>

                <p
                  className={`text-white ${
                    isAr
                      ? "font-display-ar text-xl sm:text-2xl font-bold leading-relaxed"
                      : "text-xl sm:text-2xl font-semibold leading-snug"
                  }`}
                >
                  {isAr
                    ? `«${NIDAL_SIGNATURE_LINE.ar}»`
                    : `“${NIDAL_SIGNATURE_LINE.en}”`}
                </p>
              </div>

              <p className="text-sm sm:text-base leading-[1.8] text-slate-300">
                {CV_BIO_SUMMARY[locale]}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-5">
              <div className="flex flex-wrap gap-3">
                <a
                  href="#bento-reels"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#FF2A38] px-5 py-3 text-xs font-bold text-white shadow-lg shadow-[#FF2A38]/25 transition hover:bg-[#e0202d]"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>{isAr ? "تشغيل المختارات المرئية" : "Watch Broadcast Reels"}</span>
                </a>
                <a
                  href="#bento-career"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/10"
                >
                  <span>{isAr ? "السجل الوظيفي الكامل" : "Explore CV & Timeline"}</span>
                </a>
              </div>
              <NidalSignature className="h-auto w-36 opacity-90" color="#E2C695" />
            </div>
          </div>

          {/* TILE 2 (5 cols, Tall Cinema Studio Portrait inside Newsroom Monitors) */}
          <div className="lg:col-span-5 lg:row-span-2 relative overflow-hidden rounded-3xl border border-white/12 bg-[#0E121C] shadow-2xl min-h-[460px]">
            <picture>
              <source
                srcSet="/media/social/ig-DJAecEGMcm1-1.avif"
                type="image/avif"
              />
              <img
                src="/media/social/ig-DJAecEGMcm1-1.webp"
                alt={SITE_IDENTITY.name[locale]}
                className="h-full w-full object-cover object-[50%_20%]"
              />
            </picture>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07080D] via-[#07080D]/25 to-transparent" />

            {/* Top Glass Studio Pill */}
            <div className="absolute top-4 inset-x-4 flex items-center justify-between">
              <span className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md ${isAr ? "" : "font-mono-code"}`}>
                <span className="h-2 w-2 rounded-full bg-[#FF2A38]" />
                {isAr ? "غرفة الأخبار · بث مباشر" : "NEWSROOM STUDIO · ON AIR"}
              </span>
              <span className="rounded-full border border-[#E2C695]/30 bg-black/60 px-3 py-1 font-mono-code text-[11px] text-[#E2C695] backdrop-blur-md">
                AR · EN
              </span>
            </div>

            {/* Bottom Floating Glass Mini-Card */}
            <div className="absolute bottom-4 inset-x-4 rounded-2xl border border-white/15 bg-[#0B0E17]/85 p-4 backdrop-blur-xl flex items-center gap-3.5">
              <img
                src="/media/derivatives/portrait-04-broadcast-yellow-blazer.webp"
                alt=""
                className="h-14 w-14 rounded-xl object-cover object-top border border-white/15 shrink-0"
              />
              <div className="min-w-0">
                <div className="text-xs font-bold text-[#E2C695]">
                  {isAr ? "مجموعة MBC · الرياض ودبي" : "MBC Group · Riyadh & Dubai"}
                </div>
                <div className="text-sm font-bold text-white truncate">
                  {isAr
                    ? "تغطية يومية وتقديم وصناعة محتوى بالذكاء الاصطناعي"
                    : "Daily MENA Coverage, Presenting & AI Workflows"}
                </div>
              </div>
            </div>
          </div>

          {/* TILE 3 (4 cols): 4-Metric Telemetry Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
            {CV_IMPACT_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-[#111521] p-5 flex flex-col justify-between"
              >
                <span className="font-mono-code text-2xl sm:text-3xl font-bold text-white">
                  {stat.value[locale]}
                </span>
                <div className="mt-2">
                  <div className="text-xs font-bold text-[#E2C695]">
                    {stat.label[locale]}
                  </div>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-400 line-clamp-2">
                    {stat.detail[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* TILE 4 (3 cols): Broadcast Systems & Software Engineering Stack */}
          <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-[#111521] p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#E2C695]">
                <span className="inline-flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-[#FF2A38]" />
                  {isAr ? "أنظمة غرفة الأخبار" : "Broadcast & AI Stack"}
                </span>
                <Sparkles className="h-3.5 w-3.5 text-[#E2C695]" />
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {CV_NEWSROOM_TOOLS.map((tool) => (
                  <span
                    key={tool.name}
                    className="rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1 font-mono-code text-[11px] font-medium text-white"
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <GraduationCap className="h-3.5 w-3.5 text-[#E2C695]" />
                <span>{CV_EDUCATION.degree[locale]}</span>
              </div>
              <div className="mt-0.5 text-[11px] text-slate-400">
                {CV_EDUCATION.university[locale]} ({CV_EDUCATION.year})
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Interactive-Style Career Bento Track */}
        <section id="bento-career" className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className={`text-xs font-semibold text-[#FF2A38] uppercase ${isAr ? "" : "font-mono-code"}`}>
                {isAr ? "السيرة المهنية الموثقة" : "VERIFIED CAREER TIMELINE"}
              </span>
              <h2 className="mt-1 text-2xl sm:text-4xl font-bold text-white">
                {isAr
                  ? "محطات العمل الإعلامي والرقمي (2015 – الحاضر)"
                  : "Broadcast & Digital Newsroom Experience"}
              </h2>
            </div>
            <a
              href={SITE_IDENTITY.socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold text-[#E2C695] hover:bg-white/10"
            >
              {isAr ? "ملف لينكدإن الرسمي ↗" : "Official LinkedIn ↗"}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CV_EXPERIENCE_TIMELINE.map((exp, index) => (
              <article
                key={exp.id}
                className={`rounded-3xl border p-6 space-y-4 transition ${
                  index === 0
                    ? "md:col-span-2 lg:col-span-2 border-[#FF2A38]/40 bg-gradient-to-br from-[#19131D] to-[#10131E]"
                    : "border-white/10 bg-[#101420] hover:border-white/25"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${isAr ? "" : "font-mono-code"} ${
                      exp.isCurrent
                        ? "bg-[#FF2A38] text-white"
                        : "bg-white/8 text-[#E2C695]"
                    }`}
                  >
                    {exp.period[locale]}
                  </span>
                  <span className="text-xs text-slate-400">
                    {exp.location[locale]}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {exp.organization[locale]}
                </h3>

                <div className="space-y-3">
                  {exp.roles.map((r, rIdx) => (
                    <div
                      key={rIdx}
                      className="rounded-2xl border border-white/8 bg-black/25 p-4 space-y-2"
                    >
                      <div className="text-xs sm:text-sm font-bold text-[#E2C695]">
                        {r.title[locale]}
                      </div>
                      <ul className="space-y-1.5 text-xs leading-relaxed text-slate-300">
                        {r.bullets[locale].map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2A38]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 3: Widescreen Screening Deck */}
        <section id="bento-reels" className="space-y-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className={`text-xs font-semibold text-[#E2C695] uppercase ${isAr ? "" : "font-mono-code"}`}>
                {isAr ? "قاعة العرض الرقمية" : "SCREENING DECK"}
              </span>
              <h2 className="mt-1 text-2xl sm:text-4xl font-bold text-white">
                {isAr ? "مختارات الفيديو والحوارات" : "Featured Broadcasts & Talks"}
              </h2>
            </div>
            <Link
              href={`/${locale}/on-screen`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E2C695] hover:text-white"
            >
              <span>{isAr ? "كل الفيديوهات" : "All Videos"}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {videoSelections.map((vid) => (
              <a
                key={vid.slug}
                href={vid.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101420] transition hover:border-[#FF2A38]/50"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={vid.posterAsset}
                    alt={vid.title[locale]}
                    style={{ objectPosition: vid.posterFocalPoint }}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101420] via-transparent to-transparent" />
                  <span className="absolute bottom-3 start-3 inline-flex items-center gap-1.5 rounded-full bg-[#FF2A38] px-3 py-1 text-[11px] font-bold text-white shadow-lg">
                    <Play className="h-3 w-3 fill-current" />
                    {vid.duration}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <div className={`text-[11px] font-medium text-[#E2C695] ${isAr ? "" : "font-mono-code"}`}>
                    {vid.broadcasterOrPlatform[locale]}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#FF6B75]">
                    {vid.title[locale]}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {vid.summary[locale]}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SECTION 4: Visual Moments Bento */}
        <section id="bento-life" className="space-y-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            {isAr ? "لحظات من الاستوديو وخارجه" : "Studio & Life Frames"}
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {lifeSelections.map((m) => (
              <div
                key={m.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101420] aspect-[4/5]"
              >
                <img
                  src={m.imageWebp}
                  alt={m.title[locale]}
                  style={{ objectPosition: m.focalPoint }}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent p-6 flex flex-col justify-end">
                  <span className={`text-[11px] font-medium text-[#E2C695] ${isAr ? "" : "font-mono-code"}`}>
                    {m.location[locale]}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    {m.title[locale]}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bento Glass Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#05060A] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-white">{SITE_IDENTITY.name[locale]}</span>
            <span>·</span>
            <a
              href={`mailto:${CV_CONTACT_INFO.email}`}
              dir="ltr"
              className="font-mono-code text-[#E2C695] hover:underline"
            >
              {CV_CONTACT_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            {(["linkedin", "instagram", "x", "facebook"] as const).map((p) => (
              <a
                key={p}
                href={SITE_IDENTITY.socialLinks[p].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-white hover:border-[#FF2A38] hover:bg-[#FF2A38]"
              >
                <SocialPlatformIcon platform={p} className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div>
            Built by{" "}
            <a
              href="https://nexorayyc.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-[#FF2A38] underline-offset-4"
            >
              Nexora
            </a>{" "}
            <ExternalLink className="inline h-3 w-3" />
          </div>
        </div>
      </footer>
    </div>
  );
}
