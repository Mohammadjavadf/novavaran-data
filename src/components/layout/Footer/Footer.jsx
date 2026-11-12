import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '../../common/BrandIcons';
import Container from '../../common/Container/Container';
import Logo from '../Header/Logo';
import Button from '../../common/Button/Button';
import { footerColumns, socials } from './footerData';

const socialIconMap = {
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
};

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light />
            <p className="footer__tagline">
              نوآوران داده؛ شریک فناوری شما برای ساخت راهکارهای دیجیتال مقیاس‌پذیر، امن و داده‌محور.
            </p>
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
                <h4 className="footer__col-title">{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="footer__link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer__col footer__col--contact">
              <h4 className="footer__col-title">تماس</h4>
              <ul className="footer__contact-list">
                <li>
                  <MapPin size={16} />
                  <span>تهران، خیابان ولیعصر، پلاک ۱۲۰۴</span>
                </li>
                <li>
                  <Phone size={16} />
                  <a href="tel:+982112345678" className="footer__link">۰۲۱-۱۲۳۴۵۶۷۸</a>
                </li>
                <li>
                  <Mail size={16} />
                  <a href="mailto:hello@novavarandata.ir" className="footer__link">
                    hello@novavarandata.ir
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__newsletter">
          <div>
            <h4>خبرنامه فناوری</h4>
            <p>ماهانه مهم‌ترین اخبار و مقالات فناوری را دریافت کنید.</p>
          </div>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="ایمیل شما"
              aria-label="ایمیل برای خبرنامه"
              required
            />
            <Button variant="primary" size="md" icon={ArrowLeft} iconPosition="end">
              عضویت
            </Button>
          </form>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} نوآوران داده. تمامی حقوق محفوظ است.</p>
          <div className="footer__legal">
            <Link to="/contact">حریم خصوصی</Link>
            <Link to="/contact">شرایط استفاده</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}