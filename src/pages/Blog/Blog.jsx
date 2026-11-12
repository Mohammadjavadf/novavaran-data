import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/common/Container/Container';
import Card from '../../components/common/Card/Card';
import CTA from '../../components/sections/CTA/CTA';
import { blogPosts, blogCategories } from '../../data/blog';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

const ALL = 'همه';

export default function Blog() {
  const [active, setActive] = useState(ALL);

  const filtered = useMemo(
    () => (active === ALL ? blogPosts : blogPosts.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <section className="page-hero">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="page-hero__eyebrow">بلاگ</span>
            <h1 className="page-hero__title">مقالات فناوری از تیم نوآوران داده</h1>
            <p className="page-hero__desc">
              تجربه‌ها، بینش‌ها و دانش فنی تیم ما در قالب مقالات کاربردی.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="blog-page">
        <Container>
          <div className="blog-page__filters" role="tablist">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                className={`blog-page__filter ${active === cat ? 'is-active' : ''}`.trim()}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="blog-page__grid"
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
                    description={p.excerpt}
                    meta={
                      <>
                        <span>{p.author}</span>
                        <span>·</span>
                        <span>{p.date}</span>
                        <span>·</span>
                        <span>{p.readTime}</span>
                      </>
                    }
                    to={`/blog/${p.slug}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="blog-page__empty">
              <h3>مقاله‌ای در این دسته نیست</h3>
              <p>دسته دیگری را انتخاب کنید.</p>
            </div>
          )}
        </Container>
      </section>

      <CTA />
    </>
  );
}