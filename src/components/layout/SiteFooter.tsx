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
      className="border-t border-black/[0.07] bg-white text-[#525866]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Column 1: Identity, Quote & Signature */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-1.5">
              <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-[#090A0F]">
                {SITE_IDENTITY.name[locale]}
              </span>
              <p className="text-sm font-bold text-[#525866]">
                {SITE_IDENTITY.verifiedTitle[locale]}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F3F4F7] p-4 border-s-4 border-[#FF1E2D]">
              <p className="text-sm font-extrabold leading-relaxed text-[#090A0F]">
                {isAr
                  ? `«${NIDAL_SIGNATURE_LINE.ar}»`
                  : `“${NIDAL_SIGNATURE_LINE.en}”`}
              </p>
            </div>

            <div className="pt-1">
              <NidalSignature className="w-40 h-auto" color="#090A0F" />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-semibold text-[#525866]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#FF1E2D]" />
                {CV_CONTACT_INFO.location[locale]}
              </span>
              <a
                href={`mailto:${CV_CONTACT_INFO.email}`}
                className="inline-flex items-center gap-1.5 font-mono-code text-[#090A0F] hover:text-[#FF1E2D]"
              >
                <Mail className="h-3.5 w-3.5 text-[#FF1E2D]" />
                {CV_CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
              {isAr ? "أقسام الموقع" : "EXPLORE"}
            </h2>
            <ul className="grid grid-cols-2 gap-2.5 text-sm font-bold text-[#525866]">
              <li>
                <Link href={`/${locale}`} className="hover:text-[#090A0F] transition-colors">
                  {UI_LABELS.nav.home[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/journey`} className="hover:text-[#090A0F] transition-colors">
                  {UI_LABELS.nav.journey[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/on-screen`} className="hover:text-[#090A0F] transition-colors">
                  {UI_LABELS.nav.onScreen[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/words`} className="hover:text-[#090A0F] transition-colors">
                  {UI_LABELS.nav.words[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/life`} className="hover:text-[#090A0F] transition-colors">
                  {UI_LABELS.nav.life[locale]}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/behind-the-work`}
                  className="hover:text-[#090A0F] transition-colors"
                >
                  {UI_LABELS.nav.behind[locale]}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/connect`} className="hover:text-[#090A0F] transition-colors">
                  {UI_LABELS.nav.connect[locale]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Social Links */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
              {isAr ? "الحسابات الرسمية" : "OFFICIAL PROFILES"}
            </h2>
            <ul className="grid grid-cols-2 gap-2.5 text-sm sm:grid-cols-1">
              {(["linkedin", "instagram", "x", "facebook"] as const).map((platform) => {
                const item = SITE_IDENTITY.socialLinks[platform];
                return (
                  <li key={platform}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 font-bold text-[#525866] transition-colors hover:text-[#090A0F]"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F4F7] text-[#090A0F] transition-all group-hover:bg-[#090A0F] group-hover:text-white">
                        <SocialPlatformIcon platform={platform} className="h-3.5 w-3.5" />
                      </span>
                      <span>{item.label[locale]}</span>
                      <ExternalLink className="h-3 w-3 text-[#FF1E2D]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-black/[0.07] pt-6 text-xs font-semibold text-[#525866] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <AlHadathMark
              className="h-4 w-auto"
              wordmarkColor="#090A0F"
              bracketColor="#FF1E2D"
            />
            <span className="font-bold text-[#090A0F]">{SITE_IDENTITY.name[locale]}</span>
            <span className="text-black/20">·</span>
            <span>{isAr ? "الرياض · دبي · الخرطوم" : "Riyadh · Dubai · Khartoum"}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#525866]">
            <span>{isAr ? "تطوير وتصميم" : "Built by"}</span>
            <a
              href="https://nexorayyc.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-[#090A0F] px-3.5 py-1 font-mono-code text-xs font-bold text-white transition-all hover:bg-[#FF1E2D]"
            >
              <span>Nexora</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
