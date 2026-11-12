import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import CTA from '../../components/sections/CTA/CTA';
import { timeline, values } from '../../data/about';
import { staggerContainer, staggerItem, fadeUp, viewportOnce, slideIn } from '../../utils/animations';
import SafeImage from '../../components/common/SafeImage/SafeImage';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="page-hero__eyebrow">درباره ما</span>
            <h1 className="page-hero__title">ما به قدرت فناوری برای تغییر باور داریم</h1>
            <p className="page-hero__desc">
              نوآوران داده از سال ۱۳۹۸ با هدف ساخت نرم‌افزارهای باکیفیت و راهکارهای داده‌محور
              شروع به کار کرد و امروز به یکی از معتبرترین شرکت‌های فناوری ایران تبدیل شده است.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="about-intro">
        <Container>
          <div className="about-intro__grid">
            <motion.div
              className="about-intro__content"
              variants={slideIn('right')}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <h2>داستان ما از یک ایده ساده شروع شد</h2>
              <p>
                در سال ۱۳۹۸، سه مهندس نرم‌افزار با یک باور مشترک گرد هم آمدند:
                فناوری باید در خدمت کسب‌وکار باشد، نه برعکس. از همان روز اول،
                تمرکز ما بر حل مسائل واقعی مشتریان با راهکارهای ساده، مقیاس‌پذیر و امن بود.
              </p>
              <p>
                امروز با تیمی از متخصصان حوزه‌های نرم‌افزار، داده، امنیت و زیرساخت،
                به بیش از ۴۵ شرکت در صنایع مختلف خدمت می‌دهیم.
              </p>
              <div className="about-intro__highlights">
                {['تیم متخصص و با تجربه', 'روش‌های Agile و شفاف', 'پشتیبانی بلندمدت', 'تعهد به کیفیت و امنیت'].map((t) => (
                  <div key={t} className="about-intro__highlight">
                    <CheckCircle2 size={18} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="about-intro__visual"
              variants={slideIn('left')}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
<SafeImage
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  alt="تیم نوآوران داده"
  fallbackText="تیم نوآوران داده"
/>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="timeline">
        <Container>
          <SectionTitle
            eyebrow="مسیر ما"
            title="نقاط عطف مسیر نوآوران داده"
            description="از یک ایده تا تبدیل شدن به شریک فناوری ده‌ها شرکت."
          />

          <div className="timeline__list">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="timeline__item"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.06 }}
              >
                <span className="timeline__year">{item.year}</span>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="values">
        <Container>
          <SectionTitle
            eyebrow="ارزش‌های ما"
            title="اصولی که به آن‌ها پایبندیم"
            description="این ارزش‌ها، راهنمای تصمیم‌گیری و رفتار روزانه ما هستند."
          />

          <motion.div
            className="values__grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} className="values__card" variants={staggerItem}>
                  <div className="values__icon"><Icon size={24} /></div>
                  <h3 className="values__title">{v.title}</h3>
                  <p className="values__desc">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      <CTA />
    </>
  );
}