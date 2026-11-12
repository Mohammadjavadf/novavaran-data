import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from '../../common/Container/Container';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { testimonials } from '../../../data/testimonials';
import { staggerContainer, staggerItem } from '../../../utils/animations';
import SafeImage from '../../common/SafeImage/SafeImage';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <Container>
        <SectionTitle
          eyebrow="نظرات مشتریان"
          title="آنچه مشتریان ما می‌گویند"
          description="رضایت مشتریان، بزرگترین سرمایه ماست."
        />

        <motion.div
          className="testimonials__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} className="testimonials__card" variants={staggerItem}>
              <div className="testimonials__stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonials__quote">«{t.quote}»</p>
              <div className="testimonials__author">
<SafeImage
  src={t.avatar}
  alt={t.name}
  className="testimonials__avatar"
  fallbackText={t.name.charAt(0)}
/>
                <div className="testimonials__info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}