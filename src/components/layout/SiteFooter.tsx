import React from "react";
import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { Locale, SITE_IDENTITY, UI_LABELS } from "@/data/portfolio-data";
import { CV_CONTACT_INFO, NIDAL_SIGNATURE_LINE } from "@/data/cv-profile-data";
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
      className="border-t border-white/[0.08] bg-[#05070B] text-[#D6CFC2]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Column 1: Identity, Quote & Signature */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <span
                className={`block text-2xl sm:text-3xl text-[#F7F4EE] ${
                  isAr
                    ? "font-display-ar font-bold"
                    : "font-display-en tracking-[0.1em] uppercase font-semibold"
                }`}
              >
                {SITE_IDENTITY.name[locale]}
              </span>
              <p className="text-sm font-medium text-[#D4BE96]">
                {SITE_IDENTITY.verifiedTitle[locale]}
              </p>
            </div>

            <p
              className={`max-w-md border-s-2 border-[#E6242F] ps-3.5 text-sm leading-relaxed text-[#F7F4EE]/90 ${
                isAr ? "font-serif-ar text-base" : "italic"
              }`}
            >
              «{NIDAL_SIGNATURE_LINE[locale]}»
            </p>

            <div className="pt-1 opacity-85">
              <NidalSignature className="w-44 h-auto" color="#D4BE96" />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-[#949BA8]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#D4BE96]" />
                {CV_CONTACT_INFO.location[locale]}
              </span>
              <a
                href={`mailto:${CV_CONTACT_INFO.email}`}
                className="inline-flex items-center gap-1.5 font-mono-code text-[#D6CFC2] hover:text-[#D4BE96]"
              >
                <Mail className="h-3.5 w-3.5 text-[#E6242F]" />
                {CV_CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-4 space-y-4">
            <h2
              className={`text-xs font-semibold text-[#D4BE96] ${
                isAr ? "" : "uppercase tracking-[0.18em]"
              }`}
            >
              {isAr ? "أقسام الموقع" : "EXPLORE"}
            </h2>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
              <li>
                <Link href={`/${locale}`} className="hover:text-white transition-colors">
                  {UI_LABELS.nav.home[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/journey`} className="hover:text-white transition-colors">
                  {UI_LABELS.nav.journey[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/on-screen`} className="hover:text-white transition-colors">
                  {UI_LABELS.nav.onScreen[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/words`} className="hover:text-white transition-colors">
                  {UI_LABELS.nav.words[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/life`} className="hover:text-white transition-colors">
                  {UI_LABELS.nav.life[locale]}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/behind-the-work`}
                  className="hover:text-white transition-colors"
                >
                  {UI_LABELS.nav.behind[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/connect`} className="hover:text-white transition-colors">
                  {UI_LABELS.nav.connect[locale]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Social Links */}
          <div className="lg:col-span-3 space-y-4">
            <h2
              className={`text-xs font-semibold text-[#D4BE96] ${
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
                      className="group inline-flex items-center gap-2.5 text-[#D6CFC2] transition-colors hover:text-white"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#111622] text-[#D4BE96] transition-all group-hover:border-[#D4BE96] group-hover:bg-[#192234] group-hover:text-white">
                        <SocialPlatformIcon platform={platform} className="h-3.5 w-3.5" />
                      </span>
                      <span>{item.label[locale]}</span>
                      <ExternalLink className="h-3 w-3 text-[#D4BE96]/70" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.08] pt-6 text-xs text-[#949BA8] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <AlHadathMark className="h-4 w-auto" />
            <span>{SITE_IDENTITY.name[locale]}</span>
            <span className="text-white/20">·</span>
            <span>{isAr ? "الرياض · دبي · الخرطوم" : "Riyadh · Dubai · Khartoum"}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#D6CFC2]">
            <span>{isAr ? "تطوير وتصميم" : "Built by"}</span>
            <a
              href="https://nexorayyc.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[#D4BE96]/35 bg-[#111622] px-3 py-1 font-mono-code text-xs font-semibold tracking-wider text-[#D4BE96] transition-all hover:border-[#E6242F] hover:bg-[#182032] hover:text-white"
            >
              <span>Nexora</span>
              <span className="text-[#E6242F]">↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
