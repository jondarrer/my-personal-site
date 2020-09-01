import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, MenuButton, NavLink } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

import LanguageSwitcher from '../language-switcher';
import ColourModeSwitcher from '../colour-mode-switcher';
import MenuLink from '../menu-link';
import SlideOutMenu from '../slide-out-menu';

import SunIcon from '../../images/sun.svg';
import MoonIcon from '../../images/moon.svg';

/**
 * Props for the Navbar type
 *
 * @typedef {object} Props
 * @property {string} variant The theme to apply to the links
 */

const Navbar = ({ variant }) => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const routes = [
    {
      to: t('routes:/', { lng: currentLanguage }),
      text: t('nav-bar:home', { lng: currentLanguage }),
    },
    {
      to: t('routes:/blog', { lng: currentLanguage }),
      text: t('nav-bar:blog', { lng: currentLanguage }),
    },
  ];

  return (
    <Flex
      sx={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      px={['0', null, '2', '0']}
    >
      <Box sx={{ lineHeight: '24px' }}>
        <MenuButton
          aria-label={t('nav-bar:menu-toggle', { lng: currentLanguage })}
          sx={{
            color: 'chromeText',
            display: ['inline-flex', null, 'none'],
            marginTop: '6px',
            zIndex: 3,
          }}
          onClick={() => setOpen(!open)}
        />
        <SlideOutMenu
          open={open}
          setOpen={setOpen}
          routes={routes}
          sxp={{ color: open ? 'primary' : 'background' }}
        />
        <NavLink
          as={Link}
          to={t('routes:/', { lng: currentLanguage })}
          variant={variant}
          sx={{
            fontSize: ['3', '4'],
            verticalAlign: ['super', null, 'text-bottom'],
            pl: '1',
          }}
        >
          {t('nav-bar:business-name', { lng: currentLanguage })}
        </NavLink>
      </Box>
      <Box sx={{ lineHeight: '24px' }}>
        <Box sx={{ display: ['none', null, 'inline-block'] }}>
          {routes.map((route, index) => (
            <MenuLink
              to={route.to}
              key={index}
              p={2}
              onClick={() => setOpen(!open)}
              variant="links.header"
              sxp={{ fontSize: '3' }}
            >
              {route.text}
            </MenuLink>
          ))}
        </Box>
        <Box sx={{ display: 'inline-block' }} mr="2" ml="2">
          <LanguageSwitcher variant={variant} />
        </Box>
        <ColourModeSwitcher
          colourModes={[
            { name: 'light', image: SunIcon },
            { name: 'dark', image: MoonIcon },
          ]}
          variant={variant}
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
