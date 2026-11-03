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

  const [featuredNewsroom, featuredAlArabiya, featuredMbc, ...moreMoments] = LIFE_MOMENTS;

  return (
    <div className="bg-[#080B11] pb-24">
      {/* Page Hero */}
      <section className="relative overflow-hidden border-b border-[rgba(200,182,146,0.14)] pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(640px circle at 20% 18%, rgba(200, 182, 146, 0.12), transparent 70%), radial-gradient(500px circle at 82% 24%, rgba(237, 37, 48, 0.08), transparent 72%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[rgba(200,182,146,0.28)] bg-[#101622]/90 px-3.5 py-1.5">
                <Camera className="h-4 w-4 text-[#C8B692]" />
                <span className="font-mono text-xs tracking-wider text-[#C8B692] uppercase">
                  {isAr
                    ? "مختارات مصورة · دبي وخارج الاستوديو"
                    : "CURATED PORTRAITS · DUBAI & BEYOND THE STUDIO"}
                </span>
              </div>

              <h1
                className={`font-display font-bold text-[#F6F2EA] ${
                  isAr
                    ? "text-3xl leading-[1.18] sm:text-5xl"
                    : "text-3xl tracking-tight sm:text-5xl"
                }`}
              >
                {isAr
                  ? "حياتها ويومياتها: بين غرفة الأخبار واللحظات الهادئة"
                  : "Life & Moments: From the Newsroom to Quiet Horizons"}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-[1.85] text-[#D7D2C8] sm:text-lg">
                {isAr
                  ? "نافذة منتقاة بعناية من يوميات نضال النعيم في دبي؛ تجمع بين حضورها اليومي أمام شاشات الرصد في «العربية» و«الحدث»، وتأملاتها القصيرة المكتوبة، ولحظات السفر والاستراحة بعيداً عن إيقاع الأخبار العاجلة."
                  : "A curated visual journal from Nidal Elnaeem’s life in Dubai and beyond—pairing her daily presence inside the Al Arabiya and Al Hadath studios with her personal notes and quiet travel moments."}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={SITE_IDENTITY.socialLinks.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-sm border border-[rgba(200,182,146,0.38)] bg-[#101622] px-5 py-3 text-sm font-semibold text-[#F6F2EA] transition-all hover:border-[#C8B692] hover:bg-[#161F30]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(200,182,146,0.3)] bg-[#0B0F17] text-[#C8B692]">
                  <InstagramIcon className="h-4 w-4" />
                </span>
                <span className="flex flex-col text-start">
                  <span className="text-xs text-[#C8B692]">
                    {isAr ? "تابع يومياتها على إنستغرام" : "Follow on Instagram"}
                  </span>
                  <span className="font-mono text-xs text-[#F6F2EA]">
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
            <p className="font-mono text-xs tracking-widest text-[#C8B692] uppercase">
              {isAr ? "الفصل الأول · دبي ومدينة الإعلام" : "PART I · DUBAI MEDIA CITY"}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#F6F2EA] sm:text-3xl">
              {isAr
                ? "في قلب الاستوديو ومدينة دبي للإعلام"
                : "Inside the Broadcast Studio & Dubai Media City"}
            </h2>
          </div>
          <span className="font-mono text-xs text-[#9E978B]">
            {isAr ? "صور مختارة بعناية · دقة كاملة" : "Curated Editorial Frames · High Resolution"}
          </span>
        </div>

        {/* Lead Newsroom Feature Card */}
        {featuredNewsroom && (
          <article className="mb-12 grid grid-cols-1 overflow-hidden rounded-sm border border-[rgba(200,182,146,0.22)] bg-[#101622]/90 shadow-2xl lg:grid-cols-12">
            <div className="relative overflow-hidden bg-[#06080D] lg:col-span-6">
              <picture>
                <source srcSet={featuredNewsroom.imageAvif} type="image/avif" />
                <img
                  src={featuredNewsroom.imageWebp}
                  alt={featuredNewsroom.title[locale]}
                  className="h-full max-h-[640px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  style={{ objectPosition: featuredNewsroom.focalPoint }}
                />
              </picture>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B11] via-transparent to-transparent opacity-60 lg:opacity-30" />
              <div className="absolute top-4 start-4 flex items-center gap-2 rounded-sm border border-[rgba(200,182,146,0.3)] bg-[#080B11]/85 px-3 py-1 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#ED2530]" />
                <span className="font-mono text-[11px] text-[#F6F2EA]">
                  {featuredNewsroom.categoryBadge[locale]}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-6 lg:p-12">
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-[rgba(200,182,146,0.14)] pb-4">
                  <span className="font-mono text-xs tracking-wider text-[#C8B692] uppercase">
                    {featuredNewsroom.location[locale]}
                  </span>
                  <span className="font-mono text-xs text-[#9E978B]">
                    #{featuredNewsroom.number}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold text-[#F6F2EA] sm:text-3xl">
                  {featuredNewsroom.title[locale]}
                </h3>

                <p className="mt-5 text-base leading-[1.85] text-[#D7D2C8] sm:text-lg">
                  {featuredNewsroom.captionExcerpt[locale]}
                </p>

                <div className="mt-6 rounded-sm border border-[rgba(200,182,146,0.16)] bg-[#0B0F17]/80 p-4">
                  <p className="text-xs leading-relaxed text-[#9E978B]">
                    {featuredNewsroom.editorialContext[locale]}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(200,182,146,0.14)] pt-5">
                <span className="font-mono text-xs text-[#9E978B]">
                  {featuredNewsroom.dimensions} px
                </span>
                <a
                  href={featuredNewsroom.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#C8B692] transition-colors hover:text-[#F6F2EA]"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                  <span>
                    {isAr ? "مشاهدة المنشور الأصلي على إنستغرام ↗" : "View Original Post on Instagram ↗"}
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
              className="group flex flex-col overflow-hidden rounded-sm border border-[rgba(200,182,146,0.2)] bg-[#101622]/85 transition-colors hover:border-[rgba(200,182,146,0.42)]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#06080D]">
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B11] via-transparent to-transparent opacity-65" />
                <div className="absolute top-4 start-4 rounded-sm border border-[rgba(200,182,146,0.3)] bg-[#080B11]/85 px-3 py-1 backdrop-blur-md">
                  <span className="font-mono text-[11px] text-[#C8B692]">
                    {item.location[locale]}
                  </span>
                </div>
                <div className="absolute end-4 bottom-4 rounded-sm border border-[rgba(200,182,146,0.24)] bg-[#080B11]/80 px-2.5 py-1 font-mono text-[11px] text-[#D7D2C8]">
                  #{item.number}
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <span className="font-mono text-xs text-[#C8B692]">
                    {item.categoryBadge[locale]}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-[#F6F2EA] sm:text-2xl">
                    {item.title[locale]}
                  </h3>
                  <blockquote className="mt-4 border-s-2 border-[#C8B692] ps-4 text-sm leading-[1.85] text-[#D7D2C8] sm:text-base">
                    {item.captionExcerpt[locale]}
                  </blockquote>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[rgba(200,182,146,0.12)] pt-4">
                  <span className="text-xs text-[#9E978B]">
                    {item.editorialContext[locale]}
                  </span>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-mono text-xs font-medium text-[#C8B692] hover:text-[#F6F2EA]"
                  >
                    {isAr ? "إنستغرام ↗" : "Instagram ↗"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Warm Editorial Quote Interlude */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-sm border border-[#D8CEBE] bg-[#F4EFE6] p-8 text-[#131720] shadow-xl sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs tracking-widest text-[#9E1B24] uppercase">
              {isAr ? "من كلماتها في دبي" : "IN HER OWN WORDS · DUBAI"}
            </span>
            <blockquote className="mt-4 font-display text-xl leading-[1.7] font-bold text-[#131720] sm:text-3xl">
              {isAr
                ? "«أنت حصاد نفسك.. حصاد الكتب التي تقرأ، والمشاعر التي تهبها للآخرين، والصحبة التي تختار، والأفكار التي تؤمن بها.. أنت حصاد ما تزرعه في نفسك وفي العالم من حولك.»"
                : "“You are your own harvest—the harvest of the books you read, the kindness you offer others, the company you choose, and the ideas you believe in. You are the harvest of what you plant within yourself and in the world around you.”"}
            </blockquote>
            <p className="mt-4 text-xs font-semibold tracking-wider text-[#5A554C] uppercase">
              {isAr ? "— نضال النعيم (@nidalelnaeem)" : "— Nidal Elnaeem (@nidalelnaeem)"}
            </p>
          </div>
        </div>
      </section>

      {/* Beyond the Studio: 3 Curated Travel & Life Portraits */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-widest text-[#C8B692] uppercase">
              {isAr ? "الفصل الثاني · خارج الاستوديو" : "PART II · BEYOND THE NEWSROOM"}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#F6F2EA] sm:text-3xl">
              {isAr
                ? "محطات السفر واللحظات الهادئة"
                : "Travel Horizons & Quiet Moments"}
            </h2>
          </div>
          <Link
            href={`/${locale}/behind-the-work`}
            className="text-xs font-medium text-[#C8B692] transition-colors hover:text-[#F6F2EA]"
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
              className="group flex flex-col overflow-hidden rounded-sm border border-[rgba(200,182,146,0.18)] bg-[#101622]/80 transition-all hover:border-[rgba(200,182,146,0.4)]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#06080D]">
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B11] via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 start-3 rounded-sm border border-[rgba(200,182,146,0.28)] bg-[#080B11]/85 px-2.5 py-1">
                  <span className="font-mono text-[10px] text-[#C8B692]">
                    {item.categoryBadge[locale]}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#9E978B]">
                    <span>{item.location[locale]}</span>
                    <span className="font-mono">#{item.number}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-[#F6F2EA]">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#D7D2C8]">
                    {item.captionExcerpt[locale]}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[rgba(200,182,146,0.12)] pt-3">
                  <span className="font-mono text-[11px] text-[#9E978B]">
                    @nidalelnaeem
                  </span>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#C8B692] hover:text-[#F6F2EA]"
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
