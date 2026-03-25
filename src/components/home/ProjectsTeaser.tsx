import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { ArrowRight } from 'lucide-react';

import serviceFacades from '@/assets/service-facades.jpg';
import serviceTerrace from '@/assets/service-terrace.jpg';
import serviceAllglass from '@/assets/service-allglass.jpg';

const projectItems = [
  { image: serviceFacades, titleDe: 'Glasfassade Bürogebäude', titleEn: 'Office Building Glass Facade', catDe: 'Glasfassaden', catEn: 'Glass Facades' },
  { image: serviceTerrace, titleDe: 'Terrassendach Privathaus', titleEn: 'Private Terrace Roof', catDe: 'Terrassendächer', catEn: 'Terrace Roofs' },
  { image: serviceAllglass, titleDe: 'Ganzglasanlage Konferenzraum', titleEn: 'Conference Room All-Glass', catDe: 'Ganzglas', catEn: 'All-Glass' },
];

const ProjectsTeaser = () => {
  const { t, locale } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t.projects.label}</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">{t.projects.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.projects.subtitle}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {projectItems.map((proj, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group rounded-lg overflow-hidden bg-card shadow-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={proj.image}
                    alt={locale === 'de' ? proj.titleDe : proj.titleEn}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                    {locale === 'de' ? proj.catDe : proj.catEn}
                  </span>
                  <h3 className="font-heading font-semibold text-foreground mt-1">
                    {locale === 'de' ? proj.titleDe : proj.titleEn}
                  </h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/referenzen"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            {t.projects.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTeaser;
