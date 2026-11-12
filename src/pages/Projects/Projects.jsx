import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/common/Container/Container';
import Card from '../../components/common/Card/Card';
import CTA from '../../components/sections/CTA/CTA';
import { projects } from '../../data/projects';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

const ALL = 'همه';

export default function Projects() {
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return [ALL, ...Array.from(set)];
  }, []);

  const [active, setActive] = useState(ALL);

  const filtered = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <section className="page-hero">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="page-hero__eyebrow">نمونه‌کارها</span>
            <h1 className="page-hero__title">پروژه‌هایی که به آن‌ها افتخار می‌کنیم</h1>
            <p className="page-hero__desc">
              هر پروژه، یک داستان موفقیت است. نمونه‌ای از کارهای ما را ببینید.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="projects-page">
        <Container>
          <div className="projects-page__filters" role="tablist" aria-label="فیلتر دسته‌بندی">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                className={`projects-page__filter ${active === cat ? 'is-active' : ''}`.trim()}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="projects-page__count">
            {filtered.length} پروژه در دسته «{active}»
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
                    badge={p.category}
                    title={p.title}
                    description={p.description}
                    meta={<span>{p.tags.join(' · ')}</span>}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="projects-page__empty">
              <h3>پروژه‌ای در این دسته نیست</h3>
              <p>دسته دیگری را انتخاب کنید.</p>
            </div>
          )}
        </Container>
      </section>

      <CTA />
    </>
  );
}