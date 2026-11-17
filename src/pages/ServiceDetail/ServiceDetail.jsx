import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowLeft, Phone } from 'lucide-react';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import SafeImage from '../../components/common/SafeImage/SafeImage';
import CTA from '../../components/sections/CTA/CTA';
import { services } from '../../data/services';

const serviceImages = {
  'software-development': '1461749280684-dccba630e2f6',
  cloud: '1544197150-b99a580bb7a8',
  security: '1563013544-824ae1b704d3',
  data: '1551288049-bebda4e38f71',
  mobile: '1512941937669-90a1b58e7e9c',
  devops: '1667372393119-3d4c48d07fc9',
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Container>
        <div className="service-not-found">
          <h1>{t('serviceDetail.notFound')}</h1>
          <p>{t('serviceDetail.notFoundDesc')}</p>
          <Button to="/services" variant="primary" size="md">
            {t('serviceDetail.backToServices')}
          </Button>
        </div>
      </Container>
    );
  }

  const others = services.filter((s) => s.slug !== slug).slice(0, 4);
  const imageId = serviceImages[service.slug] || '1498050108023-c5249f4df085';
  const heroImageUrl = `https://images.unsplash.com/photo-${imageId}?w=1200&q=80`;

  return (
    <>
      <section className="page-hero">
        <Container>
          <span className="page-hero__eyebrow">{t('services.title')}</span>
          <h1 className="page-hero__title">{t(service.titleKey)}</h1>
          <p className="page-hero__desc">{t(service.shortKey)}</p>
        </Container>
      </section>

      <section className="service-detail">
        <Container>
          <div className="service-detail__layout">
            <article className="service-detail__main">
              <div className="service-detail__hero-media">
                <SafeImage
                  src={heroImageUrl}
                  alt={t(service.titleKey)}
                  fallbackText={t(service.titleKey)}
                />
              </div>

              <h2>{t('serviceDetail.intro')}</h2>
              <p>{t(service.descKey)}</p>
              <p>{t('serviceDetail.introExtra')}</p>

              <h2>{t('serviceDetail.features')}</h2>
              <div className="service-detail__features">
                {service.featuresKeys.map((key) => (
                  <div key={key} className="service-detail__feature">
                    <CheckCircle2 size={18} />
                    <span>{t(key)}</span>
                  </div>
                ))}
              </div>

              <h2>{t('serviceDetail.whyUs')}</h2>
              <p>{t('serviceDetail.whyUsDesc')}</p>
            </article>

            <aside className="service-detail__sidebar">
              <div className="service-detail__sidebar-card">
                <h4 className="service-detail__sidebar-title">
                  {t('serviceDetail.otherServices')}
                </h4>
                <nav className="service-detail__other-list">
                  {others.map((o) => (
                    <Link key={o.slug} to={`/services/${o.slug}`}>
                      <ArrowLeft size={14} />
                      {t(o.titleKey)}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="service-detail__contact-card">
                <h4>{t('serviceDetail.freeConsult')}</h4>
                <p>{t('serviceDetail.freeConsultDesc')}</p>
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  fullWidth
                  icon={Phone}
                  iconPosition="start"
                >
                  {t('serviceDetail.contactUs')}
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}