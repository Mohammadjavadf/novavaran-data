import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, PhoneCall } from 'lucide-react';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import { fadeUp, viewportOnce } from '../../../utils/animations';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="cta">
      <Container>
        <motion.div
          className="cta__box"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="cta__content">
            <h2 className="cta__title">{t('cta.title')}</h2>
            <p className="cta__desc">{t('cta.desc')}</p>
            <div className="cta__actions">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowLeft}
                iconPosition="end"
              >
                {t('cta.consultBtn')}
              </Button>
              <Button
                href="tel:+982112345678"
                variant="ghost"
                size="lg"
                icon={PhoneCall}
                iconPosition="start"
                style={{ color: '#fff' }}
              >
                {t('cta.callBtn')}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}