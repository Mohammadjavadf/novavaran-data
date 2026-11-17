import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import SafeImage from '../../components/common/SafeImage/SafeImage';
import CTA from '../../components/sections/CTA/CTA';
import { blogPosts } from '../../data/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container>
        <div className="blog-not-found">
          <h1>{t('blogPost.notFound')}</h1>
          <p>{t('blogPost.notFoundDesc')}</p>
          <Button to="/blog" variant="primary" size="md">
            {t('blogPost.backToBlog')}
          </Button>
        </div>
      </Container>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="blog-post">
        <Container>
          <div className="blog-post__layout">
            <article className="blog-post__main">
              <Link to="/blog" className="blog-post__back">
                <ArrowRight size={16} />
                {t('blogPost.back')}
              </Link>

              <div className="blog-post__cover">
                <SafeImage src={post.image} alt={t(post.titleKey)} fallbackText={t(post.titleKey)} />
              </div>

              <div className="blog-post__meta-top">
                <span><User size={14} /> {t(post.authorKey)}</span>
                <span><Calendar size={14} /> {t(post.dateKey)}</span>
                <span><Clock size={14} /> {t(post.readTimeKey)}</span>
              </div>

              <h1 className="blog-post__title">{t(post.titleKey)}</h1>

              <div className="blog-post__content">
                {post.contentKeys.map((key, i) => {
                  const type = post.contentTypes[i];
                  if (type === 'h2') return <h2 key={i}>{t(key)}</h2>;
                  if (type === 'quote') return <blockquote key={i}>{t(key)}</blockquote>;
                  return <p key={i}>{t(key)}</p>;
                })}
              </div>

              <div className="blog-post__author-box">
                <SafeImage
                  src={`https://i.pravatar.cc/120?u=${post.slug}`}
                  alt={t(post.authorKey)}
                  className="blog-post__author-avatar"
                  fallbackText={t(post.authorKey).charAt(0)}
                />
                <div className="blog-post__author-info">
                  <strong>{t(post.authorKey)}</strong>
                  <span>{t('blogPost.authorRole')}</span>
                </div>
              </div>
            </article>

            <aside className="blog-post__sidebar">
              <div className="blog-post__sidebar-card">
                <h4 className="blog-post__sidebar-title">{t('blogPost.related')}</h4>
                <div className="blog-post__related-list">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/blog/${r.slug}`}>
                      <SafeImage src={r.image} alt={t(r.titleKey)} className="blog-post__related-thumb" fallbackText="" />
                      <div className="blog-post__related-info">
                        <h4>{t(r.titleKey)}</h4>
                        <span>{t(r.readTimeKey)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}