import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../context/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'فعال‌سازی حالت روشن' : 'فعال‌سازی حالت تیره'}
      title={isDark ? 'حالت روشن' : 'حالت تیره'}
    >
      <span className={`theme-toggle__icon ${isDark ? 'is-active' : ''}`.trim()}>
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </span>
    </button>
  );
}
