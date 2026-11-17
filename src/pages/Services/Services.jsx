import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import Container from '../../components/common/Container/Container';
import CTA from '../../components/sections/CTA/CTA';
import { services } from '../../data/services';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      <section className="page-hero">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="page-hero__eyebrow">{t('servicesPage.eyebrow')}</span>
            <h1 className="page-hero__title">{t('servicesPage.title')}</h1>
            <p className="page-hero__desc">{t('servicesPage.desc')}</p>
          </motion.div>
        </Container>
      </section>

      <section className="services-page">
        <Container>
          <motion.div
            className="services-page__grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.slug}
                  className="services-page__card"
                  variants={staggerItem}
                >
                  <div className="services-page__icon">
                    <Icon size={26} />
                  </div>
                  <div className="services-page__body">
                    <h2 className="services-page__title">{t(s.titleKey)}</h2>
                    <p className="services-page__desc">{t(s.descKey)}</p>
                    <div className="services-page__features">
                      {s.featuresKeys.map((key) => (
                        <span key={key}>{t(key)}</span>
                      ))}
                    </div>
                    <Link to={`/services/${s.slug}`} className="services-page__link">
                      {t('servicesPage.details')} <ArrowLeft size={16} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </Container>
      </section>

      <CTA />
    </>
  );
}