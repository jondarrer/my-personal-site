/** @jsx jsx */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, jsx } from 'theme-ui';

import { useLanguage } from '../../contexts';

import MenuLink from '../menu-link';

const SlideOutMenu = ({ open, setOpen, routes, sxp }) => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <Flex
      sx={{
        display: ['flex', null, 'none'],
        flexDirection: 'column',
        bg: 'background',
        height: '100vh',
        px: 3,
        pt: 5,
        pb: 3,
        position: 'absolute',
        top: 0,
        left: 0,
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
        width: ['100%', null, 0],
        ...sxp,
      }}
    >
      {routes.map((route, index) => (
        <MenuLink
          to={t(`routes:${route.to}`, { lng: currentLanguage })}
          key={index}
          p={2}
          onClick={() => setOpen(!open)}
          variant="links.slideOutMenu"
        >
          {t(`routes:${route.text}`, { lng: currentLanguage })}
        </MenuLink>
      ))}
    </Flex>
  );
};

export default SlideOutMenu;
