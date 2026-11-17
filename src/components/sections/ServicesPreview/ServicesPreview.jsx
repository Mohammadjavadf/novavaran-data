import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import Container from '../../common/Container/Container';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import { services } from '../../../data/services';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function ServicesPreview() {
  const { t } = useTranslation();

  return (
    <section className="services-preview">
      <Container>
        <SectionTitle
          eyebrow={t('services.title')}
          title={t('services.subtitle')}
          description={t('services.desc')}
        />

        <motion.div
          className="services-preview__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.slug} variants={staggerItem}>
                <Link to={`/services/${s.slug}`} className="services-preview__item">
                  <div className="services-preview__icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="services-preview__title">{t(s.titleKey)}</h3>
                  <p className="services-preview__desc">{t(s.shortKey)}</p>
                  <span className="services-preview__link">
                    {t('services.learnMore')} <ArrowLeft size={16} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="services-preview__footer">
          <Button to="/services" variant="outline" size="md">
            {t('services.viewAll')}
          </Button>
        </div>
      </Container>
    </section>
  );
}