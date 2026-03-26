import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const { t, locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Layout>
      <Helmet>
        <title>{locale === 'de' ? 'FAQ | Glaserei Schubert Leipzig' : 'FAQ | Glaserei Schubert Leipzig'}</title>
        <meta name="description" content={locale === 'de'
          ? 'Häufige Fragen zu Fenster, Türen, Glasfassaden und Verglasung in Leipzig. Glaserei Schubert beantwortet Ihre Fragen.'
          : 'Frequently asked questions about windows, doors, glass facades and glazing in Leipzig. Glaserei Schubert answers your questions.'
        } />
      </Helmet>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <picture>
            <source media="(min-width: 768px)" srcSet="/Pictures/interior_1600.webp" />
            <img
              src="/Pictures/interior_800.webp"
              alt=""
              aria-hidden="true"
              width={1600}
              height={900}
              className="h-full w-full object-cover brightness-95 contrast-125 saturate-150"
            />
          </picture>
          <div className="absolute inset-0 bg-foreground/18" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/8 via-foreground/18 to-foreground/42" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <div className="rounded-[28px] border border-white/28 bg-white/16 px-5 py-8 shadow-[0_22px_70px_rgba(15,23,42,0.18)] backdrop-blur-lg sm:px-8 lg:px-12">
              <span className="text-slate-800 text-sm font-bold uppercase tracking-[0.24em]">
                {t.faq.label}
              </span>
              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-slate-950 mt-3 mb-5 mx-auto [text-shadow:0_1px_0_rgba(255,255,255,0.35)]">
                {t.faq.title}
              </h1>
              <p className="text-slate-900/90 text-lg font-medium max-w-2xl mx-auto">
                {t.faq.subtitle}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="space-y-3">
            {t.faq.items.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-heading font-semibold text-foreground pr-4">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
