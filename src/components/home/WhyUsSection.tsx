import { useLanguage } from '@/i18n/LanguageContext';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { CheckCircle, Target, Gem, Package, CalendarCheck, MapPin } from 'lucide-react';

const icons = [CheckCircle, Target, Gem, Package, CalendarCheck, MapPin];

const WhyUsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t.whyUs.label}</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-2">{t.whyUs.title}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-card rounded-lg p-6 shadow-card h-full">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
