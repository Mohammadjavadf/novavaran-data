import { useTranslation } from 'react-i18next';
import Container from '../../common/Container/Container';
import Reveal from '../../common/Reveal/Reveal';

const brands = ['TechNova', 'DATAX', 'CloudBase', 'Fintech', 'HealthTech', 'B2B Co'];

export default function TrustBar() {
  const { t } = useTranslation();

  return (
    <section className="trust-bar">
      <Container>
        <Reveal>
          <p className="trust-bar__label">{t('trustBar.label')}</p>
          <div className="trust-bar__logos">
            {brands.map((b) => (
              <span key={b} className="trust-bar__logo">{b}</span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}