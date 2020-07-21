import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Link as ThemeUILink } from 'theme-ui';
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
  const location = useLocation();

  return (
    <Box>
      {availableLanguages.map((language, index) => {
        return language === currentLanguage ? (
          <Box as="span" key={index} />
        ) : (
          <ThemeUILink
            as={Link}
            key={index}
            to={t(`routes:${location.pathname}`, { lng: language })}
          >
            {t(`language-switcher:${language}`, { lng: language })}
          </ThemeUILink>
        );
      })}
    </Box>
  );
};

export default LanguageSwitcher;
