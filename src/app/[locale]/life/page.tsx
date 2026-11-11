import Link from "next/link";
import { notFound } from "next/navigation";
import { Camera } from "lucide-react";
import { InstagramIcon } from "@/components/brand/BrandVectors";
import { LIFE_MOMENTS } from "@/data/life-and-press-data";
import { type Locale, SITE_IDENTITY } from "@/data/portfolio-data";

export default async function LifePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (rawLocale !== "ar" && rawLocale !== "en") {
    notFound();
  }
  const locale = rawLocale as Locale;
  const isAr = locale === "ar";

  const [featuredNewsroom, featuredAlArabiya, featuredMbc, ...moreMoments] =
    LIFE_MOMENTS;

  return (
    <div className="bg-white pb-24 text-[#090A0F]">
      {/* Page Hero */}
      <section className="border-b border-black/[0.06] bg-white pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF0F1] px-4 py-2 text-xs font-extrabold text-[#FF1E2D]">
                <Camera className="h-4 w-4" />
                <span>
                  {isAr
                    ? "مختارات مصورة · الاستوديو وخارجه"
                    : "CURATED PORTRAITS · STUDIO & BEYOND"}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#090A0F] leading-[1.12]">
                {isAr
                  ? "حياتها ويومياتها: بين غرفة الأخبار واللحظات الهادئة"
                  : "Life & Moments: From the Newsroom to Quiet Horizons"}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-[1.85] text-[#525866] sm:text-lg">
                {isAr
                  ? "نافذة منتقاة بعناية من يوميات نضال النعيم؛ تجمع بين حضورها اليومي أمام شاشات الرصد في «العربية» و«الحدث»، وتأملاتها القصيرة المكتوبة، ولحظات السفر والاستراحة بعيداً عن إيقاع الأخبار العاجلة."
                  : "A curated visual journal from Nidal Elnaeem’s life—pairing her daily presence inside the Al Arabiya and Al Hadath studios with personal reflections and quiet moments away from breaking news."}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={SITE_IDENTITY.socialLinks.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#F3F4F7] px-5 py-3 text-sm font-bold text-[#090A0F] transition-all hover:bg-[#090A0F] hover:text-white group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#090A0F] shadow-2xs">
                  <InstagramIcon className="h-4 w-4" />
                </span>
                <span className="flex flex-col text-start pe-1">
                  <span className="text-xs font-extrabold text-[#FF1E2D] group-hover:text-white">
                    {isAr ? "تابع يومياتها على إنستغرام" : "Follow on Instagram"}
                  </span>
                  <span className="font-mono-code text-xs" dir="ltr">
                    {SITE_IDENTITY.socialLinks.instagram.handle} ↗
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dubai Triptych (Newsroom, Al Arabiya, MBC Group) */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
              {isAr ? "الفصل الأول · غرفة الأخبار ومدينة الإعلام" : "PART I · STUDIO & DUBAI MEDIA CITY"}
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#090A0F]">
              {isAr
                ? "في قلب الاستوديو ومدينة دبي للإعلام"
                : "Inside the Broadcast Studio & Dubai Media City"}
            </h2>
          </div>
          <span className="rounded-full bg-[#F3F4F7] px-4 py-1.5 text-xs font-bold text-[#525866]">
            {isAr ? "صور مختارة بعناية · دقة كاملة" : "Curated Frames · High Resolution"}
          </span>
        </div>

        {/* Lead Newsroom Feature Card */}
        {featuredNewsroom && (
          <article className="mb-12 grid grid-cols-1 overflow-hidden rounded-[40px] bg-[#F3F4F7] p-3.5 sm:p-5 lg:grid-cols-12 lg:gap-8">
            <div className="relative overflow-hidden rounded-[30px] bg-black lg:col-span-6">
              <picture>
                <source srcSet={featuredNewsroom.imageAvif} type="image/avif" />
                <img
                  src={featuredNewsroom.imageWebp}
                  alt={featuredNewsroom.title[locale]}
                  className="h-full max-h-[620px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  style={{ objectPosition: featuredNewsroom.focalPoint }}
                />
              </picture>
              <div className="absolute top-4 start-4 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 shadow-md backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#FF1E2D]" />
                <span className="text-[11px] font-extrabold text-[#090A0F]">
                  {featuredNewsroom.categoryBadge[locale]}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-5 sm:p-8 lg:col-span-6">
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-black/[0.07] pb-4">
                  <span className="text-xs font-extrabold text-[#FF1E2D] uppercase">
                    {featuredNewsroom.location[locale]}
                  </span>
                  <span className="font-mono-code text-xs font-bold text-[#525866]">
                    #{featuredNewsroom.number}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#090A0F]">
                  {featuredNewsroom.title[locale]}
                </h3>

                <p className="mt-4 text-base leading-[1.85] text-[#525866] sm:text-lg">
                  {featuredNewsroom.captionExcerpt[locale]}
                </p>

                <div className="mt-6 rounded-2xl bg-white p-4 shadow-2xs">
                  <p className="text-xs leading-relaxed text-[#525866]">
                    {featuredNewsroom.editorialContext[locale]}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.07] pt-5">
                <span className="font-mono-code text-xs font-bold text-[#525866]">
                  {featuredNewsroom.dimensions} px
                </span>
                <a
                  href={featuredNewsroom.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#090A0F] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#FF1E2D]"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                  <span>
                    {isAr
                      ? "مشاهدة المنشور على إنستغرام ↗"
                      : "View Post on Instagram ↗"}
                  </span>
                </a>
              </div>
            </div>
          </article>
        )}

        {/* Dual Feature: Al Arabiya & MBC Group */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {[featuredAlArabiya, featuredMbc].filter(Boolean).map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-[36px] border border-black/[0.06] bg-white p-4 shadow-xs transition hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[26px] bg-black">
                <picture>
                  <source srcSet={item.imageAvif} type="image/avif" />
                  <img
                    src={item.imageWebp}
                    alt={item.title[locale]}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ objectPosition: item.focalPoint }}
                  />
                </picture>
                <div className="absolute top-4 start-4 rounded-full bg-white/95 px-3.5 py-1 shadow-md backdrop-blur-md">
                  <span className="text-[11px] font-extrabold text-[#090A0F]">
                    {item.location[locale]}
                  </span>
                </div>
                <div className="absolute end-4 bottom-4 rounded-full bg-black/75 px-3 py-1 font-mono-code text-[11px] font-bold text-white">
                  #{item.number}
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                <div>
                  <span className="text-xs font-extrabold text-[#FF1E2D]">
                    {item.categoryBadge[locale]}
                  </span>
                  <h3 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-[#090A0F]">
                    {item.title[locale]}
                  </h3>
                  <blockquote className="mt-4 border-s-4 border-[#FF1E2D] ps-4 text-sm leading-[1.85] text-[#525866] sm:text-base">
                    {item.captionExcerpt[locale]}
                  </blockquote>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-black/[0.06] pt-4">
                  <span className="text-xs text-[#525866]">
                    {item.editorialContext[locale]}
                  </span>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-extrabold text-[#090A0F] hover:text-[#FF1E2D]"
                  >
                    {isAr ? "إنستغرام ↗" : "Instagram ↗"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Studio Grey Quote Interlude */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] bg-[#F3F4F7] p-8 sm:p-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase shadow-2xs">
              {isAr ? "من كلماتها في دبي" : "IN HER OWN WORDS · DUBAI"}
            </span>
            <blockquote className="mt-5 text-xl sm:text-3xl font-extrabold leading-[1.65] text-[#090A0F]">
              {isAr
                ? "«أنت حصاد نفسك.. حصاد الكتب التي تقرأ، والمشاعر التي تهبها للآخرين، والصحبة التي تختار، والأفكار التي تؤمن بها.. أنت حصاد ما تزرعه في نفسك وفي العالم من حولك.»"
                : "“You are your own harvest—the harvest of the books you read, the kindness you offer others, the company you choose, and the ideas you believe in. You are the harvest of what you plant within yourself and in the world around you.”"}
            </blockquote>
            <p className="mt-4 font-mono-code text-xs font-bold text-[#525866]">
              — Nidal Elnaeem (@nidalelnaeem)
            </p>
          </div>
        </div>
      </section>

      {/* Beyond the Studio: 3 Curated Travel & Life Portraits */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold tracking-wider text-[#FF1E2D] uppercase">
              {isAr ? "الفصل الثاني · خارج الاستوديو" : "PART II · BEYOND THE NEWSROOM"}
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#090A0F]">
              {isAr
                ? "محطات السفر واللحظات الهادئة"
                : "Travel Horizons & Quiet Moments"}
            </h2>
          </div>
          <Link
            href={`/${locale}/behind-the-work`}
            className="rounded-full bg-[#F3F4F7] px-5 py-2.5 text-xs font-extrabold text-[#090A0F] transition hover:bg-[#090A0F] hover:text-white"
          >
            {isAr
              ? "صور الكواليس والمنتديات ←"
              : "Behind the Work & Forum Portraits →"}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {moreMoments.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-[32px] border border-black/[0.06] bg-white p-3.5 shadow-xs transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px] bg-black">
                <picture>
                  <source srcSet={item.imageAvif} type="image/avif" />
                  <img
                    src={item.imageWebp}
                    alt={item.title[locale]}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ objectPosition: item.focalPoint }}
                  />
                </picture>
                <div className="absolute top-3 start-3 rounded-full bg-white/95 px-3 py-1 shadow-md backdrop-blur-md">
                  <span className="text-[11px] font-extrabold text-[#090A0F]">
                    {item.categoryBadge[locale]}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#525866]">
                    <span>{item.location[locale]}</span>
                    <span className="font-mono-code">#{item.number}</span>
                  </div>
                  <h3 className="mt-1.5 text-lg font-extrabold text-[#090A0F]">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#525866]">
                    {item.captionExcerpt[locale]}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-3">
                  <span className="font-mono-code text-[11px] font-bold text-[#525866]" dir="ltr">
                    @nidalelnaeem
                  </span>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-extrabold text-[#FF1E2D] hover:text-[#090A0F]"
                  >
                    {isAr ? "المصدر ↗" : "Source ↗"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
