import type { BilingualText } from "./portfolio-data";

export type SelectedVideoGroup = "instagram" | "facebook";
export type SelectedVideoFormat =
  | "on_camera_reel"
  | "digital_production"
  | "facebook_broadcast";

export interface SelectedVideoItem {
  id: string;
  number: string; // "01" .. "15" matching her Selected Video Work PDF
  group: SelectedVideoGroup;
  format: SelectedVideoFormat;
  networkBadge: BilingualText;
  formatBadge: BilingualText;
  dateDisplay: BilingualText;
  isoDate?: string;
  title: BilingualText;
  summary: BilingualText;
  sourceUrl: string;
  posterWebp?: string;
  posterAvif?: string;
  featuredOnHome?: boolean;
}

export const SELECTED_VIDEO_PORTFOLIO_META = {
  heading: {
    ar: "الأعمال المرئية المختارة · العربية والحدث",
    en: "Selected Video Work · Al Arabiya & Al Hadath",
  },
  objective: {
    ar: "مجموعة مختارة تضم 15 عملاً مرئياً (11 ريلز عبر حسابات العربية والحدث والعربية 24 على إنستغرام + 4 تغطيات مرئية عبر فيسبوك) توثق حضور نضال النعيم في التقديم الإخباري، وصناعة القصة الرقمية، والإنتاج المرئي المتكامل.",
    en: "A curated portfolio of 15 broadcast and digital video segments (11 Instagram Reels across Al Arabiya, Al Hadath & Al Arabiya 24 + 4 Facebook broadcast videos) showcasing news presentation, journalism, and end-to-end digital video production.",
  },
};

export const SELECTED_VIDEO_WORKS: SelectedVideoItem[] = [
  // ============================================================================
  // 01 / INSTAGRAM (11 VIDEOS — #01 to #11)
  // ============================================================================
  {
    id: "reel-01-russia-energy-revenue",
    number: "01",
    group: "instagram",
    format: "on_camera_reel",
    networkBadge: { ar: "العربية", en: "Al Arabiya" },
    formatBadge: { ar: "تقديم على الشاشة", en: "On-Camera Presenter" },
    dateDisplay: { ar: "26 مارس 2026", en: "Mar 26, 2026" },
    isoDate: "2026-03-26",
    title: {
      ar: "روسيا تبرز كرابح في أسواق الطاقة وتجني 760 مليون دولار يومياً",
      en: "Russia Emerges as an Energy Winner with $760M in Daily Oil & Gas Revenue",
    },
    summary: {
      ar: "رغم الخسائر العالمية، قراءة تحليلية تقدمها نضال النعيم عبر منصة «العربية» حول مكاسب روسيا في أسواق الطاقة وعائداتها اليومية من النفط والغاز.",
      en: "Presented on camera for Al Arabiya, examining how global energy disruptions pushed Russia’s daily oil and gas revenues to $760 million.",
    },
    sourceUrl: "https://www.instagram.com/reel/DWWeGPQDnuG/",
    posterWebp: "/media/reels/ig-reel-01-DWWeGPQDnuG.webp",
    posterAvif: "/media/reels/ig-reel-01-DWWeGPQDnuG.avif",
    featuredOnHome: true,
  },
  {
    id: "reel-02-us-special-ops-iran",
    number: "02",
    group: "instagram",
    format: "on_camera_reel",
    networkBadge: { ar: "العربية · واضح ومشروح", en: "Al Arabiya · Explained" },
    formatBadge: { ar: "تقديم على الشاشة", en: "On-Camera Presenter" },
    dateDisplay: { ar: "17 مارس 2026", en: "Mar 17, 2026" },
    isoDate: "2026-03-17",
    title: {
      ar: "التدخل البري.. مهمة معقدة ومخاطر السيطرة على نووي إيران",
      en: "Ground Intervention Risks & Special Operations Scenarios Around Iran’s Nuclear Sites",
    },
    summary: {
      ar: "ضمن فقرة «واضح ومشروح» على قناة «العربية»، تستعرض نضال النعيم سيناريوهات أكبر عملية قوات خاصة محتملة وكلفة خيار التدخل البري.",
      en: "Part of Al Arabiya’s “Clear & Explained” series, breaking down potential US special-operations scenarios and ground-intervention risks.",
    },
    sourceUrl: "https://www.instagram.com/reel/DV_onmSCQJI/",
    posterWebp: "/media/reels/ig-reel-02-DV_onmSCQJI.webp",
    posterAvif: "/media/reels/ig-reel-02-DV_onmSCQJI.avif",
    featuredOnHome: true,
  },
  {
    id: "reel-03-nato-article-five",
    number: "03",
    group: "instagram",
    format: "on_camera_reel",
    networkBadge: { ar: "العربية · اسم في الأخبار", en: "Al Arabiya · In the News" },
    formatBadge: { ar: "تقديم على الشاشة", en: "On-Camera Presenter" },
    dateDisplay: { ar: "5 مارس 2026", en: "Mar 5, 2026" },
    isoDate: "2026-03-05",
    title: {
      ar: "الناتو يلوّح بالمادة الخامسة وبقاء خيار الدفاع الجماعي مطروحاً",
      en: "NATO Signals Article 5 & Collective Defense Options Amid Escalation",
    },
    summary: {
      ar: "ضمن فقرة «اسم في الأخبار» عبر «العربية»، تشرح نضال النعيم تصريحات الأمين العام للناتو مارك روته حول خيار الدفاع الجماعي بعد حادثة صاروخ باتجاه تركيا.",
      en: "Presented for Al Arabiya’s “Name in the News,” analyzing NATO Secretary General Mark Rutte’s remarks on Article 5 collective defense.",
    },
    sourceUrl: "https://www.instagram.com/reel/DVghDwrAOuv/",
    posterWebp: "/media/reels/ig-reel-03-DVghDwrAOuv.webp",
    posterAvif: "/media/reels/ig-reel-03-DVghDwrAOuv.avif",
    featuredOnHome: false,
  },
  {
    id: "reel-04-sudan-heglig-oil-deal",
    number: "04",
    group: "instagram",
    format: "on_camera_reel",
    networkBadge: { ar: "قناة الحدث", en: "Al Hadath" },
    formatBadge: { ar: "تقديم على الشاشة", en: "On-Camera Presenter" },
    dateDisplay: { ar: "11 ديسمبر 2025", en: "Dec 11, 2025" },
    isoDate: "2025-12-11",
    title: {
      ar: "اتفاق هجليج يثير التساؤلات: لماذا اتفق طرفا النزاع في السودان على النفط وفشلا في وقف الحرب؟",
      en: "The Heglig Oil Deal: Why Sudan’s Rivals Agreed on Oil While Failing to End the War",
    },
    summary: {
      ar: "من استوديو قناة «الحدث»، قراءة معمقة تقدمها نضال النعيم في أبعاد تفاهمات حقل هجليج النفطي في ظل استمرار الحرب في السودان.",
      en: "In-studio breakdown on Al Hadath examining the Heglig oilfield arrangement in Sudan despite stalled ceasefire efforts.",
    },
    sourceUrl: "https://www.instagram.com/reel/DSI91HrApMw/",
    posterWebp: "/media/reels/ig-reel-04-DSI91HrApMw.webp",
    posterAvif: "/media/reels/ig-reel-04-DSI91HrApMw.avif",
    featuredOnHome: true,
  },
  {
    id: "reel-05-sudan-luwaib-mourning-tent",
    number: "05",
    group: "instagram",
    format: "on_camera_reel",
    networkBadge: { ar: "قناة الحدث · آخر خبر", en: "Al Hadath · Breaking" },
    formatBadge: { ar: "تقديم على الشاشة", en: "On-Camera Presenter" },
    dateDisplay: { ar: "4 نوفمبر 2025", en: "Nov 4, 2025" },
    isoDate: "2025-11-04",
    title: {
      ar: "مأساة قرية «اللويب» في السودان.. حين تحوّل صيوان العزاء إلى مجزرة",
      en: "Tragedy in Sudan’s Al-Luwaib Village After Drone Strike Hits Mourning Tent",
    },
    summary: {
      ar: "تغطية إخبارية وإنسانية ضمن فقرة «آخر خبر» على منصة «الحدث» حول سقوط 50 قتيلاً و40 جريحاً إثر مسيّرة استهدفت صيوان عزاء بالسودان.",
      en: "Presented for Al Hadath’s “Breaking Story,” reporting on a deadly drone strike on a mourning tent in Al-Luwaib, Sudan.",
    },
    sourceUrl: "https://www.instagram.com/reel/DQpp3DXjomI/",
    posterWebp: "/media/reels/ig-reel-05-DQpp3DXjomI.webp",
    posterAvif: "/media/reels/ig-reel-05-DQpp3DXjomI.avif",
    featuredOnHome: false,
  },
  {
    id: "reel-06-world-in-minutes-alarabiya24",
    number: "06",
    group: "instagram",
    format: "on_camera_reel",
    networkBadge: { ar: "العربية 24", en: "Al Arabiya 24" },
    formatBadge: { ar: "تقديم على الشاشة", en: "On-Camera Presenter" },
    dateDisplay: { ar: "28 سبتمبر 2025", en: "Sep 28, 2025" },
    isoDate: "2025-09-28",
    title: {
      ar: "العالم في دقائق: خطة السلام في غزة، تأهب فنزويلا، وإعصار فيتنام",
      en: "The World in Minutes: Gaza Peace Plan Debate, Venezuela Tensions & Vietnam Typhoon",
    },
    summary: {
      ar: "تقديم موجز «العالم في دقائق» عبر منصة «العربية 24»، مستعرضةً أبرز التطورات الدولية المتسارعة في جولة إخبارية مركزة.",
      en: "Anchoring Al Arabiya 24’s rapid-fire “The World in Minutes” briefing across three major global developments.",
    },
    sourceUrl: "https://www.instagram.com/reel/DPKCje-gktG/",
    posterWebp: "/media/reels/ig-reel-06-DPKCje-gktG.webp",
    posterAvif: "/media/reels/ig-reel-06-DPKCje-gktG.avif",
    featuredOnHome: true,
  },
  {
    id: "reel-07-us-presidential-inauguration",
    number: "07",
    group: "instagram",
    format: "on_camera_reel",
    networkBadge: { ar: "العربية", en: "Al Arabiya" },
    formatBadge: { ar: "تقديم على الشاشة", en: "On-Camera Presenter" },
    dateDisplay: { ar: "30 أكتوبر 2024", en: "Oct 30, 2024" },
    isoDate: "2024-10-30",
    title: {
      ar: "على درج مبنى الكابيتول بواشنطن.. ماذا نعرف عن مراسم حفل تنصيب الرئيس الأميركي؟",
      en: "On the Steps of the US Capitol: Inside the Presidential Inauguration Ceremony",
    },
    summary: {
      ar: "تقرير مصور تقدمه نضال النعيم عبر «العربية» يشرح تقاليد وبروتوكولات مراسم تنصيب الرئيس الأميركي في العشرين من يناير بالعاصمة واشنطن.",
      en: "On-camera explainer for Al Arabiya detailing the traditions and protocol of the January 20 US Presidential Inauguration in Washington.",
    },
    sourceUrl: "https://www.instagram.com/reel/DBwcYaqpGbV/",
    posterWebp: "/media/reels/ig-reel-07-DBwcYaqpGbV.webp",
    posterAvif: "/media/reels/ig-reel-07-DBwcYaqpGbV.avif",
    featuredOnHome: false,
  },
  {
    id: "reel-08-channel14-target-list",
    number: "08",
    group: "instagram",
    format: "digital_production",
    networkBadge: { ar: "العربية", en: "Al Arabiya" },
    formatBadge: { ar: "إنتاج وسرد رقمي", en: "Digital Video Production" },
    dateDisplay: { ar: "22 أكتوبر 2024", en: "Oct 22, 2024" },
    isoDate: "2024-10-22",
    title: {
      ar: "القناة 14 الإسرائيلية تكشف إضافة منازل المسؤولين الإيرانيين إلى قائمة الأهداف المحتملة",
      en: "Israeli Channel 14 Report on Adding Officials’ Residences to Potential Target Lists",
    },
    summary: {
      ar: "قصة خبرية رقمية عبر منصة «العربية» ترصد التسريبات الإعلامية الإسرائيلية حول قائمة الأهداف المحتملة في ظل التصعيد الإقليمي.",
      en: "Digital newsroom video produced for Al Arabiya tracking Israeli media disclosures amid regional military escalation.",
    },
    sourceUrl: "https://www.instagram.com/reel/DBb2yUYs4hF/",
    posterWebp: "/media/reels/ig-reel-08-DBb2yUYs4hF.webp",
    posterAvif: "/media/reels/ig-reel-08-DBb2yUYs4hF.avif",
    featuredOnHome: false,
  },
  {
    id: "reel-09-private-armor-maintenance",
    number: "09",
    group: "instagram",
    format: "digital_production",
    networkBadge: { ar: "العربية", en: "Al Arabiya" },
    formatBadge: { ar: "إنتاج وسرد رقمي", en: "Digital Video Production" },
    dateDisplay: { ar: "21 أكتوبر 2024", en: "Oct 21, 2024" },
    isoDate: "2024-10-21",
    title: {
      ar: "لأول مرة في تاريخه.. الجيش الإسرائيلي يلجأ لشركات خاصة لإصلاح مدرعاته",
      en: "Facing Multi-Front Strain, Israel’s Military Turns to Private Contractors for Armor Repairs",
    },
    summary: {
      ar: "مادة مرئية رقمية عبر حساب «العربية» تتناول استعانة الجيش الإسرائيلي بشركات خاصة لصيانة آلياته العسكرية على وقع إنهاك القوات في عدة جبهات.",
      en: "Digital video story on Al Arabiya examining unprecedented private-sector maintenance contracting amid multi-front operational strain.",
    },
    sourceUrl: "https://www.instagram.com/reel/DBZhHPBIAQa/",
    posterWebp: "/media/reels/ig-reel-09-DBZhHPBIAQa.webp",
    posterAvif: "/media/reels/ig-reel-09-DBZhHPBIAQa.avif",
    featuredOnHome: false,
  },
  {
    id: "reel-10-iran-maximum-pressure-trump",
    number: "10",
    group: "instagram",
    format: "digital_production",
    networkBadge: { ar: "العربية", en: "Al Arabiya" },
    formatBadge: { ar: "إنتاج وسرد رقمي", en: "Digital Video Production" },
    dateDisplay: { ar: "19 سبتمبر 2024", en: "Sep 19, 2024" },
    isoDate: "2024-09-19",
    title: {
      ar: "هاجس عودة «الضغوط القصوى».. لماذا تخشى إيران عودة دونالد ترمب إلى البيت الأبيض؟",
      en: "Fearing “Maximum Pressure”: Why Iran Dreaded Donald Trump’s Return to the White House",
    },
    summary: {
      ar: "تقرير رقمي تحليلي عبر منصة «العربية» يسلط الضوء على حسابات طهران السياسية والاقتصادية إزاء احتمال عودة سياسة الضغوط القصوى.",
      en: "Analytical digital video produced for Al Arabiya exploring Tehran’s strategic and economic concerns ahead of the US election.",
    },
    sourceUrl: "https://www.instagram.com/reel/DAHK1BzJ3OJ/",
    posterWebp: "/media/reels/ig-reel-10-DAHK1BzJ3OJ.webp",
    posterAvif: "/media/reels/ig-reel-10-DAHK1BzJ3OJ.avif",
    featuredOnHome: false,
  },
  {
    id: "reel-11-elon-musk-trump-alliance",
    number: "11",
    group: "instagram",
    format: "digital_production",
    networkBadge: { ar: "العربية", en: "Al Arabiya" },
    formatBadge: { ar: "إنتاج وسرد رقمي", en: "Digital Video Production" },
    dateDisplay: { ar: "21 أغسطس 2024", en: "Aug 21, 2024" },
    isoDate: "2024-08-21",
    title: {
      ar: "وعد بمنصب رفيع في البيت الأبيض.. سر دعم إيلون ماسك لدونالد ترمب",
      en: "Promised a Senior Role: Inside Elon Musk’s Political Alliance with Donald Trump",
    },
    summary: {
      ar: "قصة رقمية عبر «العربية» تستعرض كواليس التحالف السياسي والإعلامي بين إيلون ماسك ودونالد ترمب خلال السباق الرئاسي الأميركي.",
      en: "Digital explainer on Al Arabiya unpacking the political realignment and White House role behind Elon Musk’s backing of Donald Trump.",
    },
    sourceUrl: "https://www.instagram.com/reel/C-8Ih9xuL4-/",
    posterWebp: "/media/reels/ig-reel-11-C-8Ih9xuL4-.webp",
    posterAvif: "/media/reels/ig-reel-11-C-8Ih9xuL4-.avif",
    featuredOnHome: false,
  },

  // ============================================================================
  // 02 / FACEBOOK (4 VIDEOS — #12 to #15 on Al Hadath Sudan & Al Arabiya Sudan)
  // ============================================================================
  {
    id: "fb-video-12-alhadath-sudan",
    number: "12",
    group: "facebook",
    format: "facebook_broadcast",
    networkBadge: { ar: "الحدث السودان · فيسبوك", en: "Al Hadath Sudan · Facebook" },
    formatBadge: { ar: "تغطية مرئية · فيسبوك", en: "Broadcast Video · Facebook" },
    dateDisplay: { ar: "المنصة الرسمية · الحدث السودان", en: "Official Page · Al Hadath Sudan" },
    title: {
      ar: "تغطية وتقارير مرئية لنضال النعيم عبر «الحدث السودان» (اختيار #12)",
      en: "Broadcast Video Segment on Al Hadath Sudan (Selection #12)",
    },
    summary: {
      ar: "ضمن ملف الأعمال المرئية المختارة على منصة فيسبوك (صفحة قناة الحدث السودان الرسمية) في مجال الصحافة والتقديم الإخباري وإنتاج المحتوى الرقمي.",
      en: "Featured in Nidal Elnaeem’s curated broadcast video portfolio on the official Al Hadath Sudan Facebook page.",
    },
    sourceUrl: "https://www.facebook.com/share/v/1HwbGgC36b/",
    featuredOnHome: false,
  },
  {
    id: "fb-video-13-alhadath-sudan",
    number: "13",
    group: "facebook",
    format: "facebook_broadcast",
    networkBadge: { ar: "الحدث السودان · فيسبوك", en: "Al Hadath Sudan · Facebook" },
    formatBadge: { ar: "تغطية مرئية · فيسبوك", en: "Broadcast Video · Facebook" },
    dateDisplay: { ar: "المنصة الرسمية · الحدث السودان", en: "Official Page · Al Hadath Sudan" },
    title: {
      ar: "تغطية وتقارير مرئية لنضال النعيم عبر «الحدث السودان» (اختيار #13)",
      en: "Broadcast Video Segment on Al Hadath Sudan (Selection #13)",
    },
    summary: {
      ar: "مادة مرئية منشورة عبر الصفحة الرسمية لقناة «الحدث السودان» على فيسبوك ضمن مختاراتها المهنية في التغطية الخبرية والتقديم.",
      en: "Published on the official Al Hadath Sudan Facebook platform as part of her selected journalism and news presentation work.",
    },
    sourceUrl: "https://www.facebook.com/share/v/198tcNDmK7/",
    featuredOnHome: false,
  },
  {
    id: "fb-video-14-alarabiya-sudan",
    number: "14",
    group: "facebook",
    format: "facebook_broadcast",
    networkBadge: { ar: "العربية السودان · فيسبوك", en: "Al Arabiya Sudan · Facebook" },
    formatBadge: { ar: "تغطية مرئية · فيسبوك", en: "Broadcast Video · Facebook" },
    dateDisplay: { ar: "المنصة الرسمية · العربية السودان", en: "Official Page · Al Arabiya Sudan" },
    title: {
      ar: "تقرير ومادة مرئية لنضال النعيم عبر «العربية السودان» (اختيار #14)",
      en: "Broadcast Video Segment on Al Arabiya Sudan (Selection #14)",
    },
    summary: {
      ar: "مادة مرئية منشورة عبر الصفحة الرسمية لـ «العربية السودان» على فيسبوك ضمن ملف أعمالها المختارة في صناعة المحتوى الرقمي والتقديم الإخباري.",
      en: "Published on the official Al Arabiya Sudan Facebook page as part of her selected digital journalism and presentation portfolio.",
    },
    sourceUrl: "https://www.facebook.com/share/v/14yymgjwyZL/",
    featuredOnHome: false,
  },
  {
    id: "fb-video-15-alhadath-sudan",
    number: "15",
    group: "facebook",
    format: "facebook_broadcast",
    networkBadge: { ar: "الحدث السودان · فيسبوك", en: "Al Hadath Sudan · Facebook" },
    formatBadge: { ar: "تغطية مرئية · فيسبوك", en: "Broadcast Video · Facebook" },
    dateDisplay: { ar: "المنصة الرسمية · الحدث السودان", en: "Official Page · Al Hadath Sudan" },
    title: {
      ar: "تغطية وتقارير مرئية لنضال النعيم عبر «الحدث السودان» (اختيار #15)",
      en: "Broadcast Video Segment on Al Hadath Sudan (Selection #15)",
    },
    summary: {
      ar: "مادة مرئية منشورة عبر الصفحة الرسمية لقناة «الحدث السودان» على فيسبوك ضمن مختارات ملفها المرئي الرسمي.",
      en: "Featured broadcast video published on the official Al Hadath Sudan Facebook channel.",
    },
    sourceUrl: "https://www.facebook.com/share/v/1Bfo6y7wYw/",
    featuredOnHome: false,
  },
];
