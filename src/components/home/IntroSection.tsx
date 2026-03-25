import { useLanguage } from '@/i18n/LanguageContext';
import AnimatedSection from '@/components/shared/AnimatedSection';

const IntroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t.intro.label}</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6">{t.intro.title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t.intro.text}</p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default IntroSection;
