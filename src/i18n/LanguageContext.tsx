import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Locale } from './translations';

type TranslationType = typeof translations.de;

interface LanguageContextType {
  locale: Locale;
  t: TranslationType;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('de');

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState(prev => {
      const next = prev === 'de' ? 'en' : 'de';
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const t = translations[locale] as TranslationType;

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
