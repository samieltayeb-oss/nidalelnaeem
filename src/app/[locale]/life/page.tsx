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
    <div className="bg-[#07090E] pb-24">
      {/* Page Hero */}
      <section className="relative overflow-hidden border-b border-white/8 bg-[radial-gradient(ellipse_at_top,#121826_0%,#07090E_75%)] pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(640px circle at 20% 18%, rgba(212, 190, 150, 0.11), transparent 70%), radial-gradient(500px circle at 82% 24%, rgba(230, 36, 47, 0.08), transparent 72%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#D4BE96]/30 bg-white/[0.04] px-4 py-1.5">
                <Camera className="h-4 w-4 text-[#D4BE96]" />
                <span className="font-mono-code text-xs tracking-wider text-[#D4BE96] uppercase">
                  {isAr
                    ? "مختارات مصورة · الاستوديو وخارجه"
                    : "CURATED PORTRAITS · STUDIO & BEYOND"}
                </span>
              </div>

              <h1
                className={`text-[#F7F4EE] ${
                  isAr
                    ? "font-display-ar text-3xl leading-[1.18] font-bold sm:text-5xl lg:text-6xl"
                    : "font-display-en text-4xl tracking-tight font-semibold sm:text-5xl lg:text-6xl"
                }`}
              >
                {isAr
                  ? "حياتها ويومياتها: بين غرفة الأخبار واللحظات الهادئة"
                  : "Life & Moments: From the Newsroom to Quiet Horizons"}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-[1.85] text-[#C8C2B8] sm:text-lg">
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
                className="inline-flex items-center gap-3 rounded-2xl border border-[#D4BE96]/35 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-[#F7F4EE] transition-all hover:border-[#D4BE96] hover:bg-white/[0.08]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4BE96]/30 bg-[#07090E] text-[#D4BE96]">
                  <InstagramIcon className="h-4 w-4" />
                </span>
                <span className="flex flex-col text-start">
                  <span className="text-xs text-[#D4BE96]">
                    {isAr ? "تابع يومياتها على إنستغرام" : "Follow on Instagram"}
                  </span>
                  <span className="font-mono-code text-xs text-[#F7F4EE]" dir="ltr">
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
            <p className="font-mono-code text-xs tracking-widest text-[#D4BE96] uppercase">
              {isAr ? "الفصل الأول · غرفة الأخبار ومدينة الإعلام" : "PART I · STUDIO & DUBAI MEDIA CITY"}
            </p>
            <h2
              className={`mt-2 text-2xl text-[#F7F4EE] sm:text-3xl ${
                isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
              }`}
            >
              {isAr
                ? "في قلب الاستوديو ومدينة دبي للإعلام"
                : "Inside the Broadcast Studio & Dubai Media City"}
            </h2>
          </div>
          <span className="font-mono-code text-xs text-[#9E988E]">
            {isAr ? "صور مختارة بعناية · دقة كاملة" : "Curated Editorial Frames · High Resolution"}
          </span>
        </div>

        {/* Lead Newsroom Feature Card */}
        {featuredNewsroom && (
          <article className="mb-12 grid grid-cols-1 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] shadow-2xl lg:grid-cols-12">
            <div className="relative overflow-hidden bg-[#05070B] lg:col-span-6">
              <picture>
                <source srcSet={featuredNewsroom.imageAvif} type="image/avif" />
                <img
                  src={featuredNewsroom.imageWebp}
                  alt={featuredNewsroom.title[locale]}
                  className="h-full max-h-[640px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  style={{ objectPosition: featuredNewsroom.focalPoint }}
                />
              </picture>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-60 lg:opacity-30" />
              <div className="absolute top-4 start-4 flex items-center gap-2 rounded-full border border-[#D4BE96]/35 bg-[#07090E]/85 px-3.5 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#E6242F]" />
                <span className="font-mono-code text-[11px] text-[#F7F4EE]">
                  {featuredNewsroom.categoryBadge[locale]}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-6 lg:p-12">
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <span className="font-mono-code text-xs tracking-wider text-[#D4BE96] uppercase">
                    {featuredNewsroom.location[locale]}
                  </span>
                  <span className="font-mono-code text-xs text-[#9E988E]">
                    #{featuredNewsroom.number}
                  </span>
                </div>

                <h3
                  className={`mt-6 text-2xl text-[#F7F4EE] sm:text-3xl ${
                    isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                  }`}
                >
                  {featuredNewsroom.title[locale]}
                </h3>

                <p className="mt-5 text-base leading-[1.85] text-[#C8C2B8] sm:text-lg">
                  {featuredNewsroom.captionExcerpt[locale]}
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs leading-relaxed text-[#9E988E]">
                    {featuredNewsroom.editorialContext[locale]}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                <span className="font-mono-code text-xs text-[#9E988E]">
                  {featuredNewsroom.dimensions} px
                </span>
                <a
                  href={featuredNewsroom.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4BE96] transition-colors hover:text-[#F7F4EE]"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                  <span>
                    {isAr
                      ? "مشاهدة المنشور الأصلي على إنستغرام ↗"
                      : "View Original Post on Instagram ↗"}
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
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-[#D4BE96]/40"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#05070B]">
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-65" />
                <div className="absolute top-4 start-4 rounded-full border border-[#D4BE96]/30 bg-[#07090E]/85 px-3.5 py-1 backdrop-blur-md">
                  <span className="font-mono-code text-[11px] text-[#D4BE96]">
                    {item.location[locale]}
                  </span>
                </div>
                <div className="absolute end-4 bottom-4 rounded-full border border-white/15 bg-[#07090E]/80 px-3 py-1 font-mono-code text-[11px] text-[#C8C2B8]">
                  #{item.number}
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <span className="font-mono-code text-xs text-[#D4BE96]">
                    {item.categoryBadge[locale]}
                  </span>
                  <h3
                    className={`mt-2 text-xl text-[#F7F4EE] sm:text-2xl ${
                      isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                    }`}
                  >
                    {item.title[locale]}
                  </h3>
                  <blockquote className="mt-4 border-s-2 border-[#D4BE96] ps-4 text-sm leading-[1.85] text-[#C8C2B8] sm:text-base">
                    {item.captionExcerpt[locale]}
                  </blockquote>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
                  <span className="text-xs text-[#9E988E]">
                    {item.editorialContext[locale]}
                  </span>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-mono-code text-xs font-medium text-[#D4BE96] hover:text-[#F7F4EE]"
                  >
                    {isAr ? "إنستغرام ↗" : "Instagram ↗"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Warm Alabaster Quote Interlude */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#141A24]/10 bg-[#F7F4EE] p-8 text-[#121722] shadow-2xl sm:p-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono-code text-xs font-semibold tracking-widest text-[#B81D26] uppercase">
              {isAr ? "من كلماتها في دبي" : "IN HER OWN WORDS · DUBAI"}
            </span>
            <blockquote
              className={`mt-4 text-xl leading-[1.75] text-[#121722] sm:text-3xl ${
                isAr ? "font-serif-ar font-bold" : "font-display-en italic"
              }`}
            >
              {isAr
                ? "«أنت حصاد نفسك.. حصاد الكتب التي تقرأ، والمشاعر التي تهبها للآخرين، والصحبة التي تختار، والأفكار التي تؤمن بها.. أنت حصاد ما تزرعه في نفسك وفي العالم من حولك.»"
                : "“You are your own harvest—the harvest of the books you read, the kindness you offer others, the company you choose, and the ideas you believe in. You are the harvest of what you plant within yourself and in the world around you.”"}
            </blockquote>
            <p className="mt-4 text-xs font-semibold tracking-wider text-[#5E584E] uppercase">
              {isAr ? "— نضال النعيم (@nidalelnaeem)" : "— Nidal Elnaeem (@nidalelnaeem)"}
            </p>
          </div>
        </div>
      </section>

      {/* Beyond the Studio: 3 Curated Travel & Life Portraits */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono-code text-xs tracking-widest text-[#D4BE96] uppercase">
              {isAr ? "الفصل الثاني · خارج الاستوديو" : "PART II · BEYOND THE NEWSROOM"}
            </p>
            <h2
              className={`mt-2 text-2xl text-[#F7F4EE] sm:text-3xl ${
                isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
              }`}
            >
              {isAr
                ? "محطات السفر واللحظات الهادئة"
                : "Travel Horizons & Quiet Moments"}
            </h2>
          </div>
          <Link
            href={`/${locale}/behind-the-work`}
            className="text-xs font-semibold text-[#D4BE96] transition-colors hover:text-[#F7F4EE]"
          >
            {isAr
              ? "استعرض أيضاً صور الكواليس والمنتديات ←"
              : "See also Behind the Work & Forum Portraits →"}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {moreMoments.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all hover:border-[#D4BE96]/40"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#05070B]">
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 start-3 rounded-full border border-[#D4BE96]/30 bg-[#07090E]/85 px-3 py-1 backdrop-blur-md">
                  <span className="font-mono-code text-[10px] text-[#D4BE96]">
                    {item.categoryBadge[locale]}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#9E988E]">
                    <span>{item.location[locale]}</span>
                    <span className="font-mono-code">#{item.number}</span>
                  </div>
                  <h3
                    className={`mt-2 text-lg text-[#F7F4EE] ${
                      isAr ? "font-display-ar font-bold" : "font-display-en font-semibold"
                    }`}
                  >
                    {item.title[locale]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#C8C2B8]">
                    {item.captionExcerpt[locale]}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-3">
                  <span className="font-mono-code text-[11px] text-[#9E988E]" dir="ltr">
                    @nidalelnaeem
                  </span>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-code text-xs text-[#D4BE96] hover:text-[#F7F4EE]"
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
