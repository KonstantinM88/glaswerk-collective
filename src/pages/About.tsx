import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import AnimatedSection from '@/components/shared/AnimatedSection';
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
      <section className="relative overflow-hidden py-10 sm:py-14 lg:py-0">
        <div className="absolute inset-0">
          <picture>
            <source media="(min-width: 768px)" srcSet="/Pictures/leipzig_1600.webp" />
            <img
              src="/Pictures/leipzig_800.webp"
              alt=""
              aria-hidden="true"
              width={1600}
              height={900}
              className="w-full h-full object-cover object-[78%_center] sm:object-[72%_center] lg:object-center"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/74 via-slate-950/38 to-slate-950/8 lg:from-slate-950/72 lg:via-slate-950/28 lg:to-slate-950/4" />
          <div className="absolute inset-y-0 left-0 w-full lg:w-[54%] bg-gradient-to-r from-slate-950/72 via-slate-950/50 to-transparent lg:from-slate-950/66 lg:via-slate-950/28" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent lg:from-slate-950/34 lg:via-transparent" />
        </div>
        <div className="container relative z-10 mx-auto flex min-h-[22rem] items-end px-4 pb-8 sm:min-h-[28rem] sm:items-end sm:pb-10 lg:min-h-[38rem] lg:items-center lg:px-8 lg:pb-0">
          <AnimatedSection className="w-full max-w-3xl lg:max-w-[44rem]">
            <div className="relative rounded-[28px] border border-white/24 bg-transparent px-5 py-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] backdrop-blur-[2px] sm:max-w-2xl sm:px-7 sm:py-7 lg:max-w-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:backdrop-blur-0">
              <div className="pointer-events-none absolute -inset-x-10 -inset-y-10 hidden rounded-[40px] bg-slate-950/16 blur-3xl lg:block" />
              <div className="relative">
                <span className="text-sky-50 text-xs sm:text-sm font-bold uppercase tracking-[0.28em] [text-shadow:0_3px_14px_rgba(15,23,42,0.55)] lg:text-sky-100">
                  {t.about.label}
                </span>
                <h1 className="font-heading mt-3 mb-4 max-w-[12ch] text-[clamp(2.1rem,6vw,4.5rem)] font-bold leading-[0.95] text-balance text-white drop-shadow-[0_10px_28px_rgba(15,23,42,0.72)] lg:max-w-[14ch] lg:text-[clamp(3.6rem,4.6vw,5.1rem)] lg:leading-[0.92]">
                  {t.about.title}
                </h1>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background py-10 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-5xl">
            <p className="text-xl leading-relaxed text-foreground sm:text-2xl lg:max-w-[56rem] lg:text-[1.6rem] lg:leading-[1.6] lg:text-foreground/92">
              {t.about.intro}
            </p>
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
