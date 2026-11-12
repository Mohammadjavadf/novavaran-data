// Fade up - for sections & cards
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fade in - for simple elements
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Slide from side (rtl-aware: positive x = from right visually left)
export const slideIn = (from = 'left') => ({
  hidden: { opacity: 0, x: from === 'left' ? -32 : 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

// Stagger container for lists
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// Item for stagger children
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Viewport config (used with whileInView)
export const viewportOnce = { once: true, margin: '-80px' };

// Hover lift for cards
export const hoverLift = {
  y: -6,
  transition: { duration: 0.25, ease: 'easeOut' },
};