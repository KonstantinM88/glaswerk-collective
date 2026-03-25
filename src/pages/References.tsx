import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import AnimatedSection from '@/components/shared/AnimatedSection';

import serviceFacades from '@/assets/service-facades.jpg';
import serviceTerrace from '@/assets/service-terrace.jpg';
import serviceAllglass from '@/assets/service-allglass.jpg';
import serviceWindows from '@/assets/service-windows.jpg';
import serviceIndustrial from '@/assets/service-industrial.jpg';
import serviceMirrors from '@/assets/service-mirrors.jpg';

const projectsData = [
  { image: serviceFacades, catIndex: 2, titleDe: 'Glasfassade Bürokomplex Leipzig-Zentrum', titleEn: 'Glass Facade Office Complex Leipzig Center', descDe: 'Planung und Montage einer 800m² Pfosten-Riegel-Fassade für ein modernes Bürogebäude.', descEn: 'Planning and installation of an 800m² mullion-transom facade for a modern office building.' },
  { image: serviceTerrace, catIndex: 4, titleDe: 'Terrassendach Villa Leipzig-Süd', titleEn: 'Terrace Roof Villa Leipzig South', descDe: 'Maßgefertigtes Glas-Terrassendach mit integrierter LED-Beleuchtung.', descEn: 'Custom glass terrace roof with integrated LED lighting.' },
  { image: serviceAllglass, catIndex: 3, titleDe: 'Ganzglasanlage Kanzlei', titleEn: 'All-Glass System Law Firm', descDe: 'Rahmenlose Glastrennwände für eine Anwaltskanzlei in der Leipziger Innenstadt.', descEn: 'Frameless glass partitions for a law firm in Leipzig city center.' },
  { image: serviceWindows, catIndex: 1, titleDe: 'Fenstersanierung Altbau Connewitz', titleEn: 'Window Renovation Altbau Connewitz', descDe: 'Austausch von 24 Holzfenstern mit Dreifachverglasung in einem denkmalgeschützten Gebäude.', descEn: 'Replacement of 24 wooden windows with triple glazing in a listed building.' },
  { image: serviceIndustrial, catIndex: 5, titleDe: 'Hallenverglasung Industriepark', titleEn: 'Factory Hall Glazing Industrial Park', descDe: 'Großflächige Industrieverglasung mit Sicherheitsglas für eine Produktionshalle.', descEn: 'Large-scale industrial glazing with safety glass for a production hall.' },
  { image: serviceMirrors, catIndex: 1, titleDe: 'Panoramafenster Penthouse', titleEn: 'Panoramic Windows Penthouse', descDe: 'Bodentiefe Aluminiumfenster für ein Penthouse mit Blick über Leipzig.', descEn: 'Floor-to-ceiling aluminum windows for a penthouse overlooking Leipzig.' },
];

const References = () => {
  const { t, locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);

  const filteredProjects = activeCategory === 0
    ? projectsData
    : projectsData.filter(p => p.catIndex === activeCategory);

  return (
    <Layout>
      <Helmet>
        <title>{locale === 'de' ? 'Referenzen | Glaserei Schubert Leipzig' : 'References | Glaserei Schubert Leipzig'}</title>
        <meta name="description" content={locale === 'de'
          ? 'Referenzprojekte von Glaserei Schubert in Leipzig – Glasfassaden, Fenster, Ganzglasanlagen und Terrassendächer.'
          : 'Reference projects by Glaserei Schubert in Leipzig – glass facades, windows, all-glass systems and terrace roofs.'
        } />
      </Helmet>

      <section className="py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t.references.label}</span>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4">{t.references.title}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.references.subtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {t.references.categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeCategory === i
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="group bg-card rounded-lg overflow-hidden shadow-card">
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
                      {t.references.categories[proj.catIndex]}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground mt-1 mb-2">
                      {locale === 'de' ? proj.titleDe : proj.titleEn}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {locale === 'de' ? proj.descDe : proj.descEn}
                    </p>
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

export default References;
