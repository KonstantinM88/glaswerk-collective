import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/i18n/LanguageContext';

const Imprint = () => {
  const { locale } = useLanguage();

  const content = locale === 'de'
    ? {
        title: 'Impressum',
        intro: 'Hier finden Sie die wichtigsten Kontaktangaben zur Glaserei Schubert. Weitere rechtliche Angaben werden derzeit aufbereitet und ergänzt.',
        companyTitle: 'Unternehmen',
        noteTitle: 'Hinweis',
        note: 'Die detaillierten Pflichtangaben für diese Seite werden aktuell finalisiert. Bei Rückfragen erreichen Sie uns direkt über die untenstehenden Kontaktdaten.',
        metaTitle: 'Impressum | Glaserei Schubert Leipzig',
        metaDescription: 'Impressum und Kontaktinformationen von Glaserei Schubert in Leipzig.',
      }
    : {
        title: 'Legal Notice',
        intro: 'Here you can find the main contact details for Glaserei Schubert. Additional legal information is currently being prepared and added.',
        companyTitle: 'Company',
        noteTitle: 'Note',
        note: 'The detailed mandatory information for this page is currently being finalized. If you have any questions, please contact us directly using the details below.',
        metaTitle: 'Legal Notice | Glaserei Schubert Leipzig',
        metaDescription: 'Legal notice and contact information for Glaserei Schubert in Leipzig.',
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
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">{content.companyTitle}</h2>
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

export default Imprint;
