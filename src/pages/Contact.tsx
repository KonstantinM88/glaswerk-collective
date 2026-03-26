import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { t, locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <Helmet>
        <title>{locale === 'de' ? 'Kontakt | Glaserei Schubert Leipzig' : 'Contact | Glaserei Schubert Leipzig'}</title>
        <meta name="description" content={locale === 'de'
          ? 'Kontaktieren Sie Glaserei Schubert in Leipzig. Angebot anfragen, Beratung vereinbaren – Portitzer Allee 10b, 04329 Leipzig.'
          : 'Contact Glaserei Schubert in Leipzig. Request a quote, schedule consultation – Portitzer Allee 10b, 04329 Leipzig.'
        } />
      </Helmet>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <picture>
            <source media="(min-width: 768px)" srcSet="/Pictures/lobby_1600.webp" />
            <img
              src="/Pictures/lobby_800.webp"
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
          <AnimatedSection className="mx-auto max-w-4xl text-center mb-14">
            <div className="rounded-[28px] border border-white/28 bg-white/14 px-5 py-8 shadow-[0_22px_70px_rgba(15,23,42,0.18)] backdrop-blur-lg sm:px-8 lg:px-12">
              <span className="text-slate-800 text-sm font-bold uppercase tracking-[0.24em]">
                {t.contact.label}
              </span>
              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-slate-950 mt-3 mb-5 mx-auto [text-shadow:0_1px_0_rgba(255,255,255,0.35)]">
                {t.contact.title}
              </h1>
              <p className="text-slate-900/90 text-lg font-medium max-w-2xl mx-auto">
                {t.contact.subtitle}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div className="bg-muted rounded-lg p-10 text-center">
                    <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                    <p className="font-heading text-xl font-semibold text-foreground">{t.contact.formSuccess}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.formName}</label>
                        <input type="text" required className="w-full bg-muted border border-border rounded-md px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.formEmail}</label>
                        <input type="email" required className="w-full bg-muted border border-border rounded-md px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.formPhone}</label>
                        <input type="tel" className="w-full bg-muted border border-border rounded-md px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.formService}</label>
                        <select className="w-full bg-muted border border-border rounded-md px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50">
                          <option value="">{t.contact.selectService}</option>
                          {t.services.items.map(item => (
                            <option key={item.slug} value={item.slug}>{item.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.formMessage}</label>
                      <textarea required rows={5} className="w-full bg-muted border border-border rounded-md px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none" />
                    </div>
                    <button
                      type="submit"
                      className="bg-accent text-accent-foreground px-6 py-3 font-medium rounded-md hover:bg-accent/90 transition-colors inline-flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {t.contact.formSubmit}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <div className="bg-primary rounded-lg p-8 text-primary-foreground mb-6">
                  <h3 className="font-heading font-semibold text-lg mb-5">Glaserei Schubert</h3>
                  <div className="space-y-4 text-sm text-primary-foreground/80">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-steel-blue-light" />
                      <div>
                        <p>Portitzer Allee 10b</p>
                        <p>04329 Leipzig</p>
                        <p>Germany</p>
                      </div>
                    </div>
                    <a href="tel:03412412262" className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
                      <Phone className="w-4 h-4 shrink-0 text-steel-blue-light" />
                      0341 2412262
                    </a>
                    <a href="mailto:info@glaserei-schubert.de" className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
                      <Mail className="w-4 h-4 shrink-0 text-steel-blue-light" />
                      info@glaserei-schubert.de
                    </a>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{t.contact.serviceArea}</h3>
                  <p className="text-muted-foreground text-sm">{t.contact.serviceAreaText}</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
