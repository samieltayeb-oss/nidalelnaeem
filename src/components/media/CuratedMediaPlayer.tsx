"use client";

import React, { useState } from "react";
import { Play, ExternalLink, Clock, CheckCircle2, ShieldAlert } from "lucide-react";
import { Locale, WorkItem, UI_LABELS } from "@/data/portfolio-data";

interface CuratedMediaPlayerProps {
  work: WorkItem;
  locale: Locale;
  compact?: boolean;
}

export function CuratedMediaPlayer({
  work,
  locale,
  compact = false,
}: CuratedMediaPlayerProps) {
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const isAr = locale === "ar";
  const canEmbed =
    (work.playbackType === "youtube_nocookie" || work.playbackType === "facebook_reel") &&
    Boolean(work.embedUrl);

  return (
    <div className="overflow-hidden rounded-sm border border-[#F4EEE3]/15 bg-[#08131E] shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
      {/* Top Broadcast Metadata Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F4EEE3]/10 bg-[#050C14] px-4 py-2.5 text-xs">
        <div className="flex items-center gap-2 text-[#C8B692]">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#ED2530]" />
          <span className="font-medium">{work.verifiedRole[locale]}</span>
        </div>

        <div className="flex items-center gap-3 text-[#93A3B1]">
          {work.duration && (
            <span className="inline-flex items-center gap-1 font-mono-code text-[11px] text-[#F4EEE3]">
              <Clock className="h-3 w-3 text-[#C8B692]" />
              {work.duration}
            </span>
          )}
          <span className="text-[11px]">{work.dateDisplay[locale]}</span>
        </div>
      </div>

      {/* Viewport / Poster / Delayed Embed Stage */}
      {canEmbed && embedLoaded ? (
        <div className="relative bg-black">
          <div
            className={
              work.playbackType === "facebook_reel"
                ? "mx-auto flex justify-center bg-[#050C14] py-4"
                : "aspect-video w-full"
            }
          >
            <iframe
              src={work.embedUrl}
              title={work.title[locale]}
              className={
                work.playbackType === "facebook_reel"
                  ? "h-[560px] w-[340px] max-w-full border-0"
                  : "h-full w-full border-0"
              }
              allow="encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#F4EEE3]/10 bg-[#08131E] px-4 py-2.5 text-xs text-[#D1C7B8]">
            <span>{work.playbackNote[locale]}</span>
            <a
              href={work.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#C8B692] hover:text-[#F4EEE3]"
            >
              <span>{UI_LABELS.common.openExternalMedia[locale]}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      ) : (
        <div className="relative">
          {/* Authentic Poster Still */}
          <div
            className={`relative w-full overflow-hidden bg-[#0A1722] ${
              compact ? "aspect-[16/10]" : "aspect-[16/9]"
            }`}
          >
            <picture className="block h-full w-full">
              {work.posterAvif && <source srcSet={work.posterAvif} type="image/avif" />}
              <img
                src={work.posterAsset}
                alt={work.title[locale]}
                style={{ objectPosition: work.posterFocalPoint }}
                className="h-full w-full object-cover opacity-80 transition duration-500"
                loading="lazy"
              />
            </picture>

            {/* Cinematic vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060E16] via-[#060E16]/45 to-transparent" />

            {/* Center User-Initiated Playback Controls */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <span
                className={`mb-2 rounded border border-[#C8B692]/40 bg-[#060E16]/85 px-3 py-1 text-[11px] font-medium text-[#C8B692] ${
                  isAr ? "" : "tracking-wider"
                }`}
              >
                {work.broadcasterOrPlatform[locale]}
              </span>

              <h3
                className={`max-w-xl text-[#F4EEE3] drop-shadow ${
                  isAr
                    ? "font-display-ar text-xl sm:text-2xl font-bold"
                    : "font-display-en text-xl sm:text-2xl font-semibold"
                }`}
              >
                {work.title[locale]}
              </h3>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {canEmbed && (
                  <button
                    type="button"
                    onClick={() => setEmbedLoaded(true)}
                    className="inline-flex items-center gap-2 rounded bg-[#ED2530] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#F4EEE3] shadow-lg transition hover:bg-[#d41f2a]"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    <span>{UI_LABELS.common.loadMedia[locale]}</span>
                  </button>
                )}

                <a
                  href={work.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-[#F4EEE3]/25 bg-[#060E16]/90 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#F4EEE3] transition hover:border-[#C8B692] hover:bg-[#102232]"
                >
                  <span>
                    {canEmbed
                      ? UI_LABELS.common.openExternalMedia[locale]
                      : UI_LABELS.common.readOriginalArticle[locale]}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#C8B692]" />
                </a>
              </div>
            </div>
          </div>

          {/* Honest Playback & Rights Note */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#F4EEE3]/10 bg-[#07111B] px-4 py-2.5 text-[11px] text-[#93A3B1]">
            <span className="inline-flex items-center gap-1.5">
              <ShieldAlert className="h-3.5 w-3.5 text-[#C8B692]" />
              {work.playbackNote[locale]}
            </span>
            {work.photographerCredit && (
              <span className="text-[#C8B692]">
                {isAr
                  ? `تصوير البطاقة: ${work.photographerCredit}`
                  : `Portrait Credit: ${work.photographerCredit}`}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
