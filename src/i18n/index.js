import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import it from './locales/it.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import bg from './locales/bg.json';
import pl from './locales/pl.json';
import pt from './locales/pt.json';

export const languages = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'it', label: 'Italian', native: 'Italiano' },
  { code: 'fr', label: 'French', native: 'Français' },
  { code: 'es', label: 'Spanish', native: 'Español' },
  { code: 'bg', label: 'Bulgarian', native: 'Български' },
  { code: 'pl', label: 'Polish', native: 'Polski' },
  { code: 'pt', label: 'Portuguese', native: 'Português' }
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it },
      fr: { translation: fr },
      es: { translation: es },
      bg: { translation: bg },
      pl: { translation: pl },
      pt: { translation: pt }
    },
    fallbackLng: 'en',
    supportedLngs: languages.map((l) => l.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'piramid-lang',
      caches: ['localStorage']
    }
  });

export default i18n;
