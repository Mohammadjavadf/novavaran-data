import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../../components/common/Container/Container';
import SafeImage from '../../components/common/SafeImage/SafeImage';
import CTA from '../../components/sections/CTA/CTA';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../../components/common/BrandIcons';
import { teamMembers } from '../../data/team';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

const socialIconMap = { linkedin: LinkedinIcon, github: GithubIcon, twitter: TwitterIcon };

export default function Team() {
  const { t } = useTranslation();

  return (
    <>
      <section className="page-hero">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="page-hero__eyebrow">{t('teamPage.eyebrow')}</span>
            <h1 className="page-hero__title">{t('teamPage.title')}</h1>
            <p className="page-hero__desc">{t('teamPage.desc')}</p>
          </motion.div>
        </Container>
      </section>

      <section className="team-page">
        <Container>
          <motion.div
            className="team-page__grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {teamMembers.map((m) => (
              <motion.article key={m.id} className="team-page__card" variants={staggerItem}>
                <div className="team-page__media">
                  <SafeImage src={m.image} alt={t(m.nameKey)} fallbackText={t(m.nameKey)} />
                </div>
                <div className="team-page__body">
                  <h3 className="team-page__name">{t(m.nameKey)}</h3>
                  <span className="team-page__role">{t(m.roleKey)}</span>
                  <p className="team-page__bio">{t(m.bioKey)}</p>
                  <div className="team-page__socials">
                    {Object.entries(m.socials).map(([key, url]) => {
                      const Icon = socialIconMap[key];
                      if (!Icon) return null;
                      return (
                        <a key={key} href={url} className="team-page__social" aria-label={`${key} ${t(m.nameKey)}`} target="_blank" rel="noopener noreferrer">
                          <Icon size={15} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      <CTA />
    </>
  );
}