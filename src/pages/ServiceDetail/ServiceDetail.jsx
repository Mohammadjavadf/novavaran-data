import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Phone } from 'lucide-react';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import SafeImage from '../../components/common/SafeImage/SafeImage';
import CTA from '../../components/sections/CTA/CTA';
import { services } from '../../data/services';

const serviceImages = {
  'software-development': '1461749280684-dccba630e2f6',
  cloud: '1544197150-b99a580bb7a8',
  security: '1563013544-824ae1b704d3',
  data: '1551288049-bebda4e38f71',
  mobile: '1512941937669-90a1b58e7e9c',
  devops: '1667372393119-3d4c48d07fc9',
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Container>
        <div className="service-not-found">
          <h1>خدمت یافت نشد</h1>
          <p>خدمتی که دنبالش بودید پیدا نشد.</p>
          <Button to="/services" variant="primary" size="md">
            بازگشت به خدمات
          </Button>
        </div>
      </Container>
    );
  }

  const others = services.filter((s) => s.slug !== slug).slice(0, 4);
  const imageId = serviceImages[service.slug] || '1498050108023-c5249f4df085';
  const heroImageUrl = `https://images.unsplash.com/photo-${imageId}?w=1200&q=80`;

  return (
    <>
      <section className="page-hero">
        <Container>
          <span className="page-hero__eyebrow">خدمات ما</span>
          <h1 className="page-hero__title">{service.title}</h1>
          <p className="page-hero__desc">{service.short}</p>
        </Container>
      </section>

      <section className="service-detail">
        <Container>
          <div className="service-detail__layout">
<article className="service-detail__main">
  <div className="service-detail__hero-media">
    <SafeImage
      src={heroImageUrl}
      alt={service.title}
      fallbackText={service.title}
    />
  </div>

  <h2>معرفی خدمت</h2>
              <p>{service.description}</p>
              <p>
                تیم متخصص ما در نوآوران داده با تجربه چندین ساله در صنایع مختلف،
                آماده ارائه راهکارهای سفارشی متناسب با نیاز شماست. از مرحله مشاوره
                و تحلیل نیازها تا استقرار و پشتیبانی، همراه شما خواهیم بود.
              </p>

              <h2>ویژگی‌های کلیدی</h2>
              <div className="service-detail__features">
                {service.features.map((f) => (
                  <div key={f} className="service-detail__feature">
                    <CheckCircle2 size={18} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <h2>چرا نوآوران داده؟</h2>
              <p>
                ما فقط یک ارائه‌دهنده خدمات نیستیم؛ شریک فناوری شما هستیم.
                با رویکردی مشاوره‌ای، ابتدا نیازهای شما را عمیقاً درک می‌کنیم و
                سپس راهکاری مقرون‌به‌صرفه، مقیاس‌پذیر و امن پیشنهاد می‌دهیم.
              </p>
            </article>

            <aside className="service-detail__sidebar">
              <div className="service-detail__sidebar-card">
                <h4 className="service-detail__sidebar-title">سایر خدمات</h4>
                <nav className="service-detail__other-list">
                  {others.map((o) => (
                    <Link key={o.slug} to={`/services/${o.slug}`}>
                      <ArrowLeft size={14} />
                      {o.title}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="service-detail__contact-card">
                <h4>مشاوره رایگان</h4>
                <p>درباره پروژه‌تان با ما صحبت کنید.</p>
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  fullWidth
                  icon={Phone}
                  iconPosition="start"
                >
                  تماس با ما
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}