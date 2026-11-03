import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ExternalLink,
  MessageSquare,
  Globe,
  ArrowUpLeft,
  ArrowUpRight,
} from "lucide-react";
import { Locale, SITE_IDENTITY } from "@/data/portfolio-data";
import {
  AlHadathMark,
  NidalSignature,
  SocialPlatformIcon,
} from "@/components/brand/BrandVectors";

export default async function ConnectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();
  const typedLocale = locale as Locale;
  const isAr = typedLocale === "ar";

  const channels = [
    {
      key: "facebook",
      data: SITE_IDENTITY.socialLinks.facebook,
      cta: {
        ar: "زيارة الحساب على فيسبوك",
        en: "Visit Facebook Profile",
      },
      primary: true,
    },
    {
      key: "instagram",
      data: SITE_IDENTITY.socialLinks.instagram,
      cta: {
        ar: "زيارة الحساب على إنستغرام",
        en: "Visit Instagram Profile",
      },
      primary: true,
    },
    {
      key: "x",
      data: SITE_IDENTITY.socialLinks.x,
      cta: {
        ar: "متابعة الحساب على إكس (X)",
        en: "Follow on X",
      },
      primary: true,
    },
    {
      key: "linkedin",
      data: SITE_IDENTITY.socialLinks.linkedin,
      cta: {
        ar: "فتح الحساب على لينكدإن",
        en: "Open LinkedIn Profile",
      },
      primary: false,
    },
  ];

  return (
    <div className="bg-[#060E16] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left / Main Editorial Closing */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`inline-flex items-center gap-2 rounded border border-[#C8B692]/35 bg-[#0B1926] px-3.5 py-1 text-xs font-semibold text-[#C8B692] ${
                isAr ? "" : "uppercase tracking-[0.16em]"
              }`}
            >
              <MessageSquare className="h-3.5 w-3.5 text-[#ED2530]" />
              <span>
                {isAr
                  ? "تواصل · الحسابات الرسمية"
                  : "CONNECT · OFFICIAL PROFILES"}
              </span>
            </div>

            <h1
              className={`text-[#F4EEE3] leading-tight ${
                isAr
                  ? "font-display-ar text-4xl sm:text-5xl lg:text-6xl font-bold"
                  : "font-display-en text-4xl sm:text-5xl lg:text-6xl font-semibold"
              }`}
            >
              {isAr
                ? "للتواصل المهني، والحوارات الإعلامية، والمبادرات المشتركة"
                : "For Editorial Enquiries, Media Dialogues & Professional Connection"}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#D1C7B8]">
              {isAr
                ? "ترحب نضال النعيم بالتواصل المهني من الزملاء الصحفيين، والمؤسسات الإعلامية، والمنتديات الثقافية عبر حساباتها الرسمية على فيسبوك، وإنستغرام، وإكس (X)، ولينكدإن."
                : "Nidal Elnaeem welcomes professional correspondence from fellow journalists, broadcast institutions, and cultural forums through her official accounts on Facebook, Instagram, X, and LinkedIn."}
            </p>

            <div className="pt-2">
              <NidalSignature className="w-60 h-auto" color="#F4EEE3" />
            </div>

            {/* Verified Profile Cards (Facebook, Instagram, X, LinkedIn) */}
            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              {channels.map((channel) => (
                <a
                  key={channel.key}
                  href={channel.data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col justify-between rounded-sm border p-6 transition hover:border-[#C8B692] hover:bg-[#102232] ${
                    channel.primary
                      ? "border-[#C8B692]/35 bg-[#0B1926]"
                      : "border-[#F4EEE3]/15 bg-[#0B1926]/85"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#C8B692]">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#C8B692]/35 bg-[#060E16] text-[#C8B692] transition-colors group-hover:border-[#C8B692] group-hover:text-[#F4EEE3]">
                          <SocialPlatformIcon
                            platform={channel.key as "facebook" | "instagram" | "x" | "linkedin"}
                            className="h-4 w-4"
                          />
                        </span>
                        <span>{channel.data.statusNote[typedLocale]}</span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-[#ED2530]" />
                    </div>
                    <h2
                      className={`text-xl text-[#F4EEE3] ${
                        isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                      }`}
                    >
                      {channel.data.label[typedLocale]}
                    </h2>
                    <p className="font-mono-code text-xs text-[#93A3B1]" dir="ltr">
                      {channel.data.handle}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#F4EEE3]">
                    <span>{channel.cta[typedLocale]}</span>
                    {isAr ? (
                      <ArrowUpLeft className="h-3.5 w-3.5 text-[#ED2530]" />
                    ) : (
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#ED2530]" />
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Direct Correspondence Note */}
            <div className="rounded-sm border border-[#F4EEE3]/12 bg-[#08131E] p-6 space-y-2">
              <h3
                className={`text-xs font-semibold text-[#C8B692] ${
                  isAr ? "" : "uppercase tracking-wider"
                }`}
              >
                {isAr ? "قنوات المراسلة المباشرة" : "DIRECT CORRESPONDENCE"}
              </h3>
              <p className="text-sm leading-relaxed text-[#D1C7B8]">
                {isAr
                  ? "تتم المراسلات المهنية والدعوات الإعلامية مباشرة عبر الرسائل في حساباتها الرسمية أعلاه."
                  : "Professional enquiries, interview requests, and speaking invitations are handled directly through her official social profiles above."}
              </p>
            </div>
          </div>

          {/* Right Column: Portrait & Broadcaster Context */}
          <div className="lg:col-span-5 space-y-6">
            <figure className="overflow-hidden rounded-sm border border-[#C8B692]/30 bg-[#0B1926] p-3 shadow-2xl">
              <picture className="block w-full">
                <source
                  srcSet="/media/derivatives/portrait-04-broadcast-yellow-blazer.avif"
                  type="image/avif"
                />
                <img
                  src="/media/derivatives/portrait-04-broadcast-yellow-blazer.webp"
                  alt={SITE_IDENTITY.name[typedLocale]}
                  className="aspect-square w-full object-cover object-[52%_24%]"
                />
              </picture>
              <figcaption className="mt-3 flex items-center justify-between px-1 text-xs text-[#D1C7B8]">
                <span>{SITE_IDENTITY.name[typedLocale]}</span>
                <span className="text-[#C8B692]">
                  {SITE_IDENTITY.associationLabel[typedLocale]}
                </span>
              </figcaption>
            </figure>

            {/* Broadcaster Context Card */}
            <div className="rounded-sm border border-[#F4EEE3]/12 bg-[#0B1926]/80 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <AlHadathMark className="h-5 w-auto" />
                <Globe className="h-4 w-4 text-[#C8B692]" />
              </div>

              <p className="text-xs leading-relaxed text-[#D1C7B8]">
                {SITE_IDENTITY.associationContextNote[typedLocale]}
              </p>

              <div className="flex flex-wrap gap-3 border-t border-[#F4EEE3]/10 pt-3 text-xs">
                <a
                  href={SITE_IDENTITY.socialLinks.alhadath.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C8B692] hover:text-[#F4EEE3]"
                >
                  <span>{SITE_IDENTITY.socialLinks.alhadath.label[typedLocale]}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href={SITE_IDENTITY.socialLinks.alarabiya.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C8B692] hover:text-[#F4EEE3]"
                >
                  <span>{SITE_IDENTITY.socialLinks.alarabiya.label[typedLocale]}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="text-center">
              <Link
                href={`/${typedLocale}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#93A3B1] hover:text-[#F4EEE3]"
              >
                <span>
                  {isAr ? "العودة إلى الصفحة الرئيسية" : "Return to Home"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
