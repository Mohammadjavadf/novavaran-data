import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { mainNav } from './headerData';

export default function NavMenu() {
  const { t } = useTranslation();

  return (
    <ul className="nav">
      {mainNav.map((item) => {
        const hasMega = Boolean(item.megaMenu);
        return (
          <li
            key={item.to}
            className={`nav__item ${hasMega ? 'nav__item--has-mega' : ''}`.trim()}
          >
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `nav__link ${isActive ? 'is-active' : ''}`.trim()
              }
            >
              {t(item.labelKey)}
              {hasMega && <ChevronDown size={14} className="nav__chevron" />}
            </NavLink>

            {hasMega && <MegaMenu data={item.megaMenu} />}
          </li>
        );
      })}
    </ul>
  );
}

function MegaMenu({ data }) {
  const { t } = useTranslation();

  return (
    <div className="mega" role="menu">
      <div className="mega__head">
        <h4>{t(data.titleKey)}</h4>
        <p>{t(data.descKey)}</p>
      </div>
      <div className="mega__grid">
        {data.items.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.to} to={item.to} className="mega__item" role="menuitem">
              <span className="mega__icon"><Icon size={18} /></span>
              <span className="mega__text">
                <strong>{t(item.titleKey)}</strong>
                <span>{t(item.descKey)}</span>
              </span>
            </Link>
          );
        })}
      </div>
      <div style={{ marginTop: '1.25rem', textAlign: 'left' }}>
        <Link to={data.items[0].to} className="btn btn--ghost btn--sm" style={{ gap: 6 }}>
          <span>{t('megaMenu.allServices')}</span>
          <ArrowLeft size={14} />
        </Link>
      </div>
    </div>
  );
}