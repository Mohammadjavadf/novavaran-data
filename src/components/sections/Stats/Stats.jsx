import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../../common/Container/Container';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { value: t('stats.projectsValue'), label: t('stats.projects') },
    { value: t('stats.clientsValue'), label: t('stats.clients') },
    { value: t('stats.expertsValue'), label: t('stats.experts') },
    { value: t('stats.satisfactionValue'), label: t('stats.satisfaction') },
  ];

  return (
    <section className="stats">
      <Container>
        <div className="stats__inner">
          <motion.div
            className="stats__grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} className="stats__item" variants={staggerItem}>
                <div className="stats__value">{s.value}</div>
                <div className="stats__label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}