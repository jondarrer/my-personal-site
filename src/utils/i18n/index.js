import i18next from 'i18next/dist/cjs/i18next';
import { initReactI18next } from 'react-i18next';

const i18n = i18next
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
        'nav-bar': { 'business-name': 'jondarrer.com' },
        'home-page': {
          hello: 'Hello!',
        },
        'language-switcher': {
          en: 'English',
          'en-icon': 'EN',
          ro: 'Romanian',
          'ro-icon': 'RO',
        },
        footer: {
          'copyright-notice': '© 2020 Jonathan Darrer',
          github: 'https://github.com/jondarrer',
          email: 'jonny@jondarrer.me.uk',
        },
        routes: {
          '/': '/',
          '/ro': '/',
          '/blog': '/blog',
          '/ro/blog': '/blog',
          Home: 'Home',
          Blog: 'Blog',
        },
        'colour-mode-switcher': {
          light: 'Light Mode',
          dark: 'Dark Mode',
        },
      },
      ro: {
        'nav-bar': { 'business-name': 'jondarrer.com' },
        'home-page': {
          hello: 'Buna!',
        },
        'language-switcher': {
          en: 'Engleza',
          'en-icon': 'EN',
          ro: 'Romana',
          'ro-icon': 'RO',
        },
        footer: {
          'copyright-notice': '© 2020 Jonathan Darrer',
          github: 'https://github.com/jondarrer',
          email: 'jonny@jondarrer.me.uk',
        },
        routes: {
          '/': '/ro',
          '/ro': '/ro',
          '/blog': '/ro/blog',
          '/ro/blog': '/ro/blog',
          Home: 'Casa',
          Blog: 'Blogul',
        },
        'colour-mode-switcher': {
          light: 'Mod lumină',
          dark: 'Mod Întunecat',
        },
      },
    },
  });

export default i18n;
