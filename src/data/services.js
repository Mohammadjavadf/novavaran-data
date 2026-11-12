import {
  Code2, Cloud, ShieldCheck, BarChart3, Smartphone, Database,
} from 'lucide-react';

export const services = [
  {
    slug: 'software-development',
    icon: Code2,
    title: 'توسعه نرم‌افزار',
    short: 'اپلیکیشن‌های سفارشی وب و موبایل با معماری مقیاس‌پذیر و کد تمیز.',
    description: 'تیم ما با استفاده از جدیدترین تکنولوژی‌ها، نرم‌افزارهایی می‌سازد که با رشد کسب‌وکار شما هم رشد می‌کنند.',
    features: ['React و Next.js', 'Node.js و Python', 'معماری میکروسرویس', 'تست خودکار'],
  },
  {
    slug: 'cloud',
    icon: Cloud,
    title: 'رایانش ابری',
    short: 'زیرساخت ابری مقیاس‌پذیر، امن و مقرون‌به‌صرفه برای کسب‌وکار شما.',
    description: 'از طراحی تا پیاده‌سازی و مدیریت زیرساخت ابری، همراه شما هستیم.',
    features: ['AWS و Azure', 'Kubernetes', 'CI/CD', 'مانیتورینگ ۲۴/۷'],
  },
  {
    slug: 'security',
    icon: ShieldCheck,
    title: 'امنیت اطلاعات',
    short: 'حفاظت از داده‌ها و زیرساخت‌ها با استانداردهای روز دنیا.',
    description: 'امنیت را از روز اول طراحی، نه به‌عنوان یک وصله، در نظر می‌گیریم.',
    features: ['پنتست', 'رمزنگاری داده', 'مدیریت هویت', 'واکنش به حادثه'],
  },
  {
    slug: 'data',
    icon: BarChart3,
    title: 'تحلیل داده',
    short: 'تبدیل داده‌های خام به بینش‌های ارزشمند و قابل اقدام.',
    description: 'داشبوردهای تعاملی و مدل‌های پیش‌بینی، تصمیم‌گیری شما را هوشمندتر می‌کنند.',
    features: ['داشبورد BI', 'یادگیری ماشین', 'ETL Pipeline', 'گزارش‌های هوشمند'],
  },
  {
    slug: 'mobile',
    icon: Smartphone,
    title: 'اپلیکیشن موبایل',
    short: 'طراحی و توسعه اپ‌های iOS و اندروید با تجربه کاربری بی‌نظیر.',
    description: 'از ایده تا انتشار در استورها، همراه شما هستیم.',
    features: ['React Native', 'Flutter', 'UI/UX حرفه‌ای', 'انتشار در استور'],
  },
  {
    slug: 'devops',
    icon: Database,
    title: 'زیرساخت و DevOps',
    short: 'استقرار خودکار، پایش مداوم و پایداری سیستم‌های شما.',
    description: 'فرهنگ DevOps را در تیم شما نهادینه می‌کنیم تا سرعت انتشار بالا برود.',
    features: ['Docker', 'Terraform', 'GitOps', 'SRE'],
  },
];
