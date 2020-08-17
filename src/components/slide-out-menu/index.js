import React from 'react';
import { Flex } from 'theme-ui';

import MenuLink from '../menu-link';

/**
 * Props for the SlideOutMenu type
 *
 * @typedef {object} Props
 * @property {boolean} open Whether or not the menu is open
 * @property {function} setOpen Callback to open the menu
 * @property {any} routes List of routes to display in the menu
 * @property {any} sxp Additional styling
 */

const SlideOutMenu = ({ open, setOpen, routes, sxp }) => (
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
        to={route.to}
        key={index}
        p={2}
        onClick={() => setOpen(!open)}
        variant="links.slideOutMenu"
      >
        {route.text}
      </MenuLink>
    ))}
  </Flex>
);

export default SlideOutMenu;
