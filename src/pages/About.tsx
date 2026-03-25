import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import AnimatedSection from '@/components/shared/AnimatedSection';
import heroImage from '@/assets/hero-facade.jpg';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const { t, locale } = useLanguage();

  return (
    <Layout>
      <Helmet>
        <title>{locale === 'de' ? 'Über uns | Glaserei Schubert Leipzig' : 'About Us | Glaserei Schubert Leipzig'}</title>
        <meta name="description" content={locale === 'de'
          ? 'Glaserei Schubert Leipzig – erfahrener Fachbetrieb für Glas, Fenster und Fassaden. Qualität, Präzision und persönliche Beratung.'
          : 'Glaserei Schubert Leipzig – experienced specialist for glass, windows and facades. Quality, precision and personal consultation.'
        } />
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="text-steel-blue-light text-sm font-semibold uppercase tracking-wider">{t.about.label}</span>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-background mt-2 mb-4 max-w-3xl">{t.about.title}</h1>
            <p className="text-background/70 text-lg max-w-2xl">{t.about.intro}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.about.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.about.p2}</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {t.about.values.map((val, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-muted rounded-lg p-5">
                    <CheckCircle className="w-5 h-5 text-accent mb-3" />
                    <h3 className="font-heading font-semibold text-foreground mb-1">{val.title}</h3>
                    <p className="text-muted-foreground text-sm">{val.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
