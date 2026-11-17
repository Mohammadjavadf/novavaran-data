import {
  Code2,
  Cloud,
  ShieldCheck,
  BarChart3,
  Smartphone,
  Database,
  Users,
  Briefcase,
  BookOpen,
  Mail,
  Home,
} from 'lucide-react';

export const mainNav = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.about', to: '/about' },
  {
    labelKey: 'nav.services',
    to: '/services',
    megaMenu: {
      titleKey: 'megaMenu.title',
      descKey: 'megaMenu.desc',
      items: [
        {
          icon: Code2,
          titleKey: 'serviceItems.software.title',
          descKey: 'serviceItems.software.short',
          to: '/services/software-development',
        },
        {
          icon: Cloud,
          titleKey: 'serviceItems.cloud.title',
          descKey: 'serviceItems.cloud.short',
          to: '/services/cloud',
        },
        {
          icon: ShieldCheck,
          titleKey: 'serviceItems.security.title',
          descKey: 'serviceItems.security.short',
          to: '/services/security',
        },
        {
          icon: BarChart3,
          titleKey: 'serviceItems.data.title',
          descKey: 'serviceItems.data.short',
          to: '/services/data',
        },
        {
          icon: Smartphone,
          titleKey: 'serviceItems.mobile.title',
          descKey: 'serviceItems.mobile.short',
          to: '/services/mobile',
        },
        {
          icon: Database,
          titleKey: 'serviceItems.devops.title',
          descKey: 'serviceItems.devops.short',
          to: '/services/devops',
        },
      ],
    },
  },
  { labelKey: 'nav.projects', to: '/projects' },
  { labelKey: 'nav.team', to: '/team' },
  { labelKey: 'nav.blog', to: '/blog' },
  { labelKey: 'nav.contact', to: '/contact' },
];

export const mobileQuickLinks = [
  { icon: Users, labelKey: 'nav.team', to: '/team' },
  { icon: Briefcase, labelKey: 'nav.projects', to: '/projects' },
  { icon: BookOpen, labelKey: 'nav.blog', to: '/blog' },
  { icon: Mail, labelKey: 'nav.contact', to: '/contact' },
  { icon: Home, labelKey: 'nav.home', to: '/' },
];