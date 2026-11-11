"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Mail } from "lucide-react";
import { Locale, SITE_IDENTITY, UI_LABELS } from "@/data/portfolio-data";
import { CV_CONTACT_INFO } from "@/data/cv-profile-data";
import { AlHadathMark, SocialPlatformIcon } from "@/components/brand/BrandVectors";

interface SiteHeaderProps {
  locale: Locale;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname() || `/${locale}`;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = locale === "ar";
  const otherLocale: Locale = isAr ? "en" : "ar";

  useEffect(() => {
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [isAr, locale]);

  const switchedPath = pathname.startsWith(`/${locale}`)
    ? pathname.replace(new RegExp(`^/${locale}`), `/${otherLocale}`)
    : `/${otherLocale}`;

  const navItems = [
    { href: `/${locale}`, label: UI_LABELS.nav.home[locale], exact: true },
    { href: `/${locale}/journey`, label: UI_LABELS.nav.journey[locale], exact: false },
    { href: `/${locale}/on-screen`, label: UI_LABELS.nav.onScreen[locale], exact: false },
    { href: `/${locale}/words`, label: UI_LABELS.nav.words[locale], exact: false },
    { href: `/${locale}/life`, label: UI_LABELS.nav.life[locale], exact: false },
    { href: `/${locale}/behind-the-work`, label: UI_LABELS.nav.behind[locale], exact: false },
    { href: `/${locale}/connect`, label: UI_LABELS.nav.connect[locale], exact: false },
  ];

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href || pathname === `${href}/`;
    return pathname.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#07090E]/82 backdrop-blur-xl"
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-3 focus:outline-none"
          aria-label={SITE_IDENTITY.name[locale]}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4BE96]/35 bg-[#111622] text-sm font-bold text-[#D4BE96] transition duration-300 group-hover:border-[#E6242F] group-hover:text-white">
            {isAr ? "ن" : "N"}
          </span>
          <div className="flex flex-col">
            <span
              className={`font-bold text-[#F7F4EE] leading-tight ${
                isAr
                  ? "font-display-ar text-base sm:text-lg"
                  : "font-display-en text-lg tracking-[0.08em] uppercase"
              }`}
            >
              {SITE_IDENTITY.name[locale]}
            </span>
            <span className="text-[11px] text-[#D4BE96]/85">
              {isAr ? "العربية · الحدث" : "Al Arabiya · Al Hadath"}
            </span>
          </div>
        </Link>

        {/* Desktop Pill Navigation */}
        <nav
          className="hidden xl:flex xl:items-center xl:rounded-full xl:border xl:border-white/[0.08] xl:bg-white/[0.03] xl:p-1"
          aria-label={isAr ? "التنقل الرئيسي" : "Primary Navigation"}
        >
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  active
                    ? "bg-[#D4BE96] text-[#07090E] font-semibold shadow-sm"
                    : "text-[#D6CFC2] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5">
          <div
            className="hidden md:flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-[#D6CFC2]"
            title={SITE_IDENTITY.associationContextNote[locale]}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E6242F]" />
            <AlHadathMark className="h-3.5 w-auto" />
          </div>

          <Link
            href={switchedPath}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#D4BE96]/30 bg-[#111622] px-3.5 py-1.5 text-xs font-medium text-[#F7F4EE] transition hover:border-[#D4BE96] hover:bg-[#182032]"
            aria-label={
              isAr ? "Switch language to English" : "التبديل إلى النسخة العربية"
            }
          >
            <Globe className="h-3.5 w-3.5 text-[#D4BE96]" />
            <span>{UI_LABELS.common.switchLangLabel[locale]}</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-[#111622] p-2 text-[#F7F4EE] hover:border-[#D4BE96] xl:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={
              mobileMenuOpen
                ? isAr
                  ? "إغلاق القائمة"
                  : "Close menu"
                : isAr
                ? "فتح القائمة"
                : "Open menu"
            }
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label={isAr ? "قائمة الجوال" : "Mobile Navigation"}
          className="border-t border-white/10 bg-[#0A0E17]/98 px-4 py-5 backdrop-blur-2xl xl:hidden"
        >
          <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {navItems.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
                      active
                        ? "bg-[#D4BE96] font-semibold text-[#07090E]"
                        : "bg-white/[0.03] text-[#D6CFC2] hover:bg-white/[0.07] hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="h-2 w-2 rounded-full bg-[#E6242F]" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
            <a
              href={`mailto:${CV_CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#D4BE96] hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-[#E6242F]" />
              <span className="font-mono-code">{CV_CONTACT_INFO.email}</span>
            </a>

            <div className="flex items-center gap-2">
              {(["facebook", "instagram", "x", "linkedin"] as const).map((platform) => (
                <a
                  key={platform}
                  href={SITE_IDENTITY.socialLinks[platform].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={SITE_IDENTITY.socialLinks[platform].label[locale]}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-[#D4BE96] hover:border-[#D4BE96] hover:text-white"
                >
                  <SocialPlatformIcon platform={platform} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
