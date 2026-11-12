import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { mainNav } from './headerData';

export default function NavMenu() {
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
              {item.label}
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
  return (
    <div className="mega" role="menu">
      <div className="mega__head">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
      <div className="mega__grid">
        {data.items.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.to} to={item.to} className="mega__item" role="menuitem">
              <span className="mega__icon"><Icon size={18} /></span>
              <span className="mega__text">
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </span>
            </Link>
          );
        })}
      </div>
      <div style={{ marginTop: '1.25rem', textAlign: 'left' }}>
        <Link to={data.items[0].to} className="btn btn--ghost btn--sm" style={{ gap: 6 }}>
          <span>همه خدمات</span>
          <ArrowLeft size={14} />
        </Link>
      </div>
    </div>
  );
}