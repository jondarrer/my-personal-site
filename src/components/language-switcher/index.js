import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink, Text } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

/**
 * Props for the BlogPost type
 *
 * @typedef {object} Props
 * @property {string} variant The theme to apply to the links
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
            aria-label={t(`language-switcher:${language}`, { lng: language })}
            title={t(`language-switcher:${language}`, { lng: language })}
            sxp={{ fontSize: '3' }}
          >
            <Text variant="text.icon">
              {t(`language-switcher:${language}-icon`, { lng: language })}
            </Text>
          </NavLink>
        );
      })}
    </>
  );
};

export default LanguageSwitcher;
