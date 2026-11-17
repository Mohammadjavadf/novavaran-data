import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import SafeImage from '../../components/common/SafeImage/SafeImage';
import CTA from '../../components/sections/CTA/CTA';
import { timeline, values } from '../../data/about';
import {
  staggerContainer, staggerItem, fadeUp, viewportOnce, slideIn,
} from '../../utils/animations';

export default function About() {
  const { t } = useTranslation();

  const highlights = [
    t('aboutPage.highlights.h1'),
    t('aboutPage.highlights.h2'),
    t('aboutPage.highlights.h3'),
    t('aboutPage.highlights.h4'),
  ];

  return (
    <>
      <section className="page-hero">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="page-hero__eyebrow">{t('aboutPage.eyebrow')}</span>
            <h1 className="page-hero__title">{t('aboutPage.title')}</h1>
            <p className="page-hero__desc">{t('aboutPage.desc')}</p>
          </motion.div>
        </Container>
      </section>

      <section className="about-intro">
        <Container>
          <div className="about-intro__grid">
            <motion.div
              className="about-intro__content"
              variants={slideIn('right')}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <h2>{t('aboutPage.storyTitle')}</h2>
              <p>{t('aboutPage.storyP1')}</p>
              <p>{t('aboutPage.storyP2')}</p>
              <div className="about-intro__highlights">
                {highlights.map((h) => (
                  <div key={h} className="about-intro__highlight">
                    <CheckCircle2 size={18} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="about-intro__visual"
              variants={slideIn('left')}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <SafeImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt={t('aboutPage.eyebrow')}
                fallbackText={t('aboutPage.eyebrow')}
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="timeline">
        <Container>
          <SectionTitle
            eyebrow={t('aboutPage.timelineEyebrow')}
            title={t('aboutPage.timelineTitle')}
            description={t('aboutPage.timelineDesc')}
          />
          <div className="timeline__list">
            {timeline.map((item, i) => (
              <motion.div
                key={item.id}
                className="timeline__item"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.06 }}
              >
                <span className="timeline__year">{t(item.yearKey)}</span>
                <h3 className="timeline__title">{t(item.titleKey)}</h3>
                <p className="timeline__desc">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="values">
        <Container>
          <SectionTitle
            eyebrow={t('aboutPage.valuesEyebrow')}
            title={t('aboutPage.valuesTitle')}
            description={t('aboutPage.valuesDesc')}
          />
          <motion.div
            className="values__grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.id} className="values__card" variants={staggerItem}>
                  <div className="values__icon"><Icon size={24} /></div>
                  <h3 className="values__title">{t(v.titleKey)}</h3>
                  <p className="values__desc">{t(v.descKey)}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      <CTA />
    </>
  );
}