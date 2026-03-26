import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const serviceLinks = t.services.items.slice(0, 6).map(item => ({
    to: `/leistungen/${item.slug}`,
    label: item.title,
  }));

  const companyLinks = [
    { to: '/ueber-uns', label: t.nav.about },
    { to: '/referenzen', label: t.nav.references },
    { to: '/faq', label: t.nav.faq },
    { to: '/kontakt', label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="font-heading text-accent-foreground text-sm font-bold">GS</span>
              </div>
              <span className="font-heading font-semibold text-lg">{t.footer.company}</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{t.footer.address}</span>
              </div>
              <a href="tel:03412412262" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                <span>{t.footer.phone}</span>
              </a>
              <a href="mailto:info@glaserei-schubert.de" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                <span>{t.footer.email}</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">{t.footer.servicesTitle}</h4>
            <div className="flex flex-col gap-2">
              {serviceLinks.map(link => (
                <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">{t.footer.companyTitle}</h4>
            <div className="flex flex-col gap-2">
              {companyLinks.map(link => (
                <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">{t.footer.contactTitle}</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              {t.ctaSection.subtitle}
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-accent text-accent-foreground px-5 py-2.5 text-sm font-medium rounded-md hover:bg-accent/90 transition-colors"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/50">
            {`© ${currentYear} ${t.footer.company}. ${t.footer.rights}`}
          </p>
          <div className="flex items-center gap-4 text-xs text-primary-foreground/50">
            <Link to="/datenschutz" className="hover:text-primary-foreground/70 transition-colors">{t.footer.privacy}</Link>
            <Link to="/impressum" className="hover:text-primary-foreground/70 transition-colors">{t.footer.imprint}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
