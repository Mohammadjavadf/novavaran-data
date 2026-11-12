import { motion } from 'framer-motion';
import Container from '../../components/common/Container/Container';
import SafeImage from '../../components/common/SafeImage/SafeImage';
import CTA from '../../components/sections/CTA/CTA';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../../components/common/BrandIcons';
import { teamMembers } from '../../data/team';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

const socialIconMap = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  twitter: TwitterIcon,
};

export default function Team() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="page-hero__eyebrow">تیم ما</span>
            <h1 className="page-hero__title">آدم‌هایی که پشت نوآوران داده هستند</h1>
            <p className="page-hero__desc">
              تیمی از متخصصان پرشور که با هم، محصولات فناورانه باکیفیت می‌سازند.
            </p>
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
              <motion.article key={m.name} className="team-page__card" variants={staggerItem}>
                <div className="team-page__media">
                  <SafeImage src={m.image} alt={m.name} fallbackText={m.name} />
                </div>
                <div className="team-page__body">
                  <h3 className="team-page__name">{m.name}</h3>
                  <span className="team-page__role">{m.role}</span>
                  <p className="team-page__bio">{m.bio}</p>
                  <div className="team-page__socials">
                    {Object.entries(m.socials).map(([key, url]) => {
                      const Icon = socialIconMap[key];
                      if (!Icon) return null;
                      return (
                        <a
                          key={key}
                          href={url}
                          className="team-page__social"
                          aria-label={`${key} ${m.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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