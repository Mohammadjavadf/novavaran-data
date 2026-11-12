import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../../utils/animations';

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',   // center | start
  light = false,      // for dark backgrounds
}) {
  return (
    <motion.div
      className={`section-title section-title--${align} ${light ? 'section-title--light' : ''}`.trim()}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__title">{title}</h2>
      {description && <p className="section-title__desc">{description}</p>}
    </motion.div>
  );
}