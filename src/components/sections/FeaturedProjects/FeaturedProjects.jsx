import Container from '../../common/Container/Container';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { projects } from '../../../data/projects';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="featured-projects">
      <Container>
        <SectionTitle
          eyebrow="نمونه‌کارها"
          title="پروژه‌هایی که به آن‌ها افتخار می‌کنیم"
          description="نگاهی به برخی از پروژه‌هایی که با تیم‌های مختلف به سرانجام رساندیم."
        />

        <div className="featured-projects__grid">
          {featured.map((p) => (
            <Card
              key={p.slug}
              image={p.image}
              badge={p.category}
              title={p.title}
              description={p.description}
              meta={<span>{p.tags.join(' · ')}</span>}
              to={`/projects`}
            />
          ))}
        </div>

        <div className="featured-projects__footer">
          <Button to="/projects" variant="primary" size="md">
            مشاهده همه پروژه‌ها
          </Button>
        </div>
      </Container>
    </section>
  );
}