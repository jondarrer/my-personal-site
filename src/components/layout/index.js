/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import { Box, jsx } from 'theme-ui';

import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main" pt={['44px', null, '52px', 0]}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
