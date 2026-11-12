import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import Logo from './Logo';
import NavMenu from './NavMenu';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState('');
  const { pathname } = useLocation();

  // بستن منو هنگام تغییر مسیر - با الگوی render-based
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

            <nav className="header__nav" aria-label="ناوبری اصلی">
              <NavMenu />
            </nav>

            <div className="header__actions">
              <ThemeToggle />
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="header__cta-btn"
              >
                شروع پروژه
              </Button>
              <button
                type="button"
                className="header__burger"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'بستن منو' : 'باز کردن منو'}
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