import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// فایل‌های ترجمه رو در مرحله بعد می‌سازیم
import faTranslation from './locales/fa/translation.json';
import enTranslation from './locales/en/translation.json';

const resources = {
  fa: { translation: faTranslation },
  en: { translation: enTranslation },
};

i18n
  .use(LanguageDetector) // تشخیص خودکار زبان مرورگر
  .use(initReactI18next) // اتصال به React
  .init({
    resources,
    fallbackLng: 'fa', // زبان پیش‌فرض در صورت عدم تشخیص
    supportedLngs: ['fa', 'en'],
    interpolation: {
      escapeValue: false, // React خودش از XSS جلوگیری می‌کنه
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;