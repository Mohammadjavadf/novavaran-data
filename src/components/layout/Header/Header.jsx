import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import LanguageSwitcher from '../../common/LanguageSwitcher';
import Logo from './Logo';
import NavMenu from './NavMenu';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState('');
  const { pathname } = useLocation();
  const { t } = useTranslation();

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <>
      <header className="header">
        <Container>
          <div className="header__inner">
            <Logo />

            <nav className="header__nav" aria-label="Main navigation">
              <NavMenu />
            </nav>

            <div className="header__actions">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="header__cta-btn"
              >
                {t('nav.startProject')}
              </Button>
              <button
                type="button"
                className="header__burger"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}