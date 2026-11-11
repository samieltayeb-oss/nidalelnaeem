import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "نضال النعيم | Nidal Elnaeem — من أثير إذاعة هلا 96 إلى غرفة أخبار قناتي العربية والحدث",
  description:
    "نضال النعيم — كاتبة أولى لمنصات التواصل ومقدمة أخبار ومراسلة في قناتي العربية والحدث. من أثير إذاعة هلا 96 إلى غرفة أخبار قناتي العربية والحدث.",
  openGraph: {
    title: "نضال النعيم | Nidal Elnaeem",
    description:
      "من أثير إذاعة هلا 96 إلى غرفة أخبار قناتي العربية والحدث — صحفية ومقدمة أخبار باللغتين العربية والإنجليزية.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-[#090A0F] antialiased selection:bg-[#FF1E2D] selection:text-white">
        {children}
      </body>
    </html>
  );
}
