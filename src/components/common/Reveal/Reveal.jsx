import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../../utils/animations';

export default function Reveal({
  children,
  delay = 0,
  variant = fadeUp,
  as = 'div',
  className = '',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  const variants = {
    ...variant,
    visible: {
      ...variant.visible,
      transition: {
        ...variant.visible.transition,
        delay,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}