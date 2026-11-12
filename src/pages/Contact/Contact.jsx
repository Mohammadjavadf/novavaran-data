import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const infoItems = [
    { icon: MapPin, title: 'آدرس', body: 'تهران، خیابان ولیعصر، پلاک ۱۲۰۴، طبقه ۵' },
    { icon: Phone, title: 'تلفن', body: '۰۲۱-۱۲۳۴۵۶۷۸', href: 'tel:+982112345678' },
    { icon: Mail, title: 'ایمیل', body: 'hello@novavarandata.ir', href: 'mailto:hello@novavarandata.ir' },
    { icon: Clock, title: 'ساعات کاری', body: 'شنبه تا چهارشنبه، ۹ تا ۱۸' },
  ];

  return (
    <>
      <section className="page-hero">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="page-hero__eyebrow">تماس با ما</span>
            <h1 className="page-hero__title">بیایید درباره پروژه شما صحبت کنیم</h1>
            <p className="page-hero__desc">
              فرم زیر را پر کنید یا از راه‌های ارتباطی مستقیم با ما در تماس باشید.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="contact-page">
        <Container>
          <div className="contact-page__layout">
            <motion.div
              className="contact-page__form-wrap"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="contact-page__form-title">ارسال پیام</h2>
              <p className="contact-page__form-desc">معمولاً در کمتر از ۲۴ ساعت پاسخ می‌دهیم.</p>

              {submitted && (
                <div className="contact-page__success">
                  <CheckCircle2 size={18} />
                  پیام شما با موفقیت ارسال شد. به‌زودی با شما تماس می‌گیریم.
                </div>
              )}

              <form className="contact-page__form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="contact-page__row">
                  <div className="contact-page__field">
                    <label htmlFor="name">نام و نام خانوادگی *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="مثلاً علی رضایی"
                      className={errors.name ? 'has-error' : ''}
                      {...register('name', { required: 'نام الزامی است', minLength: { value: 3, message: 'حداقل ۳ کاراکتر' } })}
                    />
                    {errors.name && <span className="contact-page__error">{errors.name.message}</span>}
                  </div>

                  <div className="contact-page__field">
                    <label htmlFor="email">ایمیل *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className={errors.email ? 'has-error' : ''}
                      {...register('email', {
                        required: 'ایمیل الزامی است',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'ایمیل معتبر نیست' },
                      })}
                    />
                    {errors.email && <span className="contact-page__error">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="contact-page__row">
                  <div className="contact-page__field">
                    <label htmlFor="phone">تلفن</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      {...register('phone')}
                    />
                  </div>

                  <div className="contact-page__field">
                    <label htmlFor="subject">موضوع *</label>
                    <select
                      id="subject"
                      className={errors.subject ? 'has-error' : ''}
                      {...register('subject', { required: 'موضوع را انتخاب کنید' })}
                    >
                      <option value="">انتخاب کنید...</option>
                      <option value="software">توسعه نرم‌افزار</option>
                      <option value="cloud">رایانش ابری</option>
                      <option value="data">تحلیل داده</option>
                      <option value="security">امنیت</option>
                      <option value="other">سایر</option>
                    </select>
                    {errors.subject && <span className="contact-page__error">{errors.subject.message}</span>}
                  </div>
                </div>

                <div className="contact-page__field">
                  <label htmlFor="message">پیام *</label>
                  <textarea
                    id="message"
                    placeholder="درباره پروژه یا نیازتان بنویسید..."
                    className={errors.message ? 'has-error' : ''}
                    {...register('message', {
                      required: 'پیام الزامی است',
                      minLength: { value: 10, message: 'حداقل ۱۰ کاراکتر' },
                    })}
                  />
                  {errors.message && <span className="contact-page__error">{errors.message.message}</span>}
                </div>

                <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
                </Button>
              </form>
            </motion.div>

            <motion.aside
              className="contact-page__info"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {infoItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} className="contact-page__info-card" variants={staggerItem}>
                    <div className="contact-page__info-icon"><Icon size={20} /></div>
                    <div className="contact-page__info-body">
                      <h4>{item.title}</h4>
                      {item.href ? (
                        <a href={item.href}>{item.body}</a>
                      ) : (
                        <p>{item.body}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              <motion.div className="contact-page__map" variants={staggerItem}>
                <iframe
                  title="نقشه دفتر نوآوران داده"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=51.38%2C35.70%2C51.42%2C35.73&layer=mapnik"
                  loading="lazy"
                />
              </motion.div>
            </motion.aside>
          </div>
        </Container>
      </section>
    </>
  );
}