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

      <section className="py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t.services.label}</span>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4">{t.services.title}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.services.subtitle}</p>
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
