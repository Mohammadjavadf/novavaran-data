import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import Container from '../../common/Container/Container';
import Logo from '../Header/Logo';
import Button from '../../common/Button/Button';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '../../common/BrandIcons';
import { footerColumns, socials } from './footerData';

const socialIconMap = {
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light />
            <p className="footer__tagline">{t('footer.tagline')}</p>
            <div className="footer__socials">
              {socials.map((s) => {
                const Icon = socialIconMap[s.key];
                return (
                  <a
                    key={s.key}
                    href={s.url}
                    className="footer__social"
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer__cols">
            {footerColumns.map((col) => (
              <div key={col.title} className="footer__col">
                <h4 className="footer__col-title">{t(col.titleKey)}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.labelKey}>
                      <Link to={link.to} className="footer__link">
                        {t(link.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer__col footer__col--contact">
              <h4 className="footer__col-title">{t('footer.contactTitle')}</h4>
              <ul className="footer__contact-list">
                <li>
                  <MapPin size={16} />
                  <span>{t('footer.address')}</span>
                </li>
                <li>
                  <Phone size={16} />
                  <a href="tel:+982112345678" className="footer__link" dir="ltr">
                    021-12345678
                  </a>
                </li>
                <li>
                  <Mail size={16} />
                  <a href="mailto:hello@novavarandata.ir" className="footer__link" dir="ltr">
                    hello@novavarandata.ir
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__newsletter">
          <div>
            <h4>{t('footer.newsletterTitle')}</h4>
            <p>{t('footer.newsletterDesc')}</p>
          </div>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t('footer.emailPlaceholder')}
              aria-label={t('footer.emailPlaceholder')}
              required
            />
            <Button variant="primary" size="md" icon={ArrowLeft} iconPosition="end">
              {t('footer.subscribe')}
            </Button>
          </form>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {t('footer.companyName')} {t('footer.rights')}
          </p>
          <div className="footer__legal">
            <Link to="/contact">{t('footer.privacy')}</Link>
            <Link to="/contact">{t('footer.terms')}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}