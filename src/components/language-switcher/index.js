import React from 'react';
import { Box } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

/**
 * @typedef {object} Props
 * @property {Array<string>} languages All the available languages to choose from
 */

/**
 * Provides a way to change from the current language to another one from the provided list
 *
 * @type {React.FC<Props>}
 */
const LanguageSwitcher = ({ languages }) => {
  const lng = useLanguage();
  const { t } = useTranslation();

  return (
    <Box>
      {languages.map((language, index) => {
        return language === lng ? (
          <Box as="span" key={index} />
        ) : (
          <Box as="span" key={index}>
            {t(`language-switcher:${language}`, { lng })}
          </Box>
        );
      })}
    </Box>
  );
};

export default LanguageSwitcher;
