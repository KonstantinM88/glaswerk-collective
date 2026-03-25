import { Link } from 'react-router-dom';
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

const ServiceGrid = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t.services.label}</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.items.map((item, i) => (
            <AnimatedSection key={item.slug} delay={i * 0.05}>
              <Link
                to={`/leistungen/${item.slug}`}
                className="group block bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={serviceImages[i]}
                    alt={item.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                  <span className="text-accent text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t.servicePages?.ctaButton?.split(' ').slice(-2).join(' ') || 'Mehr erfahren'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
