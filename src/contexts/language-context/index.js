import React from 'react';

/**
 * @typedef {object} LanguageContextValue
 * @property {string} currentLanguage
 * @property {Array<string>} availableLanguages
 */

/**
 * @type {React.Context<LanguageContextValue>}
 */
const LanguageContext = React.createContext({
  currentLanguage: 'en',
  availableLanguages: ['en'],
});

export default LanguageContext;

/**
 * Hook with the current language and available languages.
 *
 * @returns {LanguageContextValue} The language
 */
export const useLanguage = () => React.useContext(LanguageContext);
