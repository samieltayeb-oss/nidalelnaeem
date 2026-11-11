"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Film,
  Play,
  Tv,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import type { Locale } from "@/data/portfolio-data";
import {
  SELECTED_VIDEO_WORKS,
  SELECTED_VIDEO_PORTFOLIO_META,
  type SelectedVideoItem,
} from "@/data/selected-video-work";

type PortfolioFilter =
  | "all"
  | "on_camera_reel"
  | "digital_production"
  | "facebook_broadcast";

interface SelectedVideoWorkShowcaseProps {
  locale: Locale;
}

export function SelectedVideoWorkShowcase({
  locale,
}: SelectedVideoWorkShowcaseProps) {
  const isAr = locale === "ar";
  const [filter, setFilter] = useState<PortfolioFilter>("all");

  const filterOptions: {
    id: PortfolioFilter;
    label: { ar: string; en: string };
    count: number;
  }[] = [
    {
      id: "all",
      label: { ar: "جميع المختارات", en: "All Selected Videos" },
      count: SELECTED_VIDEO_WORKS.length,
    },
    {
      id: "on_camera_reel",
      label: { ar: "تقديم على الشاشة · إنستغرام", en: "On-Camera Reels" },
      count: SELECTED_VIDEO_WORKS.filter((v) => v.format === "on_camera_reel")
        .length,
    },
    {
      id: "digital_production",
      label: { ar: "إنتاج وسرد رقمي · إنستغرام", en: "Digital Video Stories" },
      count: SELECTED_VIDEO_WORKS.filter(
        (v) => v.format === "digital_production"
      ).length,
    },
    {
      id: "facebook_broadcast",
      label: { ar: "فيسبوك · الحدث والعربية السودان", en: "Facebook Broadcasts" },
      count: SELECTED_VIDEO_WORKS.filter(
        (v) => v.format === "facebook_broadcast"
      ).length,
    },
  ];

  const igVideos = SELECTED_VIDEO_WORKS.filter(
    (item) =>
      item.group === "instagram" &&
      (filter === "all" || item.format === filter)
  );

  const fbVideos = SELECTED_VIDEO_WORKS.filter(
    (item) =>
      item.group === "facebook" &&
      (filter === "all" || item.format === filter)
  );

  return (
    <section
      aria-labelledby="selected-video-portfolio-heading"
      className="space-y-10"
    >
      {/* Studio Portfolio Header Card */}
      <div className="rounded-[40px] bg-[#F3F4F7] p-6 sm:p-9 lg:p-11 space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold text-[#FF1E2D] shadow-2xs">
              <Tv className="h-3.5 w-3.5" />
              <span>
                {isAr
                  ? "ملف الأعمال المرئية المعتمد · 15 فيديو"
                  : "OFFICIAL MEDIA PORTFOLIO · 15 VIDEO LINKS"}
              </span>
            </div>

            <h2
              id="selected-video-portfolio-heading"
              className="text-2xl sm:text-4xl font-extrabold text-[#090A0F] leading-tight"
            >
              {SELECTED_VIDEO_PORTFOLIO_META.heading[locale]}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-[#525866]">
              {SELECTED_VIDEO_PORTFOLIO_META.objective[locale]}
            </p>
          </div>

          <div className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-2xs">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0F1] font-mono-code text-sm font-extrabold text-[#FF1E2D]">
              15
            </span>
            <div className="text-xs">
              <div className="font-extrabold text-[#090A0F]">
                {isAr ? "مختارات الفيديو" : "Curated Videos"}
              </div>
              <div className="text-[11px] font-semibold text-[#525866]">
                {isAr ? "11 إنستغرام · 4 فيسبوك" : "11 Instagram · 4 Facebook"}
              </div>
            </div>
          </div>
        </div>

        {/* Apple-Style Segmented Filter Bar */}
        <div
          role="group"
          aria-label={
            isAr ? "تصفية ملف الأعمال المرئية" : "Filter selected video work"
          }
          className="flex flex-wrap items-center gap-2 pt-1"
        >
          {filterOptions.map((opt) => {
            const active = filter === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setFilter(opt.id)}
                aria-pressed={active}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-extrabold transition-all ${
                  active
                    ? "bg-[#090A0F] text-white shadow-sm"
                    : "bg-white text-[#525866] hover:text-[#090A0F]"
                }`}
              >
                <span>{opt.label[locale]}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono-code text-[10px] ${
                    active
                      ? "bg-[#FF1E2D] text-white"
                      : "bg-[#F3F4F7] text-[#090A0F]"
                  }`}
                >
                  {opt.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 01 / INSTAGRAM — 11 VERTICAL REELS */}
      {igVideos.length > 0 && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.07] pb-4">
            <div className="flex flex-wrap items-center gap-3">
              <span
                dir="ltr"
                className="shrink-0 rounded-full bg-[#FFF0F1] px-3 py-1 font-mono-code text-xs font-extrabold text-[#FF1E2D]"
              >
                01 / INSTAGRAM
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#090A0F]">
                {isAr
                  ? "ريلز وتقارير العربية والحدث والعربية 24"
                  : "Al Arabiya, Al Hadath & Al Arabiya 24 Reels"}
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F4F7] px-3.5 py-1 text-xs font-extrabold text-[#090A0F]">
              <Film className="h-3.5 w-3.5 text-[#FF1E2D]" />
              <span>
                {isAr ? `${igVideos.length} فيديو` : `${igVideos.length} Videos`}
              </span>
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {igVideos.map((video) => (
              <InstagramReelCard
                key={video.id}
                video={video}
                locale={locale}
                isAr={isAr}
              />
            ))}
          </div>
        </div>
      )}

      {/* 02 / FACEBOOK — 4 BROADCAST VIDEOS */}
      {fbVideos.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.07] pb-4">
            <div className="flex flex-wrap items-center gap-3">
              <span
                dir="ltr"
                className="shrink-0 rounded-full bg-[#FFF0F1] px-3 py-1 font-mono-code text-xs font-extrabold text-[#FF1E2D]"
              >
                02 / FACEBOOK
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#090A0F]">
                {isAr
                  ? "تغطيات مرئية عبر فيسبوك · الحدث السودان والعربية السودان"
                  : "Facebook Broadcast Segments · Al Hadath Sudan & Al Arabiya Sudan"}
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F4F7] px-3.5 py-1 text-xs font-extrabold text-[#090A0F]">
              <Play className="h-3.5 w-3.5 fill-[#FF1E2D] text-[#FF1E2D]" />
              <span>
                {isAr ? `${fbVideos.length} فيديوهات` : `${fbVideos.length} Videos`}
              </span>
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {fbVideos.map((video) => (
              <a
                key={video.id}
                href={video.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-[32px] border border-black/[0.07] bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#FF1E2D]/40 hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#090A0F] font-mono-code text-xs font-extrabold text-white group-hover:bg-[#FF1E2D] transition-colors">
                        #{video.number}
                      </span>
                      <span className="rounded-full bg-[#FFF0F1] px-3.5 py-1 text-xs font-extrabold text-[#FF1E2D]">
                        {video.networkBadge[locale]}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F3F4F7] px-3 py-1 text-[11px] font-bold text-[#525866]">
                      <Sparkles className="h-3 w-3 text-[#FF1E2D]" />
                      <span>{video.formatBadge[locale]}</span>
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-extrabold text-[#090A0F] leading-snug group-hover:text-[#FF1E2D] transition-colors">
                    {video.title[locale]}
                  </h4>

                  <p className="text-xs sm:text-sm leading-relaxed text-[#525866]">
                    {video.summary[locale]}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-4">
                  <span className="font-mono-code text-[11px] text-[#525866] truncate max-w-[220px]">
                    {video.sourceUrl.replace(/^https:\/\/www\./, "")}
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#090A0F] px-4 py-2 text-xs font-bold text-white transition group-hover:bg-[#FF1E2D]">
                    <span>
                      {isAr ? "مشاهدة على فيسبوك" : "Watch on Facebook"}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function InstagramReelCard({
  video,
  locale,
  isAr,
}: {
  video: SelectedVideoItem;
  locale: Locale;
  isAr: boolean;
}) {
  return (
    <a
      href={video.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group mx-auto flex w-full max-w-sm sm:max-w-none flex-col justify-between overflow-hidden rounded-[32px] border border-black/[0.07] bg-white p-3 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div>
        {/* Full 9:16 Vertical Broadcast Cover — Zero Cropping of Channel Logo or Lower-Third */}
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[24px] bg-[#090A0F]">
          <picture className="block h-full w-full">
            {video.posterAvif && (
              <source srcSet={video.posterAvif} type="image/avif" />
            )}
            <img
              src={video.posterWebp}
              alt={video.title[locale]}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </picture>

          {/* Physical Top-Right Index Pill so Top-Left Channel Watermark Stays Uncovered */}
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 font-mono-code text-[11px] font-extrabold text-[#090A0F] shadow-md backdrop-blur-md">
            #{video.number}
          </span>
        </div>

        {/* Crisp Metadata Block */}
        <div className="p-2.5 pt-4 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-1.5">
            <span className="rounded-full bg-[#FFF0F1] px-3 py-0.5 text-[11px] font-extrabold text-[#FF1E2D]">
              {video.networkBadge[locale]}
            </span>
            <span className="font-mono-code text-[11px] font-semibold text-[#525866]">
              {video.dateDisplay[locale]}
            </span>
          </div>

          <h4 className="text-base font-extrabold text-[#090A0F] leading-snug group-hover:text-[#FF1E2D] transition-colors line-clamp-2">
            {video.title[locale]}
          </h4>

          <p className="text-xs leading-relaxed text-[#525866] line-clamp-2">
            {video.summary[locale]}
          </p>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-black/[0.06] px-2.5 pt-3 pb-1 text-xs">
        <span className="inline-flex items-center gap-1.5 font-bold text-[#090A0F]">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#FF1E2D]" />
          <span>{video.formatBadge[locale]}</span>
        </span>

        <span className="inline-flex items-center gap-1 font-extrabold text-[#FF1E2D] group-hover:underline">
          <span>{isAr ? "مشاهدة" : "Watch"}</span>
          <ExternalLink className="h-3 w-3" />
        </span>
      </div>
    </a>
  );
}
