import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ArrowLeft, Phone } from 'lucide-react';
import { mainNav } from './headerData';
import Button from '../../common/Button/Button';

export default function MobileMenu({ isOpen, onClose }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(null);

  const toggle = (key) => {
    setExpanded((prev) => (prev === key ? null : key));
  };

  return (
    <div className={`mobile ${isOpen ? 'is-open' : ''}`.trim()} aria-hidden={!isOpen}>
      <div className="mobile__inner">
        <nav className="mobile__group">
          <span className="mobile__title">{t('mobileMenu.title')}</span>
          {mainNav.map((item) => {
            const hasSub = Boolean(item.megaMenu);
            const isExpanded = expanded === item.to;

            return (
              <div key={item.to}>
                <div className="mobile__link-row">
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `mobile__link ${isActive ? 'is-active' : ''}`.trim()
                    }
                  >
                    {t(item.labelKey)}
                  </NavLink>

                  {hasSub && (
                    <button
                      type="button"
                      className={`mobile__toggle ${isExpanded ? 'is-open' : ''}`.trim()}
                      onClick={() => toggle(item.to)}
                      aria-label={isExpanded ? t('mobileMenu.closeSub') : t('mobileMenu.openSub')}
                      aria-expanded={isExpanded}
                    >
                      <ChevronDown size={18} />
                    </button>
                  )}
                </div>

                {hasSub && (
                  <div className={`mobile__sub ${isExpanded ? 'is-open' : ''}`.trim()}>
                    {item.megaMenu.items.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        onClick={onClose}
                        className="mobile__sub-link"
                      >
                        {t(sub.titleKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mobile__cta">
          <Button
            to="/contact"
            variant="primary"
            size="md"
            fullWidth
            icon={Phone}
            iconPosition="start"
            onClick={onClose}
          >
            {t('mobileMenu.freeConsult')}
          </Button>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <Link
            to="/projects"
            onClick={onClose}
            className="btn btn--outline btn--md btn--full"
            style={{ gap: 6 }}
          >
            <span>{t('mobileMenu.viewProjects')}</span>
            <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}