import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Container from '../../common/Container/Container';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import { services } from '../../../data/services';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function ServicesPreview() {
  return (
    <section className="services-preview">
      <Container>
        <SectionTitle
          eyebrow="خدمات ما"
          title="راهکارهای فناوری برای رشد شما"
          description="از طراحی تا استقرار، تمام نیازهای فناوری کسب‌وکار شما را پوشش می‌دهیم."
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
                  <h3 className="services-preview__title">{s.title}</h3>
                  <p className="services-preview__desc">{s.short}</p>
                  <span className="services-preview__link">
                    بیشتر بدانید <ArrowLeft size={16} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="services-preview__footer">
          <Button to="/services" variant="outline" size="md">
            مشاهده همه خدمات
          </Button>
        </div>
      </Container>
    </section>
  );
}