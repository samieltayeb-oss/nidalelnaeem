"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { Locale, SITE_IDENTITY, UI_LABELS } from "@/data/portfolio-data";
import { AlHadathMark } from "@/components/brand/BrandVectors";

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
      className="sticky top-0 z-50 border-b border-[#F4EEE3]/10 bg-[#060E16]/90 backdrop-blur-md"
      role="banner"
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#ED2530]/80 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-3.5 focus:outline-none"
          aria-label={SITE_IDENTITY.name[locale]}
        >
          <span className="h-7 w-[3px] bg-[#ED2530] transition-transform duration-300 group-hover:scale-y-110" />
          <div className="flex flex-col">
            <span
              className={`font-semibold text-[#F4EEE3] ${
                isAr
                  ? "font-display-ar text-xl"
                  : "font-display-en text-lg tracking-[0.14em] uppercase"
              }`}
            >
              {SITE_IDENTITY.name[locale]}
            </span>
            <span
              className={`text-[11px] text-[#C8B692]/90 ${
                isAr ? "" : "tracking-wider"
              }`}
            >
              {isAr ? "كاتبة أولى · مراسلة · مذيعة" : "WRITER · REPORTER · PRESENTER"}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2"
          aria-label={isAr ? "التنقل الرئيسي" : "Primary Navigation"}
        >
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-3.5 py-2 text-sm transition-colors duration-200 ${
                  active
                    ? "font-medium text-[#F4EEE3]"
                    : "text-[#D1C7B8]/80 hover:text-[#F4EEE3]"
                }`}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute inset-x-3 bottom-0.5 h-[2px] bg-[#ED2530]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="hidden sm:flex items-center gap-2 rounded-full border border-[#F4EEE3]/10 bg-[#0B1926]/80 px-3 py-1 text-xs text-[#D1C7B8]"
            title={SITE_IDENTITY.associationContextNote[locale]}
          >
            <AlHadathMark className="h-3.5 w-auto" />
          </div>

          <Link
            href={switchedPath}
            className="inline-flex items-center gap-1.5 rounded border border-[#C8B692]/35 bg-[#102232]/80 px-3 py-1.5 text-xs font-medium text-[#F4EEE3] transition hover:border-[#C8B692] hover:bg-[#162D42]"
            aria-label={
              isAr ? "Switch language to English" : "التبديل إلى النسخة العربية"
            }
          >
            <Globe className="h-3.5 w-3.5 text-[#C8B692]" />
            <span>{UI_LABELS.common.switchLangLabel[locale]}</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded border border-[#F4EEE3]/15 p-2 text-[#F4EEE3] hover:bg-[#102232] lg:hidden"
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

      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label={isAr ? "قائمة الجوال" : "Mobile Navigation"}
          className="border-t border-[#F4EEE3]/10 bg-[#07111B] px-4 py-4 lg:hidden"
        >
          <ul className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded px-3 py-2.5 text-base ${
                      active
                        ? "bg-[#102232] font-medium text-[#F4EEE3] border-s-2 border-[#ED2530]"
                        : "text-[#D1C7B8] hover:bg-[#0B1926] hover:text-[#F4EEE3]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ED2530]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
