import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const infoItems = [
    { icon: MapPin, title: t('contactPage.info.addressTitle'), body: t('contactPage.info.addressBody') },
    { icon: Phone, title: t('contactPage.info.phoneTitle'), body: t('contactPage.info.phoneBody'), href: 'tel:+982112345678' },
    { icon: Mail, title: t('contactPage.info.emailTitle'), body: t('contactPage.info.emailBody'), href: 'mailto:hello@novavarandata.ir' },
    { icon: Clock, title: t('contactPage.info.hoursTitle'), body: t('contactPage.info.hoursBody') },
  ];

  return (
    <>
      <section className="page-hero">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="page-hero__eyebrow">{t('contactPage.eyebrow')}</span>
            <h1 className="page-hero__title">{t('contactPage.title')}</h1>
            <p className="page-hero__desc">{t('contactPage.desc')}</p>
          </motion.div>
        </Container>
      </section>

      <section className="contact-page">
        <Container>
          <div className="contact-page__layout">
            <motion.div className="contact-page__form-wrap" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="contact-page__form-title">{t('contactPage.formTitle')}</h2>
              <p className="contact-page__form-desc">{t('contactPage.formDesc')}</p>

              {submitted && (
                <div className="contact-page__success">
                  <CheckCircle2 size={18} />
                  {t('contactPage.success')}
                </div>
              )}

              <form className="contact-page__form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="contact-page__row">
                  <div className="contact-page__field">
                    <label htmlFor="name">{t('contactPage.name')} *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t('contactPage.namePh')}
                      className={errors.name ? 'has-error' : ''}
                      {...register('name', { required: t('contactPage.errors.nameReq'), minLength: { value: 3, message: t('contactPage.errors.nameMin') } })}
                    />
                    {errors.name && <span className="contact-page__error">{errors.name.message}</span>}
                  </div>

                  <div className="contact-page__field">
                    <label htmlFor="email">{t('contactPage.email')} *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t('contactPage.emailPh')}
                      className={errors.email ? 'has-error' : ''}
                      {...register('email', {
                        required: t('contactPage.errors.emailReq'),
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t('contactPage.errors.emailInvalid') },
                      })}
                    />
                    {errors.email && <span className="contact-page__error">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="contact-page__row">
                  <div className="contact-page__field">
                    <label htmlFor="phone">{t('contactPage.phone')}</label>
                    <input id="phone" type="tel" placeholder={t('contactPage.phonePh')} {...register('phone')} />
                  </div>

                  <div className="contact-page__field">
                    <label htmlFor="subject">{t('contactPage.subject')} *</label>
                    <select id="subject" className={errors.subject ? 'has-error' : ''} {...register('subject', { required: t('contactPage.errors.subjectReq') })}>
                      <option value="">{t('contactPage.subjectPh')}</option>
                      <option value="software">{t('contactPage.subjectSoftware')}</option>
                      <option value="cloud">{t('contactPage.subjectCloud')}</option>
                      <option value="data">{t('contactPage.subjectData')}</option>
                      <option value="security">{t('contactPage.subjectSecurity')}</option>
                      <option value="other">{t('contactPage.subjectOther')}</option>
                    </select>
                    {errors.subject && <span className="contact-page__error">{errors.subject.message}</span>}
                  </div>
                </div>

                <div className="contact-page__field">
                  <label htmlFor="message">{t('contactPage.message')} *</label>
                  <textarea
                    id="message"
                    placeholder={t('contactPage.messagePh')}
                    className={errors.message ? 'has-error' : ''}
                    {...register('message', {
                      required: t('contactPage.errors.msgReq'),
                      minLength: { value: 10, message: t('contactPage.errors.msgMin') },
                    })}
                  />
                  {errors.message && <span className="contact-page__error">{errors.message.message}</span>}
                </div>

                <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? t('contactPage.submitting') : t('contactPage.submit')}
                </Button>
              </form>
            </motion.div>

            <motion.aside className="contact-page__info" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {infoItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} className="contact-page__info-card" variants={staggerItem}>
                    <div className="contact-page__info-icon"><Icon size={20} /></div>
                    <div className="contact-page__info-body">
                      <h4>{item.title}</h4>
                      {item.href ? <a href={item.href}>{item.body}</a> : <p>{item.body}</p>}
                    </div>
                  </motion.div>
                );
              })}

              <motion.div className="contact-page__map" variants={staggerItem}>
                <iframe
                  title={t('contactPage.eyebrow')}
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