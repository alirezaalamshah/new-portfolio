import type { Lang } from './index';

export interface UIDict {
  site: {
    name: string;
    fullName: string;
    role: string;
    description: string;
  };
  nav: {
    home: string;
    portfolio: string;
    products: string;
    tutorials: string;
    about: string;
    contact: string;
    menu: string;
    switchLang: string;
    toggleTheme: string;
    skipToContent: string;
  };
  home: {
    heroGreeting: string;
    heroTitle: string;
    heroText: string;
    ctaPortfolio: string;
    ctaContact: string;
    featuredProjects: string;
    latestTutorials: string;
    productsTeaser: string;
    productsTeaserText: string;
    viewAll: string;
  };
  about: {
    title: string;
    metaDescription: string;
    intro: string[];
    skillsTitle: string;
    skillGroups: { title: string; items: string }[];
    experienceTitle: string;
    educationTitle: string;
    languagesTitle: string;
    certificatesTitle: string;
    certHoursUnit: string;
    certScoreLabel: string;
    certNoLabel: string;
    certVerifyCta: string;
    printCta: string;
  };
  portfolio: {
    title: string;
    metaDescription: string;
    intro: string;
    tech: string;
    year: string;
    demo: string;
    source: string;
    pdf: string;
    backToList: string;
  };
  products: {
    title: string;
    metaDescription: string;
    intro: string;
    kindSoftware: string;
    kindCourse: string;
    comingSoon: string;
    featuresTitle: string;
    buyCta: string;
    buyNote: string;
    backToList: string;
  };
  tutorials: {
    title: string;
    metaDescription: string;
    intro: string;
    readMore: string;
    publishedOn: string;
    backToList: string;
    searchPlaceholder: string;
    searchUnavailable: string;
    copy: string;
    copied: string;
    related: string;
    tagLabel: string;
  };
  contact: {
    title: string;
    metaDescription: string;
    intro: string;
    emailLabel: string;
    socialsLabel: string;
    responseNote: string;
  };
  notFound: {
    title: string;
    text: string;
    backHome: string;
  };
  footer: {
    tagline: string;
    rights: string;
    rss: string;
  };
}

export const ui: Record<Lang, UIDict> = {
  fa: {
    site: {
      name: 'علیرضا',
      fullName: 'علیرضا عالمشاه',
      role: 'توسعه‌دهنده پایتون و طراح وب',
      description:
        'توسعه‌دهنده پایتون و طراح وب — نمونه‌کارها، محصولات نرم‌افزاری و آموزش‌های رایگان برنامه‌نویسی.',
    },
    nav: {
      home: 'خانه',
      portfolio: 'نمونه‌کارها',
      products: 'محصولات',
      tutorials: 'آموزش‌ها',
      about: 'درباره من',
      contact: 'تماس',
      menu: 'منو',
      switchLang: 'تغییر زبان',
      toggleTheme: 'تغییر پوسته روشن/تاریک',
      skipToContent: 'پرش به محتوا',
    },
    home: {
      heroGreeting: 'سلام، من علیرضا هستم 👋',
      heroTitle: 'توسعه‌دهنده پایتون و طراح وب',
      heroText:
        'ابزارهای نرم‌افزاری می‌سازم، وب‌سایت‌های سریع و کاربرپسند طراحی می‌کنم و آموخته‌هایم را به زبان ساده آموزش می‌دهم.',
      ctaPortfolio: 'دیدن نمونه‌کارها',
      ctaContact: 'تماس با من',
      featuredProjects: 'نمونه‌کارهای برگزیده',
      latestTutorials: 'آخرین آموزش‌های رایگان',
      productsTeaser: 'محصولات',
      productsTeaserText: 'نرم‌افزارها و پکیج‌های آموزشی که ساخته‌ام.',
      viewAll: 'مشاهده همه',
    },
    about: {
      title: 'درباره من',
      metaDescription:
        'آشنایی با علیرضا عالمشاه — توسعه‌دهنده پایتون و طراح وب؛ مهارت‌ها، تجربه‌ها و مسیر حرفه‌ای.',
      intro: [
        'من علیرضا عالمشاه هستم؛ متخصص IT با بیش از ۱۳ سال سابقه در برنامه‌نویسی، مدیریت محصول و راهبری تیم‌های فنی. علاقه اصلی من ساختن ابزارهایی است که کار آدم‌ها را ساده‌تر می‌کنند — از اسکریپت‌های اتوماسیون خط تولید تا وب‌اپلیکیشن‌های کامل.',
        'در کنار توسعه نرم‌افزار، تجربه‌ام را در قالب آموزش‌های رایگان و پکیج‌های آموزشی به اشتراک می‌گذارم تا مسیر یادگیری برای دیگران کوتاه‌تر شود.',
      ],
      skillsTitle: 'مهارت‌ها',
      skillGroups: [
        { title: 'زبان‌ها', items: 'Python، JavaScript و TypeScript، T-SQL، HTML و CSS' },
        { title: 'فریم‌ورک‌ها', items: 'Django، Flask، FastAPI، React، Node.js، وردپرس' },
        { title: 'داده و هوش مصنوعی', items: 'Power BI، pandas، NumPy، Scikit-Learn، OpenCV، Selenium' },
        { title: 'پایگاه داده و ابزار', items: 'MySQL، MongoDB، SQLite، لینوکس، Git' },
      ],
      experienceTitle: 'سابقه کاری',
      educationTitle: 'تحصیلات',
      languagesTitle: 'زبان‌ها',
      certificatesTitle: 'گواهینامه‌ها',
      certHoursUnit: 'ساعت',
      certScoreLabel: 'نمره',
      certNoLabel: 'شماره گواهی',
      certVerifyCta: 'استعلام گواهینامه',
      printCta: 'دریافت رزومه (PDF)',
    },
    portfolio: {
      title: 'نمونه‌کارها',
      metaDescription:
        'نمونه‌کارهای علیرضا عالمشاه — پروژه‌های پایتون و طراحی وب همراه با توضیح کامل هر پروژه.',
      intro: 'گزیده‌ای از پروژه‌هایی که ساخته‌ام؛ روی هر کدام کلیک کنید تا جزئیات کامل را ببینید.',
      tech: 'تکنولوژی‌ها',
      year: 'سال',
      demo: 'مشاهده دمو',
      source: 'کد منبع',
      pdf: 'مستند معرفی (PDF)',
      backToList: 'بازگشت به نمونه‌کارها',
    },
    products: {
      title: 'محصولات',
      metaDescription:
        'محصولات علیرضا عالمشاه — نرم‌افزارها و پکیج‌های آموزشی برنامه‌نویسی پایتون و طراحی وب.',
      intro: 'نرم‌افزارها و پکیج‌های آموزشی که آماده کرده‌ام.',
      kindSoftware: 'نرم‌افزار',
      kindCourse: 'پکیج آموزشی',
      comingSoon: 'به‌زودی',
      featuresTitle: 'امکانات',
      buyCta: 'استعلام خرید',
      buyNote: 'فروش آنلاین به‌زودی فعال می‌شود؛ فعلاً برای خرید از صفحه تماس پیام بدهید.',
      backToList: 'بازگشت به محصولات',
    },
    tutorials: {
      title: 'آموزش‌های رایگان',
      metaDescription:
        'آموزش‌های رایگان برنامه‌نویسی پایتون و طراحی وب به زبان ساده — نوشته علیرضا عالمشاه.',
      intro: 'آموزش‌هایی که به زبان ساده نوشته‌ام؛ رایگان و بدون قید و شرط.',
      readMore: 'ادامه مطلب',
      publishedOn: 'تاریخ انتشار:',
      backToList: 'بازگشت به آموزش‌ها',
      searchPlaceholder: 'جستجو در آموزش‌ها…',
      searchUnavailable: 'جستجو فعلاً در دسترس نیست (در حالت توسعه، ابتدا build بگیرید)',
      copy: 'کپی',
      copied: 'کپی شد ✓',
      related: 'آموزش‌های مرتبط',
      tagLabel: 'برچسب',
    },
    contact: {
      title: 'تماس با من',
      metaDescription: 'راه‌های ارتباط با علیرضا عالمشاه برای همکاری، سفارش پروژه یا خرید محصولات.',
      intro: 'برای همکاری، سفارش پروژه یا هر سؤالی، از راه‌های زیر در ارتباط باشید.',
      emailLabel: 'ایمیل',
      socialsLabel: 'شبکه‌های اجتماعی',
      responseNote: 'معمولاً در کمتر از ۲۴ ساعت پاسخ می‌دهم.',
    },
    notFound: {
      title: 'صفحه پیدا نشد',
      text: 'صفحه‌ای که دنبالش بودید وجود ندارد یا جابه‌جا شده است.',
      backHome: 'بازگشت به خانه',
    },
    footer: {
      tagline: 'ساخته‌شده با دقت و علاقه — سبک، سریع و بدون ردیاب.',
      rights: 'تمام حقوق محفوظ است.',
      rss: 'خوراک RSS',
    },
  },

  en: {
    site: {
      name: 'Alireza',
      fullName: 'Alireza Alamshah',
      role: 'Python Developer & Web Designer',
      description:
        'Python developer and web designer — portfolio, software products, and free programming tutorials.',
    },
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      products: 'Products',
      tutorials: 'Tutorials',
      about: 'About',
      contact: 'Contact',
      menu: 'Menu',
      switchLang: 'Switch language',
      toggleTheme: 'Toggle light/dark theme',
      skipToContent: 'Skip to content',
    },
    home: {
      heroGreeting: "Hi, I'm Alireza 👋",
      heroTitle: 'Python Developer & Web Designer',
      heroText:
        'I build software tools, design fast and friendly websites, and share what I learn in plain language.',
      ctaPortfolio: 'View my work',
      ctaContact: 'Get in touch',
      featuredProjects: 'Featured projects',
      latestTutorials: 'Latest free tutorials',
      productsTeaser: 'Products',
      productsTeaserText: 'Software and course packages I have built.',
      viewAll: 'View all',
    },
    about: {
      title: 'About me',
      metaDescription:
        'Meet Alireza Alamshah — Python developer and web designer; skills, experience, and career path.',
      intro: [
        "I'm Alireza Alamshah, an IT professional with 13+ years of experience in programming, product management, and leading technical teams. What I enjoy most is building tools that make people's work easier — from production-line automation scripts to complete web applications.",
        'Alongside software development, I share my experience through free tutorials and course packages to shorten the learning path for others.',
      ],
      skillsTitle: 'Skills',
      skillGroups: [
        { title: 'Languages', items: 'Python, JavaScript & TypeScript, T-SQL, HTML & CSS' },
        { title: 'Frameworks', items: 'Django, Flask, FastAPI, React, Node.js, WordPress' },
        { title: 'Data & AI', items: 'Power BI, pandas, NumPy, Scikit-Learn, OpenCV, Selenium' },
        { title: 'Databases & tools', items: 'MySQL, MongoDB, SQLite, Linux, Git' },
      ],
      experienceTitle: 'Experience',
      educationTitle: 'Education',
      languagesTitle: 'Languages',
      certificatesTitle: 'Certificates',
      certHoursUnit: 'hrs',
      certScoreLabel: 'Score',
      certNoLabel: 'Certificate No.',
      certVerifyCta: 'Verify certificate',
      printCta: 'Download résumé (PDF)',
    },
    portfolio: {
      title: 'Portfolio',
      metaDescription:
        'Portfolio of Alireza Alamshah — Python and web design projects with a full case study for each.',
      intro: 'A selection of projects I have built; click any of them for the full story.',
      tech: 'Technologies',
      year: 'Year',
      demo: 'Live demo',
      source: 'Source code',
      pdf: 'Project brief (PDF)',
      backToList: 'Back to portfolio',
    },
    products: {
      title: 'Products',
      metaDescription:
        'Products by Alireza Alamshah — software and course packages for Python programming and web design.',
      intro: 'Software and course packages I have prepared.',
      kindSoftware: 'Software',
      kindCourse: 'Course package',
      comingSoon: 'Coming soon',
      featuresTitle: 'Features',
      buyCta: 'Ask about purchasing',
      buyNote: 'Online checkout is coming soon; for now, message me via the contact page to buy.',
      backToList: 'Back to products',
    },
    tutorials: {
      title: 'Free tutorials',
      metaDescription:
        'Free Python programming and web design tutorials in plain language — by Alireza Alamshah.',
      intro: 'Tutorials written in plain language; free, no strings attached.',
      readMore: 'Read more',
      publishedOn: 'Published on:',
      backToList: 'Back to tutorials',
      searchPlaceholder: 'Search tutorials…',
      searchUnavailable: 'Search is unavailable right now (in dev mode, run a build first)',
      copy: 'Copy',
      copied: 'Copied ✓',
      related: 'Related tutorials',
      tagLabel: 'Tag',
    },
    contact: {
      title: 'Contact',
      metaDescription:
        'Ways to reach Alireza Alamshah for collaboration, project work, or purchasing products.',
      intro: 'For collaboration, project inquiries, or any question, reach me through the channels below.',
      emailLabel: 'Email',
      socialsLabel: 'Social',
      responseNote: 'I usually reply within 24 hours.',
    },
    notFound: {
      title: 'Page not found',
      text: 'The page you were looking for does not exist or has moved.',
      backHome: 'Back to home',
    },
    footer: {
      tagline: 'Built with care — lightweight, fast, and tracker-free.',
      rights: 'All rights reserved.',
      rss: 'RSS feed',
    },
  },

  de: {
    site: {
      name: 'Alireza',
      fullName: 'Alireza Alamshah',
      role: 'Python-Entwickler & Webdesigner',
      description:
        'Python-Entwickler und Webdesigner — Portfolio, Software-Produkte und kostenlose Programmier-Tutorials.',
    },
    nav: {
      home: 'Start',
      portfolio: 'Portfolio',
      products: 'Produkte',
      tutorials: 'Tutorials',
      about: 'Über mich',
      contact: 'Kontakt',
      menu: 'Menü',
      switchLang: 'Sprache wechseln',
      toggleTheme: 'Helles/dunkles Design umschalten',
      skipToContent: 'Zum Inhalt springen',
    },
    home: {
      heroGreeting: 'Hallo, ich bin Alireza 👋',
      heroTitle: 'Python-Entwickler & Webdesigner',
      heroText:
        'Ich entwickle Software-Tools, gestalte schnelle und benutzerfreundliche Websites und teile mein Wissen in verständlicher Sprache.',
      ctaPortfolio: 'Meine Arbeiten ansehen',
      ctaContact: 'Kontakt aufnehmen',
      featuredProjects: 'Ausgewählte Projekte',
      latestTutorials: 'Neueste kostenlose Tutorials',
      productsTeaser: 'Produkte',
      productsTeaserText: 'Software und Kurspakete, die ich entwickelt habe.',
      viewAll: 'Alle ansehen',
    },
    about: {
      title: 'Über mich',
      metaDescription:
        'Lernen Sie Alireza Alamshah kennen — Python-Entwickler und Webdesigner; Fähigkeiten, Erfahrung und Werdegang.',
      intro: [
        'Ich bin Alireza Alamshah, IT-Fachmann mit über 13 Jahren Erfahrung in Programmierung, Produktmanagement und der Leitung technischer Teams. Am meisten begeistert mich, Werkzeuge zu bauen, die die Arbeit anderer Menschen erleichtern — von Automatisierungsskripten für Produktionslinien bis zu kompletten Webanwendungen.',
        'Neben der Softwareentwicklung teile ich meine Erfahrung in Form von kostenlosen Tutorials und Kurspaketen, um anderen den Lernweg zu verkürzen.',
      ],
      skillsTitle: 'Fähigkeiten',
      skillGroups: [
        { title: 'Sprachen', items: 'Python, JavaScript & TypeScript, T-SQL, HTML & CSS' },
        { title: 'Frameworks', items: 'Django, Flask, FastAPI, React, Node.js, WordPress' },
        { title: 'Daten & KI', items: 'Power BI, pandas, NumPy, Scikit-Learn, OpenCV, Selenium' },
        { title: 'Datenbanken & Tools', items: 'MySQL, MongoDB, SQLite, Linux, Git' },
      ],
      experienceTitle: 'Berufserfahrung',
      educationTitle: 'Ausbildung',
      languagesTitle: 'Sprachen',
      certificatesTitle: 'Zertifikate',
      certHoursUnit: 'Std.',
      certScoreLabel: 'Note',
      certNoLabel: 'Zertifikat-Nr.',
      certVerifyCta: 'Zertifikat prüfen',
      printCta: 'Lebenslauf als PDF',
    },
    portfolio: {
      title: 'Portfolio',
      metaDescription:
        'Portfolio von Alireza Alamshah — Python- und Webdesign-Projekte mit ausführlicher Fallstudie zu jedem Projekt.',
      intro: 'Eine Auswahl meiner Projekte; klicken Sie auf ein Projekt für alle Details.',
      tech: 'Technologien',
      year: 'Jahr',
      demo: 'Live-Demo',
      source: 'Quellcode',
      pdf: 'Projektdokument (PDF)',
      backToList: 'Zurück zum Portfolio',
    },
    products: {
      title: 'Produkte',
      metaDescription:
        'Produkte von Alireza Alamshah — Software und Kurspakete für Python-Programmierung und Webdesign.',
      intro: 'Software und Kurspakete, die ich vorbereitet habe.',
      kindSoftware: 'Software',
      kindCourse: 'Kurspaket',
      comingSoon: 'Bald verfügbar',
      featuresTitle: 'Funktionen',
      buyCta: 'Kaufanfrage stellen',
      buyNote: 'Der Online-Kauf ist bald verfügbar; schreiben Sie mir vorerst über die Kontaktseite.',
      backToList: 'Zurück zu den Produkten',
    },
    tutorials: {
      title: 'Kostenlose Tutorials',
      metaDescription:
        'Kostenlose Tutorials zu Python-Programmierung und Webdesign in verständlicher Sprache — von Alireza Alamshah.',
      intro: 'Tutorials in verständlicher Sprache; kostenlos und ohne Bedingungen.',
      readMore: 'Weiterlesen',
      publishedOn: 'Veröffentlicht am:',
      backToList: 'Zurück zu den Tutorials',
      searchPlaceholder: 'Tutorials durchsuchen…',
      searchUnavailable: 'Die Suche ist derzeit nicht verfügbar (im Dev-Modus zuerst builden)',
      copy: 'Kopieren',
      copied: 'Kopiert ✓',
      related: 'Ähnliche Tutorials',
      tagLabel: 'Schlagwort',
    },
    contact: {
      title: 'Kontakt',
      metaDescription:
        'So erreichen Sie Alireza Alamshah für Zusammenarbeit, Projektanfragen oder den Kauf von Produkten.',
      intro:
        'Für Zusammenarbeit, Projektanfragen oder Fragen erreichen Sie mich über die folgenden Kanäle.',
      emailLabel: 'E-Mail',
      socialsLabel: 'Soziale Netzwerke',
      responseNote: 'Ich antworte in der Regel innerhalb von 24 Stunden.',
    },
    notFound: {
      title: 'Seite nicht gefunden',
      text: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
      backHome: 'Zurück zur Startseite',
    },
    footer: {
      tagline: 'Mit Sorgfalt gebaut — leichtgewichtig, schnell und ohne Tracker.',
      rights: 'Alle Rechte vorbehalten.',
      rss: 'RSS-Feed',
    },
  },
};
