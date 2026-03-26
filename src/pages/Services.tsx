import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { ArrowRight } from 'lucide-react';

import serviceWindows from '@/assets/service-windows.jpg';
import serviceFacades from '@/assets/service-facades.jpg';
import serviceAllglass from '@/assets/service-allglass.jpg';
import serviceRepair from '@/assets/service-repair.jpg';
import serviceMirrors from '@/assets/service-mirrors.jpg';
import serviceTerrace from '@/assets/service-terrace.jpg';
import serviceIndustrial from '@/assets/service-industrial.jpg';
import serviceProcessing from '@/assets/service-processing.jpg';

const serviceImages = [
  serviceWindows, serviceFacades, serviceAllglass, serviceRepair,
  serviceMirrors, serviceTerrace, serviceIndustrial, serviceProcessing,
];

const Services = () => {
  const { t, locale } = useLanguage();

  return (
    <Layout>
      <Helmet>
        <title>{locale === 'de' ? 'Leistungen | Glaserei Schubert Leipzig' : 'Services | Glaserei Schubert Leipzig'}</title>
        <meta name="description" content={locale === 'de'
          ? 'Unsere Leistungen: Fenster, Türen, Glasfassaden, Ganzglasanlagen, Spiegel, Terrassendächer, Industrieverglasung und Glasbearbeitung in Leipzig.'
          : 'Our services: windows, doors, glass facades, all-glass systems, mirrors, terrace roofs, industrial glazing and glass processing in Leipzig.'
        } />
      </Helmet>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <picture>
            <source media="(min-width: 768px)" srcSet="/Pictures/building_1600.webp" />
            <img
              src="/Pictures/building_800.webp"
              alt=""
              aria-hidden="true"
              width={1600}
              height={900}
              className="h-full w-full object-cover brightness-95 contrast-125 saturate-150"
            />
          </picture>
          <div className="absolute inset-0 bg-foreground/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-foreground/20 to-foreground/45" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-4xl text-center mb-14">
            <div className="rounded-[28px] border border-white/28 bg-white/14 px-5 py-8 shadow-[0_22px_70px_rgba(15,23,42,0.18)] backdrop-blur-lg sm:px-8 lg:px-12">
              <span className="text-slate-800 text-sm font-bold uppercase tracking-[0.24em]">
                {t.services.label}
              </span>
              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-slate-950 mt-3 mb-5 mx-auto [text-shadow:0_1px_0_rgba(255,255,255,0.35)]">
                {t.services.title}
              </h1>
              <p className="text-slate-900/90 text-lg font-medium max-w-2xl mx-auto">
                {t.services.subtitle}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {t.services.items.map((item, i) => (
              <AnimatedSection key={item.slug}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                  <div className="lg:[direction:ltr]">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <img src={serviceImages[i]} alt={item.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="lg:[direction:ltr]">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">{item.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                    <Link
                      to={`/leistungen/${item.slug}`}
                      className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                    >
                      {locale === 'de' ? 'Mehr erfahren' : 'Learn more'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
