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

      <section className="py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t.faq.label}</span>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4">{t.faq.title}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.faq.subtitle}</p>
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
