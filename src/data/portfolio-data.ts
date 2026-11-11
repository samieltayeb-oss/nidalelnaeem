export type Locale = "ar" | "en";

export type ApprovalStatus = "approved" | "pending_owner_verification";

export type WorkCategory =
  | "public_service"
  | "written_journalism"
  | "stage_talk"
  | "television_dialogue"
  | "photo_essay";

export type PlaybackType = "youtube_nocookie" | "facebook_reel" | "external_only";

export interface BilingualText {
  ar: string;
  en: string;
}

export interface WorkItem {
  slug: string;
  title: BilingualText;
  subtitle: BilingualText;
  dateDisplay: BilingualText;
  isoDate?: string;
  duration?: string;
  language: BilingualText;
  category: WorkCategory;
  categoryLabel: BilingualText;
  verifiedRole: BilingualText;
  roleBadgeType:
    | "presented_written"
    | "written_reported"
    | "featured_guest"
    | "photo_journal"
    | "personal_essay"
    | "created_series";
  sourceUrl: string;
  secondarySourceUrl?: string;
  broadcasterOrPlatform: BilingualText;
  summary: BilingualText;
  editorialContext: BilingualText;
  whySelected: BilingualText;
  keyTakeaways: {
    ar: string[];
    en: string[];
  };
  posterAsset: string;
  posterAvif?: string;
  posterFocalPoint: string;
  photographerCredit?: string;
  rightsStatus: BilingualText;
  playbackType: PlaybackType;
  embedUrl?: string;
  playbackNote: BilingualText;
  approvalStatus: ApprovalStatus;
  featuredOnHome?: boolean;
  featuredOnScreen?: boolean;
  featuredInWords?: boolean;
}

export interface JourneyMilestone {
  id: string;
  period: BilingualText;
  organization: BilingualText;
  role: BilingualText;
  natureOfEntry: "broadcast_role" | "journalism_training" | "social_participation";
  natureBadge: BilingualText;
  summary: BilingualText;
  sourceNote: BilingualText;
  sourceUrl: string;
  approvalStatus: ApprovalStatus;
}

export interface JourneyChapter {
  id: string;
  number: string;
  rhythmStyle:
    | "radio-concentric"
    | "television-split"
    | "newsroom-monograph"
    | "public-service-forum";
  eraBadge: BilingualText;
  title: BilingualText;
  subtitle: BilingualText;
  leadParagraph: BilingualText;
  bodyParagraphs: {
    ar: string[];
    en: string[];
  };
  pullQuote?: {
    text: BilingualText;
    attribution: BilingualText;
  };
  portraitAsset: string;
  portraitAvif: string;
  portraitFocalPoint: string;
  portraitCaption: BilingualText;
  photographerCredit?: string;
  milestones: JourneyMilestone[];
  linkedWorkSlugs: string[];
}

export interface PhotoEssayPlate {
  id: string;
  plateNumber: string;
  title: BilingualText;
  setting: BilingualText;
  imageWebp: string;
  imageAvif: string;
  nativeDimensions: string;
  focalPoint: string;
  aspectClass: string;
  caption: BilingualText;
  documentaryNote: BilingualText;
  sourceUrl: string;
  photographerCredit?: string;
  rightsBadge: BilingualText;
  approvalStatus: ApprovalStatus;
}

export const SITE_IDENTITY = {
  name: {
    ar: "نضال النعيم",
    en: "Nidal Elnaeem",
  },
  verifiedTitle: {
    ar: "كاتبة أولى لمنصات التواصل · مقدمة أخبار · مراسلة",
    en: "Senior Social Media Writer · News Presenter · Reporter",
  },
  associationLabel: {
    ar: "العربية · الحدث",
    en: "Al Arabiya · Al Hadath",
  },
  associationContextNote: {
    ar: "صحفية ومقدمة أخبار باللغتين العربية والإنجليزية — مجموعة MBC / قناتي العربية والحدث.",
    en: "Bilingual Journalist & News Presenter — MBC Group / Al Arabiya & Al Hadath.",
  },
  heroOpening: {
    editionTag: {
      ar: "من أثير إذاعة هلا 96 إلى غرفة أخبار قناتي العربية والحدث",
      en: "FROM HALA 96 FM TO AL ARABIYA & AL HADATH NEWSROOMS",
    },
    shortIntro: {
      ar: "صحفية ومقدمة أخبار تعمل باللغتين العربية والإنجليزية بخبرة تتجاوز 7 سنوات في قناتي «العربية» و«الحدث» بين دبي والرياض؛ تجمع بين الحضور المباشر على الشاشة، وصناعة القصة الرقمية من الفكرة حتى النشر، وتوظيف أدوات الذكاء الاصطناعي في غرف الأخبار.",
      en: "Journalist and news presenter working in Arabic and English with over 7 years at Al Arabiya and Al Hadath across Dubai and Riyadh—combining live on-air presence with end-to-end digital storytelling and AI-assisted newsroom production.",
    },
    primaryCta: {
      ar: "شاهد الأعمال المختارة",
      en: "Explore Selected Work",
    },
    secondaryCta: {
      ar: "المسيرة والسيرة المهنية",
      en: "Career & Journey",
    },
    spotlightToggleOn: {
      ar: "إضاءة الاستوديو: متحركة",
      en: "Studio Light: Interactive",
    },
    spotlightToggleOff: {
      ar: "إضاءة الاستوديو: ثابتة",
      en: "Studio Light: Static",
    },
  },
  socialLinks: {
    facebook: {
      url: "https://www.facebook.com/Nidal.elnaeem77",
      label: {
        ar: "فيسبوك",
        en: "Facebook",
      },
      handle: "facebook.com/Nidal.elnaeem77",
      statusNote: {
        ar: "الحساب الرسمي",
        en: "Official Profile",
      },
    },
    instagram: {
      url: "https://www.instagram.com/nidalelnaeem",
      label: {
        ar: "إنستغرام",
        en: "Instagram",
      },
      handle: "@nidalelnaeem",
      statusNote: {
        ar: "الحساب الرسمي",
        en: "Official Account",
      },
    },
    x: {
      url: "https://x.com/ElnaeemNidal",
      label: {
        ar: "منصة إكس (تويتر)",
        en: "X (Twitter)",
      },
      handle: "@ElnaeemNidal",
      statusNote: {
        ar: "الحساب الرسمي",
        en: "Official Account",
      },
    },
    linkedin: {
      url: "https://www.linkedin.com/in/nidalelnaeem77/",
      label: {
        ar: "لينكدإن",
        en: "LinkedIn",
      },
      handle: "linkedin.com/in/nidalelnaeem77",
      statusNote: {
        ar: "الحساب المهني",
        en: "Professional Profile",
      },
    },
    alhadath: {
      url: "https://www.alhadath.net/",
      label: {
        ar: "قناة الحدث",
        en: "Al Hadath",
      },
      handle: "alhadath.net",
    },
    alarabiya: {
      url: "https://www.alarabiya.net/",
      label: {
        ar: "العربية.نت",
        en: "Al Arabiya Net",
      },
      handle: "alarabiya.net",
    },
  },
};

export const UI_LABELS = {
  nav: {
    home: { ar: "الرئيسية", en: "Home" },
    journey: { ar: "المسيرة", en: "The Journey" },
    onScreen: { ar: "على الشاشة", en: "On Screen" },
    words: { ar: "كلمات وقصص", en: "Words & Stories" },
    life: { ar: "حياتها ويومياتها", en: "Life & Moments" },
    behind: { ar: "خلف الكواليس", en: "Behind the Work" },
    connect: { ar: "تواصل", en: "Connect" },
  },
  common: {
    switchLangLabel: { ar: "English", en: "العربية" },
    verifiedRole: { ar: "الدور", en: "Role" },
    sourceLink: { ar: "المصدر الأصلي", en: "Original Source" },
    openDossier: { ar: "عرض التفاصيل", en: "View Details" },
    backToOnScreen: { ar: "العودة إلى على الشاشة", en: "Back to On Screen" },
    backToWords: { ar: "العودة إلى كلمات وقصص", en: "Back to Words & Stories" },
    loadMedia: { ar: "تشغيل الفيديو", en: "Play Video" },
    openExternalMedia: { ar: "مشاهدة في المصدر", en: "Watch on Source" },
    readOriginalArticle: { ar: "قراءة المقال كاملاً", en: "Read Full Article" },
    rightsAndProvenance: { ar: "المصدر والحقوق", en: "Source & Credit" },
    localPreviewBadge: { ar: "نسخة معاينة محلية", en: "Local Preview Edition" },
    filterAll: { ar: "كل الأعمال", en: "All Works" },
    filterApprovedOnly: { ar: "المختارات الرئيسية", en: "Primary Selections" },
  },
};

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: "sudan-school-grant-explainer",
    title: {
      ar: "رسالة لأولياء الأمور حول مشروع المنح المدرسية في السودان",
      en: "Addressing Parents on the Sudan School-Grant Project",
    },
    subtitle: {
      ar: "إضاءة توعوية حول مشروع دعم المدارس المشترك بين اليونيسف ووزارة التربية والتعليم السودانية",
      en: "Explaining a school-grant initiative involving UNICEF and Sudan’s Ministry of Education",
    },
    dateDisplay: {
      ar: "6 مارس 2026",
      en: "March 6, 2026",
    },
    isoDate: "2026-03-06",
    duration: "02:10",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "public_service",
    categoryLabel: {
      ar: "خدمة عامة · فيديو قصير",
      en: "Public Service · Short Explainer",
    },
    verifiedRole: {
      ar: "تقديم وإعداد: نضال النعيم",
      en: "Presented & Written by Nidal Elnaeem",
    },
    roleBadgeType: "presented_written",
    sourceUrl: "https://www.facebook.com/reel/1620774852498384",
    broadcasterOrPlatform: {
      ar: "فيسبوك ريلز",
      en: "Facebook Reels",
    },
    summary: {
      ar: "مقطع فيديو مدته دقيقتان و10 ثوانٍ تتوجه فيه نضال النعيم إلى الأسر وأولياء الأمور في السودان لشرح تفاصيل مشروع المنح المدرسية المشترك بين منظمة اليونيسف ووزارة التربية والتعليم السودانية، وكيفية متابعة المدارس المحلية للاستفادة من الدعم المتاح.",
      en: "In this two-minute address, Nidal Elnaeem speaks to Sudanese parents about a school-grant program involving UNICEF and Sudan’s Ministry of Education, outlining how local schools and families can navigate the initiative.",
    },
    editorialContext: {
      ar: "قدمت نضال هذا الفيديو كمبادرة توعوية مستقلة لخدمة الأسر السودانية، ولا يمثل عملاً وظيفياً أو منصب سفيرة لدى منظمة اليونيسف.",
      en: "Produced as an independent public-interest explainer for Sudanese families; does not imply UNICEF employment or ambassadorship.",
    },
    whySelected: {
      ar: "يُظهر أسلوبها المباشر في تبسيط القضايا الخدمية والتعليمية التي تمس حياة الناس اليومية في السودان.",
      en: "Shows her direct, clear approach to explaining practical education initiatives to families.",
    },
    keyTakeaways: {
      ar: [
        "شرح عملي مبسط لآلية المنح المدرسية ودور المجتمعات المحلية.",
        "إعداد وتقديم مباشر في دقيقتين و10 ثوانٍ.",
        "مبادرة توعوية مستقلة موجهة لأولياء الأمور.",
      ],
      en: [
        "Clear 2:10 breakdown of school grants for Sudanese parents.",
        "Written and presented directly to camera.",
        "Independent public-service communication.",
      ],
    },
    posterAsset: "/media/derivatives/portrait-01-studio-pinstripe.webp",
    posterAvif: "/media/derivatives/portrait-01-studio-pinstripe.avif",
    posterFocalPoint: "50% 34%",
    rightsStatus: {
      ar: "فيديو عام مثبت على صفحتها الرسمية في فيسبوك.",
      en: "Public pinned Reel on Nidal Elnaeem’s Facebook profile.",
    },
    playbackType: "facebook_reel",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1620774852498384&show_text=false&width=380",
    playbackNote: {
      ar: "اضغط «تشغيل الفيديو» لتحميل المشغل، أو افتح الفيديو مباشرة في فيسبوك.",
      en: "Click Play Video to load the player, or open the Reel directly on Facebook.",
    },
    approvalStatus: "approved",
    featuredOnHome: true,
    featuredOnScreen: true,
    featuredInWords: false,
  },
  {
    slug: "alarabiya-sudan-protest-lexicon",
    title: {
      ar: "كيف تفك شفرات مصطلحات شعارات الحراك السوداني؟",
      en: "Decoding the Chants and Lexicon of the Sudanese Street Movement",
    },
    subtitle: {
      ar: "تقرير منشور في «العربية.نت» يشرح للقارئ العربي جذور ومعاني الهتافات والمفردات السودانية",
      en: "Published on Al Arabiya Net, explaining the cultural and political roots of Sudanese protest slogans",
    },
    dateDisplay: {
      ar: "26 مايو 2019",
      en: "May 26, 2019",
    },
    isoDate: "2019-05-26",
    duration: "مقال صحفي",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "written_journalism",
    categoryLabel: {
      ar: "صحافة مكتوبة · العربية.نت",
      en: "Written Journalism · Al Arabiya Net",
    },
    verifiedRole: {
      ar: "كتابة وتقرير: نضال النعيم",
      en: "Written & Reported by Nidal Elnaeem",
    },
    roleBadgeType: "written_reported",
    sourceUrl:
      "https://www.alarabiya.net/arab-and-world/sudan/2019/05/26/%D9%83%D9%8A%D9%81-%D8%AA%D9%81%D9%83-%D8%B4%D9%81%D8%B1%D8%A7%D8%AA-%D9%85%D8%B5%D8%B7%D9%84%D8%AD%D8%A7%D8%AA-%D8%B4%D8%B9%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D8%AD%D8%B1%D8%A7%D9%83-%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D9%86%D9%8A%D8%9F",
    broadcasterOrPlatform: {
      ar: "العربية.نت",
      en: "Al Arabiya Net",
    },
    summary: {
      ar: "مادة صحفية كتبتها نضال النعيم لموقع «العربية.نت» في مايو 2019، تناولت فيها المفردات والشعارات التي رددها السودانيون خلال الحراك الشعبي، شارحةً خلفياتها الاجتماعية واللغوية للقارئ العربي.",
      en: "Written for Al Arabiya Net in May 2019, this report explains the meanings, origins, and social context behind the slogans and local terms heard across Khartoum during the 2019 demonstrations.",
    },
    editorialContext: {
      ar: "منشور باسمها على موقع «العربية.نت» في مايو 2019، ويمثل إحدى محطات عملها المبكرة مع الشبكة.",
      en: "Published under her byline on Al Arabiya Net in May 2019.",
    },
    whySelected: {
      ar: "نموذج من عملها في الكتابة الصحفية التي تقرّب السياق المحلي السوداني للقارئ العربي.",
      en: "A clear example of her written journalism translating local Sudanese context for a wider Arab readership.",
    },
    keyTakeaways: {
      ar: [
        "شرح الجذور اللغوية والاجتماعية للمفردات السودانية المتداولة في الأخبار.",
        "كتابة صحفية موجهة للقارئ العربي العام.",
        "منشور في قسم السودان بموقع العربية.نت بتاريخ 26 مايو 2019.",
      ],
      en: [
        "Explains local Sudanese expressions and chants for regional readers.",
        "Grounds political news in everyday social and cultural history.",
        "Published on Al Arabiya Net on May 26, 2019.",
      ],
    },
    posterAsset: "/media/derivatives/portrait-04-broadcast-yellow-blazer.webp",
    posterAvif: "/media/derivatives/portrait-04-broadcast-yellow-blazer.avif",
    posterFocalPoint: "52% 24%",
    rightsStatus: {
      ar: "منشور على موقع العربية.نت — يُقرأ كاملاً عبر الرابط الأصلي.",
      en: "Published on Al Arabiya Net — full text available at the original link.",
    },
    playbackType: "external_only",
    playbackNote: {
      ar: "مقال صحفي مكتوب على موقع العربية.نت.",
      en: "Written article on Al Arabiya Net.",
    },
    approvalStatus: "approved",
    featuredOnHome: true,
    featuredOnScreen: false,
    featuredInWords: true,
  },
  {
    slug: "tedx-wad-medani-colorful-woman",
    title: {
      ar: "المرأة متعددة الألوان والطموحات — TEDxWadMedani",
      en: "“The colorful Woman.” — TEDxWadMedani",
    },
    subtitle: {
      ar: "كلمة مسرحية حول تجربتها المهنية وتعدد أدوار المرأة السودانية",
      en: "Stage talk on career transitions and the everyday realities of Sudanese women",
    },
    dateDisplay: {
      ar: "18 يوليو 2018",
      en: "July 18, 2018",
    },
    isoDate: "2018-07-18",
    duration: "12:41",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "stage_talk",
    categoryLabel: {
      ar: "حديث مسرحي · TEDx",
      en: "Stage Talk · TEDx",
    },
    verifiedRole: {
      ar: "متحدثة: نضال النعيم",
      en: "Speaker: Nidal Elnaeem",
    },
    roleBadgeType: "presented_written",
    sourceUrl: "https://www.youtube.com/watch?v=Lc2AyyrgoZ4",
    broadcasterOrPlatform: {
      ar: "قناة TEDx Talks الرسمية",
      en: "Official TEDx Talks Channel",
    },
    summary: {
      ar: "في كلمتها على مسرح TEDxWadMedani (12 دقيقة و41 ثانية)، تتحدث نضال النعيم عن انتقالها من دراسة هندسة البرمجيات إلى العمل الإذاعي والتلفزيوني، وعن قدرة المرأة السودانية على خوض مجالات مهنية وإنسانية متعددة في وقت واحد.",
      en: "In this 12-minute talk at TEDxWadMedani, Nidal Elnaeem speaks about moving from software engineering into radio and television, and why women should not be boxed into a single role.",
    },
    editorialContext: {
      ar: "منشور على القناة الرسمية لمؤتمرات TEDx Talks على يوتيوب في يوليو 2018.",
      en: "Published on the official TEDx Talks YouTube channel in July 2018.",
    },
    whySelected: {
      ar: "يُبرز حضورها في الحديث المباشر أمام الجمهور وسرد التجربة الشخصية ببساطة.",
      en: "Captures her live storytelling in front of an audience.",
    },
    keyTakeaways: {
      ar: [
        "تجربة الانتقال من الدراسة التقنية إلى العمل الإعلامي.",
        "تسليط الضوء على المبادرات النسائية في السودان.",
        "كلمة كاملة مدتها 12:41 متاحة للمشاهدة.",
      ],
      en: [
        "Personal account of entering radio and television in Sudan.",
        "Focuses on women’s practical ambitions and community roles.",
        "Full 12:41 video available on TEDx Talks.",
      ],
    },
    posterAsset: "/media/broadcasts/yt-tedx-wad-medani.webp",
    posterAvif: "/media/broadcasts/yt-tedx-wad-medani.avif",
    posterFocalPoint: "50% 28%",
    rightsStatus: {
      ar: "متاح عبر القناة الرسمية لـ TEDx Talks على يوتيوب.",
      en: "Available via the official TEDx Talks YouTube channel.",
    },
    playbackType: "youtube_nocookie",
    embedUrl: "https://www.youtube-nocookie.com/embed/Lc2AyyrgoZ4?rel=0",
    playbackNote: {
      ar: "اضغط «تشغيل الفيديو» لمشاهدة الكلمة كاملة.",
      en: "Click Play Video to watch the full talk.",
    },
    approvalStatus: "approved",
    featuredOnHome: true,
    featuredOnScreen: true,
    featuredInWords: false,
  },
  {
    slug: "passion-and-perseverance-reflection",
    title: {
      ar: "عن الشغف والمثابرة في العمل الإعلامي",
      en: "On Passion and Perseverance in Media",
    },
    subtitle: {
      ar: "تدوينة شخصية مرفقة ببورتريهات من بيئة العمل حول الاستمرار في المهنة",
      en: "Personal note and studio portraits reflecting on persistence and daily work",
    },
    dateDisplay: {
      ar: "الصفحة الرسمية",
      en: "Official Facebook Post",
    },
    duration: "تدوينة قصيرة",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "written_journalism",
    categoryLabel: {
      ar: "تدوينة شخصية",
      en: "Personal Note",
    },
    verifiedRole: {
      ar: "بقلم: نضال النعيم",
      en: "Written by Nidal Elnaeem",
    },
    roleBadgeType: "personal_essay",
    sourceUrl:
      "https://www.facebook.com/Nidal.elnaeem77/posts/pfbid025LVzHLvTt33GaeiEz7tN4cRn1UYbKXW9DZFecqDdMB63smYpnLJCpWfgjzAfa8HCl",
    secondarySourceUrl:
      "https://www.facebook.com/photo.php?fbid=26052318974417448&set=pb.100001981029300.-2207520000&type=3",
    broadcasterOrPlatform: {
      ar: "فيسبوك",
      en: "Facebook",
    },
    summary: {
      ar: "تدوينة قصيرة نشرتها نضال النعيم مع صورها بالبدلة الكحلية أمام جدار الصور الأرشيفية، تتحدث فيها عن التمسك بالشغف المهني وأهمية الصبر والمثابرة في مسيرتها.",
      en: "Published alongside her navy pinstripe portraits in front of an archival photo wall, this note reflects on staying committed to her work through changing circumstances.",
    },
    editorialContext: {
      ar: "خاطرة شخصية من حسابها الرسمي تعبّر عن نظرتها للمهنة.",
      en: "A personal reflection from her official profile.",
    },
    whySelected: {
      ar: "يعكس نبرتها الهادئة في الكتابة بعيداً عن قوالب الأخبار اليومية.",
      en: "Offers a direct glimpse into her personal voice outside daily news scripts.",
    },
    keyTakeaways: {
      ar: [
        "كلمات مكثفة عن الاستمرار وحب المهنة.",
        "مقترنة بلقطة الاستوديو أمام جدار الصور الأرشيفية.",
      ],
      en: [
        "Personal reflection on endurance in journalism.",
        "Accompanied by the archival-wall studio portrait.",
      ],
    },
    posterAsset: "/media/derivatives/portrait-03-newsroom-archive.webp",
    posterAvif: "/media/derivatives/portrait-03-newsroom-archive.avif",
    posterFocalPoint: "52% 32%",
    rightsStatus: {
      ar: "منشور عام على صفحتها الرسمية في فيسبوك.",
      en: "Public post on her official Facebook profile.",
    },
    playbackType: "external_only",
    playbackNote: {
      ar: "تدوينة مكتوبة — يمكن قراءتها في المنشور الأصلي على فيسبوك.",
      en: "Written post — view original on Facebook.",
    },
    approvalStatus: "approved",
    featuredOnHome: true,
    featuredOnScreen: false,
    featuredInWords: true,
  },
  {
    slug: "saudi-media-forum-riyadh-journal",
    title: {
      ar: "من المنتدى السعودي للإعلام في الرياض",
      en: "At the Saudi Media Forum in Riyadh",
    },
    subtitle: {
      ar: "جولة مصورة من حضورها فعاليات المنتدى السعودي للإعلام بالعاصمة الرياض",
      en: "Photo journal from her attendance at the Saudi Media Forum in Riyadh",
    },
    dateDisplay: {
      ar: "الرياض",
      en: "Riyadh",
    },
    duration: "ألبوم صور",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "photo_essay",
    categoryLabel: {
      ar: "يوميات مهنية · الرياض",
      en: "Photo Journal · Riyadh",
    },
    verifiedRole: {
      ar: "حضور مهني",
      en: "Industry Attendance",
    },
    roleBadgeType: "photo_journal",
    sourceUrl:
      "https://www.facebook.com/Nidal.elnaeem77/posts/pfbid015gncY7yCQ9ZELDwvuCM7u9E1do8ekMxabA9eo4LYkvJAVM1U1zxN8DXQtf53RHtl",
    secondarySourceUrl:
      "https://www.facebook.com/photo.php?fbid=25639588639023819&set=pb.100001981029300.-2207520000&type=3",
    broadcasterOrPlatform: {
      ar: "المنتدى السعودي للإعلام — الرياض",
      en: "Saudi Media Forum — Riyadh",
    },
    summary: {
      ar: "صور من حضور نضال النعيم لفعاليات المنتدى السعودي للإعلام في الرياض، التُقطت أمام مسرح القادة (Leader's Stage).",
      en: "Photographs from Nidal Elnaeem’s attendance at the Saudi Media Forum in Riyadh, taken in front of the Leader’s Stage.",
    },
    editorialContext: {
      ar: "يوثق المنشور حضورها لفعاليات المنتدى في الرياض.",
      en: "Documents her attendance at the forum in Riyadh.",
    },
    whySelected: {
      ar: "جانب من حضورها في الملتقيات الإعلامية العربية في المنطقة.",
      en: "Captures her participation as an attendee at major regional media gatherings.",
    },
    keyTakeaways: {
      ar: [
        "لقطة كاملة الأبعاد من أروقة المنتدى السعودي للإعلام في الرياض.",
      ],
      en: [
        "Portrait from the Saudi Media Forum in Riyadh.",
      ],
    },
    posterAsset: "/media/derivatives/portrait-02-saudi-media-forum.webp",
    posterAvif: "/media/derivatives/portrait-02-saudi-media-forum.avif",
    posterFocalPoint: "50% 30%",
    rightsStatus: {
      ar: "منشور على صفحتها الرسمية.",
      en: "Shared on her official profile.",
    },
    playbackType: "external_only",
    playbackNote: {
      ar: "صورة فوتوغرافية ومنشور على فيسبوك.",
      en: "Photograph and post on Facebook.",
    },
    approvalStatus: "approved",
    featuredOnHome: false,
    featuredOnScreen: false,
    featuredInWords: false,
  },
  {
    slug: "almahatta-dubai-media-dialogue",
    title: {
      ar: "لقاء من دبي حول التجربة الإعلامية — برنامج «أنتي»",
      en: "Conversation in Dubai on Media Work — “Anti” Program",
    },
    subtitle: {
      ar: "حوار مصور في دبي يتناول انتقالها من إعلام الخرطوم إلى غرف الأخبار في الإمارات",
      en: "Filmed in Dubai, discussing her move from Sudanese radio and TV to UAE newsrooms",
    },
    dateDisplay: {
      ar: "27 مايو 2021",
      en: "May 27, 2021",
    },
    isoDate: "2021-05-27",
    duration: "12:16",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "television_dialogue",
    categoryLabel: {
      ar: "لقاء حواري · دبي",
      en: "Interview · Dubai",
    },
    verifiedRole: {
      ar: "ضيفة الحلقة: نضال النعيم",
      en: "Guest Interviewee: Nidal Elnaeem",
    },
    roleBadgeType: "featured_guest",
    sourceUrl: "https://www.youtube.com/watch?v=42q7JY1GMO4",
    secondarySourceUrl: "https://www.youtube.com/watch?v=MHrD8336wM8",
    broadcasterOrPlatform: {
      ar: "قناة المحطة (Almahatta) — يوتيوب",
      en: "Almahatta Channel — YouTube",
    },
    summary: {
      ar: "لقاء مدته 12 دقيقة صور في دبي ضمن برنامج «أنتي»، تتحدث فيه نضال النعيم كضيفة عن خطواتها المهنية بين السودان والإمارات، وطبيعة العمل الصحفي اليومي.",
      en: "A 12-minute interview filmed in Dubai for the program “Anti,” in which Nidal Elnaeem discusses her career between Sudan and the UAE.",
    },
    editorialContext: {
      ar: "شاركت في هذه الحلقة كضيفة حوار (وليس كمقدمة للبرنامج).",
      en: "Featured as a guest interviewee on the program.",
    },
    whySelected: {
      ar: "يقدم حديثاً عفوياً ومباشراً عن تجربتها المهنية في دبي.",
      en: "Provides a candid conversation about her work in Dubai.",
    },
    keyTakeaways: {
      ar: [
        "حوار مصور في دبي عام 2021 (12:16).",
        "يتطرق لتجربة العمل الإعلامي خارج السودان.",
      ],
      en: [
        "12:16 conversation filmed in Dubai in May 2021.",
        "Reflects on adapting to regional newsroom work.",
      ],
    },
    posterAsset: "/media/broadcasts/yt-enti-dubai.webp",
    posterAvif: "/media/broadcasts/yt-enti-dubai.avif",
    posterFocalPoint: "50% 25%",
    rightsStatus: {
      ar: "منشور على قناة المحطة في يوتيوب.",
      en: "Published on Almahatta YouTube channel.",
    },
    playbackType: "youtube_nocookie",
    embedUrl: "https://www.youtube-nocookie.com/embed/42q7JY1GMO4?rel=0",
    playbackNote: {
      ar: "اضغط «تشغيل الفيديو» للمشاهدة.",
      en: "Click Play Video to watch.",
    },
    approvalStatus: "pending_owner_verification",
    featuredOnHome: false,
    featuredOnScreen: true,
    featuredInWords: false,
  },
  {
    slug: "hikayat-nidal-digital-series",
    title: {
      ar: "سلسلة «حكايات نضال» على منصات التواصل",
      en: "“Hikayat Nidal” (Nidal’s Tales) — Social Video Series",
    },
    subtitle: {
      ar: "فقرات رقمية أطلقتها عام 2018 لتسليط الضوء على قصص نساء سودانيات",
      en: "A 2018 social-media storytelling series profiling Sudanese women",
    },
    dateDisplay: {
      ar: "أبريل 2018",
      en: "April 2018",
    },
    isoDate: "2018-04-15",
    duration: "سلسلة رقمية",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "written_journalism",
    categoryLabel: {
      ar: "سرد رقمي · 2018",
      en: "Digital Series · 2018",
    },
    verifiedRole: {
      ar: "إعداد وتقديم: نضال النعيم",
      en: "Created & Presented by Nidal Elnaeem",
    },
    roleBadgeType: "created_series",
    sourceUrl: "https://www.alnilin.com/12930288.htm",
    secondarySourceUrl: "https://kushnews.net/2018/04/40516",
    broadcasterOrPlatform: {
      ar: "منصات التواصل الاجتماعي (تغطية موقع النيلين وكوش نيوز)",
      en: "Social Platforms (Covered by Alnilin & Kush News)",
    },
    summary: {
      ar: "بعد انتهاء فترتها في قناة الشروق الفضائية في ربيع 2018، أطلقت نضال النعيم سلسلة «حكايات نضال» عبر منصات التواصل الاجتماعي لرواية قصص نساء سودانيات صنعن تجارب ناجحة في مجتمعاتهن.",
      en: "Launched in April 2018 after her time at Ashorooq TV, “Hikayat Nidal” was an independent social-media series sharing the stories of Sudanese women making a mark in their communities.",
    },
    editorialContext: {
      ar: "تجربة مبكرة في كتابة وإنتاج القصص المخصصة لمنصات التواصل الاجتماعي.",
      en: "An early foray into writing and producing stories specifically for social platforms.",
    },
    whySelected: {
      ar: "يمثل حلقة الربط بين عملها التلفزيوني وتخصصها اللاحق في الكتابة الرقمية.",
      en: "Links her television presenting with her later focus on social media writing.",
    },
    keyTakeaways: {
      ar: [
        "مبادرة سرد قصصي عبر منصات التواصل عام 2018.",
        "تركيز على التجارب الإنسانية والمهنية للمرأة في السودان.",
      ],
      en: [
        "Independent digital storytelling series launched in 2018.",
        "Focused on women’s everyday achievements in Sudan.",
      ],
    },
    posterAsset: "/media/derivatives/portrait-01-studio-pinstripe.webp",
    posterAvif: "/media/derivatives/portrait-01-studio-pinstripe.avif",
    posterFocalPoint: "50% 34%",
    rightsStatus: {
      ar: "موثق عبر الأرشيف الصحفي السوداني (أبريل 2018).",
      en: "Documented in April 2018 Sudanese press archives.",
    },
    playbackType: "external_only",
    playbackNote: {
      ar: "تغطية صحفية أرشيفية لإطلاق السلسلة.",
      en: "Archival press coverage of the series launch.",
    },
    approvalStatus: "pending_owner_verification",
    featuredOnHome: false,
    featuredOnScreen: false,
    featuredInWords: true,
  },
  {
    slug: "kouni-kandaka-initiative-spotlight",
    title: {
      ar: "مبادرة «كوني كنداكة» والمشاركة في برنامج الملكة — سودانية 24",
      en: "“Kouni Kandaka” Initiative & Al Malika Participation — Sudania 24 TV",
    },
    subtitle: {
      ar: "لقاء تلفزيوني عام 2016 حول مبادرتها المجتمعية ومشاركتها في برنامج «الملكة»",
      en: "2016 broadcast interview on her community initiative and participation in Al Malika",
    },
    dateDisplay: {
      ar: "25 ديسمبر 2016",
      en: "December 25, 2016",
    },
    isoDate: "2016-12-25",
    duration: "09:15",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "television_dialogue",
    categoryLabel: {
      ar: "لقاء تلفزيوني · سودانية 24",
      en: "TV Interview · Sudania 24",
    },
    verifiedRole: {
      ar: "ضيفة البرنامج وصاحبة المبادرة: نضال النعيم",
      en: "Initiative Founder & Guest: Nidal Elnaeem",
    },
    roleBadgeType: "featured_guest",
    sourceUrl: "https://www.youtube.com/watch?v=KGUumPZNtus",
    broadcasterOrPlatform: {
      ar: "قناة سودانية 24 — برنامج صباحات سودانية",
      en: "Sudania 24 TV — Sabahat Sudania",
    },
    summary: {
      ar: "تستضيف قناة «سودانية 24» نضال النعيم للحديث عن مبادرتها «كوني كنداكة» التي انطلقت من برنامجها الإذاعي لدعم الفتيات والنساء، وعن مشاركتها بالمبادرة في برنامج المسؤولية الاجتماعية العربي «الملكة» عام 2016.",
      en: "In this nine-minute segment on Sudania 24 TV, Nidal Elnaeem discusses her radio-born women’s initiative “Kouni Kandaka” and her 2016 participation in the pan-Arab social-responsibility program Al Malika.",
    },
    editorialContext: {
      ar: "مسجلة في صفحتها الرسمية ضمن محطات المشاركة المجتمعية والإعلامية لعام 2016.",
      en: "Listed in her profile history as a 2016 program participation and community initiative.",
    },
    whySelected: {
      ar: "يوثق بالصوت والصورة محطة «الملكة / كوني كنداكة» عام 2016.",
      en: "Primary broadcast footage of her 2016 “Kouni Kandaka” initiative.",
    },
    keyTakeaways: {
      ar: [
        "تحويل فكرة إذاعية في الخرطوم إلى مبادرة مجتمعية.",
        "مشاركة باسم السودان في برنامج الملكة عام 2016.",
      ],
      en: [
        "Shows how her radio show sparked a practical community initiative.",
        "Documents her 2016 participation in Al Malika.",
      ],
    },
    posterAsset: "/media/derivatives/portrait-01-studio-pinstripe.webp",
    posterAvif: "/media/derivatives/portrait-01-studio-pinstripe.avif",
    posterFocalPoint: "50% 34%",
    rightsStatus: {
      ar: "منشور على القناة الرسمية لـ سودانية 24 في يوتيوب.",
      en: "Published on Sudania 24 TV’s official YouTube channel.",
    },
    playbackType: "youtube_nocookie",
    embedUrl: "https://www.youtube-nocookie.com/embed/KGUumPZNtus?rel=0",
    playbackNote: {
      ar: "اضغط «تشغيل الفيديو» لمشاهدة اللقاء.",
      en: "Click Play Video to watch the segment.",
    },
    approvalStatus: "approved",
    featuredOnHome: false,
    featuredOnScreen: true,
    featuredInWords: false,
  },
  {
    slug: "sudania24-creative-spotlight-radio-roots",
    title: {
      ar: "البدايات في إذاعة «هلا 96» وبرنامج «هلا وهن» — سودانية 24",
      en: "Radio Beginnings at Hala 96 FM & “Hala Wa Hun” — Sudania 24 TV",
    },
    subtitle: {
      ar: "حوار تلفزيوني من عام 2016 تروي فيه تجربتها الإذاعية الأولى في الخرطوم",
      en: "2016 studio interview recounting her early radio work in Khartoum",
    },
    dateDisplay: {
      ar: "1 أكتوبر 2016",
      en: "October 1, 2016",
    },
    isoDate: "2016-10-01",
    duration: "17:05",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "television_dialogue",
    categoryLabel: {
      ar: "أرشيف تلفزيوني · البدايات",
      en: "Archival Interview · Radio Roots",
    },
    verifiedRole: {
      ar: "ضيفة الفقرة: نضال النعيم",
      en: "Guest Interviewee: Nidal Elnaeem",
    },
    roleBadgeType: "featured_guest",
    sourceUrl: "https://www.youtube.com/watch?v=kHFGHvQFRCM",
    broadcasterOrPlatform: {
      ar: "قناة سودانية 24 — صباحات سودانية",
      en: "Sudania 24 TV — Sabahat Sudania",
    },
    summary: {
      ar: "حوار يمتد لـ 17 دقيقة على قناة «سودانية 24»، تتحدث فيه نضال النعيم عن دخولها مجال الإذاعة عبر «هلا 96 إف إم»، وكواليس إعداد وتقديم برنامجها الاجتماعي «هلا وهن».",
      en: "A 17-minute conversation on Sudania 24 TV where Nidal Elnaeem talks about starting out on Hala 96 FM in Khartoum and hosting the social program “Hala Wa Hun.”",
    },
    editorialContext: {
      ar: "لقاء أرشيفي من أكتوبر 2016 يوثق تجربتها الإذاعية بلسانها.",
      en: "October 2016 archival interview documenting her radio years.",
    },
    whySelected: {
      ar: "أوفى شهادة مصورة تتحدث فيها عن سنوات العمل في إذاعة «هلا 96».",
      en: "Detailed first-person account of her years at Hala 96 FM.",
    },
    keyTakeaways: {
      ar: [
        "تفاصيل إعداد برنامج «هلا وهن» الإذاعي.",
        "حوار ممتد لـ 17 دقيقة من أرشيف سودانية 24.",
      ],
      en: [
        "Covers the making of her radio show “Hala Wa Hun.”",
        "17-minute archival conversation from 2016.",
      ],
    },
    posterAsset: "/media/broadcasts/yt-sudania24-mubdi.webp",
    posterAvif: "/media/broadcasts/yt-sudania24-mubdi.avif",
    posterFocalPoint: "50% 26%",
    rightsStatus: {
      ar: "أرشيف قناة سودانية 24 على يوتيوب.",
      en: "Sudania 24 TV YouTube archive.",
    },
    playbackType: "youtube_nocookie",
    embedUrl: "https://www.youtube-nocookie.com/embed/kHFGHvQFRCM?rel=0",
    playbackNote: {
      ar: "اضغط «تشغيل الفيديو» لمشاهدة الحوار.",
      en: "Click Play Video to watch the interview.",
    },
    approvalStatus: "pending_owner_verification",
    featuredOnHome: false,
    featuredOnScreen: true,
    featuredInWords: false,
  },
  {
    slug: "blue-nile-tv-masa-jadeed-dialogue",
    title: {
      ar: "لقاء برنامج «مساء جديد» — قناة النيل الأزرق",
      en: "“Masa’a Jadeed” Interview — Blue Nile TV",
    },
    subtitle: {
      ar: "استضافة تلفزيونية عام 2016 حول البرامج الشبابية والمبادرات المجتمعية",
      en: "2016 evening broadcast segment on youth programming and community work",
    },
    dateDisplay: {
      ar: "25 أغسطس 2016",
      en: "August 25, 2016",
    },
    isoDate: "2016-08-25",
    duration: "10:20",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "television_dialogue",
    categoryLabel: {
      ar: "أرشيف تلفزيوني · النيل الأزرق",
      en: "Archival TV · Blue Nile TV",
    },
    verifiedRole: {
      ar: "ضيفة البرنامج: نضال النعيم",
      en: "Guest Interviewee: Nidal Elnaeem",
    },
    roleBadgeType: "featured_guest",
    sourceUrl: "https://www.youtube.com/watch?v=XAZPJGnSw6c",
    broadcasterOrPlatform: {
      ar: "قناة النيل الأزرق — برنامج مساء جديد",
      en: "Blue Nile TV — Masa’a Jadeed",
    },
    summary: {
      ar: "فقرة حوارية مدتها 10 دقائق على شاشة قناة النيل الأزرق الفضائية في أغسطس 2016، تناقش فيها نضال النعيم تجربتها في البرامج الإذاعية والمجتمعية.",
      en: "A 10-minute evening interview on Blue Nile TV’s “Masa’a Jadeed” in August 2016, discussing her radio work and social initiatives in Khartoum.",
    },
    editorialContext: {
      ar: "إطلالة كضيفة في برنامج «مساء جديد» على قناة النيل الأزرق.",
      en: "Guest appearance on Blue Nile TV’s evening program.",
    },
    whySelected: {
      ar: "جزء من الأرشيف التلفزيوني الموثق لبداياتها في القنوات السودانية.",
      en: "Part of her documented 2016 Sudanese broadcast archive.",
    },
    keyTakeaways: {
      ar: [
        "حوار تلفزيوني مسائي مدته 10 دقائق و20 ثانية.",
        "منشور على القناة الرسمية للنيل الأزرق في يوتيوب.",
      ],
      en: [
        "10:20 prime-time interview on Blue Nile TV.",
        "Available on Blue Nile TV’s official YouTube archive.",
      ],
    },
    posterAsset: "/media/broadcasts/yt-bluenile-masaa-jadeed.webp",
    posterAvif: "/media/broadcasts/yt-bluenile-masaa-jadeed.avif",
    posterFocalPoint: "50% 28%",
    rightsStatus: {
      ar: "أرشيف قناة النيل الأزرق على يوتيوب.",
      en: "Blue Nile TV official YouTube archive.",
    },
    playbackType: "youtube_nocookie",
    embedUrl: "https://www.youtube-nocookie.com/embed/XAZPJGnSw6c?rel=0",
    playbackNote: {
      ar: "اضغط «تشغيل الفيديو» لمشاهدة اللقاء.",
      en: "Click Play Video to watch.",
    },
    approvalStatus: "pending_owner_verification",
    featuredOnHome: false,
    featuredOnScreen: true,
    featuredInWords: false,
  },
  {
    slug: "makana-program-episode-9",
    title: {
      ar: "حوار برنامج «مكنة» (الحلقة 9) مع نضال النعيم",
      en: "“Makana” (Episode 9) — Extended Conversation With Nidal Elnaeem",
    },
    subtitle: {
      ar: "لقاء حواري حول مسيرتها الإعلامية وتجربتها بين الخرطوم ودبي",
      en: "In-depth interview covering her media career between Khartoum and Dubai",
    },
    dateDisplay: {
      ar: "مايو 2021",
      en: "May 2021",
    },
    isoDate: "2021-05-20",
    duration: "حلقة حوارية",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "television_dialogue",
    categoryLabel: {
      ar: "حوار مصور · برنامج مكنة",
      en: "Video Interview · Makana",
    },
    verifiedRole: {
      ar: "ضيفة الحلقة: نضال النعيم",
      en: "Featured Guest: Nidal Elnaeem",
    },
    roleBadgeType: "featured_guest",
    sourceUrl: "https://www.youtube.com/watch?v=MHrD8336wM8",
    broadcasterOrPlatform: {
      ar: "برنامج مكنة — يوتيوب",
      en: "Makana Program — YouTube",
    },
    summary: {
      ar: "الحلقة التاسعة من برنامج «مكنة» مع الإعلامية نضال النعيم، وتتناول محطات عملها في الإذاعة والتلفزيون والصحافة الرقمية، وتجربة العمل في المؤسسات الإعلامية العربية.",
      en: "Episode 9 of the interview series “Makana,” featuring Nidal Elnaeem discussing her journey across radio, television, and pan-Arab digital newsrooms.",
    },
    editorialContext: {
      ar: "لقاء حواري مسجل شاركت فيه كضيفة رئيسية للحلقة.",
      en: "Recorded interview episode in which she appears as the featured guest.",
    },
    whySelected: {
      ar: "يقدم حواراً موسعاً حول تجربتها المهنية ورؤيتها للعمل الإعلامي.",
      en: "Offers an extended conversation on her professional path and approach to media.",
    },
    keyTakeaways: {
      ar: [
        "استعراض لمحطات الانتقال من الإذاعة المحلية إلى غرف الأخبار العربية.",
        "حديث مفتوح عن تحديات المهنة وتطوير المهارات الصحفية.",
      ],
      en: [
        "Traces her transition from local radio to regional newsrooms.",
        "Candid discussion on journalistic craft and career growth.",
      ],
    },
    posterAsset: "/media/broadcasts/yt-makana-ep9.webp",
    posterAvif: "/media/broadcasts/yt-makana-ep9.avif",
    posterFocalPoint: "50% 28%",
    rightsStatus: {
      ar: "متاح عبر يوتيوب.",
      en: "Available via YouTube.",
    },
    playbackType: "youtube_nocookie",
    embedUrl: "https://www.youtube-nocookie.com/embed/MHrD8336wM8?rel=0",
    playbackNote: {
      ar: "اضغط «تشغيل الفيديو» لمشاهدة الحلقة.",
      en: "Click Play Video to watch the episode.",
    },
    approvalStatus: "approved",
    featuredOnHome: true,
    featuredOnScreen: true,
    featuredInWords: false,
  },
  {
    slug: "bluenile-zoul-sudani-dialogue",
    title: {
      ar: "فقرة «زول سوداني» في برنامج «مساء الجمعة» — النيل الأزرق",
      en: "“Zoul Sudani” Segment on “Masa’a Al-Jumaa” — Blue Nile TV",
    },
    subtitle: {
      ar: "إطلالة حوارية على شاشة قناة النيل الأزرق الفضائية",
      en: "Friday evening television conversation on Blue Nile TV",
    },
    dateDisplay: {
      ar: "أرشيف النيل الأزرق",
      en: "Blue Nile TV Archive",
    },
    duration: "فقرة تلفزيونية",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "television_dialogue",
    categoryLabel: {
      ar: "لقاء تلفزيوني · النيل الأزرق",
      en: "TV Segment · Blue Nile TV",
    },
    verifiedRole: {
      ar: "ضيفة الفقرة: نضال النعيم",
      en: "Guest Interviewee: Nidal Elnaeem",
    },
    roleBadgeType: "featured_guest",
    sourceUrl: "https://www.youtube.com/watch?v=N4hCrG_sErw",
    broadcasterOrPlatform: {
      ar: "قناة النيل الأزرق — مساء الجمعة",
      en: "Blue Nile TV — Masa’a Al-Jumaa",
    },
    summary: {
      ar: "استضافة تلفزيونية للإعلامية نضال النعيم ضمن فقرة «زول سوداني» في برنامج «مساء الجمعة» عبر شاشة قناة النيل الأزرق، تتحدث فيها عن مبادراتها وتجربتها الإعلامية.",
      en: "Television appearance by Nidal Elnaeem on Blue Nile TV’s Friday evening program “Masa’a Al-Jumaa” (Zoul Sudani segment), discussing her media work and social initiatives.",
    },
    editorialContext: {
      ar: "إطلالة كضيفة في برنامج «مساء الجمعة» على قناة النيل الأزرق.",
      en: "Guest interview on Blue Nile TV’s Friday evening program.",
    },
    whySelected: {
      ar: "يوثق حضورها في البرامج الجماهيرية السودانية.",
      en: "Documents her presence on Sudanese prime-time television.",
    },
    keyTakeaways: {
      ar: [
        "لقاء تلفزيوني ضمن برنامج «مساء الجمعة».",
        "محفوظ في الأرشيف الرسمي لقناة النيل الأزرق.",
      ],
      en: [
        "Featured conversation on Blue Nile TV’s Friday evening show.",
        "Preserved on Blue Nile TV’s official YouTube channel.",
      ],
    },
    posterAsset: "/media/broadcasts/yt-bluenile-zoul-sudani.webp",
    posterAvif: "/media/broadcasts/yt-bluenile-zoul-sudani.avif",
    posterFocalPoint: "50% 25%",
    rightsStatus: {
      ar: "أرشيف قناة النيل الأزرق على يوتيوب.",
      en: "Blue Nile TV official YouTube archive.",
    },
    playbackType: "youtube_nocookie",
    embedUrl: "https://www.youtube-nocookie.com/embed/N4hCrG_sErw?rel=0",
    playbackNote: {
      ar: "اضغط «تشغيل الفيديو» لمشاهدة اللقاء.",
      en: "Click Play Video to watch.",
    },
    approvalStatus: "approved",
    featuredOnHome: false,
    featuredOnScreen: true,
    featuredInWords: false,
  },
  {
    slug: "almalika-jury-award-dialogue",
    title: {
      ar: "حوار حول المشاركة في «برنامج الملكة» ومبادرة «كوني كنداكة»",
      en: "Interview on Her “Al Malika” Participation & “Kouni Kandaka”",
    },
    subtitle: {
      ar: "لقاء تلفزيوني عام 2016 حول تمثيل المبادرات المجتمعية السودانية",
      en: "2016 television interview on representing Sudanese community initiatives",
    },
    dateDisplay: {
      ar: "مايو 2016",
      en: "May 2016",
    },
    isoDate: "2016-05-10",
    duration: "لقاء تلفزيوني",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "television_dialogue",
    categoryLabel: {
      ar: "أرشيف تلفزيوني · 2016",
      en: "Archival TV · 2016",
    },
    verifiedRole: {
      ar: "ضيفة اللقاء: نضال النعيم",
      en: "Guest Interviewee: Nidal Elnaeem",
    },
    roleBadgeType: "featured_guest",
    sourceUrl: "https://www.youtube.com/watch?v=htLIeWsYy48",
    secondarySourceUrl: "https://www.alnilin.com/12776942.htm",
    broadcasterOrPlatform: {
      ar: "أرشيف التلفزيون والصحافة السودانية (النيلين)",
      en: "Sudanese Broadcast & Press Archive",
    },
    summary: {
      ar: "لقاء تلفزيوني من مايو 2016 تتحدث فيه نضال النعيم عن كواليس مشاركتها بمبادرة «كوني كنداكة» في برنامج «الملكة» للمسؤولية الاجتماعية، وكيف تفاعلت المستمعات مع المبادرة.",
      en: "A May 2016 television interview in which Nidal Elnaeem speaks about her participation with the “Kouni Kandaka” initiative in the social-responsibility program Al Malika.",
    },
    editorialContext: {
      ar: "لقاء أرشيفي مصور من عام 2016.",
      en: "Archival television interview from May 2016.",
    },
    whySelected: {
      ar: "يُكمل توثيق محطة عام 2016 ومبادرة «كوني كنداكة».",
      en: "Complements the archival documentation of her 2016 “Kouni Kandaka” initiative.",
    },
    keyTakeaways: {
      ar: [
        "تفاصيل إطلاق مبادرة «كوني كنداكة» من إذاعة هلا 96.",
        "تغطية مصورة ومكتوبة في الأرشيف السوداني لعام 2016.",
      ],
      en: [
        "Background on launching “Kouni Kandaka” from Hala 96 FM.",
        "Video and written archive from May 2016.",
      ],
    },
    posterAsset: "/media/broadcasts/yt-almalika-jury-award.webp",
    posterAvif: "/media/broadcasts/yt-almalika-jury-award.avif",
    posterFocalPoint: "50% 25%",
    rightsStatus: {
      ar: "محفوظ في أرشيف يوتيوب والنيلين (2016).",
      en: "Preserved on YouTube & Al-Nilin archive (2016).",
    },
    playbackType: "youtube_nocookie",
    embedUrl: "https://www.youtube-nocookie.com/embed/htLIeWsYy48?rel=0",
    playbackNote: {
      ar: "اضغط «تشغيل الفيديو» لمشاهدة اللقاء.",
      en: "Click Play Video to watch.",
    },
    approvalStatus: "approved",
    featuredOnHome: false,
    featuredOnScreen: true,
    featuredInWords: false,
  },
  {
    slug: "mbc-group-harvest-reflection",
    title: {
      ar: "«أنت حصاد نفسك.. حصاد الكتب التي تقرأ والصحبة التي تختار»",
      en: "“You Are Your Own Harvest — The Books You Read, The Company You Keep”",
    },
    subtitle: {
      ar: "خاطرة مكتوبة من مدينة دبي للإعلام حول بناء الذات والقراءة والأثر الإنساني",
      en: "Written reflection from Dubai Media City on reading, character, and personal growth",
    },
    dateDisplay: {
      ar: "دبي · مجموعة MBC",
      en: "Dubai · MBC Group",
    },
    duration: "نص تأملي",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "written_journalism",
    categoryLabel: {
      ar: "تأملات مكتوبة · إنستغرام",
      en: "Written Reflection · Instagram",
    },
    verifiedRole: {
      ar: "بقلم: نضال النعيم",
      en: "Written by Nidal Elnaeem",
    },
    roleBadgeType: "personal_essay",
    sourceUrl: "https://www.instagram.com/p/Cpc27k9yZDg/",
    broadcasterOrPlatform: {
      ar: "حسابها الرسمي على إنستغرام (@nidalelnaeem)",
      en: "Official Instagram (@nidalelnaeem)",
    },
    summary: {
      ar: "نص وجداني كتبته نضال النعيم من مقر مجموعة MBC في دبي: «أنت حصاد نفسك.. حصاد الكتب التي تقرأ.. والمشاعر التي تهبها للآخرين.. والصحبة التي تختار.. والأفكار التي تؤمن بها.. أنت حصاد ما تزرعه في نفسك وفي العالم من حولك».",
      en: "A reflective passage written by Nidal Elnaeem at MBC Group in Dubai: “You are your own harvest—the harvest of the books you read, the feelings you offer others, the company you choose, and the ideas you believe in.”",
    },
    editorialContext: {
      ar: "منشور أصلي على حسابها في إنستغرام مرفق بصورتها في دبي.",
      en: "Original caption and portrait shared on her Instagram from Dubai.",
    },
    whySelected: {
      ar: "يعكس لغتها الأدبية المكثفة التي توازن بين العمل الإخباري السريع والتأمل الإنساني.",
      en: "Illustrates her reflective literary voice alongside her daily newsroom work.",
    },
    keyTakeaways: {
      ar: [
        "نص أصلي بقلمها حول القراءة والاختيارات الإنسانية.",
        "منشور من مقر مجموعة MBC في دبي.",
      ],
      en: [
        "Original reflection on reading, character, and human connection.",
        "Shared from MBC Group in Dubai.",
      ],
    },
    posterAsset: "/media/social/ig-Cpc27k9yZDg-1.webp",
    posterAvif: "/media/social/ig-Cpc27k9yZDg-1.avif",
    posterFocalPoint: "50% 22%",
    rightsStatus: {
      ar: "منشور على حسابها الرسمي في إنستغرام (@nidalelnaeem).",
      en: "Published on her official Instagram (@nidalelnaeem).",
    },
    playbackType: "external_only",
    playbackNote: {
      ar: "تدوينة وصورة على إنستغرام.",
      en: "Written reflection and portrait on Instagram.",
    },
    approvalStatus: "approved",
    featuredOnHome: false,
    featuredOnScreen: false,
    featuredInWords: true,
  },
  {
    slug: "alarabiya-campus-hope-reflection",
    title: {
      ar: "«يمكن للحياة أن تهدينا الجمال والمحبة وسط كل ما يحدث»",
      en: "“Life Can Still Gift Us Beauty and Kindness Amid Everything”",
    },
    subtitle: {
      ar: "كلمات من مقر قناة العربية في دبي حول التمسك بالأمل والجمال في أوقات الأزمات",
      en: "A note from Al Arabiya in Dubai on holding onto warmth during difficult news cycles",
    },
    dateDisplay: {
      ar: "دبي · قناة العربية",
      en: "Dubai · Al Arabiya",
    },
    duration: "كلمات وصورة",
    language: {
      ar: "العربية",
      en: "Arabic",
    },
    category: "written_journalism",
    categoryLabel: {
      ar: "كلمات من دبي · العربية",
      en: "Notes From Dubai · Al Arabiya",
    },
    verifiedRole: {
      ar: "بقلم: نضال النعيم",
      en: "Written by Nidal Elnaeem",
    },
    roleBadgeType: "personal_essay",
    sourceUrl: "https://www.instagram.com/p/CwVltyRSO9d/",
    broadcasterOrPlatform: {
      ar: "إنستغرام — قناة العربية (دبي)",
      en: "Instagram — Al Arabiya (Dubai)",
    },
    summary: {
      ar: "خاطرة موجزة نشرتها نضال النعيم من مقر قناة العربية في دبي، تكتب فيها عن قدرة الإنسان على تلمّس الجمال والمحبة وسط ضغوط الأحداث والأخبار اليومية.",
      en: "Shared from Al Arabiya Channel in Dubai, this brief reflection speaks to preserving human warmth and appreciation for beauty even in the midst of turbulent news cycles.",
    },
    editorialContext: {
      ar: "منشور من حسابها الرسمي على إنستغرام (@nidalelnaeem).",
      en: "Published on her official Instagram (@nidalelnaeem).",
    },
    whySelected: {
      ar: "يُظهر الجانب الإنساني للصحفية التي تتعامل يومياً مع الأخبار العاجلة.",
      en: "Captures the human perspective of a journalist working daily with breaking news.",
    },
    keyTakeaways: {
      ar: [
        "إطلالة وتدوينة من مقر قناة العربية في دبي.",
        "نبرة إنسانية هادئة ومباشرة.",
      ],
      en: [
        "Portrait and reflection from Al Arabiya in Dubai.",
        "Warm, grounded personal voice.",
      ],
    },
    posterAsset: "/media/social/ig-CwVltyRSO9d-1.webp",
    posterAvif: "/media/social/ig-CwVltyRSO9d-1.avif",
    posterFocalPoint: "50% 22%",
    rightsStatus: {
      ar: "منشور على حسابها الرسمي في إنستغرام (@nidalelnaeem).",
      en: "Published on her official Instagram (@nidalelnaeem).",
    },
    playbackType: "external_only",
    playbackNote: {
      ar: "تدوينة وصورة على إنستغرام.",
      en: "Post and portrait on Instagram.",
    },
    approvalStatus: "approved",
    featuredOnHome: false,
    featuredOnScreen: false,
    featuredInWords: true,
  },
];

export const JOURNEY_CHAPTERS: JourneyChapter[] = [
  {
    id: "chapter-radio-beginnings",
    number: "01",
    rhythmStyle: "radio-concentric",
    eraBadge: {
      ar: "الفصل الأول · الخرطوم (أغسطس 2015 – أكتوبر 2018)",
      en: "CHAPTER I · KHARTOUM (AUG 2015 – OCT 2018)",
    },
    title: {
      ar: "البداية من أثير الإذاعة: «هلا 96 إف إم»",
      en: "Starting Out on Live Radio: Hala 96 FM",
    },
    subtitle: {
      ar: "إعداد وتقديم وإخراج مشارك لبرنامج «هلا وهن»، والإشراف على منصات التواصل، ومبادرة «كوني كنداكة»",
      en: "Producing and hosting “Hala & Her (هلا وهن),” Social Media Supervisor, Thomson Foundation training, and “Kouni Kandaka”",
    },
    leadParagraph: {
      ar: "بدأت نضال النعيم مسيرتها الإعلامية في إذاعة «هلا 96 إف إم» بالخرطوم (أغسطس 2015 – أكتوبر 2018، على مدار 3 سنوات و3 أشهر). هناك أنتجت وأخرجت بالشراكة وقدّمت برامج إذاعية جماهيرية، في مقدمتها البرنامج اليومي المباشر المخصص للمرأة «هلا وهن» (Hala & Her).",
      en: "Nidal Elnaeem began her broadcasting career at Khartoum’s Hala 96 FM (August 2015 – October 2018, 3 years 3 months), where she produced, co-directed, and presented popular live shows—most notably “Hala & Her (هلا وهن),” a women-centric daily live program.",
    },
    bodyParagraphs: {
      ar: [
        "إلى جانب عملها خلف الميكروفون، تولّت في الإذاعة نفسها مهام «مشرفة منصات التواصل الاجتماعي» (يونيو – سبتمبر 2018)، حيث خططت ونفذت استراتيجية النشر الرقمي وتابعت الموقع الرسمي والبث الحي عبر الإنترنت، كما عملت مسؤولةً للموارد البشرية ومديرةً للمكتب (ديسمبر 2017 – مارس 2018).",
        "وخلال هذه المرحلة، أتمت تدريباً صحفياً مع «مؤسسة طومسون» (Thomson Foundation) عام 2016، وشاركت بمبادرتها المجتمعية «كوني كنداكة» في برنامج «الملكة».",
      ],
      en: [
        "Alongside her on-air work at Hala 96 FM, she served as Social Media Supervisor (June – September 2018)—planning, monitoring, and executing social media strategy, website updates, and online streaming—as well as HR Officer & Office Manager (December 2017 – March 2018).",
        "During this period in 2016, she also completed journalism training with the Thomson Foundation and participated in the program Al Malika with her community initiative “Kouni Kandaka.”",
      ],
    },
    pullQuote: {
      text: {
        ar: "«الإذاعة تعلّم الصحفي كيف ينصت للناس جيداً قبل أن يتحدث إليهم.»",
        en: "“Live radio teaches you how to listen to people carefully before you speak to them.”",
      },
      attribution: {
        ar: "عن سنوات العمل في إذاعة «هلا 96 إف إم»",
        en: "On her years at Hala 96 FM",
      },
    },
    portraitAsset: "/media/derivatives/portrait-01-studio-pinstripe.webp",
    portraitAvif: "/media/derivatives/portrait-01-studio-pinstripe.avif",
    portraitFocalPoint: "50% 24%",
    portraitCaption: {
      ar: "نضال النعيم في استوديو البث.",
      en: "Nidal Elnaeem in the broadcast studio.",
    },
    milestones: [
      {
        id: "ms-hala96",
        period: { ar: "أغسطس 2015 – أكتوبر 2018 (3 سنوات و3 أشهر)", en: "Aug 2015 – Oct 2018 · 3 yrs 3 mos" },
        organization: { ar: "إذاعة هلا 96 إف إم · الخرطوم، السودان", en: "Hala 96 FM · Khartoum, Sudan" },
        role: { ar: "مذيعة ومعدة ومخرجة مشاركة (Radio Jockey · Presenter & Producer)", en: "Radio Jockey · Presenter & Producer" },
        natureOfEntry: "broadcast_role",
        natureBadge: { ar: "عمل إذاعي", en: "Radio" },
        summary: {
          ar: "إنتاج وإخراج مشترك وتقديم برامج إذاعية جماهيرية، في مقدمتها البرنامج اليومي المباشر المعني بالمرأة «هلا وهن» (Hala & Her).",
          en: "Produced, co-directed, and presented popular radio shows, including “Hala & Her (هلا وهن),” a women-centric daily live show.",
        },
        sourceNote: {
          ar: "حسابها الرسمي على لينكدإن وفيسبوك.",
          en: "Official LinkedIn and Facebook profiles.",
        },
        sourceUrl: "https://www.linkedin.com/in/nidalelnaeem77/",
        approvalStatus: "approved",
      },
      {
        id: "ms-hala96-social-supervisor",
        period: { ar: "يونيو 2018 – سبتمبر 2018 (4 أشهر)", en: "Jun 2018 – Sep 2018 · 4 mos" },
        organization: { ar: "إذاعة هلا 96 إف إم · الخرطوم، السودان", en: "Hala 96 FM · Khartoum, Sudan" },
        role: { ar: "مشرفة منصات التواصل الاجتماعي (Social Media Supervisor)", en: "Social Media Supervisor" },
        natureOfEntry: "broadcast_role",
        natureBadge: { ar: "إعلام رقمي", en: "Digital Media" },
        summary: {
          ar: "تخطيط ومتابعة وتنفيذ استراتيجية منصات التواصل الاجتماعي وتحديثاتها، والإشراف على محتوى الموقع الرسمي للإذاعة والبث المباشر عبر الإنترنت.",
          en: "Planned, monitored, and executed social media strategy and updates, and monitored the official radio station’s website info and online streaming.",
        },
        sourceNote: {
          ar: "حسابها الرسمي على لينكدإن.",
          en: "Official LinkedIn profile.",
        },
        sourceUrl: "https://www.linkedin.com/in/nidalelnaeem77/",
        approvalStatus: "approved",
      },
      {
        id: "ms-hala96-hr-office",
        period: { ar: "ديسمبر 2017 – مارس 2018 (4 أشهر)", en: "Dec 2017 – Mar 2018 · 4 mos" },
        organization: { ar: "إذاعة هلا 96 إف إم · الخرطوم، السودان", en: "Hala 96 FM · Khartoum, Sudan" },
        role: { ar: "مسؤولة الموارد البشرية ومديرة المكتب (HR Officer - Office Manager)", en: "HR Officer - Office Manager" },
        natureOfEntry: "broadcast_role",
        natureBadge: { ar: "إدارة", en: "Management" },
        summary: {
          ar: "إدارة شؤون المكتب والموارد البشرية في إذاعة هلا 96 إف إم بالخرطوم إلى جانب عملها البرامجي.",
          en: "Served as HR Officer and Office Manager at Hala 96 FM in Khartoum.",
        },
        sourceNote: {
          ar: "حسابها الرسمي على لينكدإن.",
          en: "Official LinkedIn profile.",
        },
        sourceUrl: "https://www.linkedin.com/in/nidalelnaeem77/",
        approvalStatus: "approved",
      },
      {
        id: "ms-thomson-2016",
        period: { ar: "2016", en: "2016" },
        organization: { ar: "مؤسسة طومسون (Thomson Foundation)", en: "Thomson Foundation" },
        role: { ar: "تدريب صحفي وإعلامي", en: "Journalism Training" },
        natureOfEntry: "journalism_training",
        natureBadge: { ar: "تدريب مهني", en: "Training" },
        summary: {
          ar: "إتمام برنامج تدريبي في المهارات الصحفية والإعلامية عام 2016.",
          en: "Completed professional journalism training in 2016.",
        },
        sourceNote: {
          ar: "مسجل في صفحتها الرسمية على فيسبوك.",
          en: "Listed on her official Facebook profile.",
        },
        sourceUrl: "https://www.facebook.com/Nidal.elnaeem77",
        approvalStatus: "approved",
      },
      {
        id: "ms-almalika-2016",
        period: { ar: "2016", en: "2016" },
        organization: { ar: "برنامج الملكة / مبادرة «كوني كنداكة»", en: "Al Malika / “Kouni Kandaka”" },
        role: { ar: "مشاركة بمبادرة مجتمعية", en: "Initiative Participation" },
        natureOfEntry: "social_participation",
        natureBadge: { ar: "مبادرة ومشاركة", en: "Participation" },
        summary: {
          ar: "المشاركة بمبادرة «كوني كنداكة» المعنية بتمكين المرأة في برنامج «الملكة».",
          en: "Participated with her women’s initiative “Kouni Kandaka” in the program Al Malika.",
        },
        sourceNote: {
          ar: "صفحتها الرسمية وأرشيف قناة سودانية 24 (ديسمبر 2016).",
          en: "Official Facebook profile and Sudania 24 TV broadcast (Dec 2016).",
        },
        sourceUrl: "https://www.youtube.com/watch?v=KGUumPZNtus",
        approvalStatus: "approved",
      },
    ],
    linkedWorkSlugs: [
      "sudania24-creative-spotlight-radio-roots",
      "kouni-kandaka-initiative-spotlight",
    ],
  },
  {
    id: "chapter-television-horizons",
    number: "02",
    rhythmStyle: "television-split",
    eraBadge: {
      ar: "الفصل الثاني · التلفزيون والمنصات الرقمية (أبريل 2017 – ديسمبر 2018)",
      en: "CHAPTER II · TELEVISION & DIGITAL SERIES (APR 2017 – DEC 2018)",
    },
    title: {
      ar: "أمام الكاميرا: بين «قناة الشروق» ومجلة «سوداني» المرئية",
      en: "Stepping Into Television: Ashorooq TV & Sudani Video Magazine",
    },
    subtitle: {
      ar: "تقديم 3 برامج رئيسية في «الشروق»، والمجلة الشهرية المرئية لـ «سوداني»، وسلسلة «حكايات نضال»",
      en: "Presenting 3 main programs at Ashorooq TV, co-hosting Sudani’s monthly video magazine, and TEDxWadMedani",
    },
    leadParagraph: {
      ar: "بين أبريل 2017 وأغسطس 2018 (سنة و5 أشهر)، انضمت نضال النعيم إلى «قناة الشروق الفضائية» كمذيعة ومقدمة لثلاثة برامج رئيسية، من بينها البرنامج الصباحي اليومي المباشر وبرامج المنوعات والبرامج الثقافية مثل «رواح» و«مع كل الود والتقدير».",
      en: "From April 2017 to August 2018 (1 year 5 months), Nidal joined Ashorooq TV as a television presenter for three main programs—including its daily live morning variety show alongside evening cultural programs.",
    },
    bodyParagraphs: {
      ar: [
        "وفي الفترة من يناير إلى ديسمبر 2018 (سنة كاملة) بالخرطوم، شاركت في تقديم المجلة المرئية الشهرية لشركة «سوداني» (Sudani)، التي غطت أحدث أخبار الشركة وخدمات المسؤولية المجتمعية وأثرها في المجتمع.",
        "وفي العام نفسه (2018)، أطلقت سلسلتها الرقمية «حكايات نضال»، وتحدثت على منصة TEDxWadMedani، وأتمت تدريب «مركز الشباب العربي» قبل انتقالها إلى قناة العربية في مارس 2019.",
      ],
      en: [
        "From January to December 2018 (1 year) in Khartoum, she also served as Presenter for Sudani—co-hosting Sudani’s monthly video magazine covering company news, social responsibility services, and community impact.",
        "In 2018, she also launched the digital series “Hikayat Nidal,” spoke at TEDxWadMedani, and completed media training with the Arab Youth Center.",
      ],
    },
    portraitAsset: "/media/derivatives/portrait-03-newsroom-archive.webp",
    portraitAvif: "/media/derivatives/portrait-03-newsroom-archive.avif",
    portraitFocalPoint: "52% 28%",
    portraitCaption: {
      ar: "نضال النعيم أمام جدار الصور الأرشيفية.",
      en: "Nidal Elnaeem in front of an archival photo wall.",
    },
    milestones: [
      {
        id: "ms-ashorooq-2017",
        period: { ar: "أبريل 2017 – أغسطس 2018 (سنة و5 أشهر)", en: "Apr 2017 – Aug 2018 · 1 yr 5 mos" },
        organization: { ar: "قناة الشروق الفضائية (Ashorooq TV)", en: "Ashorooq TV" },
        role: { ar: "مذيعة ومقدمة برامج تلفزيونية (Television Presenter)", en: "Television Presenter" },
        natureOfEntry: "broadcast_role",
        natureBadge: { ar: "عمل تلفزيوني", en: "Television" },
        summary: {
          ar: "تقديم 3 برامج رئيسية على شاشة قناة الشروق السودانية، من بينها البرنامج الصباحي اليومي المباشر وبرامج المنوعات.",
          en: "Worked as a presenter for 3 main programs on Ashorooq TV, including its daily live morning variety show.",
        },
        sourceNote: {
          ar: "حسابها الرسمي على لينكدإن وفيسبوك.",
          en: "Official LinkedIn and Facebook profiles.",
        },
        sourceUrl: "https://www.linkedin.com/in/nidalelnaeem77/",
        approvalStatus: "approved",
      },
      {
        id: "ms-sudani-2017",
        period: { ar: "يناير 2018 – ديسمبر 2018 (سنة واحدة)", en: "Jan 2018 – Dec 2018 · 1 yr" },
        organization: { ar: "سوداني (Sudani) · الخرطوم، السودان", en: "Sudani · Khartoum, Sudan" },
        role: { ar: "مقدمة برامج (Presenter)", en: "Presenter" },
        natureOfEntry: "broadcast_role",
        natureBadge: { ar: "مجلة مرئية", en: "Video Magazine" },
        summary: {
          ar: "المشاركة في تقديم المجلة المرئية الشهرية لـ «سوداني»، وتغطية أخبار الشركة وخدمات المسؤولية المجتمعية وأثرها في المجتمع.",
          en: "Co-hosting Sudani’s monthly video magazine, covering the company’s latest news, social responsibility services, and impact on the community.",
        },
        sourceNote: {
          ar: "حسابها الرسمي على لينكدإن وفيسبوك.",
          en: "Official LinkedIn and Facebook profiles.",
        },
        sourceUrl: "https://www.linkedin.com/in/nidalelnaeem77/",
        approvalStatus: "approved",
      },
      {
        id: "ms-ayc-2018",
        period: { ar: "2018", en: "2018" },
        organization: { ar: "مركز الشباب العربي (Arab Youth Center)", en: "Arab Youth Center" },
        role: { ar: "تدريب وتأهيل إعلامي", en: "Media Training Program" },
        natureOfEntry: "journalism_training",
        natureBadge: { ar: "تدريب مهني", en: "Training" },
        summary: {
          ar: "إتمام برنامج تدريبي للإعلاميين الشباب في مركز الشباب العربي عام 2018.",
          en: "Completed a media training program with the Arab Youth Center in 2018.",
        },
        sourceNote: {
          ar: "مسجل في صفحتها الرسمية على فيسبوك.",
          en: "Recorded on her official Facebook profile.",
        },
        sourceUrl: "https://www.facebook.com/Nidal.elnaeem77",
        approvalStatus: "approved",
      },
    ],
    linkedWorkSlugs: ["tedx-wad-medani-colorful-woman", "hikayat-nidal-digital-series"],
  },
  {
    id: "chapter-pan-arab-newsroom",
    number: "03",
    rhythmStyle: "newsroom-monograph",
    eraBadge: {
      ar: "الفصل الثالث · مجموعة MBC / العربية والحدث (مارس 2019 – الحاضر)",
      en: "CHAPTER III · MBC GROUP / AL ARABIYA & AL HADATH (MAR 2019 – PRESENT)",
    },
    title: {
      ar: "في غرفة أخبار قناتي العربية والحدث: بين دبي والرياض",
      en: "Inside Al Arabiya & Al Hadath Newsrooms: From Dubai to Riyadh",
    },
    subtitle: {
      ar: "كاتبة أولى لمنصات التواصل · مقدمة أخبار · صحفية ومراسلة (+7 سنوات)",
      en: "Senior Social Media Writer · News Presenter · Journalist & Reporter (7+ Years)",
    },
    leadParagraph: {
      ar: "في مارس 2019، انضمت نضال النعيم إلى مجموعة MBC / قناة «العربية» في دولة الإمارات العربية المتحدة، حيث عملت على مدار خمس سنوات (حتى يناير 2024) مذيعة أخبار، وصحفية لمنصات التواصل تدير وتنسق النشر عبر أكثر من 50 حساباً رئيسياً وفرعياً، وكاتبة ومراسلة تعدّ التقارير وتعلق عليها صوتياً.",
      en: "Joining MBC Group / Al Arabiya News Channel in the UAE in March 2019, Nidal spent five years (through January 2024) working across live news presenting, breaking-news social media journalism—coordinating over 50 primary and secondary accounts—and broadcast report writing and narration.",
    },
    bodyParagraphs: {
      ar: [
        "ومنذ فبراير 2024 في المملكة العربية السعودية (الرياض)، تواصل عملها كـ «كاتبة أولى لمنصات التواصل ومقدمة أخبار» (Senior Social Media Writer / Presenter)، مغطيةً أبرز أحداث وقصص الشرق الأوسط وشمال أفريقيا عبر التلفزيون ومنصات قناتي «العربية» و«الحدث».",
        "كما توظف خلفيتها الهندسية في البرمجيات وأحدث أدوات الذكاء الاصطناعي لتطوير البحث الصحفي، وتسريع التحرير، وإنتاج المحتوى الرقمي من الفكرة حتى النشر.",
      ],
      en: [
        "Since February 2024 in Saudi Arabia (Riyadh), she has served as Senior Social Media Writer / Presenter—covering major daily stories across the MENA region on television and across Al Arabiya and Al Hadath digital platforms.",
        "Drawing on her Software Engineering background, she integrates modern AI tools into news research, writing, and end-to-end digital video production.",
      ],
    },
    pullQuote: {
      text: {
        ar: "«من أثير إذاعة هلا 96 إلى غرفة أخبار قناتي العربية والحدث.»",
        en: "“From the airwaves of Hala 96 FM to the newsroom of Al Arabiya and Al Hadath.”",
      },
      attribution: {
        ar: "نضال النعيم",
        en: "Nidal Elnaeem",
      },
    },
    portraitAsset: "/media/derivatives/portrait-04-broadcast-yellow-blazer.webp",
    portraitAvif: "/media/derivatives/portrait-04-broadcast-yellow-blazer.avif",
    portraitFocalPoint: "52% 24%",
    portraitCaption: {
      ar: "نضال النعيم في استوديو الأخبار.",
      en: "Nidal Elnaeem in the newsroom studio.",
    },
    milestones: [
      {
        id: "ms-alarabiya-ksa",
        period: { ar: "فبراير 2024 – الحاضر", en: "Feb 2024 – Present" },
        organization: {
          ar: "مجموعة MBC / قناة العربية والحدث — السعودية (الرياض)",
          en: "MBC Group / Al Arabiya & Al Hadath — KSA (Riyadh)",
        },
        role: {
          ar: "كاتبة أولى لمنصات التواصل ومقدمة أخبار (Senior Social Media Writer / Presenter)",
          en: "Senior Social Media Writer / Presenter",
        },
        natureOfEntry: "broadcast_role",
        natureBadge: { ar: "الدور الحالي · الرياض", en: "Current · KSA" },
        summary: {
          ar: "تغطية يومية لأحداث الشرق الأوسط وشمال أفريقيا عبر الشاشة ومنصات العربية والحدث، وإنتاج المحتوى الرقمي من البداية للنهاية بدعم أدوات الذكاء الاصطناعي.",
          en: "Daily MENA coverage on TV and Al Arabiya & Al Hadath social platforms, end-to-end content production, and AI-assisted research & writing.",
        },
        sourceNote: {
          ar: "السيرة الذاتية الرسمية وحساب لينكدإن.",
          en: "Official CV and LinkedIn profile.",
        },
        sourceUrl: "https://www.linkedin.com/in/nidalelnaeem77/",
        approvalStatus: "approved",
      },
      {
        id: "ms-alarabiya-uae",
        period: { ar: "مارس 2019 – يناير 2024", en: "Mar 2019 – Jan 2024" },
        organization: {
          ar: "مجموعة MBC / قناة العربية — الإمارات (دبي)",
          en: "MBC Group / Al Arabiya News Channel — UAE (Dubai)",
        },
        role: {
          ar: "مذيعة أخبار · صحفية منصات التواصل · كاتبة ومراسلة",
          en: "News Presenter · Social Media Journalist · Writer/Reporter",
        },
        natureOfEntry: "broadcast_role",
        natureBadge: { ar: "5 سنوات · دبي", en: "5 Years · UAE" },
        summary: {
          ar: "تقديم الأخبار، وتحرير العواجل الرقمية، وتنسيق أكثر من 50 حساباً رسمياً عبر منصات التواصل، وكتابة التقارير التلفزيونية والتعليق الصوتي عليها.",
          en: "News presenting, breaking-news social media editing across 50+ accounts, and writing/narrating television news reports.",
        },
        sourceNote: {
          ar: "السيرة الذاتية الرسمية وأرشيف العربية.نت.",
          en: "Official CV and Al Arabiya Net archive.",
        },
        sourceUrl: "https://www.alarabiya.net/",
        approvalStatus: "approved",
      },
    ],
    linkedWorkSlugs: [
      "alarabiya-sudan-protest-lexicon",
      "passion-and-perseverance-reflection",
    ],
  },
  {
    id: "chapter-public-service-and-forums",
    number: "04",
    rhythmStyle: "public-service-forum",
    eraBadge: {
      ar: "الفصل الرابع · مبادرات توعوية وملتقيات إعلامية",
      en: "CHAPTER IV · PUBLIC EXPLAINERS & MEDIA FORUMS",
    },
    title: {
      ar: "قضايا التعليم في السودان والحضور المهني في المنطقة",
      en: "Public-Interest Explainers and Regional Media Gatherings",
    },
    subtitle: {
      ar: "شروح مبسطة للأسر السودانية وحضور في المنتدى السعودي للإعلام بالرياض",
      en: "Educational explainers for Sudanese families and attendance at the Saudi Media Forum in Riyadh",
    },
    leadParagraph: {
      ar: "إلى جانب عملها اليومي، تقدم نضال النعيم محتوى توعوياً يتناول القضايا الخدمية والتعليمية في السودان، ومن أبرزها الفيديو الموجه لأولياء الأمور في مارس 2026 حول مشروع المنح المدرسية المشترك بين اليونيسف ووزارة التربية والتعليم السودانية.",
      en: "Alongside her newsroom work, Nidal produces public-service explainers addressing practical issues for Sudanese families—most recently her March 2026 video on the school-grant project involving UNICEF and Sudan’s Ministry of Education.",
    },
    bodyParagraphs: {
      ar: [
        "كما تشارك بالحضور في الملتقيات الإعلامية العربية في المنطقة، ومنها المنتدى السعودي للإعلام في الرياض.",
      ],
      en: [
        "She also regularly attends regional industry gatherings, including the Saudi Media Forum in Riyadh.",
      ],
    },
    portraitAsset: "/media/derivatives/portrait-02-saudi-media-forum.webp",
    portraitAvif: "/media/derivatives/portrait-02-saudi-media-forum.avif",
    portraitFocalPoint: "50% 26%",
    portraitCaption: {
      ar: "في المنتدى السعودي للإعلام بالرياض.",
      en: "At the Saudi Media Forum in Riyadh.",
    },
    milestones: [
      {
        id: "ms-sudan-education-2026",
        period: { ar: "مارس 2026", en: "March 2026" },
        organization: { ar: "مبادرة توعوية — التعليم في السودان", en: "Public Explainer — Education in Sudan" },
        role: { ar: "إعداد وتقديم", en: "Written & Presented" },
        natureOfEntry: "broadcast_role",
        natureBadge: { ar: "فيديو توعوي", en: "Public Service" },
        summary: {
          ar: "شرح مصور (02:10) لأولياء الأمور حول مشروع المنح المدرسية المشترك بين اليونيسف ووزارة التربية والتعليم السودانية.",
          en: "2:10 video explaining the school-grant project involving UNICEF and Sudan’s Ministry of Education to parents.",
        },
        sourceNote: {
          ar: "مثبت على حسابها الرسمي في فيسبوك (6 مارس 2026).",
          en: "Pinned on her official Facebook profile (March 6, 2026).",
        },
        sourceUrl: "https://www.facebook.com/reel/1620774852498384",
        approvalStatus: "approved",
      },
      {
        id: "ms-saudi-media-forum",
        period: { ar: "الرياض", en: "Riyadh" },
        organization: { ar: "المنتدى السعودي للإعلام", en: "Saudi Media Forum" },
        role: { ar: "حضور مهني", en: "Industry Attendance" },
        natureOfEntry: "social_participation",
        natureBadge: { ar: "ملتقى إعلامي", en: "Media Forum" },
        summary: {
          ar: "حضور فعاليات المنتدى السعودي للإعلام في الرياض.",
          en: "Attended the Saudi Media Forum in Riyadh.",
        },
        sourceNote: {
          ar: "منشور على صفحتها الرسمية في فيسبوك.",
          en: "Shared on her official Facebook profile.",
        },
        sourceUrl:
          "https://www.facebook.com/Nidal.elnaeem77/posts/pfbid015gncY7yCQ9ZELDwvuCM7u9E1do8ekMxabA9eo4LYkvJAVM1U1zxN8DXQtf53RHtl",
        approvalStatus: "approved",
      },
    ],
    linkedWorkSlugs: [
      "sudan-school-grant-explainer",
      "saudi-media-forum-riyadh-journal",
    ],
  },
];

export const PHOTO_ESSAY_PLATES: PhotoEssayPlate[] = [
  {
    id: "plate-04-broadcast-studio",
    plateNumber: "01",
    title: {
      ar: "في استوديو الأخبار",
      en: "In the Newsroom Studio",
    },
    setting: {
      ar: "استوديو البث",
      en: "Broadcast Studio",
    },
    imageWebp: "/media/derivatives/portrait-04-broadcast-yellow-blazer.webp",
    imageAvif: "/media/derivatives/portrait-04-broadcast-yellow-blazer.avif",
    nativeDimensions: "960 × 960",
    focalPoint: "52% 24%",
    aspectClass: "aspect-square",
    caption: {
      ar: "نضال النعيم في استوديو الأخبار، مرتديةً البليزر الكحلي مع ميكروفون البث.",
      en: "Nidal Elnaeem in the broadcast newsroom with studio lavalier microphone.",
    },
    documentaryNote: {
      ar: "الصورة الرئيسية للمشهد الافتتاحي.",
      en: "Primary portrait used for the opening scene.",
    },
    sourceUrl: "https://www.facebook.com/Nidal.elnaeem77",
    rightsBadge: {
      ar: "صورة شخصية — نضال النعيم",
      en: "Personal Portrait — Nidal Elnaeem",
    },
    approvalStatus: "approved",
  },
  {
    id: "plate-01-pinstripe-studio",
    plateNumber: "02",
    title: {
      ar: "تحت إضاءة الاستوديو",
      en: "Before Camera Transmission",
    },
    setting: {
      ar: "استوديو تلفزيوني",
      en: "Television Studio",
    },
    imageWebp: "/media/derivatives/portrait-01-studio-pinstripe.webp",
    imageAvif: "/media/derivatives/portrait-01-studio-pinstripe.avif",
    nativeDimensions: "1152 × 2048",
    focalPoint: "50% 24%",
    aspectClass: "aspect-[3/4]",
    caption: {
      ar: "لقطة كاملة في استوديو البث التلفزيوني بالبدلة المقلمة وميكروفون الهواء.",
      en: "Full three-quarter studio portrait on set with broadcast lighting and lavalier mic.",
    },
    documentaryNote: {
      ar: "منشورة على حسابها الرسمي في فيسبوك بأبعادها الكاملة (1152×2048).",
      en: "Shared on her official Facebook profile at full 1152×2048 resolution.",
    },
    sourceUrl:
      "https://www.facebook.com/photo.php?fbid=26225452487104095&set=pb.100001981029300.-2207520000&type=3",
    rightsBadge: {
      ar: "الصفحة الرسمية على فيسبوك",
      en: "Official Facebook Profile",
    },
    approvalStatus: "approved",
  },
  {
    id: "plate-02-saudi-media-forum",
    plateNumber: "03",
    title: {
      ar: "المنتدى السعودي للإعلام — الرياض",
      en: "Saudi Media Forum — Riyadh",
    },
    setting: {
      ar: "الرياض · مسرح القادة",
      en: "Riyadh · Leader’s Stage",
    },
    imageWebp: "/media/derivatives/portrait-02-saudi-media-forum.webp",
    imageAvif: "/media/derivatives/portrait-02-saudi-media-forum.avif",
    nativeDimensions: "1440 × 1920",
    focalPoint: "50% 26%",
    aspectClass: "aspect-[3/4]",
    caption: {
      ar: "خلال حضورها فعاليات المنتدى السعودي للإعلام في الرياض أمام مسرح القادة.",
      en: "Attending the Saudi Media Forum in Riyadh in front of the Leader’s Stage.",
    },
    documentaryNote: {
      ar: "من يوميات حضورها للمنتدى السعودي للإعلام في الرياض.",
      en: "From her attendance at the Saudi Media Forum in Riyadh.",
    },
    sourceUrl:
      "https://www.facebook.com/photo.php?fbid=25639588639023819&set=pb.100001981029300.-2207520000&type=3",
    rightsBadge: {
      ar: "الصفحة الرسمية على فيسبوك",
      en: "Official Facebook Profile",
    },
    approvalStatus: "approved",
  },
  {
    id: "plate-03-newsroom-archive-wall",
    plateNumber: "04",
    title: {
      ar: "أمام جدار الأرشيف المصور",
      en: "Before the Archival Wall",
    },
    setting: {
      ar: "استوديو التصوير",
      en: "Editorial Studio",
    },
    imageWebp: "/media/derivatives/portrait-03-newsroom-archive.webp",
    imageAvif: "/media/derivatives/portrait-03-newsroom-archive.avif",
    nativeDimensions: "1152 × 2048",
    focalPoint: "52% 28%",
    aspectClass: "aspect-[3/4]",
    caption: {
      ar: "بورتريه بالبدلة الكحلية والقميص الأبيض أمام جدار الصور الأرشيفية، نُشر مع تدوينتها حول الشغف والمثابرة.",
      en: "Portrait in navy pinstripe blazer before an archival photograph wall, published with her note on perseverance.",
    },
    documentaryNote: {
      ar: "لقطة كاملة (1152×2048) من حسابها الرسمي على فيسبوك.",
      en: "Full 1152×2048 portrait from her official Facebook profile.",
    },
    sourceUrl:
      "https://www.facebook.com/photo.php?fbid=26052318974417448&set=pb.100001981029300.-2207520000&type=3",
    rightsBadge: {
      ar: "الصفحة الرسمية على فيسبوك",
      en: "Official Facebook Profile",
    },
    approvalStatus: "approved",
  },
  {
    id: "plate-05-newsroom-monitors-dubai",
    plateNumber: "05",
    title: {
      ar: "بين شاشات غرفة الأخبار — دبي",
      en: "Inside the Broadcast Newsroom — Dubai",
    },
    setting: {
      ar: "استوديو الأخبار · دبي",
      en: "Newsroom Studio · Dubai",
    },
    imageWebp: "/media/social/ig-DJAecEGMcm1-1.webp",
    imageAvif: "/media/social/ig-DJAecEGMcm1-1.avif",
    nativeDimensions: "1440 × 1920",
    focalPoint: "50% 24%",
    aspectClass: "aspect-[3/4]",
    caption: {
      ar: "نضال النعيم داخل غرفة الأخبار أمام شاشات الرصد والبث المباشر.",
      en: "Nidal Elnaeem inside the broadcast studio in front of live newsroom monitors.",
    },
    documentaryNote: {
      ar: "لقطة عالية الدقة (1440×1920) من حسابها الرسمي على إنستغرام (@nidalelnaeem).",
      en: "Full 1440×1920 studio frame from her official Instagram (@nidalelnaeem).",
    },
    sourceUrl: "https://www.instagram.com/p/DJAecEGMcm1/",
    rightsBadge: {
      ar: "الحساب الرسمي على إنستغرام",
      en: "Official Instagram Account",
    },
    approvalStatus: "approved",
  },
  {
    id: "plate-06-alarabiya-dubai",
    plateNumber: "06",
    title: {
      ar: "في قناة العربية — دبي",
      en: "At Al Arabiya Channel — Dubai",
    },
    setting: {
      ar: "مدينة دبي للإعلام",
      en: "Dubai Media City",
    },
    imageWebp: "/media/social/ig-CwVltyRSO9d-1.webp",
    imageAvif: "/media/social/ig-CwVltyRSO9d-1.avif",
    nativeDimensions: "1440 × 1800",
    focalPoint: "50% 22%",
    aspectClass: "aspect-[4/5]",
    caption: {
      ar: "إطلالة من مقر قناة العربية في دبي نشرتها مع تدوينتها القصيرة عن الجمال والمحبة.",
      en: "Portrait at Al Arabiya Channel in Dubai, shared alongside her note on beauty and warmth.",
    },
    documentaryNote: {
      ar: "لقطة بأبعاد 1440×1800 من حسابها الرسمي على إنستغرام.",
      en: "1440×1800 portrait from her official Instagram.",
    },
    sourceUrl: "https://www.instagram.com/p/CwVltyRSO9d/",
    rightsBadge: {
      ar: "الحساب الرسمي على إنستغرام",
      en: "Official Instagram Account",
    },
    approvalStatus: "approved",
  },
];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return WORK_ITEMS.find((item) => item.slug === slug);
}
