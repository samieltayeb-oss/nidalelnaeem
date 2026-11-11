import type { BilingualText } from "./portfolio-data";

export interface LifeMomentItem {
  id: string;
  number: string;
  title: BilingualText;
  location: BilingualText;
  categoryBadge: BilingualText;
  captionExcerpt: BilingualText;
  editorialContext: BilingualText;
  imageWebp: string;
  imageAvif: string;
  aspectClass: string;
  focalPoint: string;
  dimensions: string;
  sourceUrl: string;
  featuredOnHome?: boolean;
}

export interface PressFeatureItem {
  id: string;
  dateDisplay: BilingualText;
  publication: BilingualText;
  headline: BilingualText;
  summary: BilingualText;
  programsMentioned: BilingualText;
  sourceUrl: string;
}

export interface HostedProgramRecord {
  id: string;
  period: BilingualText;
  title: BilingualText;
  network: BilingualText;
  medium: BilingualText;
  description: BilingualText;
}

export const LIFE_MOMENTS: LifeMomentItem[] = [
  {
    id: "life-newsroom-monitors-dubai",
    number: "01",
    title: {
      ar: "بين شاشات غرفة الأخبار",
      en: "Inside the Broadcast Newsroom",
    },
    location: {
      ar: "دبي · استوديو الأخبار",
      en: "Dubai · Broadcast Newsroom",
    },
    categoryBadge: {
      ar: "يوميات غرفة الأخبار",
      en: "Newsroom Life",
    },
    captionExcerpt: {
      ar: "من كواليس العمل اليومي في غرفة الأخبار، حيث تتقاطع المتابعة الميدانية مع التحرير الرقمي والتقديم المباشر.",
      en: "From daily work inside the newsroom studio, where live monitoring meets digital writing and broadcast delivery.",
    },
    editorialContext: {
      ar: "لقطة من حسابها الرسمي على إنستغرام (@nidalelnaeem) داخل استوديو الأخبار.",
      en: "Shared on her official Instagram (@nidalelnaeem) from the broadcast studio.",
    },
    imageWebp: "/media/social/ig-DJAecEGMcm1-1.webp",
    imageAvif: "/media/social/ig-DJAecEGMcm1-1.avif",
    aspectClass: "aspect-[3/4]",
    focalPoint: "50% 24%",
    dimensions: "1440 × 1920",
    sourceUrl: "https://www.instagram.com/p/DJAecEGMcm1/",
    featuredOnHome: true,
  },
  {
    id: "life-alarabiya-beauty-and-love",
    number: "02",
    title: {
      ar: "«يمكن للحياة أن تهدينا الجمال والمحبة وسط كل ما يحدث»",
      en: "“Life Can Still Gift Us Beauty and Kindness Amid Everything”",
    },
    location: {
      ar: "قناة العربية · دبي",
      en: "Al Arabiya Channel · Dubai",
    },
    categoryBadge: {
      ar: "تأملات · دبي",
      en: "Reflections · Dubai",
    },
    captionExcerpt: {
      ar: "«يمكن للحياة أن تهدينا الجمال والمحبة وسط كل ما يحدث..»",
      en: "“Life can still gift us beauty and warmth in the middle of everything unfolding around us.”",
    },
    editorialContext: {
      ar: "صورة وتدوينة منشورة من مقر قناة العربية في دبي عبر حسابها الرسمي على إنستغرام.",
      en: "Portrait and caption shared from Al Arabiya in Dubai on her official Instagram.",
    },
    imageWebp: "/media/social/ig-CwVltyRSO9d-1.webp",
    imageAvif: "/media/social/ig-CwVltyRSO9d-1.avif",
    aspectClass: "aspect-[4/5]",
    focalPoint: "50% 22%",
    dimensions: "1440 × 1800",
    sourceUrl: "https://www.instagram.com/p/CwVltyRSO9d/",
    featuredOnHome: true,
  },
  {
    id: "life-mbc-you-are-your-harvest",
    number: "03",
    title: {
      ar: "«أنت حصاد نفسك.. حصاد الكتب التي تقرأ والصحبة التي تختار»",
      en: "“You Are Your Own Harvest — The Books You Read, The Company You Keep”",
    },
    location: {
      ar: "مجموعة MBC · دبي",
      en: "MBC Group · Dubai",
    },
    categoryBadge: {
      ar: "كلماتها · دبي",
      en: "In Her Words · Dubai",
    },
    captionExcerpt: {
      ar: "«أنت حصاد نفسك.. حصاد الكتب التي تقرأ.. والمشاعر التي تهبها للآخرين.. والصحبة التي تختار.. والأفكار التي تؤمن بها.. أنت حصاد ما تزرعه في نفسك وفي العالم من حولك.»",
      en: "“You are your own harvest—the harvest of the books you read, the kindness you give others, the company you choose, and the ideas you stand by.”",
    },
    editorialContext: {
      ar: "نص تأملي كتبته نضال النعيم مع إطلالتها من مجموعة MBC في مدينة دبي للإعلام.",
      en: "Personal reflection written by Nidal Elnaeem alongside her portrait at MBC Group in Dubai Media City.",
    },
    imageWebp: "/media/social/ig-Cpc27k9yZDg-1.webp",
    imageAvif: "/media/social/ig-Cpc27k9yZDg-1.avif",
    aspectClass: "aspect-[4/5]",
    focalPoint: "50% 22%",
    dimensions: "1440 × 1800",
    sourceUrl: "https://www.instagram.com/p/Cpc27k9yZDg/",
    featuredOnHome: true,
  },
  {
    id: "life-crimson-blooms",
    number: "04",
    title: {
      ar: "هدوء اللون والورد",
      en: "Among Crimson Blooms",
    },
    location: {
      ar: "الإمارات العربية المتحدة",
      en: "United Arab Emirates",
    },
    categoryBadge: {
      ar: "خارج الاستوديو",
      en: "Beyond the Studio",
    },
    captionExcerpt: {
      ar: "«يا جمال الورد..» — استراحة هادئة بعيداً عن إيقاع الأخبار العاجلة.",
      en: "“The beauty of roses…” — a quiet afternoon away from breaking news deadlines.",
    },
    editorialContext: {
      ar: "من مختارات صفحتها على إنستغرام (@nidalelnaeem).",
      en: "Selected from her official Instagram (@nidalelnaeem).",
    },
    imageWebp: "/media/social/ig-grid-06.webp",
    imageAvif: "/media/social/ig-grid-06.avif",
    aspectClass: "aspect-[3/4]",
    focalPoint: "50% 25%",
    dimensions: "1080 × 1440",
    sourceUrl: "https://www.instagram.com/nidalelnaeem/",
    featuredOnHome: false,
  },
  {
    id: "life-twilight-archway",
    number: "05",
    title: {
      ar: "مساء لا يُنسى",
      en: "A Day to Remember",
    },
    location: {
      ar: "يوميات سفر",
      en: "Travel Journal",
    },
    categoryBadge: {
      ar: "محطات سفر",
      en: "Travel & Moments",
    },
    captionExcerpt: {
      ar: "«يوم يبقى في الذاكرة..» — لقطة عند الغسق تجمع بين السكينة وبساطة المكان.",
      en: "“A day to remember…” — captured at twilight.",
    },
    editorialContext: {
      ar: "من أرشيف صورها الشخصية على إنستغرام.",
      en: "From her personal travel photography on Instagram.",
    },
    imageWebp: "/media/social/ig-grid-05.webp",
    imageAvif: "/media/social/ig-grid-05.avif",
    aspectClass: "aspect-[3/4]",
    focalPoint: "50% 25%",
    dimensions: "1080 × 1440",
    sourceUrl: "https://www.instagram.com/nidalelnaeem/",
    featuredOnHome: false,
  },
  {
    id: "life-mountain-horizon",
    number: "06",
    title: {
      ar: "أفق الجبال المفتوح",
      en: "Open Mountain Horizon",
    },
    location: {
      ar: "رحلات وتأمل",
      en: "Travel & Reflection",
    },
    categoryBadge: {
      ar: "رحلات",
      en: "Horizons",
    },
    captionExcerpt: {
      ar: "لحظة تأمل أمام امتداد الطبيعة، حيث تستعيد الكاتبة صفاء الذهن بين رحلة وأخرى.",
      en: "Looking out over a mountain valley—a quiet moment of perspective between assignments.",
    },
    editorialContext: {
      ar: "من مختارات حسابها الرسمي على إنستغرام (@nidalelnaeem).",
      en: "From her official Instagram (@nidalelnaeem).",
    },
    imageWebp: "/media/social/ig-grid-04.webp",
    imageAvif: "/media/social/ig-grid-04.avif",
    aspectClass: "aspect-[3/4]",
    focalPoint: "50% 35%",
    dimensions: "1080 × 1440",
    sourceUrl: "https://www.instagram.com/nidalelnaeem/",
    featuredOnHome: false,
  },
];

export const HOSTED_PROGRAMS: HostedProgramRecord[] = [
  {
    id: "prog-alarabiya-ksa",
    period: { ar: "فبراير 2024 – الحاضر (مارس 2019 – الحاضر)", en: "Feb 2024 – Present (Mar 2019 – Present)" },
    title: {
      ar: "كاتبة أولى لمنصات التواصل · مراسلة · مقدمة أخبار",
      en: "Senior Social Media Writer Reporter / Presenter",
    },
    network: {
      ar: "مجموعة MBC · قناة العربية والحدث (الرياض، السعودية)",
      en: "MBC Group · Al Arabiya & Al Hadath (Riyadh, Saudi Arabia)",
    },
    medium: { ar: "دوام كامل · غرفة الأخبار", en: "Full-time · Broadcast & Digital" },
    description: {
      ar: "تغطية يومية لأبرز أحداث الشرق الأوسط وشمال أفريقيا عبر التلفزيون ومنصات «العربية» و«الحدث»، وإنتاج القصص الرقمية من الفكرة حتى النشر بدعم أدوات الذكاء الاصطناعي.",
      en: "Daily MENA newsroom coverage across television and Al Arabiya & Al Hadath social platforms, end-to-end digital production, and AI-assisted editorial workflows.",
    },
  },
  {
    id: "prog-alarabiya-uae",
    period: { ar: "مارس 2019 – يناير 2024 (5 سنوات)", en: "Mar 2019 – Jan 2024 · 5 yrs" },
    title: {
      ar: "مذيعة أخبار · صحفية منصات التواصل · كاتبة ومراسلة",
      en: "News Presenter · Social Media Journalist · Writer/Reporter",
    },
    network: {
      ar: "مجموعة MBC · قناة العربية (دبي، الإمارات)",
      en: "MBC Group · Al Arabiya News Channel (Dubai, UAE)",
    },
    medium: { ar: "تقديم وتحرير رقمي (+50 حساباً)", en: "On-Air & 50+ Digital Channels" },
    description: {
      ar: "تقديم الأخبار على الهواء، وتحرير العواجل عبر أكثر من 50 حساباً رسمياً على منصات التواصل، وكتابة التقارير التلفزيونية والتعليق الصوتي عليها.",
      en: "Live news presenting, breaking-news social media editing across 50+ official channels, and writing/narrating broadcast news reports.",
    },
  },
  {
    id: "prog-sudani-magazine",
    period: { ar: "يناير 2018 – ديسمبر 2018 (سنة واحدة)", en: "Jan 2018 – Dec 2018 · 1 yr" },
    title: {
      ar: "المجلة المرئية الشهرية لـ «سوداني»",
      en: "Sudani Monthly Video Magazine",
    },
    network: { ar: "سوداني (Sudani) · الخرطوم، السودان", en: "Sudani · Khartoum, Sudan" },
    medium: { ar: "مقدمة برامج (Presenter)", en: "Presenter" },
    description: {
      ar: "المشاركة في تقديم المجلة المرئية الشهرية لشركة «سوداني»، وتغطية أحدث أخبار الشركة وخدمات المسؤولية المجتمعية وأثرها في المجتمع.",
      en: "Co-hosting Sudani’s monthly video magazine, covering the company’s latest news, social responsibility services, and impact on the community.",
    },
  },
  {
    id: "prog-rawah-ashorooq",
    period: { ar: "أبريل 2017 – أغسطس 2018 (سنة و5 أشهر)", en: "Apr 2017 – Aug 2018 · 1 yr 5 mos" },
    title: {
      ar: "3 برامج رئيسية: البرنامج الصباحي، «رواح»، و«مع كل الود والتقدير»",
      en: "3 Main Shows: Live Morning Show, “RAWAH” & “Public Appreciation Show”",
    },
    network: { ar: "قناة الشروق الفضائية (Ashorooq TV) · السودان", en: "Ashorooq TV · Sudan" },
    medium: { ar: "مذيعة تلفزيونية (Television Presenter)", en: "Television Presenter" },
    description: {
      ar: "تقديم البرنامج الصباحي اليومي المباشر للمنوعات، والبرنامج الحواري الثقافي المسائي «رواح»، والبرنامج الرمضاني الإنساني اليومي «مع كل الود والتقدير».",
      en: "Anchored the daily live Morning Show, hosted the evening cultural talk show RAWAH, and presented the daily humanitarian Ramadan special.",
    },
  },
  {
    id: "prog-hala-wa-hun",
    period: { ar: "يوليو / أغسطس 2015 – أكتوبر 2018 (3 سنوات و3 أشهر)", en: "Jul / Aug 2015 – Oct 2018 · 3 yrs 3 mos" },
    title: {
      ar: "7 برامج إذاعية من بينها «هلا وهن» (Hala & Her) والإشراف الرقمي",
      en: "7 Popular Radio Shows incl. “Hala & Her (هلا وهن)” & Digital Supervision",
    },
    network: { ar: "إذاعة هلا 96 إف إم · الخرطوم، السودان", en: "Hala 96 FM · Khartoum, Sudan" },
    medium: {
      ar: "مذيعة ومعدة · مشرفة تواصل · مديرة مكتب",
      en: "Radio Jockey · Social Media Supervisor · HR/Office Manager",
    },
    description: {
      ar: "إنتاج وإخراج مشترك وتقديم 7 برامج جماهيرية (منها «هلا وهن» والبرنامج الصباحي وبرامج الثقافة ورمضان)، إلى جانب الإشراف على منصات التواصل والبث الحي (يونيو – سبتمبر 2018) وإدارة المكتب والموارد البشرية (ديسمبر 2017 – مارس 2018).",
      en: "Produced, co-directed, and presented 7 popular shows including “Hala & Her (هلا وهن),” alongside serving as Social Media Supervisor (Jun – Sep 2018) and HR Officer - Office Manager (Dec 2017 – Mar 2018).",
    },
  },
  {
    id: "prog-hikayat-nidal",
    period: { ar: "أبريل 2018", en: "April 2018" },
    title: { ar: "سلسلة «حكايات نضال»", en: "“Hikayat Nidal” (Nidal’s Tales)" },
    network: { ar: "منصات التواصل الاجتماعي", en: "Digital Social Series" },
    medium: { ar: "إنتاج وسرد رقمي", en: "Digital Storytelling" },
    description: {
      ar: "سلسلة رقمية مستقلة تسلط الضوء على تجارب النساء السودانيات وقصص نجاحهن.",
      en: "Independent digital video series profiling inspiring Sudanese women.",
    },
  },
];

export const PRESS_FEATURES: PressFeatureItem[] = [
  {
    id: "press-tasamuh-2024",
    dateDisplay: { ar: "7 يناير 2024", en: "January 7, 2024" },
    publication: { ar: "صحيفة تسامح نيوز", en: "Tasamuh News" },
    headline: {
      ar: "إعلاميون سودانيون في عام 2023.. حضور مهني في القنوات العربية",
      en: "Sudanese Journalists in Regional Newsrooms: Career Profile of Nidal Elnaeem",
    },
    summary: {
      ar: "تقرير صحفي يستعرض مسيرة نضال النعيم من إذاعة «هلا 96» (برنامجي «هلا وهن» و«كلام الناس») وقناة «الشروق» (برنامجي «رواح» و«مع كل الود والتقدير») وصولاً إلى عملها في شبكة العربية والحدث بدبي.",
      en: "Press feature tracing Nidal Elnaeem’s career from Hala 96 FM (“Hala Wa Hun” and “Kalam Al-Nas”) and Ashorooq TV (“Rawah” and “Ma’a Kul Al-Wud Wal-Taqdeer”) to Al Arabiya and Al Hadath in Dubai.",
    },
    programsMentioned: {
      ar: "هلا وهن · كلام الناس · رواح · مع كل الود والتقدير · العربية والحدث",
      en: "Hala Wa Hun · Kalam Al-Nas · Rawah · Al Arabiya & Al Hadath",
    },
    sourceUrl: "https://tasamuhnews.com/?p=61253",
  },
  {
    id: "press-alnilin-hikayat-2018",
    dateDisplay: { ar: "15 أبريل 2018", en: "April 15, 2018" },
    publication: { ar: "موقع النيلين / كوش نيوز", en: "Al-Nilin / Kush News" },
    headline: {
      ar: "نضال النعيم تطلق سلسلة «حكايات نضال» عبر منصات التواصل الاجتماعي",
      en: "Nidal Elnaeem Launches “Hikayat Nidal” Across Social Platforms",
    },
    summary: {
      ar: "تغطية صحفية لإطلاق سلسلتها الرقمية المستقلة «حكايات نضال» عام 2018 لتوثيق قصص نجاح النساء السودانيات.",
      en: "Press coverage of the April 2018 launch of her independent digital series “Hikayat Nidal” highlighting Sudanese women.",
    },
    programsMentioned: {
      ar: "حكايات نضال · قناة الشروق",
      en: "Hikayat Nidal · Ashorooq TV",
    },
    sourceUrl: "https://www.alnilin.com/12930288.htm",
  },
  {
    id: "press-alnilin-kandaka-2016",
    dateDisplay: { ar: "10 مايو 2016", en: "May 10, 2016" },
    publication: { ar: "موقع النيلين الإخباري", en: "Al-Nilin News" },
    headline: {
      ar: "حوار مع المذيعة نضال النعيم حول برنامج «هلا وهن» ومبادرة «كوني كنداكة»",
      en: "Interview With Presenter Nidal Elnaeem on “Hala Wa Hun” and “Kouni Kandaka”",
    },
    summary: {
      ar: "لقاء صحفي تتحدث فيه عن رسالتها في برنامج «هلا وهن» عبر إذاعة هلا 96 إف إم، وأهداف مبادرة «كوني كنداكة» المجتمعية.",
      en: "Written interview discussing the social mission of her Hala 96 FM program “Hala Wa Hun” and the “Kouni Kandaka” initiative.",
    },
    programsMentioned: {
      ar: "إذاعة هلا 96 إف إم · هلا وهن · كوني كنداكة",
      en: "Hala 96 FM · Hala Wa Hun · Kouni Kandaka",
    },
    sourceUrl: "https://www.alnilin.com/12776942.htm",
  },
];
