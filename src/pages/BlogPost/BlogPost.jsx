import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import SafeImage from '../../components/common/SafeImage/SafeImage';
import CTA from '../../components/sections/CTA/CTA';
import { blogPosts } from '../../data/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container>
        <div className="blog-not-found">
          <h1>مقاله پیدا نشد</h1>
          <p>مقاله‌ای که دنبالش بودید موجود نیست.</p>
          <Button to="/blog" variant="primary" size="md">
            بازگشت به بلاگ
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
                بازگشت به بلاگ
              </Link>

              <div className="blog-post__cover">
                <SafeImage src={post.image} alt={post.title} fallbackText={post.title} />
              </div>

              <div className="blog-post__meta-top">
                <span><User size={14} /> {post.author}</span>
                <span><Calendar size={14} /> {post.date}</span>
                <span><Clock size={14} /> {post.readTime}</span>
              </div>

              <h1 className="blog-post__title">{post.title}</h1>

              <div className="blog-post__content">
                {post.content.map((block, i) => {
                  if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
                  if (block.type === 'quote') return <blockquote key={i}>{block.text}</blockquote>;
                  return <p key={i}>{block.text}</p>;
                })}
              </div>

              <div className="blog-post__author-box">
                <SafeImage
                  src={`https://i.pravatar.cc/120?u=${post.author}`}
                  alt={post.author}
                  className="blog-post__author-avatar"
                  fallbackText={post.author.charAt(0)}
                />
                <div className="blog-post__author-info">
                  <strong>{post.author}</strong>
                  <span>نویسنده در تیم نوآوران داده</span>
                </div>
              </div>
            </article>

            <aside className="blog-post__sidebar">
              <div className="blog-post__sidebar-card">
                <h4 className="blog-post__sidebar-title">مقالات مرتبط</h4>
                <div className="blog-post__related-list">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/blog/${r.slug}`}>
                      <SafeImage
                        src={r.image}
                        alt={r.title}
                        className="blog-post__related-thumb"
                        fallbackText=""
                      />
                      <div className="blog-post__related-info">
                        <h4>{r.title}</h4>
                        <span>{r.readTime}</span>
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