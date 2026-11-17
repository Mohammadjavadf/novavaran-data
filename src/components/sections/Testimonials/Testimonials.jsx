import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import Container from '../../common/Container/Container';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { testimonials } from '../../../data/testimonials';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="testimonials">
      <Container>
        <SectionTitle
          eyebrow={t('testimonials.eyebrow')}
          title={t('testimonials.title')}
          description={t('testimonials.desc')}
        />

        <motion.div
          className="testimonials__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {testimonials.map((item) => (
            <motion.div key={item.id} className="testimonials__card" variants={staggerItem}>
              <div className="testimonials__stars">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonials__quote">«{t(item.quoteKey)}»</p>
              <div className="testimonials__author">
                <img
                  src={item.avatar}
                  alt={t(item.nameKey)}
                  className="testimonials__avatar"
                  loading="lazy"
                />
                <div className="testimonials__info">
                  <strong>{t(item.nameKey)}</strong>
                  <span>{t(item.roleKey)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}