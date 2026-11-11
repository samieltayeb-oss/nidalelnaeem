"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpLeft, ArrowUpRight, Mail } from "lucide-react";
import { Locale, SITE_IDENTITY, UI_LABELS } from "@/data/portfolio-data";
import { CV_CONTACT_INFO } from "@/data/cv-profile-data";
import { SocialPlatformIcon } from "@/components/brand/BrandVectors";

interface SiteHeaderProps {
  locale: Locale;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname() || `/${locale}`;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = locale === "ar";
  const otherLocale: Locale = isAr ? "en" : "ar";
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

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
  ];

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href || pathname === `${href}/`;
    return pathname.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/88 backdrop-blur-2xl"
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Identity with Circular Studio Avatar */}
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-3 focus:outline-none shrink-0"
          aria-label={SITE_IDENTITY.name[locale]}
        >
          <img
            src="/media/derivatives/portrait-04-broadcast-yellow-blazer.webp"
            alt={SITE_IDENTITY.name[locale]}
            className="h-10 w-10 rounded-full object-cover object-top ring-2 ring-[#FF1E2D] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-[#090A0F] leading-tight">
              {SITE_IDENTITY.name[locale]}
            </span>
            <span className="text-[11px] font-bold text-[#525866]">
              {isAr ? "العربية · الحدث" : "Al Arabiya · Al Hadath"}
            </span>
          </div>
        </Link>

        {/* Desktop Segmented Pill Navigation */}
        <nav
          className="hidden xl:flex items-center gap-1 rounded-full bg-[#F3F4F7] p-1.5 text-xs font-bold"
          aria-label={isAr ? "التنقل الرئيسي" : "Primary Navigation"}
        >
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 transition-all duration-200 ${
                  active
                    ? "bg-white text-[#090A0F] font-extrabold shadow-xs"
                    : "text-[#525866] hover:text-[#090A0F]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <Link
            href={switchedPath}
            className="inline-flex items-center justify-center rounded-full bg-[#F3F4F7] px-3.5 py-2 text-xs font-extrabold text-[#090A0F] transition hover:bg-[#E5E7EB]"
            aria-label={
              isAr ? "Switch language to English" : "التبديل إلى النسخة العربية"
            }
          >
            {isAr ? "EN" : "عربي"}
          </Link>

          <Link
            href={`/${locale}/connect`}
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold transition ${
              isActive(`/${locale}/connect`, false)
                ? "bg-[#FF1E2D] text-white"
                : "bg-[#090A0F] text-white hover:bg-[#FF1E2D]"
            }`}
          >
            <span>{UI_LABELS.nav.connect[locale]}</span>
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full bg-[#F3F4F7] p-2.5 text-[#090A0F] transition hover:bg-[#E5E7EB] xl:hidden"
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

      {/* Clean White Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label={isAr ? "قائمة الجوال" : "Mobile Navigation"}
          className="border-t border-black/[0.06] bg-white px-4 py-5 shadow-xl xl:hidden"
        >
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              ...navItems,
              { href: `/${locale}/connect`, label: UI_LABELS.nav.connect[locale], exact: false },
            ].map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-bold transition ${
                      active
                        ? "bg-[#090A0F] text-white"
                        : "bg-[#F3F4F7] text-[#090A0F] hover:bg-[#E5E7EB]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="h-2 w-2 rounded-full bg-[#FF1E2D]" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-4">
            <a
              href={`mailto:${CV_CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#090A0F] hover:text-[#FF1E2D]"
            >
              <Mail className="h-3.5 w-3.5 text-[#FF1E2D]" />
              <span className="font-mono-code">{CV_CONTACT_INFO.email}</span>
            </a>

            <div className="flex items-center gap-2">
              {(["linkedin", "instagram", "x", "facebook"] as const).map((platform) => (
                <a
                  key={platform}
                  href={SITE_IDENTITY.socialLinks[platform].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={SITE_IDENTITY.socialLinks[platform].label[locale]}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F4F7] text-[#090A0F] transition hover:bg-[#090A0F] hover:text-white"
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
