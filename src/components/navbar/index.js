/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, NavLink, jsx } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

import LanguageSwitcher from '../language-switcher';
import ColourModeSwitcher from '../colour-mode-switcher';

/**
 * The site navbar
 *
 * @type {React.FC}
 */
const Navbar = ({ variant }) => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <Flex
      sx={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      px={['0', '0', '2', '0']}
    >
      <NavLink
        as={Link}
        to={t('routes:/', { lng: currentLanguage })}
        variant={variant}
        sx={{ fontSize: ['3', '4'], pl: '1', pb: '1' }}
      >
        {t('nav-bar:business-name', { lng: currentLanguage })}
      </NavLink>
      <Box sx={{ lineHeight: '24px' }}>
        <Box as="span" mr="2">
          <LanguageSwitcher variant={variant} />
        </Box>
        <ColourModeSwitcher colourModes={['light', 'dark']} variant={variant} />
      </Box>
    </Flex>
  );
};

export default Navbar;
