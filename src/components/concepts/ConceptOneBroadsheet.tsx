import React from "react";
import Link from "next/link";
import {
  Play,
  Mail,
  MapPin,
  Sparkles,
  ArrowUpLeft,
  ArrowUpRight,
  Radio,
  Tv,
  Cpu,
  GraduationCap,
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
import { SocialPlatformIcon } from "@/components/brand/BrandVectors";

/**
 * MODERN CONCEPT 01: "LUMINA SPATIAL GLASS" (2026 Framer / Linear / Apple Vision UI)
 * Zero serif, zero beige/gold! Ultra-clean Alexandria + Plus Jakarta Sans geometric display,
 * soft aurora light mesh (#05060B + ruby/violet ambient glow), centered hero with
 * a 3-card spatial perspective portrait showcase, pill marquee, and sleek glass timeline.
 */
export function ConceptOneBroadsheet({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

  const videoSelections = WORK_ITEMS.filter((w) => w.featuredOnScreen).slice(0, 3);
  const lifeSelections = LIFE_MOMENTS.slice(0, 3);

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#05060B] text-white selection:bg-[#FF2438] selection:text-white overflow-x-hidden ${
        isAr ? "font-modern-ar" : "font-modern-en"
      }`}
    >
      {/* 2026 Soft Spatial Aurora Mesh Orbs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[540px] w-[960px] rounded-full bg-gradient-to-r from-[#FF2438]/20 via-[#7C3AED]/15 to-[#3B82F6]/15 blur-[130px]" />
        <div className="absolute top-[45%] -start-32 h-[420px] w-[420px] rounded-full bg-[#FF2438]/10 blur-[140px]" />
        <div className="absolute top-[35%] -end-32 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[140px]" />
      </div>

      {/* Floating Centered Capsule Glass Navbar */}
      <header className="sticky top-5 z-40 flex justify-center px-4">
        <div className="flex h-14 w-full max-w-5xl items-center justify-between rounded-full border border-white/12 bg-white/[0.04] px-3 sm:px-5 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <a href="#top" className="flex items-center gap-2.5 ps-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF2438] to-[#FF6B78] text-xs font-extrabold text-white shadow-lg shadow-[#FF2438]/30">
              N
            </span>
            <span className="text-sm font-bold tracking-tight text-white">
              {SITE_IDENTITY.name[locale]}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-white/70">
            <a href="#work" className="hover:text-white transition">
              {isAr ? "الأعمال المرئية" : "Broadcasts"}
            </a>
            <a href="#experience" className="hover:text-white transition">
              {isAr ? "الخبرات" : "Experience"}
            </a>
            <a href="#stack" className="hover:text-white transition">
              {isAr ? "التقنية والذكاء الاصطناعي" : "AI & Tech"}
            </a>
            <a href="#moments" className="hover:text-white transition">
              {isAr ? "اليوميات" : "Moments"}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={`/concepts/${isAr ? "en" : "ar"}/1`}
              className="rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-white/90 hover:bg-white/15 transition"
            >
              {isAr ? "EN" : "عربي"}
            </Link>
            <a
              href={`mailto:${CV_CONTACT_INFO.email}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#05060B] transition hover:bg-[#FF2438] hover:text-white"
            >
              <span>{isAr ? "تواصل معي" : "Let’s Talk"}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* CENTER-STAGE SPATIAL HERO */}
      <section id="top" className="relative z-10 mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          {/* Live Glass Status Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2438] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF2438]" />
            </span>
            <span>
              {isAr
                ? "مجموعة MBC · قناتي العربية والحدث · الرياض"
                : "MBC Group · Al Arabiya & Al Hadath · Riyadh"}
            </span>
          </div>

          {/* Giant Modern Geometric Headline */}
          <h1
            className={`font-extrabold tracking-tight bg-gradient-to-b from-white via-white to-white/65 bg-clip-text text-transparent ${
              isAr
                ? "text-4xl sm:text-6xl lg:text-7xl leading-[1.18] py-1"
                : "text-5xl sm:text-7xl lg:text-[5.2rem] leading-[1.05]"
            }`}
          >
            {SITE_IDENTITY.name[locale]}
          </h1>

          {/* Modern Glowing Pill Quote */}
          <div className="mx-auto inline-flex max-w-3xl items-center gap-3 rounded-2xl border border-white/15 bg-gradient-to-r from-[#FF2438]/15 via-white/[0.06] to-indigo-500/15 px-5 py-3.5 backdrop-blur-xl shadow-2xl">
            <Radio className="hidden sm:block h-4 w-4 shrink-0 text-[#FF2438]" />
            <p className="text-base sm:text-xl font-semibold text-white leading-relaxed">
              {NIDAL_SIGNATURE_LINE[locale]}
            </p>
            <Tv className="hidden sm:block h-4 w-4 shrink-0 text-indigo-400" />
          </div>

          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-[1.8] text-slate-400">
            {CV_BIO_SUMMARY[locale]}
          </p>

          {/* Dual Modern Pill Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#FF2438] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_12px_35px_rgba(255,36,56,0.4)] transition hover:scale-[1.02] hover:bg-[#e31b2e]"
            >
              <Play className="h-4 w-4 fill-current" />
              <span>{isAr ? "شاهد الأعمال المرئية" : "Watch Featured Reels"}</span>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/12"
            >
              <span>{isAr ? "استعراض المسيرة الكاملة" : "Explore Career & CV"}</span>
            </a>
          </div>
        </div>

        {/* 3-CARD FANNED SPATIAL PORTRAIT SHOWCASE */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12 items-center">
          {/* Left Tilted Card */}
          <div className="md:col-span-4 md:-rotate-2 md:translate-y-4 transition duration-500 hover:rotate-0 hover:translate-y-0">
            <div className="group relative overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.04] p-2.5 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                <img
                  src="/media/social/ig-CwVltyRSO9d-1.webp"
                  alt=""
                  className="h-full w-full object-cover object-[50%_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                    {isAr ? "قناة العربية · دبي" : "Al Arabiya · Dubai"}
                  </span>
                  <span className="font-mono-code text-xs font-bold text-white/90">
                    +50 Channels
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Hero Studio Card */}
          <div className="md:col-span-4 z-20 md:scale-105">
            <div className="relative overflow-hidden rounded-[34px] border border-white/25 bg-gradient-to-b from-white/15 to-white/[0.03] p-2.5 shadow-[0_30px_90px_rgba(255,36,56,0.22)] backdrop-blur-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px]">
                <img
                  src="/media/social/ig-DJAecEGMcm1-1.webp"
                  alt={SITE_IDENTITY.name[locale]}
                  className="h-full w-full object-cover object-[50%_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060B] via-transparent to-transparent" />
                <div className="absolute top-4 start-4 rounded-full bg-[#FF2438] px-3.5 py-1 text-[11px] font-bold text-white shadow-lg">
                  {isAr ? "استوديو الأخبار · مباشر" : "LIVE STUDIO"}
                </div>
                <div className="absolute bottom-4 inset-x-4 rounded-2xl border border-white/15 bg-black/65 p-3.5 backdrop-blur-xl">
                  <div className="text-xs font-bold text-white">
                    {SITE_IDENTITY.verifiedTitle[locale]}
                  </div>
                  <div className="mt-0.5 text-[11px] text-slate-300">
                    {isAr ? "+7 سنوات في العربية والحدث" : "7+ Years at Al Arabiya & Al Hadath"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Tilted Card */}
          <div className="md:col-span-4 md:rotate-2 md:translate-y-4 transition duration-500 hover:rotate-0 hover:translate-y-0">
            <div className="group relative overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.04] p-2.5 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                <img
                  src="/media/derivatives/portrait-02-saudi-media-forum.webp"
                  alt=""
                  className="h-full w-full object-cover object-[50%_22%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                    {isAr ? "الرياض · السعودية" : "Riyadh · KSA"}
                  </span>
                  <span className="font-mono-code text-xs font-bold text-white/90">
                    AR · EN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Floating Glass Impact Metrics */}
        <div id="stack" className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {CV_IMPACT_STATS.map((st, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="font-mono-code text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                {st.value[locale]}
              </div>
              <div className="mt-2 text-sm font-bold text-white">
                {st.label[locale]}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                {st.detail[locale]}
              </p>
            </div>
          ))}
        </div>

        {/* Modern Pill Ribbon: AI + Newsroom Tech + Software Engineering */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 rounded-3xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF2438]/15 px-3.5 py-1.5 text-xs font-bold text-[#FF6B78]">
            <GraduationCap className="h-3.5 w-3.5" />
            {CV_EDUCATION.degree[locale]} ({CV_EDUCATION.year})
          </span>
          {CV_NEWSROOM_TOOLS.map((tool) => (
            <span
              key={tool.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 font-mono-code text-xs font-semibold text-slate-200"
            >
              <Cpu className="h-3 w-3 text-indigo-400" />
              {tool.name}
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 2: Featured Video Cards */}
      <section id="work" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B78]">
              <Sparkles className="h-3.5 w-3.5" />
              {isAr ? "على الشاشة والمنصات" : "FEATURED REELS & TALKS"}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
              {isAr ? "مختارات مرئية وحوارية" : "Selected Broadcasts & Talks"}
            </h2>
          </div>
          <Link
            href={`/${locale}/on-screen`}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-xs font-bold text-white hover:bg-white/12"
          >
            <span>{isAr ? "عرض كل الفيديوهات" : "All Videos"}</span>
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
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-black">
                <img
                  src={vid.posterAsset}
                  alt={vid.title[locale]}
                  style={{ objectPosition: vid.posterFocalPoint }}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 start-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-extrabold text-[#05060B]">
                  <Play className="h-3 w-3 fill-[#FF2438] text-[#FF2438]" />
                  {vid.duration}
                </span>
              </div>
              <div className="p-3 pt-4 space-y-2">
                <div className="text-xs font-semibold text-[#FF6B78]">
                  {vid.broadcasterOrPlatform[locale]}
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {vid.title[locale]}
                </h3>
                <p className="text-xs leading-relaxed text-slate-400 line-clamp-2">
                  {vid.summary[locale]}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 3: Modern Glowing Career Timeline */}
      <section id="experience" className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
            {isAr ? "المسيرة المهنية · 2015 – 2026" : "CAREER TIMELINE · 2015 – 2026"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isAr ? "من إذاعة هلا 96 إلى العربية والحدث" : "From Hala 96 FM to Al Arabiya & Al Hadath"}
          </h2>
        </div>

        <div className="space-y-4">
          {CV_EXPERIENCE_TIMELINE.map((exp) => (
            <div
              key={exp.id}
              className={`rounded-[28px] border p-6 sm:p-8 backdrop-blur-xl transition ${
                exp.isCurrent
                  ? "border-[#FF2438]/40 bg-gradient-to-r from-[#FF2438]/10 via-white/[0.04] to-indigo-500/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-white">
                    {exp.organization[locale]}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{exp.location[locale]}</p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold text-white">
                  {exp.period[locale]}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {exp.roles.map((r, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border border-white/8 bg-black/30 p-4 space-y-2 ${
                      exp.roles.length === 1 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="text-sm font-bold text-white">{r.title[locale]}</div>
                    <ul className="space-y-1.5 text-xs leading-relaxed text-slate-300">
                      {r.bullets[locale].map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2438]" />
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
      </section>

      {/* SECTION 4: Moments */}
      <section id="moments" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          {isAr ? "لقطات ويوميات" : "Moments & Reflections"}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {lifeSelections.map((m) => (
            <div
              key={m.id}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-3"
            >
              <img
                src={m.imageWebp}
                alt={m.title[locale]}
                style={{ objectPosition: m.focalPoint }}
                className="aspect-[4/5] w-full rounded-[20px] object-cover"
              />
              <div className="p-3 space-y-1">
                <div className="text-[11px] font-semibold text-[#FF6B78]">
                  {m.location[locale]}
                </div>
                <div className="text-sm font-bold text-white">{m.title[locale]}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sleek Glass Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-white">{SITE_IDENTITY.name[locale]}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-[#FF2438]" />
              {CV_CONTACT_INFO.location[locale]}
            </span>
            <span>·</span>
            <a href={`mailto:${CV_CONTACT_INFO.email}`} dir="ltr" className="text-white hover:underline">
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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:bg-[#FF2438] hover:border-[#FF2438]"
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
              className="font-bold text-white hover:text-[#FF6B78]"
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
