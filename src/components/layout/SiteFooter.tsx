import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Locale, SITE_IDENTITY, UI_LABELS } from "@/data/portfolio-data";
import {
  AlHadathMark,
  NidalSignature,
  SocialPlatformIcon,
} from "@/components/brand/BrandVectors";

interface SiteFooterProps {
  locale: Locale;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const isAr = locale === "ar";

  return (
    <footer
      className="border-t border-[#F4EEE3]/10 bg-[#050B12] text-[#D1C7B8]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Column 1: Identity & Signature */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-6 w-[3px] bg-[#ED2530]" />
              <span
                className={`text-2xl text-[#F4EEE3] ${
                  isAr
                    ? "font-display-ar font-bold"
                    : "font-display-en tracking-[0.15em] uppercase"
                }`}
              >
                {SITE_IDENTITY.name[locale]}
              </span>
            </div>

            <p className="text-sm font-medium text-[#C8B692]">
              {SITE_IDENTITY.verifiedTitle[locale]}
            </p>

            <div className="pt-1 opacity-85">
              <NidalSignature className="w-48 h-auto" color="#D1C7B8" />
            </div>

            <p className="max-w-md text-xs leading-relaxed text-[#93A3B1]">
              {SITE_IDENTITY.associationContextNote[locale]}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-4 space-y-3">
            <h2
              className={`text-xs font-semibold text-[#C8B692] ${
                isAr ? "" : "uppercase tracking-[0.18em]"
              }`}
            >
              {isAr ? "أقسام الموقع" : "SECTIONS"}
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <Link href={`/${locale}`} className="hover:text-[#F4EEE3] transition-colors">
                  {UI_LABELS.nav.home[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/journey`} className="hover:text-[#F4EEE3] transition-colors">
                  {UI_LABELS.nav.journey[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/on-screen`} className="hover:text-[#F4EEE3] transition-colors">
                  {UI_LABELS.nav.onScreen[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/words`} className="hover:text-[#F4EEE3] transition-colors">
                  {UI_LABELS.nav.words[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/life`} className="hover:text-[#F4EEE3] transition-colors">
                  {UI_LABELS.nav.life[locale]}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/behind-the-work`}
                  className="hover:text-[#F4EEE3] transition-colors"
                >
                  {UI_LABELS.nav.behind[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/connect`} className="hover:text-[#F4EEE3] transition-colors">
                  {UI_LABELS.nav.connect[locale]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Social Links */}
          <div className="lg:col-span-3 space-y-3">
            <h2
              className={`text-xs font-semibold text-[#C8B692] ${
                isAr ? "" : "uppercase tracking-[0.18em]"
              }`}
            >
              {isAr ? "الحسابات الرسمية" : "OFFICIAL PROFILES"}
            </h2>
            <ul className="grid grid-cols-2 gap-2.5 text-sm sm:grid-cols-1">
              {(["facebook", "instagram", "x", "linkedin"] as const).map((platform) => {
                const item = SITE_IDENTITY.socialLinks[platform];
                return (
                  <li key={platform}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-[#D1C7B8] transition-colors hover:text-[#F4EEE3]"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-[#C8B692]/30 bg-[#0B1926] text-[#C8B692] transition-colors group-hover:border-[#C8B692] group-hover:bg-[#122638] group-hover:text-[#F4EEE3]">
                        <SocialPlatformIcon platform={platform} className="h-3.5 w-3.5" />
                      </span>
                      <span>{item.label[locale]}</span>
                      <ExternalLink className="h-3 w-3 text-[#C8B692]/80" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[#F4EEE3]/10 pt-6 text-xs text-[#93A3B1] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <AlHadathMark className="h-4 w-auto" />
            <span>{SITE_IDENTITY.name[locale]}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#D1C7B8]">
            <span>{isAr ? "تطوير وتصميم" : "Built by"}</span>
            <a
              href="https://nexorayyc.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-sm border border-[#C8B692]/35 bg-[#0B1926] px-2.5 py-1 font-mono text-xs font-semibold tracking-wider text-[#C8B692] transition-all hover:border-[#ED2530] hover:bg-[#102232] hover:text-[#F4EEE3]"
            >
              <span>Nexora</span>
              <span className="text-[#ED2530]">↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
