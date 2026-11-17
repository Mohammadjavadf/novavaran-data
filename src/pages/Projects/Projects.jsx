import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../../components/common/Container/Container';
import Card from '../../components/common/Card/Card';
import CTA from '../../components/sections/CTA/CTA';
import { projects } from '../../data/projects';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

const ALL = 'all';

export default function Projects() {
  const { t } = useTranslation();
  const [active, setActive] = useState(ALL);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.categoryKey)));
    return [{ key: 'all', labelKey: 'projectsPage.filterAll' }, ...unique.map((k) => ({ key: k, labelKey: k }))];
  }, []);

  const filtered = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.categoryKey === active)),
    [active]
  );

  return (
    <>
      <section className="page-hero">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="page-hero__eyebrow">{t('projectsPage.eyebrow')}</span>
            <h1 className="page-hero__title">{t('projectsPage.title')}</h1>
            <p className="page-hero__desc">{t('projectsPage.desc')}</p>
          </motion.div>
        </Container>
      </section>

      <section className="projects-page">
        <Container>
          <div className="projects-page__filters" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={active === cat.key}
                className={`projects-page__filter ${active === cat.key ? 'is-active' : ''}`.trim()}
                onClick={() => setActive(cat.key)}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>

          <p className="projects-page__count">
            {filtered.length} {t('projectsPage.countPrefix')} «{t(categories.find((c) => c.key === active)?.labelKey || 'projectsPage.filterAll')}»
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="projects-page__grid"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {filtered.map((p) => (
                <motion.div key={p.slug} variants={staggerItem}>
                  <Card
                    image={p.image}
                    badge={t(p.categoryKey)}
                    title={t(p.titleKey)}
                    description={t(p.descKey)}
                    meta={<span>{p.tags.join(' · ')}</span>}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="projects-page__empty">
              <h3>{t('projectsPage.empty')}</h3>
              <p>{t('projectsPage.emptyDesc')}</p>
            </div>
          )}
        </Container>
      </section>

      <CTA />
    </>
  );
}