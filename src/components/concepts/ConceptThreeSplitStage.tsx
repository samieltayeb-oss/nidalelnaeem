import React from "react";
import Link from "next/link";
import {
  Play,
  Mail,
  MapPin,
  ExternalLink,
  ArrowUpLeft,
  ArrowUpRight,
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
  NidalSignature,
  SocialPlatformIcon,
} from "@/components/brand/BrandVectors";

/**
 * CONCEPT 03: "THE CINEMATIC SPLIT MONOGRAPH"
 * A24 Documentary × Kinfolk Warm Desert Linen & Espresso
 * Full-viewport 50/50 edge-to-edge split poster:
 * Half full-bleed uncropped portrait, half Warm Desert Linen (#F2EAE0) & Espresso (#1A1412)
 * with Burnished Terracotta Bronze (#B87D4B) and Deep Crimson (#C4202B).
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
      className={`min-h-screen bg-[#F2EAE0] text-[#1A1412] selection:bg-[#C4202B] selection:text-white ${
        isAr ? "font-sans-ar" : "font-sans-en"
      }`}
    >
      {/* FULL-VIEWPORT 50/50 SPLIT CINEMATIC STAGE */}
      <section className="relative grid min-h-[94vh] grid-cols-1 lg:grid-cols-12 border-b border-[#1A1412]/15">
        {/* Literary Linen Half (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-[#F2EAE0] px-6 py-8 sm:px-12 lg:px-14 lg:py-10">
          {/* Minimalist Top Rail */}
          <div className="flex items-center justify-between gap-4 border-b border-[#1A1412]/12 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C4202B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#6E5D4F]">
                {isAr ? "العربية · الحدث" : "AL ARABIYA · AL HADATH"}
              </span>
            </div>

            <div className="flex items-center gap-5 text-xs font-semibold text-[#1A1412]">
              <a href="#monograph-cv" className="hover:text-[#C4202B]">
                {isAr ? "السيرة" : "CV"}
              </a>
              <a href="#monograph-films" className="hover:text-[#C4202B]">
                {isAr ? "الأعمال" : "Works"}
              </a>
              <Link
                href={`/concepts/${isAr ? "en" : "ar"}/3`}
                className="rounded-full border border-[#1A1412]/25 px-3 py-1 text-[11px]"
              >
                {isAr ? "EN" : "عربي"}
              </Link>
            </div>
          </div>

          {/* Center Monumental Narrative */}
          <div className="my-auto py-10 space-y-7">
            <div className="inline-flex items-center gap-3 text-xs font-semibold text-[#B87D4B]">
              <span>01 — MONOGRAPH</span>
              <span className="h-[1px] w-10 bg-[#B87D4B]" />
              <span>{isAr ? "الخرطوم · دبي · الرياض" : "KHARTOUM · DUBAI · RIYADH"}</span>
            </div>

            <h1
              className={`text-[#1A1412] leading-[1.06] ${
                isAr
                  ? "font-serif-ar text-5xl sm:text-6xl xl:text-7xl font-bold"
                  : "font-display-en text-5xl sm:text-6xl xl:text-7xl font-semibold"
              }`}
            >
              {SITE_IDENTITY.name[locale]}
            </h1>

            {/* Vertical Thread Quote */}
            <div className="relative border-s-2 border-[#C4202B] ps-5 py-1 space-y-2">
              <p
                className={`text-[#1A1412] ${
                  isAr
                    ? "font-serif-ar text-2xl sm:text-3xl font-bold leading-[1.5]"
                    : "font-display-en text-2xl sm:text-3xl italic leading-snug"
                }`}
              >
                {isAr
                  ? `«${NIDAL_SIGNATURE_LINE.ar}»`
                  : `“${NIDAL_SIGNATURE_LINE.en}”`}
              </p>
              <p className="text-xs font-semibold tracking-wider text-[#7A6858] uppercase">
                {SITE_IDENTITY.verifiedTitle[locale]}
              </p>
            </div>

            <p className="max-w-xl text-sm sm:text-base leading-[1.85] text-[#4A3F37]">
              {CV_BIO_SUMMARY[locale]}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#monograph-films"
                className="inline-flex items-center gap-2.5 rounded-none bg-[#1A1412] px-7 py-4 text-xs font-bold tracking-wider text-[#F2EAE0] uppercase transition hover:bg-[#C4202B]"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>{isAr ? "قاعة العرض المرئي" : "Enter Screening Room"}</span>
              </a>
              <a
                href={`mailto:${CV_CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2 border border-[#1A1412]/30 px-6 py-4 text-xs font-bold text-[#1A1412] transition hover:border-[#1A1412] hover:bg-white/60"
              >
                <Mail className="h-3.5 w-3.5 text-[#C4202B]" />
                <span>{isAr ? "مراسلة مباشرة" : "Direct Inquiry"}</span>
              </a>
            </div>
          </div>

          {/* Bottom Signature & Mini Stats Strip */}
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-[#1A1412]/12 pt-6">
            <div className="flex gap-7">
              {CV_IMPACT_STATS.slice(0, 3).map((st, idx) => (
                <div key={idx}>
                  <div className="font-display-en text-2xl sm:text-3xl font-bold text-[#1A1412]">
                    {st.value[locale]}
                  </div>
                  <div className="text-[11px] font-medium text-[#6E5D4F]">
                    {st.label[locale]}
                  </div>
                </div>
              ))}
            </div>
            <NidalSignature className="h-auto w-36" color="#1A1412" />
          </div>
        </div>

        {/* Full-Bleed Edge-to-Edge Studio Portrait Half (6 cols) */}
        <div className="lg:col-span-6 relative min-h-[520px] overflow-hidden bg-[#1A1412]">
          <picture>
            <source
              srcSet="/media/derivatives/portrait-02-saudi-media-forum.avif"
              type="image/avif"
            />
            <img
              src="/media/derivatives/portrait-02-saudi-media-forum.webp"
              alt={SITE_IDENTITY.name[locale]}
              className="h-full w-full object-cover object-[50%_20%]"
            />
          </picture>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1412]/85 via-transparent to-[#1A1412]/20" />

          {/* Film-Frame Corner Metadata */}
          <div className={`absolute top-6 end-6 rounded-none border border-[#F2EAE0]/30 bg-[#1A1412]/65 px-4 py-2 text-[11px] font-medium text-[#F2EAE0] backdrop-blur-md ${isAr ? "" : "font-mono-code"}`}>
            {isAr ? "الرياض · المنتدى السعودي للإعلام" : "RIYADH · SAUDI MEDIA FORUM"}
          </div>

          {/* Overlapping Warm Espresso Card at Bottom */}
          <div className="absolute bottom-6 start-6 end-6 sm:end-auto sm:max-w-sm border border-[#F2EAE0]/20 bg-[#1A1412]/90 p-5 text-[#F2EAE0] backdrop-blur-xl space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono-code text-[#D8A47F]">
              <span>{CV_EDUCATION.year} · B.SC. HONS</span>
              <span>AR · EN</span>
            </div>
            <div className="text-sm font-bold">
              {CV_EDUCATION.degree[locale]} — {CV_EDUCATION.university[locale]}
            </div>
            <p className="text-xs leading-relaxed text-[#C9BDB0]">
              {isAr
                ? "خلفية هندسية تدعم توظيف الذكاء الاصطناعي وأنظمة البث الحديثة في غرفة الأخبار."
                : "Software engineering foundation powering AI-assisted journalism and modern broadcast workflows."}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Warm Espresso Charcoal Filmstrip — Broadcasts */}
      <section id="monograph-films" className="bg-[#1A1412] py-20 text-[#F2EAE0]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 space-y-12">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#F2EAE0]/15 pb-6">
            <div>
              <span className="font-mono-code text-xs tracking-widest text-[#D8A47F] uppercase">
                02 — SCREENING ARCHIVE
              </span>
              <h2
                className={`mt-2 text-3xl sm:text-5xl ${
                  isAr ? "font-serif-ar font-bold" : "font-display-en font-semibold"
                }`}
              >
                {isAr ? "مختارات من الشاشة والمنبر" : "On-Air & Stage Anthology"}
              </h2>
            </div>
            <Link
              href={`/${locale}/on-screen`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#D8A47F] hover:text-white"
            >
              <span>{isAr ? "مشاهدة جميع المواد" : "View Full Screening Room"}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {videoSelections.map((vid, idx) => (
              <a
                key={vid.slug}
                href={vid.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block space-y-4 border border-[#F2EAE0]/12 bg-[#231C19] p-4 transition hover:border-[#D8A47F]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={vid.posterAsset}
                    alt={vid.title[locale]}
                    style={{ objectPosition: vid.posterFocalPoint }}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 start-3 bg-[#1A1412]/85 px-2.5 py-1 font-mono-code text-[10px] text-[#D8A47F]">
                    REEL 0{idx + 1} · {vid.duration}
                  </span>
                </div>
                <div className="space-y-2 px-1 pb-2">
                  <div className="text-[11px] text-[#D8A47F]">
                    {vid.broadcasterOrPlatform[locale]}
                  </div>
                  <h3
                    className={`text-xl text-[#F2EAE0] group-hover:text-[#D8A47F] ${
                      isAr ? "font-serif-ar font-bold" : "font-display-en font-semibold"
                    }`}
                  >
                    {vid.title[locale]}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#BFB3A6] line-clamp-2">
                    {vid.summary[locale]}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Museum-Grade CV Monograph on Warm Linen */}
      <section id="monograph-cv" className="bg-[#F2EAE0] py-20 text-[#1A1412] border-b border-[#1A1412]/15">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 space-y-12">
          <div className="space-y-3">
            <span className="font-mono-code text-xs tracking-widest text-[#C4202B] uppercase">
              03 — CURRICULUM VITAE (2015 – 2026)
            </span>
            <h2
              className={`text-3xl sm:text-5xl ${
                isAr ? "font-serif-ar font-bold" : "font-display-en font-semibold"
              }`}
            >
              {isAr
                ? "السجل المهني الكامل عبر الإذاعة والتلفزيون وغرف الأخبار"
                : "Complete Career Record Across Radio, TV & Pan-Arab Newsrooms"}
            </h2>
          </div>

          <div className="space-y-6">
            {CV_EXPERIENCE_TIMELINE.map((entry) => (
              <div
                key={entry.id}
                className="border border-[#1A1412]/15 bg-[#FAF6F0] p-7 sm:p-9 grid grid-cols-1 gap-6 lg:grid-cols-12"
              >
                <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-e border-[#1A1412]/12 pb-4 lg:pb-0 lg:pe-6">
                  <span className={`inline-block bg-[#1A1412] px-3 py-1 text-[11px] font-medium text-[#F2EAE0] ${isAr ? "" : "font-mono-code"}`}>
                    {entry.period[locale]}
                  </span>
                  <h3
                    className={`pt-1 text-2xl text-[#1A1412] ${
                      isAr ? "font-serif-ar font-bold" : "font-display-en font-semibold"
                    }`}
                  >
                    {entry.organization[locale]}
                  </h3>
                  <p className="text-xs font-medium text-[#7A6858]">
                    {entry.location[locale]}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-5">
                  {entry.roles.map((r, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-base font-bold text-[#C4202B]">
                        {r.title[locale]}
                      </h4>
                      <ul className="space-y-1.5 text-sm leading-relaxed text-[#3D332C]">
                        {r.bullets[locale].map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#1A1412]" />
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

          {/* Newsroom Tools Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#1A1412]/15 pt-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6E5D4F]">
              {isAr ? "الأدوات والأنظمة الإخبارية:" : "Newsroom Systems:"}
            </span>
            <div className="flex flex-wrap gap-2">
              {CV_NEWSROOM_TOOLS.map((t) => (
                <span
                  key={t.name}
                  className="border border-[#1A1412]/20 bg-white px-3.5 py-1.5 font-mono-code text-xs font-semibold text-[#1A1412]"
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Gallery Triptych */}
      <section className="bg-[#FAF6F0] py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 space-y-10">
          <h2
            className={`text-3xl sm:text-4xl text-[#1A1412] ${
              isAr ? "font-serif-ar font-bold" : "font-display-en font-semibold"
            }`}
          >
            {isAr ? "مختارات من يومياتها في دبي" : "Selected Visual Notes from Dubai"}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {lifeSelections.map((m) => (
              <div key={m.id} className="space-y-3">
                <img
                  src={m.imageWebp}
                  alt={m.title[locale]}
                  style={{ objectPosition: m.focalPoint }}
                  className="aspect-[4/5] w-full object-cover border border-[#1A1412]/15"
                />
                <div className="text-xs font-bold text-[#C4202B]">
                  {m.location[locale]}
                </div>
                <h3 className="font-serif-ar text-xl font-bold text-[#1A1412]">
                  {m.title[locale]}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warm Espresso Footer */}
      <footer className="bg-[#1A1412] py-12 text-[#F2EAE0]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-xs">
          <div className="space-y-1">
            <div className="font-serif-ar text-lg font-bold">
              {SITE_IDENTITY.name[locale]}
            </div>
            <div className="flex items-center gap-3 text-[#BFB3A6]">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-[#D8A47F]" />
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
                className="flex h-9 w-9 items-center justify-center border border-[#F2EAE0]/25 text-[#F2EAE0] transition hover:bg-[#C4202B] hover:border-[#C4202B]"
              >
                <SocialPlatformIcon platform={p} className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="text-[#BFB3A6]">
            Built by{" "}
            <a
              href="https://nexorayyc.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white underline decoration-[#D8A47F] underline-offset-4"
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
