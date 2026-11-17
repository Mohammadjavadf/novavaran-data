export const blogPosts = [
  {
    slug: 'scalable-architecture',
    categoryKey: 'blogCategories.architecture',
    titleKey: 'blogItems.scalable.title',
    excerptKey: 'blogItems.scalable.excerpt',
    authorKey: 'blogItems.scalable.author',
    dateKey: 'blogItems.scalable.date',
    readTimeKey: 'blogItems.scalable.readTime',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    contentKeys: ['p1', 'h1', 'p2', 'h2', 'p3', 'h3', 'p4', 'quote'].map(
      (k) => `blogItems.scalable.content.${k}`
    ),
    contentTypes: ['p', 'h2', 'p', 'h2', 'p', 'h2', 'p', 'quote'],
  },
  {
    slug: 'react-best-practices',
    categoryKey: 'blogCategories.frontend',
    titleKey: 'blogItems.react.title',
    excerptKey: 'blogItems.react.excerpt',
    authorKey: 'blogItems.react.author',
    dateKey: 'blogItems.react.date',
    readTimeKey: 'blogItems.react.readTime',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    contentKeys: ['p1', 'h1', 'p2', 'h2', 'p3', 'h3', 'p4'].map(
      (k) => `blogItems.react.content.${k}`
    ),
    contentTypes: ['p', 'h2', 'p', 'h2', 'p', 'h2', 'p'],
  },
  {
    slug: 'devops-culture',
    categoryKey: 'blogCategories.devops',
    titleKey: 'blogItems.devops.title',
    excerptKey: 'blogItems.devops.excerpt',
    authorKey: 'blogItems.devops.author',
    dateKey: 'blogItems.devops.date',
    readTimeKey: 'blogItems.devops.readTime',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
    contentKeys: ['p1', 'h1', 'p2', 'h2', 'p3'].map(
      (k) => `blogItems.devops.content.${k}`
    ),
    contentTypes: ['p', 'h2', 'p', 'h2', 'p'],
  },
  {
    slug: 'data-driven-decisions',
    categoryKey: 'blogCategories.data',
    titleKey: 'blogItems.data.title',
    excerptKey: 'blogItems.data.excerpt',
    authorKey: 'blogItems.data.author',
    dateKey: 'blogItems.data.date',
    readTimeKey: 'blogItems.data.readTime',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    contentKeys: ['p1', 'h1', 'p2', 'h2', 'p3'].map(
      (k) => `blogItems.data.content.${k}`
    ),
    contentTypes: ['p', 'h2', 'p', 'h2', 'p'],
  },
  {
    slug: 'security-first',
    categoryKey: 'blogCategories.security',
    titleKey: 'blogItems.security.title',
    excerptKey: 'blogItems.security.excerpt',
    authorKey: 'blogItems.security.author',
    dateKey: 'blogItems.security.date',
    readTimeKey: 'blogItems.security.readTime',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    contentKeys: ['p1', 'h1', 'p2', 'h2', 'p3'].map(
      (k) => `blogItems.security.content.${k}`
    ),
    contentTypes: ['p', 'h2', 'p', 'h2', 'p'],
  },
  {
    slug: 'ux-principles',
    categoryKey: 'blogCategories.design',
    titleKey: 'blogItems.ux.title',
    excerptKey: 'blogItems.ux.excerpt',
    authorKey: 'blogItems.ux.author',
    dateKey: 'blogItems.ux.date',
    readTimeKey: 'blogItems.ux.readTime',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80',
    contentKeys: ['p1', 'h1', 'p2', 'h2', 'p3'].map(
      (k) => `blogItems.ux.content.${k}`
    ),
    contentTypes: ['p', 'h2', 'p', 'h2', 'p'],
  },
];

export const blogCategoryKeys = [
  'blogCategories.all',
  'blogCategories.architecture',
  'blogCategories.frontend',
  'blogCategories.devops',
  'blogCategories.data',
  'blogCategories.security',
  'blogCategories.design',
];