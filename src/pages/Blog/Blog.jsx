import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../../components/common/Container/Container';
import Card from '../../components/common/Card/Card';
import CTA from '../../components/sections/CTA/CTA';
import { blogPosts, blogCategoryKeys } from '../../data/blog';
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations';

const ALL_KEY = 'blogCategories.all';

export default function Blog() {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState(ALL_KEY);

  const filtered = useMemo(
    () => (activeKey === ALL_KEY ? blogPosts : blogPosts.filter((p) => p.categoryKey === activeKey)),
    [activeKey]
  );

  return (
    <>
      <section className="page-hero">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="page-hero__eyebrow">{t('blogPage.eyebrow')}</span>
            <h1 className="page-hero__title">{t('blogPage.title')}</h1>
            <p className="page-hero__desc">{t('blogPage.desc')}</p>
          </motion.div>
        </Container>
      </section>

      <section className="blog-page">
        <Container>
          <div className="blog-page__filters" role="tablist">
            {blogCategoryKeys.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeKey === key}
                className={`blog-page__filter ${activeKey === key ? 'is-active' : ''}`.trim()}
                onClick={() => setActiveKey(key)}
              >
                {t(key)}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
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
                    badge={t(p.categoryKey)}
                    title={t(p.titleKey)}
                    description={t(p.excerptKey)}
                    meta={
                      <>
                        <span>{t(p.authorKey)}</span>
                        <span>·</span>
                        <span>{t(p.dateKey)}</span>
                        <span>·</span>
                        <span>{t(p.readTimeKey)}</span>
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
              <h3>{t('blogPage.empty')}</h3>
              <p>{t('blogPage.emptyDesc')}</p>
            </div>
          )}
        </Container>
      </section>

      <CTA />
    </>
  );
}