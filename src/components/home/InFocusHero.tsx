"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight, Sparkles, Eye, Play } from "lucide-react";
import { Locale, SITE_IDENTITY } from "@/data/portfolio-data";
import { CV_IMPACT_STATS, NIDAL_SIGNATURE_LINE } from "@/data/cv-profile-data";
import {
  AlHadathMark,
  NidalSignature,
  SocialPlatformIcon,
} from "@/components/brand/BrandVectors";

interface InFocusHeroProps {
  locale: Locale;
}

export function InFocusHero({ locale }: InFocusHeroProps) {
  const isAr = locale === "ar";
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [spotlightActive, setSpotlightActive] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const noHover = window.matchMedia("(hover: none)").matches;
      if (reduced || noHover) {
        setSpotlightActive(false);
      }
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!spotlightActive || !sectionRef.current) return;
    if (e.pointerType === "touch") return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (sectionRef.current) {
        sectionRef.current.style.setProperty("--spot-x", `${x}px`);
        sectionRef.current.style.setProperty("--spot-y", `${y}px`);
      }
    });
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      data-spotlight={spotlightActive ? "active" : "static"}
      style={
        {
          "--spot-x": isAr ? "36%" : "64%",
          "--spot-y": "42%",
        } as React.CSSProperties
      }
      aria-label={
        isAr
          ? "المشهد الافتتاحي: نضال النعيم"
          : "Opening Scene: Nidal Elnaeem"
      }
      className="relative w-full overflow-hidden bg-[#07090E] pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Ambient Obsidian & Broadcast Studio Backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_15%,rgba(212,190,150,0.09),transparent_65%),radial-gradient(800px_circle_at_85%_25%,rgba(230,36,47,0.08),transparent_65%)]" />

        <picture>
          <source srcSet="/media/derivatives/studio-globe-detail.avif" type="image/avif" />
          <img
            src="/media/derivatives/studio-globe-detail.webp"
            alt=""
            className="absolute top-1/2 -translate-y-1/2 -left-24 sm:left-0 h-[105%] w-auto max-w-none object-cover opacity-[0.14] mix-blend-screen select-none"
          />
        </picture>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]" />
      </div>

      {/* Interactive Studio Spotlight Layer */}
      <div
        className="in-focus-spotlight-layer pointer-events-none absolute inset-0 z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--spot-x,50%)_var(--spot-y,42%),rgba(212,190,150,0.2)_0%,rgba(19,25,38,0.4)_48%,transparent_80%)]" />

        <picture>
          <source srcSet="/media/derivatives/studio-globe-detail.avif" type="image/avif" />
          <img
            src="/media/derivatives/studio-globe-detail.webp"
            alt=""
            className="absolute top-1/2 -translate-y-1/2 -left-24 sm:left-0 h-[105%] w-auto max-w-none object-cover opacity-65 contrast-115 select-none"
          />
        </picture>
      </div>

      {/* Foreground Hero Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Identity & Signature Arc Column */}
          <div className="lg:col-span-7 space-y-7 editorial-reveal">
            {/* Broadcaster & Location Pill */}
            <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-[#D4BE96]/28 bg-[#0E131F]/90 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E6242F] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E6242F]" />
              </span>
              <AlHadathMark className="h-4 w-auto" />
              <span className="h-3.5 w-[1px] bg-white/15" aria-hidden="true" />
              <span className="text-xs font-medium text-[#D4BE96]">
                {isAr
                  ? "مجموعة MBC · قناتي العربية والحدث"
                  : "MBC Group · Al Arabiya & Al Hadath"}
              </span>
            </div>

            {/* Name + Calligraphic Signature */}
            <div className="space-y-4">
              <h1
                className={`text-[#F7F4EE] ${
                  isAr
                    ? "font-display-ar text-4xl sm:text-6xl lg:text-[4.35rem] font-bold leading-[1.12]"
                    : "font-display-en text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[0.03em] leading-[1.04]"
                }`}
              >
                {SITE_IDENTITY.name[locale]}
              </h1>

              <div className="flex flex-wrap items-center gap-5">
                <NidalSignature
                  className="w-48 sm:w-64 h-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
                  color="#D4BE96"
                />
                <span className="hidden sm:inline-block h-5 w-[1px] bg-white/15" />
                <span className="text-xs sm:text-sm font-medium text-[#D6CFC2]">
                  {SITE_IDENTITY.verifiedTitle[locale]}
                </span>
              </div>
            </div>

            {/* Nidal's Own Signature Line — Centerpiece Editorial Statement */}
            <div className="relative overflow-hidden rounded-2xl border border-[#D4BE96]/30 bg-gradient-to-r from-[#121826]/95 via-[#0E131F]/95 to-[#121826]/80 p-5 sm:p-6 shadow-xl">
              <span
                className="absolute inset-y-0 start-0 w-1 bg-[#E6242F]"
                aria-hidden="true"
              />
              <p
                className={`text-[#F7F4EE] ${
                  isAr
                    ? "font-serif-ar text-xl sm:text-2xl lg:text-[1.7rem] font-bold leading-[1.6]"
                    : "font-display-en text-2xl sm:text-3xl italic leading-[1.35]"
                }`}
              >
                «{NIDAL_SIGNATURE_LINE[locale]}»
              </p>
            </div>

            {/* Concise Bio Summary from CV */}
            <p className="max-w-2xl text-sm sm:text-base lg:text-[1.05rem] leading-[1.85] text-[#D6CFC2]">
              {SITE_IDENTITY.heroOpening.shortIntro[locale]}
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href={`/${locale}/on-screen`}
                className="group inline-flex flex-1 sm:flex-initial items-center justify-center gap-2.5 rounded-full bg-[#E6242F] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(230,36,47,0.32)] transition-all hover:bg-[#cf1d27] hover:shadow-[0_14px_38px_rgba(230,36,47,0.45)]"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>{SITE_IDENTITY.heroOpening.primaryCta[locale]}</span>
              </Link>

              <Link
                href={`/${locale}/journey`}
                className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-full border border-[#D4BE96]/40 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-[#F7F4EE] transition-all hover:border-[#D4BE96] hover:bg-white/[0.09]"
              >
                <span>{SITE_IDENTITY.heroOpening.secondaryCta[locale]}</span>
                {isAr ? (
                  <ArrowUpLeft className="h-4 w-4 text-[#D4BE96]" />
                ) : (
                  <ArrowUpRight className="h-4 w-4 text-[#D4BE96]" />
                )}
              </Link>

              <Link
                href={`/${locale}/life`}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/12 bg-transparent px-5 py-3.5 text-sm font-medium text-[#D4BE96] transition hover:border-[#D4BE96]/50 hover:text-white"
              >
                <span>{isAr ? "حياتها ويومياتها" : "Life & Moments"}</span>
              </Link>
            </div>

            {/* Social Profiles + Studio Light Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-2">
                {(["facebook", "instagram", "x", "linkedin"] as const).map((platform) => {
                  const social = SITE_IDENTITY.socialLinks[platform];
                  return (
                    <a
                      key={platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label[locale]}
                      title={`${social.label[locale]} (${social.handle})`}
                      className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-3.5 py-2 text-xs text-[#D6CFC2] transition-all hover:border-[#D4BE96] hover:bg-white/[0.08] hover:text-white"
                    >
                      <SocialPlatformIcon
                        platform={platform}
                        className="h-3.5 w-3.5 text-[#D4BE96] transition-colors group-hover:text-white"
                      />
                      <span className="hidden sm:inline">{social.label[locale]}</span>
                    </a>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setSpotlightActive((prev) => !prev)}
                aria-pressed={spotlightActive}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-[#949BA8] transition hover:border-[#D4BE96]/50 hover:text-white"
              >
                {spotlightActive ? (
                  <Sparkles className="h-3 w-3 text-[#D4BE96]" />
                ) : (
                  <Eye className="h-3 w-3 text-[#949BA8]" />
                )}
                <span>
                  {spotlightActive
                    ? SITE_IDENTITY.heroOpening.spotlightToggleOn[locale]
                    : SITE_IDENTITY.heroOpening.spotlightToggleOff[locale]}
                </span>
              </button>
            </div>
          </div>

          {/* Editorial Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[430px] lg:max-w-[460px]">
              {/* Soft warm halo behind portrait */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#E6242F]/18 via-[#D4BE96]/14 to-transparent blur-2xl"
              />

              <figure className="relative overflow-hidden rounded-2xl border border-[#D4BE96]/30 bg-[#0D111A] shadow-[0_28px_70px_rgba(0,0,0,0.75)]">
                <picture>
                  <source
                    srcSet="/media/derivatives/portrait-04-broadcast-yellow-blazer-480w.avif 480w, /media/derivatives/portrait-04-broadcast-yellow-blazer-800w.avif 800w, /media/derivatives/portrait-04-broadcast-yellow-blazer.avif 960w"
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 430px, 460px"
                    type="image/avif"
                  />
                  <source
                    srcSet="/media/derivatives/portrait-04-broadcast-yellow-blazer-480w.webp 480w, /media/derivatives/portrait-04-broadcast-yellow-blazer-800w.webp 800w, /media/derivatives/portrait-04-broadcast-yellow-blazer.webp 960w"
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 430px, 460px"
                    type="image/webp"
                  />
                  <img
                    src="/media/derivatives/portrait-04-broadcast-yellow-blazer.webp"
                    alt={
                      isAr
                        ? "نضال النعيم — كاتبة أولى لمنصات التواصل ومقدمة أخبار ومراسلة"
                        : "Nidal Elnaeem — Senior Social Media Writer, News Presenter, and Reporter"
                    }
                    width={960}
                    height={960}
                    fetchPriority="high"
                    decoding="sync"
                    className="aspect-[4/4.4] w-full object-cover object-[52%_20%]"
                  />
                </picture>

                <figcaption className="flex items-center justify-between border-t border-white/10 bg-[#0A0E17]/95 px-5 py-3.5 text-xs">
                  <div className="flex items-center gap-2 text-[#F7F4EE]">
                    <span className="h-2 w-2 rounded-full bg-[#E6242F]" />
                    <span className="font-medium">
                      {isAr ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                    </span>
                  </div>
                  <span className="font-medium text-[#D4BE96]">
                    {isAr ? "العربية · الحدث" : "Al Arabiya · Al Hadath"}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Career Stature & Impact Ribbon (CV-Verified Metrics) */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-18 lg:grid-cols-4">
          {CV_IMPACT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 sm:p-6 backdrop-blur-md transition-colors hover:border-[#D4BE96]/35 hover:bg-white/[0.05]"
            >
              <div className="font-display-ar text-2xl sm:text-3xl font-bold text-[#D4BE96]">
                {stat.value[locale]}
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#F7F4EE]">
                {stat.label[locale]}
              </div>
              <p className="mt-1 hidden sm:block text-xs leading-relaxed text-[#949BA8]">
                {stat.detail[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
