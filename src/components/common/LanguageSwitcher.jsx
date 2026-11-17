import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fa' ? 'en' : 'fa';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      type="button"
      className="theme-toggle" // از استایل موجود استفاده می‌کنیم
      onClick={toggleLanguage}
      aria-label="Change language"
      title={i18n.language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 'bold' }}>
        <Globe size={16} />
        {i18n.language === 'fa' ? 'EN' : 'FA'}
      </span>
    </button>
  );
}