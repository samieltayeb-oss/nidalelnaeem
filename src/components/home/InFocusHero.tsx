"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight, Sparkles, Eye } from "lucide-react";
import { Locale, SITE_IDENTITY } from "@/data/portfolio-data";
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
    // Respect prefers-reduced-motion or touch-only devices by defaulting to static lit mode
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
          "--spot-y": "44%",
        } as React.CSSProperties
      }
      aria-label={
        isAr
          ? "المشهد الافتتاحي: نضال النعيم في دائرة الضوء"
          : "Opening Scene: Nidal Elnaeem In Focus"
      }
      className="relative min-h-[calc(100vh-4.25rem)] w-full overflow-hidden border-b border-[#F4EEE3]/10 bg-[#060E16] flex items-center"
    >
      {/* ===================================================================
          PLANE 0: Base Ambient Midnight Newsroom Architecture (Always Visible)
          =================================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle base studio gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0F2336_0%,#060E16_72%)]" />

        {/* Sculpted broadcast globe in ambient shadow (used ONLY in Home opening scene) */}
        <picture>
          <source srcSet="/media/derivatives/studio-globe-detail.avif" type="image/avif" />
          <img
            src="/media/derivatives/studio-globe-detail.webp"
            alt=""
            className={`absolute top-1/2 -translate-y-1/2 h-[108%] w-auto max-w-none object-cover opacity-22 mix-blend-screen select-none ${
              isAr ? "-left-24 sm:left-0" : "-left-24 sm:left-0"
            }`}
          />
        </picture>

        {/* Glass architectural vertical panes */}
        <img
          src="/media/derivatives/studio-glass-architecture.webp"
          alt=""
          className="absolute inset-y-0 left-1/3 h-full w-1/3 object-cover opacity-20 mix-blend-lighten select-none"
        />

        {/* Fine broadcast architectural grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,238,227,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,238,227,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem]" />

        {/* Signature Al Hadath crimson diagonal horizon line inspired by cover LI.png */}
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-70"
        >
          <line
            x1="0"
            y1="835"
            x2="1440"
            y2="680"
            stroke="#ED2530"
            strokeWidth="1.5"
            strokeOpacity="0.65"
          />
          <line
            x1="0"
            y1="110"
            x2="980"
            y2="240"
            stroke="#C8B692"
            strokeWidth="1"
            strokeOpacity="0.22"
          />
        </svg>
      </div>

      {/* ===================================================================
          PLANE 1: Interactive Studio Spotlight Reveal Layer (Mouse-Following)
          Reveals full newsroom texture, sculpted globe detail & warm rim light
          =================================================================== */}
      <div
        className="in-focus-spotlight-layer pointer-events-none absolute inset-0 z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* Warm studio key-light glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--spot-x,50%)_var(--spot-y,44%),rgba(200,182,146,0.22)_0%,rgba(16,38,58,0.45)_48%,transparent_80%)]" />

        {/* Full-clarity sculpted broadcast globe revealed under the spotlight */}
        <picture>
          <source srcSet="/media/derivatives/studio-globe-detail.avif" type="image/avif" />
          <img
            src="/media/derivatives/studio-globe-detail.webp"
            alt=""
            className="absolute top-1/2 -translate-y-1/2 -left-24 sm:left-0 h-[108%] w-auto max-w-none object-cover opacity-80 contrast-115 select-none"
          />
        </picture>

        {/* Glass newsroom reflections */}
        <img
          src="/media/derivatives/studio-glass-architecture.webp"
          alt=""
          className="absolute inset-y-0 left-1/3 h-full w-1/3 object-cover opacity-65 contrast-125 select-none"
        />

        {/* Concentric optical studio calibration rings revealed in the background */}
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="420"
            cy="450"
            r="260"
            stroke="#C8B692"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
          <circle
            cx="420"
            cy="450"
            r="350"
            stroke="#C8B692"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
          <circle
            cx="420"
            cy="450"
            r="440"
            stroke="#ED2530"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="835"
            x2="1440"
            y2="680"
            stroke="#ED2530"
            strokeWidth="2.5"
            strokeOpacity="0.95"
          />
        </svg>
      </div>

      {/* ===================================================================
          PLANE 2: Always-Lit Foreground Identity & Real Portrait
          100% visible, sharp, and readable without hovering
          =================================================================== */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Copy & Signature Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Professional Context Bar with exact Al Hadath vector logo */}
            <div className="inline-flex flex-wrap items-center gap-3 rounded border border-[#F4EEE3]/15 bg-[#091622]/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">
              <AlHadathMark className="h-5 w-auto" />
              <span className="h-3.5 w-[1px] bg-[#F4EEE3]/20" aria-hidden="true" />
              <span
                className={`text-xs font-medium text-[#C8B692] ${
                  isAr ? "" : "tracking-wider"
                }`}
              >
                {SITE_IDENTITY.heroOpening.editionTag[locale]}
              </span>
            </div>

            {/* Primary Name & Calligraphic Vector Signature */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span
                  className="mt-2 h-12 w-[3px] shrink-0 bg-[#ED2530] sm:h-16"
                  aria-hidden="true"
                />
                <div>
                  <h1
                    className={`text-[#F4EEE3] leading-[1.08] ${
                      isAr
                        ? "font-display-ar text-4xl sm:text-6xl lg:text-7xl font-bold"
                        : "font-display-en text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[0.06em] uppercase"
                    }`}
                  >
                    {SITE_IDENTITY.name[locale]}
                  </h1>

                  {/* Gently appearing vector signature from workspace SVG */}
                  <div className="mt-3 pt-1">
                    <NidalSignature
                      className="w-56 sm:w-72 md:w-80 h-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                      color="#F4EEE3"
                    />
                  </div>
                </div>
              </div>

              {/* Verified Role — Exact Owner-Confirmed Title */}
              <div className="pt-2">
                <p
                  className={`inline-block border-b border-[#C8B692]/35 pb-2 text-sm sm:text-base font-medium text-[#F4EEE3] ${
                    isAr ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {SITE_IDENTITY.verifiedTitle[locale]}
                </p>
              </div>
            </div>

            {/* Short, Truthful Introduction */}
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[#D1C7B8]">
              {SITE_IDENTITY.heroOpening.shortIntro[locale]}
            </p>

            {/* Clear Primary Invitation to Explore Her Work */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                href={`/${locale}/on-screen`}
                className="group inline-flex flex-1 sm:flex-initial items-center justify-center gap-2.5 rounded bg-[#ED2530] px-5 sm:px-6 py-3.5 text-sm font-semibold text-[#F4EEE3] shadow-[0_10px_30px_rgba(237,37,48,0.28)] transition hover:bg-[#d41f2a]"
              >
                <span>{SITE_IDENTITY.heroOpening.primaryCta[locale]}</span>
                {isAr ? (
                  <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                ) : (
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </Link>

              <Link
                href={`/${locale}/journey`}
                className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded border border-[#C8B692]/40 bg-[#0B1926]/85 px-4 sm:px-5 py-3.5 text-sm font-medium text-[#F4EEE3] transition hover:border-[#C8B692] hover:bg-[#122638]"
              >
                <span>{SITE_IDENTITY.heroOpening.secondaryCta[locale]}</span>
              </Link>

              <Link
                href={`/${locale}/life`}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded border border-[#F4EEE3]/15 bg-[#091622]/85 px-4 py-3 text-sm font-medium text-[#C8B692] transition hover:border-[#C8B692]/60 hover:text-[#F4EEE3]"
              >
                <span>{isAr ? "حياتها ويومياتها" : "Life & Moments"}</span>
              </Link>
            </div>

            {/* Custom Brand Social Icons Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <span className="text-xs text-[#93A3B1] me-1">
                {isAr ? "الحسابات الرسمية:" : "Official Profiles:"}
              </span>
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
                    className="group inline-flex items-center gap-2 rounded-sm border border-[#C8B692]/30 bg-[#091622]/90 px-3 py-1.5 text-xs text-[#D1C7B8] transition-all hover:border-[#C8B692] hover:bg-[#122638] hover:text-[#F4EEE3]"
                  >
                    <SocialPlatformIcon
                      platform={platform}
                      className="h-3.5 w-3.5 text-[#C8B692] transition-colors group-hover:text-[#F4EEE3]"
                    />
                    <span className="hidden sm:inline">{social.label[locale]}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Always-Lit Real Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-[440px]">
              {/* Broadcast optical corner brackets around the portrait */}
              <div
                className="pointer-events-none absolute -top-2.5 -start-2.5 z-20 h-7 w-7 border-t-2 border-s-2 border-[#ED2530]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-2.5 -end-2.5 z-20 h-7 w-7 border-b-2 border-e-2 border-[#C8B692]"
                aria-hidden="true"
              />

              {/* Portrait Frame — Always clearly lit, sharp still loaded immediately */}
              <figure className="relative overflow-hidden rounded-sm border border-[#C8B692]/30 bg-[#0B1926] shadow-[0_24px_60px_rgba(0,0,0,0.75)]">
                <picture>
                  <source
                    srcSet="/media/derivatives/portrait-04-broadcast-yellow-blazer-480w.avif 480w, /media/derivatives/portrait-04-broadcast-yellow-blazer-800w.avif 800w, /media/derivatives/portrait-04-broadcast-yellow-blazer.avif 960w"
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 420px, 440px"
                    type="image/avif"
                  />
                  <source
                    srcSet="/media/derivatives/portrait-04-broadcast-yellow-blazer-480w.webp 480w, /media/derivatives/portrait-04-broadcast-yellow-blazer-800w.webp 800w, /media/derivatives/portrait-04-broadcast-yellow-blazer.webp 960w"
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 420px, 440px"
                    type="image/webp"
                  />
                  <img
                    src="/media/derivatives/portrait-04-broadcast-yellow-blazer.webp"
                    alt={
                      isAr
                        ? "نضال النعيم — كاتبة أولى لمنصات التواصل ومراسلة ومذيعة"
                        : "Nidal Elnaeem — Senior Social Media Writer, Reporter, and Presenter"
                    }
                    width={960}
                    height={960}
                    fetchPriority="high"
                    decoding="sync"
                    className="aspect-[4/4.3] w-full object-cover object-[52%_22%]"
                  />
                </picture>

                {/* Subtle bottom gradient for caption legibility */}
                <figcaption className="flex items-center justify-between border-t border-[#F4EEE3]/10 bg-[#08131E]/95 px-4 py-2.5 text-xs text-[#D1C7B8]">
                  <span>
                    {isAr ? "نضال النعيم · استوديو الأخبار" : "Nidal Elnaeem · Broadcast Studio"}
                  </span>
                  <span className="text-[11px] font-medium text-[#C8B692]">
                    {isAr ? "الحدث · العربية" : "Al Hadath · Al Arabiya"}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* ===================================================================
            PLANE 3: Discreet Studio Spotlight Control Bar
            Allows turning the mouse-following studio spotlight ON or OFF
            =================================================================== */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#F4EEE3]/10 pt-4 text-xs text-[#93A3B1]">
          <p className="text-[11px] text-[#93A3B1]">
            {SITE_IDENTITY.associationContextNote[locale]}
          </p>

          <button
            type="button"
            onClick={() => setSpotlightActive((prev) => !prev)}
            aria-pressed={spotlightActive}
            className="inline-flex items-center gap-2 rounded border border-[#F4EEE3]/15 bg-[#0B1926]/90 px-3 py-1.5 text-xs text-[#D1C7B8] transition hover:border-[#C8B692]/60 hover:text-[#F4EEE3]"
          >
            {spotlightActive ? (
              <Sparkles className="h-3.5 w-3.5 text-[#C8B692]" />
            ) : (
              <Eye className="h-3.5 w-3.5 text-[#93A3B1]" />
            )}
            <span>
              {spotlightActive
                ? SITE_IDENTITY.heroOpening.spotlightToggleOn[locale]
                : SITE_IDENTITY.heroOpening.spotlightToggleOff[locale]}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
