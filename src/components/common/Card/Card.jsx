import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp, viewportOnce, hoverLift } from '../../../utils/animations';
import SafeImage from '../SafeImage/SafeImage';

export default function Card({
  image,
  title,
  description,
  meta,
  badge,
  to,
  href,
  className = '',
  children,
  hover = true,
}) {
  const Wrapper = to ? Link : href ? 'a' : 'div';
  const wrapperProps = to ? { to } : href ? { href } : {};

  return (
    <motion.div
      className={`card ${className}`.trim()}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={hover ? hoverLift : undefined}
    >
      <Wrapper className="card__inner" {...wrapperProps}>
        {image && (
          <div className="card__media">
            <SafeImage src={image} alt={title} fallbackText={title} />
          </div>
        )}
        <div className="card__body">
          {badge && <span className="card__badge">{badge}</span>}
          {title && <h3 className="card__title">{title}</h3>}
          {description && <p className="card__desc">{description}</p>}
          {meta && <div className="card__meta">{meta}</div>}
          {children}
        </div>
      </Wrapper>
    </motion.div>
  );
}