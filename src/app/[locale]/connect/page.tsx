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
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

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
    <div className="bg-white text-[#090A0F]">
      {/* Main Connect Hero & Direct Email */}
      <section className="border-b border-black/[0.06] bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left / Main Contact Column */}
            <div className="lg:col-span-7 space-y-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F1] px-4 py-2 text-xs font-extrabold text-[#FF1E2D]">
                  <Mail className="h-3.5 w-3.5" />
                  <span>
                    {isAr
                      ? "التواصل المباشر والحسابات الرسمية"
                      : "DIRECT CONTACT & OFFICIAL PROFILES"}
                  </span>
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F4F7] px-4 py-2 text-xs font-bold text-[#090A0F]">
                  <MapPin className="h-3.5 w-3.5 text-[#FF1E2D]" />
                  <span>{CV_CONTACT_INFO.location[typedLocale]}</span>
                </span>
              </div>

              <h1
                className={`font-extrabold tracking-tight text-[#090A0F] ${
                  isAr
                    ? "text-3xl sm:text-5xl lg:text-[3.35rem] leading-[1.28]"
                    : "text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
                }`}
              >
                {isAr
                  ? "للتواصل المهني، وإدارة الجلسات، والدعوات الإعلامية"
                  : "For Media Inquiries, Speaking & Editorial Collaboration"}
              </h1>

              <p className="text-base sm:text-lg leading-[1.85] text-[#525866]">
                {isAr
                  ? "ترحب نضال النعيم بالمراسلات المهنية من المؤسسات الإعلامية، والمنتديات الحوارية، ومراكز التدريب والزملاء الصحفيين عبر بريدها الإلكتروني المباشر أو حساباتها الرسمية."
                  : "Nidal Elnaeem welcomes professional inquiries from media organizations, conferences, training institutes, and fellow journalists via direct email or her official social channels."}
              </p>

              {/* Direct Email Primary Card */}
              <div className="rounded-[32px] bg-[#F3F4F7] p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
                    {isAr ? "البريد الإلكتروني المباشر" : "DIRECT PROFESSIONAL EMAIL"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-[11px] font-bold text-[#090A0F] shadow-2xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF1E2D]" />
                    <span>{CV_CONTACT_INFO.location[typedLocale]}</span>
                  </span>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={`mailto:${CV_CONTACT_INFO.email}`}
                    dir="ltr"
                    className="font-mono-code text-lg sm:text-2xl font-extrabold text-[#090A0F] underline decoration-[#FF1E2D]/40 underline-offset-8 transition hover:text-[#FF1E2D] break-all"
                  >
                    {CV_CONTACT_INFO.email}
                  </a>

                  <a
                    href={`mailto:${CV_CONTACT_INFO.email}`}
                    className="inline-flex items-center justify-center gap-2 self-start sm:self-auto rounded-full bg-[#FF1E2D] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_12px_28px_rgba(255,30,45,0.25)] transition hover:bg-[#090A0F] shrink-0"
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
                    className="group flex flex-col justify-between rounded-[28px] border border-black/[0.06] bg-white p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-[#525866]">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F3F4F7] text-[#090A0F] transition-colors group-hover:bg-[#090A0F] group-hover:text-white">
                            <SocialPlatformIcon
                              platform={channel.key}
                              className="h-4 w-4"
                            />
                          </span>
                          <span>{channel.data.statusNote[typedLocale]}</span>
                        </div>
                        <ExternalLink className="h-4 w-4 text-[#FF1E2D]" />
                      </div>
                      <h2 className="text-lg font-extrabold text-[#090A0F]">
                        {channel.data.label[typedLocale]}
                      </h2>
                      <p className="font-mono-code text-xs font-semibold text-[#525866]" dir="ltr">
                        {channel.data.handle}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 text-xs font-extrabold text-[#090A0F] group-hover:text-[#FF1E2D]">
                      <span>{channel.cta[typedLocale]}</span>
                      <ArrowIcon className="h-3.5 w-3.5 text-[#FF1E2D]" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Editorial Portrait + Signature + Network Card */}
            <div className="lg:col-span-5 space-y-6">
              <figure className="overflow-hidden rounded-[40px] bg-[#F3F4F7] p-3.5 shadow-[0_24px_70px_rgba(9,10,15,0.08)]">
                <div className="overflow-hidden rounded-[30px]">
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
                <figcaption className="mt-3 flex items-center justify-between px-3 pb-1 text-xs">
                  <span className="font-extrabold text-[#090A0F]">
                    {SITE_IDENTITY.name[typedLocale]}
                  </span>
                  <span className="font-bold text-[#FF1E2D]">
                    {SITE_IDENTITY.associationLabel[typedLocale]}
                  </span>
                </figcaption>
              </figure>

              {/* Signature & Newsroom Card */}
              <div className="rounded-[32px] bg-[#F3F4F7] p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between">
                  <AlHadathMark
                    className="h-5 w-auto"
                    wordmarkColor="#090A0F"
                    bracketColor="#FF1E2D"
                  />
                  <Globe className="h-4 w-4 text-[#FF1E2D]" />
                </div>

                <p className="text-base sm:text-lg font-extrabold leading-relaxed text-[#090A0F]">
                  {isAr
                    ? `«${NIDAL_SIGNATURE_LINE.ar}»`
                    : `“${NIDAL_SIGNATURE_LINE.en}”`}
                </p>

                <p className="text-xs leading-relaxed text-[#525866]">
                  {SITE_IDENTITY.associationContextNote[typedLocale]}
                </p>

                <div className="pt-1">
                  <NidalSignature className="h-auto w-44" color="#090A0F" />
                </div>

                <div className="flex flex-wrap gap-4 border-t border-black/[0.06] pt-4 text-xs">
                  <a
                    href={SITE_IDENTITY.socialLinks.alarabiya.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-extrabold text-[#090A0F] hover:text-[#FF1E2D]"
                  >
                    <span>{SITE_IDENTITY.socialLinks.alarabiya.label[typedLocale]}</span>
                    <ExternalLink className="h-3 w-3 text-[#FF1E2D]" />
                  </a>
                  <a
                    href={SITE_IDENTITY.socialLinks.alhadath.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-extrabold text-[#090A0F] hover:text-[#FF1E2D]"
                  >
                    <span>{SITE_IDENTITY.socialLinks.alhadath.label[typedLocale]}</span>
                    <ExternalLink className="h-3 w-3 text-[#FF1E2D]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Grey Band: Speaking, Moderation & Media Training */}
      <section className="bg-[#F3F4F7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
              {isAr ? "مجالات التعاون والمشاركة" : "SPEAKING, MODERATION & TRAINING"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090A0F]">
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
                  className="rounded-[28px] bg-white p-6 sm:p-7 shadow-xs space-y-3"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF0F1] text-[#FF1E2D]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-extrabold text-[#090A0F]">
                    {area.title[typedLocale]}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#525866]">
                    {area.desc[typedLocale]}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-center">
            <Link
              href={`/${typedLocale}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-extrabold text-[#090A0F] shadow-xs transition hover:bg-[#090A0F] hover:text-white"
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
