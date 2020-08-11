import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, NavLink } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

/**
 * Provides a way to change from the current language to another one from the provided list
 *
 * @type {React.FC}
 */
const LanguageSwitcher = ({ variant }) => {
  const { currentLanguage, availableLanguages } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      {availableLanguages.map((language, index) => {
        return language === currentLanguage ? null : (
          <NavLink
            as={Link}
            key={index}
            to={t(`routes:${location.pathname}`, { lng: language })}
            variant={variant}
          >
            {t(`language-switcher:${language}`, { lng: language })}
          </NavLink>
        );
      })}
    </>
  );
};

export default LanguageSwitcher;
