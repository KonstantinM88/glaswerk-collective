import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Wrench, Lightbulb, Building2 } from 'lucide-react';
import heroImage from '@/assets/hero-facade.jpg';

const trustIcons = [Shield, Wrench, Lightbulb, Building2];

const HeroSection = () => {
  const { t } = useLanguage();
  const trustItems = [t.hero.trust1, t.hero.trust2, t.hero.trust3, t.hero.trust4];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Moderne Glasfassade in Leipzig"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-0">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-background/80 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <Link
              to="/kontakt"
              className="bg-accent text-accent-foreground px-6 py-3 font-medium rounded-md hover:bg-accent/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              {t.hero.cta1}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/leistungen"
              className="border border-background/30 text-background px-6 py-3 font-medium rounded-md hover:bg-background/10 transition-colors inline-flex items-center justify-center"
            >
              {t.hero.cta2}
            </Link>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {trustItems.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={i} className="flex items-center gap-2.5 bg-background/10 backdrop-blur-sm rounded-md px-3 py-2.5">
                  <Icon className="w-4 h-4 text-steel-blue-light shrink-0" />
                  <span className="text-background/90 text-xs sm:text-sm font-medium">{item}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
