import { useLanguage } from '@/i18n/LanguageContext';
import AnimatedSection from '@/components/shared/AnimatedSection';

const ProcessSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t.process.label}</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-2">{t.process.title}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative text-center lg:text-left">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-lg mb-4 mx-auto lg:mx-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
