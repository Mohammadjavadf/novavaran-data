import { useTranslation } from 'react-i18next';
import { Home, ArrowRight } from 'lucide-react';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="not-found">
      <Container>
        <div className="not-found__inner">
          <span className="not-found__code">{t('notFound.code')}</span>
          <h1 className="not-found__title">{t('notFound.title')}</h1>
          <p className="not-found__desc">{t('notFound.desc')}</p>
          <div className="not-found__actions">
            <Button to="/" variant="primary" size="lg" icon={Home} iconPosition="start">
              {t('notFound.homeBtn')}
            </Button>
            <Button to="/contact" variant="outline" size="lg" icon={ArrowRight} iconPosition="end">
              {t('notFound.contactBtn')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}