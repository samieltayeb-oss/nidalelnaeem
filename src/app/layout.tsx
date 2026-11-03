import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "نضال النعيم | Nidal Elnaeem — In Focus · بورتريه وثائقي تفاعلي",
  description:
    "نضال النعيم — كاتبة أولى لمنصات التواصل · مراسلة · مذيعة. رحلة وثائقية تفاعلية عبر أعمالها الصحفية والتلفزيونية والإذاعية الموثقة.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
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
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#060E16] text-[#F4EEE3] antialiased selection:bg-[#ED2530] selection:text-white">
        {children}
      </body>
    </html>
  );
}
