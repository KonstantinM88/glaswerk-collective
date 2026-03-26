import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';

const Privacy = () => {
  const { locale } = useLanguage();

  const content = locale === 'de'
    ? {
        title: 'Datenschutz',
        intro: 'Die Datenschutzhinweise für diese Website werden derzeit aktualisiert. Bei Fragen zur Verarbeitung personenbezogener Daten kontaktieren Sie uns bitte direkt.',
        contactTitle: 'Kontakt',
        noteTitle: 'Hinweis',
        note: 'Die vollständige Datenschutzerklärung wird aktuell ergänzt. Bis zur Veröffentlichung erhalten Sie Auskunft gerne per E-Mail oder telefonisch.',
        metaTitle: 'Datenschutz | Glaserei Schubert Leipzig',
        metaDescription: 'Informationen zum Datenschutz bei Glaserei Schubert in Leipzig.',
      }
    : {
        title: 'Privacy Policy',
        intro: 'The privacy information for this website is currently being updated. If you have questions about the processing of personal data, please contact us directly.',
        contactTitle: 'Contact',
        noteTitle: 'Note',
        note: 'The full privacy policy is currently being finalized. Until it is published, we are happy to provide information by email or phone.',
        metaTitle: 'Privacy Policy | Glaserei Schubert Leipzig',
        metaDescription: 'Privacy information for Glaserei Schubert in Leipzig.',
      };

  return (
    <Layout>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      <section className="py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">{content.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{content.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-8">
            <div className="bg-muted rounded-lg p-6">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">{content.contactTitle}</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Glaserei Schubert</p>
                <p>Portitzer Allee 10b, 04329 Leipzig</p>
                <p>
                  <a href="tel:03412412262" className="hover:text-foreground transition-colors">
                    0341 2412262
                  </a>
                </p>
                <p>
                  <a href="mailto:info@glaserei-schubert.de" className="hover:text-foreground transition-colors">
                    info@glaserei-schubert.de
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">{content.noteTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{content.note}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
