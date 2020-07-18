import React from 'react';

const LanguageContext = React.createContext(/** @type {string} */ 'en');

export default LanguageContext;

/**
 * Returns the current language
 * as an object.
 *
 * @returns {string} The current language
 */
export const useLanguage = () => React.useContext(LanguageContext);
