import { motion } from 'framer-motion';
import { ArrowLeft, PlayCircle, Sparkles, TrendingUp } from 'lucide-react';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import { slideIn, staggerContainer, staggerItem } from '../../../utils/animations';

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__grid">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero__badge" variants={staggerItem}>
              <span className="hero__badge-dot" />
              <span>شریک فناوری بیش از ۴۵ شرکت</span>
            </motion.div>

            <motion.h1 className="hero__title" variants={staggerItem}>
              راهکارهای <span className="highlight">داده‌محور</span> برای رشد کسب‌وکار شما
            </motion.h1>

            <motion.p className="hero__desc" variants={staggerItem}>
              در نوآوران داده، با ترکیب تخصص فنی و درک عمیق از کسب‌وکار،
              نرم‌افزارهایی می‌سازیم که واقعاً کار می‌کنند.
            </motion.p>

            <motion.div className="hero__actions" variants={staggerItem}>
              <Button to="/contact" variant="primary" size="lg" icon={ArrowLeft} iconPosition="end">
                شروع پروژه
              </Button>
              <Button to="/projects" variant="outline" size="lg" icon={PlayCircle} iconPosition="start">
                مشاهده نمونه‌کارها
              </Button>
            </motion.div>

            <motion.div className="hero__mini-stats" variants={staggerItem}>
              <div className="hero__mini-stat">
                <strong>۸۰+</strong>
                <span>پروژه موفق</span>
              </div>
              <div className="hero__mini-stat">
                <strong>۹۸٪</strong>
                <span>رضایت مشتری</span>
              </div>
              <div className="hero__mini-stat">
                <strong>۶ سال</strong>
                <span>تجربه</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            variants={slideIn('right')}
            initial="hidden"
            animate="visible"
          >
            <div className="hero__mockup">
              <div className="hero__mockup-header">
                <span className="hero__dot" />
                <span className="hero__dot" />
                <span className="hero__dot" />
              </div>
              <div className="hero__mockup-body">
                <div className="hero__chart">
                  {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                    <motion.span
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
                    />
                  ))}
                </div>
                <div className="hero__info-row">
                  <div>
                    <strong>۲.۴M</strong>
                    درآمد ماهانه
                  </div>
                  <div>
                    <strong>+۳۲٪</strong>
                    رشد سالانه
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="hero__float hero__float--top"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles size={14} /> کیفیت تضمینی
            </motion.div>

            <motion.div
              className="hero__float hero__float--bottom"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <TrendingUp size={14} /> رشد ۳۲٪
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}