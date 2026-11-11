"use client";

import React, { useState } from "react";
import { Play, ExternalLink, Clock, CheckCircle2 } from "lucide-react";
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
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0D111A] shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
      {/* Top Broadcast Metadata Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] bg-[#080B12] px-5 py-3 text-xs">
        <div className="flex items-center gap-2 text-[#D4BE96]">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#E6242F]" />
          <span className="font-medium">{work.verifiedRole[locale]}</span>
        </div>

        <div className="flex items-center gap-3 text-[#949BA8]">
          {work.duration && (
            <span className="inline-flex items-center gap-1 font-mono-code text-[11px] text-[#F7F4EE]">
              <Clock className="h-3 w-3 text-[#D4BE96]" />
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
                ? "mx-auto flex justify-center bg-[#06080D] py-4"
                : "aspect-video w-full"
            }
          >
            <iframe
              src={work.embedUrl}
              title={work.title[locale]}
              className={
                work.playbackType === "facebook_reel"
                  ? "h-[560px] w-[340px] max-w-full border-0 rounded-xl"
                  : "h-full w-full border-0"
              }
              allow="encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.08] bg-[#0A0E17] px-5 py-3 text-xs text-[#D6CFC2]">
            <span>{work.broadcasterOrPlatform[locale]}</span>
            <a
              href={work.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#D4BE96] hover:text-white"
            >
              <span>{UI_LABELS.common.openExternalMedia[locale]}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      ) : (
        <div className="group relative">
          <div
            className={`relative w-full overflow-hidden bg-[#080B12] ${
              compact ? "aspect-[16/10]" : "aspect-[16/9]"
            }`}
          >
            <picture className="block h-full w-full">
              {work.posterAvif && <source srcSet={work.posterAvif} type="image/avif" />}
              <img
                src={work.posterAsset}
                alt={work.title[locale]}
                style={{ objectPosition: work.posterFocalPoint }}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </picture>

            {/* Cinematic vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/45 to-transparent" />

            {/* Center Playback Controls */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <span className="mb-3 rounded-full border border-[#D4BE96]/35 bg-[#07090E]/85 px-3.5 py-1 text-[11px] font-medium text-[#D4BE96] backdrop-blur-md">
                {work.broadcasterOrPlatform[locale]}
              </span>

              <h3
                className={`max-w-xl text-[#F7F4EE] drop-shadow ${
                  isAr
                    ? "font-display-ar text-lg sm:text-2xl font-bold"
                    : "font-display-en text-xl sm:text-3xl font-semibold"
                }`}
              >
                {work.title[locale]}
              </h3>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {canEmbed && (
                  <button
                    type="button"
                    onClick={() => setEmbedLoaded(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#E6242F] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_28px_rgba(230,36,47,0.4)] transition hover:bg-[#cf1d27]"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    <span>{UI_LABELS.common.loadMedia[locale]}</span>
                  </button>
                )}

                <a
                  href={work.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#07090E]/85 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#F7F4EE] backdrop-blur-md transition hover:border-[#D4BE96] hover:bg-[#121826]"
                >
                  <span>
                    {canEmbed
                      ? UI_LABELS.common.openExternalMedia[locale]
                      : UI_LABELS.common.readOriginalArticle[locale]}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#D4BE96]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
