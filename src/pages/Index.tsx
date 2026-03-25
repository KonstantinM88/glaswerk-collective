import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import ServiceGrid from '@/components/home/ServiceGrid';
import WhyUsSection from '@/components/home/WhyUsSection';
import ProcessSection from '@/components/home/ProcessSection';
import ProjectsTeaser from '@/components/home/ProjectsTeaser';
import CTASection from '@/components/home/CTASection';
import { useLanguage } from '@/i18n/LanguageContext';

const Index = () => {
  const { locale } = useLanguage();

  return (
    <Layout>
      <Helmet>
        <title>{locale === 'de' ? 'Glaserei Schubert Leipzig | Fenster, Türen & Glasfassaden' : 'Glaserei Schubert Leipzig | Windows, Doors & Glass Facades'}</title>
        <meta name="description" content={locale === 'de'
          ? 'Glaserei Schubert – Ihr Fachbetrieb in Leipzig für Fenster, Türen, Glasfassaden, Ganzglasanlagen, Spiegel und Reparaturverglasung. Beratung, Fertigung und Montage.'
          : 'Glaserei Schubert – Your specialist in Leipzig for windows, doors, glass facades, all-glass systems, mirrors and repair glazing.'
        } />
        <html lang={locale} />
      </Helmet>
      <HeroSection />
      <IntroSection />
      <ServiceGrid />
      <WhyUsSection />
      <ProcessSection />
      <ProjectsTeaser />
      <CTASection />
    </Layout>
  );
};

export default Index;
