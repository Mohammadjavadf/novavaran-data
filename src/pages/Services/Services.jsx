import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Container from '../../components/common/Container/Container';
import CTA from '../../components/sections/CTA/CTA';
import { services } from '../../data/services';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="page-hero__eyebrow">خدمات ما</span>
            <h1 className="page-hero__title">راهکارهای کامل فناوری برای کسب‌وکار شما</h1>
            <p className="page-hero__desc">
              از ایده تا استقرار و پشتیبانی؛ همه نیازهای فناوری شما را پوشش می‌دهیم.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="services-page">
        <Container>
          <motion.div
            className="services-page__grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.article key={s.slug} className="services-page__card" variants={staggerItem}>
                  <div className="services-page__icon"><Icon size={26} /></div>
                  <div className="services-page__body">
                    <h2 className="services-page__title">{s.title}</h2>
                    <p className="services-page__desc">{s.description}</p>
                    <div className="services-page__features">
                      {s.features.map((f) => <span key={f}>{f}</span>)}
                    </div>
                    <Link to={`/services/${s.slug}`} className="services-page__link">
                      جزئیات کامل <ArrowLeft size={16} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </Container>
      </section>

      <CTA />
    </>
  );
}