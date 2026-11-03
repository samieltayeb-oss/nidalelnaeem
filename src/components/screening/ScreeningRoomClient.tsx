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
  Filter,
  ShieldCheck,
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
  const [approvedOnly, setApprovedOnly] = useState(false);
  const [activeWorkSlug, setActiveWorkSlug] = useState<string>(works[0]?.slug || "");

  const filteredWorks = works.filter((w) => {
    if (approvedOnly && w.approvalStatus !== "approved") return false;
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
      label: { ar: "جميع العروض المرئية", en: "All Screenings" },
    },
    {
      id: "public_service",
      label: { ar: "شروح الخدمة العامة (تقديم وإعداد)", en: "Public-Service Explainers" },
    },
    {
      id: "stage_talk",
      label: { ar: "منصة TEDx (متحدثة رئيسية)", en: "TEDx Stage Talk" },
    },
    {
      id: "television_dialogue",
      label: { ar: "حوارات تلفزيونية وأرشيفية", en: "Television & Archival Dialogues" },
    },
  ];

  return (
    <div className="space-y-14">
      {/* Active Screening Stage */}
      {activeWork && (
        <section
          aria-label={isAr ? "شاشة العرض الرئيسية" : "Primary Screening Stage"}
          className="rounded-sm border border-[#F4EEE3]/15 bg-[#091521] p-5 sm:p-8 shadow-2xl"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#F4EEE3]/10 pb-4">
            <div className="flex items-center gap-2.5">
              <Film className="h-4 w-4 text-[#ED2530]" />
              <span
                className={`text-xs font-semibold text-[#C8B692] ${
                  isAr ? "" : "font-mono-code uppercase tracking-[0.16em]"
                }`}
              >
                {isAr ? "العرض الرئيسي" : "FEATURED SCREENING"}
              </span>
            </div>

            <Link
              href={`/${locale}/work/${activeWork.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8B692] hover:text-[#F4EEE3]"
            >
              <span>{UI_LABELS.common.openDossier[locale]}</span>
              {isAr ? (
                <ArrowUpLeft className="h-3.5 w-3.5 text-[#ED2530]" />
              ) : (
                <ArrowUpRight className="h-3.5 w-3.5 text-[#ED2530]" />
              )}
            </Link>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <CuratedMediaPlayer
                key={activeWork.slug}
                work={activeWork}
                locale={locale}
              />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block rounded border border-[#C8B692]/35 bg-[#102232] px-3 py-1 text-xs font-medium text-[#C8B692]">
                {activeWork.categoryLabel[locale]}
              </span>

              <h2
                className={`text-2xl sm:text-3xl text-[#F4EEE3] ${
                  isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                }`}
              >
                {activeWork.title[locale]}
              </h2>

              <p className="text-sm leading-relaxed text-[#D1C7B8]">
                {activeWork.summary[locale]}
              </p>

              <div className="rounded border-s-2 border-[#ED2530] bg-[#060E16]/85 p-3.5 text-xs leading-relaxed text-[#D1C7B8]">
                <strong className="block mb-1 text-[#F4EEE3]">
                  {UI_LABELS.common.verifiedRole[locale]}:{" "}
                  <span className="text-[#C8B692]">{activeWork.verifiedRole[locale]}</span>
                </strong>
                {activeWork.editorialContext[locale]}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={`/${locale}/work/${activeWork.slug}`}
                  className="inline-flex items-center gap-2 rounded bg-[#ED2530] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#d41f2a]"
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
                  className="inline-flex items-center gap-1.5 rounded border border-[#F4EEE3]/20 bg-[#060E16] px-4 py-2.5 text-xs font-medium text-[#F4EEE3] hover:border-[#C8B692]"
                >
                  <span>{UI_LABELS.common.sourceLink[locale]}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#C8B692]" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Bar & Approval Gate Toggle */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#F4EEE3]/10 pb-5 md:flex-row md:items-center">
        <div
          role="group"
          aria-label={isAr ? "تصفية العروض حسب الفئة" : "Filter screenings by category"}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="me-1 inline-flex items-center gap-1.5 text-xs text-[#93A3B1]">
            <Filter className="h-3.5 w-3.5 text-[#C8B692]" />
            <span>{isAr ? "تصنيف العرض:" : "Filter:"}</span>
          </span>
          {filterButtons.map((btn) => {
            const active = categoryFilter === btn.id;
            return (
              <button
                key={btn.id}
                type="button"
                onClick={() => setCategoryFilter(btn.id)}
                aria-pressed={active}
                className={`rounded px-3.5 py-1.5 text-xs font-medium transition ${
                  active
                    ? "bg-[#ED2530] text-white"
                    : "border border-[#F4EEE3]/15 bg-[#0B1926] text-[#D1C7B8] hover:border-[#C8B692]/50 hover:text-[#F4EEE3]"
                }`}
              >
                {btn.label[locale]}
              </button>
            );
          })}
        </div>

        {/* Built-in Content Approval Gate Toggle */}
        <button
          type="button"
          onClick={() => setApprovedOnly((prev) => !prev)}
          aria-pressed={approvedOnly}
          className={`inline-flex items-center gap-2 self-start rounded border px-3.5 py-1.5 text-xs font-medium transition md:self-auto ${
            approvedOnly
              ? "border-[#C8B692] bg-[#C8B692]/20 text-[#F4EEE3]"
              : "border-[#F4EEE3]/15 bg-[#0B1926] text-[#93A3B1] hover:text-[#F4EEE3]"
          }`}
        >
          <ShieldCheck className="h-3.5 w-3.5 text-[#C8B692]" />
          <span>
            {approvedOnly
              ? UI_LABELS.common.filterApprovedOnly[locale]
              : UI_LABELS.common.filterAll[locale]}
          </span>
        </button>
      </div>

      {/* Curated Film Collection Grid */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {filteredWorks.map((item) => {
          const isSelected = activeWork?.slug === item.slug;
          return (
            <article
              key={item.slug}
              className={`flex flex-col justify-between overflow-hidden rounded-sm border transition ${
                isSelected
                  ? "border-[#C8B692] bg-[#0D1E2E] shadow-[0_12px_35px_rgba(0,0,0,0.5)]"
                  : "border-[#F4EEE3]/12 bg-[#0B1926]/80 hover:border-[#C8B692]/45"
              }`}
            >
              <div>
                {/* Poster Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050C14]">
                  <img
                    src={item.posterAsset}
                    alt={item.title[locale]}
                    style={{ objectPosition: item.posterFocalPoint }}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1926] via-transparent to-transparent" />

                  {item.duration && (
                    <span className="absolute top-3 end-3 inline-flex items-center gap-1 rounded bg-[#060E16]/90 px-2.5 py-1 font-mono-code text-[11px] text-[#F4EEE3]">
                      <Clock className="h-3 w-3 text-[#C8B692]" />
                      {item.duration}
                    </span>
                  )}

                  <span className="absolute bottom-3 start-3 rounded bg-[#060E16]/90 px-2.5 py-1 text-[11px] font-medium text-[#C8B692]">
                    {item.categoryLabel[locale]}
                  </span>
                </div>

                {/* Card Copy */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#93A3B1]">
                    <span>{item.dateDisplay[locale]}</span>
                    <span className="text-[11px] text-[#C8B692]">
                      {item.language[locale]}
                    </span>
                  </div>

                  <h3
                    className={`text-xl text-[#F4EEE3] leading-snug ${
                      isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                    }`}
                  >
                    {item.title[locale]}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C8B692]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#ED2530] shrink-0" />
                    <span>{item.verifiedRole[locale]}</span>
                  </div>

                  <p className="line-clamp-3 text-xs leading-relaxed text-[#D1C7B8]">
                    {item.summary[locale]}
                  </p>
                </div>
              </div>

              {/* Card Actions */}
              <div className="flex items-center justify-between border-t border-[#F4EEE3]/10 bg-[#08131E]/90 px-5 py-3.5 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setActiveWorkSlug(item.slug);
                    window.scrollTo({ top: 180, behavior: "smooth" });
                  }}
                  className="font-semibold text-[#F4EEE3] hover:text-[#C8B692]"
                >
                  {isSelected
                    ? isAr
                      ? "معروض حالياً في الأعلى"
                      : "Active on Stage Above"
                    : isAr
                    ? "عرض على الشاشة الرئيسية ↑"
                    : "Cue on Stage ↑"}
                </button>

                <Link
                  href={`/${locale}/work/${item.slug}`}
                  className="inline-flex items-center gap-1 font-medium text-[#C8B692] hover:text-[#F4EEE3]"
                >
                  <span>{isAr ? "صفحة التوثيق" : "Full Dossier"}</span>
                  {isAr ? (
                    <ArrowUpLeft className="h-3.5 w-3.5 text-[#ED2530]" />
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#ED2530]" />
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
