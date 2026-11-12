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
  { label: 'خانه', to: '/' },
  { label: 'درباره ما', to: '/about' },
  {
    label: 'خدمات',
    to: '/services',
    megaMenu: {
      title: 'خدمات ما',
      description: 'راهکارهای فناوری اطلاعات برای رشد کسب‌وکار شما',
      items: [
        { icon: Code2, title: 'توسعه نرم‌افزار', desc: 'اپلیکیشن‌های سفارشی وب و موبایل', to: '/services/software-development' },
        { icon: Cloud, title: 'رایانش ابری', desc: 'زیرساخت ابری مقیاس‌پذیر و امن', to: '/services/cloud' },
        { icon: ShieldCheck, title: 'امنیت اطلاعات', desc: 'حفاظت از داده‌ها و زیرساخت‌ها', to: '/services/security' },
        { icon: BarChart3, title: 'تحلیل داده', desc: 'داشبورد و بینش داده‌محور', to: '/services/data' },
        { icon: Smartphone, title: 'اپلیکیشن موبایل', desc: 'طراحی و توسعه اپ‌های iOS و اندروید', to: '/services/mobile' },
        { icon: Database, title: 'زیرساخت و DevOps', desc: 'استقرار خودکار و پایداری سیستم', to: '/services/devops' },
      ],
    },
  },
  { label: 'نمونه‌کارها', to: '/projects' },
  { label: 'تیم', to: '/team' },
  { label: 'بلاگ', to: '/blog' },
  { label: 'تماس', to: '/contact' },
];

export const mobileQuickLinks = [
  { icon: Users, label: 'درباره تیم', to: '/team' },
  { icon: Briefcase, label: 'پروژه‌ها', to: '/projects' },
  { icon: BookOpen, label: 'مقالات', to: '/blog' },
  { icon: Mail, label: 'ارتباط', to: '/contact' },
  { icon: Home, label: 'خانه', to: '/' },
];
