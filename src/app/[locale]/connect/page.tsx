import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ExternalLink,
  Mail,
  MapPin,
  Mic2,
  Users,
  Presentation,
  Globe,
  ArrowUpLeft,
  ArrowUpRight,
} from "lucide-react";
import { Locale, SITE_IDENTITY } from "@/data/portfolio-data";
import { CV_CONTACT_INFO, NIDAL_SIGNATURE_LINE } from "@/data/cv-profile-data";
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
      key: "linkedin" as const,
      data: SITE_IDENTITY.socialLinks.linkedin,
      cta: {
        ar: "فتح الحساب المهني على لينكدإن",
        en: "Connect on LinkedIn",
      },
    },
    {
      key: "instagram" as const,
      data: SITE_IDENTITY.socialLinks.instagram,
      cta: {
        ar: "متابعة الحساب الرسمي على إنستغرام",
        en: "Follow on Instagram",
      },
    },
    {
      key: "x" as const,
      data: SITE_IDENTITY.socialLinks.x,
      cta: {
        ar: "متابعة الحساب الرسمي على إكس",
        en: "Follow on X",
      },
    },
    {
      key: "facebook" as const,
      data: SITE_IDENTITY.socialLinks.facebook,
      cta: {
        ar: "زيارة الصفحة الرسمية على فيسبوك",
        en: "Visit Facebook Profile",
      },
    },
  ];

  const collaborationAreas = [
    {
      icon: Mic2,
      title: {
        ar: "إدارة الجلسات الحوارية والمنتديات",
        en: "Forum & Panel Moderation",
      },
      desc: {
        ar: "تقديم وإدارة الجلسات الحوارية والفعاليات الإعلامية والثقافية باللغتين العربية والإنجليزية.",
        en: "Bilingual moderation for media summits, cultural forums, and institutional panels.",
      },
    },
    {
      icon: Presentation,
      title: {
        ar: "التدريب الإعلامي والتحدث الرئيسي",
        en: "Keynote Speaking & Media Training",
      },
      desc: {
        ar: "ورش عمل ومحاضرات في التقديم المباشر، وصناعة المحتوى الإخباري الرقمي، وتوظيف الذكاء الاصطناعي في غرف الأخبار.",
        en: "Talks and workshops on live presenting, digital storytelling, and AI workflows in modern newsrooms.",
      },
    },
    {
      icon: Users,
      title: {
        ar: "التعاون التحريري والحوارات الصحفية",
        en: "Editorial & Broadcast Collaborations",
      },
      desc: {
        ar: "اللقاءات الإعلامية، والتقارير الخاصة، والمبادرات الإنسانية والمجتمعية.",
        en: "Broadcast appearances, special features, and public-interest media initiatives.",
      },
    },
  ];

  return (
    <div className="bg-[#07090E]">
      {/* Main Connect Hero & Direct Email */}
      <section className="relative overflow-hidden border-b border-white/8 bg-[radial-gradient(ellipse_at_top,#121826_0%,#07090E_75%)] py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(560px circle at 20% 20%, rgba(212, 190, 150, 0.10), transparent 70%), radial-gradient(480px circle at 80% 25%, rgba(230, 36, 47, 0.08), transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left / Main Contact Column */}
            <div className="lg:col-span-7 space-y-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D4BE96]/30 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-[#D4BE96]">
                  <Mail className="h-3.5 w-3.5 text-[#E6242F]" />
                  <span>
                    {isAr
                      ? "التواصل المباشر والحسابات الرسمية"
                      : "DIRECT CONTACT & OFFICIAL PROFILES"}
                  </span>
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-[#C8C2B8]">
                  <MapPin className="h-3.5 w-3.5 text-[#D4BE96]" />
                  <span>{CV_CONTACT_INFO.location[typedLocale]}</span>
                </span>
              </div>

              <h1
                className={`text-[#F7F4EE] leading-[1.15] ${
                  isAr
                    ? "font-display-ar text-3xl sm:text-5xl lg:text-6xl font-bold"
                    : "font-display-en text-4xl sm:text-5xl lg:text-6xl font-semibold"
                }`}
              >
                {isAr
                  ? "للتواصل المهني، وإدارة الجلسات، والدعوات الإعلامية"
                  : "For Media Inquiries, Speaking & Editorial Collaboration"}
              </h1>

              <p className="text-base sm:text-lg leading-[1.85] text-[#C8C2B8]">
                {isAr
                  ? "ترحب نضال النعيم بالمراسلات المهنية من المؤسسات الإعلامية، والمنتديات الحوارية، ومراكز التدريب والزملاء الصحفيين عبر بريدها الإلكتروني المباشر أو حساباتها الرسمية."
                  : "Nidal Elnaeem welcomes professional inquiries from media organizations, conferences, training institutes, and fellow journalists via direct email or her official social channels."}
              </p>

              {/* Direct Email Primary Card */}
              <div className="rounded-3xl border border-[#D4BE96]/30 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-[#D4BE96]">
                    {isAr ? "البريد الإلكتروني المباشر" : "DIRECT PROFESSIONAL EMAIL"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6242F]/15 px-3 py-0.5 text-[11px] font-medium text-[#F7F4EE]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E6242F]" />
                    <span>{CV_CONTACT_INFO.location[typedLocale]}</span>
                  </span>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={`mailto:${CV_CONTACT_INFO.email}`}
                    dir="ltr"
                    className="font-mono-code text-lg sm:text-2xl font-semibold text-[#F7F4EE] underline decoration-[#D4BE96]/40 underline-offset-8 transition hover:text-[#D4BE96]"
                  >
                    {CV_CONTACT_INFO.email}
                  </a>

                  <a
                    href={`mailto:${CV_CONTACT_INFO.email}`}
                    className="inline-flex items-center justify-center gap-2 self-start sm:self-auto rounded-full bg-[#E6242F] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-[#E6242F]/25 transition hover:bg-[#cc1d27]"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{isAr ? "إرسال رسالة الآن" : "Send Email"}</span>
                  </a>
                </div>
              </div>

              {/* 4 Social Profile Cards */}
              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                {channels.map((channel) => (
                  <a
                    key={channel.key}
                    href={channel.data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-all hover:border-[#D4BE96]/45 hover:bg-white/[0.06]"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-[#D4BE96]">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4BE96]/25 bg-[#07090E] text-[#D4BE96] transition-colors group-hover:border-[#D4BE96] group-hover:text-[#F7F4EE]">
                            <SocialPlatformIcon
                              platform={channel.key}
                              className="h-4 w-4"
                            />
                          </span>
                          <span>{channel.data.statusNote[typedLocale]}</span>
                        </div>
                        <ExternalLink className="h-4 w-4 text-[#E6242F] opacity-80 transition group-hover:opacity-100" />
                      </div>
                      <h2
                        className={`text-lg text-[#F7F4EE] ${
                          isAr
                            ? "font-display-ar font-bold"
                            : "font-display-en font-semibold"
                        }`}
                      >
                        {channel.data.label[typedLocale]}
                      </h2>
                      <p className="font-mono-code text-xs text-[#9E988E]" dir="ltr">
                        {channel.data.handle}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#F7F4EE] group-hover:text-[#D4BE96]">
                      <span>{channel.cta[typedLocale]}</span>
                      {isAr ? (
                        <ArrowUpLeft className="h-3.5 w-3.5 text-[#E6242F]" />
                      ) : (
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#E6242F]" />
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Editorial Portrait + Signature + Network Card */}
            <div className="lg:col-span-5 space-y-6">
              <figure className="overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] p-3 shadow-2xl">
                <div className="overflow-hidden rounded-2xl">
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
                </div>
                <figcaption className="mt-3 flex items-center justify-between px-2 pb-1 text-xs text-[#C8C2B8]">
                  <span className="font-semibold text-[#F7F4EE]">
                    {SITE_IDENTITY.name[typedLocale]}
                  </span>
                  <span className="text-[#D4BE96]">
                    {SITE_IDENTITY.associationLabel[typedLocale]}
                  </span>
                </figcaption>
              </figure>

              {/* Signature & Newsroom Card */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between">
                  <AlHadathMark className="h-5 w-auto" />
                  <Globe className="h-4 w-4 text-[#D4BE96]" />
                </div>

                <p
                  className={`text-base text-[#F7F4EE] ${
                    isAr
                      ? "font-serif-ar font-bold leading-relaxed"
                      : "font-display-en italic leading-relaxed"
                  }`}
                >
                  {isAr
                    ? `«${NIDAL_SIGNATURE_LINE.ar}»`
                    : `“${NIDAL_SIGNATURE_LINE.en}”`}
                </p>

                <p className="text-xs leading-relaxed text-[#C8C2B8]">
                  {SITE_IDENTITY.associationContextNote[typedLocale]}
                </p>

                <div className="pt-1">
                  <NidalSignature className="h-auto w-48" color="#D4BE96" />
                </div>

                <div className="flex flex-wrap gap-4 border-t border-white/10 pt-4 text-xs">
                  <a
                    href={SITE_IDENTITY.socialLinks.alarabiya.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#D4BE96] hover:text-[#F7F4EE]"
                  >
                    <span>{SITE_IDENTITY.socialLinks.alarabiya.label[typedLocale]}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href={SITE_IDENTITY.socialLinks.alhadath.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#D4BE96] hover:text-[#F7F4EE]"
                  >
                    <span>{SITE_IDENTITY.socialLinks.alhadath.label[typedLocale]}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warm Alabaster Band: Speaking, Moderation & Media Training */}
      <section className="bg-[#F7F4EE] py-16 text-[#121722] sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-[#B81D26]">
              {isAr ? "مجالات التعاون والمشاركة" : "SPEAKING, MODERATION & TRAINING"}
            </span>
            <h2
              className={`text-2xl sm:text-3xl text-[#121722] ${
                isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
              }`}
            >
              {isAr
                ? "حضور مهني على الشاشة ومنصات الحوار والتدريب"
                : "On-Air Presenting, Stage Moderation & Newsroom Workshops"}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {collaborationAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#141A24]/10 bg-white p-6 sm:p-7 shadow-sm space-y-3"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFEAE0] text-[#B81D26]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3
                    className={`text-lg text-[#121722] ${
                      isAr
                        ? "font-display-ar font-bold"
                        : "font-display-en font-semibold"
                    }`}
                  >
                    {area.title[typedLocale]}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4E4940]">
                    {area.desc[typedLocale]}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-center">
            <Link
              href={`/${typedLocale}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#121722]/20 bg-white px-5 py-2.5 text-xs font-semibold text-[#121722] transition hover:bg-[#121722] hover:text-[#F7F4EE]"
            >
              <span>
                {isAr ? "العودة إلى الصفحة الرئيسية" : "Return to Home"}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
