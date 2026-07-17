import type { Lang } from '../i18n';

/** Résumé content for the About page — one edit updates all three languages. */

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface SimpleEntry {
  title: string;
  place: string;
  period: string;
}

export const experience: Record<Lang, ExperienceEntry[]> = {
  fa: [
    {
      role: 'توسعه‌دهنده فول‌استک و کارشناس پشتیبانی نرم‌افزار',
      company: 'شرکت آلوان — تهران',
      period: '۱۴۰۳ – اکنون',
      points: [
        'توسعه، نگهداری و بهینه‌سازی نرم‌افزارهای سازمانی بر اساس نیاز کسب‌وکار',
        'عیب‌یابی و رفع مشکلات نرم‌افزاری با دیباگ و تحلیل ریشه‌ای خطاها',
        'پشتیبانی فنی، آموزش کاربران و مستندسازی سیستم‌ها',
      ],
    },
    {
      role: 'مدیر تولید و برنامه‌نویس',
      company: 'شرکت سومیکو — تهران',
      period: '۱۴۰۲ – ۱۴۰۴',
      points: [
        'هدایت تیم تولید روزانه ۵۰۰ مودم با استانداردهای بالای کیفیت',
        'ساخت ابزارهای خودکارسازی خط تولید با پایتون (چاپ برچسب، به‌روزرسانی و تست مودم)',
        'برقراری ارتباط مؤثر بین واحد تولید و IT برای پاسخ به بازخورد مشتریان',
      ],
    },
    {
      role: 'مدرس برنامه‌نویسی و کارشناس IT (پاره‌وقت)',
      company: 'مجتمع آموزشی مشفق — کرج',
      period: '۱۴۰۰ – ۱۴۰۴',
      points: [
        'آموزش پایتون و پایگاه داده به بیش از ۳۰ هنرجو',
        'مشاوره تجهیز سخت‌افزاری و نرم‌افزاری مجموعه',
      ],
    },
    {
      role: 'مدیر واحد IT (پاره‌وقت)',
      company: 'طب و سلامت نیکی‌پژوه — تهران',
      period: '۱۴۰۱ – ۱۴۰۴',
      points: [
        'مدیریت عملیات روزانه IT و تضمین امنیت داده‌ها',
        'طراحی و نگهداری وب‌سایت شرکت (پروژه نیکی‌طب در نمونه‌کارها)',
      ],
    },
    {
      role: 'مدیر واحد IT',
      company: 'شرکت راتین خوش — تهران',
      period: '۱۳۹۳ – ۱۴۰۲',
      points: [
        'ارتقای کیفیت خدمات از ۳۰٪ به ۷۰٪ با بهبود ارتباط واحد فروش و IT',
        'رهبری پروژه‌های نرم‌افزاری با تمرکز بر تجربه کاربر و رضایت مشتری',
      ],
    },
    {
      role: 'مدیر IT',
      company: 'شرکت مادیران — تهران',
      period: '۱۳۹۱ – ۱۳۹۳',
      points: [],
    },
    {
      role: 'مدیر IT',
      company: 'شرکت سپهرنت — تهران',
      period: '۱۳۸۸ – ۱۳۹۱',
      points: [],
    },
  ],

  en: [
    {
      role: 'Full-Stack Software Developer & Application Support Engineer',
      company: 'Alvan Company — Tehran',
      period: 'June 2024 – Present',
      points: [
        'Develop, maintain, and optimize business applications based on organizational requirements',
        'Diagnose and resolve software issues through debugging and root-cause analysis',
        'Provide technical support, user training, and system documentation',
      ],
    },
    {
      role: 'Production Manager & Programmer',
      company: 'Sumico Company — Tehran',
      period: 'Nov 2023 – May 2025',
      points: [
        'Led the team producing 500 modems per day to high quality standards',
        'Built Python automation tools for the production line (label printing, modem updating and testing)',
        'Bridged manufacturing and IT to address customer feedback effectively',
      ],
    },
    {
      role: 'Programming Teacher & IT Expert (part-time)',
      company: 'Mushfaq Educational Institute — Karaj',
      period: '2021 – 2025',
      points: [
        'Taught Python and database programming to 30+ students',
        'Advised on software and hardware procurement',
      ],
    },
    {
      role: 'IT Department Head (part-time)',
      company: 'Teb-o-Salamat Niki Pajouh — Tehran',
      period: '2022 – 2025',
      points: [
        'Managed daily IT operations with a focus on data security',
        'Designed and maintained the company website (see the Nikiteb project in my portfolio)',
      ],
    },
    {
      role: 'IT Department Head',
      company: 'Ratin Khosh Company — Tehran',
      period: '2014 – 2023',
      points: [
        'Improved service quality from 30% to 70% by streamlining sales–IT communication',
        'Led software projects centered on user experience and client satisfaction',
      ],
    },
    {
      role: 'IT Manager',
      company: 'Maadiran Company — Tehran',
      period: '2013 – 2014',
      points: [],
    },
    {
      role: 'IT Manager',
      company: 'Sepehr Net Company — Tehran',
      period: '2010 – 2013',
      points: [],
    },
  ],

  de: [
    {
      role: 'Full-Stack-Softwareentwickler & Application-Support-Engineer',
      company: 'Alvan Company — Teheran',
      period: 'Juni 2024 – heute',
      points: [
        'Entwicklung, Wartung und Optimierung von Geschäftsanwendungen nach organisatorischen Anforderungen',
        'Diagnose und Behebung von Softwareproblemen durch Debugging und Ursachenanalyse',
        'Technischer Support, Anwenderschulung und Systemdokumentation',
      ],
    },
    {
      role: 'Produktionsleiter & Programmierer',
      company: 'Sumico Company — Teheran',
      period: 'Nov. 2023 – Mai 2025',
      points: [
        'Leitung des Teams mit einer Tagesproduktion von 500 Modems auf hohem Qualitätsniveau',
        'Entwicklung von Python-Automatisierungstools für die Produktionslinie (Etikettendruck, Modem-Update und -Test)',
        'Brücke zwischen Produktion und IT zur wirksamen Umsetzung von Kundenfeedback',
      ],
    },
    {
      role: 'Programmierlehrer & IT-Experte (Teilzeit)',
      company: 'Mushfaq-Bildungsinstitut — Karadsch',
      period: '2021 – 2025',
      points: [
        'Unterricht in Python- und Datenbankprogrammierung für über 30 Lernende',
        'Beratung bei der Beschaffung von Soft- und Hardware',
      ],
    },
    {
      role: 'Leiter der IT-Abteilung (Teilzeit)',
      company: 'Teb-o-Salamat Niki Pajouh — Teheran',
      period: '2022 – 2025',
      points: [
        'Verantwortung für den täglichen IT-Betrieb mit Fokus auf Datensicherheit',
        'Gestaltung und Pflege der Unternehmenswebsite (siehe Nikiteb-Projekt im Portfolio)',
      ],
    },
    {
      role: 'Leiter der IT-Abteilung',
      company: 'Ratin Khosh Company — Teheran',
      period: '2014 – 2023',
      points: [
        'Steigerung der Servicequalität von 30 % auf 70 % durch bessere Abstimmung von Vertrieb und IT',
        'Leitung von Softwareprojekten mit Fokus auf Nutzererlebnis und Kundenzufriedenheit',
      ],
    },
    {
      role: 'IT-Manager',
      company: 'Maadiran Company — Teheran',
      period: '2013 – 2014',
      points: [],
    },
    {
      role: 'IT-Manager',
      company: 'Sepehr Net Company — Teheran',
      period: '2010 – 2013',
      points: [],
    },
  ],
};

export const education: Record<Lang, SimpleEntry[]> = {
  fa: [
    {
      title: 'کاردانی مهندسی کامپیوتر',
      place: 'دانشگاه آزاد اسلامی ورامین',
      period: '۱۳۸۴ – ۱۳۸۶',
    },
    { title: 'دیپلم کامپیوتر', place: 'هنرستان پیام — تهران', period: '۱۳۸۳ – ۱۳۸۴' },
  ],
  en: [
    {
      title: 'Associate Degree in Computer Engineering',
      place: 'Islamic Azad University of Varamin',
      period: '2005 – 2007',
    },
    { title: 'Diploma in Computer Science', place: 'Payam Vocational School — Tehran', period: '2004 – 2005' },
  ],
  de: [
    {
      title: 'Associate Degree in Computertechnik',
      place: 'Islamische Azad-Universität Varamin',
      period: '2005 – 2007',
    },
    { title: 'Diplom in Informatik', place: 'Berufsschule Payam — Teheran', period: '2004 – 2005' },
  ],
};

export const spokenLanguages: Record<Lang, { name: string; level: string }[]> = {
  fa: [
    { name: 'فارسی', level: 'زبان مادری' },
    { name: 'انگلیسی', level: 'B1' },
    { name: 'آلمانی', level: 'A2' },
  ],
  en: [
    { name: 'Persian', level: 'Native' },
    { name: 'English', level: 'B1' },
    { name: 'German', level: 'A2' },
  ],
  de: [
    { name: 'Persisch', level: 'Muttersprache' },
    { name: 'Englisch', level: 'B1' },
    { name: 'Deutsch', level: 'A2' },
  ],
};

/**
 * Certificates — Tehran Institute of Technology (mftplus.com).
 * NOTE: verification links intentionally omit the national-ID parameter;
 * we link to the institute's public verify page + show the certificate number.
 */
export const certificates: {
  id: string;
  hours: number;
  score: number;
  year: number;
  certNo: string;
  title: Record<Lang, string>;
}[] = [
  {
    id: 'python',
    hours: 60,
    score: 100,
    year: 2023,
    certNo: '1564937',
    title: {
      fa: 'برنامه‌نویسی با پایتون',
      en: 'Programming with Python',
      de: 'Programmieren mit Python',
    },
  },
  {
    id: 'web-js',
    hours: 58,
    score: 100,
    year: 2024,
    certNo: '1781601',
    title: {
      fa: 'طراحی وب ۳ (JavaScript، jQuery و Ajax)',
      en: 'Web Design III (JavaScript, jQuery & Ajax)',
      de: 'Webdesign III (JavaScript, jQuery & Ajax)',
    },
  },
  {
    id: 'react',
    hours: 40,
    score: 90,
    year: 2025,
    certNo: '1855763',
    title: { fa: 'ReactJS', en: 'ReactJS', de: 'ReactJS' },
  },
];

export const certIssuer: Record<Lang, string> = {
  fa: 'مجتمع فنی تهران',
  en: 'Tehran Institute of Technology',
  de: 'Tehran Institute of Technology',
};

export const certVerifyUrl = 'https://mftplus.com/verifycertificate';
