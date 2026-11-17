import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
import { ArrowLeft, PlayCircle, Sparkles, TrendingUp } from 'lucide-react';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import {
  slideIn,
  staggerContainer,
  staggerItem,
} from '../../../utils/animations';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <Container>
        <div className="hero__grid">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero__badge" variants={staggerItem}>
              <span className="hero__badge-dot" />
              <span>{t('hero.badge')}</span>
            </motion.div>

            <motion.h1 className="hero__title" variants={staggerItem}>
              <Trans
                i18nKey="hero.title"
                components={{ 1: <span className="highlight" /> }}
              />
            </motion.h1>

            <motion.p className="hero__desc" variants={staggerItem}>
              {t('hero.desc')}
            </motion.p>

            <motion.div className="hero__actions" variants={staggerItem}>
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowLeft}
                iconPosition="end"
              >
                {t('hero.startBtn')}
              </Button>
              <Button
                to="/projects"
                variant="outline"
                size="lg"
                icon={PlayCircle}
                iconPosition="start"
              >
                {t('hero.viewProjectsBtn')}
              </Button>
            </motion.div>

            <motion.div className="hero__mini-stats" variants={staggerItem}>
              <div className="hero__mini-stat">
                <strong>{t('hero.miniStatProjectsValue')}</strong>
                <span>{t('hero.statProjects')}</span>
              </div>
              <div className="hero__mini-stat">
                <strong>{t('hero.miniStatSatisfactionValue')}</strong>
                <span>{t('hero.statSatisfaction')}</span>
              </div>
              <div className="hero__mini-stat">
                <strong>{t('hero.miniStatExperienceValue')}</strong>
                <span>{t('hero.statExperience')}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            variants={slideIn('right')}
            initial="hidden"
            animate="visible"
          >
            <div className="hero__mockup">
              <div className="hero__mockup-header">
                <span className="hero__dot" />
                <span className="hero__dot" />
                <span className="hero__dot" />
              </div>
              <div className="hero__mockup-body">
                <div className="hero__chart">
                  {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                    <motion.span
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{
                        delay: 0.5 + i * 0.08,
                        duration: 0.6,
                        ease: 'easeOut',
                      }}
                    />
                  ))}
                </div>
                <div className="hero__info-row">
                  <div>
                    <strong>{t('hero.monthlyRevenueValue')}</strong>
                    {t('hero.monthlyRevenue')}
                  </div>
                  <div>
                    <strong>{t('hero.annualGrowthValue')}</strong>
                    {t('hero.annualGrowth')}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="hero__float hero__float--top"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles size={14} /> {t('hero.floatQuality')}
            </motion.div>

            <motion.div
              className="hero__float hero__float--bottom"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <TrendingUp size={14} /> {t('hero.floatGrowth')}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}