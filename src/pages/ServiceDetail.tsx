import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import AnimatedSection from '@/components/shared/AnimatedSection';
import CTASection from '@/components/home/CTASection';
import { CheckCircle, ArrowRight } from 'lucide-react';

import serviceWindows from '@/assets/service-windows.jpg';
import serviceFacades from '@/assets/service-facades.jpg';
import serviceAllglass from '@/assets/service-allglass.jpg';
import serviceRepair from '@/assets/service-repair.jpg';
import serviceMirrors from '@/assets/service-mirrors.jpg';
import serviceTerrace from '@/assets/service-terrace.jpg';
import serviceIndustrial from '@/assets/service-industrial.jpg';
import serviceProcessing from '@/assets/service-processing.jpg';

const imageMap: Record<string, string> = {
  'fenster-tueren': serviceWindows,
  'glasfassaden': serviceFacades,
  'ganzglasanlagen': serviceAllglass,
  'reparaturverglasung': serviceRepair,
  'spiegel': serviceMirrors,
  'terrassendaecher': serviceTerrace,
  'industrieverglasung': serviceIndustrial,
  'glasbearbeitung': serviceProcessing,
};

type ServiceDataKey = 'windowsDoors' | 'glassFacades' | 'allGlass' | 'repairGlazing' | 'mirrors' | 'terraceRoofs' | 'industrialGlazing' | 'glassProcessing';

const slugToDataKey: Record<string, ServiceDataKey> = {
  'fenster-tueren': 'windowsDoors',
  'glasfassaden': 'glassFacades',
  'ganzglasanlagen': 'allGlass',
  'reparaturverglasung': 'repairGlazing',
  'spiegel': 'mirrors',
  'terrassendaecher': 'terraceRoofs',
  'industrieverglasung': 'industrialGlazing',
  'glasbearbeitung': 'glassProcessing',
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, locale } = useLanguage();

  const dataKey = slug ? slugToDataKey[slug] : undefined;
  const serviceData = dataKey ? t[dataKey] : undefined;
  const heroImage = slug ? imageMap[slug] : undefined;

  if (!serviceData || !heroImage) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground">404</h1>
        </div>
      </Layout>
    );
  }

  const data = serviceData as {
    title: string;
    metaTitle: string;
    metaDesc: string;
    intro: string;
    benefits: readonly string[];
    types?: readonly { title: string; desc: string }[];
    faq?: readonly { q: string; a: string }[];
  };

  return (
    <Layout>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDesc} />
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={heroImage} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection>
            <Link to="/leistungen" className="text-steel-blue-light text-sm font-medium hover:underline mb-4 inline-block">
              {t.servicePages.backToServices}
            </Link>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-background mt-2 max-w-3xl">{data.title}</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">{data.intro}</p>
            </AnimatedSection>

            {/* Types (windows/doors only) */}
            {data.types && (
              <AnimatedSection>
                <div className="space-y-4 mb-12">
                  {data.types.map((type, i) => (
                    <div key={i} className="bg-muted rounded-lg p-5">
                      <h3 className="font-heading font-semibold text-foreground mb-1">{type.title}</h3>
                      <p className="text-muted-foreground text-sm">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Benefits */}
            <AnimatedSection>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">{t.servicePages.benefits}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                {data.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* FAQ */}
            {data.faq && data.faq.length > 0 && (
              <AnimatedSection>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">{t.servicePages.faqTitle}</h2>
                <div className="space-y-4 mb-12">
                  {data.faq.map((item, i) => (
                    <div key={i} className="bg-muted rounded-lg p-5">
                      <h3 className="font-heading font-semibold text-foreground mb-2">{item.q}</h3>
                      <p className="text-muted-foreground text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* CTA */}
            <AnimatedSection>
              <div className="bg-primary rounded-lg p-8 text-center">
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">{t.servicePages.ctaTitle}</h3>
                <p className="text-primary-foreground/70 text-sm mb-5">{t.servicePages.ctaText}</p>
                <Link
                  to="/kontakt"
                  className="bg-accent text-accent-foreground px-6 py-3 font-medium rounded-md hover:bg-accent/90 transition-colors inline-flex items-center gap-2"
                >
                  {t.servicePages.ctaButton}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
