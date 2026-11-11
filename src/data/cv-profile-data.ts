import type { BilingualText } from "./portfolio-data";

export interface CvStatItem {
  value: BilingualText;
  label: BilingualText;
  detail: BilingualText;
}

export interface CvExperienceRole {
  title: BilingualText;
  bullets: {
    ar: string[];
    en: string[];
  };
}

export interface CvExperienceEntry {
  id: string;
  period: BilingualText;
  organization: BilingualText;
  location: BilingualText;
  badge: BilingualText;
  isCurrent?: boolean;
  roles: CvExperienceRole[];
}

export interface CvSkillGroup {
  id: string;
  category: BilingualText;
  items: {
    ar: string[];
    en: string[];
  };
}

export const NIDAL_SIGNATURE_LINE: BilingualText = {
  ar: "من أثير إذاعة هلا 96 إلى غرفة أخبار قناتي العربية والحدث",
  en: "From the airwaves of Hala 96 FM to the newsroom of Al Arabiya and Al Hadath",
};

export const CV_BIO_SUMMARY: BilingualText = {
  ar: "صحفية ومقدمة أخبار تعمل باللغتين العربية والإنجليزية، بخبرة تتجاوز سبع سنوات في شبكة «العربية» وقناة «الحدث» بين دبي والرياض. تجمع بين الحضور المباشر أمام الكاميرا والميكروفون، وصياغة وإنتاج المحتوى الإخباري الرقمي من الفكرة حتى النشر، وتوظيف أدوات الذكاء الاصطناعي في البحث والتحرير والإنتاج.",
  en: "Bilingual journalist and news presenter working in Arabic and English with over seven years at Al Arabiya News Channel and Al Hadath across the UAE and Saudi Arabia. Skilled in live on-air presenting, breaking-news reporting, end-to-end social media production, and AI-assisted editorial workflows.",
};

export const CV_CONTACT_INFO = {
  email: "nidalelnaeem77@gmail.com",
  location: {
    ar: "الرياض، المملكة العربية السعودية",
    en: "Riyadh, Kingdom of Saudi Arabia",
  },
};

export const CV_IMPACT_STATS: CvStatItem[] = [
  {
    value: { ar: "+7", en: "7+" },
    label: {
      ar: "سنوات في العربية والحدث",
      en: "Years at Al Arabiya & Al Hadath",
    },
    detail: {
      ar: "تغطية يومية لأحداث الشرق الأوسط وشمال أفريقيا في دبي والرياض",
      en: "Daily MENA newsroom coverage across Dubai and Riyadh",
    },
  },
  {
    value: { ar: "+50", en: "50+" },
    label: {
      ar: "منصة وحساباً رقمياً",
      en: "Social Channels Managed",
    },
    detail: {
      ar: "تنسيق وتحرير النشر عبر إكس وفيسبوك وإنستغرام ويوتيوب وتيك توك وسناب شات",
      en: "Coordinated across X, Facebook, Instagram, YouTube, TikTok & Snapchat",
    },
  },
  {
    value: { ar: "+10", en: "10+" },
    label: {
      ar: "برامج إذاعية وتلفزيونية",
      en: "Radio & TV Shows Hosted",
    },
    detail: {
      ar: "7 برامج إذاعية في «هلا 96» و3 برامج تلفزيونية رئيسية في «الشروق» ومجلة «سوداني»",
      en: "7 shows on Hala 96 FM, 3 flagship TV shows on Al Shorooq, plus Sudani",
    },
  },
  {
    value: { ar: "AR · EN", en: "AR · EN" },
    label: {
      ar: "عمل صحفي ثنائي اللغة",
      en: "Bilingual Journalism",
    },
    detail: {
      ar: "تحرير وتقديم باللغتين العربية والإنجليزية مع خلفية أكاديمية في هندسة البرمجيات",
      en: "Arabic & English reporting backed by a B.Sc. (Hons) in Software Engineering",
    },
  },
];

export const CV_EXPERIENCE_TIMELINE: CvExperienceEntry[] = [
  {
    id: "cv-alarabiya-ksa",
    period: { ar: "فبراير 2024 – الحاضر (ضمن مسيرة مارس 2019 – الحاضر)", en: "Feb 2024 – Present (Mar 2019 – Present)" },
    organization: {
      ar: "مجموعة MBC / قناة العربية والحدث",
      en: "MBC Group / Al Arabiya News Channel & Al Hadath",
    },
    location: {
      ar: "الرياض، المملكة العربية السعودية",
      en: "Riyadh, Saudi Arabia",
    },
    badge: { ar: "الدور الحالي · دوام كامل", en: "Current · Full-time" },
    isCurrent: true,
    roles: [
      {
        title: {
          ar: "كاتبة أولى لمنصات التواصل · مراسلة · مقدمة أخبار (Senior Social Media Writer Reporter / Presenter)",
          en: "Senior Social Media Writer Reporter / Presenter",
        },
        bullets: {
          ar: [
            "تغطية يومية لأبرز الأحداث والقصص الخبرية في منطقة الشرق الأوسط وشمال أفريقيا عبر الشاشة ومنصات قناتي «العربية» و«الحدث».",
            "كتابة وإنتاج ونشر المحتوى الإخباري الرقمي والتقارير المصورة بشكل متكامل من الفكرة حتى البث.",
            "توظيف أدوات الذكاء الاصطناعي لتعزيز البحث الصحفي، وتسريع التحرير، وتطوير الإنتاج المرئي والرقمي.",
          ],
          en: [
            "Cover daily major events and stories across the MENA region on TV and on Al Arabiya & Al Hadath social media platforms.",
            "Write, report, produce, and publish social media news content end-to-end.",
            "Leverage AI tools to enhance news research, writing, and content production.",
          ],
        },
      },
    ],
  },
  {
    id: "cv-alarabiya-uae",
    period: { ar: "مارس 2019 – يناير 2024", en: "Mar 2019 – Jan 2024" },
    organization: {
      ar: "مجموعة MBC / قناة العربية",
      en: "MBC Group / Al Arabiya News Channel",
    },
    location: {
      ar: "دبي، الإمارات العربية المتحدة",
      en: "Dubai, United Arab Emirates",
    },
    badge: { ar: "5 سنوات · دبي", en: "5 Years · UAE" },
    roles: [
      {
        title: {
          ar: "مذيعة أخبار (News Presenter)",
          en: "News Presenter",
        },
        bullets: {
          ar: [
            "التغطية اليومية والتقديم الإخباري لأهم تطورات وأحداث منطقة الشرق الأوسط وشمال أفريقيا.",
          ],
          en: [
            "Covered daily major events and breaking stories across the MENA region on air.",
          ],
        },
      },
      {
        title: {
          ar: "صحفية منصات التواصل الاجتماعي (Journalist, Social Media)",
          en: "Journalist, Social Media",
        },
        bullets: {
          ar: [
            "تكليف وكتابة وتحرير الأخبار العاجلة عبر المنصات الرقمية، وتحديد الزوايا الخبرية والمصادر في التغطيات العاجلة.",
            "إدارة السرد القصصي الرقمي وطريقة عرض الأخبار عبر الإنترنت.",
            "تنسيق وإدارة أكثر من 50 حساباً وصفحة رئيسية وفرعية عبر منصات التواصل (إكس/تويتر، فيسبوك، إنستغرام، يوتيوب، تيك توك، سناب شات، وديلي موشن).",
          ],
          en: [
            "Assigned, wrote, and edited breaking news stories on social media and identified fresh angles and sources during live developments.",
            "Managed overall online storytelling and editorial presentation.",
            "Coordinated and administered over 50 primary and secondary accounts across X/Twitter, Facebook, Instagram, YouTube, TikTok, Snapchat, and Dailymotion.",
          ],
        },
      },
      {
        title: {
          ar: "كاتبة ومراسلة (Writer / Reporter)",
          en: "Writer / Reporter",
        },
        bullets: {
          ar: [
            "كتابة تقارير إخبارية دقيقة وسريعة، وتحرير فقرات الأخبار العاجلة وتقارير المتابعة.",
            "إعداد المواد المرئية الداعمة للخبر والتعليق الصوتي على التقارير والقصص التلفزيونية.",
          ],
          en: [
            "Wrote timely, accurate news reports and edited breaking news segments and follow-up coverage.",
            "Created supporting video packages and narrated broadcast news features and reports.",
          ],
        },
      },
    ],
  },
  {
    id: "cv-sudani-telecom",
    period: { ar: "يناير 2018 – ديسمبر 2018", en: "Jan 2018 – Dec 2018 · 1 yr" },
    organization: {
      ar: "سوداني للاتصالات (Sudani)",
      en: "Sudani (Sudani Telecom)",
    },
    location: {
      ar: "الخرطوم، السودان",
      en: "Khartoum, Sudan",
    },
    badge: { ar: "مجلة مرئية", en: "Video Magazine" },
    roles: [
      {
        title: {
          ar: "مقدمة برامج (Presenter)",
          en: "Presenter",
        },
        bullets: {
          ar: [
            "المشاركة في تقديم المجلة المرئية الشهرية لشركة «سوداني»، لتغطية أحدث أخبار الشركة وخدمات المسؤولية المجتمعية وأثرها في المجتمع.",
          ],
          en: [
            "Co-hosted Sudani’s monthly video magazine, covering the company’s latest news, social responsibility services, and impact on the community.",
          ],
        },
      },
    ],
  },
  {
    id: "cv-alshorooq-tv",
    period: { ar: "أبريل 2017 – أغسطس 2018 (سنة و5 أشهر)", en: "Apr 2017 – Aug 2018 · 1 yr 5 mos" },
    organization: {
      ar: "قناة الشروق الفضائية (Ashorooq TV)",
      en: "Ashorooq TV (Al Shorooq TV)",
    },
    location: {
      ar: "السودان",
      en: "Sudan",
    },
    badge: { ar: "3 برامج تلفزيونية", en: "3 Main TV Shows" },
    roles: [
      {
        title: {
          ar: "مذيعة ومقدمة برامج تلفزيونية (Television Presenter)",
          en: "Television Presenter",
        },
        bullets: {
          ar: [
            "تقديم «البرنامج الصباحي»، وهو برنامج منوعات يومي مباشر على الهواء.",
            "تقديم برنامج «رواح» (RAWAH)، وهو برنامج حواري مسائي ذو طابع ثقافي يستضيف ضيوفاً في الاستوديو.",
            "تقديم برنامج التقدير الإنساني اليومي «مع كل الود والتقدير» خلال شهر رمضان.",
          ],
          en: [
            "Anchored the Morning Show, a daily live morning variety program.",
            "Hosted RAWAH, a culturally focused evening talk show with live studio guests.",
            "Presented the daily Public Appreciation Show (Ma’a Kul Al-Wud Wal-Taqdeer), a humanitarian Ramadan special.",
          ],
        },
      },
    ],
  },
  {
    id: "cv-hala96-fm",
    period: { ar: "يوليو / أغسطس 2015 – أكتوبر 2018 (3 سنوات و3 أشهر)", en: "Jul / Aug 2015 – Oct 2018 · 3 yrs 3 mos" },
    organization: {
      ar: "إذاعة هلا 96 إف إم (Hala 96 FM)",
      en: "Hala 96 FM",
    },
    location: {
      ar: "الخرطوم، السودان",
      en: "Khartoum, Sudan",
    },
    badge: { ar: "3 أدوار · إذاعة وإشراف رقمي", en: "Radio · Digital · Management" },
    roles: [
      {
        title: {
          ar: "مذيعة ومعدة ومخرجة مشاركة (Radio Jockey · Presenter & Producer)",
          en: "Radio Jockey · Presenter & Producer (Arabic Variety Radio & News)",
        },
        bullets: {
          ar: [
            "إنتاج وإخراج مشترك وتقديم 7 برامج إذاعية جماهيرية متنوعة: شملت البرنامج اليومي المباشر للمرأة «هلا وهن» (Hala & Her)، والبرنامج الصباحي اليومي، وبرامج تغطية الفعاليات والمسابقات المباشرة، إلى جانب سهرات الجمعة وبرامج رمضان وبرامج الثقافة والتراث.",
          ],
          en: [
            "Produced, co-directed, and presented seven popular shows—including the women-centric daily live show “Hala & Her (هلا وهن),” the daily morning show, live event coverage, on-air contests, Friday specials, Ramadan programming, and a culture & traditions show.",
          ],
        },
      },
      {
        title: {
          ar: "مشرفة منصات التواصل الاجتماعي (Social Media Supervisor · يونيو – سبتمبر 2018 · 4 أشهر)",
          en: "Social Media Supervisor (Jun – Sep 2018 · 4 mos)",
        },
        bullets: {
          ar: [
            "تخطيط ومتابعة وتنفيذ استراتيجية منصات التواصل الاجتماعي وتحديثاتها اليومية.",
            "متابعة محتوى الموقع الرسمي للإذاعة والإشراف على البث المباشر عبر الإنترنت.",
          ],
          en: [
            "Planned, monitored, and executed the station’s social media strategy and updates.",
            "Monitored the official radio station’s website information and online streaming.",
          ],
        },
      },
      {
        title: {
          ar: "مسؤولة الموارد البشرية ومديرة المكتب (HR Officer - Office Manager · ديسمبر 2017 – مارس 2018 · 4 أشهر)",
          en: "HR Officer - Office Manager (Dec 2017 – Mar 2018 · 4 mos)",
        },
        bullets: {
          ar: [
            "تنسيق شؤون الموارد البشرية وإدارة العمليات الإدارية اليومية لمكتب المحطة في الخرطوم بالتوازي مع العمل الإذاعي.",
          ],
          en: [
            "Coordinated human resources and managed daily station office operations in Khartoum alongside live radio duties.",
          ],
        },
      },
    ],
  },
];

export const CV_EDUCATION = {
  degree: {
    ar: "بكالوريوس الشرف في هندسة البرمجيات",
    en: "Bachelor (Hons) in Software Engineering",
  },
  university: {
    ar: "جامعة السودان للعلوم والتكنولوجيا",
    en: "Sudan University for Science and Technology (SUST)",
  },
  year: "2014",
  note: {
    ar: "أساس تقني وهندسي يدعم منهجيتها الحديثة في الصحافة الرقمية، وأنظمة غرف الأخبار، وأدوات الذكاء الاصطناعي.",
    en: "An engineering foundation that informs her structured approach to digital newsrooms, broadcast systems, and AI-assisted journalism.",
  },
};

export const CV_NEWSROOM_TOOLS = [
  {
    name: "iNews",
    role: { ar: "نظام تحرير النشرات وغرف الأخبار", en: "Broadcast Newsroom NRCS" },
  },
  {
    name: "VizRT",
    role: { ar: "أنظمة الغرافيك والبث التلفزيوني", en: "Broadcast Graphics & Studio Playout" },
  },
  {
    name: "Wildmoka",
    role: { ar: "تحرير وقص البث المباشر للمنصات الرقمية", en: "Live Clipping & Digital Video Publishing" },
  },
  {
    name: "Sprinklr",
    role: { ar: "إدارة ونشر الحسابات الإخبارية الكبرى", en: "Enterprise Social Media Management" },
  },
  {
    name: "VCL",
    role: { ar: "إنتاج الوسائط المتعددة والنشر", en: "Media Creation & Publishing" },
  },
  {
    name: "AI Tools & Chatbots",
    role: { ar: "البحث الصحفي وتطوير المحتوى الرقمي", en: "Editorial Research & Content Workflows" },
  },
];

export const CV_LANGUAGES = [
  {
    name: { ar: "العربية", en: "Arabic" },
    levelLabel: { ar: "اللغة الأم · إتقان مهني كامل", en: "Native · Broadcast Standard" },
    dots: 5,
  },
  {
    name: { ar: "الإنجليزية", en: "English" },
    levelLabel: { ar: "إجادة مهنية عالية (تحريراً وتواصلاً)", en: "Professional Working Fluency" },
    dots: 4,
  },
];

export const CV_CAPABILITIES: CvSkillGroup[] = [
  {
    id: "on-air-stage",
    category: { ar: "التقديم والحضور المسرحي", en: "On-Air & Stage Presence" },
    items: {
      ar: [
        "تقديم تلفزيوني وإذاعي مباشر",
        "إدارة الجلسات الحوارية والمنتديات",
        "متحدثة رئيسية ومدربة إعلامية",
      ],
      en: [
        "Live TV & Radio Presenting",
        "Panel & Forum Moderation",
        "Keynote Speaker & Media Trainer",
      ],
    },
  },
  {
    id: "editorial-digital",
    category: { ar: "الصحافة والتحرير الرقمي", en: "Editorial & Digital Production" },
    items: {
      ar: [
        "تحرير الأخبار العاجلة والتغطيات الحية",
        "إنتاج المحتوى الرقمي من الفكرة للنشر",
        "السرد القصصي عبر المنصات المتعددة",
      ],
      en: [
        "Breaking News Assignment & Editing",
        "End-to-End Social Video Production",
        "Multi-Platform Storytelling (50+ Channels)",
      ],
    },
  },
  {
    id: "leadership-innovation",
    category: { ar: "القيادة والابتكار", en: "Leadership & Innovation" },
    items: {
      ar: [
        "قيادة فرق العمل الميدانية والإدارية",
        "توظيف الذكاء الاصطناعي في البحث والتحرير",
        "إطلاق المبادرات المجتمعية والإنسانية",
      ],
      en: [
        "Field & Editorial Team Leadership",
        "AI-Enhanced Newsroom Research",
        "Community & Humanitarian Initiatives",
      ],
    },
  },
];
