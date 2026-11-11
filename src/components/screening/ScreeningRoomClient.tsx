"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Film,
  CheckCircle2,
  ExternalLink,
  ArrowUpLeft,
  ArrowUpRight,
  Play,
} from "lucide-react";
import {
  Locale,
  WorkItem,
  UI_LABELS,
} from "@/data/portfolio-data";
import { CuratedMediaPlayer } from "@/components/media/CuratedMediaPlayer";

interface ScreeningRoomClientProps {
  works: WorkItem[];
  locale: Locale;
}

type ScreenFilter = "all" | "public_service" | "stage_talk" | "television_dialogue";

export function ScreeningRoomClient({ works, locale }: ScreeningRoomClientProps) {
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;
  const [categoryFilter, setCategoryFilter] = useState<ScreenFilter>("all");
  const [activeWorkSlug, setActiveWorkSlug] = useState<string>(works[0]?.slug || "");

  const filteredWorks = works.filter((w) => {
    if (categoryFilter === "all") return true;
    return w.category === categoryFilter;
  });

  const activeWork =
    filteredWorks.find((w) => w.slug === activeWorkSlug) ||
    filteredWorks[0] ||
    works[0];

  const filterButtons: { id: ScreenFilter; label: { ar: string; en: string } }[] = [
    {
      id: "all",
      label: { ar: "جميع الأعمال المرئية", en: "All Videos" },
    },
    {
      id: "public_service",
      label: { ar: "تقارير وشروح توعوية", en: "Explainers & Reports" },
    },
    {
      id: "stage_talk",
      label: { ar: "منصة TEDx", en: "TEDx Stage Talk" },
    },
    {
      id: "television_dialogue",
      label: { ar: "لقاءات وحوارات تلفزيونية", en: "TV Interviews" },
    },
  ];

  return (
    <div className="space-y-12">
      {/* Active Screening Stage in Rounded [40px] Studio Grey Pod */}
      {activeWork && (
        <section
          aria-label={isAr ? "شاشة العرض الرئيسية" : "Primary Video Stage"}
          className="rounded-[40px] bg-[#F3F4F7] p-5 sm:p-8 lg:p-10"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.07] pb-4">
            <div className="flex items-center gap-2.5">
              <Film className="h-4 w-4 text-[#FF1E2D]" />
              <span className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                {isAr ? "المختار للمشاهدة الآن" : "NOW PLAYING ON STAGE"}
              </span>
            </div>

            <Link
              href={`/${locale}/work/${activeWork.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#090A0F] hover:text-[#FF1E2D]"
            >
              <span>{UI_LABELS.common.openDossier[locale]}</span>
              <ArrowIcon className="h-3.5 w-3.5 text-[#FF1E2D]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <CuratedMediaPlayer
                key={activeWork.slug}
                work={activeWork}
                locale={locale}
              />
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-extrabold text-[#FF1E2D] shadow-2xs">
                {activeWork.categoryLabel[locale]}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090A0F] leading-snug">
                {activeWork.title[locale]}
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#525866]">
                {activeWork.summary[locale]}
              </p>

              <div className="rounded-2xl border-s-4 border-[#FF1E2D] bg-white p-4 text-xs leading-relaxed text-[#525866] shadow-2xs">
                <strong className="block mb-1 text-[#090A0F]">
                  {UI_LABELS.common.verifiedRole[locale]}:{" "}
                  <span className="text-[#FF1E2D]">{activeWork.verifiedRole[locale]}</span>
                </strong>
                {activeWork.editorialContext[locale]}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={`/${locale}/work/${activeWork.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-6 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#090A0F]"
                >
                  <span>{UI_LABELS.common.openDossier[locale]}</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>

                <a
                  href={activeWork.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#090A0F] shadow-2xs transition hover:bg-[#090A0F] hover:text-white"
                >
                  <span>{UI_LABELS.common.sourceLink[locale]}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#FF1E2D]" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Segmented Apple-Style Pill Filter Bar */}
      <div
        role="group"
        aria-label={isAr ? "تصفية العروض حسب الفئة" : "Filter videos by category"}
        className="inline-flex flex-wrap items-center gap-1.5 rounded-full bg-[#F3F4F7] p-1.5"
      >
        {filterButtons.map((btn) => {
          const active = categoryFilter === btn.id;
          return (
            <button
              key={btn.id}
              type="button"
              onClick={() => setCategoryFilter(btn.id)}
              aria-pressed={active}
              className={`rounded-full px-5 py-2 text-xs font-extrabold transition-all ${
                active
                  ? "bg-white text-[#090A0F] shadow-xs"
                  : "text-[#525866] hover:text-[#090A0F]"
              }`}
            >
              {btn.label[locale]}
            </button>
          );
        })}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {filteredWorks.map((item) => {
          const isSelected = activeWork?.slug === item.slug;
          return (
            <article
              key={item.slug}
              className={`group flex flex-col justify-between overflow-hidden rounded-[32px] p-3.5 transition-all duration-300 ${
                isSelected
                  ? "bg-[#F3F4F7] ring-2 ring-[#FF1E2D] shadow-xl"
                  : "border border-black/[0.06] bg-white shadow-xs hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-black">
                  <img
                    src={item.posterAsset}
                    alt={item.title[locale]}
                    style={{ objectPosition: item.posterFocalPoint }}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {item.duration && (
                    <span className="absolute bottom-3 start-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-[#090A0F] shadow-md">
                      <Play className="h-3 w-3 fill-[#FF1E2D] text-[#FF1E2D]" />
                      <span className="font-mono-code">{item.duration}</span>
                    </span>
                  )}

                  <span className="absolute top-3 end-3 rounded-full bg-black/75 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                    {item.categoryLabel[locale]}
                  </span>
                </div>

                <div className="p-3 pt-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#525866]">
                    <span>{item.dateDisplay[locale]}</span>
                    <span className="text-[11px] font-bold text-[#FF1E2D]">
                      {item.language[locale]}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#090A0F] leading-snug">
                    {item.title[locale]}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#090A0F]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#FF1E2D] shrink-0" />
                    <span>{item.verifiedRole[locale]}</span>
                  </div>

                  <p className="line-clamp-3 text-xs leading-relaxed text-[#525866]">
                    {item.summary[locale]}
                  </p>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between border-t border-black/[0.06] px-3 pt-3.5 pb-1 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setActiveWorkSlug(item.slug);
                    window.scrollTo({ top: 140, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 font-extrabold text-[#090A0F] hover:text-[#FF1E2D]"
                >
                  <Play className="h-3 w-3 fill-[#FF1E2D] text-[#FF1E2D]" />
                  <span>
                    {isSelected
                      ? isAr
                        ? "قيد العرض في الأعلى"
                        : "Selected Above"
                      : isAr
                      ? "تشغيل في الأعلى ↑"
                      : "Play Above ↑"}
                  </span>
                </button>

                <Link
                  href={`/${locale}/work/${item.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-[#525866] hover:text-[#090A0F]"
                >
                  <span>{UI_LABELS.common.openDossier[locale]}</span>
                  <ArrowIcon className="h-3.5 w-3.5 text-[#FF1E2D]" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
