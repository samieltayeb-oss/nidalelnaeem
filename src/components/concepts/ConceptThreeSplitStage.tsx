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
 * MODERN CONCEPT 03: "FULL-SCREEN MASTERCLASS / STREAMING CINEMA"
 * 100vh Frameless Widescreen Immersive Stage — zero boxes above the fold!
 * Full-bleed studio photography seamlessly blended into deep cinema carbon (#06070A),
 * ultra-bold geometric display type, circular glass play trigger, and translucent bottom stats dock.
 */
export function ConceptThreeSplitStage({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

  const videoSelections = WORK_ITEMS.filter((w) => w.featuredOnScreen).slice(0, 3);
  const lifeSelections = LIFE_MOMENTS.slice(0, 3);

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#06070A] text-white selection:bg-[#E51E2E] selection:text-white ${
        isAr ? "font-modern-ar" : "font-modern-en"
      }`}
    >
      {/* 100VH FRAMELESS IMMERSIVE MASTERCLASS-STYLE HERO */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Ambient Studio Architecture Layer */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          <img
            src="/media/derivatives/studio-glass-architecture.webp"
            alt=""
            className="h-full w-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06070A]/80 via-[#06070A]/55 to-[#06070A]" />
        </div>

        {/* Seamless Unboxed Portrait Positioned Opposite the Text */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute top-0 bottom-0 z-10 w-full lg:w-[56%] ${
            isAr ? "left-0" : "right-0"
          }`}
        >
          <img
            src="/media/derivatives/portrait-01-studio-pinstripe.webp"
            alt=""
            className="h-full w-full object-cover object-[50%_18%] opacity-90"
          />
          {/* Smooth Multi-Stop Cinema Vignette Blending Portrait Seamlessly Into Background */}
          <div
            className="absolute inset-0"
            style={{
              background: isAr
                ? "linear-gradient(to left, #06070A 4%, rgba(6,7,10,0.68) 32%, rgba(6,7,10,0.08) 68%, rgba(6,7,10,0.5) 100%), linear-gradient(to top, #06070A 6%, transparent 38%)"
                : "linear-gradient(to right, #06070A 4%, rgba(6,7,10,0.68) 32%, rgba(6,7,10,0.08) 68%, rgba(6,7,10,0.5) 100%), linear-gradient(to top, #06070A 6%, transparent 38%)",
            }}
          />
        </div>

        {/* Transparent Floating Cinema Top Bar */}
        <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E51E2E] shadow-[0_0_12px_#E51E2E]" />
            <span className="text-base font-extrabold tracking-tight text-white">
              {SITE_IDENTITY.name[locale]}
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-white/80">
            <a href="#cinema-reels" className="hidden sm:inline hover:text-white">
              {isAr ? "البث المرئي" : "Watch"}
            </a>
            <a href="#cinema-career" className="hidden sm:inline hover:text-white">
              {isAr ? "السيرة المهنية" : "Career"}
            </a>
            <Link
              href={`/concepts/${isAr ? "en" : "ar"}/3`}
              className="rounded-full border border-white/20 bg-black/30 px-3.5 py-1.5 backdrop-blur-md hover:bg-white/15"
            >
              {isAr ? "EN" : "عربي"}
            </Link>
            <a
              href={`mailto:${CV_CONTACT_INFO.email}`}
              className="rounded-full bg-white px-5 py-2 font-bold text-[#06070A] transition hover:bg-[#E51E2E] hover:text-white"
            >
              {isAr ? "تواصل" : "Connect"}
            </a>
          </div>
        </header>

        {/* Main Widescreen Cinema Overlay Copy */}
        <div className="relative z-30 mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 my-auto">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-xl">
              <span className="text-[#FF4252]">● LIVE</span>
              <span>·</span>
              <span>
                {isAr
                  ? "العربية والحدث · الرياض ودبي"
                  : "AL ARABIYA & AL HADATH · RIYADH & DUBAI"}
              </span>
            </div>

            <h1
              className={`font-extrabold tracking-tight text-white drop-shadow-2xl ${
                isAr
                  ? "text-5xl sm:text-7xl lg:text-[5.2rem] leading-[1.12]"
                  : "font-syne text-5xl sm:text-7xl lg:text-[5.2rem] leading-[1.02]"
              }`}
            >
              {SITE_IDENTITY.name[locale]}
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-white/95 leading-relaxed">
              «{NIDAL_SIGNATURE_LINE[locale]}»
            </p>

            <p className="max-w-xl text-sm sm:text-base leading-[1.8] text-white/70">
              {CV_BIO_SUMMARY[locale]}
            </p>

            {/* MasterClass-Style Play Trigger + Secondary Action */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#cinema-reels"
                className="group inline-flex items-center gap-4"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E51E2E] text-white shadow-[0_0_40px_rgba(229,30,46,0.6)] transition group-hover:scale-110">
                  <Play className="h-5 w-5 fill-current ms-0.5" />
                </span>
                <span className="text-start">
                  <span className="block text-sm font-extrabold text-white">
                    {isAr ? "شاهد العرض المرئي" : "Watch Broadcast Reel"}
                  </span>
                  <span className="block text-xs text-white/60">
                    {isAr ? "مختارات التقديم والحوارات" : "Selected TV & Digital Segments"}
                  </span>
                </span>
              </a>

              <a
                href="#cinema-career"
                className="rounded-full border border-white/20 bg-white/[0.07] px-6 py-3.5 text-xs font-bold text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
              >
                {isAr ? "استعرض المسيرة الكاملة" : "View Full CV"}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Translucent Frosted Glass Telemetry Bar */}
        <div className="relative z-30 border-t border-white/10 bg-black/45 backdrop-blur-2xl">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 sm:px-10 lg:grid-cols-4">
            {CV_IMPACT_STATS.map((st, idx) => (
              <div key={idx} className="flex items-baseline gap-3">
                <span className="font-mono-code text-2xl sm:text-3xl font-extrabold text-white">
                  {st.value[locale]}
                </span>
                <div>
                  <div className="text-xs font-bold text-white/90">
                    {st.label[locale]}
                  </div>
                  <div className="hidden sm:block text-[11px] text-white/50 truncate max-w-[200px]">
                    {st.detail[locale]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Widescreen Streaming Rail */}
      <section id="cinema-reels" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-[#FF4252] uppercase">
              {isAr ? "قاعة البث المرئي" : "NOW STREAMING"}
            </span>
            <h2 className="mt-1 text-3xl sm:text-5xl font-extrabold text-white">
              {isAr ? "أبرز المواد المرئية واللقاءات" : "Featured Broadcasts & Keynotes"}
            </h2>
          </div>
          <Link
            href={`/${locale}/on-screen`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white/75 hover:text-white"
          >
            <span>{isAr ? "مشاهدة الكل" : "Explore All"}</span>
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {videoSelections.map((vid) => (
            <a
              key={vid.slug}
              href={vid.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl"
            >
              <img
                src={vid.posterAsset}
                alt={vid.title[locale]}
                style={{ objectPosition: vid.posterFocalPoint }}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                    {vid.broadcasterOrPlatform[locale]}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E51E2E] text-white shadow-lg">
                    <Play className="h-3.5 w-3.5 fill-current" />
                  </span>
                </div>
                <div>
                  <span className="font-mono-code text-[11px] text-[#FF6B78]">
                    {vid.duration}
                  </span>
                  <h3 className="mt-1 text-lg font-extrabold text-white leading-snug">
                    {vid.title[locale]}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 3: Modern Minimal Laser-Line Career Section */}
      <section id="cinema-career" className="border-t border-white/10 bg-[#0A0C12] py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 space-y-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-[#FF4252] uppercase">
                {isAr ? "السجل الوظيفي · 2015 – 2026" : "EXPERIENCE & TECH STACK"}
              </span>
              <h2 className="mt-1 text-3xl sm:text-5xl font-extrabold text-white">
                {isAr ? "المسيرة المهنية وأدوات غرفة الأخبار" : "Career Trajectory & Broadcast Tech"}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E51E2E]/20 px-3.5 py-1.5 text-xs font-bold text-[#FF6B78]">
                <GraduationCap className="h-3.5 w-3.5" />
                {CV_EDUCATION.degree[locale]}
              </span>
              {CV_NEWSROOM_TOOLS.slice(0, 4).map((t) => (
                <span
                  key={t.name}
                  className="inline-flex items-center gap-1 rounded-full bg-white/8 px-3.5 py-1.5 font-mono-code text-xs font-semibold text-white"
                >
                  <Cpu className="h-3 w-3 text-[#FF4252]" />
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          <div className="relative border-s-2 border-white/15 ps-6 sm:ps-10 space-y-10">
            {CV_EXPERIENCE_TIMELINE.map((exp) => (
              <div key={exp.id} className="relative space-y-4">
                <span
                  className={`absolute -start-[31px] sm:-start-[47px] top-1.5 h-4 w-4 rounded-full border-4 border-[#0A0C12] ${
                    exp.isCurrent ? "bg-[#E51E2E] shadow-[0_0_15px_#E51E2E]" : "bg-white/40"
                  }`}
                />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold text-[#FF6B78]">
                    {exp.period[locale]}
                  </span>
                  <span className="text-xs text-white/45">· {exp.location[locale]}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {exp.organization[locale]}
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {exp.roles.map((r, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl border border-white/8 bg-white/[0.03] p-5 space-y-2 ${
                        exp.roles.length === 1 ? "md:col-span-2" : ""
                      }`}
                    >
                      <div className="text-sm font-bold text-white">{r.title[locale]}</div>
                      <ul className="space-y-1.5 text-xs leading-relaxed text-white/70">
                        {r.bullets[locale].map((b, bIdx) => (
                          <li key={bIdx}>• {b}</li>
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

      {/* SECTION 4: Frameless Rounded-3xl Visual Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          {isAr ? "من كواليس العمل واليوميات" : "Behind the Scenes & Moments"}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {lifeSelections.map((m) => (
            <div key={m.id} className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src={m.imageWebp}
                alt={m.title[locale]}
                style={{ objectPosition: m.focalPoint }}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-[#FF6B78]">{m.location[locale]}</span>
                <h3 className="mt-1 text-lg font-extrabold text-white">{m.title[locale]}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sleek Cinema Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-xs text-white/60">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-extrabold text-white">{SITE_IDENTITY.name[locale]}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-[#E51E2E]" />
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
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#E51E2E]"
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
              className="font-bold text-white underline decoration-[#E51E2E] underline-offset-4"
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
