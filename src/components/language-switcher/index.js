import React from 'react';
import { Box } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

/**
 * Provides a way to change from the current language to another one from the provided list
 *
 * @type {React.FC}
 */
const LanguageSwitcher = () => {
  const { currentLanguage, availableLanguages } = useLanguage();
  const { t } = useTranslation();

  return (
    <Box>
      {availableLanguages.map((language, index) => {
        return language === currentLanguage ? (
          <Box as="span" key={index} />
        ) : (
          <Box as="span" key={index}>
            {t(`language-switcher:${language}`, { lng: currentLanguage })}
          </Box>
        );
      })}
    </Box>
  );
};

export default LanguageSwitcher;
