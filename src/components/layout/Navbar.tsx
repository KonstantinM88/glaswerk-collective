import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, locale, setLocale } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/ueber-uns', label: t.nav.about },
    { to: '/leistungen', label: t.nav.services },
    { to: '/referenzen', label: t.nav.references },
    { to: '/faq', label: t.nav.faq },
    { to: '/kontakt', label: t.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <span className="font-heading text-accent-foreground text-sm font-bold">GS</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-heading text-foreground font-semibold text-lg tracking-tight">Glaserei Schubert</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                isActive(link.to)
                  ? 'text-accent bg-accent/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center bg-muted rounded-md p-0.5">
            <button
              onClick={() => setLocale('de')}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                locale === 'de'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              DE
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                locale === 'en'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>

          <a href="tel:03412412262" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-3.5 h-3.5" />
            0341 2412262
          </a>

          <Link
            to="/kontakt"
            className="bg-accent text-accent-foreground px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/90 transition-colors"
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="flex items-center bg-muted rounded-md p-0.5">
            <button
              onClick={() => setLocale('de')}
              className={`px-2 py-1 text-xs font-semibold rounded transition-all ${
                locale === 'de' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'
              }`}
            >
              DE
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-2 py-1 text-xs font-semibold rounded transition-all ${
                locale === 'en' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'
              }`}
            >
              EN
            </button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.to)
                      ? 'text-accent bg-accent/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-accent text-accent-foreground px-4 py-2.5 text-sm font-medium rounded-md text-center"
              >
                {t.nav.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
