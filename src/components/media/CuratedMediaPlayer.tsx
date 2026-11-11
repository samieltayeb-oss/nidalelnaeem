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
  const canEmbed =
    (work.playbackType === "youtube_nocookie" || work.playbackType === "facebook_reel") &&
    Boolean(work.embedUrl);

  return (
    <div className="overflow-hidden rounded-[32px] border border-black/[0.07] bg-white p-3 sm:p-4 shadow-[0_24px_70px_rgba(9,10,15,0.08)]">
      {/* Top Broadcast Metadata Pill Strip */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-[#F3F4F7] px-4 py-2.5 text-xs">
        <div className="flex items-center gap-2 font-bold text-[#090A0F]">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF1E2D]" />
          <span>{work.verifiedRole[locale]}</span>
        </div>

        <div className="flex items-center gap-3 font-semibold text-[#525866]">
          {work.duration && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 font-mono-code text-[11px] font-bold text-[#090A0F] shadow-2xs">
              <Clock className="h-3 w-3 text-[#FF1E2D]" />
              {work.duration}
            </span>
          )}
          <span className="text-[11px]">{work.dateDisplay[locale]}</span>
        </div>
      </div>

      {/* Viewport / Poster / Delayed Embed Stage */}
      {canEmbed && embedLoaded ? (
        <div className="overflow-hidden rounded-[22px] bg-[#090A0F]">
          <div
            className={
              work.playbackType === "facebook_reel"
                ? "mx-auto flex justify-center bg-[#090A0F] py-4"
                : "aspect-video w-full"
            }
          >
            <iframe
              src={work.embedUrl}
              title={work.title[locale]}
              className={
                work.playbackType === "facebook_reel"
                  ? "h-[560px] w-[340px] max-w-full border-0 rounded-2xl"
                  : "h-full w-full border-0"
              }
              allow="encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F3F4F7] px-4 py-3 text-xs font-bold text-[#090A0F]">
            <span>{work.broadcasterOrPlatform[locale]}</span>
            <a
              href={work.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#FF1E2D] hover:underline"
            >
              <span>{UI_LABELS.common.openExternalMedia[locale]}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      ) : (
        <div className="group relative overflow-hidden rounded-[24px] bg-[#090A0F]">
          <div
            className={`relative w-full overflow-hidden ${
              compact ? "aspect-[16/10]" : "aspect-[16/9]"
            }`}
          >
            <picture className="block h-full w-full">
              {work.posterAvif && <source srcSet={work.posterAvif} type="image/avif" />}
              <img
                src={work.posterAsset}
                alt={work.title[locale]}
                style={{ objectPosition: work.posterFocalPoint }}
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </picture>

            {/* Clean Dark Gradient Overlay for Crisp Legibility on Photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

            {/* Top Left Platform Pill */}
            <div className="absolute top-4 start-4">
              <span className="inline-flex items-center rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-extrabold text-[#090A0F] shadow-md backdrop-blur-md">
                {work.broadcasterOrPlatform[locale]}
              </span>
            </div>

            {/* Bottom Controls & Title */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-end p-5 sm:p-7">
              <h3 className="max-w-2xl text-lg sm:text-2xl font-extrabold text-white leading-snug drop-shadow">
                {work.title[locale]}
              </h3>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                {canEmbed && (
                  <button
                    type="button"
                    onClick={() => setEmbedLoaded(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_10px_28px_rgba(255,30,45,0.4)] transition hover:bg-white hover:text-[#090A0F]"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    <span>{UI_LABELS.common.loadMedia[locale]}</span>
                  </button>
                )}

                <a
                  href={work.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#090A0F] shadow-md transition hover:bg-[#FF1E2D] hover:text-white"
                >
                  <span>
                    {canEmbed
                      ? UI_LABELS.common.openExternalMedia[locale]
                      : UI_LABELS.common.readOriginalArticle[locale]}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
