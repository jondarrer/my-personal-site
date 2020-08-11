/** @jsx jsx */
import React from 'react';
import { Container, Flex, jsx } from 'theme-ui';

import Navbar from '../navbar';

const Header = () => (
  <Flex
    as="header"
    sx={{
      position: ['fixed', null, 'relative'],
      alignItems: 'center',
      alignContent: 'center',
      variant: 'styles.header',
      width: '100%',
    }}
  >
    <Container
      sx={{ display: 'flex', maxWidth: '1224px' }}
      px={['2', '2', '3', '4']}
      py={['1', '1', '2', '2']}
    >
      <Navbar variant="links.header" />
    </Container>
  </Flex>
);

export default Header;
