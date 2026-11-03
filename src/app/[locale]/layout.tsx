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
      className={`min-h-screen flex flex-col ${
        isAr ? "font-sans-ar" : "font-sans-en"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[100] focus:rounded focus:bg-[#ED2530] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {isAr ? "تخطي إلى المحتوى الرئيسي" : "Skip to main content"}
      </a>

      <SiteHeader locale={typedLocale} />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <SiteFooter locale={typedLocale} />
    </div>
  );
}
