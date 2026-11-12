import { motion } from 'framer-motion';
import Container from '../../common/Container/Container';
import { stats } from '../../../data/stats';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function Stats() {
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