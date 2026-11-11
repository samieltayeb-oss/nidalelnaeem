import React from "react";
import { notFound } from "next/navigation";
import { Locale } from "@/data/portfolio-data";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") {
    notFound();
  }
  const typedLocale = locale as Locale;
  const isAr = typedLocale === "ar";

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      lang={typedLocale}
      className={`min-h-screen flex flex-col bg-white text-[#090A0F] selection:bg-[#FF1E2D] selection:text-white ${
        isAr ? "font-modern-ar" : "font-modern-en"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[100] focus:rounded-full focus:bg-[#FF1E2D] focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        {isAr ? "تخطي إلى المحتوى الرئيسي" : "Skip to main content"}
      </a>

      <SiteHeader locale={typedLocale} />

      <main id="main-content" className="flex-1 bg-white">
        {children}
      </main>

      <SiteFooter locale={typedLocale} />
    </div>
  );
}
