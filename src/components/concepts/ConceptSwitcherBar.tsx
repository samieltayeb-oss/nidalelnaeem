"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Sparkles, Globe } from "lucide-react";
import type { Locale } from "@/data/portfolio-data";

interface ConceptSwitcherBarProps {
  locale: Locale;
  activeId: "1" | "2" | "3";
}

export function ConceptSwitcherBar({
  locale,
  activeId,
}: ConceptSwitcherBarProps) {
  const searchParams = useSearchParams();
  // Hide switcher bar cleanly during automated screenshot capture (?shot=1)
  if (searchParams.get("shot") === "1") {
    return null;
  }

  const isAr = locale === "ar";
  const altLocale: Locale = isAr ? "en" : "ar";

  const concepts = [
    {
      id: "1" as const,
      label: isAr ? "01 · المجلة العاجية" : "01 · Ivory Broadsheet",
    },
    {
      id: "2" as const,
      label: isAr ? "02 · ستوديو بينتو" : "02 · Signal Bento",
    },
    {
      id: "3" as const,
      label: isAr ? "03 · الكادر السينمائي" : "03 · Split Monograph",
    },
  ];

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-3 pointer-events-none"
    >
      <div className="pointer-events-auto flex flex-wrap items-center gap-1.5 rounded-full border border-white/20 bg-[#0B0E16]/90 p-1.5 text-xs text-white shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <span className="hidden sm:inline-flex items-center gap-1.5 ps-3 pe-2 font-semibold text-[#D4BE96]">
          <Sparkles className="h-3.5 w-3.5 text-[#E6242F]" />
          <span>{isAr ? "اختر التصميم:" : "Concept:"}</span>
        </span>

        {concepts.map((c) => {
          const active = c.id === activeId;
          return (
            <Link
              key={c.id}
              href={`/concepts/${locale}/${c.id}`}
              className={`rounded-full px-3.5 py-2 font-semibold transition-all ${
                active
                  ? "bg-[#E6242F] text-white shadow-md shadow-[#E6242F]/35"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {c.label}
            </Link>
          );
        })}

        <span className="mx-1 h-4 w-[1px] bg-white/15" />

        <Link
          href={`/concepts/${altLocale}/${activeId}`}
          className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-medium text-[#D4BE96] transition hover:bg-white/15 hover:text-white"
        >
          <Globe className="h-3 w-3" />
          <span>{isAr ? "EN" : "عربي"}</span>
        </Link>
      </div>
    </div>
  );
}
