import React from "react";
import Link from "next/link";
import {
  Play,
  Mail,
  MapPin,
  ArrowUpLeft,
  ArrowUpRight,
  Cpu,
  GraduationCap,
  ExternalLink,
  Check,
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
import { SocialPlatformIcon } from "@/components/brand/BrandVectors";

/**
 * MODERN CONCEPT 02: "APPLE / SWISS PURE WHITE STUDIO"
 * 100% Contemporary Clean Light UI — Pure Crisp White (#FFFFFF) + Cool Silver (#F3F4F7)
 * + Jet Black (#090A0F) + Electric Red (#FF1E2D).
 * Zero beige, zero serif, zero vintage borders! Giant geometric type with inline avatar pills,
 * [40px] super-ellipse portrait, and floating white glass metric chips.
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
      className={`min-h-screen bg-white text-[#090A0F] selection:bg-[#FF1E2D] selection:text-white ${
        isAr ? "font-modern-ar" : "font-modern-en"
      }`}
    >
      {/* Clean Minimal Modern Pill Navbar */}
      <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/media/derivatives/portrait-04-broadcast-yellow-blazer.webp"
              alt=""
              className="h-9 w-9 rounded-full object-cover object-top ring-2 ring-[#FF1E2D]"
            />
            <span className="text-base font-extrabold tracking-tight text-[#090A0F]">
              {SITE_IDENTITY.name[locale]}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 rounded-full bg-[#F3F4F7] p-1 text-xs font-semibold text-[#4B505E]">
            <a
              href="#top"
              className="rounded-full bg-white px-4 py-2 text-[#090A0F] shadow-xs"
            >
              {isAr ? "الرئيسية" : "Overview"}
            </a>
            <a
              href="#white-reels"
              className="rounded-full px-4 py-2 hover:text-[#090A0F] transition"
            >
              {isAr ? "الفيديو" : "Broadcasts"}
            </a>
            <a
              href="#white-career"
              className="rounded-full px-4 py-2 hover:text-[#090A0F] transition"
            >
              {isAr ? "الخبرات" : "Experience"}
            </a>
            <a
              href="#white-moments"
              className="rounded-full px-4 py-2 hover:text-[#090A0F] transition"
            >
              {isAr ? "اليوميات" : "Moments"}
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href={`/concepts/${isAr ? "en" : "ar"}/2`}
              className="rounded-full bg-[#F3F4F7] px-3.5 py-2 text-xs font-bold text-[#090A0F] hover:bg-black/10 transition"
            >
              {isAr ? "EN" : "عربي"}
            </Link>
            <a
              href={`mailto:${CV_CONTACT_INFO.email}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#090A0F] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#FF1E2D]"
            >
              <span>{isAr ? "تواصل" : "Contact"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* MODERN CREATOR / AGENCY HERO */}
      <section id="top" className="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left / Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Crisp Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F1] px-4 py-2 text-xs font-bold text-[#FF1E2D]">
              <span className="h-2 w-2 rounded-full bg-[#FF1E2D]" />
              <span>
                {isAr
                  ? "العربية والحدث · الرياض ودبي"
                  : "AL ARABIYA & AL HADATH · RIYADH & DUBAI"}
              </span>
            </div>

            {/* Giant Geometric Display Typography with Inline Avatar Pill */}
            <div className="space-y-3">
              <h1
                className={`font-extrabold tracking-tight text-[#090A0F] ${
                  isAr
                    ? "text-4xl sm:text-6xl lg:text-[4.3rem] leading-[1.16]"
                    : "text-5xl sm:text-6xl lg:text-[4.6rem] leading-[1.05]"
                }`}
              >
                {SITE_IDENTITY.name[locale]}
                <span className="mx-3 inline-flex align-middle items-center -space-x-2 rtl:space-x-reverse">
                  <img
                    src="/media/social/ig-CwVltyRSO9d-1.webp"
                    alt=""
                    className="inline-block h-11 w-11 sm:h-14 sm:w-14 rounded-full object-cover object-top border-2 border-white shadow-md"
                  />
                  <img
                    src="/media/derivatives/portrait-02-saudi-media-forum.webp"
                    alt=""
                    className="inline-block h-11 w-11 sm:h-14 sm:w-14 rounded-full object-cover object-top border-2 border-white shadow-md"
                  />
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-[#525866]">
                {SITE_IDENTITY.verifiedTitle[locale]}
              </p>
            </div>

            {/* Clean Apple-Grey Capsule for Her Exact Quote */}
            <div className="rounded-[28px] bg-[#F3F4F7] p-6 sm:p-7 space-y-2">
              <div className="text-[11px] font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                {isAr ? "المسيرة الإعلامية" : "BROADCAST JOURNEY"}
              </div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#090A0F] leading-relaxed">
                {isAr ? `«${NIDAL_SIGNATURE_LINE.ar}»` : `“${NIDAL_SIGNATURE_LINE.en}”`}
              </p>
            </div>

            <p className="max-w-2xl text-sm sm:text-base leading-[1.8] text-[#525866]">
              {CV_BIO_SUMMARY[locale]}
            </p>

            {/* Clean Modern Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#white-reels"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#FF1E2D] px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-[0_14px_30px_rgba(255,30,45,0.28)] transition hover:bg-[#090A0F]"
              >
                <Play className="h-4 w-4 fill-current" />
                <span>{isAr ? "شاهد المختارات المرئية" : "Watch Featured Work"}</span>
              </a>
              <a
                href="#white-career"
                className="inline-flex items-center gap-2 rounded-full bg-[#F3F4F7] px-7 py-4 text-xs sm:text-sm font-bold text-[#090A0F] transition hover:bg-[#E5E7EB]"
              >
                <span>{isAr ? "السيرة الذاتية والخبرات" : "Full Experience & CV"}</span>
              </a>
            </div>
          </div>

          {/* Right / Super-Ellipse Portrait Card with Floating White UI Chips (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-[40px] bg-[#F3F4F7] shadow-[0_30px_80px_rgba(9,10,15,0.10)]">
              <img
                src="/media/social/ig-DJAecEGMcm1-1.webp"
                alt={SITE_IDENTITY.name[locale]}
                className="aspect-[4/5] w-full object-cover object-[50%_20%]"
              />
            </div>

            {/* Floating Frosted White Chip — Top Side */}
            <div className="hidden sm:flex absolute -start-6 top-8 items-center gap-3 rounded-2xl border border-black/[0.06] bg-white/95 px-4 py-3 shadow-[0_20px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0F1] font-mono-code text-sm font-extrabold text-[#FF1E2D]">
                +7
              </span>
              <div>
                <div className="text-xs font-extrabold text-[#090A0F]">
                  {isAr ? "سنوات في العربية والحدث" : "Years @ Al Arabiya"}
                </div>
                <div className="text-[11px] text-[#6B7280]">
                  {isAr ? "دبي والرياض" : "Dubai & Riyadh"}
                </div>
              </div>
            </div>

            {/* Floating Frosted White Chip — Bottom Side */}
            <div className="hidden sm:flex absolute -end-4 bottom-8 items-center gap-3 rounded-2xl border border-black/[0.06] bg-white/95 px-4 py-3 shadow-[0_20px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#090A0F] text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-extrabold text-[#090A0F]">
                  {CV_EDUCATION.degree[locale]}
                </div>
                <div className="text-[11px] text-[#6B7280]">
                  AI & Digital Newsrooms · {CV_EDUCATION.year}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Clean Apple-Style Rounded [32px] Metric Pods */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {CV_IMPACT_STATS.map((st, idx) => (
            <div
              key={idx}
              className="rounded-[32px] bg-[#F3F4F7] p-7 transition hover:bg-[#090A0F] hover:text-white group"
            >
              <div className="font-mono-code text-3xl sm:text-4xl font-extrabold text-[#090A0F] group-hover:text-white">
                {st.value[locale]}
              </div>
              <div className="mt-2 text-sm font-extrabold text-[#FF1E2D]">
                {st.label[locale]}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-[#525866] group-hover:text-white/75">
                {st.detail[locale]}
              </p>
            </div>
          ))}
        </div>

        {/* Broadcast Tech Stack Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-black/[0.07] bg-white p-5">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#090A0F]">
            <Cpu className="h-4 w-4 text-[#FF1E2D]" />
            {isAr
              ? "أنظمة البث والذكاء الاصطناعي في غرفة الأخبار:"
              : "Newsroom & AI Systems:"}
          </span>
          <div className="flex flex-wrap gap-2">
            {CV_NEWSROOM_TOOLS.map((tool) => (
              <span
                key={tool.name}
                className="rounded-full bg-[#F3F4F7] px-4 py-1.5 font-mono-code text-xs font-bold text-[#090A0F]"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Clean Light Video Grid */}
      <section id="white-reels" className="bg-[#F3F4F7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold text-[#FF1E2D] uppercase">
                {isAr ? "الأعمال المرئية" : "ON SCREEN"}
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#090A0F]">
                {isAr ? "مختارات الفيديو والحوارات" : "Featured Video Segments"}
              </h2>
            </div>
            <Link
              href={`/${locale}/on-screen`}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold text-[#090A0F] shadow-xs hover:bg-[#090A0F] hover:text-white transition"
            >
              <span>{isAr ? "الأرشيف الكامل" : "View All"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {videoSelections.map((vid) => (
              <a
                key={vid.slug}
                href={vid.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[32px] bg-white p-3.5 shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-black">
                  <img
                    src={vid.posterAsset}
                    alt={vid.title[locale]}
                    style={{ objectPosition: vid.posterFocalPoint }}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 start-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-[#090A0F] shadow-md">
                    <Play className="h-3 w-3 fill-[#FF1E2D] text-[#FF1E2D]" />
                    {vid.duration}
                  </span>
                </div>
                <div className="p-3 pt-4 space-y-1.5">
                  <div className="text-xs font-bold text-[#FF1E2D]">
                    {vid.broadcasterOrPlatform[locale]}
                  </div>
                  <h3 className="text-base font-extrabold text-[#090A0F] leading-snug">
                    {vid.title[locale]}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#525866] line-clamp-2">
                    {vid.summary[locale]}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Modern Clean Row Career Track */}
      <section id="white-career" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold text-[#FF1E2D] uppercase">
                {isAr ? "السيرة الذاتية الكاملة" : "EXPERIENCE"}
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#090A0F]">
                {isAr ? "الخبرات المهنية والإعلامية" : "Career & Newsroom Roles"}
              </h2>
            </div>
            <a
              href={SITE_IDENTITY.socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#F3F4F7] px-5 py-2.5 text-xs font-bold text-[#090A0F] hover:bg-[#090A0F] hover:text-white transition"
            >
              {isAr ? "حساب لينكدإن ↗" : "LinkedIn Profile ↗"}
            </a>
          </div>

          <div className="space-y-4">
            {CV_EXPERIENCE_TIMELINE.map((exp) => (
              <div
                key={exp.id}
                className="rounded-[32px] border border-black/[0.07] bg-[#F9FAFB] p-6 sm:p-8 grid grid-cols-1 gap-6 lg:grid-cols-12 transition hover:border-black/20 hover:bg-white hover:shadow-lg"
              >
                <div className="lg:col-span-4 space-y-2">
                  <span
                    className={`inline-block rounded-full px-3.5 py-1 text-xs font-bold ${
                      exp.isCurrent
                        ? "bg-[#FF1E2D] text-white"
                        : "bg-white text-[#090A0F] border border-black/10"
                    }`}
                  >
                    {exp.period[locale]}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#090A0F] pt-1">
                    {exp.organization[locale]}
                  </h3>
                  <p className="text-xs font-medium text-[#6B7280]">
                    {exp.location[locale]}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  {exp.roles.map((r, rIdx) => (
                    <div key={rIdx} className="rounded-2xl bg-white p-5 border border-black/[0.05] space-y-2">
                      <div className="text-sm font-extrabold text-[#090A0F]">
                        {r.title[locale]}
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm leading-relaxed text-[#4B505E]">
                        {r.bullets[locale].map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF1E2D]" />
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

      {/* SECTION 4: Rounded [32px] Moments Grid */}
      <section id="white-moments" className="bg-[#F3F4F7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-extrabold text-[#090A0F]">
            {isAr ? "صور ويوميات مختارة" : "Moments & Studio Life"}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {lifeSelections.map((m) => (
              <div key={m.id} className="overflow-hidden rounded-[32px] bg-white p-3 shadow-xs">
                <img
                  src={m.imageWebp}
                  alt={m.title[locale]}
                  style={{ objectPosition: m.focalPoint }}
                  className="aspect-[4/5] w-full rounded-[24px] object-cover"
                />
                <div className="p-3 space-y-1">
                  <div className="text-xs font-bold text-[#FF1E2D]">{m.location[locale]}</div>
                  <div className="text-sm font-extrabold text-[#090A0F]">{m.title[locale]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Jet-Black Modern Pill Footer */}
      <footer className="bg-[#090A0F] py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-xs text-white/70">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-extrabold text-white text-sm">
              {SITE_IDENTITY.name[locale]}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-[#FF1E2D]" />
              {CV_CONTACT_INFO.location[locale]}
            </span>
            <span>·</span>
            <a href={`mailto:${CV_CONTACT_INFO.email}`} dir="ltr" className="text-white underline">
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
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FF1E2D]"
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
              className="font-bold text-white underline decoration-[#FF1E2D] underline-offset-4"
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
