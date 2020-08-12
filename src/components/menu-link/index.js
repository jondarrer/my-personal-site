/** @jsx jsx */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, NavLink, jsx } from 'theme-ui';

const MenuLink = ({ to, children, sxp, ...rest }) => {
  const location = useLocation();

  return location.pathname === to ? (
    <Box as="span" sx={{ textDecoration: 'underline', ...sxp }} {...rest}>
      {children}
    </Box>
  ) : (
    <NavLink as={Link} to={to} sx={sxp} {...rest}>
      {children}
    </NavLink>
  );
};

export default MenuLink;
