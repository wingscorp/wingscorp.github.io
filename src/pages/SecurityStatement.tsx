
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SecurityStatement = () => {
  const { t, language, direction } = useLanguage();
  const [showEnglish, setShowEnglish] = useState(language === 'en');
  
  const toggleLanguage = () => {
    setShowEnglish(!showEnglish);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24" dir={direction}>
        <div className="container-custom py-12">
          {/* Header with toggle */}
          <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-wings-blue" />
              <h1 className="text-3xl md:text-4xl font-bold text-wings-darkblue">
                Advanced Shield
              </h1>
            </div>
            <Button 
              variant="outline"
              onClick={toggleLanguage}
              className="border-wings-blue text-wings-blue hover:bg-wings-blue/10"
            >
              {showEnglish ? 'עברית' : 'English'}
            </Button>
          </div>
          
          {/* Security Statement Content */}
          <div className="prose max-w-none">
            {showEnglish ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-wings-darkblue">Advanced Security and Protection Measures in the Wings Platform</h2>
                
                <p className="text-gray-700 leading-relaxed">
                  The Wings platform is built on a strong security foundation, providing advanced layers of protection to ensure the privacy, integrity, and availability of your data. The Advanced Shield package centralizes a wide range of industry-leading security measures, ensuring a safe and secure digital work environment for your organization.
                </p>
                
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-wings-blue mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-wings-darkblue">
                    <Lock className="h-5 w-5" /> Access Control & Authentication
                  </h3>
                  <p className="mb-4">Wings integrates with your organization's existing security measures to ensure that only authorized users gain access.</p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Single Sign-On (SSO):</strong> Full integration with your existing SSO solution (such as Azure AD, Okta) for centralized user and permissions management.</li>
                    <li><strong>IP Address Restriction:</strong> Limiting access to the platform exclusively to your organization's approved IP address ranges.</li>
                    <li><strong>SIEM Integration:</strong> Option to integrate Wings activity logs with your organizational SIEM system for advanced security monitoring and control.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-wings-blue mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-wings-darkblue">
                    <Shield className="h-5 w-5" /> Customer Data Isolation
                  </h3>
                  <p className="mb-4">Wings was designed so that customer data is completely separated and secured individually, without any contact or access between the data of different organizations.</p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Unique Customer Identification:</strong> Each customer has a unique identifier that serves as the basis for all access and authorization controls.</li>
                    <li><strong>System and File Storage Separation:</strong> Separate and isolated access points at the system level, and physically and logically separated file storage between customers.</li>
                    <li><strong>Strict Enforcement Mechanisms:</strong> Separation is enforced in real-time by combining SSO mechanisms, database access controls, and application-level separation.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-wings-blue mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-wings-darkblue">
                    <Lock className="h-5 w-5" /> Data Protection - Encryption
                  </h3>
                  <p className="mb-4">Your data is protected through comprehensive encryption, both in transit and at rest, within the production environment.</p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Encryption in Transit:</strong> Encryption of all communication between end-users and the system (using TLS), as well as encryption of message traffic between internal system components and between Wings and external services.</li>
                    <li><strong>Encryption at Rest:</strong> The entire database is encrypted at rest. Additionally, stored files are encrypted by default (SSE-S3), with the option for a dual-layer encryption with a customer-managed encryption key.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-wings-blue mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-wings-darkblue">
                    <ShieldCheck className="h-5 w-5" /> Data Backup and Recovery
                  </h3>
                  <p className="mb-4">We ensure data availability and business continuity through a robust backup and recovery strategy.</p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Database Backup:</strong> Daily full backups of the database, retained for 35 days with a rapid restoration capability.</li>
                    <li><strong>Document Storage Resilience:</strong> Documents are stored in an extremely durable infrastructure (99.999999999% durability), ensuring their long-term preservation even without separate document backup processes.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-wings-blue mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-wings-darkblue">
                    <Shield className="h-5 w-5" /> Secure Development Environment & Code Management
                  </h3>
                  <p className="mb-4">We adhere to secure development processes and strict code management to protect the platform itself.</p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Secure Development Environment:</strong> Controlled access using strong authentication (2FA), granular access control, and network segmentation between development, testing, and production environments.</li>
                    <li><strong>Source Code Security:</strong> Access to code repositories (GitHub) is secured with 2FA. All code changes and images are automatically scanned to detect malicious code and vulnerabilities.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-wings-blue mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-wings-darkblue">
                    <Shield className="h-5 w-5" /> Security Awareness and Training
                  </h3>
                  <p className="mb-4">Our development team consists of experienced professionals with a high level of information security awareness.</p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Professional Local Team:</strong> All code development is performed in Israel by an experienced and skilled development team, including developers with OWASP certifications.</li>
                    <li><strong>Security-First Approach:</strong> Security is an integral part of all development and operation stages of the platform.</li>
                  </ul>
                </div>
                
                <p className="text-gray-700 italic">
                  These measures, along with additional security controls, ensure that the Wings platform provides your organization with a secure and protected digital environment under the Advanced Shield umbrella.
                </p>
              </div>
            ) : (
              <div className="space-y-6" dir="rtl">
                <h2 className="text-2xl font-semibold text-wings-darkblue">אמצעי אבטחה והגנה מתקדמים בפלטפורמת Wings</h2>
                
                <p className="text-gray-700 leading-relaxed">
                  פלטפורמת Wings בנויה על יסודות אבטחה איתנים, ומספקת שכבות הגנה מתקדמות כדי להבטיח את פרטיות, שלמות וזמינות הנתונים שלך. חבילת Advanced Shield מרכזת מגוון רחב של אמצעי אבטחה מובילים בתעשייה, המבטיחים סביבת עבודה דיגיטלית בטוחה ומאובטחת עבור הארגון שלך.
                </p>
                
                <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-wings-blue mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-wings-darkblue">
                    <Lock className="h-5 w-5" /> בקרת גישה ואימות (Access Control & Authentication)
                  </h3>
                  <p className="mb-4">Wings משתלבת עם אמצעי האבטחה הקיימים של הארגון שלך כדי להבטיח שרק משתמשים מורשים יקבלו גישה.</p>
                  
                  <ul className="list-disc pr-6 space-y-2">
                    <li><strong>הזדהות אחודה (SSO):</strong> אינטגרציה מלאה עם פתרון ה-SSO הקיים שלכם (כמו Azure AD, Okta) לניהול ריכוזי של משתמשים והרשאות.</li>
                    <li><strong>הגבלת גישה לפי כתובות IP:</strong> הגבלת הגישה לפלטפורמה לטווח כתובות ה-IP המאושרות של הארגון שלכם בלבד.</li>
                    <li><strong>שילוב עם SIEM:</strong> אפשרות לשלב את יומני הפעילות של Wings עם מערכת ה-SIEM הארגונית שלכם לניטור ובקרה אבטחתיים מתקדמים.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-wings-blue mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-wings-darkblue">
                    <Shield className="h-5 w-5" /> בידוד נתוני לקוחות (Customer Data Isolation)
                  </h3>
                  <p className="mb-4">Wings תוכננה כך שנתוני הלקוחות יהיו מופרדים לחלוטין ומאובטחים בנפרד, ללא כל מגע או גישה בין נתוני ארגונים שונים.</p>
                  
                  <ul className="list-disc pr-6 space-y-2">
                    <li><strong>זיהוי לקוח ייחודי:</strong> לכל לקוח מזהה ייחודי המשמש בסיס לכל בקרות הגישה וההרשאות.</li>
                    <li><strong>הפרדה ברמת המערכת ואחסון הקבצים:</strong> נקודות גישה נפרדות ומבודדות, ואחסון קבצים מופרד פיזית ולוגית בין הלקוחות.</li>
                    <li><strong>מנגנוני אכיפה מחמירים:</strong> ההפרדה נאכפת בזמן אמת באמצעות שילוב מנגנוני SSO, בקרות גישה לבסיסי נתונים והפרדה ברמת היישום.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-wings-blue mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-wings-darkblue">
                    <Lock className="h-5 w-5" /> הגנת נתונים - הצפנה (Data Protection - Encryption)
                  </h3>
                  <p className="mb-4">הנתונים שלך מוגנים באמצעות הצפנה מקיפה, הן במעבר והן במנוחה, בסביבת הפרודקשן.</p>
                  
                  <ul className="list-disc pr-6 space-y-2">
                    <li><strong>הצפנה בתעבורה (In Transit):</strong> הצפנת כלל התקשורת בין משתמשי קצה למערכת (באמצעות TLS), וכן הצפנת תעבורת ההודעות בין רכיבי מערכת פנימיים ובין Wings לשירותים חיצוניים.</li>
                    <li><strong>הצפנה במנוחה (At Rest):</strong> בסיס הנתונים כולו מוצפן במנוחה. בנוסף, הקבצים המאוחסנים מוצפנים כברירת מחדל (SSE-S3), וקיימת אפשרות לשכבת הצפנה כפולה עם מפתח הצפנה מנוהל על ידי הלקוח.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-wings-blue mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-wings-darkblue">
                    <ShieldCheck className="h-5 w-5" /> גיבוי ושחזור נתונים (Data Backup and Recovery)
                  </h3>
                  <p className="mb-4">אנו מבטיחים זמינות נתונים והמשכיות עסקית באמצעות אסטרטגיית גיבוי ושחזור איתנה.</p>
                  
                  <ul className="list-disc pr-6 space-y-2">
                    <li><strong>גיבוי בסיס נתונים:</strong> גיבויים מלאים יומיים של בסיס הנתונים, עם שמירה למשך 35 יום ואפשרות שחזור מהיר.</li>
                    <li><strong>עמידות אחסון מסמכים:</strong> מסמכים נשמרים בתשתית עמידה במיוחד (99.999999999% עמידות), המבטיחה את שימורם לטווח ארוך גם ללא תהליכי גיבוי מסמכים נפרדים.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-wings-blue mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-wings-darkblue">
                    <Shield className="h-5 w-5" /> סביבת פיתוח מאובטחת וניהול קוד (Secure Development & Code Management)
                  </h3>
                  <p className="mb-4">אנו מקפידים על תהליכי פיתוח מאובטחים וניהול קוד קפדני להגנה על הפלטפורמה עצמה.</p>
                  
                  <ul className="list-disc pr-6 space-y-2">
                    <li><strong>אבטחת סביבת הפיתוח:</strong> גישה מבוקרת באמצעות הזדהות חזקה (2FA), בקרת גישה גרגולרית, והפרדת רשת בין סביבות הפיתוח, הבדיקות והפרודקשן.</li>
                    <li><strong>אבטחת קוד המקור:</strong> גישה למאגרי הקוד (GitHub) מאובטחת עם 2FA. כל שינויי הקוד וה-Images נסרקים אוטומטית לאיתור קוד זדוני ופגיעויות.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border-r-4 border-wings-blue mb-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-wings-darkblue">
                    <Shield className="h-5 w-5" /> מודעות והכשרת אבטחה (Security Awareness and Training)
                  </h3>
                  <p className="mb-4">צוות הפיתוח שלנו מורכב מאנשי מקצוע מנוסים בעלי מודעות גבוהה לאבטחת מידע.</p>
                  
                  <ul className="list-disc pr-6 space-y-2">
                    <li><strong>צוות מקצועי ומקומי:</strong> פיתוח הקוד מתבצע כולו בישראל על ידי צוות פיתוח מנוסה ומיומן, הכולל מפתחים בעלי הסמכות OWASP.</li>
                    <li><strong>גישת Security-First:</strong> אבטחה היא חלק בלתי נפרד מכל שלבי הפיתוח והתפעול של הפלטפורמה.</li>
                  </ul>
                </div>
                
                <p className="text-gray-700 italic">
                  אמצעים אלו, לצד בקרות אבטחה נוספות, מבטיחים שפלטפורמת Wings תספק לארגון שלך סביבה דיגיטלית מאובטחת ומוגנת תחת מעטפת ה-Advanced Shield.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityStatement;
