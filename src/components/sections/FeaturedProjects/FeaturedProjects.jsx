import { useTranslation } from 'react-i18next';
import Container from '../../common/Container/Container';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { projects } from '../../../data/projects';

export default function FeaturedProjects() {
  const { t } = useTranslation();
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="featured-projects">
      <Container>
        <SectionTitle
          eyebrow={t('featuredProjects.eyebrow')}
          title={t('featuredProjects.title')}
          description={t('featuredProjects.desc')}
        />

        <div className="featured-projects__grid">
          {featured.map((p) => (
            <Card
              key={p.slug}
              image={p.image}
              badge={t(p.categoryKey)}
              title={t(p.titleKey)}
              description={t(p.descKey)}
              meta={<span>{p.tags.join(' · ')}</span>}
              to="/projects"
            />
          ))}
        </div>

        <div className="featured-projects__footer">
          <Button to="/projects" variant="primary" size="md">
            {t('featuredProjects.viewAll')}
          </Button>
        </div>
      </Container>
    </section>
  );
}