
import { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'he';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.products': 'Products',
    'nav.security': 'Privacy & Security',
    'nav.upskill': 'Professional Development',
    'nav.pricing': 'Pricing',
    'nav.join': 'Join Wings',
    
    // Hero Section
    'hero.title': 'Transition to the AI Era',
    'hero.subtitle': 'Wings delivers comprehensive AI-powered workspaces \' that transform both new and existing organizational knowledge. We guide your complete digital transformation journey, empowering your organization to reach its fullest potential in the AI era.',
    
    // Advantages
    'advantages.title': 'Why Choose Wings',
    'advantages.security.title': 'Enhanced Security & Data Protection',
    'advantages.security.description': 'Enterprise-grade security protocols protecting sensitive information with advanced data encryption and privacy measures.',
    'advantages.growth.title': 'Growth Solution',
    'advantages.growth.description': 'Upskill workshops designed for organizations seeking Bottom-Up growth, or strategic workshops for Top-Down development, alongside professional guidance to reach full potential.',
    'advantages.multimodel.title': 'Multi-Model AI Integration',
    'advantages.multimodel.description': 'Seamlessly utilize multiple leading AI models and secure internet research within a single, powerful conversation interface.',
    'advantages.document.title': 'Advanced Document Intelligence',
    'advantages.document.description': 'Research capabilities across your files with source attribution and generation of new content based on your existing documents.',
    'advantages.multilingual.title': 'Superior Right To Left Support',
    'advantages.multilingual.description': 'Enhanced Hebrew and Arabic language processing and display, optimized for right-to-left languages.',
    'advantages.ui.title': 'User-Friendly Interface',
    'advantages.ui.description': 'Chat interface optimized for extensive text conversations with intuitive document handling system.',
    
    // Products
    'products.title': 'Our Solutions',
    'products.safechat.title': 'SafeChat',
    'products.safechat.description': 'A high-performance chat experience offering access to the worlds most advanced and powerful models, including Claude 3.7, Gemini 2.5 Pro, GPT-O3 and more, in a secure and integrative environment, with all the advantages presented above.',
    'products.translator.title': 'Translator Pro',
    'products.translator.description': 'Professional document translation preserving original formatting. Support for multiple file formats with OCR technology and multilingual handwriting recognition.',
    'products.megasummary.title': 'AI OCR',
    'products.megasummary.description': 'A tool that combines several artificial intelligence capabilities for intelligent scanning, including handwriting and in different languages.',
    'products.editor.title': 'Editor',
    'products.editor.description': 'Advanced document writing environment powered by AI prompts with template library and collaborative features.',
    'products.draftflow.title': 'Draft Flow',
    'products.draftflow.description': 'Specialized environment for creating legal documents with streamlined draft exchange and negotiation capabilities.',
    
    // Security Section
    'security.title': 'Security & Privacy',
    'security.subtitle': 'Enterprise-Grade Protection',
    'security.description': 'Wings implements rigorous security protocols to protect your sensitive information, with comprehensive data encryption and privacy measures.',
    'security.learnMore': 'Learn More',
    
    // Professional Development
    'upskill.title': 'Professional Development',
    'upskill.workshop.title': 'Upskill Workshop Series',
    'upskill.workshop.description': 'Customized training sessions for firms or individuals with practical application using daily work documents. Maximize Wings capabilities for individual and organizational effectiveness.',
    'upskill.strategy.title': 'AI Strategy Workshop',
    'upskill.strategy.description': 'Executive-level workshop covering technological background, technology trends and their impact on professional services. Strategic implications for firms.',
    'upskill.contact': 'Contact Us',
    
    // Pricing
    'pricing.title': 'Subscription Plans',
    'pricing.description': 'Choose the right plan for your needs',
    'pricing.base': 'Advanced Shield Package',
    'pricing.tier1': 'Tier 1 Base Package',
    'pricing.price': '$60/month',
    'pricing.features': 'Features:',
    'pricing.tokens': '2M tokens - For top tier AI models',
    'pricing.storage': '100MB - For Document analysis',
    'pricing.translation': '50,000 characters (~30 pages) - Translation Pro',
    'pricing.ocr': '20 pages - for AI OCR',
    'pricing.extensions': 'Optional Extensions:',
    'pricing.tokens.tier2': '8M tokens',
    'pricing.tokens.tier2.price': '+$10',
    'pricing.tokens.tier3': '12M tokens',
    'pricing.tokens.tier3.price': '+$15',
    'pricing.storage.more': '600MB',
    'pricing.storage.more.price': '+$5',
    'pricing.storage.most': '1.5GB',
    'pricing.storage.most.price': '+$12',
    'pricing.translation.more': '150,000 characters/~100 pages',
    'pricing.translation.more.price': '+$35',
    'pricing.translation.most': '3,000,000 characters/~1600 pages',
    'pricing.translation.most.price': '+$150',
    'pricing.ocr.more': '150 pages',
    'pricing.ocr.more.price': '+$10',
    'pricing.ocr.most': '450 pages',
    'pricing.ocr.most.price': '+$25',
    'pricing.note': 'Extensions can be added for one month or unlimited period, individually selectable per product',
    
    // Join Wings
    'join.title': 'Join Wings',
    'join.advanced': 'Advanced Shield Onboarding',
    'join.advanced.button': 'Apply Now',
    'join.basic': 'Basic Shield Onboarding',
    'join.basic.note': 'Currently unavailable',
    
    // Footer
    'footer.products': 'Products',
    'footer.security': 'Security',
    'footer.privacy': 'Privacy',
    'footer.upskill': 'Professional Development',
    'footer.pricing': 'Pricing',
    'footer.contact': 'Contact',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2025 Wings AI. All rights reserved.',
  },
  he: {
    // Navigation
    'nav.products': ' מוצרים',
    'nav.security': 'פרטיות ואבטחה ',
    'nav.upskill': 'פיתוח מקצועי',
    'nav.pricing': 'מחירים',
    'nav.join': 'הצטרף ל Wings',
    
    // Hero Section
    'hero.title': 'מעבר לעידן הבינה המלאכותית',
    'hero.subtitle': 'Wings מספקת סביבות עבודה מתקדמות מבוססות בינה מלאכותית, המשלבות יצירת תוכן חדש עם מינוף הידע הארגוני הקיים. אנו מלווים את תהליך הטרנספורמציה הדיגיטלית המלא שלכם, ומעצימים את הארגון למימוש מלוא הפוטנציאל בעידן הבינה המלאכותית.',
    'hero.cta': 'התחל עכשיו',
    'hero.learnMore': 'למד עוד',
    
    // Advantages
    'advantages.title': 'למה לבחור ב Wings',
    'advantages.security.title': 'אבטחה והגנת נתונים',
    'advantages.security.description': 'אבטחה מתקדמת ומשתלבת באופן מלא עם תשתיות ההגנה הארגוניות, כולל אכיפת הגבלות  IP, בקרות גישה מחמירות למידע, .  מקיפה על נתונים באמצעות שכבות הצפנה מתקדמות ומנגנוני פרטיות קפדניים.',
    'advantages.growth.title': 'פתרון צמיחה משולב',
    'advantages.growth.description': 'סדנאות Upskill המיועדות לארגונים שרוצים לצמוח Bottom-Up, או סדנאות אסטרטגיה לצמיחת Top-Down, לצד ליווי מרצועי עד להגעה אל קצה הפוטנציאל.',
    'advantages.multimodel.title': 'זמינות של כל המודלים המתקדמים',
    'advantages.multimodel.description': 'מיצוי החוזקות של כל מודל, השוואה בין תוצאות, העשרה באמצעות חיפוש אינטרנט מאובטח ואנונימי, בשיחת צ׳אט אחת רציפה',
    'advantages.document.title': 'מיצוי מידע ממסמכים',
    'advantages.document.description': 'יכולות מחקר בקבצים שלך עם ציון מקורות ויצירת תוכן חדש על בסיס המסמכים הקיימים שלך.',
    'advantages.multilingual.title': 'תמיכה מתקדמת בעברית ובערבית',
    'advantages.multilingual.description': 'עיבוד והצגה משופרים של השפה העברית והערבית, מותאמים לשפות מימין לשמאל.',
    'advantages.ui.title': 'ממשק מתקדם',
    'advantages.ui.description': 'ממשק צ\'אט מותאם לשיחות טקסט נרחבות עם יכולת אינטואיטיבית לטיפול במסמכים.',
    
    // Products
    'products.title': 'הפתרונות שלנו',
    'products.safechat.title': 'SafeChat',
    'products.safechat.description': 'אינטגרציה מתקדמת של בינה מלאכותית עם GPT O3, Gemini 2.5 Pro, Claude 3.7 ועוד מודלים מובילים. חיפושי אינטרנט מאובטחים ואנונימיים ויכולות ניתוח קבצים.',
    'products.translator.title': 'Translator Pro',
    'products.translator.description': 'תרגום מסמכים מקצועי תוך שמירה על עיצוב מקורי. תמיכה במגוון פורמטים של קבצים עם טכנולוגיית OCR וזיהוי כתב יד רב-לשוני.',
    'products.megasummary.title': 'AI OCR',
    'products.megasummary.description': 'כלי המשלב מספר יכולות בינה מלאכותית לסריקה חכמה, כולל כתבי יד ובשפות שונות.',
    'products.editor.title': 'Editor',
    'products.editor.description': 'סביבת כתיבת מסמכים מתקדמת המופעלת על ידי הנחיות בינה מלאכותית עם ספריית תבניות ותכונות שיתופיות.',
    'products.draftflow.title': 'Draft Flow',
    'products.draftflow.description': 'סביבה מתמחה ליצירת מסמכים משפטיים עם יכולות החלפת טיוטות ומשא ומתן מודרניות.',
    
    // Security Section
    'security.title': 'אבטחה ופרטיות',
    'security.subtitle': 'הגנה ברמה ארגונית',
    'security.description': 'Wings מיישמת פרוטוקולי אבטחה קפדניים להגנה על המידע הרגיש שלך, עם הצפנת נתונים ואמצעי פרטיות מקיפים.',
    'security.learnMore': 'למד עוד',
    
    // Professional Development
    'upskill.title': 'פיתוח מקצועי',
    'upskill.workshop.title': 'סדרת סדנאות Upskill',
    'upskill.workshop.description': 'סדנאות הדרכה מותאמות אישית לפירמות או יחידים עם יישום מעשי באמצעות מסמכי עבודה יומיומיים. מקסם את יכולות Wings לאפקטיביות אישית וארגונית.',
    'upskill.strategy.title': 'סדנת אסטרטגיית AI',
    'upskill.strategy.description': 'סדנה ברמת מנהלים המכסה רקע טכנולוגי, מגמות טכנולוגיות והשפעתן על שירותים מקצועיים. השלכות אסטרטגיות לפירמות.',
    'upskill.contact': 'צור קשר',
    
    // Pricing
    'pricing.title': 'תוכניות מנוי',
    'pricing.description': 'בחר את התוכנית המתאימה לצרכים שלך',
    'pricing.base': 'חבילת Advanced Shield',
    'pricing.tier1': 'חבילת בסיס Tier 1',
    'pricing.price': '$60/חודש',
    'pricing.features': 'תכולות ברישוי זה:',
    'pricing.tokens': '2M טוקנים - לשימוש במודלים המתקדמים ביותר',
    'pricing.storage': '100MB תיקיות - לניתוח מעמיק ו AI על המסמכים',
    'pricing.translation': '50,000 תווים (כ 30 עמודים) - לתרגום ועם שמירת מבנה',
    'pricing.ocr': '20 עמודים OCR - לסריקה מבוססת AI',
    'pricing.extensions': 'הרחבות אופציונליות:',
    'pricing.tokens.tier2': '8M טוקנים',
    'pricing.tokens.tier2.price': '+$10',
    'pricing.tokens.tier3': '12M טוקנים',
    'pricing.tokens.tier3.price': '+$15',
    'pricing.storage.more': '600MB',
    'pricing.storage.more.price': '+$5',
    'pricing.storage.most': '1.5GB',
    'pricing.storage.most.price': '+$12',
    'pricing.translation.more': '150,000 תווים/כ 100 עמודים',
    'pricing.translation.more.price': '+$35',
    'pricing.translation.most': '3,000,000 תווים/כ 1600 עמודים',
    'pricing.translation.most.price': '+$150',
    'pricing.ocr.more': '150 עמודים',
    'pricing.ocr.more.price': '+$10',
    'pricing.ocr.most': '450 עמודים',
    'pricing.ocr.most.price': '+$25',
    'pricing.note': 'ניתן להוסיף הרחבות לחודש אחד או לתקופה ארוכה לפי בחירתכם, ולכל מוצר בנפרד',
    
    // Join Wings
    'join.title': 'הצטרף ל-Wings',
    'join.advanced': 'רישום ל-Advanced Shield',
    'join.advanced.button': 'הגש בקשה',
    'join.basic': 'רישום ל-Basic Shield',
    'join.basic.note': 'לא זמין כרגע',
    
    // Footer
    'footer.products': 'מוצרים',
    'footer.security': 'אבטחה',
    'footer.privacy': 'פרטיות',
    'footer.upskill': 'פיתוח מקצועי',
    'footer.pricing': 'מחירים',
    'footer.contact': 'צור קשר',
    'footer.terms': 'תנאי שימוש',
    'footer.copyright': '© 2025 Wings AI. כל הזכויות שמורות.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const direction: Direction = language === 'he' ? 'rtl' : 'ltr';
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'he' : 'en');
  };
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
