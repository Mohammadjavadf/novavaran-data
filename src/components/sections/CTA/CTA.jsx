import { motion } from 'framer-motion';
import { ArrowLeft, PhoneCall } from 'lucide-react';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import { fadeUp, viewportOnce } from '../../../utils/animations';

export default function CTA() {
  return (
    <section className="cta">
      <Container>
        <motion.div
          className="cta__box"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="cta__content">
            <h2 className="cta__title">
              آماده‌اید پروژه بعدی‌تان را با ما شروع کنید؟
            </h2>
            <p className="cta__desc">
              یک جلسه مشاوره رایگان رزرو کنید و بگذارید درباره چالش‌های فنی و راهکارها صحبت کنیم.
            </p>
            <div className="cta__actions">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowLeft} iconPosition="end">
                رزرو مشاوره رایگان
              </Button>
              <Button href="tel:+982112345678" variant="ghost" size="lg" icon={PhoneCall} iconPosition="start" style={{ color: '#fff' }}>
                تماس مستقیم
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}