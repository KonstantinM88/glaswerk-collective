import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            {t.ctaSection.title}
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            {t.ctaSection.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/kontakt"
              className="bg-accent text-accent-foreground px-6 py-3 font-medium rounded-md hover:bg-accent/90 transition-colors inline-flex items-center gap-2"
            >
              {t.ctaSection.cta1}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:03412412262"
              className="border border-primary-foreground/30 text-primary-foreground px-6 py-3 font-medium rounded-md hover:bg-primary-foreground/10 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {t.ctaSection.cta2}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
