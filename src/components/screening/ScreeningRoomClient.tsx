"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Film,
  Clock,
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
    <div className="space-y-14">
      {/* Active Screening Stage */}
      {activeWork && (
        <section
          aria-label={isAr ? "شاشة العرض الرئيسية" : "Primary Video Stage"}
          className="surface-glass-dark rounded-3xl p-5 sm:p-8 lg:p-10"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2.5">
              <Film className="h-4 w-4 text-[#E6242F]" />
              <span className="text-xs font-semibold text-[#D4BE96]">
                {isAr ? "المختار للمشاهدة الآن" : "NOW PLAYING ON STAGE"}
              </span>
            </div>

            <Link
              href={`/${locale}/work/${activeWork.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4BE96] hover:text-white"
            >
              <span>{UI_LABELS.common.openDossier[locale]}</span>
              {isAr ? (
                <ArrowUpLeft className="h-3.5 w-3.5 text-[#E6242F]" />
              ) : (
                <ArrowUpRight className="h-3.5 w-3.5 text-[#E6242F]" />
              )}
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
              <span className="inline-block rounded-full border border-[#D4BE96]/35 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-[#D4BE96]">
                {activeWork.categoryLabel[locale]}
              </span>

              <h2
                className={`text-2xl sm:text-3xl text-[#F7F4EE] leading-snug ${
                  isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                }`}
              >
                {activeWork.title[locale]}
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#D6CFC2]">
                {activeWork.summary[locale]}
              </p>

              <div className="rounded-xl border-s-2 border-[#E6242F] bg-[#07090E]/85 p-4 text-xs leading-relaxed text-[#D6CFC2]">
                <strong className="block mb-1 text-[#F7F4EE]">
                  {UI_LABELS.common.verifiedRole[locale]}:{" "}
                  <span className="text-[#D4BE96]">{activeWork.verifiedRole[locale]}</span>
                </strong>
                {activeWork.editorialContext[locale]}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={`/${locale}/work/${activeWork.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#E6242F] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#cf1d27]"
                >
                  <span>{UI_LABELS.common.openDossier[locale]}</span>
                  {isAr ? (
                    <ArrowUpLeft className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  )}
                </Link>

                <a
                  href={activeWork.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-xs font-medium text-[#F7F4EE] hover:border-[#D4BE96]"
                >
                  <span>{UI_LABELS.common.sourceLink[locale]}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#D4BE96]" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sleek Pill Filter Bar */}
      <div
        role="group"
        aria-label={isAr ? "تصفية العروض حسب الفئة" : "Filter videos by category"}
        className="flex flex-wrap items-center gap-2.5 border-b border-white/[0.08] pb-6"
      >
        {filterButtons.map((btn) => {
          const active = categoryFilter === btn.id;
          return (
            <button
              key={btn.id}
              type="button"
              onClick={() => setCategoryFilter(btn.id)}
              aria-pressed={active}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                active
                  ? "bg-[#D4BE96] text-[#07090E] shadow-sm"
                  : "border border-white/12 bg-white/[0.03] text-[#D6CFC2] hover:border-[#D4BE96]/50 hover:text-white"
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
              className={`group flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300 ${
                isSelected
                  ? "border-[#D4BE96] bg-[#131A29] shadow-2xl"
                  : "border-white/10 bg-[#0D111A] hover:-translate-y-1 hover:border-[#D4BE96]/45"
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#05070B]">
                  <img
                    src={item.posterAsset}
                    alt={item.title[locale]}
                    style={{ objectPosition: item.posterFocalPoint }}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-transparent" />

                  {item.duration && (
                    <span className="absolute top-3 end-3 inline-flex items-center gap-1 rounded-full bg-[#07090E]/85 px-2.5 py-1 font-mono-code text-[11px] text-[#F7F4EE] backdrop-blur-md">
                      <Clock className="h-3 w-3 text-[#D4BE96]" />
                      {item.duration}
                    </span>
                  )}

                  <span className="absolute bottom-3 start-3 rounded-full bg-[#07090E]/85 px-3 py-1 text-[11px] font-medium text-[#D4BE96] backdrop-blur-md">
                    {item.categoryLabel[locale]}
                  </span>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#949BA8]">
                    <span>{item.dateDisplay[locale]}</span>
                    <span className="text-[11px] text-[#D4BE96]">
                      {item.language[locale]}
                    </span>
                  </div>

                  <h3
                    className={`text-lg sm:text-xl text-[#F7F4EE] leading-snug ${
                      isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                    }`}
                  >
                    {item.title[locale]}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D4BE96]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#E6242F] shrink-0" />
                    <span>{item.verifiedRole[locale]}</span>
                  </div>

                  <p className="line-clamp-3 text-xs leading-relaxed text-[#D6CFC2]">
                    {item.summary[locale]}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.08] bg-[#090D15] px-5 py-3.5 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setActiveWorkSlug(item.slug);
                    window.scrollTo({ top: 160, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#F7F4EE] hover:text-[#D4BE96]"
                >
                  <Play className="h-3 w-3 fill-current text-[#E6242F]" />
                  <span>
                    {isSelected
                      ? isAr
                        ? "قيد العرض في الأعلى"
                        : "Selected Above"
                      : isAr
                      ? "تشغيل في شاشة العرض ↑"
                      : "Play Above ↑"}
                  </span>
                </button>

                <Link
                  href={`/${locale}/work/${item.slug}`}
                  className="inline-flex items-center gap-1 font-medium text-[#D4BE96] hover:text-white"
                >
                  <span>{UI_LABELS.common.openDossier[locale]}</span>
                  {isAr ? (
                    <ArrowUpLeft className="h-3.5 w-3.5 text-[#E6242F]" />
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#E6242F]" />
                  )}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
