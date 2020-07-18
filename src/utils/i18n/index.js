import i18n from 'i18next/dist/cjs/i18next';
import { initReactI18next } from 'react-i18next';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        'home-page': {
          hello: 'Hello!',
        },
      },
      ro: {
        'home-page': {
          hello: 'Buna!',
        },
      },
    },
  });

export default i18n;
